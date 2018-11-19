import React, { forwardRef } from 'react'
import { keyMap } from './consts'

const Key = forwardRef(({ character }, ref) => (
  <div id={`key-${character}`} className="key" ref={ref}>
    <span className="english-character">
      {character}
    </span>
    <span className="arabic-character">
      {keyMap[character]}
    </span>
  </div>
))

export default Key