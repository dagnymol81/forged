import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";

import authService from '../services/authService'
import userService from '../services/userService'

function Login({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState({ 
        username: '',
        password: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {

            const response = await authService.login(form)

            localStorage.setItem("token", response.data.token)

            const info = await userService.info()
    
            setUser(info.data)
            navigate('/profile')

        } catch (error) {
            console.log(error.response.data.error)
            alert(error.response.data.error)
        }


    }

    return ( 
        <>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username:</label>
                <br />
                <input 
                    type="text" 
                    id="username"
                    name="username"
                    onChange={handleChange}
                    value={form.username}
                />
                <br /><br />
                <label htmlFor="password">Password:</label>
                <br />
                <input 
                    type="password" 
                    id="password"
                    name="password"
                    onChange={handleChange}
                    value={form.password}
                />
                <br /><br />
                <button>Submit</button>
            </form>
        </>
     );
}

export default Login;