<!-- home -->
<template>
  <div class="home">
    <div class="title">
      <span class="platform">云商平台</span>
      <span class="is_sign" v-if="!isSignIn">登录</span>
      <span class="is_sign" v-if="isSignIn">已登录</span>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="center">
      <div class="card_center_box" v-if="isSignIn">
        <div class="center_title">
          <div class="center_title_info">进度查询</div>
          <van-cell is-link title="切换" @click="show = true" />
          <van-action-sheet v-model="show" :actions="actions" cancel-text="取消" description="选择租户平台" @select="onSelect" />
        </div>
        <div class="cards">
          <div class="box">待办提醒</div>
          <div class="box">进度通知</div>
          <div class="box">业务查询</div>
        </div>
      </div>
      <div class="card_center_box" v-if="isSignIn">
        <div class="center_title">
          <div class="center_title_info">操作手册</div>
          <div class="center_title_btn">更多</div>
        </div>
        <div class="cards">
          <div class="box">鼎e信融资</div>
          <div class="box">鼎e信融资</div>
          <div class="box">鼎e信融资审核</div>
        </div>
      </div>
      <div class="card_center_box">
        <div class="center_title">
          <div class="center_title_info">产品介绍</div>
          <div class="center_title_btn">更多</div>
        </div>
        <div class="cards">
          <div class="box">xx</div>
          <div class="box">xx</div>
          <div class="box">xx</div>
        </div>
      </div>
      <div class="center_title">帮助中心</div>
      <div class="list">
        <div class="list_title" @click="toDetail">我有了额度如何开利</div>
        <div class="list_box">xxxxxxxxxxxxxxxxxxxxxxxx</div>
      </div>
      <div class="list">
        <div class="list_title">我有了额度如何开利</div>
        <div class="list_box">xxxxxxxxxxxxxxxxxxxxxxxx</div>
      </div>
      <div class="list">
        <div class="list_title">我有了额度如何开利</div>
        <div class="list_box">xxxxxxxxxxxxxxxxxxxxxxxx</div>
      </div>
      <div class="list">
        <div class="list_title">我有了额度如何开利</div>
        <div class="list_box">xxxxxxxxxxxxxxxxxxxxxxxx</div>
      </div>
    </div>
  </div>
</template>

<script>
import { Toast } from 'vant'

export default {
  name:'Home',
  data() {
    return {
      show: false,
      isSignIn: true, // 是否登录
      actions: [
        { name: '租户一' },
        { name: '租户二' },
        { name: '租户三' }
      ],
    }
  },

  computed: {},

  mounted() {},

  methods: {
    onSelect(item) {
      this.show = false
      Toast(item.name)
    },
    toDetail() {
      this.$router.push('/articleList')
    }
  }
}
</script>
<style lang="less" scoped>
.home{
  .title{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 30px;
    background: #fff;
    .platform{
      font-size: 30px;
      font-weight: 700;
    }
    .is_sign{
      font-size: 30px;
      color: #1989fa;
    }
  }
  .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 300px;
    text-align: center;
    background-color: #39a9ed;
    height: 300px;
  }
  .center{
    .card_center_box {
    }
    .center_title{
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 26px;
      height: 80px;
      padding: 10px 30px 0;
      margin-top: 20px;
      background: #fff;
      border-bottom: 1px solid rgb(225, 215, 215);
      .center_title_info {
        flex: 1;
      }
      .center_title_btn {
        width: 60px;
      }
      .van-cell {
        width: auto;
        padding: 0;
        font-size: 26px;
        i {
          display: none;
        }
      }
    }
    .cards{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width:100%;
      height: 200px;
      background: #fff;
      .box{
        flex: 1;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 24px;
        border-right: 1px solid rgb(225, 215, 215);
      }
      .box:last-child{
         border-right: 0px;
      }
    }
    .list{
      width: 100%;
      background: #fff;
      .list_title{
        padding: 20px 15px 0 15px;
        font-size: 24px;
      }
      .list_box{
        padding: 10px 20px 30px 20px;
        font-size: 22px;
        color: grey;
        border-bottom: 1px solid rgb(225, 215, 215);
      }
    }
    .list:last-child .list_box{
      border-bottom: 0px;
    }
  }
}
</style>
