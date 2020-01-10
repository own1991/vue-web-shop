<template>
  <div ref="wrapper">
    <div class="container">
      <!-- 下拉刷新 -->
      <div v-if="pullDown">
        <div v-show="beforePullDown" class="before">下拉刷新</div>
        <div v-show="!beforePullDown" class="loading">
          <div v-show="PullDownloading">
            <van-loading size="24px">加载中...</van-loading>
          </div>
        </div>
      </div>
      <slot></slot>
      <!-- 上拉加载 -->
      <div v-if="pullUp" style="padding-bottom:30px;">
        <div v-show="beforePullUp" class="before">
          <div v-if="loadedAll">下面没有内容了</div>
        </div>
        <div v-show="!beforePullUp" class="loading">
          <div v-show="pullUploading">
            <van-loading size="24px">加载中...</van-loading>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import PullDown from "@better-scroll/pull-down";
import Pullup from "@better-scroll/pull-up";
BScroll.use(PullDown);
BScroll.use(Pullup);
export default {
  props: {
    //下拉刷新：pullDown,pullDownloaded,@incident
    //开启pullDown
    pullDown: {
      type: Boolean,
      default: false
    },
    pullDownloaded: {
      type: Boolean,
      default: false
    },
    // 上拉加载需要:pullUp,Uploaded,loadedAll,@pullingUp
    //开启pullUp
    pullUp: {
      type: Boolean,
      default: false
    },
    //加载完成一次
    Uploaded: {
      type: Boolean,
      default: false
    },
    //所有加载完成
    loadedAll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      beforePullDown: true,
      PullDownloading: false,
      beforePullUp: true,
      pullUploading: false,
      pull: false
    };
  },
  components: {},
  methods: {
    //创建BScroll实例（如果存在则重置，不存在则创建）
    init() {
      if (this.pullUp) {
        this.pull = {
          threshold: 50,
          stop: 0
        };
      }
      if (!this.bs) {
        this.bs = new BScroll(".wrapper1", {
          click: true,
          scrollY: true,
          bounceTime: 2000,
          pullDownRefresh: this.pullDown,
          probeType: 3,
          pullUpLoad: this.pull
        });
      } else {
        this.bs.refresh();
      }
      //添加下拉刷新监听
      if (this.pullDown) {
        this.bs.on("pullingDown", () => {
          this.$store.state.cancelLoad = true;
          this.$parent.flag = false;
          this.beforePullDown = false;
          this.loading = true;
          setTimeout(() => {
            this.$emit("incident");
          }, 800);
        });
        this.bs.on("scroll", x => {
          if (x === 0) {
            this.bs.finishPullDown();
          }
        });
      }
      //添加上拉加载监听
      if (this.pullUp) {
        this.bs.on("pullingUp", () => {
          this.beforePullUp = false;
          this.pullUploading = true;
          setTimeout(() => {
            this.$emit("pullingUp");
          }, 800);
        });
      }
    },
    //下拉刷新方法
    finishPullDown() {
      new Promise(resolve => {
        setTimeout(() => {
          this.bs.finishPullDown();
          resolve();
        }, 600);
      });
      setTimeout(() => {
        this.$store.state.cancelLoad = false;
        this.beforePullDown = true;
        this.$toast("刷新成功");
        this.bs.refresh();
      }, 1500);
    },
    //上拉加载
    finishPullUp() {
      new Promise(resolve => {
        setTimeout(() => {
          console.log(111);
          this.bs.finishPullUp();
          resolve();
        }, 600);
      });
      setTimeout(() => {
        this.$store.state.cancelLoad = false;
        this.beforePullUp = true;
        this.bs.refresh();
      }, 1500);
    }
  },
  created() {},
  mounted() {
    //页面加载时，更新bs
    this.$nextTick(() => {
      this.init();
    });
  },
  updated() {
    //页面组件更新时重置bs
    this.$nextTick(() => {
      this.bs.refresh();
    });
  },
  watch: {
    //监听flag，如果数据获取成功，结束pulldown的loading
    pullDownloaded(val) {
      if (val && this.PullDownloading) {
        setTimeout(() => {
          this.pullUploading = false;
        }, 1300);
        this.finishPullDown();
      }
    },
    //当异步成功，重置bs
    pullUpLoad(val) {
      if (val) {
        setTimeout(() => {
          this.bs.refresh();
        }, 500);
      }
    },
    Uploaded(val) {
      if (val && this.pullUploading) {
        setTimeout(() => {
          this.beforePullUp = true;
          this.pullUploading = false;
        }, 1300);
        this.finishPullUp();
      }
    }
  },
  computed: {}
};
</script>

<style lang='scss'>
.before {
  height: 3vh;
  text-align: center;
  font-size: 16px;
  color: gray;
}
.loading {
  padding-top: 30px;
  text-align: center;
}
</style>