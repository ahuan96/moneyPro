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
          v-model="oldpassword"
          type="password"
          name="原密码"
          label="原密码"
          placeholder="原密码"
          :rules="[{ required: true, message: '请填写原密码' }]"
        />
        <van-field
          v-model="newpassword"
          type="password"
          name="新密码"
          label="新密码"
          placeholder="新密码"
          :rules="[{ required: true, message: '请填写新密码' }]"
        />
        <van-field
          v-model="repassword"
          type="repassword"
          name="确认密码"
          label="确认密码"
          placeholder="确认密码"
          :rules="[{ required: true, message: '请确认密码' },{validator:validatorPass,message: '与密码填写不一致'}]"
        />
        <div style="margin: 0.8rem">
          <van-button round block type="danger" native-type="submit" >
            确认修改
          </van-button>
        </div>
      </van-form>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  name: '',
  data(){
    return{
        oldpassword:'',
        newpassword:'',
        repassword:''
    }

  },
  created() {

  },
  mounted() {

  },
  methods:{
      onSubmit(){
        Toast.success('修改成功');
        this.$router.push('/me')
      },
      validatorPass(){
      if(this.newpassword == this.repassword){
        return true
      }
      return false
    }
  }

}
</script>

<style lang='less' scoped>

</style>
