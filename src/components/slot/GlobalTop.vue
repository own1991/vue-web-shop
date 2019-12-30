<template>
  <div>
    <slot name="back">
      <van-icon name="arrow-left" />
    </slot>
    <slot name=title>
        <div></div>
    </slot>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  props: {},
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>