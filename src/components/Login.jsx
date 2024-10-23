import React, { useState } from 'react'

const Login = ({handleLogin}) => {

 

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    // console.log("email is ", email)
    // console.log("password is ", password)

    setEmail("")
    setPassword("")

  }


  return (

    <>
    
    <div className=' bg-[#1d1c1c] flex h-screen w-screen items-center justify-center'  >

        <div className='border-2 rounded-xl border-emerald-600 p-20'>
        
        <form 
            
            onSubmit={(e) => {
                submitHandler(e)

            }}
            
            className='flex flex-col items-center justify-center'>
            
            {/* --------- EMAIL -----------  */}

            <input required className='outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-white' 
                   
              value={email}
              onChange={(e)=>{
                  setEmail(e.target.value)
              }}
            
            type="email" placeholder='Enter your email'/>
            
            {/* --------- PASSWORD -----------*/}

            <input className=' outline-none bg-transparent border-2 border-emerald-600 text-xl py-3 px-5 rounded-full mt-3 placeholder:text-white'

              value={password}
              onChange={(e)=>{
                  setPassword(e.target.value)
              }}
            
            type="password" placeholder='Enter password'/>
            
            {/* ------------ LOGIN BUTTON --------------  */}
            
            <button className='mt-7 outline-none border-none border-2 bg-emerald-600 text-xl py-3 px-8 w-full  rounded-full placeholder:text-white' >
                Log in</button>

        </form>

        </div>
      
    </div>
    
     
    </>

  )

}

export default Login
