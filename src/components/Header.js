import React from 'react'
import TabNavigation from './TabNavigation.js'
import { TABS } from '../consts'

const Header = ({ selectedTab, handleTabChange }) => (
  <div className="header">
    <div className="header-content">
      <div className="tools">
        <button
          onClick={() => handleTabChange(TABS.help)}
          className="help-button"
        >
          ?
        </button>
      </div>
      <TabNavigation
        selected={selectedTab}
        handleChange={handleTabChange}
      />
    </div>
  </div>
)

export default Header