<template>
  <div>
    <div class="wrap">
      <div class="top">
        <div class="logo">
          <img :src="logo" />
        </div>
        <van-search placeholder="请输入搜索关键词" @click="toSearch"/>
      </div>
      <Banner :banner="banner"></Banner>
      <Grid :grid="grid"></Grid>

      <div class="goods">
        <van-sticky :offset-top="100">
          <div class="shop_category">
            <div
              v-for="(item,index) in type"
              :key="index"
              :class="{'active':defaultIndex===index}"
              @click="onClick(index)"
            >
              <p>{{item.name}}</p>
            </div>
          </div>
        </van-sticky>

        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="onLoad">
          <div class="shop">
            <div v-for="(item,index) in goods" :key="index" class="shop_container">
              <div @click="to(item.goodsId)">
                <img :src="item.goodsLogo" width="100%" />
                <p class="title">{{item.goodsName}}</p>
                <div class="describe">
                  <span>￥{{item.goodsPrice}}</span>
                  <span>
                    <van-icon name="star-o" />
                    {{item.goodsFav}}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </van-list>
      </div>
      <div>
        <el-backtop target=".wrap">
          <div class="toTop">
            <van-icon name="back-top" size="32" />
          </div>
        </el-backtop>
      </div>
      
    </div>
  </div>
</template>
<script>
import Banner from "../../components/content/Banner";
import Grid from "../../components/content/Grid";
import { getGoods } from "../../api/home";
export default {
  data() {
    return {
      logo: require("../../assets/img/logo.png"),
      loading: false,
      finished: false,
      error: false,
      page: 2,
      list: [],
    };
  },
  components: {
    Banner,
    Grid,
  },
  computed: {
    banner: function () {
      return this.$store.state.Banner.banner;
    },
    grid: function () {
      return this.$store.state.Grid.grid;
    },
    type: function () {
      return this.$store.state.Goods.type;
    },
    defaultIndex: function () {
      return this.$store.state.Goods.defaultIndex;
    },
    goods: function () {
      return this.$store.state.Goods.goods;
    },
  },
  mounted() {
    this.$store.dispatch("getBanner");
    this.$store.dispatch("getGrid");
    this.$store.dispatch("getGoods");
  },
  methods: {
    // 获取列表数据方法
    async getList() {
      let res = await getGoods({
        page: this.page,
        type: this.type[this.defaultIndex].type,
      });
      // console.log(res.data);

      if (res.data === 0) {
        // 判断获取数据条数若等于0
        this.goods = []; // 清空数组
        this.finished = true; // 停止加载
      }
      // 若数据条数不等于0
      this.total = res.data.total; // 给数据条数赋值
      this.goods.push(...res.data); // 将数据放入list中
      this.loading = false; // 加载状态结束
      // 如果list长度大于等于总数据条数,数据全部加载完成
      // console.log(this.goods);
      if (this.goods.length >= res.data.total) {
        this.finished = true; // 结束加载状态
      }
    },
    // 被 @load调用的方法
    onLoad() {
      // 若加载条到了底部
      let timer = setTimeout(() => {
        // 定时器仅针对本地数据渲染动画效果,项目中axios请求不需要定时器
        this.getList(); // 调用上面方法,请求数据
        this.page++; // 分页数加一
        this.finished && clearTimeout(timer); //清除计时器
      }, 500);
    },
    // 加载失败调用方法
    onRefresh() {
      this.finished = false; // 清空列表数据
      this.loading = true; // 将 loading 设置为 true，表示处于加载状态
      this.page = 1; // 分页数赋值为1
      // this.list = []; // 清空数组
      this.onLoad(); // 重新加载数据
    },
    onClick(index) {
      this.$store.dispatch("getIndex", index);
    },
    to(id) {
      this.$router.push({
        path: "/mydetail",
        query: {
          id,
        },
      });
    },
    toSearch(){
      this.$router.push({
        path:'/search'
      })
    }
 },
};
</script>
<style scoped>
.warp {
  width: 100%;
  height: 100vh;
  overflow-x: hidden;
}
.top {
  width: 100%;
  height: 210px;
  position: fixed;
  top: 0px;
  z-index: 500;
}
.logo {
  width: 100%;
  height: 100px;
  text-align: center;
  border-bottom: 12px solid #eaeaea;
}
.logo img {
  width: 100%;
  height: 100px;
}
.goods {
  width: 100%;
  margin-top: 20px;
}
.shop_category {
  width: 100%;
  height: 90px;
  font-size: 34px;
  font-weight: 600;
  padding-bottom: 10px;
  background: #fff;
  display: flex;
  justify-content: space-around;
}
.shop {
  width: 100%;
  margin-top: 20px;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
.shop_container {
  width: 46%;
}
.shop img {
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
.active {
  color: #fe5777;
  border-bottom: 5px solid #fe5777;
}
.toTop {
  width: 90px;
  height: 90px;
  text-align: center;
  box-shadow: 0px 0px 20px #868686;
  position: fixed;
  bottom: 150px;
  right: 50px;
  background: #fff;
  z-index: 900;
}
</style>