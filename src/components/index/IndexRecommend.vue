<template>
  <div class="container">
    <div>推荐商品</div>
    <div v-for="item in recommendData" :key="item.id">
      <img :src="item.image" alt />
      <div>{{item.goodsName}}</div>
      <div>
        ￥{{item.mallPrice}}
        <span>{{item.mallPrice}}</span>
      </div>
      <div><van-icon name="shopping-cart" /><div @click="$goto(item.goodsId)">查看详情</div></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    recommendData: {
      type: Array,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  background: white;
}
</style>