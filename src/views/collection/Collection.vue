<template>
  <div>
    <global-top>
      <div slot="title">我的收藏</div>
    </global-top>
    <better-scroll
      class="wrapper"
      :pullUp="true"
      :Uploaded="Uploaded"
      :loadedAll="loadedAll"
      @pullingUp="getCollection"
      v-if="Collections.length>0"
    >
      <goods-box v-for="item in Collections" :key="item.id" :item="item">
        <div slot="close">
          <van-icon @click="del(item)" name="delete" />
        </div>
      </goods-box>
    </better-scroll>
    <div v-else class="msg">暂无数据</div>
  </div>
</template>

<script>
import goodsBox from "../../components/box/GoodsBox";
export default {
  data() {
    return {
      Collections: [],
      Uploaded: false,
      loadedAll: false,
      page: 1
    };
  },
  props: {},
  components: {
    goodsBox
  },
  methods: {
    del(item) {
      this.$dialog
        .alert({
          title: "提示框", //加上标题
          message: "是否删除？", //改变弹出框的内容
          showCancelButton: true //展示取水按钮
        })
        .then(() => {
          this.$api.cancelCollection(item.cid).then(res => {
            this.getCollection();
          });
        })
        .catch(() => {
          this.$toast("取消删除");
        });
    },
    //获取收藏
    getCollection() {
      this.Uploaded = false;
      this.$store.state.cancelLoad = true;
      this.$api.getCollection(this.page).then(res => {
        if (res.code === 200) {
          if (res.data.count > this.Collections.length) {
            this.page++;
            this.Collections.push(...res.data.list);
          } else {
            this.loadedAll = true;
          }
          this.Uploaded = true;
          this.$store.state.cancelLoad = false;
        }
      });
    }
  },
  mounted() {
    this.getCollection();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.msg {
  padding: 40px;
  text-align: center;
  background: white;
}
.wrapper {
  overflow: hidden;
  height: 94vh;
}
.van-icon {
  font-size: 16px;
}
</style>