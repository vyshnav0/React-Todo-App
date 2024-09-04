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

    setTodos((currentTodos) => {
      return [...currentTodos, {
        id: crypto.randomUUID(),
        title: newItem,
        completed: false
      }]
    });
    setNewitem("");
  }
  // console.log(todos);

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

  function deleteTodo(id){
    setTodos(currentTodos=>{
      return currentTodos.filter(todo=>todo.id !== id)
    });
  }
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
        {todos.length===0 && "No Todos yet, Add some!!"}
        
        {todos.map(singleTodo => {
          return (
            <li key={singleTodo.id}>
              <label>
                <input type='checkbox' checked={singleTodo.completed}
                  onChange={e => toggleTodo(singleTodo.id, e.target.checked)}
                />
              {singleTodo.title}</label>
              <button className='btn btn-danger'
                onClick={()=>deleteTodo(singleTodo.id)}>
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
