<template>
  <div>
    <div>
      <van-nav-bar
        title="个人信息"
        right-text="退出"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
  </div>
</template>
<script>
import { Dialog } from "vant";
export default {
  methods: {
    onClickLeft() {
      window.history.back();
    },
    onClickRight() {
      Dialog.confirm({
        title: "退出确认",
        message: "该操作将退出登录，是否确认？",
      }).then(() => {
        
        this.$router.push({
          path: "/Login",
        });
      });
    },
  },
};
</script>
<style scoped>
</style>