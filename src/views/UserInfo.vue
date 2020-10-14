<template>
  <div class="">
    <van-nav-bar
      title="完善信息"
      left-text="返回"
      left-arrow
      border
      @click-left="$router.go(-1)"
      style="border-bottom: 1px solid #eee"
    />
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        disabled
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="message"
        rows="2"
        autosize
        label="签名"
        type="textarea"
        maxlength="50"
        placeholder="请输入签名"
        show-word-limit
      />
      <div style="margin:50px 16px;">
        <van-button round block type="info" native-type="submit">
          确认修改
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  name: "",
  data() {
    return {
      username:'',
      message:''
    };
  },
  created() {},
  mounted() {

  },
  methods: {}
};
</script>

<style lang="less" scoped></style>
