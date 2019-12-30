<template>
  <div class="wrapper" ref="wrapper">
    <div class="scroll-content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  props: {
    change: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  components: {},
  methods: {
    init() {
      this.bs = new BScroll(".wrapper", {
        startY:0,
        scrollY: true,
        click: true,
        probeType: 3 // listening scroll hook
      });
      this._registerHooks(["scroll", "scrollEnd"], pos => {});
    },
    _registerHooks(hookNames, handler) {
      hookNames.forEach(name => {
        this.bs.on(name, handler);
      });
    }
  },
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
  beforeDestroy() {},
  watch: {
    change(val) {
      console.log(11);
    }
  },
  computed: {}
};
</script>

<style lang='scss'>
.wrapper {
  height: 84vh;
  overflow: hidden;
}
</style>