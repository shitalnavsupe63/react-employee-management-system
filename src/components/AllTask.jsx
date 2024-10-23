import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthProvider'

const AllTask = () => {

  const [userData, setUserData] = useContext(AuthContext)
  

  return (

   <>

    <div id='alltask' className=' p-5 mt-4 rounded h-48 '>

    <div className='bg-purple-500 mb-2 py-2 px-4 text-lg flex justify-between rounded '>


        <h2 className='text-lg  w-1/5 '>Employee Name</h2>

        <h3 className='text-lg w-1/5  '>New Task</h3>

        <h5 className='text-lg w-1/5  '>Active Task</h5>


        <h5 className='text-lg w-1/5  '>Completed</h5>
        
        <h5 className='text-lg w-1/5  '>Failed</h5>


       </div>


        

       <div id='alltask2' className='h-[80%] overflow-auto'>


       {userData.map((elem,idx)=>{

          return  <div key={idx} className='border-2  mb-2 py-2 px-4 text-lg flex justify-between rounded '>

          <h2 className='text-lg  w-1/5 text-white-600 '>{elem.firstname}</h2>

           <h3 className='text-lg w-1/5 text-yellow-600 '>{elem.taskCounts.newTask}</h3>

            <h5 className='text-lg w-1/5 text-blue-600 '>{elem.taskCounts.active}</h5>

            <h5 className='text-lg w-1/5 text-green-600 '>{elem.taskCounts.completed}</h5>

             <h5 className='text-lg w-1/5 text-red-600 '>{elem.taskCounts.failed}</h5>

</div>



})}


       </div>
      
      
      
       </div>  

    

    </>
  )
}

export default AllTask
