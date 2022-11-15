import axios from 'axios'
import baseURL from './baseUrl'

const axiosAuth = axios.create({
    baseURL: baseURL + '/auth'
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