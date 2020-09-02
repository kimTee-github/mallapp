<template>
  <div class="grid">
    <div v-for="(item,index) in grid" :key="index" class="grid_container">
      <div class="grid_item">
        <img :src="item.sp_home_ico" alt />
        <p>{{item.sp_home_title}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    grid: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
.grid {
//   margin-top: 10px;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  background: #fff;
  padding-top: 20px;
  .grid_container {
    width: 20%;
    text-align: center;
    .grid_item {
      width: 90%;
      img {
        width: 100%;
      }
    }
  }
}
</style>