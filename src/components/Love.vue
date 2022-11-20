<template>
    <div>
        <ul class="myImg">
        <li v-for="(showImg) in imgList" :key="showImg.img_id" >
            <img :src="showImg?showImg.src:defaultImg" alt="" class="imgList">
            <div>
                <i class="el-icon-delete" @click="removeImg(showImg.img_id)"></i>
                <i class="el-icon-star-on" @click="recycleImg(showImg.img_id)"></i>
                <i class="el-icon-download" @click="loveImg(showImg.img_id)"></i>
            </div>
        </li>
       </ul>
       <el-pagination
            background
            class="pagination"
            layout="prev, pager, next"
            :current-page="page"
            @current-change="getLoveImg"
            :page-size="limit"
            hide-on-single-page
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
import {reqGetLoveImg,reqGetDownloadImg} from '@/api/index'
import defaultImg from '../../public/images/4RrS6Nn2YL.jpg'
export default {
    name:'Love',
    data(){
        return {
            userName:{user:this.$store.state.user?this.$store.state.user:JSON.parse(sessionStorage.getItem('user'))} ,
            imgList:[],
            defaultImg,
            total:0, //总共的数据
            page:1, //当前第几页
            limit:10  //页面展示limit个数据
        }
    },
    mounted() {
        this.getLoveImg()
    },
    methods:{
        //获取收藏图片的回调
        async getLoveImg(pages=1) {
            this.page=pages
            const {user} = this.userName
            let result = await reqGetLoveImg(user,this.page)
            console.log(result)
            if(result.code=== '200')  {
                this.imgList = result.sendData
                this.total = result.total
                this.limit = result.limit
            }else {
                this.$message({
                message: '获取图片资源失败',
                type: 'warning'
                });
            }
        },
        async loveImg(id) {
            const { user } = this.userName;
            const result = await reqGetDownloadImg(user, id);
            if (result.code == 200) {
                const { imgPath, imgName } = result;
                this.download(imgName, imgPath);
            }
        },
        //先设置创建a标签进行下载得函数
        download( name,imgsrc) {
        let image = new Image();
        // 解决跨域 Canvas 污染问题
        image.setAttribute("crossOrigin", "anonymous");
        image.onload = function() {
            let canvas = document.createElement("canvas");
            canvas.width = image.width;
            canvas.height = image.height;
            let context = canvas.getContext("2d");
            context.drawImage(image, 0, 0, image.width, image.height);
            let url = canvas.toDataURL("image/png"); //得到图片的base64编码数据
            let a = document.createElement("a"); // 生成一个a元素
            let event = new MouseEvent("click"); // 创建一个单击事件
            a.download = name || "qrcode.jpg"; // 设置图片名称
            a.href = url; // 将生成的URL设置为a.href属性
            a.dispatchEvent(event); // 触发a的单击事件
        };
            image.src = imgsrc;
        },
    }
}
</script>

<style scoped>
     .myImg {
        width: 1120px;
        display: flex;
        flex-wrap: wrap;
        margin-left: 10px;
        list-style-type:none
    }
    .myImg li {
        align-content: flex-start;
        margin-left: 17px;
    }
    .imgList {
        height: 200px;
        width: 200px;
        object-fit:cover;
    }
    .pagination {
        text-align: center;
        position: fixed;
        left: 640px;
        bottom: 30px;
    }
</style>