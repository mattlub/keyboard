import React, { Component } from 'react'
import './App.css'
import Test from './Test.js'
import Add from './Add.js'
import { words, TABS } from './consts'

const INITIAL_STATE = {
  selectedTab: TABS.add,
  words
}

const TabSelectRadios = ({ selected, handleChange }) => (
  <nav className="nav">
    {Object.keys(TABS).map(tabName => (
      <label
        className={`nav__item ${tabName === selected ? 'nav__item--selected' : ''}`}
        key={tabName}
      >
        {tabName}
        <input
          className='nav__radio'
          type="radio"
          value={tabName}
          checked={selected === tabName}
          onChange={handleChange}
        />
      </label>
    ))}
  </nav>
)

class App extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    this.handleTabChange = this.handleTabChange.bind(this)
  }

  handleTabChange(e) {
    this.setState({
      selectedTab: e.target.value
    })
  }

  handleAdd({ english, arabic }) {
    console.log('adding', english, arabic)
    return 'success'
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
        { selectedTab === TABS.add &&
          <Add handleAdd={this.handleAdd} />
        }
      </div>
    );
  }
}

export default App;
