import React from 'react'
import { TABS } from './consts'

const TabNavigation = ({ selected, handleChange }) => (
  <nav className="nav">
    {Object.keys(TABS).map(tabName => (
      <button
        className={`nav__item ${tabName === selected ? 'nav__item--selected' : ''}`}
        onClick={() => handleChange(tabName)}
      >
        <div className="nav__item-text">
          {tabName}
        </div>
      </button>
    ))}
  </nav>
)

export default TabNavigation