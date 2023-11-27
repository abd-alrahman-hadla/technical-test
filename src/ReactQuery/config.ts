import axios from 'axios'

export const apiRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_API_URL,
})