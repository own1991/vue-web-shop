<template>
  <div>
    <user-top />
    <user-goods v-for="item in shopList" :key="item.id" :item='item' />
  </div>
</template>

<script>
import userTop from "./userShop/UserTop";
import UserGoods from "./userShop/UserGoods";
export default {
  data() {
    return {
      shopList: []
    };
  },
  props: {},
  components: {
    userTop,
    UserGoods
  },
  methods: {
    getCardData() {
      this.$api.getCard().then(res => {
        if (res.code === 200) {
          this.shopList = res.shopList;
          console.log(this.shopList);
        }
      });
    }
  },
  mounted() {
    this.getCardData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>