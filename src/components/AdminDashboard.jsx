import React from 'react'
import Header from './Header'
import CreateTask from './CreateTask'
import AllTask from './AllTask'


const AdminDashboard = (props) => {
  return (
    <div className=' bg-[#1d1c1c] h-screen w-full p-10'>
 
       <Header changeUser={props.changeUser} />
       <CreateTask/>
       <AllTask/>




       </div>
      
    
  )
}

export default AdminDashboard
