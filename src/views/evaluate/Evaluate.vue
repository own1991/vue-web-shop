<template>
  <div>
    <global-top>
      <div slot="back">
        <van-icon name="arrow-left" @click="$router.push('/my')" />
      </div>
      <div slot="title">评价中心</div>
    </global-top>
    <div class="top-bg"></div>
    <div class="nav">
      <van-tabs v-model="active" @click="change">
        <van-tab name="tobe" title="待评价"></van-tab>
        <van-tab name="done" title="已评价"></van-tab>
      </van-tabs>
    </div>
    <div class="main" v-if="active==='tobe'">
      <div v-if="tobeList.length===0" class="empty-msg">暂无数据</div>
      <better-scroll class="wrapper" :loaded="tobeload">
        <evaluate-box v-for="item in tobeList" :key="item.id" :item="item" />
      </better-scroll>
    </div>
    <div class="main" v-if="active==='done'" :loaded="loaded">
      <div v-if="doneList.length===0" class="empty-msg">暂无数据</div>
      <better-scroll class="wrapper">
        <evaluate-box
          v-for="item in doneList"
          :key="item.id"
          :_id="item._id"
          :item="item.goods[0]"
        />
      </better-scroll>
    </div>
  </div>
</template>

<script>
import evaluateBox from "../../components/evaluate/EvaluateBox";
export default {
  data() {
    return {
      active: "tobe",
      tobeList: [],
      doneList: [],
      tobeload: false,
      loaded: false
    };
  },
  props: {},
  components: {
    evaluateBox
  },
  methods: {
    tobeEvaluated() {
      this.tobeload = false;
      this.$api.tobeEvaluated().then(res => {
        if (res.code === 200) {
          this.tobeList = res.data.list;
          this.tobeload = true;
          console.log(this.tobeList);
        }
      });
    },
    alreadyEvaluated() {
      this.loaded = false;
      this.$api.alreadyEvaluated().then(res => {
        if (res.code === 200) {
          this.loaded = true;
          this.doneList = res.data.list;

          console.log(this.doneList);
        }
      });
    },
    change(name) {
      console.log(name);
    }
  },
  mounted() {
    this.alreadyEvaluated();
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
  // overflow: hidden;
  background: white;
  border-radius: 5px;
  box-shadow: 1px 1px 10px rgb(218, 218, 218);
  margin: -15px auto;
}
.main {
  margin-top: 20px;
}
.empty-msg {
  text-align: center;
  margin-top: 20px;
  font-size: 16px;
}
.wrapper {
  width: 100%;
  overflow: hidden;
  position: absolute;
  height: 58vh;
}
</style>