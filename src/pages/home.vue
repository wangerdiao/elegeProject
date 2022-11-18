<template>
    <div class="container">
      <SlideNav></SlideNav>
      <div class="home">
        <div class="title">
          <span class="selectName"><h2>{{title}}</h2></span>
        </div>
      <router-view></router-view>
      </div>
    </div>
</template>

<script>
export default {
    name:'Home',
    computed:{
      title(){
        return this.$route.params.toWhere || '主页'
      }
    }
}
</script>

<style scoped>
  .container {
    display: flex;
    height: 100%;
  }
  .home {
    display: flex;
    width: 100%;
    flex-wrap: wrap; 
    align-content: flex-start;
  }
  .title {
    display: flex;
      height: 96px;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      margin-left: 30px;
      margin-right: 30px;
      
  }
 
</style>