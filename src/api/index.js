import requests from "./request";
//登录的接口
export const reqPostLogin = (data) => requests({url:'/login',method:'POST',data})
//注册的接口
export const reqPostRegister = (data) => requests({url:'/register',method:'POST',data})