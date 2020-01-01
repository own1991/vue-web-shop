<template>
  <div>
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" @click="show=true" />
      <van-goods-action-icon icon="cart-o" text="购物车" @click="show=true" />
      <van-goods-action-button type="warning" text="加入购物车" @click="show=true" />
      <van-goods-action-button type="danger" text="立即购买" @click="show=true" />
    </van-goods-action>
    <van-dialog v-model="show" title="开发中" show-cancel-button><div>敬请期待</div></van-dialog>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
        show:false
    };
  },
  components: {
  },
  methods: {
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
/deep/ .van-goods-action {
  height: 10vh;
  z-index: 99;
}
</style>