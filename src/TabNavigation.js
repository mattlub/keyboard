import React from 'react'
import { TABS } from './consts'

const TabNavigation = ({ selected, handleChange }) => (
  <nav className="nav">
    {Object.keys(TABS).map(tabName => (
      <label
        className={`nav__item ${tabName === selected ? 'nav__item--selected' : ''}`}
        key={tabName}
      >
        {tabName}
        <input
          className='nav__radio'
          type="radio"
          value={tabName}
          checked={selected === tabName}
          onChange={handleChange}
        />
      </label>
    ))}
  </nav>
)

export default TabNavigation