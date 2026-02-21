import React, { useEffect, useRef, useState } from 'react'
import Todos from './components/Todos.jsx'

const App = () => {
  const inputRef = useRef();
  const [task,setTask] = useState(localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[]);

  const addTask = () =>{

    const inputText = inputRef.current.value.trim()

    if(inputText===""){
      return null;
    }

    const taskObj = {
      id: new Date().getTime(),
      text:inputText,
      isCompleted:false
    }
    setTask((prev)=>[...prev,taskObj])
    inputRef.current.value = ""
  }

  const deleteTask = (id)=>{
    setTask((prev)=> prev.filter((todo)=>todo.id !== id))
  }

  const updateTask = (id)=>{
    setTask((prev)=>{
      return prev.map((todo)=>{
        if(todo.id===id){
          return {...todo,isCompleted: !todo.isCompleted}
        }
        return todo;
      })
    })
  }

  useEffect(()=>{
    localStorage.setItem("task",JSON.stringify(task))
  },[task])
  return (
    <div className='bg-slate-600 min-h-screen flex flex-col items-center justify-center'>
      <div className="bg-white p-4 rounded">
      <h2 className='text-center text-xl font-bold'>Todo App</h2>
      <div className="flex flex-row gap-2 bg-slate-200 rounded my-2">
        <input type="text" id='task' ref={inputRef} placeholder='Enter an Task' className='bg-transparent outline-none p-2' />
        <button className='bg-orange-400 p-2 text-white rounded cursor-pointer' onClick={addTask}>Add</button>
      </div>
      <div className="my-4">
        {task.map((todo,index)=>{
          return <Todos text={todo.text} updateTask={updateTask} isCompleted={todo.isCompleted}  index={todo.index} key={index} deleteTask={deleteTask} id={todo.id}/>
        })}
      </div>
      </div>
      <h2 className='mt-4 text-blue-50'>Developed by : Srihari Dev </h2>
    </div>
  )
}

export default App
