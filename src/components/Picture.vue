<template>
    <div class="picture">
       <ul class="myImg">
        <li>
            <el-upload
                class="upload-demo"
                drag
                action="http://localhost:3000/picture"
                :on-success="uploadSuccess"
                :data="userName"
                :show-file-list="false"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                
            </el-upload>
        </li>
        <li v-for="(showImg) in imgList" :key="showImg.img_id" >
            <img :src="showImg?showImg.src:defaultImg" alt="" class="imgList">
            <div><i class="el-icon-delete" @click="deleteImg(showImg.img_id)"></i>
                <i class="el-icon-star-off" @click="loveImg(showImg.img_id)"></i>
                <i class="el-icon-download" @click="downloadImg(showImg.img_id)"></i>
            </div>
        </li>
       </ul>
       <el-pagination
            background
            class="pagination"
            layout="prev, pager, next"
            :current-page="page"
            @current-change="getPicture"
            :page-size="limit"
            hide-on-single-page
            :total="total">
        </el-pagination>
    </div>
</template>

<script>
import {reqGetShowPicture,reqPostDeletePicture,reqPostLoveImg,reqGetDownloadImg} from '@/api/index'
import defaultImg from '../../public/images/4RrS6Nn2YL.jpg'
export default {
    name:'Picture',
    mounted(){
       this.getPicture() //调用获取图片的回调
    },
    data(){
        return {
            userName:{user:this.$store.state.user?this.$store.state.user:JSON.parse(sessionStorage.getItem('user'))} ,
            imgList:[],
            defaultImg,
            total:0, //总共的数据
            page:1, //当前第几页
            limit:0  //页面展示limit个数据
        }
    },
    methods:{
        //获取图片回调
        async getPicture(pages=1){
            this.page=pages
            const {user} = this.userName
            const result = await reqGetShowPicture(user,this.page)
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
        //成功上传的回调
        uploadSuccess(res,file,fileList){
            this.$message({
            message: '上传图片成功',
            type: 'success'
            });
            this.getPicture(this.page) //调用获取图片的回调
        },
        //删除图片的回调
        async deleteImg(id) {
            const {user} = this.userName
            const result = await reqPostDeletePicture(id,user)
            console.log(result)
            if(result.code==200) {
                this.$message({
                message: '删除图片成功',
                type: 'success'
                });
                this.getPicture(this.page) //重新加载页面
            }
        },
        //加入收藏夹的回调
        async loveImg(id){
            const {user} = this.userName
            let result = await reqPostLoveImg(user,id)
            if(result.code==200) {
                this.$message({
                message: '收藏图片成功',
                type: 'success'
                });
                this.getPicture()
            }
        },
        async downloadImg(id) {
            const {user} = this.userName
            const result = await reqGetDownloadImg(user,id)
            console.log(result)
        }
    }
}
</script >

<style scoped>
    .picture {
        margin-top: 20px;
    }
    /deep/ .el-upload-dragger {
        width: 200px ;
    }
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