<template>
  <div class="container">
    <div class="title">推荐商品</div>
    <better-scrollX>
      <div class="recommend-group">
        <recommend-box
          class="recommend-box"
          v-for="item in recommendData"
          :key="item.id"
          :item="item"
        />
      </div>
    </better-scrollX>
  </div>
</template>

<script>
import recommendBox from "../../components/index/RecommendBox";
import betterScrollX from "../../components/slot/BetterScrollX";
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
    recommendBox,
    betterScrollX
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

.recommend-group {
  width: 2125px;
  height: 190px;
}
.recommend-box {
  width: 125px;
  display: inline-block;
  border: 0.1px solid rgb(243, 243, 243);
}
</style>