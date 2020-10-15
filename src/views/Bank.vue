<template>
  <div id="bank">
    <van-nav-bar
      title="银行卡"
      left-text="返回"
      left-arrow
      border
      @click-left="$router.go(-1)"
      style="border-bottom: 1px solid #eee"
    />

    <ul class="card-list" v-if="cardList&&cardList.length>0">
      <li v-for="item in cardList" :key="item.id">
        <div>
          <i>姓名</i>
          <span>{{item.cardname}}</span>
        </div>
        <div>
          <i>卡号</i>
          <span>{{item.cardid}}</span>
        </div>
        <van-icon class="del-btn" name="delete" @click="delCard" />
      </li>
    </ul>

    <div class="btn-box" v-else>
      <van-button style="width: 90%;margin-top:0.5rem;" plain type="info" @click="showAdd = true"
        >点击添加</van-button
      >
    </div>

    <van-popup
      v-model="showAdd"
      position="bottom"
      :style="{ height: '100%' }"
    >
    <van-nav-bar
      title="添加银行卡"
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
          v-model="cardName"
          name="姓名"
          label="姓名"
          placeholder="姓名"
          :rules="[{ required: true, message: '请填写姓名' }]"
        />
        <van-field
          v-model="cardNum"
          name="卡号"
          label="卡号"
          placeholder="卡号"
          :rules="[{ required: true, message: '请填写卡号' }]"
        />
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
export default {
  name: "",
  data() {
    return {
      showAdd: false,
      cardList:[{id:'1',userName:'cardname',cardid:'3239 92308 14331 32123'}],
      cardName: '', // 银行卡用户名
      cardNum: '' // 银行卡号
    };
  },
  created() {},
  mounted() {
    this.getList()
  },
  methods: {
      // 添加银行卡
      addCard(){
          // Toast.success('添加成功');
          let item = {
              cardname:this.cardName,
              cardid:this.cardNum
          }
        this.$POST('/card/addBankCard',item)
        .then(res=>{
          console.log('res')
        })

          // this.cardList.push(item)
          // // 置空
          // this.cardName = ''
          // this.cardNum = ''
          // // 回到列表
          // this.showAdd = false
      },
      // 删除银行卡
      delCard(){
        Dialog.confirm({
        title: '提示',
        message: '确定删除吗？',
      })
        .then(() => {
          this.cardList = []
          Toast.success('删除成功');
          // on confirm
        })
        .catch(() => {
          // on cancel

        });
      },
      // 获取列表数据
        getList(cb) {
          this.$GET("/card/getCardByUserId", {}).then(res => {
            console.log(res);
            res.data.forEach((item)=>{
              item.cardid = item.cardid.replace(/\s/g, '').replace(/(\w{4})(?=\w)/g, '$1 ')
            })
            this.cardList = res.data;
            if (cb) {
              cb();
            }
          });
        }
  },
};
</script>

<style lang='less' scoped>
#bank {
  .card-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    li {
      position: relative;
      background: linear-gradient(to top, #17ead8 0%, #6078ea 100%);
      // background: #4e71f2;
      color: #fff;
      width: 90%;
      padding: 1rem;
      box-sizing: border-box;
      border-radius: 0.5rem;
      font-size: 0.8rem;
      line-height: 1.5rem;
      margin: 0.5rem 0;
      i {
        font-size: 0.9rem;
        font-weight: bold;
      }
      .del-btn{
        position: absolute;
        top: 0.5rem;
        right: 0.5rem;
        padding: 0.25rem;
        cursor: pointer;
      }
    }
  }
  .btn-box {
    text-align: center;
  }

}
</style>
