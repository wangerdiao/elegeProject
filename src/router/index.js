import VueRouter from "vue-router";
//引入组件
import Login from '../pages/Login'
import Register from '../pages/Register'
//创建并暴露一个路由器
export default new VueRouter({
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
    ]
})