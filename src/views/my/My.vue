<template>
  <div>
    <user-info v-if="!flag" />
    <user-change v-else />
  </div>
</template>

<script>
import userInfo from "../../components/my/UserInfo";
import userChange from "../../components/my/UserChange";
export default {
  data() {
    return {
      flag:false
    };
  },
  props: {},
  components: { userInfo, userChange },
  methods: {},
  mounted() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>