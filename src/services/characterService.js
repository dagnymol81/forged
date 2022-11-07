import axios from 'axios'

const getToken = () => {
    let token = localStorage.getItem("token")
    return token ? token : ''
}

const axiosCharacter = () => axios.create({
    baseURL: 'http://localhost:8080/character',
    headers: {
        'Authorization': `Bearer ${getToken()}`
    }
})

const index = () => {
    return axiosCharacter().get('/index')
}

const add = (newCharacter) => {
    return axiosCharacter().post('/add', newCharacter)
}

const show = () => {
  return axiosCharacter().get('/:id')
}

const services = {
    index,
    add,
    show
}

export default services