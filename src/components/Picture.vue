<template>
    <div class="picture">
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
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
import {reqGetShowPicture} from '@/api/index'
export default {
    name:'Picture',
    mounted(){
        const {user} = this.userName
        const result = reqGetShowPicture(user)
    },
    data(){
        return {
            userName:{user:this.$store.state.user} || ''
        }
    },
    methods:{
        handlePictureCardPreview(res,file,fileList){
            console.log(file)
        },
        uploadSuccess(res,file,fileList){
            console.log(file,'文件上传成功')
        },
    }
}
</script >

<style scoped>
    .picture {
        margin-top: 20px;
    }
    /deep/ .el-upload-dragger {
        width: 220px ;
    }
</style>