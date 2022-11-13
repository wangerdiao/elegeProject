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
            defaultImg
        }
    },
    methods:{
        //获取图片回调
        async getPicture(){
            const {user} = this.userName
            const result = await reqGetShowPicture(user)
            console.log(result)
            if(result.code=== '200')  {
                this.imgList = result.img
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
</style>