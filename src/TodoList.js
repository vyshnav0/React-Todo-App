import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({todos, toggleTodo, deleteTodo}) {
    
  return (
    <ul className='list'>
    {todos.length === 0 && "No Todos yet, Add some !!"}

    {todos.map(singleTodo => {
      return (
        <TodoItem id={singleTodo.id} completed={singleTodo.completed} title={singleTodo.title}
         key={singleTodo.id} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
        // the key has been passed as a prop from here after it was removed from the list component TodoItem
      )
    })}
  </ul>
  )
}
