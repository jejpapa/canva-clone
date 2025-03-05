import axios from 'axios'

const local_api = 'https://canva-clone-silk-alpha.vercel.app'

const production_api = 'https://canva-clone-silk-alpha.vercel.app'


const token = localStorage.getItem('canva_token')

const api = axios.create({
    baseURL: process.env.NODE_ENV === 'development'?local_api:production_api,
uction_api,
uction_api,
    headers: {
        'Authorization': token ? `Bearer ${token}` : ""
    },
    withCredentials: true
})

export default api