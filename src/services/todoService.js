import axios from 'axios'

const getToken = () => {
    let token = localStorage.getItem("token")
    return token ? token : ''
}

const axiosTodos = () => axios.create({
    baseURL: 'http://localhost:8080/todos',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const index = () => {
    return axiosTodos().get('/index')
}

const add = (newTodo) => {
    return axiosTodos().post('/add', newTodo)
}

const services = {
    index,
    add
}

export default services