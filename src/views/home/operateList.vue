<!-- home -->
<template>
  <div class="container">
    <div class="content_container">
      <ul class="todo_list">
        <li class="todo_list_item" v-for="(item, index) in quickList" :key="index" @click="toDetail(item, index)">
          <div class="img_box">
            <img :src="item.src" :alt="item.title">
          </div>
          <div class="article_info">
            <div class="item_title">{{ item.title }}</div>
            <div class="item_content" v-if="item.content">{{ item.content }}</div>
          </div>
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
         , src: 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
        { title: 'XXX企业提交了再保理申请待复核', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales', time: 'yyyy-mm-dd'
          , src: 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
        { title: 'XXX企业提交了再保理申请待复核', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales', time: 'yyyy-mm-dd'
          , src: 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg' },
        { title: 'XXX企业提交了再保理申请待复核', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales', time: 'yyyy-mm-dd'
          , src: 'https://cdn.jsdelivr.net/npm/@vant/assets/cat.jpeg' }
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
    toDetail(item, index) {
      console.log(index)
      this.$router.push('/operateDetail')
    }
  }
}
</script>
<style lang="less" scoped>
.todo_list {
  background: #fff;
  .todo_list_item {
    list-style: none;
    line-height: 40px;
    padding: 20px 42px;
    display: flex;
    height: 240px;
    cursor: pointer;
    overflow: hidden;
    .img_box {
      width: 200px;
      height: 240px;
      img {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
    &:not(:nth-child(1)) {
      border-top: 1px solid #ebedf0;
    }
    .article_info {
      flex: 1;
      margin-left: 20px;
      .item_title {
        font-size: 28px;
        line-height: 80px;
      }
      .item_content {
        line-height: 30px;
        color: rgba(51, 51, 51, .5);
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 20px;
      }
    }
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
