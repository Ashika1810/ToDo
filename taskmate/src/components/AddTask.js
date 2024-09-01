// import React from 'react'

import { useRef } from "react";

export const AddTask = ({taskList, setTaskList, task, setTask}) => {
  const myRef= useRef();
  
  const handleSubmit=(e)=>{
    e.preventDefault();
    myRef.current.focus();
    if(task.id){
        const date= new Date();
        let updatedList = taskList.map((todo)=>(
          todo.id===task.id   ?
             {id: date.getTime(),
            name: task.name,
            time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`}  : todo
        )
        )
        setTaskList(updatedList);
        setTask({})
    }
    else{
      const date= new Date();
    const newTask ={
      id: date.getTime(),
      name: e.target.task.value,
      time: `${date.toLocaleTimeString()} ${date.toLocaleDateString()}`
    }
    setTaskList([...taskList, newTask]);
    // e.target.task.value=''
    setTask({});
    }
    
  }
  return (
    // <p>addTask</p>
    <section className="addTask">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" value={task.name || ''} ref={myRef} autoComplete="off" placeholder="add task" maxLength="25" onChange={(e)=>setTask({...task, name:e.target.value})}/>
        <button type="submit">{task.id ? "Update" : "Add"}</button>
      </form>
    </section>
  )
}
