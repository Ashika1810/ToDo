// import React from 'react'

export const ShowTask = ({taskList, setTaskList, task, setTask}) => {

    const handleEdit=(id)=>{
        let selectedTask = taskList.find((todo)=> todo.id===id);
        setTask(selectedTask);
    }
  
    const handleDelete=(id)=>{
        const newList = taskList.filter((todo)=> todo.id!==id);
        setTaskList(newList);
    }
    
    return (
      // <div>showTask</div>
      <section className="showTask">
        <div className="head">
            <div>
              <span className="title">Todo</span>
              <span className="count">{taskList.length}</span>
            </div>
            <button className="clearAll" onClick={()=>setTaskList([])}>Clear All</button>
        </div>
        <ul>
              {taskList.map((todo)=>{
                return(
                  <li key={todo.id}>
                    <p>
                    <span className="name">{todo.name}</span>
                    <span className="time">{todo.time}</span>
                    </p>
                    <i className="bi-pencil-square" onClick={()=>handleEdit(todo.id)}></i>
                    <i className="bi-trash" onClick={()=>handleDelete(todo.id)}></i>
                  </li>
                )
              })}
            </ul>
      </section>
    )
  }
  