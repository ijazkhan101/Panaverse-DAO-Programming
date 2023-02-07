'use client'
import React, { useState } from 'react'

export default function Todo() {
  const [todo, setTodo] = useState('')

  const [todos, setTodos] = useState([
    { todoText: 'TODO 1 ', completed: false },
    { todoText: 'TODO 2 ', completed: true },
    { todoText: 'TODO 3', completed: true },
    { todoText: 'TODO 4', completed: true },
    { todoText: 'TODO 5', completed: false },
  ])

  const onClickhandler = (elm: any) => {
    console.log('Elm', elm)

    const newTodos = todos.map((todo) => {
      if (todo.todoText == elm.todoText) {
        todo.completed = !todo.completed
      }

      return todo
    })
    console.log(newTodos)
    setTodos(newTodos)
  }

  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false }
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }


  const deleteTodo = (dlt : any) => {
    const newTodos =  todos.filter((todo) =>{
        if(todo.todoText == dlt.todoText)
            return false;
        return true;
    });
    setTodos(newTodos)
  };


  return (
    <>
      <input
        placeholder="Add todo text"
        style={{width: '60%',
            padding:'12px 20px ' ,
            margin: '8px 0',
            boxSizing: 'border-box',
          }}
        value={todo}
        onChange={(e) => {
          setTodo(e.target.value)
        }}
      />
      <button style={{backgroundColor:'#e7e7e7;',margin:'10px',borderColor:'white',padding: '10px 22px',borderRadius: '25px'}}
      onClick={addTodo}>Add</button>
      <ul>
        {todos.map((elm) => {
          return (
            <li
              style={{
                color: elm.completed ? 'green' : 'red',
                listStyle: 'none',
              }}
              key={elm.todoText}
            >
              <input
                type="checkbox"
                checked={elm.completed}
                onChange={() => {
                  onClickhandler(elm)
                }}
              />
              {elm.todoText}
              <button  style={{backgroundColor:'#008CBA',margin:'10px',borderColor:'white',padding: '10px 22px',borderRadius: '25px'}}
              onClick= { () => { deleteTodo(elm)}}> Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
