<template>
  <div class="usershop">
    <div class="container" v-if="shopList.length>0">
      <div class="checkbox">
        <van-checkbox
          v-model="checked"
          @click="changeAll"
          checked-color="#07c160"
        >{{checked?'取消全选':'全选'}}</van-checkbox>
      </div>
      <div class="total">
        <div>
          合计：
          <span v-if="checkeds.length>0">￥{{sum}}</span>
        </div>
        <div v-if="checkeds.length>0">请确认订单</div>
      </div>
      <van-divider :style="{ padding: '0 3px' }" />
      <van-button class="btn" type="primary" @click="del()">删除</van-button>
      <van-button class="btn" type="primary" @click="$goto('/shoppingPayMent')">结算</van-button>
    </div>
    <div v-else class="msg">
      <div class="image">
        <img src="../../assets/shop.png" alt />
      </div>
      <div class="detail">您的购物车还是空的</div>
      <div class="goto" @click="$goto('/')">去购物</div>
    </div>
    <better-scroll class="wrapper">
      <div class="goodsbox" v-for="item in $store.state.shopList" :key="item.id">
        <div class="checkbox">
          <van-checkbox v-model="item.check" checked-color="#07c160" @change="change"></van-checkbox>
        </div>
        <div class="img">
          <img :src="item.image_path" alt />
        </div>
        <div class="desc">
          <div class="title">{{item.name}}</div>
          <div class="price">￥{{item.mallPrice}}</div>
          <van-stepper class="stepper" v-model="item.count" @change="onChange(item)" />
        </div>
      </div>
    </better-scroll>
  </div>
</template>

<script>
import betterScroll from "../slot/BetterScroll";
export default {
  data() {
    return {
      checkeds: [1],
      checked: false
    };
  },
  props: {},
  components: {
    betterScroll
  },
  methods: {
    del() {
      let arr = [];
      this.$store.state.shopList.map(item => {
        if (item.check) {
          arr.push(item.cid);
        }
      });
      this.$api.deleteShop(arr).then(res => {
        if (res.code === 200) {
          this.$toast("删除完毕");
          this.getCardData();
        }
      });
    },
    changeAll() {
      this.checked = !this.checked;
      this.$store.state.shopList.map(item => (item.check = this.checked));
    },
    change() {
      this.checked = this.$store.state.shopList.every(item => item.check);
    },
    getCardData() {
      this.$api.getCard().then(res => {
        if (res.code === 200) {
          this.$store.state.shopList = res.shopList;
          this.$store.dispatch("getShopList");
        }
      });
    },
    // 修改商品数量
    onChange(val) {
      this.$api.editCart(val.count, val.cid, val.mallPrice).then(res => {
        if (res.code === 200) {
          this.$store.dispatch("getShopList");
        }
      });
    }
  },
  mounted() {
    this.getCardData();
  },
  watch: {},
  computed: {
    shopList() {
      if (this.$store.state.shopList) {
        return this.$store.state.shopList;
      }
    },
    sum() {
      return this.$store.getters.getSum;
    }
  }
};
</script>

<style scoped lang='scss'>
.container {
  position: relative;
  height: 13vh;
  padding: 1vh 0;
  font-size: 14px;
  border-top: 0.1px solid rgb(243, 243, 243);
  border-bottom: 0.1px solid rgb(243, 243, 243);
}
.checkbox {
  margin: 5px 10px;
}
.total {
  width: 120px;
  position: absolute;
  right: 20px;
  top: 10px;
  div {
    padding-bottom: 5px;
    span {
      color: red;
      font-weight: 700;
    }
  }
}
.btn {
  float: right;
  margin-right: 10px;
  height: 30px;
  line-height: 30px;
}
.usershop {
  position: relative;
  overflow: hidden;
}
.user-top {
  position: fixed;
  width: 100%;
  background: white;
  z-index: 999;
}
.wrapper {
  overflow: hidden;
  height: 72vh;
}
.goodsbox {
  position: relative;
  width: 375px;
  height: 100px;
  display: flex;
  border: 0.1px solid rgb(243, 243, 243);
  .checkbox {
    padding: 10px;
    margin-top: 30px;
  }

  img {
    margin: 10px;
    width: 80px;
    border: 1px solid rgb(209, 209, 209);
  }
  .desc {
    width: 100%;
    color: red;
  }
  .title {
    font-size: 14px;
    margin: 10px;
  }
  .price {
    margin: 40px 10px;
  }
  .stepper {
    position: absolute;
    right: 10px;
    bottom: 10px;
  }
}
.msg {
  text-align: center;
  padding: 10px;
  .image {
    margin: 20px auto;
    background: rgb(235, 235, 235);
    padding: 30px;
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }
  .detail {
    margin: 40px;
    font-size: 24px;
    color: gray;
  }
  .goto {
    padding: 10px;
    color: gray;
    border-radius: 30px;
    font-size: 20px;
    width: 100px;
    margin: 0 auto;
    border: 1px solid rgb(0, 0, 0);
  }
}
</style>