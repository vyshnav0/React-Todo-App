import React from 'react'
import { useState } from 'react'

export default function NewToDoForm(props) {
    const [newItem, setNewitem] = useState("");
    /* useState intakes a default value as inp and here since the new item 
       (the entry someone adds), when webpage starts, its empty
     */

    function handleSubmit(e) {
        e.preventDefault();
        // prevents reloading each time you submit the form

        if (newItem === "") return
        
        props.myPropOnSubmit(newItem)
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

