<template>
  <div>
    <div class="wrapperX" ref="wrapperX">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "@better-scroll/core";
export default {
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {
    init() {
      this.bs = new BScroll(".wrapperX", {
        scrollX: true,
        probeType: 3 // listening scroll hook
      });
    }
  },
  mounted() {
    this.init();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
.wrapperX {
  background: white;
  width: 375px;
  overflow: hidden;
  white-space: nowrap;
}
</style>