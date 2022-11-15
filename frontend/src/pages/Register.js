import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import authService from '../services/authService'
import userService from '../services/userService'


function Register({ setUser }) {

    const navigate = useNavigate()

    let [form, setForm] = useState({ 
        username: '',
        password: '',
        email: ''
    })

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        try {
            const response = await authService.register(form)
            
            //need to set token before user service
            
            localStorage.setItem("token", response.data.token)
            const info = await userService.info()

            setUser(info.data)

            navigate('/create')

        } catch (error) {
            console.log(error.response.data.error)
            alert(error.response.data.error)
        }

    }

    return ( 
        <div className="container my-3">
            <h1>Register</h1>
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
                <label htmlFor="email">Email:</label>
                <br />
                <input 
                    type="email" 
                    id="email"
                    name="email"
                    onChange={handleChange}
                    value={form.email}
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
        </div>
     );
}

export default Register;