import React from 'react'

import TaskListNumbers from './TaskListNumbers'
import TaskList from './TaskList'
import Header from '../Header'



const EmployeeDashboard = (props) => {
  return (

    <div className='p-10 bg-[#1d1c1c] h-screen'>
       

    <Header changeUser = {props.changeUser} data= {props.data}/>
     
     <TaskListNumbers data= {props.data}/>
     <TaskList data= {props.data}/>
     
     
       


    </div>
  )
}

export default EmployeeDashboard
