<template>
  <div class="container">
    <global-top>
      <div slot="title">评价中心</div>
    </global-top>
    <div class="goodinfo">
      <div class="image">
        <img :src="tobeOne.image_path" alt />
      </div>
      <div class="star">
        <div class="star-title">商品评分</div>
        <div>
          <van-rate v-model="tobeOne.rate" />
        </div>
      </div>
    </div>
    <textarea class="textarea" name id cols="45" rows="10" v-model="tobeOne.content"></textarea>
    <van-checkbox v-model="checked">匿名评价</van-checkbox>
    <div class="btn-box">
      <van-button class="btn" type="primary" @click="setComment()">提交</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tobeOne: {}
    };
  },
  props: {},
  components: {},
  methods: {
    evaluateOne() {
      this.$api.evaluateOne(this.$route.query.id).then(res => {
        console.log(res);
      });
    },
    setComment() {
      this.$api
        .comment({
          id: "5e0c95e7f967144a0446d231",
          rate: this.tobeOne.rate,
          content: this.tobeOne.content,
          anonymous: true,
          _id: this.tobeOne._id,
          order_id: this.tobeOne.order_id,
          image: []
        })
        .then(res => {
          console.log(res);
        });
    },
    getgood() {
      console.log(this.$route.query.id);
      this.$api.goodOne(this.$route.query.id).then(res => {
        if (res.code === 200) {
          console.log(res.goods.goodsOne);
        }
      });
    }

    // comment  商品评论(id,rate,content, anonymous(是否匿名), _id, order_id, image=[])
    // comment({ ...args }) {}
  },
  mounted() {
    this.tobeEvaluated();
    this.getgood();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  overflow: hidden;
}
.goodinfo {
  display: flex;
  padding: 10px;
  .image {
    padding: 10px;
    img {
      width: 80px;
    }
  }
  .star {
    margin-left: 20px;
  }
  .star-title {
    margin: 20px 0;
  }
}
.textarea {
  width: 100%;
  height: 200px;
  background: rgb(236, 236, 236);
  border: none;
}
.btn-box {
  margin-top: 20px;
  text-align: center;
}
.btn {
  width: 300px;
}
</style>