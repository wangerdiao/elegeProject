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
//删除回收站图片的接口
export const reqDeleteRecyclePicture = (user, id) => requests({ url: `/removeRecycleImg?user=${user}&id=${id}`, method: 'DELETE' })
//回收回收站图片的接口
export const reqPostRecyclePicture = (user, id) => requests({ url: `/recycleImg?user=${user}&id=${id}`, method: 'POST' })
//接受用户收藏图片的接口
export const reqPostLoveImg = (user, id) => requests({ url: `/loveImg?user=${user}&id=${id}`, method: 'POST' })
//获取收藏图片的接口
export const reqGetLoveImg = (user, page) => requests({ url: `/showMyLoveImg?user=${user}&page=${page}`, method: 'GET' })
//下载的接口
// export const reqGetDownloadImg = (user, id) => requests({ url: `/picture/downloadPicture?user=${user}&id=${id}`, method: 'POST', responseType: "arraybuffer" })
export const reqGetDownloadImg = (user, id) => requests({ url: `/picture/downloadPicture?user=${user}&id=${id}`, method: 'GET'})
    // .then(response => {
    //     // 用返回二进制数据创建一个Blob实例    
    //     const allowedFileTypes = ["image/png", "image/jpeg"];
    //     let blob = new Blob([response.data], {
    //         type: allowedFileTypes
    //     }) // for .xlsx files     

    //     // 通过URL.createObjectURL生成文件路径          
    //     let url = window.URL.createObjectURL(blob)

    //     // 创建a标签          
    //     let ele = document.createElement("a")
    //     ele.style.display = 'none'

    //     // 设置href属性为文件路径，download属性可以设置文件名称          
    //     ele.href = url
    //     console.log(url)
    //     ele.download = "测试文件"

    //     // 将a标签添加到页面并模拟点击          
    //     document.querySelectorAll("body")[0].appendChild(ele)
    //     ele.click()

    //     // 移除a标签          
    //     ele.remove()
    // });