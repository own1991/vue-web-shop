<template>
  <div>
    <global-top>
      <div slot="title">评价中心</div>
    </global-top>
    <div>
      <img :src="item.image" alt />
      <div>
        <van-rate v-model="item.rate" />
      </div>
      <div>时间{{item.date}}</div>
    </div>
    <div>内容{{item.content}}</div>
    <div class="good-box">
      <img :src="item.goodimage" alt />
      <div>名称{{item.goodname}}</div>
      <div><van-icon name="shopping-cart" /></div>
    </div>
    <div class="btn-box">
      <van-button class="btn" type="primary" @click="$router.go(-1)">返回</van-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: {}
    };
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
.btn-box {
  margin-top: 20px;
  text-align: center;
}
.btn {
  width: 300px;
}
</style>