<template>
  <div>
    <global-top>
      <div slot="back"></div>
      <div slot="title">购物车</div>
    </global-top>
    <guest-shop v-if="!username" />
    <user-shop v-else />
  </div>
</template>

<script>
import guestShop from "../../components/shoppingCart/GuestShop";
import userShop from "../../components/shoppingCart/UserShop";
export default {
  data() {
    return {
      username:''
    };
  },
  props: {},
  components: {
    guestShop,
    userShop
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>