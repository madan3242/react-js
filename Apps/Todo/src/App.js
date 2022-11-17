import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './Navbar/Navbar'
import Todo from './TodoApp/Todo'


let App = () => {
  return (
    <div>
        <Router>
          <Navbar />
        </Router>
        <Todo />
    </div>
  )
}

export default App