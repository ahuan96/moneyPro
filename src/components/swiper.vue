<template>
  <div class=''>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" style="height:160px">
    <van-swipe-item>
      <img src="../assets/images/s1.jpg" alt="" />
    </van-swipe-item>
     <van-swipe-item>
      <img src="../assets/images/s2.jpg" alt="" />
    </van-swipe-item>
     <van-swipe-item>
      <img src="../assets/images/s3.jpg" alt="" />
    </van-swipe-item>
  </van-swipe>
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

<style scoped>
.van-swipe {
  border: none;
}
.van-swipe img {
  width: 100%;
  height: 100%;
  border-radius: 8px;

}
</style>
