import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'


const CreateTask = () => {

  const [userData, setUserData] = useContext(AuthContext)



  const[taskTitle, setTaskTitle] = useState('')

  const[taskDescription, setTaskDescription] = useState('')

  const[taskDate, setTaskDate] = useState('')

  const[assignTo, setAssignTo] = useState('')

  const[category, setCategory] = useState('')
  
  const  [task, setTask] = useState({})

  const submitHandler = (e)=>{
    e.preventDefault()

    
    setTask({taskTitle, taskDescription, taskDate, category, assignTo, active:false, newTask:true, failed:false})

    const data = userData
   



    data.forEach(function(elem){
      if (assignTo == elem.firstname){
        elem.tasks.push(task)
        elem.taskCounts.newTask = elem.taskCounts.newTask+1 
        

      }
      
    })

    setUserData(data)
    console.log(data);

    
    
  
    
   
    setAssignTo('')
    setCategory('')
    setTaskDate('')
    setTaskDescription('')
    setTaskTitle('') 

  }





  return (
    <div>

        
    <div className='p-5 bg-[#1c1c1c]  mt-7 rounded'>

    <form  onSubmit={(e)=>{
      submitHandler(e)
    }} 
     className='flex flex-wrap w-full items-start justify-between '>

    <div className='w-1/2'>

    <div>
    <h3 className='text-base text-gray-300 mb-0.5'>Task Title</h3>

    <input value={taskTitle}
    onChange={(e)=>{
      setTaskTitle(e.target.value)
    }}

    className='text-sm  py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Make a UI Design'></input>
    </div>

    
    <div>
    <h3 className='text-base text-gray-300 mb-0.5'>Date</h3>

    <input value={taskDate}
    onChange={(e)=>{
      setTaskDate(e.target.value)
    }}
    className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='date'></input></div>
    
    
    <div>
    <h3 className='text-base text-gray-300 mb-0.5'>Assign To</h3>

    <input value={assignTo}
    onChange={(e)=>{
      setAssignTo(e.target.value)
    }}
     className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Employee Name'></input>
    </div>

    
    <div>
    <h3 className='text-base text-gray-300 mb-0.5'>category</h3>

    <input value={category}
    onChange={(e)=>{
      setCategory(e.target.value)
    }}
    className='text-sm py-2 px-2 w-4/5 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' type='text' placeholder='Design, Development, etc'></input></div>

    </div>

    
    <div className='w-2/5 flex flex-col items-start'>
    <h3 className='text-base text-gray-300 mb-0.5'>Description</h3>

    <textarea value={taskDescription}
    onChange={(e)=>{
      setTaskDescription(e.target.value)
    }}
    className='  w-full h-44 text-sm py-2 px-4 rounded outline-none bg-transparent border-[1px] border-gray-400 mb-4' name='' id='' cols='30' rows='10'></textarea>
   

    <button className='bg-emerald-500 hover:bg-emerald-600 px-5 rounded text-lg mt-4 w-full '>Create Task</button>

    </div>

    
   </form>
      
   </div>

  </div>


  )
}

export default CreateTask
