<template>
    <div class="picture">
       <ul class="myImg">
        <li>
            <el-upload
                class="upload-demo"
                drag
                action="http://localhost:3000/picture"
                :on-preview="handlePictureCardPreview" 
                :on-success="uploadSuccess"
                :data="userName"
                :show-file-list="false"
                multiple>
                <i class="el-icon-upload"></i>
                <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
                <div class="el-upload__tip" slot="tip">只能上传jpg/png文件且不超过500kb</div>
            </el-upload>
        </li>
        <li v-for="(showImg) in imgList" :key="showImg.index" >
            <img :src="showImg?showImg.src:defaultImg" alt="" class="imgList">
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
import {reqGetShowPicture} from '@/api/index'
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
            console.log(pages)
            const {user} = this.userName
            const result = await reqGetShowPicture(user,this.page)
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
        handlePictureCardPreview(res,file,fileList){
            console.log(file)
        },
        uploadSuccess(res,file,fileList){
            console.log(file,'文件上传成功')
            this.getPicture() //调用获取图片的回调
        },
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
        bottom: 56px;
    }
</style>