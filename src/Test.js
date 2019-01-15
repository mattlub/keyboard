import React, { Component } from 'react';
import './Test.css';
import Keyboard from './Keyboard.js'
import { words } from './consts'
import { pickRandom, toArabic } from './utils';

const NEXT_WORD_DELAY = 2000

const INITIAL_STATE = {
  correct: false,
  word: pickRandom(words),
  input: ''
}

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = INITIAL_STATE
  }

  handleInputChange(e) {
    // do nothing if already correct, waiting for next word
    if (this.state.correct) {
      return
    }
    const { word } = this.state
    // target value will have the english letter added on the end
    const newInput = toArabic(e.target.value)
    const correct = newInput === word.ar
    this.setState({
      input: newInput,
      correct
    })
    if (correct) {
      setTimeout(() => {
        this.setState({
          correct: false,
          word: pickRandom(words, [this.state.word]),
          input: ''
        })
      }, NEXT_WORD_DELAY)
    }
  }

  render() {
    const { word, correct, input } = this.state
    return (
      <div>
        <div className="guess-section" >
          <div className="english-word">
            {word.en}
          </div>
          <input
            className={`arabic-input ${correct ? 'correct' : ''}`}
            direction="rtl"
            value={input}
            onChange={e => this.handleInputChange(e)}
          />
        </div>
        <Keyboard />
      </div>
    );
  }
}

export default Test
