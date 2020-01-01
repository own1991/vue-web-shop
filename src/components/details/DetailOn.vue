<template>
  <div class="container">
    <div class="title">￥{{item.name}}</div>
    <div class="price">￥{{item.present_price}}</div>
    <div class="desc">
      <div>运费：0</div>
      <div>剩余：{{item.amount}}</div>
      <div @click="flag=!flag">
        <div v-if="flag">点击收藏</div>
        <div v-else>取消收藏</div>
      </div>
    </div>
    <div class="store">
      <div><van-icon name="shop-o" />有赞的店</div>
      <div>进入店铺</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  },
  props: {
    item: {
      type: Object,
      default: () => {}
    }
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
  background: white;
}
.title {
  padding: 10px;
  font-size: 16px;
}
.price {
  padding-left: 10px;
  color: red;
  font-size: 16px;
}
.desc,.store {
  font-size: 16px;
  color: gray;
  margin: 15px 0;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  border-top: 1px solid #e6e6e6;
  border-bottom: 1px solid #e6e6e6;
}
.store{
  color: #000;
}
.van-icon-shop-o{
  width: 20px;
  height: 18px;
}
</style>