import requests from "./request";
//登录的接口
export const reqPostLogin = (data) => requests({url:'/login',method:'POST',data})
//注册的接口
export const reqPostRegister = (data) => requests({url:'/register',method:'POST',data})
//判断token的接口
export const reqGetToken = (data) => requests({url:'isHaveToken',method:'POST',data})
//获取展示图片的接口
export const reqGetShowPicture = (user) => requests({url:`/picture/showPicture?user=${user}`,method:'GET'})