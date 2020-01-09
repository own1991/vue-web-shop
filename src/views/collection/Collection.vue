<template>
  <div>
    <global-top>
      <div slot="title">我的收藏</div>
    </global-top>
    <better-scroll class="wrapper" :loaded="loaded" v-if="Collection.length>0">
      <goods-box v-for="item in Collection" :key="item.id" :item="item">
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
      Collection: [],
      loaded: false
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
    getCollection() {
      this.loaded = false;
      this.$api.getCollection().then(res => {
        if (res.code === 200) {
          this.loaded = true;
          this.Collection = res.data.list;
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