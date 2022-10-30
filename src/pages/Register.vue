<template>
 <div class="register-container">
    <!-- 注册内容 -->
    <div class="register">
      <h3>注册新用户
        <span class="go"  @click="goLogin">我有账号，去 登陆</span>
      </h3>
      <div class="content">
        <label>账号:</label>
        <input placeholder="请输入你的账号" name="phone" v-model="account" autocomplete/>
      </div>
      
      <div class="content">
        <form >
        <label>登录密码:</label>
        <input type="password" placeholder="请输入你的密码" name="password" v-model="password" autocomplete/>
        </form>
      </div>
      <div class="content">
        <form >
        <label>确认密码:</label>
        <input type="password" placeholder="请输入你的确认密码" name="password1" v-model="password1" @blur="showErr" autocomplete/>
        </form>
        <span v-show="!isTrue" id="isTrue">确认密码与登录密码不同</span>
      </div>
      <div class="btn">
        <el-button  @click="register">完成注册</el-button>
      </div>
    </div>

  </div>
</template>

<script>
import {reqPostRegister} from '@/api/index'
export default {
    name:'Register',
    data() {
      return {
        account:'',
        password:'',
        password1:'',
        isTrue:true, // 判断确认密码是否正确
      }
    },
    methods:{
      //确认密码失去焦点事件
      showErr() {
        this.isTrue =  this.password === this.password1? true:false
      },
      //点击去登录按钮
      goLogin(){
        this.$router.push('./login')
      },
      async register(){
       if(this.account !=='' && this.password !=='' && this.password1 !==''){
        try {
        const data = `account=${this.account}&password=${this.password}`
        let result = await reqPostRegister(data)
        if(result.data===200) {
          this.$message({
          showClose: true,
          message: '注册成功',
          type: 'success'
        });
          this.$router.push('/login')
        }else {
          this.$message({
          showClose: true,
          message: '注册失败，账户已经存在',
          type: 'warning'
        });
        }
       } catch (error) {
        console.log(error)
       }
       }else {
        this.$message({
          showClose: true,
          message: '请输入完整的登录账号和密码',
          type: 'warning'
        });
       }
      }
  }
    
} 
</script>

<style lang="less" scoped>
 .register-container {
    .register {
      width: 1200px;
      height: 445px;
      border: 1px solid rgb(223, 223, 223);
      margin: 0 auto;

      h3 {
        background: #ececec;
        margin: 0;
        padding: 6px 15px;
        color: #333;
        border-bottom: 1px solid #dfdfdf;
        font-size: 20.04px;
        line-height: 30.06px;

        span {
          font-size: 14px;
          float: right;

          a {
            color: #e1251b;
          }
        }
      }

      div:nth-of-type(1) {
        margin-top: 40px;
      }

      .content {
        padding-left: 390px;
        margin-bottom: 18px;
        position: relative;

        label {
          font-size: 14px;
          width: 96px;
          text-align: right;
          display: inline-block;
        }

        input {
          width: 270px;
          height: 38px;
          padding-left: 8px;
          box-sizing: border-box;
          margin-left: 5px;
          outline: none;
          border: 1px solid #999;
        }

        img {
          vertical-align: sub;
        }

        .error-msg {
          position: absolute;
          top: 100%;
          left: 495px;
          color: red;
        }
      }

      .controls {
        text-align: center;
        position: relative;

        input {
          vertical-align: middle;
        }

        .error-msg {
          position: absolute;
          top: 100%;
          left: 495px;
          color: red;
        }
      }

      .btn {
        text-align: center;
        line-height: 36px;
        margin: 17px 0 0 55px;

        button {
          outline: none;
          width: 270px;
          height: 36px;
          background: #e1251b;
          color: #fff !important;
          display: inline-block;
          font-size: 16px;
        }
      }
    }

    .copyright {
      width: 1200px;
      margin: 0 auto;
      text-align: center;
      line-height: 24px;

      ul {
        li {
          display: inline-block;
          border-right: 1px solid #e4e4e4;
          padding: 0 20px;
          margin: 15px 0;
        }
      }
    }
    #isTrue {
      padding-left: 5px;
      color:red
    }
  }
</style>