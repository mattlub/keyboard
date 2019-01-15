import React, { Component } from 'react'
import './App.css'
import Test from './Test.js'
import { words } from './consts'

const TABS = {
  test: 'test',
  add: 'add'
}

const TabSelectRadios = ({ selected, handleChange }) => (
  Object.keys(TABS).map(tabName => (
    <label>
      {tabName}
      <input
        type="radio"
        value={tabName}
        checked={selected === tabName}
        onChange={handleChange}
      />
    </label>
  ))
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedTab: TABS.test,
      words
    }
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange(e) {
    this.setState({
      selectedTab: e.target.value
    })
  }

  render() {
    const { selectedTab } = this.state
    return (
      <div className="App">
        <TabSelectRadios
          selected={selectedTab}
          handleChange={this.handleTabChange}
        />
        { selectedTab === TABS.test && 
          <Test />
        }
      </div>
    );
  }
}

export default App;
