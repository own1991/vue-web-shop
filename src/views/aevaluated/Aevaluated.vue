<template>
  <div>
    <global-top>
      <div slot="title">评价中心</div>
    </global-top>
    <div class="header">
      <img :src="item.image" alt />
      <div>
        <van-rate v-model="item.rate" />
      </div>
      <div class="comment_time">{{item.comment_time}}</div>
    </div>
    <div class="content">评论内容: {{item.content}}</div>
    <div class="good-box">
      <img :src="good.image_path" alt />
      <div class="good-name">名称: {{good.name}}</div>
      <div @click="$addShop(good.id)" class="shopping-cart">
        <van-icon name="shopping-cart" />
      </div>
    </div>
    <div class="btn-box">
      <van-button class="btn" type="primary" @click="goBack">返回</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {},
      good: {}
    };
  },
  props: {},
  components: {},
  methods: {
    goBack() {
      // this.$router.go(-1)
      this.$router.push({ name: "evaluate", query: { active: this.item.cid } });
    },
    getData() {
      this.$api.alreadyEvaluated().then(res => {
        this.item = res.data.list.filter(
          item => item._id === this.$route.query.id
        )[0];
        this.good = this.item.goods[0];
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
.header {
  display: flex;
  margin: 20px;
  font-size: 14px;
  justify-content: space-between;
  .comment_time{
    line-height: 20px;
  }
}
.content {
  margin: 0 20px;
  font-size: 14px;
}
.good-box {
  margin: 100px 20px;
  font-size: 14px;
  display: flex;

  .good-name {
    line-height: 60px;
  }
  img {
    width: 50px;
    height: 50px;
  }
  .shopping-cart {
    width: 14px;
    height: 14px;
    text-align: center;
    padding: 10px;
    margin: 15px 8px;
    border-radius: 50%;
    background: rgb(241, 121, 121);
  }
}
.btn-box {
  margin-top: 20px;
  text-align: center;
}
.btn {
  width: 300px;
}
</style>