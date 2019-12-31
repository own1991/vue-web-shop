<template>
  <div>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img :src="item.image" alt />
      </van-swipe-item>
      <van-swipe-item>
        <img :src="item.image_path" alt />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
img{
    width: 100%;
}
</style>