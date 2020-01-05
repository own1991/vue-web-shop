<template>
  <div class="container">
    <div class="image">
      <img :src="item.image_path" alt />
    </div>
    <div class="name">{{item.name}}</div>
    <div class="btn">
      <div class="isComment" v-if="isComment" @click="done">查看评价</div>
      <div class="noComment" v-else @click="tobe">评价晒图</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    tobe() {
      this.$router.push({ name: "rate", query: { id: this.item.cid } });
    },
    done() {
      this.$router.push({ name: "rate", query: { id: this.item.cid } });
    }
  },
  mounted() {
    console.log(this.item);
  },
  watch: {},
  computed: {
    isComment() {
      return this.item.isComment;
    }
  }
};
</script>

<style scoped lang='scss'>
.container {
  margin: 0 15px;
  padding-top: 10px;
  border-bottom: 0.5px solid rgb(218, 216, 216);
  display: flex;
  position: relative;
  .image {
    width: 100px;
    img {
      width: 100px;
    }
  }
  .name {
    font-size: 14px;
  }
  .btn {
    position: absolute;
    right: 0;
    bottom: 10px;
    font-size: 14px;
    div {
      padding: 5px;
      border-radius: 12px;
    }
    .noComment {
      border: 1px solid red;
      color: red;
    }
  }
}
</style>