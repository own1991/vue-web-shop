<template>
  <div>
    <div v-if="keywords.length>0">
      <div class="title">
        <div>搜索历史</div>
        <div @click="del">
          <van-icon name="delete" />
        </div>
      </div>
      <div class="history">
        <div v-for="item in keywords" :key="item.id" @click="change(item)">{{ item }}</div>
      </div>
    </div>
    <div v-else class="mian">暂无历史记录</div>
    <!-- 删除的弹框 -->
    <van-dialog v-model="show" title="提示" show-cancel-button @confirm="okay">
      <div>是否删除</div>
    </van-dialog>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      show: false
    };
  },
  components: {},
  methods: {
    del() {
      this.show = true;
    },
    okay() {
      this.$store.state.keywords = [];
    },
    change(item) {
      this.$parent.keyword = item;
    }
  },
  mounted() {},
  watch: {},
  computed: {
    keywords() {
      return this.$store.state.keywords;
    }
  }
};
</script>

<style scoped lang='scss'>
.title {
  display: flex;
  padding: 8px 20px;
  justify-content: space-between;
  font-size: 14px;
}
.history {
  padding: 4px 10px;
  display: flex;
  div {
    margin: 5px;
    padding: 5px 20px;
    border-radius: 10px;
    background: rgb(230, 228, 228);
    font-size: 12px;
  }
}
.mian {
  padding: 50px;
  text-align: center;
  font-size: 16px;
}
</style>