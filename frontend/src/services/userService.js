import axios from 'axios'
import baseURL from './baseUrl'

const getToken = () => {
    let token = localStorage.getItem("token")
    return token ? token : ''
}

const axiosUser = () => axios.create({
    baseURL: baseURL + '/users',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const info = () => {
    return axiosUser().get('/info')
}

const services = {
    info
}

export default services