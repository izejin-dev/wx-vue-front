<!-- home -->
<template>
  <div class="about-container">
    <div class="nav_bar">
      <van-nav-bar
        title="我的待办"
        left-text="返回"
        right-text="一键已读"
        left-arrow
        @click-left="onClickLeft"
        @click-right="onClickRight"
      />
    </div>
    <div class="content_container">
      <ul class="todo_list">
        <li class="todo_list_item" v-for="(item,index) in quickList" :key="index" @click="toDetail(item)">
          <div class="item_title">{{ item.title }}</div>
          <div class="item_content" v-if="item.content">{{ item.content }}</div>
          <div class="item_time">时间：{{ item.time }}</div>
        </li>
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
      quickList: [
        { title: 'XXX企业提交了再保理申请待复核', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales', time: 'yyyy-mm-dd'
         , path: '/todoList' },
        { title: 'XXX企业提交了再保理申请待复核', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales', time: 'yyyy-mm-dd'
          , path: '/todoList' },
        { title: 'XXX企业提交了再保理申请待复核', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales', time: 'yyyy-mm-dd'
          , path: '/todoList' },
        { title: 'XXX企业提交了再保理申请待复核', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales', time: 'yyyy-mm-dd'
          , path: '/todoList' }
      ]
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
    onClickRight() {
      // history.back()
      console.log('一键已读')
    },
    toDetail(item) {
      console.log(item.path)
    }
  }
}
</script>
<style lang="less">
.nav_bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}
.content_container {
  margin-top: 90px;
}
.todo_list {
  margin-top: 40px;
  background: #fff;
  .todo_list_item {
    list-style: none;
    line-height: 40px;
    padding: 0 42px;
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
