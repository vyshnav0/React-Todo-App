import { useEffect, useState } from 'react';
import './App.css';
import NewToDoForm from './NewToDoForm';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState(()=>{
    const localValue = localStorage.getItem("ITEMS")
    if (localValue== null) return [];
    return JSON.parse(localValue);
  });

  useEffect(()=>{
    localStorage.setItem("ITEMS", JSON.stringify(todos))
    // stores the info to local storage
  },[todos])
  // useEffect takes an array as input and changes runs the function each time that array is changed


  function addTodo(title){
    setTodos((currentTodos) => {
          return [...currentTodos, {
            id: crypto.randomUUID(),
            title,
            completed: false
          }]
        });
  }

  function toggleTodo(id, completed) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, completed }
        }
        return todo; // if we didnt find any todo with that id, which shouldnt be possible 
      })
    });
  }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    });
  }
  return (
    <>
      <NewToDoForm myPropOnSubmit={addTodo}/>
      <h1 className='header'>ToDo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  );
}

export default App;
