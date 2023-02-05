import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ContactApp from './components/ContactList/ContactApp'
import ExpenseTracker from './components/ExpenseTracker/ExpenseTracker'
import AllForms from './components/FormHandling/AllForms'
import All from './components/LifeCycle/All'
import Navbar from './components/Navbar/Navbar'
import AllRedux from './components/Redux/AllRedux'
import Registration from './components/Registration/Registration'
import Search from './components/Search/Search'
import UserList from './components/Users/UserList'

const App = () => {
  return (
    <Fragment>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/forms" element={<AllForms />} />
          <Route path="/lifecycle" element={<All />} />
          <Route path="/contactlist" element={<ContactApp />} />
          <Route path="/expense" element={<ExpenseTracker />} />
          <Route path="/search" element={<Search />} />
          <Route path="/redux" element={<AllRedux />} />
          <Route path="/user" element={<UserList />} />
          <Route path="/register" element={<Registration />} />
        </Routes>
      </Router>
    </Fragment>
  )
}

export default App