<template>
  <div>
    <global-top>
      <div slot="back"></div>
      <div slot="title">商品分类</div>
    </global-top>
    <div class="main">
      <van-sidebar v-model="mallCategoryId" class="sidebar">
        <van-sidebar-item
          v-for="item in category"
          @click="call(item)"
          :key="item.id"
          :title="item.mallCategoryName"
        />
      </van-sidebar>
      <div class="detail">
        <categoryTabs class="categoryTabs" :category="data"/>
        
      </div>
    </div>
  </div>
</template>

<script>
import globalTop from "../../components/slot/GlobalTop";
import categoryTabs from "../../components/category/CategoryTabs";

export default {
  data() {
    return {
      category: [],
      mallCategoryId: 0,
      data:[],
      initial:''
    };
  },
  props: {},
  components: {
    globalTop,
    categoryTabs
  },
  methods: {
    getData() {
      this.$api.getRecommend().then(res => {
        if (res.code == 200) {
          this.category = res.data.category;
          this.data=res.data.category[0].bxMallSubDto;
        }
      });
    },
    call(item) {
      this.data=item.bxMallSubDto
      this.mallCategoryId = item.mallCategoryId;
    }
  },
  mounted() {
    this.getData();
    this.mallCategoryId = this.$route.params.mallCategoryId;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.main {
  display: flex;
  height: 86vh;
  .detail {
    width: 75%;
  }
}
.sidebar {
  height: 100%;
  width: 25%;
  background: #fafafa;
  .van-sidebar-item {
    padding: 10px;
  }
}
</style>