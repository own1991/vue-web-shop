<template>
  <div class="container">
    <!-- 顶部组件 -->
    <div class="index-top">
      <index-top />
    </div>
    <!-- better-scroll组件 -->
    <div style="overflow:hidden">
    <better-scroll class="wrapper" @incident="getData" :flag="flag" :pullDown="true">
      <div>
        <!-- 轮播图组件 -->
        <index-slides :slidesData="Data.slides" class="slides" />
        <!-- 分类组件 -->
        <index-category :categoryData="Data.category" class="category" />
        <!-- AD -->
        <img :src="advertesPicture" alt class="advertesPicture" />
        <!-- 推荐 -->
        <index-recommend :recommendData="Data.recommend" class="recommend" />
        <!-- 商品楼 -->
        <index-floor :title="floorName.floor1" floor="1F" :data="Data.floor1" />
        <!-- 商品楼 -->
        <index-floor :title="floorName.floor2" floor="2F" :data="Data.floor2" />
        <!-- 商品楼 -->
        <index-floor :title="floorName.floor3" floor="3F" :data="Data.floor3" />
        <!-- 热销商品 -->
        <index-hotGoods :hotGoodsData="Data.hotGoods" />
      </div>
    </better-scroll>
    </div>
  </div>
</template>
<script>
import indexTop from "../../components/index/IndexTop";
import indexSlides from "../../components/index/IndexSlides";
import indexCategory from "../../components/index/IndexCategory";
import indexRecommend from "../../components/index/IndexRecommend";
import indexFloor from "../../components/index/IndexFloor";
import indexHotGoods from "../../components/index/IndexHotGoods";
export default {
  data() {
    return {
      Data: {},
      advertesPicture: null,
      isLoading: false,
      floorName: {},
      flag: false
    };
  },
  props: {},
  components: {
    indexTop,
    indexSlides,
    indexCategory,
    indexRecommend,
    indexFloor,
    indexHotGoods
  },
  methods: {
    getData() {
      this.$api.getRecommend().then(res => {
        if ((res.code = 200)) {
          this.flag = true;
          this.Data = res.data;
          this.advertesPicture = res.data.advertesPicture.PICTURE_ADDRESS;
          this.floorName = res.data.floorName;
        }
      });
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
  .slides {
    height: 166px;
    width: 100%;
    margin-bottom: 10px;
  }
  .category {
    height: 70px;
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
}
.wrapper {
  margin-top: -30px;
  z-index: -1;
  height: 84vh;
  overflow: hidden;
}
</style>