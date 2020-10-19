<template>
  <van-tabbar route fixed placeholder  active-color="#d81e06" inactive-color="#000">
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
