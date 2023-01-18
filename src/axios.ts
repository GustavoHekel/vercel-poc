import axios, {AxiosRequestConfig, AxiosRequestHeaders, RawAxiosRequestConfig} from 'axios'

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2'
})


instance.interceptors.request.use((config) => {

    // @ts-ignore
    config.time = { startTime: new Date() }

    return config
}, (error) => {
    // console.log({error})
})

instance.interceptors.response.use((response) => {

    // @ts-ignore
    const endTime = new Date()
    // @ts-ignore
    const duration = endTime - response.config.time.startTime

    // console.log(response)

    console.log({
        baseUrl: response.config.baseURL,
        url: response.config.url,
        method: response.config.method,
        status: response.status,
        statusText: response.statusText,
        duration: `${duration}ms`
    })

    return response
}, (error) => {
    // console.log({error})
})

export default instance
