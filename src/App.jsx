import React, { useContext, useEffect, useState } from 'react'
import EmployeeDashboard from './components/Employee DashBoard/EmployeeDashboard'
import Login from './components/Login'
import AdminDashboard from './components/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'
import { AuthContext } from './context/AuthProvider'





const App = () => {

     const [user, setUser] = useState(null)

     const [loggedInUserData, setLoggedInUserData] = useState(null)

     const [userData, setUserData] = useContext(AuthContext)

    //  console.log(authData.employees)

     useEffect( () => {

    
        const loggedInUser = localStorage.getItem("loggedInUser")

        if (loggedInUser){
          const userData = JSON.parse(loggedInUser)
          setUser(userData.role)
          setUser(loggedInUser.role)
        }
      
     }, []);

     

    
    //  handle login check email and password 

     const handleLogin = (email, password) => {

      if (email=='admin@me.com' && password== '123'){
        setUser('admin')
        localStorage.setItem('loggedInUser', JSON.stringify({role:'admin'}))
        
      }


      else if(userData ){
        const employee = userData.find((e)=> email === e.email && e.password == password)
        if (employee){
          setUser('employee')
          setLoggedInUserData(employee)
          localStorage.setItem('loggedInUser', JSON.stringify({role:'employee'}))
        }
   }

      else{
        alert("invalid credentials")
      }

           
     }


  // ------- local storage -------
  // useEffect ( () => {

  //   // setLocalStorage()
  //   getLocalStorage()

  // },)


  return (
    <> 


     {!user ? <Login handleLogin={handleLogin} /> : ''}
     {user == 'admin' ? <AdminDashboard changeUser={setUser} /> : (user == 'employee' ? <EmployeeDashboard changeUser={setUser} data={loggedInUserData} /> : null)}
    
     {/* <EmployeeDashboard/> */}

     {/* <AdminDashboard/> */}

  


    </>
   
  )
}

export default App
