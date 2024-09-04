import { useState } from 'react';
import './App.css';
import NewToDoForm from './NewToDoForm';

function App() {
  const [todos, setTodos] = useState([]);

  function toggleTodo(id, checked) {
    setTodos(currentTodos => {
      return currentTodos.map(todo => {
        if (todo.id === id) {
          return { ...todo, checked }
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
      <NewToDoForm />
      <h1 className='header'>ToDo List</h1>
      <ul className='list'>
        {todos.length === 0 && "No Todos yet, Add some!!"}

        {todos.map(singleTodo => {
          return (
            <li key={singleTodo.id}>
              <label>
                <input type='checkbox' checked={singleTodo.completed}
                  onChange={e => toggleTodo(singleTodo.id, e.target.checked)}
                />
                {singleTodo.title}</label>
              <button className='btn btn-danger'
                onClick={() => deleteTodo(singleTodo.id)}>
                Delete
              </button>
            </li>
          )
        })}
      </ul>
    </>
  );
}

export default App;
