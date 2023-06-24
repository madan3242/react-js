import React from 'react'
import ClickIncrease from './components/ClickIncrease'
import HoverIncrease from './components/HoverIncrease'

import withCounter from './components/withCounter'

const NewHoverIncrease = withCounter(HoverIncrease, 5)

const App = () => {
  return (
    <div>
        <ClickIncrease />
        <NewHoverIncrease />
    </div>
  )
}

export default App