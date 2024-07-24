import React, { useState } from 'react'
import { TodoItem } from './todoitem';
import { TodoForm } from './todoform';
import './todo.css'

export const ToDoApp = () => {

    const [todos,setTodos]=useState([]);

    const addTodo =(todo) =>{
        const newTodo =[todo,...todos];
        setTodos(newTodo);
    };
    const deleteTodo =(index)=>{
            const newTodo =todos.filter((todo,i)=> i !== index);
            setTodos(newTodo);
    }

    const toggleComplete =(index) =>{
         const newTodos= todos.map((todo,i)=>{
            if(i ===index){
                return{...todo, completed:!todo.completed}
            }
            return todo;
         })
         setTodos(newTodos);

    }
   
  return (
    <div className='TodoApp'>
        <h1>Todo List</h1>
        <TodoForm addTodo={addTodo}/>
        <div className='todo-list'>
            {todos.map((todo,index) =>(
                <TodoItem
                key={index} index={index}
                todo={todo} deleteTodo={deleteTodo}
                toggleComplete={toggleComplete}
                />
            ))

            }
        </div>
    </div>
  )
}
