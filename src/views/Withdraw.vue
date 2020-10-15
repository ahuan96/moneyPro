<template>
  <div class='withdraw'>
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
      <li class="item">
        <div class="price">￥1000</div>
        <div class="bot">
          <p>审核中</p>
          <p>2020-12-12 12:02:23</p>
        </div>
        <button>取消</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return {

    }
  },
  created() {

  },
  mounted() {

  },
  methods:{

  }

}
</script>

<style lang='less' scoped>
.list{
  padding: 0.5rem 0;
  .item{
    // background: #fff;
    //  background: linear-gradient(-45deg, #EAE5C9 0%, #6CC6CB 100%);
    //  background: linear-gradient(-45deg, #9FA5D5 0%, #E8F5C8 100%);
     background: linear-gradient(-45deg, #FAD7A1 0%, #E96D71 100%);
    box-shadow: 0 0.05rem 0.25rem #afafaf;
    border-radius: 0.15rem;
    margin: 0.5rem 0.75rem 0.75rem 0.75rem;
    padding: 0.75rem;
    align-items: center;
    position: relative;
    .price{
      font-size: 1rem;
      color: #fff;
    }
    .bot{
      display: flex;
      justify-content: space-between;
      margin-top: 1rem;
      color: #fff;
    }
    button{
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
</style>
