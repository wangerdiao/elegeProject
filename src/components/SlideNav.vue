<template>
     <!-- 这里展示主页侧边栏 -->
  <div class="slideContainer">
    <div class="title">
      <svg t="1667113136041" class="icon" viewBox="0 0 1285 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7540" width="32" height="32"><path d="M1090.274918 63.791923l-450.273587-29.67593-450.273587 32.745779 452.320358 62.421709L1090.274918 63.791923zM177.447526 76.071526l-177.03936 122.796749 105.404928 163.728998 49.120768-124.843315L177.447526 76.071526zM167.213978 253.103514l-50.144154 127.913267 522.931405 608.867226-233.323622-561.795072L167.213978 253.103514zM174.377472 225.474253l253.790618-105.400525-235.370291-34.792448L174.377472 225.474253zM451.705037 129.283482l-274.257613 111.540326 236.393677 159.635763L451.705037 129.283482zM470.125363 129.283482l-34.793882 264.013005 184.202854-134.053069L470.125363 129.283482zM786.34025 127.236915l-143.268864 24.559309-139.175526-22.512742 139.175526 123.820032L786.34025 127.236915zM630.791168 275.616256l-202.623181 145.309491 203.646464 497.326797L630.791168 275.616256zM811.923968 132.353434l-146.338918 126.889984 190.342963 134.053069L811.923968 132.353434zM652.281446 273.56969l-3.070054 644.682854 196.483072-505.513267L652.281446 273.56969zM1093.344973 240.823808l-263.000781-111.540326 46.050714 258.896486L1093.344973 240.823808zM868.208128 422.972314l-228.206899 565.888307 524.978074-605.797274-47.074099-138.146304L868.208128 422.972314zM1103.578419 71.978291l30.700442 163.728998 41.957274 126.889984 107.451699-167.822234L1103.578419 71.978291zM1086.181581 79.141478l-236.393677 36.839014 264.024064 114.610278L1086.181581 79.141478z" p-id="7541"></path></svg>
        <h2 class="myName">二雕云盘</h2>
    </div>
    <el-col :span="4">
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1">
        <i class="el-icon-folder"></i>
        <span slot="title">文件</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-picture"></i>
        <span slot="title">相册</span>
      </el-menu-item>
      <el-menu-item index="3" >
        <i class="el-icon-star-on"></i>
        <span slot="title">收藏夹</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-delete-solid"></i>
        <span slot="title">回收站</span>
      </el-menu-item>
    </el-menu>
  </el-col>
  <div class="capacity">容量</div>
  <div class="user">
    <svg t="1667138670836" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2895" width="32" height="32"><path d="M498.602667 191.744a204.714667 204.714667 0 0 1 116.906666 372.8c133.162667 47.317333 229.077333 173.290667 231.893334 322.026667l0.085333 6.784h-64c0-157.333333-127.573333-284.885333-284.885333-284.885334-155.136 0-281.301333 123.968-284.821334 278.250667l-0.085333 6.613333h-64c0-151.68 96.810667-280.746667 232-328.810666a204.714667 204.714667 0 0 1 116.906667-372.8z m0 64a140.714667 140.714667 0 1 0 0 281.450667 140.714667 140.714667 0 0 0 0-281.450667z" fill="#1677FF" p-id="2896"></path></svg>
    <span class="name">用户：{{$store.state.user}}</span> <i class="el-icon-circle-close" @click="close"></i>
  </div>
  </div>
</template>

<script>
export default {
    name:'SlideNav',
    data(){
      return {
        user:1,
      }
    },
    methods:{
      close() {
        this.user +=1
        console.log(this.user,'close')
      }
    }
   
}
</script>

<style scoped>
    .slideContainer{
        display: flex;
        flex-direction: column;
        width: 231.73px;
        height: 100%;
        background-color: rgb(84 92 100);
    }
    .title {
      display: flex;
      width: 231.73px;
      height: 96px;
      align-items: center;
      
    }
    .title .myName {
      margin-left: 10px;
    }
    .el-menu-item {
      width: 231.73px;
    }
    .capacity {
      margin-top: 170px;
    }
    .user {
      display: flex;
      justify-content: space-around;
      align-items: center;
      border-top: solid 1px gray;
      margin-top: 60px;
      padding-top: 30px;
    }
    
</style>