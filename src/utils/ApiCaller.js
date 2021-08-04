import axios from 'axios'
import * as Config from './../constants/Config'

axios.interceptors.response.use(undefined, err => {
    if(err.message === 'Network Error' && !err.response){
        alert("Network erorr")
    } 
    if(err.response.status === 401){
        window.location = "/login"
    }
})

export default function callApi(endpoint, method = 'GET', body){
    return axios({
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body
    }).catch(err => console.log(err))
}