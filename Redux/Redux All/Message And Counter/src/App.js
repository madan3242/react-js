import React from 'react'
import Message from './Message/Message'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Counter from './Counter/Counter'

const App = () => {
  return (
    <Provider store={store}>
      <Message />
      <Counter />
    </Provider>
  )
}

export default App