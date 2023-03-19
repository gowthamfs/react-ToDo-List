import React from 'react';
export default function listItem(props) {
  return (
   <div className={props.obj.completed && "completed"}>
     <p>{props.obj.name}</p>
     <button onClick={()=> props.onDone (props.obj)}>Add</button>
     <button onClick={()=> props.onDelete (props.obj)}>Delete</button>
   </div>
  )
}
