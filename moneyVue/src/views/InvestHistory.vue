<template>
  <div class=''>
    <van-nav-bar
        title="投资记录"
        left-text="返回"
        left-arrow
        border
        fixed
        placeholder
        @click-left="$router.go(-1)"
        style="border-bottom: 1px solid #eee"
        />
    <InvestList ref="InvestList" :list="list" :onRefresh="onRefresh"/>
  </div>
</template>

<script>
import InvestList from '../components/investList'
import { Toast } from 'vant';

export default {
  name: '',
  components:{
    InvestList
  },
  data(){
    return {
      list:[],
      count: 0,
    }
  },
  created() {
    this.getList()
  },
  mounted() {

  },
  methods:{
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
      this.$GET("/record/getTZRecord", {}).then(res => {
        this.list = res.data;
        if (cb) {
          cb();
        }
      });
    }
  }

}
</script>

<style lang='less' scoped>

</style>
