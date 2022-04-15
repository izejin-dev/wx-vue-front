<!-- home -->
<template>
  <div class="home">
    <div class="title">
      <span class="text1">云商平台</span>
      <span class="text2">登录</span>
    </div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item>1</van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
      <van-swipe-item>3</van-swipe-item>
      <van-swipe-item>4</van-swipe-item>
    </van-swipe>
    <div class="center">
      <div class="center_title">产品介绍</div>
      <div class="cards">
        <div class="box">xx</div>
        <div class="box">xx</div>
        <div class="box">xx</div>
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
export default {
  name:'Home',
  data() {
    return {
    }
  },

  computed: {},

  mounted() {},

  methods: {}
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
    .text1{
      font-size: 30px;
      font-weight: 700;
    }
    .text2{
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
    .center_title{
      font-size: 26px;
      height: 80px;
      padding: 0 30px;
      margin-top: 20px;
      background: #fff;
      padding-top: 10px;
      border-bottom: 1px solid rgb(225, 215, 215);
    }
    .cards{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width:100%;
      height: 200px;
      background: #fff;
      .box{
        flex: auto;
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
