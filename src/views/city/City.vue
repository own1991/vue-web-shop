<template>
  <div>
    <global-top>
      <div slot="title">城市列表</div>
    </global-top>
    <van-index-bar>
      <div v-for="item in Object.keys(city)" :key="item.id">
        <van-index-anchor :index="item" />
        <van-cell v-for="desc in city[item]" :key="desc.id" :title="desc.name" @click="Select(desc)" />
      </div>
    </van-index-bar>
  </div>
</template>

<script>
// import { city } from "../../js/city.js";
export default {
  data() {
    return {
      city: {}
    };
  },
  props: {},
  components: {},
  methods: {
    getCities() {
      this.city = this.$city.data.cities;
    },
    Select(desc){
      this.$router.go(-1)
      localStorage.setItem('city',desc.name)
    }
  },
  mounted() {
    // this.axios.get(city).then(res=>{console.log(res);})
    this.getCities();
    // console.log(this.city);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
/deep/ .van-index-bar__index {
  height: 20px;
  color: skyblue;
}
</style>