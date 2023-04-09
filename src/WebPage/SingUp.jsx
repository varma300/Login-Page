import React from 'react'

const SingUp = () => {
  return (
        

    <div>
        <form>
            <lable>User Name</lable>
            <input type="text" onChange={name} placeholder = "user name"/>
            <br/>
            <lable>Email id</lable>
            <input type="email" placeholder='email id'/>
            <br/>
            <lable>Password</lable>
            <input type="password" placeholder="password"/>
            <br/>
            <button>SingUp</button>
        
        </form>
    
    
    
    
    </div>
  )
}

export default SingUp