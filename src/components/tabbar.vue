<template>
<div>
  <van-tabbar route active-color="#d81e06" inactive-color="#000" style="height:60px;">
  <van-tabbar-item replace to="/home" icon="home-o">
    首页
  </van-tabbar-item>
  <van-tabbar-item replace to="/invest" icon="chart-trending-o">
    投资
  </van-tabbar-item>
  <van-tabbar-item replace to="/me" icon="user-o">
    我的
  </van-tabbar-item>
</van-tabbar>
</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
  }
}
</script>
