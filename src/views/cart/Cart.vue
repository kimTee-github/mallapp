<template>
  <div>
    <van-nav-bar>
      <template #title>
        <p>购物车({{num}})</p>
      </template>
    </van-nav-bar>

    <div class="cart">
      <van-checkbox-group v-model="result" v-for="(item,index) in cart" :key="index">
        <van-swipe-cell>
          <van-checkbox @click="onCheck(item.ischecked)" v-model="item.ischecked">
            <div class="cart_container">
              <div class="img">
                <img :src="item.image" alt />
              </div>
              <div class="cart_item">
                <p class="title">{{item.title}}</p>
                <p class="count">
                  <span class>￥{{item.price}}</span>
                  <span>
                    <van-stepper v-model="item.product_amount" />
                  </span>
                </p>
              </div>
            </div>
          </van-checkbox>
          <template #right>
            <van-button square type="danger" text="删除" />
          </template>
        </van-swipe-cell>
      </van-checkbox-group>
    </div>

    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit(cart)">
      <van-checkbox>全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      num: "",
      result: [],
    };
  },
  computed: {
    cart: function () {
      return this.$store.state.Details.cart;
    },
  },
  mounted() {
    this.$store.dispatch("getCart");
    this.num = this.cart.length;
    console.log(this.cart);
  },
  methods: {
    onCheck(item){
      console.log(item);
    },
    onSubmit(cart){
      console.log(cart);
      
      
    }
  },
};
</script>
<style scoped>
.cart {
  width: 100%;
  height: 100%;
  background: #fff;
}
.van-checkbox-group {
  width: 100%;
  height: 280px;
  border-bottom: 1px solid #e1e2e4;
}
.van-checkbox {
  margin: 0px 15px;
}
.cart_container {
  width: 100%;
  height: 280px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
.cart_container .img {
  width: 200px;
  border-radius: 10px;
  margin: 0px 20px 0px 0px;
}
.cart_container .img img {
  width: 200px;
  height: 230px;
}
.cart_item {
  width: 40%;
  height: 280px;
  font-size: 34px;
}
.title {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.count {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
}
.van-button {
  height: 100%;
}
.van-submit-bar {
  margin-bottom: 100px;
}
</style>