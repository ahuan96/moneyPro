<template>
<div>
  <mt-tabbar
    v-model="curTab"
    :fixed="true"
  >
    <mt-tab-item id="tab1" @click="setTab('tab1')">
      <img
        v-if="curTab=='tab1'"
        slot="icon"
        src="../assets/images/index2.png"
      >
      <img
        v-else
        slot="icon"
        src="../assets/images/index.png"
      >
      首页
    </mt-tab-item>
    <mt-tab-item id="tab2" @click="setTab('tab2')">
     <img
        v-if="curTab=='tab2'"
        slot="icon"
        src="../assets/images/touzi2.png"
      >
      <img
        v-else
        slot="icon"
        src="../assets/images/touzi.png"
      >
      投资
    </mt-tab-item>
    <mt-tab-item id="tab3" @click="setTab('tab3')">
      <img
        v-if="curTab=='tab3'"
        slot="icon"
        src="../assets/images/my2.png"
      >
      <img
       @click="setTab('tab3')"
        v-else
        slot="icon"
        src="../assets/images/my.png"
      >
      我的
    </mt-tab-item>
  </mt-tabbar>
</div>
</template>

<script>
export default {
  name: '',
  data () {
    return {
      curTab:'tab1'
    }
  },
  created () {

  },
  mounted () {

  },
  methods: {
    setTab(tab){
      this.curTab = tab
    }
  },
  watch:{
    curTab:function(val,oldVal){
      console.log(val)
       switch(val){
        case 'tab1':
          this.$router.push('/');
          break;
           case 'tab2':
        this.$router.push('/invest');
          break;
        case 'tab3':
          this.$router.push('/me');
          break;
      }
    }
  }

}
</script>
<style>
.mint-tabbar > .mint-tab-item.is-selected {
  color: #d81e06;
}
.mint-tabbar.is-fixed{
  border-top: 1px solid #eee;
}
</style>
