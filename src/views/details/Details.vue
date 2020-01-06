<template>
  <div class="container">
    <!-- 返回按钮 -->
    <div class="back" @click="$router.go(-1)">
      <van-icon name="arrow-left" />
    </div>
    <!-- 图片轮播 -->
    <detail-swipe :item="goodsOne" />
    <!-- 产品信息 -->
    <detail-on :item="goodsOne" />
    <!-- 详情和用户评论 -->
    <van-tabs v-model="active">
      <van-tab title="商品详情">
        <div v-html="goodsOne.detail"></div>
      </van-tab>
      <van-tab title="用户评论" class="desc">
        <div v-if="comment.length===0">暂无评论</div>
        <div v-else>
          <detail-comm v-for="item in comment" :key="item.id" :item="item" />
        </div>
      </van-tab>
    </van-tabs>
    <detail-button :item="goodsOne"></detail-button>
  </div>
</template>

<script>
import detailSwipe from "../../components/details/DetailSwipe";
import detailOn from "../../components/details/DetailOn";
import detailButton from "../../components/details/DetailButton";
import detailComm from "../../components/details/DetailComm";
export default {
  name: "detail",
  data() {
    return {
      goodsOne: {},
      active: 0,
      flag: false,
      comment:[]
    };
  },
  beforeRouteLeave(to, from, next) {
    if (
      !this.$store.state.browseList.some(item => item.id === this.goodsOne.id)
    ) {
      this.$store.commit("pushBrowseList", this.goodsOne);
    }
    next();
  },
  props: {},
  components: {
    detailSwipe,
    detailOn,
    detailButton,
    detailComm
  },
  methods: {
    getgood() {
      console.log(this.$route.query.id);
      this.$api.goodOne(this.$route.query.id).then(res => {
        if (res.code === 200) {
          this.goodsOne = res.goods.goodsOne;
          this.comment=res.goods.comment
          console.log(this.comment);
        }
      });
    },
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
  background: white;
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
    color: rgb(182, 182, 182);
    background: rgba($color: #cecece, $alpha: 0.5);
  }
}
.desc {
  padding: 20px;
  margin-bottom: 10vh;
  text-align: center;
}
</style>