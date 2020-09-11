<template>
  <div>
    <div class="top">
      <van-nav-bar title="确认订单" :fixed="true">
        <template #left>
          <van-icon name="arrow-left" size="22" @click="back" />
        </template>
      </van-nav-bar>
    </div>

    <div class="order">
      <!-- 地址 -->
      <div class="address" @click="toAddress">
        <img src="http://hj0819.top/img/location.a0a8d05b.png" />
        <div class="address_container">
          <p>
            <span>{{defaultAddress.name}}</span>
            <span>{{defaultAddress.phone}}</span>
          </p>
          <p>
            {{defaultAddress.district}}{{defaultAddress.province}}{{defaultAddress.city}}
            {{defaultAddress.address}}
          </p>
        </div>
      </div>

      <!-- 订单 -->
      <div class="container">
        <div class="container_shop">
          <img :src="shop.shopLogo" alt />
          <p>{{shop.shopName}}</p>
        </div>
        <!-- 订单数据 -->
        <div class="content">
          <img :src="goods.goodsLogo" alt />
          <div class="content_goods">
            <div class="content_goods_top">
              <div class="content_goods_left">
                <p>{{goods.goodsName}}</p>
                <p class="goods_price">原价：{{goods.goodsOldPrice}}</p>
              </div>
              <div class="content_goods_right">
                <p>￥{{goods.goodsPrice}}</p>
                <p class="num">X{{num}}</p>
              </div>
            </div>
            <p>
              <span class="a">七天退换</span>
            </p>
          </div>
        </div>
        <!-- 物流 -->
        <div class="logistics">
          <div class="img">
            <img src="http://hj0819.top/img/yxf.686e3475.png" alt />
          </div>

          <div>
            <p>运费险</p>
            <p>确认收货前退货可理赔</p>
          </div>
          <div class="price">
            <p>￥15.00</p>
            <p>X1</p>
          </div>
        </div>
        <!-- 优惠 -->
        <div class="preferential">
          <p class="total">
            <span>商品总价</span>
            <span>￥69.99</span>
          </p>
          <p class="total">
            <span>运费（快递）</span>
            <span>￥0.00</span>
          </p>
          <p class="total">
            <span>运费险（卖家赠送）</span>
            <span>￥0.00</span>
          </p>
        </div>
        <!-- 总价 -->
        <p class="total">
          <span>商品小计</span>
          <span>{{totalprice}}</span>
        </p>
      </div>

      <!-- 订单提交 -->
      <div class="submit">
        <p>
          <span>应付金额：</span>
          <span class="price">￥{{totalprice}}</span>
        </p>
        <p>
          <span>共计：</span>&nbsp;&nbsp;&nbsp;&nbsp;
          <span>X{{num}}件</span>
        </p>
        <p class="pay">
          <span @click="topay(totalprice,id,isFcart,defaultAddress)">去支付</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      totalprice: 0,
      num: "",
      id: "",
      isFcart: false,
    };
  },
  computed: {
    goods: function () {
      return this.$store.state.Details.goods;
    },
    shop: function () {
      return this.$store.state.Details.shopInfo;
    },
    defaultAddress: function () {
      return this.$store.state.Order.defaultAddress;
    },
  },
  mounted() {
    this.id = this.$route.query.id;
    this.num = this.$route.query.num;

    this.$store.dispatch("getDetails", this.id);

    console.log(this.defaultAddress);

    this.totalprice = (this.goods.goodsPrice * this.num).toFixed(2);
  },
  methods: {
    back() {
      window.history.back();
    },
    toAddress() {
      this.$router.push({
        path: "/address",
      });
    },
    topay(totalprice, id, isFcart, defaultAddress) {
      // console.log(this.id);
      this.$router.push({
        path: "/pay",
        query: {
          totalprice,
          id,
          isFcart,
          defaultAddress,
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
p {
  margin: 0px;
  padding: 0px;
}
.order {
  width: 100%;
  height: 100vh;
  background: #fff;
  margin-top: 110px;
  z-index: 600;
  .address {
    width: 100%;
    height: 150px;
    display: flex;
    align-items: center;
    img {
      width: 80px;
      height: 80px;
      margin: 0px 20px;
    }
    .address_container {
      width: 600px;
      height: 200px;
      font-size: 32px;
      margin-top: 110px;
      span {
        margin-right: 20px;
      }
    }
  }
  .container {
    width: 100%;
    height: 100%;
    .container_shop {
      width: 94%;
      height: 100px;
      display: flex;
      align-items: center;
      font-size: 32px;
      img {
        width: 70px;
        height: 70px;
        border-radius: 50%;
        margin: 0px 20px;
      }
    }
    .content {
      width: 100%;
      display: flex;
      img {
        width: 190px;
        height: 240px;
        margin: 0px 20px;
      }
      .content_goods {
        width: 600px;
        height: 240px;
        .content_goods_top {
          width: 100%;
          height: 120px;
          font-size: 28px;
          display: flex;
          justify-content: flex-start;
          align-items: center;
          .content_goods_left {
            width: 80%;
            .goods_price {
              color: #acacac;
            }
          }
          .content_goods_right {
            width: 20%;
            height: 120px;
            padding-top: 50px;
            .num {
              font-size: 25px;
              vertical-align: bottom;
              padding-top: 20px;
            }
          }
        }
        p {
          span {
            margin-top: 20px;
            display: inline-block;
            width: 120px;
            height: 50px;
            line-height: 50px;
            text-align: center;
            border: 1px solid #ff5306;
            background: #fff1ec;
            color: #ff5306;
            border-radius: 10px;
          }
        }
      }
    }
    .logistics {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .img {
        width: 10%;
        img {
          width: 60px;
          height: 60px;
          margin: 0px 20px;
        }
      }
      .price {
        width: 40%;
        margin-right: 20px;
        text-align: right;
      }
    }
    .preferential {
      color: #b1b1b1;
    }
    .total {
      width: 94%;
      height: 60px;
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 28px;
    }
  }
  .submit {
    width: 100%;
    height: 120px;
    background: #fff;
    position: fixed;
    bottom: 0px;
    font-size: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    box-shadow: 0px -8px 20px #cecece;
    p {
      flex: 3;
      .price {
        color: #f21956;
      }
    }
    .pay {
      // width: 200px;
      height: 120px;
      line-height: 120px;
      font-size: 32px;
      text-align: center;
      color: #fff;
      background: #f21956;
    }
  }
}
</style>
