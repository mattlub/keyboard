import React, { Component } from 'react'
import './normalise.css'
import './App.css'
import TabNavigation from './TabNavigation.js'
import Test from './Test.js'
import Add from './Add.js'
import { words, TABS } from './consts'

const INITIAL_STATE = {
  selectedTab: TABS.test,
  words
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    this.handleTabChange = this.handleTabChange.bind(this)
    this.handleAdd = this.handleAdd.bind(this)
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
    const { selectedTab } = this.state
    if (selectedTab === TABS.test) {
      return <Test />
    }
    else if (selectedTab === TABS.add) {
      return <Add handleAdd={this.handleAdd} />
    }
    throw new Error('invalid selectedTab')
  }

  render() {
    const { selectedTab } = this.state
    return (
      <div className="App">
        <div className="header">
          <TabNavigation
            selected={selectedTab}
            handleChange={this.handleTabChange}
          />
          <div className="total-words">
            Total Words: {this.state.words.length}
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
