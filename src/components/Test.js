import React, { Component } from 'react';
import './Test.css';
import Keyboard from './Keyboard.js'
import { pickRandom, toArabic } from '../utils';

const NEXT_WORD_DELAY = 2000

class Test extends Component {
  constructor(props) {
    super(props)
    this.state = {
      correct: false,
      word: pickRandom(this.props.words),
      input: '',
      showAnswer: false
    }
    this.inputRef = null
  }

  componentDidMount() {
    this.inputRef.focus()
  }

  handleInputChange(e) {
    // do nothing if already correct, waiting for next word
    if (this.state.correct) {
      return
    }
    const { words } = this.props
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
        this.setState(prevState => ({
          correct: false,
          word: pickRandom(words, [prevState.word]),
          input: '',
          showAnswer: false
        }))
      }, NEXT_WORD_DELAY)
    }
  }

  handleSkip() {
    this.setState(prevState => ({
      word: pickRandom(this.props.words, [prevState.word]),
      input: '',
      showAnswer: false
    }))
  }

  handleShowAnswer() {
    this.setState({
      showAnswer: true
    })
    this.inputRef.focus()
  }

  render() {
    const { word, correct, input, showAnswer } = this.state
    return (
      <div>
        <div className="guess-section" >
          <div className="english-word">
            {word.en}
          </div>
          <input
            ref={e => this.inputRef = e}
            className={`arabic-input ${correct ? 'correct' : ''}`}
            direction="rtl"
            value={input}
            onChange={e => this.handleInputChange(e)}
          />
          <div className="show-answer">
            {showAnswer && word.ar}
          </div>
          <div>
            <button
              className={`button button--not-disabled`}
              onClick={() => this.handleSkip()}
            >
              Skip
            </button>
            <button
              className={`button button--${showAnswer ? '' : 'not-'}disabled`}
              disabled={showAnswer}
              onClick={() => this.handleShowAnswer()}
            >
              Show Answer
            </button>
          </div>
        </div>
        <Keyboard />
      </div>
    );
  }
}

export default Test
