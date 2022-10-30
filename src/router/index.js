import VueRouter from "vue-router";
//引入组件
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/home'
//创建并暴露一个路由器
const router =  new VueRouter({
    routes:[
        {
            path:'/login',
            component:Login
        },
        {   
            name:'zhuce',
            path:'/register',
            component:Register
        },
        {
            path:'*',
            redirect:'Home'
        },
        {
            path:'/home',
            component:Home
        }
    ]
})
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default router