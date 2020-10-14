<template>
  <div class="">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <ul v-if="list && list.length > 0">
        <li v-for="item in list" :key="item.id">
          <div class="left">
            <p class="type">{{ item.type }}</p>
          </div>
          <div>
            <h3 class="desc">{{ item.desc }}</h3>
            <p class="time">{{ item.time }}</p>
          </div>
        </li>
      </ul>
      <van-empty v-else description="没有数据" />
    </van-pull-refresh>
  </div>
</template>

<script>

export default {
  name: "",
  props: {
    list: {
      type: Array,
      required: true
    },
    onRefresh:{
      type: Function,
      required: true
    }
  },
  data() {
    return {
      isLoading:false
    };
  },
  created() {},
  mounted() {},
  methods: {
    setLoad(state){
      this.isLoading = state
    }
  }
};
</script>

<style lang="less" scoped>
ul {
  li {
    background: #fff;
    box-shadow: 0 0.05rem 0.25rem #afafaf;
    border-radius: 0.15rem;
    margin: 0.5rem 0.75rem 0.75rem 0.75rem;
    padding: 0.75rem;
    display: flex;
    align-items: center;
    .left {
      margin-right: 0.5rem;
      flex-shrink: 0;
    }
    .type {
      font-size: 0.9rem;
      font-weight: bold;
      color: #ff9180;
      border: 0.05rem solid #ff9180;
      border-radius: 0.25rem;
      padding: 0.5rem;
    }
    .desc {
      font-size: 0.8rem;
      font-weight: bold;
      line-height: 1rem;
    }
    .time {
      color: #666;
      margin-top: 0.5rem;
    }
  }
}
</style>
