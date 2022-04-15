<!-- home -->
<template>
  <div class="about-container">
    <div class="nav_bar">
      <van-nav-bar
        title="我的"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="content_container">
      <div class="enterprise_info">
        <div class="enterprise_name_box">
          <div class="enterprise_name">企业名称</div>
          <div class="enterprise_change">切换</div>
        </div>
        <div class="user_name">当前登录的用户姓名</div>
      </div>
      <ul class="quick_list">
        <li class="quick_list_item" v-for="(item,index) in quickList" :key="index" @click="toDetail(item)">
          <div class="item_title">
            <van-icon name="chat-o" />
            {{ item.title }}</div>
          <div class="item_total" v-if="item.total">{{ item.total }}</div>
        </li>
      </ul>
      <div class="sign_out">退出账号</div>
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
        {title:'待办提醒',total:'99',iconSrc:'',path:'/todoList'},
        {title:'进度通知',total:'18',iconSrc:'',path:'/progressNotice'},
        {title:'业务查询',total:'',iconSrc:'',path:'/businessQuery'},
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
    onClickLeft(){
      history.back()
    },
    toDetail(item){
      console.log(item.path)
      this.$router.push(item.path)
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
.enterprise_info {
  padding: 0 42px 40px;
  background: #fff;
  .enterprise_name_box {
    display: flex;
    height: 40px;
    padding-top: 60px;
    .enterprise_name {
      font-size: 32px;
      flex: 1;
    }
    .enterprise_change {
      width: 60px;
      color: #0000FF;
      text-align: center;
      line-height: 40px;
    }
  }
  .user_name {
    font-size: 28px;
    margin-top: 40px;
  }
}
.quick_list {
  margin-top: 40px;
  background: #fff;
  .quick_list_item {
    list-style: none;
    line-height: 80px;
    padding: 0 42px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:not(:nth-child(1)) {
      border-top: 1px solid #ebedf0;
    }
    .item_title {
      font-size: 28px;
    }
    .item_total {
      color: #fff;
      font-size: 12px;
      border-radius: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 50px;
      height: 30px;
      line-height: 30px;
      background: inherit;
      background-color: rgba(249, 94, 90, 1);
      -moz-box-shadow: none;
      -webkit-box-shadow: none;
      box-shadow: none;
      font-family: '微软雅黑 Regular', '微软雅黑', sans-serif;
      font-weight: 400;
      font-style: normal;
    }
  }
}
.sign_out {
  color: #fff;
  //margin: 0 42px;
  position: absolute;
  left: 50%;
  bottom: 180px;
  transform: translateX(-50%);
  width: calc(100% - 84px);
  height: 90px;
  text-align: center;
  line-height: 90px;
  background: inherit;
  background-color: rgba(0, 121, 254, 1);
  border-radius: 10px;
  -moz-box-shadow: none;
  -webkit-box-shadow: none;
  box-shadow: none;
  font-family: '微软雅黑', sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 32px;
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
