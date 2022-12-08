import React from 'react'
import { Counter } from './features/counter/Counter'
import { Provider } from 'react-redux'
import store from './app/store'


const App = () => {
  return (
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  )
}

export default App