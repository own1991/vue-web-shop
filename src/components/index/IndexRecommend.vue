<template>
  <div class="container">
    <div class="title">推荐商品</div>
    <better-scroll
      class="wrapperX"
      :className="'.wrapperX'"
      :scrollX="true"
      :scrollY="false"
      :click="false"
    >
      <recommend-box
        class="recommend-box"
        v-for="item in recommendData"
        :key="item.id"
        :item="item"
      />
    </better-scroll>
  </div>
</template>

<script>

import recommendBox from "../../components/index/RecommendBox";
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
  components: {
    recommendBox
  },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  .title {
    font-size: 16px;
    padding: 10px;
    background: white;
    border-bottom: 0.1px solid rgb(243, 243, 243);
  }
}

// .recommend-group {
//   width: 2125px;
//   height: 190px;
//   display: inline-block;
// }
.recommend-box {
  width: 125px;
  display: inline-block;
  border: 0.1px solid rgb(243, 243, 243);
}
.wrapperX {
  background: white;
  width: 375px;
  overflow: hidden;
  white-space: nowrap;
}
</style>