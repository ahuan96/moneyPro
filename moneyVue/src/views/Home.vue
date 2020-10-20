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
      <van-swipe
        class="my-swipe"
        :loop="false"
        indicator-color="white"
        style="height:6.5rem"
      >
        <van-swipe-item>
          <div class="p_item shadow">
            <h3>{{proData.projectname}}</h3>
            <p>{{proData.projectsampledec}}</p>
            <div class="money">{{proData.projectmonenynum}}</div>
            <!-- <button class="detail">查看详情</button> -->
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
          <div class="money">{{proData.projectteamnum}}</div>
          <div class="desc">{{proData.projectteamnumdec}}</div>
          <div class="tip">团队人数</div>
        </li>
        <li class="">
          <div class="money">{{proData.projectmonenynum}}</div>
          <div class="desc">{{proData.projectsumdec}}</div>
          <div class="tip">投资金额</div>
        </li>
        <li class="">
          <div class="money">{{proData.projectperson}}</div>
          <div class="desc">{{proData.projectpersondec}}</div>
          <div class="tip">直推人数</div>
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
    return {
      proData:{}
    };
  },
  created() {},
  mounted() {
    this.getData()
  },
  methods: {
   // 获取项目数据
    getData(cb) {
      this.$POST("/index/getProjectByUserId", {}).then(res => {
        if(res.data && res.data.length>0){
           this.proData = res.data[0];
        }else{
          this.proData = {}
        }
        if (cb) {
          cb();
        }
      });
    }
  }
};
</script>

<style scoped lang="less">
.home {
  padding: 0.5rem;
  padding-bottom: 3.5rem;
}
.shadow {
  border-radius: 0.25rem;
  border: 0.05rem solid #ebeef5;
  box-shadow: 0 0.1rem 0.6rem 0 rgba(0, 0, 0, 0.1);
}
.pro-tip {
  font-size: 0.8rem;
  font-weight: bold;
  height: 2rem;
  line-height: 2rem;
}
.card_box {
  display: flex;
  div {
    padding-top: 0.5rem;
    margin: 0 0.5rem;
    width: 3rem;
    text-align: center;
  }
  img {
    width: 1.6rem;
  }
  p {
    font-size: 0.6rem;
    line-height: 1.2rem;
  }
}
.p_item {
  justify-content: space-around;
  padding: 0.5rem;
  height: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    font-size: 0.8rem;
    font-weight: bold;
  }
  p {
    color: #aaa;
    margin-top: 0.5rem;
  }
  .money {
    font-size: 1.3rem;
    font-weight: bold;
    color: #dd5044;
    margin: 0.5rem;
  }
  button {
    font-size: 0.7rem;
    background: #dd5044;
    color: #fff;
    border-radius: 1.5rem;
    width: 10rem;
    height: 1.5rem;
    line-height: 1.5rem;
    border: none;
  }
}
.good_pro {
  width: 100%;
  display: flex;
  justify-content: space-between;
  li {
    width: 30%;
    box-sizing: border-box;
    padding: 0.5rem;
    // flex-shrink: 0;
    border-radius: 0.25rem;
    border: 0.05rem solid #ebeef5;
    display: flex;
    flex-direction: column;
    align-items: center;
    .money {
      font-size: 1rem;
      font-weight: bold;
      color: #dd5044;
      // color:#DD5044;
    }
    .desc {
      font-size: 0.7rem;
      color: #aaa;
      margin: 0.5rem 0;
    }
    .tip {
      font-size: 0.7rem;
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
  font-size: 0.7rem;
  font-weight: bold;
}
.home .mint-cell-value.is-link {
  font-size: 0.6rem;
  margin-right: 1rem;
}
.home .mint-cell-allow-right::after {
  position: absolute;
  right: 0.5rem;
}
</style>
