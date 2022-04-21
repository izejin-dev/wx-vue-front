<!-- home -->
<template>
  <div class="about-container">
    <div class="content_container">
      <ul class="business_query" v-if="userType == 1">
        <li class="business_query_item" @click="changeFormType(2)">待签收</li>
        <li class="business_query_item" @click="changeFormType(3)">正常持有</li>
        <li class="business_query_item" @click="changeFormType(1)">融资中</li>
        <li class="business_query_item" @click="changeFormType(4)">流转中</li>
      </ul>
      <ul class="business_query" v-if="userType == 2">
        <li class="business_query_item" @click="changeFormType(2)">待承兑</li>
        <li class="business_query_item" @click="changeFormType(2)">已承兑</li>
        <li class="business_query_item" @click="changeFormType(5)">今日应还（{{ todayReceived }}）</li>
        <li class="business_query_item" @click="changeFormType(5)">明日应还（{{ tomorrowReceived }}）</li>
      </ul>
      <ul class="business_query" v-if="userType == 3">
        <li class="business_query_item" @click="changeFormType(1)">融资待审核</li>
        <li class="business_query_item" >已融资</li>
        <li class="business_query_item" @click="changeFormType(5)">今日应收（{{ todayReceived }}）</li>
        <li class="business_query_item" @click="changeFormType(5)">明日应收（{{ tomorrowReceived }}）</li>
      </ul>
    </div>

  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      wechat: `https://imgs.solui.cn/wx/640.gif`,
      userType: 2, // 1供应商，2核心企业，3资金方
      todayReceived: '$13131',
      tomorrowReceived: '$19996',
      formType: 0,  // 1-融资中、融资待审核,2-待签收、待承兑、已承兑,3-正常持有,4-流转中,5-应还、应收
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    this.initData()
  },
  methods: {
    // 请求数据案例
    initData() {
      // 请求接口数据，仅作为展示，需要配置src->config下环境文件
      const params = { user: 'sunnie' }
      getUserInfo(params)
        .then(() => {})
        .catch(() => {})
    },
    // Action 通过 store.dispatch 方法触发
    doDispatch() {
      this.$store.dispatch('setUserName', '12313')
    },
    toDetail(item) {
      this.$router.push('/businessDetail')
    },
    changeFormType(e) {
      this.formType = e
      this.$router.push({ path: '/businessQueryList', query: { formType: e }})
    }
  }
}
</script>
<style lang="less" scoped>
.business_query {
  background: #fff;
  .business_query_item {
    list-style: none;
    line-height: 80px;
    padding: 0 42px;
    text-align: center;
    cursor: pointer;
    &:not(:nth-child(1)) {
      border-top: 1px solid #ebedf0;
    }
    .item_title {
      font-size: 28px;
      line-height: 80px;
    }
    .item_time {
      line-height: 60px;
      color: rgba(51, 51, 51, .5);
    }
  }
}
.van-form {
  margin-top: 40px;
}
.van-cell-group {
  position: relative;
}
.copy_btn {
  position: absolute;
  top: 0;
  right: 0;
  color: #0000FF;
  padding: 20px 30px;
}
.about-container {
  /* 你的命名空间 */
  background: rgba(245, 245, 245, 1);
  height: 100vh;
  box-sizing: border-box;
  .warpper {
    padding: 50px 12px 12px 12px;
    .list {
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #666;
      font-size: 14px;
      .demo-home__title {
        margin: 0 0 6px;
        font-size: 32px;
        .demo-home__title img,
        .demo-home__title span {
          display: inline-block;
          vertical-align: middle;
        }
      }
      .item {
        font-size: 14px;
        line-height: 34px;
        color: @theme-color;
        a {
          text-decoration: underline;
        }
        .van-button {
          /* vant-ui 元素*/
          background: #ff5500;
        }
      }

      .wechat {
        width: 200px;
        height: 200px;
        img {
          width: 100%;
          height: auto;
        }
      }
    }
  }
}
</style>
