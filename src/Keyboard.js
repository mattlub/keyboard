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
  }

  componentDidMount() {
    document.addEventListener('keypress', e => {
      const key = e.key
      console.log('keypress', {key, e})
      console.log('ref', this.keyRefs[key])
      
      // add the light class then remove it, to make the key flash
      if (this.keyRefs[key]) {
        this.keyRefs[key].classList.add('light')
      }
    })

    document.addEventListener('keyup', e => {
      // BUG: keyup for the letter is not fired if a special key is pressed
      const key = e.key
      console.log('keyup', { key, e })
      if (this.keyRefs[key]) {
        this.keyRefs[key].classList.remove('light')
      }
    })
  }

  componentWillUnmount() {
    document.removeEventListener('keypress')
    document.removeEventListener('keyup')
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