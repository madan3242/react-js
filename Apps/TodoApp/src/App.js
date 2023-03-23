import React from 'react'
import Todo from './TodoApp/Todo'
import './App.css'

let App = () => {
  return (
    <div className="bgc">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mx-auto">
            <h2 className="text-center h2">Todo List</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 mx-auto todo">
            <Todo />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App