<template>
  <div>
    <router-view />
    <!-- 标签栏路由模式，用于搭配vue-router使用。路由模式下会匹配页面路径和标签的to属性，并自动选中对应的标签 -->
    <van-tabbar v-model="active">
      <van-tabbar-item replace to="/home" name="home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" name="category" icon="wap-nav">分类</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/shoppingCart"
        :info="Num"
        name="shoppingCart"
        icon="shopping-cart"
      >购物车</van-tabbar-item>
      <van-tabbar-item replace to="/my" name="my" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "home"
    };
  },
  props: {},
  components: {},
  methods: {
    getnickname() {
      if (localStorage.getItem("nickname")) {
        this.$store.state.nickname = localStorage.getItem("nickname");
      }
    },
    
  },
  mounted() {
    this.getnickname();
    this.$store.dispatch("getShopList");
    this.active = this.$route.name;
  
  },
  watch: {
    $route(val) {
      this.active = val.name;
    }
  },
  computed: {
    Num() {
      return this.$store.getters.getnum;
    }

  }
};
</script>

<style scoped lang='scss'>
/deep/ .van-tabbar {
  height: 8vh;
}
</style>