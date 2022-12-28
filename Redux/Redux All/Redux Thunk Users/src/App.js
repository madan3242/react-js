import React from 'react'
import { Provider } from 'react-redux'
import { store } from './redux/store'
import UserList from './User/UserList'

const App = () => {
  return (<React.Fragment>
    <nav className="navbar navbar-expnad-sm navbar-dark bg-dark">
      <a className="navbar-brand" href='/'>Redux Thunk</a>
    </nav>

    <Provider store={store}>
      <UserList />
    </Provider>

    <div style={{marginBottom : "200px"}}></div>
  </React.Fragment>)
}

export default App