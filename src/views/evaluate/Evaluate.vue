<template>
  <div>
    <global-top>
      <div slot="title">评价中心</div>
    </global-top>
    <div class="top-bg"></div>
    <div class="nav">
      <van-tabs v-model="active" @click="change">
        <van-tab name="tobe" title="待评价"></van-tab>
        <van-tab name="done" title="已评价"></van-tab>
      </van-tabs>
    </div>
    <div class="main">
      <evaluate-box v-for="item in list" :key="item.id" :item="item" />
      <div v-if="list.length===0">暂无数据</div>
    </div>
  </div>
</template>

<script>
import evaluateBox from "../../components/evaluate/EvaluateBox";
export default {
  data() {
    return {
      active: "tobe",
      list: []
    };
  },
  props: {},
  components: {
    evaluateBox
  },
  methods: {
    tobeEvaluated() {
      this.$api.tobeEvaluated().then(res => {
        if (res.code === 200) {
          this.list = res.data.list;
          console.log(this.list);
        }
      });
    },
    alreadyEvaluated() {
      this.$api.alreadyEvaluated().then(res => {
        this.list = res.data.list;
        console.log(res);
      });
    },
    change(name) {
      if (name === "tobe") {
        this.tobeEvaluated();
      } else {
        this.alreadyEvaluated();
      }
    }
  },
  mounted() {
    this.tobeEvaluated();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.top-bg {
  width: 100%;
  height: 30vh;
  background: url("../../assets/evaluate.jpg");
  background-size: 100%;
}
.nav {
  width: 90%;
  height: 40px;
  padding: 4px;
  overflow: hidden;
  background: white;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgb(218, 218, 218);
  margin: -15px auto;
}
.main {
  margin-top: 20px;
}
</style>