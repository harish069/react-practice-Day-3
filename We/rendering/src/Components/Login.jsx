import React from 'react'
import { useState } from "react";
import TodoApp from "./TodoApp";

function Login() {
    const initState = {
        username:"",
        password:""
}
    const [loginData, setLoginData] = useState(initState)
    const [isAuth, setIsAuth] = useState(false);

    const handleChange = (e) => {
      //  console.log(e.target.value);
        const { name, value } = e.target
        
        setLoginData({
            ...loginData,
            [name]: value
        })
    }

    const handleLogin = () =>
    {
        const { username, password } = loginData;
        if (username == "admin" && password == "admin")
        {
            setIsAuth(true);
        }
        else
        {
            alert("ERROR")
            }
        }

    if (isAuth)
    {
        return <TodoApp/>
        }

    return (
        <div>
            <input type="text" placeholder="Enter username" name="username"  onChange={handleChange} />
            <input type="password" placeholder="Enter password" name="password" onChange={handleChange} />
            <button onClick={handleLogin}>Login</button>            
        </div>
    )
}

export default Login
