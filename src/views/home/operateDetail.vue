<!-- home -->
<template>
  <div class="container">
    <div class="nav_bar">
      <van-nav-bar
        title="操作详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="content_container">
      <div class="article_title">{{ articleTitle }}</div>
      <div class="article_info">{{ articleDetail }}</div>
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
      articleTitle: 'Lorem ipsum dolor sit amet',
      articleDetail: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales',
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
    onClickLeft() {
      history.back()
    },
  }
}
</script>
<style lang="less" scoped>
.nav_bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.content_container {
  margin-top: 90px;
  padding: 40px;
  .article_title {
    font-size: 32px;
    font-weight: 600;
  }
  .article_info {
    line-height: 30px;
  }
}
.container {
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
