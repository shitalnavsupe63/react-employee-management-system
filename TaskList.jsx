import React from 'react'
import ActiveTask from '../TaskList/ActiveTask'
import NewTask from '../TaskList/NewTask'
import CompleteTask from '../TaskList/CompleteTask'
import FailedTask from '../TaskList/FailedTask'

const TaskList = ({data}) => {

console.log(data);

  return (

    <>

    <div id='tasklist' className='h-[50%] w-screen py-5 flex items-center justify-start gap-6 flex-nowrapwrap  mt-10 overflow-x-auto'>
        
     
     {data.tasks.map((elem,idx)=>{

         if (elem.active){
          return <ActiveTask key={idx} data={elem} />  
 
         }


         if(elem.newTask){
          return <NewTask key={idx} data={elem}/>
         }


         if (elem.completed){
          return <CompleteTask key={idx} data={elem}/>
         }

         if(elem.failed){
          return <FailedTask key={idx} data={elem}/>
         }
         
      



     })}
    




       



     


           





    </div>


    </>



  )
}

export default TaskList
