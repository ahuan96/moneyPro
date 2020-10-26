<template>
  <div id="app">

    <router-view/>
    <Tabbar v-if="$route.meta.showTab" />
  </div>
</template>

<script>
import Tabbar from '@/components/tabbar.vue'
export default {
  name: 'App',
  components:{
    Tabbar
  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted(){
    // 设置高度 防止键盘顶起
    let h = document.body.clientHeight
    // var main = document.getElementById('app'); 
    var main = document.getElementsByTagName('html')[0]; 
    main.style.height = h+"px";
    // alert(h+"px")
  }
}
</script>

<style>
html,body{
  height: 100%;
  width: 100%;
}
body{
  font-size: 0.8rem;
}
#app {
  width: 100%;
  min-height: 100%;
  position: relative;
}
</style>
