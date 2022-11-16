import requests from "./request";
//登录的接口
export const reqPostLogin = (data) => requests({ url: '/login', method: 'POST', data })
//注册的接口
export const reqPostRegister = (data) => requests({ url: '/register', method: 'POST', data })
//判断token的接口
export const reqGetToken = (data) => requests({ url: 'isHaveToken', method: 'POST', data })
//获取展示图片的接口
export const reqGetShowPicture = (user, page) => requests({ url: `/picture/showPicture?user=${user}&page=${page}`, method: 'GET' })
//删除图片的接口
export const reqPostDeletePicture = (id, user) => requests({ url: `/deletePicture?id=${id}&user=${user}`, method: 'POST' })
//获取展示回收站图片的接口
export const reqGetShowDeletePicture = (user, page) => requests({ url: `/recycle?user=${user}&page=${page}`, method: 'GET' })