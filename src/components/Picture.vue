<template>
    <div class="picture">
        <el-upload
        class="upload-demo"
        drag
        action="https://jsonplaceholder.typicode.com/posts/"
        multiple>
        <i class="el-icon-upload"></i>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
    </div>
</template>

<script>
export default {
    name:'Picture'
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