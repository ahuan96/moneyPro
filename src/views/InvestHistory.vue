<template>
  <div class=''>
    <van-nav-bar
        title="投资记录"
        left-text="返回"
        left-arrow
        border
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
      list:[{
          id:'1',
          type:'佣金',
          desc:'马化腾支付佣金100块钱',
          time:'2020-12-2 18:23:00'
        },{
          id:'2',
          type:'投资',
          desc:'投资了阿里巴巴50块钱，并且跟马云商讨下一步合作计划',
          time:'2020-12-2 18:23:00'
        },{
          id:'3',
          type:'奖金',
          desc:'王健林发放给我1000w奖金',
          time:'2020-12-2 18:23:00'
        },{
          id:'4',
          type:'佣金',
          desc:'马化腾支付佣金100块钱',
          time:'2020-12-2 18:23:00'
        },{
          id:'5',
          type:'投资',
          desc:'投资了阿里巴巴50块钱，并且跟马云商讨下一步合作计划',
          time:'2020-12-2 18:23:00'
        },{
          id:'6',
          type:'奖金',
          desc:'王健林发放给我1000w奖金',
          time:'2020-12-2 18:23:00'
        }],
      count: 0,
    }
  },
  created() {

  },
  mounted() {

  },
  methods:{
  onRefresh() {
      setTimeout(() => {
        Toast("刷新成功");
        this.isLoading = false;
        this.$refs.InvestList.setLoad(false)
        this.count++;
      }, 1000);
    }
  }

}
</script>

<style lang='less' scoped>

</style>
