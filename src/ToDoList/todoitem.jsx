import React from 'react'

export const TodoItem = ({todo,index,deleteTodo,toggleComplete}) => {
  return (
    <div className={`todo-item ${todo.completed ? 'completed' :' '}`}
    style={{width:'100%'}}
    >
            <span style={{textDecoration :todo.completed ? 'line-through' :''}}
            onClick={()=>{toggleComplete(index)}}
           >
            {todo.text}
           </span>
            
          <button style={{marginLeft:'40px',textAlign:'center'}} onClick={()=>{deleteTodo(index)}}>Delete</button>
    </div>
  )
}
