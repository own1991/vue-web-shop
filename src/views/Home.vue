<template>
  <div>
    <router-view />
    <!-- 标签栏路由模式，用于搭配vue-router使用。路由模式下会匹配页面路径和标签的to属性，并自动选中对应的标签 -->
    <van-tabbar route>
      <van-tabbar-item replace to="/home" icon="wap-home">首页</van-tabbar-item>
      <van-tabbar-item replace to="/category" icon="wap-nav">分类</van-tabbar-item>
      <van-tabbar-item replace to="/shoppingCart" icon="shopping-cart">购物车</van-tabbar-item>
      <van-tabbar-item replace to="/my" icon="manager">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>