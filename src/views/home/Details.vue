<template>
  <div>
    <!-- 头部 -->
    <div class="top">
      <p>
        <van-icon name="arrow-left" size="28px" @click="back()" />
      </p>
      <ul>
        <li @click="onContainer">商品</li>
        <li @click="onComments">评论</li>
        <li @click="onParameter">参数</li>
        <li @click="onRecommendlist">推荐</li>
      </ul>
    </div>
    <!-- 头部 -->

    <!-- 内容 -->
    <div class="container" ref="container">
      <div class="itemInfo_container">
        <img :src="goods.goodsLogo" width="100%" height="370px" />
        <!-- 商品描述 -->
        <div class="itemInfo_describe">
          <div class="itemInfo_describe_box">
            <p class="title">{{goods.goodsName}}</p>
            <p class="desc">
              <span class="price">￥{{goods.goodsPrice}}</span>
              <span class="oldPrice">{{goods.goodsOldPrice}}</span>
            </p>
            <p class="sale">
              <span>销量{{goods.goodsBuyNum}}</span>
              <span>收藏{{goods.goodsFav}}</span>
              <span>{{goods.goodsAre}}</span>
            </p>
          </div>
        </div>
        <!-- 商品物流服务 -->
        <div class="services">
          <div v-for="(item,index) in services" :key="index" class="services_container">
            <span>
              <img :src="item.icon" width="12px" />
            </span>
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>

      <!-- 评论 -->
      <div class="comments" ref="comments">
        <div class="comments_top">
          <p>买家评价{{comments.length}}</p>
          <p>更多</p>
        </div>
        <div v-for="(item,index) in comments" :key="index">
          <div class="comments_container">
            <div class="comments_user">
              <img :src="item.comment_body.user_img" alt />
              <span>{{item.comment_body.user_name}}</span>
            </div>
            <div class="content">{{item.comment_body.content}}</div>
            <div class="comments_desc">
              <span class="created">{{item.comment_body.audit_time}}</span>
              <!-- <span>{{rate.style}}</span> -->
              <span></span>
            </div>
          </div>
        </div>
      </div>

      <!-- 参数 -->
      <div class="parameter" ref="parameter">
        <!-- 店铺 -->
        <div class="shopInfo">
          <div class="logo">
            <img :src="shopInfo.shopLogo" alt />
            <span>{{shopInfo.shopName}}</span>
          </div>
          <div class="shopInfo_container">
            <div class="shopInfo_sale">
              <div>
                <p class="cSells">{{shopInfo.sells}}</p>
                <p>总销量</p>
              </div>
              <div>
                <p class="cSells">{{shopInfo.snum}}</p>
                <p>全部宝贝</p>
              </div>
            </div>
            <div class="shopInfo_desc">
              <p>
                <span>描述相符</span>
                <span>{{shopInfo.shopPiont}}</span>
                <span></span>
              </p>
              <p>
                <span>价格合理</span>
                <span>{{shopInfo.shopPriceOk}}</span>
                <span></span>
              </p>
              <p>
                <span>质量满意</span>
                <span>{{shopInfo.shopQuality}}</span>
                <span></span>
              </p>
            </div>
          </div>
        </div>
        <div v-html="goods.goodsIntroduce" class="par_container"></div>
      </div>
    </div>
    <!-- 内容 -->

    <!-- 加购 -->
    <div class="cart">
      <div class="collect">
        <div>
          <span class="service"></span>
          <span>客服</span>
        </div>
        <div>
          <span class="store"></span>
          <span>店铺</span>
        </div>
        <div>
          <span class="Collect"></span>
          <span>收藏</span>
        </div>
      </div>
      <p class="addcart" @click="add(goods.goodsId)">加入购物车</p>
      <p class="buy" @click="onClick">购买</p>
    </div>

    <van-popup v-model="show" position="bottom" :style="{ height: '50%' }" closeable>
      <div class="popup">
        <div class="popup_goods">
          <img :src="goods.goodsLogo" alt />
          <div class="popup_goods_item">
            <p class="popup_goods_price">￥{{goods.goodsPrice}}</p>
            <p>剩余{{goods.num}}</p>
            <p>选择颜色</p>
          </div>
        </div>
        <div class="popup_style">
          <p class="popup_color">颜色</p>
          <p class="popup_btn">
            <van-button type="default" size="mini" :class="{}" @click="on(index)">
              <img :src="goods.goodsLogo" width="30px" height="30px" />
              <span>默认</span>
            </van-button>
            <van-button type="default" size="mini" disabled>
              <img src="https://img.yzcdn.cn/2.jpg" width="30px" height="30px" />
              <span>蓝色</span>
            </van-button>
          </p>
        </div>
        <p class="popup_num">
          <span>购买数量</span>
          <span class="popup_num_item">
            <span class="popup_num_color">(限购10件)</span>
            <span>
              <van-stepper v-model="num" />
            </span>
          </span>
        </p>
        <van-goods-action>
          <van-goods-action-button type="warning" text="加入购物车" @click="add(goods.goodsId)" />
          <van-goods-action-button type="danger" text="立即购买" @click="onBuy(goods.goodsId,num)" />
        </van-goods-action>
      </div>
    </van-popup>
  </div>
