<template>
  <div>
    <global-top>
      <div slot="back"></div>
      <div slot="title">购物车</div>
    </global-top>
    <guest-shop v-if="!nickname" />
    <user-shop v-else />
  </div>
</template>

<script>
import guestShop from "../../components/shoppingCart/GuestShop";
import userShop from "../../components/shoppingCart/UserShop";
export default {
  data() {
    return {};
  },
  props: {},
  components: {
    guestShop,
    userShop
  },
  methods: {
    getCardData() {
      this.$api.getCard().then(res => {
        res
      });
    }
  },
  mounted() {
    this.getCardData();
  },
  watch: {},
  computed: {
    nickname() {
      return this.$store.state.nickname;
    }
  }
};
</script>

<style scoped lang='scss'>
</style>