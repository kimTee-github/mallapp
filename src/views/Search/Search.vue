<template>
  <div>
    <van-nav-bar title="商品搜索">
      <template #left>
        <van-icon name="arrow-left" size="24" @click="back"/>
      </template>
    </van-nav-bar>

    <van-search v-model="value" show-action label="商品名" placeholder="请输入商品关键词" @search="onSearch">
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>

    <div class="wrap" v-show="isShow">
      <!-- 热搜 -->
      <div class="recommend">
        <p>
          <span class="line"></span>
          <span class="recommend_span">全网热搜</span>
          <span class="line line2"></span>
        </p>
        <div class="hot">
          <div v-for="(item,index) in Hot" :key="index" class="hot_container">
            <span @click="to(item)">{{item}}</span>
          </div>
        </div>
      </div>

      <div class="history">
        <p>
          <span class="line"></span>
          <span>搜索历史</span>
          <span class="line"></span>
        </p>
        <div>
          <div v-for="(item,index) in history" :key="index">
            <div class="history_item">
              <p>{{item}}</p>
              <p>
                <van-icon name="cross" @click="del(index)" />
              </p>
            </div>
          </div>
        </div>

        <button>清空搜索历史</button>
      </div>
    </div>

    <!-- 搜索结果 -->
    <div v-show="show">
      <div class="container">
        <van-tabs v-model="active">
          <van-tab :title="item" v-for="(item,index) in title" :key="index">
            <div class="card">
              <div v-for="(item,index) in list" :key="index" class="card_item">
                <div class="card_content">
                  <img :src="item.goodsLogo" />
                  <p class="title">{{item.goodsName}}</p>
                  <p class="sale">已售{{item.goodsBuyNum}}件</p>
                  <p>
                    <span class="new">￥{{item.goodsPrice}}</span>
                    <span class="old">{{item.goodsOldPrice}}</span>
                    <span>
                      <van-icon name="star-o" />
                      {{item.goodsFav}}
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </van-tab>
        </van-tabs>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
      isShow: true,
      show: false,
      active: 0,
      title: ["综合", "销量", "新品", "价格"],
    };
  },
  computed: {
    Hot: function () {
      return this.$store.state.Search.Hot;
    },
    list: function () {
      return this.$store.state.Search.list;
    },
    history: function () {
      return this.$store.state.Search.history;
    },
  },
  created() {
    //搜索热词
    this.$store.dispatch("getSearchHot");
  },
  methods: {
    onSearch() {
      this.isShow = false;
      this.show = true;
      this.$store.dispatch("getSearch", this.value);
      this.$store.dispatch("getHistory", this.value);
    },
    del(index) {
      this.$store.dispatch("DelHistory", index);
    },
    to(item) {
      this.value = item;
      this.isShow = false;
      this.show = true;
      this.$store.dispatch("getSearch", this.value);
      this.$store.dispatch("getHistory", this.value);
    },
    back(){
        window.history.back()
    }
  },
};
</script>
<style scoped>
p {
  margin: 0px;
}
.wrap {
  width: 100%;
  height: 80vh;
  background: white;
}
.recommend {
  width: 100%;
  height: 300px;
  margin: auto;
}
.recommend p {
  width: 100%;
  height: 60px;
  font-size: 32px;
  display: flex;
  align-items: center;
  margin: 0px;
  padding: 20px 0px;
}
.recommend_span {
  word-wrap: normal;
  width: 150px;
  padding: 0px 40px;
}
.recommend .line {
  width: 100px; /*要先给出宽度*/
  border-top: 1px solid #bcbcbc;
}
.recommend .line2 {
  width: 450px;
}
.hot {
  width: 90%;
  height: 170px;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
}
.hot_container span {
  border: 1px solid #969799;
  padding: 5px 10px;
  margin: 0px 20px;
  font-size: 28px;
  border-radius: 10px;
  color: #969799;
}
.history {
  width: 100%;
  height: 300px;
}
.history p {
  width: 90%;
  height: 60px;
  font-size: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0px auto;
  padding: 20px 0px;
  color: #1989fa;
}
.history .line {
  width: 35%; /*要先给出宽度*/
  border-top: 1px solid #1989fa;
}
.history button {
  display: block;
  width: 400px;
  height: 100px;
  background: none;
  border: 1px solid #1989fa;
  margin: auto;
  font-size: 32px;
  color: #1989fa;
}
.container {
  width: 100%;
  height: 100vh;
}
.van-tabs {
  text-align: center;
}
.card {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.card_item {
  width: 46%;
  height: 400px;
  background: #fff;
  margin-top: 20px;
  position: relative;
}
.card_content {
  width: 100%;
}
.card_content img {
  width: 100%;
  height: 300px;
  border-radius: 20px;
}
.card_content .title {
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 25px;
}
.card_content .new {
  padding: 0px 20px;
  color: #ff5777;
}
.card_content .old {
  text-decoration: line-through;
  padding: 0px 20px;
}
.card_content .sale {
  width: 130px;
  height: 35px;
  line-height: 35px;
  background: #545450;
  position: absolute;
  left: 30px;
  bottom: 120px;
  z-index: 600;
  color: #fff;
  text-align: center;
}
.history_item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.history_item p {
  margin-left: 150px;
  text-align: center;
}
</style>