import React from 'react';

export const ToDo = (props) => {
  return (
   
        
            
            <div style={{color:"red"}}>
              <h1 className="text-centre">{props.todo["title"]}</h1>
              <h2>{props.todo['desc']}</h2>
              <button type="button" className="btn btn-danger" onClick={()=>{props.ondelete(props.todo)}}>Delete</button>
              </div>
            
           
        
    
  )
}
