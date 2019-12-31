<template>
  <div class="container">
    <div class="back" @click="$router.go(-1)">
      <van-icon name="arrow-left" />
    </div>
    <detail-swipe :item="goodsOne" />
    <detail-on :item="goodsOne" />
    <van-tabs v-model="active">
      <van-tab title="商品详情">
        <div v-html="goodsOne.detail"></div>
      </van-tab>
      <van-tab title="用户评论" class="desc">暂无评论</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import detailSwipe from "../../components/details/DetailSwipe";
import detailOn from "../../components/details/DetailOn";
export default {
  name: "detail",
  data() {
    return {
      goodsOne: {},
      active:0
    };
  },
  props: {},
  components: {
    detailSwipe,
    detailOn
  },
  methods: {
    getgood() {
      console.log(this.$route.query.id);
      this.$api.goodOne(this.$route.query.id).then(res => {
        if (res.code === 200) {
          this.goodsOne = res.goods.goodsOne;
        }
      });
    }
  },
  mounted() {
    this.getgood();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  position: relative;
}
.back {
  position: fixed;
  left: 5px;
  top: 5px;
  z-index: 10;
  .van-icon-arrow-left {
    font-size: 24px;
    line-height: 40px;
    text-align: center;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: rgba($color: #000000, $alpha: 0.2);
  }
}
.desc{
  text-align: center;
}
</style>