import React from 'react'
import { useState } from 'react'

const Todo = () => {
    //set todo list
    const [todoList, setTodoList] = useState([]);
    //set input value
    const [value, setValue] = useState([]);

    const submitHandler = (e) => {
        e.preventDefault();
        addTodo(value)
        setValue('')
    }
    const addTodo = (text) => {
        if(text !== ''){
            const updateTodoList = [...todoList, {text}]
            setTodoList(updateTodoList)
        }
    }

    const deleteHandler = (todo) => {
        const filteredTodoList = todoList.filter(currentTodoListValue => ( currentTodoListValue !== todo))
            setTodoList(filteredTodoList)
    }

  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-4 mx-auto mt-5">
                <form className="form-inline" onSubmit={ submitHandler }>
                        <input className="form-control" type="text" placeholder="type here" onChange={ e => setValue(e.target.value)} />
                        <button className="btn btn-outline-primary ml-3 px-4" type="submit">Add to-do</button>
                </form>
                <ul className="list-group">
                    {
                        todoList.map((todo, index) => (
                            <li className="list-group-item list-group-item-primary d-flex justify-content-between my-2" key={index}>
                                {todo.text}<button className="badge badge-primary badge-pill" onClick={() => deleteHandler(todo)}> X </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Todo