<template>
  <div class="login">
    <div class="logo-box">
      <img src="../assets/images/logo.png" alt="">
      <h1>新基建</h1>
    </div>
    <!-- <h1 class="tip">登录</h1> -->
    <van-form @submit="onSubmit" class="form">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        class="pass-box"
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <div class="to-register"><router-link to="/register" tag="span">我要注册</router-link></div>
      <div style="margin: 16px;">
        <van-button
          style="background: #0590DF;"
          round
          block
          type="primary"
          native-type="submit"
        >
          登录
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
import { Notify } from "vant";
export default {
  name: "",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  created() {},
  mounted() {},
  methods: {
    // 登录
    onSubmit() {
      if (!this.username) {
        Toast("请输入用户名");
        return;
      }
      if (!this.password) {
        Toast("请输入密码");
        return;
      }
      // 进行登录请求
      let data = {
        username:this.username,
        password:this.password
      }
       this.$POST('/customer/Signin',data)
        .then(res=>{
          this.getUserInfo()
        })
    },
    // 获取用户信息
    getUserInfo(){
       this.$POST('/customer/getCustomerByName',{username:this.username})
        .then(res=>{
          localStorage.setItem("user", JSON.stringify(res.data[0]) );
          Notify({ type: "success", message: "登录成功", duration: 1000 });
          this.$router.push("/home");
        })
    }
  }
};
</script>

<style lang="less" scoped>
.login {
  // background: url("../assets/images/bg.jpg") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  padding: 1rem;
  padding-top: 3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  .logo-box{
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.6rem;
    font-weight: bold;
    color: #0590DF;
    img{
      width: 3rem;
      margin-bottom: 0.5rem;
    }
  }
  .tip {
    margin-top: 2.5rem;
    font-weight: bold;
    color: #000;
    font-size: 1.2rem;
    padding-left: 1rem;
    padding-bottom: 1rem;
  }
  .form {
    margin-top: 4rem;
    input {
    }
  }
  button {
    margin-top: 5rem;
  }
  .to-register{
    text-align: right;
    color:#0590DF;
    height: 1.5rem;
    line-height: 1.5rem;
    font-size: 16px;
    cursor: pointer;
  }
}
</style>
<style lang="">
/* .login .van-cell {
  background-color: #b3dfe2;
}
.login .van-cell input {
  background-color: #b3dfe2;
  color: #fff;
}
.login .van-field__label {
  color: #fff;
}
.login .van-cell::after {
  border-bottom: 1px solid #fff;
}
.login .pass-box.van-cell::after {
  border-bottom: none;
} */
</style>
