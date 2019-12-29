<template>
  <div class="container">
    <div @click="$goto('/city')" class="city">
      <span>{{city}}</span>
      <van-icon name="arrow-down" />
    </div>
    <van-search
      class="search"
      v-model="value"
      placeholder="请输入搜索关键词"
      show-action
      shape="round"
      @search="onSearch"
      background="none"
    >
      <div slot="action" @click="onSearch">搜索</div>
    </van-search>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {
      city: "未获取",
      value: "",
    };
  },
  components: {},
  methods: {
    onSearch() {},
    getcity() {}
  },
  mounted() {
    let _this=this
    AMap.plugin("AMap.Geolocation", function() {
      var geolocation = new AMap.Geolocation({
        // 是否使用高精度定位，默认：true
        enableHighAccuracy: true,
        // 设置定位超时时间，默认：无穷大
        timeout: 10000,
        // 定位按钮的停靠位置的偏移量，默认：Pixel(10, 20)
        buttonOffset: new AMap.Pixel(10, 20),
        //  定位成功后调整地图视野范围使定位位置及精度范围视野内可见，默认：false
        zoomToAccuracy: true,
        //  定位按钮的排放位置,  RB表示右下
        buttonPosition: "RB"
      });

      geolocation.getCurrentPosition();
      AMap.event.addListener(geolocation, "complete", onComplete);
      AMap.event.addListener(geolocation, "error", onError);

      function onComplete(data) {
        // data是具体的定位信息
        _this.city=data.addressComponent.city
        console.log(data);
      }

      function onError(data) {
        console.log(data);
        // 定位出错
      }
    });
    console.log(this.citys);
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.container {
  display: flex;
  width: 100%;
  height: 34px;
  padding: 8px 0;
  background: #f2f2f2;
}
.city {
  width: 60px;
  display: flex;
  font-size: 14px;
  line-height: 34px;
  height: 34px;
  margin-left: 10px;
  .van-icon {
    line-height: 34px;
  }
}
.search {
  width: 300px;
}
</style>