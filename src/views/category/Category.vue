<template>
  <div>
    <global-top>
      <div slot="back"></div>
      <div slot="title">商品分类</div>
    </global-top>
    <div class="main">
      <!-- 左侧导航栏 -->
      <van-sidebar v-model="mallCategoryId" class="sidebar">
        <van-sidebar-item
          v-for="item in category"
          @click="change(item)"
          :key="item.id"
          :title="item.mallCategoryName"
        />
      </van-sidebar>
      <!-- 右侧内容 -->
      <div class="detail">
        <categoryTabs class="categoryTabs" :category="data" :dataid="dataid" />
      </div>
    </div>
  </div>
</template>

<script>
import categoryTabs from "../../components/category/CategoryTabs";

export default {
  data() {
    return {
      category: [],
      mallCategoryId: 0,
      data: [],
      dataid: "",
    };
  },
  props: {},
  components: {
    categoryTabs
  },
  methods: {
    //获取一、二级分类的数据（包括id）
    getData() {
      this.$api.getRecommend().then(res => {
        if (res.code == 200) {
          // 加载一级分类
          this.category = res.data.category;
          //根据mallCategoryId来加载二级分类的列表和id
          this.data = res.data.category[this.mallCategoryId].bxMallSubDto;
          this.dataid =
            res.data.category[this.mallCategoryId].bxMallSubDto[0].mallSubId;
          this.actived = res.data.category[this.mallCategoryId].bxMallSubDto[0].mallSubId;
        }
      });
    },
    change(item) {
      //点击导航修改mallCategoryId
      this.mallCategoryId = item.mallCategoryId;
    }
  },
  mounted() {
    //挂载时获取mallCategoryId并进行异步获取
    this.$route.params.mallCategoryId
      ? (this.mallCategoryId = this.$route.params.mallCategoryId)
      : (this.mallCategoryId = 0);
    this.getData();
  },
  watch: {
    //监听mallCategoryId，修改时进行异步获取
    mallCategoryId(val) {
      this.getData();
    }
  },
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