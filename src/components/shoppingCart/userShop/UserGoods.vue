<template>
  <div>
    <div>
      <van-checkbox v-model="item.checked" checked-color="#07c160"></van-checkbox>
    </div>
    <div>
      <img :src="item.image_path" alt />
    </div>
    <div>
      <div class="title">{{item.name}}</div>
      <div class="price">￥{{item.mallPrice}}</div>
      <div>
        <van-stepper :v-model="item.count" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    item:{
      type:Object,
      default:()=>{}
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
</style>