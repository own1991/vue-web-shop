<template>
  <div class="container">
    <div v-for="item in categoryData" :key="item.id" @click="goto(item.mallCategoryId)">
      <img :src="item.image" alt />
      <div class="title">{{item.mallCategoryName}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    categoryData: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    goto(val) {
      this.$router.push({ name: "category", params: { mallCategoryId: val } });
    }
  },
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  justify-content: space-around;
  text-align: center;
  width: 100%;
  img {
    width: 50px;
    height: 50px;
    border-radius: 10px;
  }
  .title {
    font-size: 14px;
  }
}
</style>