import React from 'react'

const LogIn = () => {
  return (
    <div>
        <lable>User Name</lable>
        <input type='text' placeholder='Username'/>
        <br/>
        <lable>Password</lable>
        <input type='password' placeholder='Password'/>
        <br/>
        <button>LogIn</button>
    </div>
  )
}

export default LogIn