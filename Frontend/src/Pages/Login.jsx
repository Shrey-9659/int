import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate();
    function changeUsername(e){
        setUsername(e.target.value)
    }
    function changePassword(e){
        setPassword(e.target.value)
    }
    async function handlerSubmit(e){
        e.preventDefault();
        const response = await fetch("https://4-h-prac.vercel.app/login", {
            method: "POST",
            headers : {"Content-Type" : "application/json"},
            body : JSON.stringify({username, password})
        })
        if(response.ok){
            navigate("/success")
        } else {
            alert("Please enter correct credentials")
        }
    }
  return (
    <div>
        <h2>Login Page</h2>
        <form onSubmit={handlerSubmit}>
            <input type="text" value={username} onChange={changeUsername} placeholder='Enter Username'/>
            <input type="text" value={password} onChange={changePassword} placeholder='Enter Password'/>
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login