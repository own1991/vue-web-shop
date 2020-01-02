<template>
  <div>
    <better-scroll class="wrapper">
      <div>
        <goods-box
          v-for="item in dataList"
          :key="item.id"
          :item="item"
          :keyword="keyword"
        >
          <div slot="del"></div>
        </goods-box>
      </div>
    </better-scroll>
  </div>
</template>

<script>
import goodsBox from "../../box/GoodsBox";
export default {
  props: {
    keyword: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      dataList: []
    };
  },
  components: {
    goodsBox
  },
  methods: {
    
    getdata() {
      this.$api.search(this.keyword, 1).then(res => {
        if (res.code === 200) {
          this.dataList = res.data.list;
        }
      });
    }
  },
  mounted() {
    this.getdata();
  },
  watch: {
    //   监听value值得变化
    keyword(val) {
      this.getdata();
    }
  },
  computed: {}
};
</script>

<style scoped lang='scss'>
.wrapper {
  overflow: hidden;
  height: 94vh;
}
</style>