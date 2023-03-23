import React from 'react'

const TodoList = ({todoList, deleteHandler}) => {
  return (
    <>
      <ul className="list-group">
      {
        todoList.map((todo, index) => (
          <li className="list-group-item list-group-item-primary d-flex justify-content-between my-2" key={index}>
            {todo.text}<button className="badge rounded-pill text-bg-danger" onClick={() => deleteHandler(todo)}> X </button>
          </li>
        ))
      }
      </ul>
    </>
  )
}

export default TodoList