<template>
  <div>
    <global-top>
      <div slot="title">订单结算</div>
    </global-top>
    <div>
      <shopping-address :list="list" :defaultAddress="defaultAddress"></shopping-address>
    </div>
    <!-- <better-S -->
    <div v-if="checkList.length>0">
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

      list: []
    };
  },
  props: {},
  components: {
    shoppingAddress
  },
  methods: {
    onSubmit() {
      if (!this.defaultAddress.name) {
        this.$toast("无收货地址，无法购买");
        return;
      }
      let obj = {
        // 收货地址
        address: this.defaultAddress.addressDetail,
        // 电话
        tel: this.defaultAddress.tel,
        // 所有商品的id
        orderId: this.ids,
        // 商品数量
        count: this.count
      };
      //如果时立即购买，则传入以下值
      if (this.$route.params.item) {
        obj.orderId = [this.$route.params.item.id];
        obj.idDirect = true;
      }
      this.$api.placeOrder(obj).then(res => {
        if (res.code === 200) {
          this.$toast(res.msg);
          this.$router.push("/");
        }
      });
    },
    getdata() {
      this.$api.getDefaultAddress().then(res => {
        if (res.defaultAdd) {
          this.$store.state.shippingAddress = res.defaultAdd;
        }
      });
    }
  },
  mounted() {
    window.addEventListener("load", () => {
      // 滚动事件变为 scroll
      if (this.$route.path !== "/") {
        this.$router.replace("/"); // 切换到首页
      }
    });
    this.getdata()
    console.log(this.$route.params);
  },
  watch: {},
  computed: {
    // 购物车
    checkList() {
      if (this.$store.state.buyNow) {
        return [this.$store.state.buyNow];
      } else {
        return this.$store.state.shopList.filter(item => item.check === true);
      }
    },
    //计算总价
    sum() {
      if (this.$store.state.buyNow) {
        return (
          this.$store.state.buyNow.count *
          this.$store.state.buyNow.present_price.toFixed(2)
        );
      } else {
        return this.$store.getters.getSum;
      }
    },
    // 第一个商品的数量
    count() {
      return this.checkList[0].count;
    },
    //所有商品的id
    ids() {
      let arr = [];
      this.$store.state.shopList.map(item => {
        if (item.check) {
          arr.push(item.cid);
        }
      });
      return arr;
    },
    defaultAddress() {
      return this.$store.state.shippingAddress;
    }
  }
};
</script>

<style scoped lang='scss'>
