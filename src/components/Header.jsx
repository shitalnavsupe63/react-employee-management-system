import React from 'react'

const Header = (props) => {


  const logOutUser = () =>{
    localStorage.setItem('loggedInUser', '')
    props.changeUser('')
    // console.log(props.changeUser)
    // window.location.reload()


  }

  return (

    <>
    <div className='flex items-end justify-between'>
       


       <h1 className='text-2xl font-medium'>Hello, <br/> <span className='text-3xl'>User👋</span></h1>

      
      
       <button onClick = {logOutUser} className='bg-red-600 text-lg text-white px-5 py-2 rounded-xl font-medium'>Log Out</button>



    </div>

    </>
  )
}

export default Header
