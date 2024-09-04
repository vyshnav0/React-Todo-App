import { useState } from 'react';
import './App.css';

function App() {

  const [newItem, setNewitem] = useState("");
  /* useState intakes a default value as inp and here since the new item 
    (the entry someone adds, when webpage starts, its empty)
  */
 const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    // prevents reloading each time you submit the form

    setTodos((currentTodos)=>{
      return [...currentTodos, {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false
      }]
    });
  }
  console.log(todos);

  return (
    <>
      <form onSubmit={handleSubmit} className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New item</label>
          <input 
            value={newItem}
            onChange={event => setNewitem(event.target.value)}
            type='text' id='item'>
          </input>
            
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1 className='header'>ToDo List</h1>
      <ul className='list'>
        {todos.map(singleTodo=>{
          return <li>
              <label><input type='checkbox' checked={singleTodo.completed}/>{singleTodo.title}</label>
              <button className='btn btn-danger'>Delete</button>
            </li>
        })}
      </ul>
    </>
  );
}

export default App;
