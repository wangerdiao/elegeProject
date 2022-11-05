import VueRouter from "vue-router";
//引入组件
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/home'
import File from '@/components/File'
import Love from '@/components/Love'
import Picture from '@/components/Picture'
import Recycle from '@/components/Recycle'
import {reqGetToken} from '@/api/index'
//创建并暴露一个路由器
const router =  new VueRouter({
    routes:[
        {
            name:'login',
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
                    name:'file',
                    path:'file/:to?',
                    component:File
                },
                {
                    name:'picture',
                    path:'picture/:to?',
                    component:Picture
                },
                {
                    name:'love',
                    path:'love/:to?',
                    component:Love
                },
                {
                    name:'recycle',
                    path:'recycle/:to?',
                    component:Recycle
                },
            ]
        }
    ]
})

//配置全局路由守卫
router.beforeEach(async (to,from,next) => {
    if(to.name ==='zhuce' || to.name ==='login') {
        next()  //访问登录和注册页面放行
    }else { //去其他页面判断是否有token
        const token = localStorage.getItem("token")
        if(!token) {
           next('/login')
        }else {
            console.log(token)
            const data = `token=${token}`
            let result = await reqGetToken(data)
            console.log(result)
            if(result.status ===200) next()
            else next('/login') //没有强制跳转到login页面
        }
    }
}) 

export default router