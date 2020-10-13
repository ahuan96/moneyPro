<template>
  <div id='Account'>
       <van-nav-bar
        title="修改密码"
        left-text="返回"
        left-arrow
        border
        @click-left="$router.go(-1)"
        style="border-bottom: 1px solid #eee"
        />

        <van-form @submit="onSubmit">
        <van-field
          v-model="password"
          type="password"
          name="原密码"
          label="原密码"
          placeholder="原密码"
          :rules="[{ required: true, message: '请填写原密码' }]"
        />
        <van-field
          v-model="repassword"
          type="password"
          name="新密码"
          label="新密码"
          placeholder="新密码"
          :rules="[{ required: true, message: '请填写新密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="danger" native-type="submit" >
            确认修改
          </van-button>
        </div>
      </van-form>
  </div>
</template>

<script>
export default {
  name: '',
  data(){
    return{
        password:'',
        repassword:''
    }

  },
  created() {

  },
  mounted() {

  },
  methods:{
      onSubmit(){

      }
  }

}
</script>

<style lang='less' scoped>

</style>