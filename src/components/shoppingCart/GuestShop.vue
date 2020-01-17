<template>
  <div class="container-guest">
    <img src="../../assets/order.gif" alt />
    <div class="desc">登录后才能查看订单</div>
    <van-button type="primary" class="btn" @click="$goto('/login')">请先登录</van-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
        
    };
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
.container-guest{
    text-align: center;
    background: white;
    .desc{
        font-size: 20px;
    }
    .btn{
        margin: 10px;
    }
}
img{
    width: 100%;
}
</style>