<template>
  <div class="container">
    <div class="title">推荐商品</div>
    <van-swipe :stop-propagation="false" indicator-color="white">
      <div class="wrapperX" ref="wrapperX">
        <div class="recommend-group">
          <recommend-box
            class="recommend-box"
            v-for="item in recommendData"
            :key="item.id"
            :item="item"
          />
        </div>
      </div>
    </van-swipe>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
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
  methods: {
    init() {
      this.bs = new BScroll(".wrapperX", {
        scrollX: true,
        click: true,
        probeType: 3 // listening scroll hook
      });
    }
  },
  mounted() {
    this.init();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  background: white;
  .title {
    padding: 10px;
    background: white;
  }
}
/deep/.van-swipe__indicators {
  display: none;
}
.wrapperX {
  width: 375px;
  overflow: hidden;
  white-space: nowrap;
  .recommend-group {
    width: 2125px;
    height: 200px;
  }
  .recommend-box {
    width: 125px;
    display: inline-block;
    border: 0.1px solid rgb(243, 243, 243);
  }
}
</style>