<template>
  <div class="Me">
    <div class="head_box">
      <div class="h_bg1"></div>
      <div></div>
      <div class="user">
        <img src="../assets/images/head.png" alt="" />
        <h3>{{userInfo.username}}</h3>
      </div>
    </div>

    <ul class="count_box">
      <li>
        <p>{{acountData.accumulated_earnings}}</p>
        <span>累计收益</span>
      </li>
      <li>
        <p>{{acountData.today_income}}</p>
        <span>今日收益</span>
      </li>
      <li>
        <p>{{acountData.total_last}}</p>
        <span>剩余奖金</span>
      </li>
      <li>
        <p>{{acountData.accumulated_investor}}</p>
        <span>累计投资</span>
      </li>
    </ul>

    <div>
      <!-- <van-cell title="提现" @click="showNot" /> -->
      <van-cell title="提现" to="withdraw" is-link />
      <van-cell title="银行卡" to="bank" is-link />
      <van-cell title="投资记录" to="investHistory" is-link />
      <van-cell title="奖金明细" to="accountHistory" is-link />
      <van-cell title="账户安全" to="account" is-link />
      <!-- <van-cell title="完善信息" to="userinfo" is-link /> -->
    </div>

    <div class="exit-box">
      <button class="exit-btn" @click="exit">退出</button>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: "",
  data() {
    return {
      acountData:{},
      userInfo:{}
    };
  },
  created() {},
  mounted() {
    this.getInfo();
  },
  methods: {
    // 退出登录
    exit() {
      localStorage.clear();
      this.$router.push("/login");
    },
    getInfo() {
      this.userInfo = JSON.parse(localStorage.getItem('user'))
      this.$POST("/account/getAccountByUserId", {}).then(res => {
        this.acountData = res.data[0]
      });
    },
    showNot(){
      Toast.fail('稍后开放')
    }
  }
};
</script>

<style lang="less" scoped>
.Me {
  // padding: 0.5rem 0;
  background: #fafafa;
  box-sizing: border-box;
  position: absolute;
  width: 100%;
  top: 0;
  bottom: 0;
}
.head_box {
  position: relative;
  > div {
    height: 4.5rem;
  }
  .h_bg1 {
    background: #d0b0b8;
  }
  .user {
    width: 8rem;
    height: 4.5rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -4rem;
    margin-top: -2.25rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  img {
    width: 4.5rem;
    display: block;
    border: 0.25rem solid #ffff;
    border-radius: 100%;
  }
  h3 {
    margin: 0.5rem 0;
    font-size: 1.3rem;
    font-weight: bold;
    text-align: center;
  }
}
.count_box {
  margin: 0.75rem 0;
  display: flex;
  background: #fff;
  padding: 0.75rem;

  li {
    width: 25%;
    border-right: 0.05rem solid #ccc;
    text-align: center;
    p {
      color: #dd5044;
      font-size: 0.8rem;
      margin: 0.25rem 0;
    }
    span {
      font-size: 0.7rem;
    }
  }
  li:last-child {
    border-right: 1px none;
  }
}
.exit-box {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
  .exit-btn {
    font-size: 0.8rem;
    text-align: center;
    padding: 0.5rem;
    border: 1px solid #dd5044;
    color: #dd5044;
    width: 50%;
    border-radius: 0.25rem;
    background: #fff;
  }
}
</style>
<style>
.Me .mint-cell {
  /* min-height: 40px; */
  border-bottom: 1px solid #eee;
}
.Me .mint-cell-text {
  font-size: 0.7rem;
}
</style>
