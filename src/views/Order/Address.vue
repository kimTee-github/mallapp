<template>
  <div>
    <van-nav-bar title="更换收货地址">
      <template #right>
        <span @click="to">新增</span>
      </template>
      <template #left>
        <van-icon name="arrow-left" size="22" @click="back" />
      </template>
    </van-nav-bar>

    <div>
      <van-address-list
        v-model="chosenAddressId"
        :list="address"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
        @select="onSelect"
      />
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      chosenAddressId: 19,
    };
  },
  computed: {
    address: function () {
      return this.$store.state.Order.address;
    },
    defaultAddress: function () {
      return this.$store.state.Order.defaultAddress;
    },
  },
  mounted() {
    this.$store.dispatch("getArea");
  },
  methods: {
    back() {
      window.history.back();
    },
    onAdd() {
      Toast("新增地址");
    },
    onEdit(item) {
      this.$store.dispatch("updateArea", item);
    },
    onSelect(item) {
      this.$store.dispatch("ChangeAddress", item);
    },
    to() {
      this.$router.push({
        path: "/area",
      });
    },
  },
};
</script>
<style scoped>
</style>