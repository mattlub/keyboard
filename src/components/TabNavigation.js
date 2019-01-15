import React from 'react'
import { NAVBAR_TABS } from '../consts'

const TabNavigation = ({ selected, handleChange }) => (
  <nav className="nav">
    {NAVBAR_TABS.map(tabName => (
      <button
        key={tabName}
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