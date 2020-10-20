<template>
  <div class="withdraw">
    <van-nav-bar
      title="提现"
      left-text="返回"
      left-arrow
      border
      fixed
      placeholder
      @click-left="$router.go(-1)"
      style="border-bottom: 1px solid #eee"
    />
    <ul class="list">
      <li class="item" v-for="item in list" :key="item.id">
        <div class="price">
          {{ item.withdraw_type }}￥{{ item.withdraw_money }}
        </div>
        <div class="bot">
          <p>{{getStatus(item.withdraw_status) }}</p>
          <p>{{$formatTime( "YYYY-mm-dd HH:MM:SS",item.withdraw_time) }}</p>
        </div>
        <button v-if="item.withdraw_status == 0" @click="cancelApply(item)">取消</button>
      </li>
    </ul>

    <div class="btn-box">
      <van-button style="width: 90%;margin-top:0.5rem;" plain type="info" @click="showAdd = true"
        >提现</van-button
      >
    </div>

    <van-popup
      v-model="showAdd"
      position="bottom"
      :style="{ height: '100%' }"
    >
    <van-nav-bar
      title="申请提现"
      left-text="关闭"
      left-arrow
      border
      fixed
      placeholder
      @click-left="showAdd=false"
      style="border-bottom: 1px solid #eee"
    />
      <van-form @submit="addCard">
        <van-field
          v-model="withdraw_money"
          name="金额"
          label="金额"
          placeholder="金额"
          type="number"
          :rules="[{ required: true, message: '请填写金额' }]"
        />
        <van-field name="radio" label="类型"
        :rules="[{ required: true, message: '请选择类型' }]"
        >
        <template #input>
          <van-radio-group v-model="withdraw_type" direction="horizontal">
            <van-radio name="佣金">佣金</van-radio>
            <van-radio name="奖金">奖金</van-radio>
            <!-- <van-radio name="投资">投资</van-radio> -->
          </van-radio-group>
        </template>
      </van-field>
        <div style="margin: 16px">
          <van-button round block type="danger" native-type="submit" >
            提交
          </van-button>
        </div>
      </van-form>
    </van-popup>
  </div>
</template>

<script>
import { Notify,Dialog,Toast } from 'vant';

// withdraw_status 0 未审核，1 通过 2未通过 3已取消
export default {
  name: "",
  data() {
    return {
      list: [],
      showAdd: false,
      withdraw_money: '', // 银行卡号
      withdraw_type:''
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
      this.$GET("/withdraw/getWithDrawByid", {}).then((res) => {
        this.list = res.data;
        if (cb) {
          cb();
        }
      });
    },
     // 添加银行卡
      addCard(){
          // Toast.success('添加成功');
          let item = {
              withdraw_money:this.withdraw_money,
              withdraw_type:this.withdraw_type,
              withdraw_status:0
          }
        this.$POST('/withdraw/addWithDraw',item)
        .then(res=>{
          this.showAdd = false;
          this.withdraw_money = ''
          this.withdraw_status = ''
          Toast.success('申请提现成功');
          this.getList()
        })
      },
    getStatus(status) {
      switch (status) {
        case 0:
          return "待审核";
          break;
        case 1:
          return "已通过";
          break;
        case 2:
          return "已驳回";
          break;
        case 3:
          return "已取消";
          break;
        default:
          return ''
          break;
      }
    },
    // 取消申请
    cancelApply(item){
        Dialog.confirm({
        title: '提示',
        message: '确定取消吗？',
      })
        .then(() => {
          // on confirm
          this.$POST('/withdraw/updWithDraw',{id:item.id,withdraw_status:3,withdraw_type:item.withdraw_type,withdraw_money:item.withdraw_money})
          .then(res=>{
            Toast.success('申请提现成功');
            this.getList()
          })

        })
      
    }
  },
};
</script>

<style lang='less' scoped>
.list {
  padding: 0.5rem 0;
  .item {
    // background: #fff;
    //  background: linear-gradient(-45deg, #EAE5C9 0%, #6CC6CB 100%);
    //  background: linear-gradient(-45deg, #9FA5D5 0%, #E8F5C8 100%);
    background: linear-gradient(-45deg, #fad7a1 0%, #e96d71 100%);
    box-shadow: 0 0.05rem 0.25rem #afafaf;
    border-radius: 0.15rem;
    margin: 0.5rem 0.75rem 0.75rem 0.75rem;
    padding: 0.75rem;
    align-items: center;
    position: relative;
    font-size: 0.8rem;
    .price {
      font-size: 0.8rem;
      color: #fff;
    }
    .bot {
      display: flex;
      justify-content: space-between;
      margin-top: 0.5rem;
      color: #eee;
      font-size: 0.7rem;
    }
    button {
      position: absolute;
      right: 1rem;
      top: 0.5rem;
      background: #ff976a;
      padding: 0.2rem 0.5rem;
      border-radius: 0.25rem;
      border: none;
      color: #fff;
      // background: linear-gradient(to top, #EAE5C9 0%, #6CC6CB 100%);
    }
  }
}

 .btn-box {
    text-align: center;
    margin-bottom: 3rem;
  }
</style>
