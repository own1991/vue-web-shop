<template>
  <div class="container">
    <van-swipe :autoplay="3000" :stop-propagation='false' indicator-color="white" >
      <van-swipe-item v-for="item in slidesData" :key="item.id" @click="$goto(item.goodsId)" >
        <img :src="item.image" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: {
    slidesData: {
      type: Array,
      default: () => []
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
img{
    width: 100%;
}
</style>