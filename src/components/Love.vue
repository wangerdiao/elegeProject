<template>
    <div>
        <ul class="myImg">
        <li v-for="(showImg) in imgList" :key="showImg.img_id" >
            <img :src="showImg?showImg.src:defaultImg" alt="" class="imgList">
            <div><i class="el-icon-success" @click="recycleImg(showImg.img_id)"></i>
                <i class="el-icon-error" @click="removeImg(showImg.img_id)"></i>
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
import {reqGetLoveImg} from '@/api/index'
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
        }
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