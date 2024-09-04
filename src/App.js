import './App.css';

function App() {
  return (
    <>
      <form className='new-item-form'>
        <div className='form-row'>
          <label htmlFor='item'>New item</label>
          <input type='text' id='item'></input>
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
