<!-- home -->
<template>
  <div class="home">
    <div class="title">
      <span class="platform">云商平台</span>
      <span class="is_sign" v-if="!isSignIn" @click="$router.push('/login')">登录</span>
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
          <div class="box quick-item" v-for="(item, index) in quickList" :key="index" @click="toDetail(item)">
            <div class="item_title">{{ item.title }}</div>
            <div class="item_total" v-if="item.total">{{ item.total }}</div>
          </div>
        </div>
      </div>
      <div class="card_center_box" v-if="isSignIn">
        <div class="center_title">
          <div class="center_title_info">操作手册</div>
          <div class="center_title_btn" @click="toOperateList">更多</div>
        </div>
        <div class="cards">
          <div class="box" @click="$router.push('/operateDetail')">鼎e信融资</div>
          <div class="box" @click="$router.push('/operateDetail')">鼎e信融资</div>
          <div class="box" @click="$router.push('/operateDetail')">鼎e信融资审核</div>
        </div>
      </div>
      <div class="card_center_box">
        <div class="center_title">
          <div class="center_title_info">产品介绍</div>
          <div class="center_title_btn" @click="toProList">更多</div>
        </div>
        <div class="cards">
          <div class="box" @click="$router.push('/articleDetail')">xx</div>
          <div class="box" @click="$router.push('/articleDetail')">xx</div>
          <div class="box" @click="$router.push('/articleDetail')">xx</div>
        </div>
      </div>
      <div class="center_title">帮助中心</div>
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
      isSignIn: false, // 是否登录
      actions: [
        { name: '租户一' },
        { name: '租户二' },
        { name: '租户三' }
      ],
      quickList: [
        { title: '待办提醒', total: '99', iconSrc: '', path: '/todoList' },
        { title: '进度通知', total: '18', iconSrc: '', path: '/progressNotice' },
        { title: '业务查询', total: '', iconSrc: '', path: '/businessQuery' },
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
    toDetail(item) {
      console.log(item.path)
      this.$router.push(item.path)
    },
    toOperateList() {
      this.$router.push('/operateList')
    },
    toProList() {
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
        width: auto;
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
      .quick-item {
        position: relative;
        .item_total {
          position: absolute;
          right: 20px;
          top: 20px;
          color: #fff;
          font-size: 12px;
          border-radius: 15px;
          text-align: center;
          width: 50px;
          height: 30px;
          line-height: 30px;
          background-color: rgba(249, 94, 90, 1);
          font-family: '微软雅黑 Regular', '微软雅黑', sans-serif;
          font-weight: 400;
          font-style: normal;
        }
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
