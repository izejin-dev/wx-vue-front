<!-- home -->
<template>
  <div class="about-container">
    <div class="nav_bar">
      <van-nav-bar
        title="详情"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="content_container">
      <!--   融资中、融资待审核   -->
      <van-form  >
        <van-cell-group >
          <van-field
            name="融e信编号"
            label="融e信编号"
            value="898082013"
          />
          <van-field
            name="金额"
            label="金额"
            value="¥100,222.00"
          />
          <van-field
            name="开立企业"
            label="开立企业"
            value="XXXX 企业"
          />
          <van-field
            name="承兑企业"
            label="承兑企业"
            value="XXXX 企业"
          />
          <van-field
            name="保荐企业"
            label="保荐企业"
            value=""
          />
          <van-field
            name="签收企业"
            label="签收企业"
            value="XXX供应商"
          />
          <van-field
            name="承兑日期"
            label="承兑日期"
            value="yyyy-mm-dd"
          />
          <van-field
            name="签收日期"
            label="签收日期"
            value="yyyy-mm-dd"
          />
          <van-field
            name="业务环节"
            label="业务环节"
            value="融资"
          />
          <van-field
            name="状态"
            label="状态"
            value="待复核"
          />
        </van-cell-group>
      </van-form>
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
}
.van-form {
  margin-top: 40px;
}
.van-cell-group {
  position: relative;
}
/deep/ .van-field__control {
  text-align: right;
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
