import React from 'react'

const TaskListNumbers = ({data}) => {
  return (

    <>
    <div className='flex  mt-10 w-full justify-between gap-5'>

        <div className='h-60 w-[40%] p-6 py-6 px-9 bg-yellow-500 rounded-xl'>
        
        <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
        <h3 className=' text-xl font-medium'>New Task</h3>

        </div>

        <div className='h-60 w-[40%] p-6 py-6 px-9 bg-green-500 rounded-xl'>
        
        <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
        <h3 className=' text-xl font-medium'>Completed Task</h3>

        </div>

        <div className='w-[40%] p-6 py-6 px-9 bg-blue-500 rounded-xl'>
        
        <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
        <h3 className=' text-xl font-medium'>Active Task</h3>

        </div>

        <div className='w-[40%] p-6 py-6 px-9 bg-red-500 rounded-xl'>
        
        <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
        <h3 className=' text-xl font-medium'>Failed Task</h3>

        </div>
      
    </div>


    </>
  )
}

export default TaskListNumbers
