<template>
  <div>
    <global-top>
      <div slot="title">编辑地址</div>
    </global-top>
    <van-address-edit
      :area-list="areaList"
      :address-info="list"
      show-delete
      show-set-default
      show-search-result
      :search-result="searchResult"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
      @change-detail="onChangeDetail"
    />
  </div>
</template>

<script>
import areaList from "../../js/area";
export default {
  data() {
    return {
      areaList: areaList,
      searchResult: [],
      list: {}
    };
  },
  props: {},
  components: {},
  methods: {
    onSave(content) {
      if (this.$route.params.item) {
        content.id = content._id;
      }
      console.log(content);
      this.$api.postAddress(content).then(res => {
        if (res.code === 200) {
          if (content.isDefault) {
            this.$api.setDefaultAddress(content.id).then(res => {
              if (res.code === 200) {
                this.$toast("添加成功");
                if (content.id) {
                  this.$toast("修改成功");
                }
              }
            });
          } else {
            this.$toast("添加成功");
            if (content.id) {
              this.$toast("修改成功");
            }
          }
          this.$router.go(-1);
        }
      });
    },
    onDelete(content) {
      this.$api.deleteAddress(content._id).then(res => {
        if (res.code === 200) {
          this.$toast("删除成功");
          this.$router.go(-1);
        }
      });
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "课得在线",
            address: "东门大桥"
          }
        ];
      } else {
        this.searchResult = [];
      }
    },
    getAddress() {
      if (this.$route.params.item) {
        this.list = this.$route.params.item;
        console.log(this.list);
      } else {
        this.list = {};
      }
    }
  },
  mounted() {
    this.getAddress();
  },
  watch: {},
  computed: {}
};
</script>

<style scoped lang='scss'>
</style>