import axios from 'axios'

const axiosAuth = axios.create({
    baseURL: 'http://localhost:8080/auth'
})

const login = (userCredentials) => {
    return axiosAuth.post('/login', userCredentials)
}

const register = (userCredentials) => {
    return axiosAuth.post('/register', userCredentials)
}

const services = {
    login, 
    register
}

export default services