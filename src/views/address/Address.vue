<template>
  <div>
    <global-top>
      <div slot="title">地址列表</div>
    </global-top>
    <van-address-list
      v-model="chosenAddressId"
      :list="list"
      address
      @add="onAdd"
      @edit="onEdit"
      @select="setDefaultAddress"
    />
    <div class="msg" v-if="list.length===0">暂无收货地址~~</div>
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
    //跳转到添加页面
    onAdd() {
      this.$router.push("/addressEdit");
    },
    //跳转修改页面
    onEdit(item, index) {
      this.$router.push({ name: "addressEdit", params: { item: item } });
    },
    //获取地址并转存id
    getAddress() {
      this.$api.getAddress().then(res => {
        console.log(res.address);
        this.list = res.address;
        this.list.forEach(item => {
          item.id = item._id;
          item.address = item.addressDetail;
        });
      });
      this.$api.getDefaultAddress().then(res => {
        if (res.defaultAdd) {
          this.chosenAddressId = res.defaultAdd._id;
        }
      });
    },
    //设置默认地址
    setDefaultAddress(item) {
      if (!item.isDefault) {
        this.$api.setDefaultAddress(item.id).then(res => {
          if (res.code === 200) {
            this.$toast("修改成功");
            this.chosenAddressId = item.id;
            this.getAddress();
          }
        });
      } else {
        this.$toast("这个地址已经是默认地址了");
        this.chosenAddressId = item.id;
      }
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
/deep/ .van-radio__icon{
  border: 1px solid gray;
  border-radius: 50%
}
.msg{
  font-size: 20px;
  color: gray;
  text-align: center;
  margin: 40px;
}
</style>