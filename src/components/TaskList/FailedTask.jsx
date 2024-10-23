import React from 'react'

const FailedTask = ({data}) => {
  return (
    <div>


<div className='h-full w-[300px] bg-purple-400 rounded-xl flex-shrink-0'>
       
       <div className='flex justify-between p-5 items-center'>
        
        <h3 className='bg-red-600 px-3 py-1 rounded text-sm'>{data.category}</h3>
        <h4>{data.date}</h4>
        </div> 

        <h2 className='mt-5 ml-5 text-2xl font-semibold'>{data.title}</h2>


        <p className='text-sm mt-2 ml-5 '>
          {data.description}</p>

         <div className='mt-4'>
            <button className='w-[90%] py-1 px-2  bg-red-500 rounded ml-4 mb-2 '>Failed</button>
         </div>

        </div>

      



    </div>
  )
}

export default FailedTask
