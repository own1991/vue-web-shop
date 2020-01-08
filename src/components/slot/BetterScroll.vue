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
          bounceTime: 800,
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
      }
    }
  },
  created() {},
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  updated() {},
  watch: {
    flag(val) {
      if (val && this.loading) {
        setTimeout(() => {
          this.$toast("刷新成功");
          this.loading = false;
          this.before = true;
          this.bs.refresh();
          this.bs.finishPullDown();
        }, 500);
      }
    },
    loaded(val) {
      if (val) {
        this.$nextTick = () => {
          this.init();
        };
      }
    }
  },
  computed: {
    pull() {
      if (pullDown) {
        return {
          threshold: 30,
          stop: 0
        };
      } else return false;
    }
  }
};
</script>

<style lang='scss'>
.before {
  padding: 7px;
  text-align: center;
  font-size: 16px;
  color: gray;
}
.loading {
  padding: 5px;
  height: 30px;
  text-align: center;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 2s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-100%);
}
</style>