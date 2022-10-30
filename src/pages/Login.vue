<template>
  <div>
    <video id="v1" autoplay loop muted>
        <source src="../assets/壁纸1.mp4" type="video/mp4"/>
    </video>
   <div class="login">
     <h2 class="title">二雕云盘</h2> 
            <form >账号:<input type="text" v-model="account" name="account" class="account" autocomplete></form>
           <form > 密码:<input type="password" v-model="password" name="pwd" class="pwd" autocomplete></form>
           <el-button  @click="login" size="mini" class="denglu">登录</el-button>
            <el-button   @click="gotoRegister" size="mini" class="zhuce">注册</el-button>
   </div>
  </div>
</template>

<script>
import {reqPostLogin} from '@/api/index'
export default {
  name: "Login",
  data() {
    return {
      account:'',
      password:'',
    }
  },
  methods:{
    //进入注册页面
    gotoRegister(){
      this.$router.push('/register')
    },
    //登录按钮
    async login() {
     if(this.account !=='' && this.password !=='') {
      const data = `account=${this.account}&password=${this.password}`
      let result = await reqPostLogin(data)
      if(result.data===200) {
        this.$message({
          message: '登录成功',
          type: 'success'
        });
        this.$router.push('/home')
      }else {
        this.$message({
          message: '登录失败，账号或密码错误',
          type: 'warning'
        });
      }
     }else {
      this.$message({
          message: '登录失败，账号或密码不能为空',
          type: 'warning'
        });
     }
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
            margin-top: 5px;
            margin-left: 50px;
            border-radius: 6px;
        }
        .register {
            font-size: 10px;
            margin-top: 5px;
            margin-left: 50px;
            border-radius: 6px;
        }
</style>