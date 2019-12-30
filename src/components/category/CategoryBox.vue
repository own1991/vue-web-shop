<template>
  <div class="container" @click="$goto(item.id)">
    <div class="image">
      <img :src="item.image" alt />
    </div>
    <div>
      <div class="title van-ellipsis">{{item.name}}</div>
      <div class="price">
        ￥{{item.present_price}}
        <span>{{item.orl_price}}</span>
      </div>
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
  methods: {},
  mounted() {
    console.log(this.item);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  width: 100%;
  height: 100px;
  background: white;
  overflow: hidden;
  display: flex;
  border-bottom: 1px solid lightgray;
  .image {
    width: 78px;
    height: 78px;
    border: 1px solid lightgray;
    margin: 10px;
  }
  img {
    height: 100%;
  }
  .title {
      width: 180px;
      height: 20px;
    font-size: 14px;
    margin-top: 20px;
    color: red;
  }
  .price {
    color: red;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 800;
    span{
        margin-left: 5px;
        text-decoration: line-through;
        color: gray;
        font-weight: normal;
    }
  }
}
</style>