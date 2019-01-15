import React, { Component } from 'react';
import './Add.css';
import Keyboard from './Keyboard.js'
import { toArabic } from './utils';

const INITIAL_STATE = {
  english: '',
  arabic: '',
  isArabicInputFocused: false
}

class Add extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
    this.englishInputRef = null
  }

  handleArabicInputFocus(){
    this.setState({
      isArabicInputFocused: true
    })
  }

  handleArabicInputBlur() {
    this.setState({
      isArabicInputFocused: false
    })
  }

  handleEnglishInputChange(e) {
    this.setState({
      english: e.target.value
    })
  }

  handleArabicInputChange(e) {
    const inputInArabic = toArabic(e.target.value)
    this.setState({
      arabic: inputInArabic
    })
  }

  handleFormSubmit(e) {
    const { handleAdd } = this.props
    const { english, arabic } = this.state
    e.preventDefault()
    const res = handleAdd({ english, arabic })
    if (res === 'success') {
      this.setState(INITIAL_STATE)
    }
  }

  render() {
    const { english, arabic, isArabicInputFocused } = this.state
    return (
      <div className="add-section" >
        <form onSubmit={e => this.handleFormSubmit(e)}>
          <label>
            English:
            <input
              required
              ref={e => this.englishInputRef = e}
              value={english}
              onChange={e => this.handleEnglishInputChange(e)}
              />
          </label>
          <label>
            Arabic:
            <input
              required
              direction="rtl"
              value={arabic}
              onChange={e => this.handleArabicInputChange(e)}
              onFocus={() => this.handleArabicInputFocus()}
              onBlur={() => this.handleArabicInputBlur()}
              />
          </label>
          <button type="submit">
            Add!
          </button>
          { isArabicInputFocused &&
            <Keyboard />
          }
        </form>
      </div>
    );
  }
}

export default Add
