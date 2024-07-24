import React, { useState } from 'react'

export const TodoForm = ({addTodo}) => {
    const [value,setValue] =useState('');

    const handleSubmit =(e) =>{
        e.preventDefault();
        if(!value) return;
        addTodo({text: value, completed:false});
        setValue('');
    };

  return (
    <form className='todo-form' onSubmit={handleSubmit}>   
        <input type="text" name='todo' value={value} onChange={(e)=>setValue(e.target.value)} placeholder='Add a New Task ' />
        <button type='submit'>Add</button>
    </form>
  )
}
