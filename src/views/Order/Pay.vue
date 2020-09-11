<template>
  <div>
    <div class="top">
      <van-nav-bar title="确认订单" :fixed="true">
        <template #left>
          <van-icon name="arrow-left" size="22" @click="back" />
        </template>
      </van-nav-bar>
    </div>

    <div class="container" v-show="isShow">
      <div class="container_total">
        <p>￥{{total}}</p>
      </div>

      <div class="container_pay">
        <van-checkbox-group v-model="result" :max="1" @click="on">
          <div class="container_pay_box">
            <van-checkbox name="a" @click="a(checked)" v-model="checked">
              <span>支付宝支付</span>
              <img :src="img1" width="100px" />
            </van-checkbox>
          </div>
          <div class="container_pay_box">
            <van-checkbox name="b">
              <span>微信支付</span>
              <img :src="img2" width="100px" />
            </van-checkbox>
          </div>
          <div class="container_pay_box">
            <van-checkbox name="c">
              <span>余额支付</span>
              <img :src="img3" width="100px" />
            </van-checkbox>
          </div>
        </van-checkbox-group>
      </div>
    </div>

    <div v-show="show">
      <!-- 密码输入框 -->
      <van-password-input
        :value="val"
        info="密码为 6 位数字"
        :focused="showKeyboard"
        @focus="showKeyboard = true"
      />
      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </div>

    <div class="btn">
      <van-button type="info" @click="topay">确认支付</van-button>
    </div>
  </div>
</template>
<script>
import qs from "qs";
import md5 from "js-md5";
import axios from "axios";
import { verifyPaypwd } from "../../api/home";
export default {
  data() {
    return {
      total: "",
      result: [],
      img1: require("../../assets/img/zhifubao.png"),
      img2: require("../../assets/img/weixin.png"),
      img3: require("../../assets/img/qianbao.png"),
      list: [],
      checked: false,
      val: "",
      showKeyboard: false,
      show: false,
      isShow: true,
      pwd: "",
    };
  },
  computed: {
    //   订单数据
    orderlist: function () {
      return this.$store.state.Order.orderlist;
    },
    orderNumber: function () {
      return this.$store.state.Order.orderNumber;
    },
  },
  mounted() {
    this.list = this.$route.query; //全部参数
    this.total = this.list.totalprice; //总价

    this.$store.dispatch("getCreateOrder", this.list);
    // console.log(this.result);
  },
  methods: {
    back() {
      window.history.back();
    },
    topay() {
      //支付密码框
      this.show = true;
      this.isShow = false;
    },
    on(e) {
      // console.log(e);
    },
    a(checked) {
      console.log(checked);
      this.checked = true;
    },
    onInput(key) {
      this.val = (this.val + key).slice(0, 6);
    },
    onDelete() {
      this.val = this.val.slice(0, this.val.length - 1);
    },
  },
  watch: {
    val(newval) {
      console.log(newval);
      if (newval.length == 6) {
        let params = {
          paypwd: newval,
        };
        console.log(params);

        params.paypwd = md5(params.paypwd);

        verifyPaypwd(qs.stringify(params)).then((res) => {
          console.log(res);
          if(res.code = 200){
            this.$store.dispatch('getPayOrder',this.orderNumber)
          }
        });
      }
    },
  },
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 85vh;
  margin-top: 100px;
  background: #fff;
}
.container_total {
  width: 100%;
  height: 200px;
  line-height: 200px;
  font-size: 46px;
  text-align: center;
}
.container_pay {
  width: 100%;
  font-size: 32px;
}
.container_pay_box {
  width: 100%;
  height: 120px;
  line-height: 120px;
}
.container_pay_box .van-checkbox {
  margin: auto;
  width: 85%;
  height: 120px;

  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container_pay_box span {
  float: left;
  margin-right: 20px;
  padding-top: 25px;
  vertical-align: middle;
}
.container_pay img {
  width: 80px;
  float: left;
}
.van-password-input {
  margin-top: 150px;
}
.btn {
  width: 100%;
  height: 130px;
  position: fixed;
  bottom: 0px;
}
.btn .van-button {
  width: 100%;
  height: 100%;
  font-size: 35px;
}
</style>