<template>
  <div>
    <div>
      <van-checkbox v-model="checked" checked-color="#07c160">全选</van-checkbox>
    </div>
    <div>
      <div>
        合计：
        <span>{{sum}}</span>
      </div>
      <div v-if="checkeds.length>0">请确认订单</div>
    </div>
    <van-button type="primary">删除</van-button>
    <van-button type="primary">结算</van-button>
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