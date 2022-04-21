<!-- home -->
<template>
  <div class="about-container">
    <div class="content_container">
      <div class="enterprise_info">
        <div class="enterprise_name_box">
          <div class="enterprise_name">{{ $store.state.app.coreName }}</div>
          <van-cell is-link title="切换" @click="show = true" />
          <van-action-sheet v-model="show" :actions="$store.state.app.enterPrise" cancel-text="取消" description="请选择要更换的企业" @select="onSelect" />
        </div>
        <div class="user_name">{{ $store.state.app.usersName }}</div>
      </div>
      <ul class="quick_list">
        <li class="quick_list_item" v-for="(item,index) in quickList" :key="index" @click="toDetail(item)">
          <div class="item_title">
            <van-icon name="chat-o" />
            {{ item.title }}
          </div>
          <div class="item_total" v-if="item.total">{{ item.total }}</div>
        </li>
      </ul>
      <div class="sign_out" @click="signOut">退出账号</div>
    </div>
    <van-dialog v-model:show="dialogShow" title="是否确认退出？" show-cancel-button @confirm="toHome">
    </van-dialog>
  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
import { Toast } from 'vant'
export default {
  data() {
    return {
      wechat: `https://imgs.solui.cn/wx/640.gif`,
      quickList: [
        { title: '待办提醒', total: '99', iconSrc: '', path: '/todoList' },
        { title: '进度通知', total: '18', iconSrc: '', path: '/progressNotice' },
        { title: '业务查询', total: '', iconSrc: '', path: '/businessQuery' },
      ],
      show: false,
      dialogShow: false,
      coreName: '',
      usersName: ''
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
      console.log(item.path)
      this.$router.push(item.path)
    },
    onSelect(item) {
      this.show = false
      Toast(item.name)
      this.coreName = item.name
      this.usersName = item.userName
      this.$store.state.app.coreName = item.name
      this.$store.state.app.usersName = item.userName
    },
    signOut() {
      this.dialogShow = true
    },
    toHome() {
      this.$store.state.app.isSignIn = false
      this.$router.push({
        path: '/home',
        query: { isSignIn: false }
      })
    }
  }
}
</script>
<style lang="less" scoped>
.enterprise_info {
  padding: 0 42px 40px;
  background: #fff;
  .enterprise_name_box {
    position: relative;
    height: 40px;
    padding-top: 60px;
    .enterprise_name {
      font-size: 32px;
    }
    .van-cell {
      position: absolute;
      width: auto;
      right: 0;
      top: 60px;
      padding: 0;
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
.sign_out {
  color: #fff;
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
