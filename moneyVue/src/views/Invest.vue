<template>
  <div class="Invest">
    <InvestList ref="InvestList" :list="list" :onRefresh="onRefresh" />
  </div>
</template>

<script>
import InvestList from "../components/investList";
import { Toast } from "vant";

export default {
  name: "",
  components: {
    InvestList
  },
  data() {
    return {
      list: []
    };
  },
  created() {},
  mounted() {
    this.getList();
  },
  methods: {
    // 下拉刷新
    onRefresh() {
      let _this = this;
      this.getList(() => {
        Toast("刷新成功");
        _this.isLoading = false;
        _this.$refs.InvestList.setLoad(false);
      });
    },
    // 获取列表数据
    getList(cb) {
      this.$GET("/record/getAllRecord", {}).then(res => {
        console.log(res);
        this.list = res.data;
        if (cb) {
          cb();
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.Invest {
  height: 100%;
  // padding-bottom: 3rem;
}
</style>
