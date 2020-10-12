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
}
</script>

<style>
html,body{
  height: 100%;
  font-size: 12px;
}
#app {
  height: 100%;
}
</style>
