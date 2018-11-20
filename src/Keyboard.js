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

  render() {
    return (
      <div className="container">
        <div className="keyboard">
          <div className="keyboard-row">
            <div className="key extra-size lowercase lower-left unused">
              <span className="lower-row-text">tab</span>
            </div>
            {keys[0].map(key => (
              <Key character={key} key={key} ref={this.setRef(key)} />
            ))}
            <div className="key unused"><span></span></div>
          </div>
          <div className="keyboard-row">
            <div className="key lowercase lower-left extra-size-two unused"><span className="lower-row-text">caps lock</span><span className="absolute-left caps-dot">&bull;</span></div>
            {keys[1].map(key => (
              <Key character={key} key={key} ref={this.setRef(key)} />
            ))}
            <div className="key unused"><span></span></div>
            <div className="key extra-size-two lowercase lower-right unused">
              <span className="lower-row-text">return</span>
            </div>
          </div>
          <div className="keyboard-row">
            <div className="key double-size lowercase lower-left unused"><span className="lower-row-text">shift</span></div>
            {keys[2].map(key => (
              <Key character={key} key={key} ref={this.setRef(key)} />
            ))}
            <div className="key unused"><span></span></div>
            <div className="key unused"><span></span></div>
            <div className="key unused"><span></span></div>
            <div className="key double-size lowercase lower-right unused"><span className="lower-row-text">shift</span></div>
          </div>
          <div className="keyboard-row bottom-row">
            <div className="key unused lower-left lowercase"><span className="lower-row-text">fn</span></div>
            <div className="key unused lower-left lowercase"><span className="lower-row-text">control</span></div>
            <div className="key unused lower-left lowercase"><span className="lower-row-text">option</span><span className="absolute-left">alt</span></div>
            <div className="key unused lower-center lowercase extra-size-two"><span className="lower-row-text">command</span><span className="absolute-right icon">&#8984;</span></div>
            <div className="key space-bar"></div>
            <div className="key unused lower-center lowercase extra-size-two"><span className="lower-row-text">command</span><span className="absolute-left icon">&#8984;</span></div>
            <div className="key unused lower-right lowercase"><span className="lower-row-text">option</span><span className="absolute-right">alt</span></div>
            <div className="arrows">
              <div className="key unused">&#9668;</div>
              <div className="up-down">
                <div className="key unused">&#9650;</div>
                <div className="key unused">&#9660;</div>
              </div>
              <div className="key unused">&#9658;</div>
            </div>
          </div>
        </div>
      </div>
    )
  }  
}

export default Keyboard