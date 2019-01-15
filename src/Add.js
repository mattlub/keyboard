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
    e.preventDefault()
    const { handleAdd } = this.props
    const { english, arabic } = this.state
    handleAdd({ english, arabic })
    this.setState(INITIAL_STATE)
  }

  render() {
    const { english, arabic, isArabicInputFocused } = this.state
    return (
      <div className="add-section" >
        <form
          className="add-form"
          onSubmit={e => this.handleFormSubmit(e)}
        >
          <label
            className="add-form__field"
          >
            English:
            <input
              className="add-form__input"
              required
              ref={e => this.englishInputRef = e}
              value={english}
              onChange={e => this.handleEnglishInputChange(e)}
              />
          </label>
          <label
            className="add-form__field"
          >
            Arabic:
            <input
              className="add-form__input"
              required
              direction="rtl"
              value={arabic}
              onChange={e => this.handleArabicInputChange(e)}
              onFocus={() => this.handleArabicInputFocus()}
              onBlur={() => this.handleArabicInputBlur()}
              />
          </label>
          <button
            className="add-form__submit-button"
            type="submit"
          >
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
