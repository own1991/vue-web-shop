<template>
  <div>
    <!-- 顶部 -->
    <van-tabs v-model="$parent.dataid" @change="getDetail">
      <van-tab
        v-for="item in category"
        :key="item.id"
        :title="item.mallSubName"
        :name="item.mallSubId"
      ></van-tab>
    </van-tabs>
    <div class="main">
      <betterScroll class="wrapper">
        <category-box v-for="desc in dataList" :key="desc.id" :item="desc" />
      </betterScroll>
    </div>
  </div>
</template>

<script>
import betterScroll from "../../components/slot/BetterScroll";
import categoryBox from "../../components/category/CategoryBox";
export default {
  props: {
    category: {
      type: Array,
      default: () => []
    },
    dataid: {
      type: String,
      default: ""
    },
  },
  data() {
    return {    
      dataList: []
    };
  },
  components: {
    betterScroll,
    categoryBox
  },
  methods: {
    // 获取每项列表
    getDetail(name, title) {
      this.$api.category(name).then(res => {
        if (res.code === 200) {
          this.dataList = res.dataList;
        }
      });
    }
  },
  mounted() {
  },
  watch: {
    //监听dataid的变化进行异步获取
    dataid(val) {
      this.getDetail(val, "");
    },
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.wrapper {
  height: 80vh;
  overflow: hidden;
}
</style>