</template>
<script>
export default {
  data() {
    return {
      details: [],
      logo: "",
      num: 1,
      show: false,
    };
  },
  computed: {
    data: function () {
      return this.$store.state.Details.data;
    },
    goods: function () {
      return this.$store.state.Details.goods;
    },
    services: function () {
      return this.$store.state.Details.services;
    },
    shopInfo: function () {
      return this.$store.state.Details.shopInfo;
    },
    comments: function () {
      return this.$store.state.Details.comments;
    },
  },
  mounted() {
    let id = this.$route.query.id;
    this.$store.dispatch("getDetails", id);
  },
  methods: {
    add(id) {
      console.log(id);
      this.$store.dispatch("getAdd", { id, num: this.num });
      this.$store.dispatch("getCart");
    },
    back() {
      window.history.back();
    },
    onContainer() {
      this.$refs.container.scrollIntoView({ behavior: "smooth" });
    },
    onParameter() {
      this.$refs.parameter.scrollIntoView({ behavior: "smooth" });
    },
    onComments() {
      this.$refs.comments.scrollIntoView({ behavior: "smooth" });
    },
    onRecommendlist() {
      this.$refs.recommendlist.scrollIntoView({ behavior: "smooth" });
    },
    onClick() {
      this.show = true;
    },
    on(index) {
      console.log(index);
    },
    onBuy(id,num) {
      console.log(num);
      this.$router.push({
        path: "/order",
        query: {
          id,
          num
        },
      });
    },
  },
};
</script>
<style lang="scss" scoped>
// 头部导航
.top {
  width: 100%;
  height: 128px;
  display: flex;
  align-items: center;
  position: fixed;
  top: 0px;
  z-index: 999;
  background: #fff;
  p {
    width: 15%;
    text-align: center;
  }
  ul {
    width: 70%;
    height: 100%;
    font-size: 32px;
    text-align: center;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
}

// 商品
.container {
  width: 100%;
  height: 100%;
  margin-top: 128px;
  background: #fff;
  .itemInfo_container {
    width: 100%;
    img {
      position: relative;
    }
    .itemInfo_describe {
      width: 100%;
      height: 330px;
      background: #fff;
      position: absolute;
      bottom: 290px;
      .itemInfo_describe_box {
        width: 96%;
        margin: auto;
        .title {
          width: 100%;
          margin: 20px auto;
          font-size: 38px;
        }
        .desc {
          width: 100%;
          height: 100px;
          margin-bottom: 0px;
          .price {
            color: #ff8198;
            font-size: 55px;
            font-weight: 500;
            vertical-align: bottom;
          }
          .oldPrice {
            color: #838383;
            text-decoration: line-through;
            font-size: 30px;
            font-weight: 500;
            margin-left: 40px;
            vertical-align: bottom;
          }
        }
        .sale {
          width: 96%;
          height: 50px;
          font-size: 28px;
          color: #797979;
          margin: auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 0px;
          padding-bottom: 20px;
          border-bottom: 1px solid #efefef;
        }
      }
    }
    .services {
      width: 96%;
      height: 130px;
      margin-bottom: 0px !important;
      margin: 150px auto;
      font-size: 26px;
      display: flex;
      justify-content: space-around;
      align-items: center;
      z-index: 200;
      .services_container {
        vertical-align: middle;
        img {
          padding-top: 0px;
        }
      }
    }

    .detailInfo {
      width: 100%;
      height: 100%;
      font-size: 30px;
      .detailInfo_desc {
        margin: 50px 10px;
      }
    }
  }
}

// 店铺
.shopInfo {
  width: 96%;
  height: 400px;
  margin: auto;
  border-top: 10px solid #f2f5f8;
  border-bottom: 10px solid #f2f5f8;
  .logo {
    width: 96%;
    height: 104px;
    margin: 30px auto;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    img {
      width: 15%;
      height: 100%;
      border-radius: 50%;
      border: 1px solid #d6d8db;
    }
    span {
      width: 80%;
      font-size: 36px;
      margin-left: 30px;
      font-weight: 500;
    }
  }
  .shopInfo_container {
    width: 93%;
    height: 200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    // align-items: center;
    .shopInfo_sale {
      flex: 3;
      height: 100%;
      font-size: 32px;
      display: flex;
      justify-content: space-around;
      text-align: center;
      .cSells {
        font-size: 35px;
        font-weight: 600;
      }
    }
    .shopInfo_desc {
      flex: 2;
      height: 100%;
      font-size: 30px;
      padding-left: 40px;
      border-left: 1px solid #d9dbde;
      border-left-width: 1px;
      margin: -30px 0px 0px 10px;
      span {
        padding: 0px 10px 0px 0px;
      }
    }
  }
}

// 参数
.parameter {
  width: 100%;
  margin-bottom: 10px;
  background: #fff;
  ::v-deep img {
    width: 100%;
  }
}

// 评论
.comments {
  width: 100%;
  height: 100%;
  background: #fff;
  margin-bottom: 20px;
  .comments_top {
    width: 92%;
    height: 100px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    font-size: 31px;
    color: #333333;
    border-bottom: 1px solid #e6e6e6;
    padding-right: 10px;
  }
  .comments_container {
    width: 94%;
    height: 300px;
    margin: auto;
    .comments_user {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      font-size: 32px;
      margin: 30px 0px;
      img {
        width: 100px;
        height: 100px;
        border-radius: 50%;
        margin-right: 50px;
      }
    }
    .content {
      font-size: 32px;
      color: #777777;
    }
    .comments_desc {
      width: 100%;
      height: 100px;
      font-size: 30px;
      color: #777777;
      .created {
        display: inline-block;
        margin: 30px 40px 20px 0px;
      }
    }
  }
}

// 推荐
.recommendlist {
  width: 100%;
  background: #fff;
  padding-top: 30px;
  .shop {
    width: 100%;
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    .shop_container {
      width: 46%;
      img {
        height: 500px;
      }
      .title {
        width: 100%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .describe {
        width: 70%;
        margin: auto;
        display: flex;
        justify-content: space-around;
        padding: 0px 0px 10px 0px;
      }
    }
  }
}

//底部加购
.cart {
  position: fixed;
  bottom: 0px;
  width: 100%;
  height: 128px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #fff;
  .collect {
    flex: 2;
    display: flex;
    justify-content: space-around;
    align-items: center;
    .service {
      display: block;
      width: 50px;
      height: 50px;
      background-size: 50px;
      background: url("../../assets/img/detail/detail_bottom.png") 0 0/100%;
      background-position: 0 -119px;
    }
    .store {
      display: block;
      width: 50px;
      height: 50px;
      background-size: 50px;
      background: url("../../assets/img/detail/detail_bottom.png") 0 0/100%;
      background-position: 0 -225px;
    }
    .Collect {
      display: block;
      width: 50px;
      height: 50px;
      background-size: 50px;
      background: url("../../assets/img/detail/detail_bottom.png") 0 0/100%;
    }
  }
  .addcart {
    flex: 1;
    height: 100%;
    line-height: 128px;
    text-align: center;
    font-size: 34px;
    background: #ffe817;
  }
  .buy {
    flex: 1;
    height: 100%;
    line-height: 128px;
    text-align: center;
    color: #fff;
    font-size: 34px;
    background: #ff6699;
  }
}

// 遮罩层
.van-popup {
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  .popup {
    width: 92%;
    height: 90%;
    margin: auto;
    .popup_goods {
      width: 100%;
      height: 200px;
      margin-top: 40px;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      img {
        width: 200px;
        height: 200px;
      }
      .popup_goods_item {
        margin-left: 30px;
        color: #969799;
        font-size: 25px;
        .popup_goods_price {
          font-size: 38px;
          font-weight: 600;
          color: #f23f53;
          margin-bottom: 20px;
        }
        p {
          margin: 10px 0px;
        }
      }
    }
    .popup_style {
      width: 100%;
      height: 150px;
      font-size: 32px;
      .popup_color {
        margin: 20px 0px 10px 0px;
      }
      .popup_btn {
        margin: 15px 0px 10px 0px;
        padding: 0px;
        .van-button {
          width: 150px;
          height: 70px;
          color: #000;
          font-size: 28px;
          vertical-align: middle;
          background: #f7f8fa;
          margin-right: 50px;
          border: none;
          img {
            vertical-align: middle;
          }
          span {
            vertical-align: middle;
            padding-left: 7px;
          }
        }
      }
    }
    .popup_num {
      width: 100%;
      height: 100px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 32px;
      .popup_num_item {
        display: flex;
        align-items: center;
        font-size: 28px;
        .popup_num_color {
          color: #f23f53;
        }
      }
    }
  }
}
</style>
