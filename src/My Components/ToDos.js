import React from 'react'
import {ToDo} from './ToDo';
export const ToDos = (props) => {
  return (
    <>
    
      {
        props.todoarr.length>0?
        props.todoarr.map((todo)=>{
          
          return <ToDo todo={todo} key={todo.title} ondelete={props.ondelete}/>
        }):<><h1>No Todos to display</h1></>
      }
      
    
    </>
  )
}
