import React, { Component } from 'react'

import Key from './Key'
import { keys } from './consts'

import './Keyboard.css'

class Keyboard extends Component {
  constructor(props) {
    super(props)
    // contains refs for each keyboard key
    this.keyRefs = {}

    // stores the ref for each key
    this.setRef = char => element => {
      this.keyRefs[char] = element
    }

    this.keypressListener = this.keypressListener.bind(this)
    this.keyupListener = this.keyupListener.bind(this)
  }

  keypressListener(e) {
    const key = e.key
    // add the light class then remove it, to make the key flash
    if (this.keyRefs[key]) {
      this.keyRefs[key].classList.add('light')
    }
  }

  keyupListener(e) {
    // BUG: keyup for the letter is not fired if a special key is pressed
    const key = e.key
    if (this.keyRefs[key]) {
      this.keyRefs[key].classList.remove('light')
    }
  }

  componentDidMount() {
    document.addEventListener('keypress', this.keypressListener)
    document.addEventListener('keyup', this.keyupListener)
  }

  componentWillUnmount() {
    document.removeEventListener('keypress', this.keypressListener)
    document.removeEventListener('keyup', this.keyupListener)
  }

  renderKey(key) {
    return (
      <Key character={key} key={key} ref={this.setRef(key)} />
    )
  }

  render() {
    return (
      <div className="container">
        <div className="keyboard">
          <div className="keyboard-row row-1">
            {keys[0].map(key => this.renderKey(key))}
          </div>
          <div className="keyboard-row row-2">
            {keys[1].map(key => this.renderKey(key))}
          </div>
          <div className="keyboard-row row-3">
            {keys[2].map(key => this.renderKey(key))}
          </div>
        </div>
      </div>
    )
  }  
}

export default Keyboard