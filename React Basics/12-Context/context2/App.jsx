import React from 'react'
import { themes } from '../dynamic-context/theme-context'
import ThemeContext from './ThemeContext'
import Toolbar from './Toolbar'

const App = () => {
  return (
    <ThemeContext.Provider value={themes.dark}>
        <Toolbar />
    </ThemeContext.Provider>
  )
}

export default App