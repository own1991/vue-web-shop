<template>
  <div>
    <global-top>
      <div slot="title">地址列表</div>
    </global-top>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="setDefaultAddress"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      chosenAddressId: "",
      list: []
    };
  },
  props: {},
  components: {},
  methods: {
    onAdd() {
      this.$router.push("/addressEdit");
    },
    onEdit(item, index) {
      this.$router.push({ name: "addressEdit", params: { item: item } });
    },
    getAddress() {
      this.$api.getAddress().then(res => {
        this.list = res.address;
        this.list.forEach(item => (item.id = item._id));
      });
      this.$api.getDefaultAddress().then(res => {
        if (res.code === 200) {
          this.chosenAddressId = res.defaultAdd._id;
        }
      });
    },
    setDefaultAddress(item) {
      this.$api.setDefaultAddress(item.id).then(res => {
        if (res.code === 200) {
          this.$toast("修改成功");
          this.chosenAddressId = item.id;
          this.getAddress();
        }
      });
    }
  },
  mounted() {
    this.getAddress();
  },
  updated() {},
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>