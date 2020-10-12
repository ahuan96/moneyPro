<template>
  <div class="home">
    <Swiper />
    <!-- <div class="card_box">
      <div>
        <img src="../assets/images/礼物.png" alt="" />
        <p>我的团队</p>
      </div>
      <div>
        <img src="../assets/images/签到.png" alt="" />
        <p>每日签到</p>
      </div>
      <div>
        <img src="../assets/images/推荐.png" alt="" />
        <p>我的推荐</p>
      </div>
    </div> -->
    <div>
      <!-- <mt-cell title="热门项目" to="#" is-link value="更多"> </mt-cell> -->
      <div class="pro-tip">
        热门项目
      </div>
      <van-swipe class="my-swipe" :loop="false"  indicator-color="white" style="height:160px">
      <van-swipe-item>
        <div class="p_item shadow">
            <h3>投资金额</h3>
            <p>利润高 方便快捷</p>
            <div class="money">￥3000</div>
            <button class="detail">查看详情</button>
        </div>
      </van-swipe-item>
    </van-swipe>
    </div>
    <div>
      <!-- <mt-cell title="优选项目" to="#" is-link value="更多"> </mt-cell> -->
      <div class="pro-tip">
        优选项目
      </div>
      <ul class="good_pro">
        <li class="">
          <div class="money">30</div>
          <div class="desc">奖励转不停</div>
          <div class="tip">团队人数</div>
        </li>
        <li class="">
          <div class="money">30</div>
          <div class="desc">奖励转不停</div>
          <div class="tip">团队人数</div>
        </li>
        <li class="">
          <div class="money">30</div>
          <div class="desc">奖励转不停</div>
          <div class="tip">团队人数</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Swiper from "../components/swiper.vue";
export default {
  name: "",
  components: {
    Swiper
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>

<style scoped lang="less">
.home {
  padding: 10px;
  padding-bottom: 70px;
}
.shadow {
  border-radius: 5px;
  border: 1px solid #ebeef5;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}
.pro-tip{
  font-size: 14px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
}
.card_box {
  display: flex;
  div {
    padding-top: 10px;
    margin: 0 10px;
    width: 60px;
    text-align: center;
  }
  img {
    width: 32px;
  }
  p {
    font-size: 12px;
    line-height: 24px;
  }
}
.p_item {
  justify-content: space-around;
  padding: 10px;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 16px;
    font-weight: bold;
  }
  p {
    color: #aaa;
    margin-top: 10px;
  }
  .money {
    font-size: 24px;
    font-weight: bold;
    color:#DD5044;
    margin: 10px;
  }
  button {
    background:#DD5044;
    color: #fff;
    border-radius: 30px;
    width: 200px;
    height: 30px;
    line-height: 30px;
    border: none;
  }
}
.good_pro {
  width: 100%;
  display: flex;
  justify-content: space-between;

  li{
    width: 30%;
    box-sizing: border-box;
    padding: 10px;
    // flex-shrink: 0;
    border-radius: 5px;
  border: 1px solid #ebeef5;
    .money{
    font-size: 20px;
    font-weight: bold;
    color:#DD5044;
    // color:#DD5044;
  }
  .desc{
    color: #aaa;
    margin: 10px 0;
  }
  .tip{
    font-size: 14px;
    color: #000;
    font-weight: bold;
  }
  }
}
</style>
<style>
.home .mint-cell-wrapper {
  padding: 0;
}
.home .mint-cell-title {
  font-size: 14px;
  font-weight: bold;
}
.home .mint-cell-value.is-link {
  font-size: 12px;
  margin-right: 20px;
}
.home .mint-cell-allow-right::after {
  position: absolute;
  right: 10px;
}
</style>
