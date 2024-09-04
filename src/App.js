import { useState } from 'react';
import './App.css';

function App() {

  const [newItem, setNewitem] = useState("");
  /* useState intakes a default value as inp and here since the new item 
    (the entry someone adds, when webpage starts, its empty)
  */

  return (
    <>
      <form className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New item</label>
          <input 
            value={newItem}
            onChange={event => {setNewitem(event.target.value)

            console.log(newItem);}
            } type='text' id='item'></input>
            
        </div>
        <button className='btn'>Add</button>
      </form>
      <h1 className='header'>ToDo List</h1>
      <ul className='list'>
        <li>
          <label><input type='checkbox' />Item1</label>
          <button className='btn btn-danger'>Delete</button>
        </li>
        <li>
          <label><input type='checkbox' />Item2</label>
          <button className='btn btn-danger'>Delete</button>
        </li>
      </ul>
    </>
  );
}

export default App;
