<template>
  <div class=''>
    <mt-swipe :auto="4000" style="height:160px">
      <mt-swipe-item>
        <img src="../assets/images/s1.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/s2.jpg" alt="" />
      </mt-swipe-item>
      <mt-swipe-item>
        <img src="../assets/images/s3.jpg" alt="" />
      </mt-swipe-item>
    </mt-swipe>
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
.mint-swipe img {
  width: 100%;
  height: 100%;
  border-radius: 8px;
}
</style>
