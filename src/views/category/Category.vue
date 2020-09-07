<template>
  <div>
    <div>
      <div>
        <van-nav-bar title="商品分类" />
      </div>
      <div>
        <van-search v-model="value" placeholder="请输入搜索关键词" />
      </div>
      <!-- 分类 -->
      <div>
        <!-- 左侧导航 -->
        <div></div>
        <!-- 右侧商品栏 -->
        <div>
          <!-- 头部导航 -->
          <div></div>
          <!-- 商品内容 -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>