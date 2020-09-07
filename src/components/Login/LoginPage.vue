<template>
  <div class="wrap">
    <div class="loginPage_container">
      <div class="box">
        <p>
          <span class="color">*</span>
          <span>账号</span>
        </p>
        <input type="text" placeholder="请输入登录账号" v-model="loginName" />
      </div>

      <div class="box">
        <p>
          <span class="color">*</span>
          <span>密码</span>
        </p>
        <input type="text" placeholder="请输入登录密码" v-model="loginPwd" />
      </div>

      <p class="pwd">
        <input type="checkbox" name id @click="onPwd" />
        <span>记住密码</span>
      </p>

      <div class="btn">
        <button @click="login">登录</button>
      </div>
    </div>
  </div>
</template>
<script>
import qs from "qs";
import md5 from "js-md5";
import { Login } from "../../api/user";
import axios from "axios";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";
export default {
  data() {
    return {
      loginName: "",
      loginPwd: "",
      // status:200  状态
    };
  },
  methods: {
    ...mapMutations({
      setToken: "setToken",
    }),
    login() {
      let params = {
        loginName: this.loginName,
        LoginPassword: this.loginPwd,
        isPassing: "yes",
      };
      params.LoginPassword = md5(params.LoginPassword);
      axios
        .post(
          `http://www.hj0819.top:44369/api/LoginPage/Login`,
          qs.stringify(params)
        )
        .then((res) => {
          // console.log(res.data.tnToken.tokenStr);

          this.setToken(res.data.tnToken.tokenStr);
          setTimeout(() => {
            this.$router.push({ path: "/home" });
          }, 1000);
        });
    },
    onPwd() {},
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100vh;
  .loginPage_container {
    width: 75%;
    height: 100vh;
    margin: auto;
    font-size: 32px;
    padding-top: 100px;
    .box {
      width: 100%;
      height: 200px;
      p {
        .color {
          color: red;
          padding-right: 10px;
        }
      }
      input {
        width: 100%;
        height: 70px;
        border-radius: 10px;
        border: 1px solid #c8c8c8;
      }
      input::-webkit-input-placeholder {
        color: #c8c8c8;
        font-size: 28px;
        padding-left: 10px;
      }
    }
    .pwd {
      vertical-align: middle;
    }
    .btn {
      button {
        display: block;
        width: 100%;
        height: 100px;
        background: #409eff;
        color: #fff;
        border: none;
      }
    }
  }
}
</style>