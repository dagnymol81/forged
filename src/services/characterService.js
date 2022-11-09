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

const find = (id) => {
  return axiosCharacter().get(`/${id}`)
}

const update = (updatedCharacter) => {
  return axiosCharacter().patch('/:id', updatedCharacter)
}

const services = {
    index,
    add,
    find,
    update
}

export default services