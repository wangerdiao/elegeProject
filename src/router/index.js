import VueRouter from "vue-router";
//引入组件
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/home'
import File from '@/components/File'
import Love from '@/components/Love'
import Picture from '@/components/Picture'
import Recycle from '@/components/Recycle'
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
            redirect:'Login'
        },
        {
            name:'zhuye',
            path:'/home',
            component:Home,
            children:[
                {
                    path:'file',
                    component:File
                },
                {
                    path:'picture',
                    component:Picture
                },
                {
                    path:'love',
                    component:Love
                },
                {
                    path:'recycle',
                    component:Recycle
                },
            ]
        }
    ]
})
const originalPush = VueRouter.prototype.push

VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}
export default router