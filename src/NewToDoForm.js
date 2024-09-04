import React from 'react'
import { useState } from 'react'

export default function NewToDoForm() {
    const [newItem, setNewitem] = useState("");
    /* useState intakes a default value as inp and here since the new item 
       (the entry someone adds), when webpage starts, its empty
     */

    function handleSubmit(e) {
        e.preventDefault();
        // prevents reloading each time you submit the form

        // setTodos((currentTodos) => {
        //   return [...currentTodos, {
        //     id: crypto.randomUUID(),
        //     title: newItem,
        //     completed: false
        //   }]
        // });
        setNewitem("");
    }
    return (
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
    )
}

