<template>
  <div class="Me">
    <div class="head_box">
      <div>
        <img src="../assets/images/head.jpg" alt="" />
      </div>
      <div>
        <div class="name">admin666</div>
        <div class="desc">admin</div>
      </div>
    </div>

    <ul class="count_box">
      <li>
        <p>1.0000</p>
        <span>累计收益</span>
      </li>
      <li>
        <p>1.00</p>
        <span>今日收益</span>
      </li>
      <li>
        <p>1.00</p>
        <span>剩余奖金</span>
      </li>
      <li>
        <p>0.00</p>
        <span>累计投资</span>
      </li>
    </ul>

    <div>
      <van-cell title="提现" to="#" is-link />
      <van-cell title="银行卡" to="bank" is-link />
      <van-cell title="投资记录" to="#" is-link />
      <van-cell title="账户明细" to="#" is-link />
      <van-cell title="账户安全" to="account" is-link />
      <van-cell title="完善信息" to="#" is-link />
    </div>

    <div class="exit-box">
      <button class="exit-btn" @click="exit">退出</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {
    // 退出登录
    exit(){
      localStorage.clear();
      this.$router.push('/login')
    }}
};
</script>

<style lang="less" scoped>
.Me {
  padding: 10px 0;
  background: #fafafa;
  height: 100%;
  box-sizing: border-box;
}
.head_box {
  background: #dd5044;
  padding: 20px 20px;
  margin: 0 10px;
  display: flex;
  align-items: center;
  border-radius: 50px;
  color: #fff;
  img {
    border: 4px solid #fff;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }
  .name {
    font-size: 16px;
    margin-bottom: 5px;
  }
}
.count_box {
  margin: 15px 0;
  display: flex;
  background: #fff;
  padding: 15px;

  li {
    width: 25%;
    border-right: 1px solid #ccc;
    text-align: center;
    p {
      color: #dd5044;
      font-size: 16px;
      margin: 5px 0;
    }
  }
  li:last-child {
    border-right: 1px none;
  }
}
.exit-box {
  display: flex;
  justify-content: center;
  margin-top: 30px;
  .exit-btn {
    text-align: center;
    padding:10px;
    border: 1px solid #dd5044;
    color: #dd5044;
    width: 50%;
    border-radius: 5px;
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
  font-size: 14px;
}
</style>
