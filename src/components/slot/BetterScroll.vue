<template>
  <div ref="wrapper">
    <div class="container">
      <div v-if="pullDown">
        <div v-show="before" class="before">下拉刷新</div>
        <div v-show="!before" class="loading">
          <div v-show="loading">
            <van-loading size="24px">加载中...</van-loading>
          </div>
        </div>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
import PullDown from "@better-scroll/pull-down";
BScroll.use(PullDown);
export default {
  props: {
    flag: {
      type: Boolean,
      default: false
    },
    pullDown: {
      type: Boolean,
      default: false
    },
    loaded: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      before: true,
      loading: false
    };
  },
  components: {},
  methods: {
    //创建BScroll实例（如果存在则重置，不存在则创建）
    init() {
      if (!this.bs) {
        this.bs = new BScroll(".wrapper", {
          click: true,
          scrollY: true,
          bounceTime: 2000,
          pullDownRefresh: this.pullDown,
          probeType: 3
        });
      } else {
        this.bs.refresh();
      }
      if (this.pullDown) {
        this.bs.on("pullingDown", () => {
          this.$parent.flag = false;
          this.before = false;
          this.loading = true;
          this.$emit("incident");
        });
        this.bs.on("scroll", x => {
          if (x === 0) {
            this.bs.finishPullDown();
          }
        });
      }
    },
    finishPullDown() {
      new Promise(resolve => {
        setTimeout(() => {
          this.bs.finishPullDown();
          resolve();
        }, 600);
      });
      setTimeout(() => {
        this.before = true;
        this.$toast("刷新成功");
        this.bs.refresh();
      }, 1500);
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  updated() {
    this.$nextTick(() => {
      this.init();
    });
  },
  watch: {
    flag(val) {
      if (val && this.loading) {
        setTimeout(() => {
          this.loading = false;
        }, 1300);
        this.finishPullDown();
      }
    },
    loaded(val) {
      if (val) {
        console.log(111);
        setTimeout(() => {
          this.bs.refresh();
        }, 20);
      }
    }
  },
  computed: {
    pull() {
      if (pullDown) {
        return {
          threshold: 50,
          stop: 0
        };
      } else return false;
    }
  }
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