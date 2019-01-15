import React, { Component } from 'react'
import './App.css'
import TabNavigation from './TabNavigation.js'
import Test from './Test.js'
import Add from './Add.js'
import Help from './Help.js'
import { defaultWords, TABS } from '../consts.js'
import { getWords, setWords } from '../localStorage.js'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: TABS.test,
      words: getWords() || defaultWords
    }
    this.handleTabChange = this.handleTabChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
  }

  componentDidMount() {
    setWords(this.state.words)
  }

  componentDidUpdate(prevProps, prevState) {
    // only need to do if words have changed
    setWords(this.state.words)
  }

  handleTabChange(newTab) {
    this.setState({
      selectedTab: newTab
    })
  }

  handleAdd({ english, arabic }) {
    // console.log('adding new card:', english, arabic)
    const newWord = {
      en: english,
      ar: arabic
    }
    this.setState(prevState => ({
      words: prevState.words.concat(newWord)
    }))
  }

  renderContent() {
    const { selectedTab, words } = this.state
    if (selectedTab === TABS.test) {
      return <Test words={words}/>
    }
    else if (selectedTab === TABS.add) {
      return <Add handleAdd={this.handleAdd} />
    }
    else if (selectedTab === TABS.help) {
      return <Help />
    }
    throw new Error('invalid selectedTab')
  }

  render() {
    const { selectedTab } = this.state
    return (
      <div className="App">
        <div className="header">
          <div className="header-content">
            <div className="tools">
              <button
                onClick={() => this.handleTabChange(TABS.help)}
                className="help-button">
                ?
              </button>
            </div>
            <TabNavigation
              selected={selectedTab}
              handleChange={this.handleTabChange}
            />
            <div className="total-words">
              Total Words: {this.state.words.length}
            </div>
          </div>
        </div>
        <div className="content">
          {this.renderContent()}
        </div>
      </div>
    );
  }
}

export default App;
