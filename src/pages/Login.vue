<template>
  <div>
    <video id="v1" autoplay loop muted>
        <source src="../assets/壁纸1.mp4" type="video/mp4"/>
    </video>
   <div class="login">
     <h2 class="title">二雕云盘</h2> 
            账号<input type="text" value="wangerdiao" name="account" class="account"><br>
            密码<input type="password" value="111111" name="pwd" class="pwd"><br>
            <button class="denglu">登录</button>
            <button class="register" @click="gotoRegister">注册</button>
   </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods:{
    gotoRegister(){
      this.$router.push({  //push方法
                name:'zhuce', 
            })
    }
  }
};
</script>

<style scoped>
        video{  
            position: fixed;  
            min-width: 100%;  
            min-height: 100%;  
            height: auto;  
            width: 50%;  
            z-index:-11;
        }  
        source{  
            min-width: 100%;  
            min-height: 100%;  
            height: auto;  
            width: auto;  
        } 
        .login {
            position: fixed;
            margin-left: 40%;
            margin-top: 17%;
        }
        h2 {
            text-align: center;
            margin-bottom: 5px;
        }
        .account {
            margin-bottom: 5px;
            border-radius: 6px;
        }
        .pwd {
            margin-bottom: 5px;
            border-radius: 6px;
        }
        .denglu {
            font-size: 10px;
            width: 30px;
            height: 25px;
            margin-top: 5px;
            margin-left: 50px;
            border-radius: 6px;
        }
        .register {
            font-size: 10px;
            width: 30px;
            height: 25px;
            margin-top: 5px;
            margin-left: 50px;
            border-radius: 6px;
        }
</style>