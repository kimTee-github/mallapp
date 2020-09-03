<template>
  <div class="wrap">
    <div class="login_wrap">
      <!-- 头部logo -->
      <div class="logo">
        <img :src="logo" />
      </div>
      <!-- 登录注册 -->
      <div class="login_container">
        <!-- 切换 -->
        <div class="login_top">
          <p @click="toLogin" :class="{'active':Show}">登录</p>
          <p @click="toRegister" :class="{'active':isShow}">注册</p>
        </div>
        <!-- 内容 -->
        <div>
          <LoginPage v-show="Show"></LoginPage>
          <Register v-show="isShow"></Register>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import LoginPage from "../../components/Login/LoginPage";
import Register from "../../components/Login/Register";
export default {
  data() {
    return {
      logo: require("../../assets/img/logo.png"),
      active: 0,
      Show: true,
      isShow:false
    };
  },
  components: {
    Register,
    LoginPage,
  },
  methods: {
    toLogin() {
      this.Show = true;
      this.isShow = false
    },
    toRegister() {
      this.Show = false;
      this.isShow = true
    },
  },
};
</script>
<style lang="scss" scoped>
* {
  width: 100%;
  height: 100%;
}
.wrap {
  width: 100%;
  background: #fff;
  height: 100vh;
  padding-top: 20px;
  .login_wrap {
    width: 94%;
    height: 100vh;
    margin: auto;
    border: 1px solid #dedede;
    .logo {
      width: 100%;
      height: 100px;
      text-align: center;
      border-bottom: 1px solid #eaeaea;
    }
    .login_container {
      width: 100%;
      height: 100px;
      .login_top {
        width: 100%;
        height: 100px;
        font-size: 32px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        color: black;
        text-decoration: none;
        background: #f5f5f5 !important;
        p{
            width: 50%;
            height: 100%;
            text-align: center;
            line-height: 100px;
        }
        .active {
          background: #fff;
        }
      }
    }
  }
}
</style>