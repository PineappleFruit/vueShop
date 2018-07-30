import axios from 'axios'

let getData = axios.create({
    baseURL : baseUrl,
    timeout : 6000
})

export function getList(params = { page_size: 20, page: 1, id: 60 }){
   return  getData.get('/list',{params:params})
}

export default({
    install(Vue){
        Vue.prototype.http = {
            getList
        }
    }
})