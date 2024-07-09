import axios from 'axios'

export const host = 'http://localhost:8000'
const prefix = `${host}/todo`

export const getTodos = async param => {
    const response = await axios.get(`${prefix}/list`, {
        params: param
    })
    return response.data
}

export const getTodo = async todoNo => {
    const response = await axios.get(`${prefix}/${todoNo}`)
    return response.data
}

export const addTodo = async todo => {
    const response = await axios.post(`${prefix}/add`, todo)
    return response.data
}

export const delTodo = async todoNo => {
    const response = await axios.delete(`${prefix}/del/${todoNo}`)
    return response.data
}

export const fixTodo = async todo => {
    const response = await axios.put(`${prefix}/fix`, todo)
    return response.data
}