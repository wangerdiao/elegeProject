//对axios进行二次封装
import axios from 'axios'
import nprogress from 'nprogress' 
import 'nprogress/nprogress.css'
const requests = axios.create({
    baseURL:'http://localhost:3000',
    timeout:5000
})
//设置请求拦截器
requests.interceptors.request.use((config) => {
    nprogress.start() //进度条开始
    return config
})
//设置响应拦截器
requests.interceptors.response.use(() => {
    (res) => {
        nprogress.done() //进度条结束
        return res.data
    },
    (error) => {
        return Promise.reject(new Error('fail'))
    }
})
export default requests