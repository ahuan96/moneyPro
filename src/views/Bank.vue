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

    <ul class="card-list">
      <li v-for="item in cardList" :key="item.id">
        <div>
          <i>姓名</i>
          <span>{{item.userName}}</span>
        </div>
        <div>
          <i>卡号</i>
          <span>{{item.cardNum}}</span>
        </div>
      </li>
      
    </ul>

    <div class="btn-box">
      <van-button style="width: 90%" plain type="info" @click="showAdd = true"
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
import { Notify } from 'vant';
export default {
  name: "",
  data() {
    return {
      showAdd: false,
      cardList:[{id:'1',userName:'马化腾',cardNum:'3989 9808 1231 3243'},{id:'2',userName:'王健林',cardNum:'3239 92308 14331 32123'}],
      cardName: '', // 银行卡用户名
      cardNum: '' // 银行卡号
    };
  },
  created() {},
  mounted() {},
  methods: {
      // 添加银行卡
      addCard(){
          Notify({ type: 'success', message: '添加成功', duration: 1000, });
          let item = {
              userName:this.cardName,
              cardNum:this.cardNum
          }
          this.cardList.push(item)
          // 置空
          this.cardName = ''
          this.cardNum = ''
          // 回到列表
          this.showAdd = false
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
      background: linear-gradient(to top, #17ead8 0%, #6078ea 100%);
      // background: #4e71f2;
      color: #fff;
      width: 90%;
      padding: 20px;
      box-sizing: border-box;
      border-radius: 10px;
      font-size: 16px;
      line-height: 30px;
      margin: 10px 0;
      i {
        font-size: 18px;
        font-weight: bold;
      }
    }
  }
  .btn-box {
    text-align: center;
  }
}
</style>