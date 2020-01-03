<template>
  <div>
    <global-top>
      <div slot="title">订单结算</div>
    </global-top>
    <div>
      <shopping-address :defaultAddress="defaultAddress"></shopping-address>
    </div>
    <!-- <better-S -->
    <div>
      <van-card
        v-for="item in checkList"
        :key="item.id"
        :num="item.count"
        :price="item.present_price.toFixed(2)"
        :title="item.name"
        :thumb="item.image_path"
      />
    </div>
    <van-submit-bar :price="Number(sum)*100" button-text="提交订单" @submit="onSubmit" />
  </div>
</template>

<script>
import shoppingAddress from "../../components/shoppingPayMent/ShoppingAddress";
import axios from "axios";
export default {
  data() {
    return {
      items: [],
      defaultAddress: {}
    };
  },
  props: {},
  components: {
    shoppingAddress
  },
  methods: {
    onSubmit() {
      let obj = {
        // 收货地址
        address: this.defaultAddress.addressDetail,
        // 电话
        tel: this.defaultAddress.tel,
        // 所有商品的id
        orderId: this.ids,
        // 总价格
        totalPrice: this.sum,
        // 用来判断是购物车结算还是直接购买
        idDirect: '0',
        // 商品数量
        count: this.count
      };
      this.$api.placeOrder(obj).then(res => {
        if (res.code === 200) {
          console.log(res);
        }
      });
    },
    getDefaultAddress() {
      this.$api.getDefaultAddress().then(res => {
        if (res.code === 200) {
          this.defaultAddress = res.defaultAdd;
          console.log(res);
        }
      });
    }
  },
  mounted() {
    console.log(this.checkList);
    this.getDefaultAddress();
  },
  watch: {},
  computed: {
    checkList() {
      return this.$store.state.shopList.filter(item => item.check === true);
    },
    sum() {
      return this.$store.getters.getSum;
    },
    count() {
      return this.$store.state.shopList[0].count;
    },
    ids() {
      let arr = [];
      this.$store.state.shopList.map(item => {
        if (item.check) {
          arr.push(item.cid);
        }
      });
      return arr;
    }
  }
};
</script>

<style scoped lang='scss'>
