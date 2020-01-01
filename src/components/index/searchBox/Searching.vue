<template>
  <div>
    <better-scroll class="wrapper">
      <div v-for="item in dataList" :key="item.id" class="box" @click="goto(item.id)">
        <div>
          <img :src="item.image" alt />
        </div>
        <div>
          <div class="title van-ellipsis" v-html="$util.keyWord(item.name,keyword)"></div>
          <div class="price">
            ￥{{item.present_price}}
            <span>{{item.orl_price}}</span>
          </div>
        </div>
      </div>
    </better-scroll>
  </div>
</template>

<script>
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
  components: {},
  methods: {
    //保存关键字，并跳转
    goto(item) {
      if (!this.$store.state.keywords.includes(this.keyword)) {
        this.$store.commit("pushkeywords", this.keyword);
      }
      //跳转
      this.$router.push({ name: "details", query: { id: item } });
    },
    getdata() {
      this.$api.search(this.keyword, 1).then(res => {
        if (res.code === 200) {
          this.dataList = res.data.list;
          console.log(this.dataList);
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
.box {
  height: 100px;
  display: flex;
  padding: 0 20px;
  border-bottom: 0.1px solid rgb(243, 243, 243);
  img {
    height: 80px;
    padding: 10px;
  }
  .title {
    width: 220px;
    margin-top: 30px;
    font-size: 14px;
  }
  .price {
    margin-top: 10px;
    color: red;
    font-weight: 800;
    font-size: 14px;
    span {
      text-decoration: line-through;
      color: gray;
      font-weight: normal;
    }
  }
}
</style>