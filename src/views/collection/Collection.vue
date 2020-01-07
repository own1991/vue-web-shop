<template>
  <div>
    <global-top>
      <div slot="title">我的收藏</div>
    </global-top>
    <div v-if="browseList.length>0">
      <goods-box v-for="item in browseList" :key="item.id" :item="item">
        <div slot="close">
          <van-icon @click="del(item)" name="delete" />
        </div>
      </goods-box>
    </div>
    <div v-else class="msg">暂无数据</div>
  </div>
</template>

<script>
import goodsBox from "../../components/box/GoodsBox";
export default {
  data() {
    return {
      browseList: []
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
            this.getbrowseList();
          });
        })
        .catch(() => {
          this.$toast("取消删除");
        });
    },
    getbrowseList() {
      this.$api.getCollection().then(res => {
        this.browseList = res.data.list;
      });
    }
  },
  mounted() {
    this.getbrowseList();
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
</style>