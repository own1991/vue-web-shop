<template>
  <div>
    <div>
      <img :src="item.image" alt />
      <div>
        <van-rate v-model="item.rate" />
      </div>
      <div>时间{{item.date}}</div>
    </div>
    <div>内容{{item.content}}</div>
  </div>
</template>

<script>
export default {
  props: {},
  data() {
    return {};
  },
  components: {},
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>