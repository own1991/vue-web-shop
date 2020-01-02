<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  props: {
    arr: {
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
      if (!this.bs) {
        this.bs = new BScroll(".wrapper", {
          startY: 0,
          click: true,
          scrollY: true,
          startY: 0,
          probeType: 3 // listening scroll hook
        });
      } else {
        this.bs.refresh();
      }
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
    arr(val) {
      this.bs.refresh();
      setTimeout(() => {
        this.bs = new BScroll(".wrapper", {
          startY: 0,
          scrollY: true,
          click: true,
          probeType: 3 // listening scroll hook
        });
      }, 20);
    }
  },
  computed: {}
};
</script>

<style lang='scss'>
</style>