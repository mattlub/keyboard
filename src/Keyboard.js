import React from 'react'

import './Keyboard.css'

const Keyboard = () => (
  <div className="container">
    <div className="keyboard">
      <div className="keyboard-row">
        <div className="key extra-size lowercase lower-left unused">
          <span className="lower-row-text">tab</span>
        </div>
        <div id="key-Q" className="key">
          <span className="english-character">Q</span>
          <span className="arabic-character">ض</span>
        </div>
        <div id="key-W" className="key">
          <span className="english-character">W</span>
          <span className="arabic-character">ض</span>
        </div><div id="key-E" className="key">
          <span className="english-character">E</span>
          <span className="arabic-character">ض</span>
        </div><div id="key-q" className="key">
          <span className="english-character">Q</span>
          <span className="arabic-character">ض</span>
        </div><div id="key-q" className="key">
          <span className="english-character">Q</span>
          <span className="arabic-character">ض</span>
        </div><div id="key-q" className="key">
          <span className="english-character">Q</span>
          <span className="arabic-character">ض</span>
        </div><div id="key-q" className="key">
          <span className="english-character">Q</span>
          <span className="arabic-character">ض</span>
        </div><div id="key-q" className="key">
          <span className="english-character">Q</span>
          <span className="arabic-character">ض</span>
        </div><div id="key-q" className="key">
          <span className="english-character">Q</span>
          <span className="arabic-character">ض</span>
        </div><div id="key-q" className="key">
          <span className="english-character">Q</span>
          <span className="arabic-character">ض</span>
        </div><div id="key-q" className="key">
          <span className="english-character">Q</span>
          <span className="arabic-character">ض</span>
        </div><div id="key-q" className="key">
          <span className="english-character">Q</span>
          <span className="arabic-character">ض</span>
        </div>
        <div className="key unused">
          <span></span>
        </div>
      </div>
      <div className="keyboard-row">
        <div className="key lowercase lower-left extra-size-two unused"><span className="lower-row-text">caps lock</span><span className="absolute-left caps-dot">&bull;</span></div>
        <div className="key">A</div>
        <div className="key">S</div>
        <div className="key">D</div>
        <div className="key">F</div>
        <div className="key">G</div>
        <div className="key">H</div>
        <div className="key">J</div>
        <div className="key">K</div>
        <div className="key">L</div>
        <div className="key"><span>:</span></div>
        <div className="key"><span>"</span></div>
        <div className="key extra-size-two lowercase lower-right unused">
          <span className="lower-row-text">return</span>
        </div>
      </div>
      <div className="keyboard-row">
        <div className="key double-size lowercase lower-left unused"><span className="lower-row-text">shift</span></div>
        <div className="key">Z</div>
        <div className="key">X</div>
        <div className="key">C</div>
        <div className="key">V</div>
        <div className="key">B</div>
        <div className="key">N</div>
        <div className="key">M</div>
        <div className="key"><span>&lt;<br />,</span></div>
        <div className="key"><span>&gt;<br />.</span></div>
        <div className="key"><span>?</span></div>
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

export default Keyboard