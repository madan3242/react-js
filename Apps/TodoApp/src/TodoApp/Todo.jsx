import React from 'react'
import { useState } from 'react'
import TodoBar from './TodoBar';
import TodoList from './TodoList';

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
    <>
        <TodoBar submitHandler={submitHandler} setValue={setValue} />
        <TodoList todoList={todoList} deleteHandler={deleteHandler} />
    </>
  )
}

export default Todo