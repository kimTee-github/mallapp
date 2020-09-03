<template>
  <div class="wrap">
    <div class="loginPage_container">
      <div class="box">
        <p>
          <span class="color">*</span>
          <span>手机号码</span>
        </p>
        <input type="text" placeholder="注册手机为找回密码的唯一凭证" v-model="phone" />
      </div>
      <div class="box">
        <p>
          <span class="color">*</span>
          <span>登录名</span>
        </p>
        <input type="text" placeholder="中、英文，不超过12个字符" v-model="loginName" />
      </div>

      <div class="box">
        <p>
          <span class="color">*</span>
          <span>密码</span>
        </p>
        <input type="text" placeholder="3-18位英文，数字，符号，区分大小写" v-model="pwd" />
      </div>

      <div class="box_validation">
        <p>
          <span>短信验证码</span>
        </p>
        <div class="validation">
          <input type="text" placeholder="请输入验证码" v-model="validats" />
          <button @click="send">发送验证码</button>
        </div>
      </div>

      <div class="btn">
        <button @click="toRegister">注册</button>
      </div>
    </div>
  </div>
</template>
<script>
import "../../api/index";
import { getUserPhone, getUserName, getCode, AddLogin } from "../../api/user";
import qs from "qs";
import md5 from "js-md5";
import axios from 'axios'
export default {
  data() {
    return {
      phone: "", //手机号
      loginName: "", //登录名
      pwd: "", //密码
      validats: "", //验证码
      msg: "", //用户接受的验证码
    };
  },
  methods: {
    async send() {
      let phoneStatus = await this.LoginPhone();
      let NameStatus = await this.LoginName();

      if (phoneStatus.code == 200 && NameStatus.code == 404) {
        // getCode({
        //   phone: this.phone,
        //   codeType: 0,
        // }).then((res) => {
        //   console.log(res.msg);
        //   this.msg = res.msg;
        // });
        axios.post(`http://www.hj0819.top:44369/api/SMSCode/GetCode?phone=${this.phone}&codeType=0`).then(res=>{

        })

      }
        if (phoneStatus.code == 204) {
          alert("该手机号已注册");
        }

        if (NameStatus.code == 200) {
          alert("该用户名称不可用");
        }
    },
    LoginPhone() {
      return getUserPhone({
        phone: this.phone,
        codeType: 0,
      });
    },
    LoginName() {
      return getUserName({
        LoginName: this.loginName,
      });
    },
    toRegister() {
      //   console.log(this.msg + this.validats);
      if (this.msg == this.validats) {
        let params = {
          LoginName: this.loginName,
          phone: this.LoginPhone,
          LoginPassword: this.pwd,
        };
        params.LoginPassword = md5(params.LoginPassword);
        AddLogin(qs.stringify(params)).then((res) => {
          console.log(res);
        });
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  .loginPage_container {
    width: 75%;
    height: 100%;
    margin: auto;
    font-size: 32px;
    padding-top: 50px;
    .box {
      width: 100%;
      height: 200px;
      p {
        .color {
          color: red;
          //   padding-right: 10px;
        }
      }
      input {
        width: 100%;
        height: 80px;
        border-radius: 10px;
        border: 1px solid #c8c8c8;
      }
      input::-webkit-input-placeholder {
        color: #c8c8c8;
        font-size: 28px;
        padding-left: 10px;
      }
    }
    .box_validation {
      width: 100%;
      height: 200px;
      .validation {
        width: 100%;
        //   height: 100%;
        display: flex;
        justify-content: space-between;
        input {
          width: 60%;
          height: 80px;
          border-radius: 10px;
          border: 1px solid #c8c8c8;
        }
        input::-webkit-input-placeholder {
          color: #c8c8c8;
          font-size: 28px;
          padding-left: 10px;
        }
        button {
          background: #409eff;
          color: #fff;
          border: none;
        }
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