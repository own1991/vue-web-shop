<template>
  <div class="container">
    <!-- 吸顶 -->
    <van-sticky>
      <!-- 顶部组件 -->
      <index-top />
    </van-sticky>
    <better-scroll>
      <div>
        <!-- 下拉刷新 -->
        <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh"> -->
        <!-- 轮播图组件 -->
        <index-slides :slidesData="Data.slides" class="slides" />
        <!-- 分类组件 -->
        <index-category :categoryData="Data.category" class="category" />
        <!-- AD -->
        <img :src="advertesPicture" alt class="advertesPicture" />
        <!-- 推荐 -->
        <index-recommend :recommendData="Data.recommend" class="recommend" />
        <div class="height"></div>
        <!-- </van-pull-refresh> -->
      </div>
    </better-scroll>
  </div>
</template>
<script>
import indexTop from "../../components/index/IndexTop";
import indexSlides from "../../components/index/IndexSlides";
import indexCategory from "../../components/index/IndexCategory";
import indexRecommend from "../../components/index/IndexRecommend";
import betterScroll from "../../components/slot/BetterScroll";
export default {
  data() {
    return {
      Data: {},
      advertesPicture: null,
      isLoading: false
    };
  },
  props: {},
  components: {
    indexTop,
    indexSlides,
    indexCategory,
    indexRecommend,
    betterScroll
  },
  methods: {
    getData() {
      this.$axios.req("/recommend").then(res => {
        console.log(res);
        if ((res.code = 200)) {
          this.Data = res.data;
          this.advertesPicture = res.data.advertesPicture.PICTURE_ADDRESS;
        }
      });
    },
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    }
  },
  mounted() {
    this.getData();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  background: #ededed;
  .slides {
    height: 166px;
    width: 100%;
    margin-bottom: 10px;
  }
  .category {
    height: 86px;
    width: 355px;
    margin: 0 10px;
    padding: 10px 0;
    background: white;
    border-radius: 10px;
  }
  .advertesPicture {
    height: 31px;
    margin: 10px 10px;
    width: 355px;
  }
  .recommend{
    height: 500px;
  }
}
</style>