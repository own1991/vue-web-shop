<template>
  <div>
    <van-tabs v-model="active" @change="getDetail">
      <van-tab
        v-for="item in category"
        :key="item.id"
        :title="item.mallSubName"
        :name="item.mallSubId"
      >
        <div class="main">
          <betterScroll>
            <category-box v-for="desc in dataList" :key="desc.id" :item="desc" />
          </betterScroll>
        </div>
      </van-tab>
    </van-tabs>
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
    }
  },
  data() {
    return {
      active: 0,
      dataList: []
    };
  },
  components: {
    betterScroll,
    categoryBox
  },
  methods: {
    getDetail(name, title) {
      this.$api.category(name).then(res => {
        if (res.code === 200) {
          this.dataList = res.dataList;
        }
      });
    }
  },
  mounted() {},
  watch: {
    category(val) {
      this.active = 1;
      this.getDetail(val[0].mallSubId, "");
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>