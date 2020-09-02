<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in banner" :key="index">
        <img :src="item.slide_show_imgUrl" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>
<script>
export default {
  name: "Banner",
  props: {
    banner: {
      type: Array,
    },
  },
};
</script>
<style lang="scss" scoped>
.my-swipe {
  width: 100%;
  margin-top: 240px;
  .van-swipe-item {
    width: 100%;
    img {
      width: 100%;
    }
  }
}
</style>