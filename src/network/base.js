import axios from 'axios'

const request = axios.create({
    // baseURL: '/api',
    timeout: 8000
})

// request interceptor
request.interceptors.request.use(
    config => {
        console.log('config>' + JSON.stringify(config))
        console.log('拦截器')
        return config
    },
    error => {
        console.log('request-error>'+error) // for debug
        return Promise.reject(error)
    }
)

// response interceptor
request.interceptors.response.use(
    response => {
        console.log(response)
        console.log(response.data)
        const res = response.data
        return res
    },
    error => {
        console.log('response-error>'+error)
        return Promise.reject(error)
    }
)

export default request
