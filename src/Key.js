import React from 'react'
import { keyMap } from './consts'

const Key = ({ character })  => (
  <div id={`key-${character}`} className="key">
    <span className="english-character">
      {character}
    </span>
    <span className="arabic-character">
      {keyMap[character]}
    </span>
  </div>
)

export default Key