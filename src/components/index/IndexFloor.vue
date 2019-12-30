<template>
  <div>
    <!-- 顶部 -->
    <div class="title">
      <div>{{floor}}</div>
      <div>{{title}}</div>
    </div>
    <!-- 主体 -->
    <div class="box">
      <div v-for="item in data" :key="item.id" class="desc" @click="$goto(item.goodsId)">
        <img :src="item.image" alt />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {
    floor: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default: () => []
    }
  },
  components: {},
  methods: {},
  mounted() {
    this.data;
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.title{
    width: 100px;
    margin: 10px auto;
    display: flex;
    text-align: center;
    :nth-child(1){
        width: 20px;
        height: 20px;
        border-radius: 50%;
        line-height: 20px;
        font-size: 12px;
        background: red;
        color: white;
    }
    :nth-child(2){
        padding-left:10px;
        color:red;
        line-height: 20px;
    }
}
.box {
  width: 100%;
  height: 300px;
  .desc:nth-child(1) {
    height: 200px !important;
  }
  .desc {
    width: 50%;
    height: 100px;
    background: blue;
    float: left;
    img{
        width: 100%;
        height: 100%;
    }
  }
}

</style>