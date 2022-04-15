<!-- home -->
<template>
  <div class="about-container">
    <div class="nav_bar">
      <van-nav-bar
        title="业务查询"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="content_container">
      <div class="input_box">
        <input type="text" v-model="userType" placeholder="输入鼎e信搜索">
      </div>
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
      <!--   融资中、融资待审核   -->
      <van-form  v-show="formType == 1">
        <van-cell-group inset>
          <van-field
            name="融e信编号"
            label="融e信编号"
            value="123"
          />
          <van-field
            name="融资金额"
            label="融资金额"
            value="123"
          />
          <van-field
            name="承兑企业"
            label="承兑企业"
            value="xxxx核心企业"
          />
          <van-field
            name="签收企业"
            label="签收企业"
            value="xxxx供应商企业"
          />
          <van-field
            name="融资企业"
            label="融资企业"
            value="xxxx供应商企业"
          />
          <van-field
            name="业务环节"
            label="业务环节"
            value="融资"
          />
          <van-field
            name="状态"
            label="状态"
            value="待平台资方审核"
          />
          <div class="copy_btn">复制</div>
        </van-cell-group>
      </van-form>
      <!--   待签收、待承兑、已承兑   -->
      <van-form  v-show="formType == 2">
        <van-cell-group inset>
          <van-field
            name="融e信编号"
            label="融e信编号"
            value="123"
          />
          <van-field
            name="融e信金额"
            label="融e信金额"
            value="123"
          />
          <van-field
            name="承兑企业"
            label="承兑企业"
            value="xxxx核心企业"
          />
          <van-field
            name="签收企业"
            label="签收企业"
            value="xxxx供应商企业"
          />
          <van-field
            name="业务环节"
            label="业务环节"
            value="开立"
          />
          <van-field
            name="状态"
            label="状态"
            value="待签收"
          />
          <div class="copy_btn">复制</div>
        </van-cell-group>
      </van-form>
      <!--   正常持有   -->
      <van-form  v-show="formType == 3">
        <van-cell-group inset>
          <van-field
            name="融e信编号"
            label="融e信编号"
            value="123"
          />
          <van-field
            name="融e信金额"
            label="融e信金额"
            value="123"
          />
          <van-field
            name="承兑企业"
            label="承兑企业"
            value="xxxx核心企业"
          />
          <van-field
            name="签收企业"
            label="签收企业"
            value="xxxx供应商企业"
          />
          <van-field
            name="业务环节"
            label="业务环节"
            value="-"
          />
          <van-field
            name="状态"
            label="状态"
            value="正常持有"
          />
          <div class="copy_btn">复制</div>
        </van-cell-group>
      </van-form>
      <!--   流转中   -->
      <van-form  v-show="formType == 4">
        <van-cell-group inset>
          <van-field
            name="融e信编号"
            label="融e信编号"
            value="123"
          />
          <van-field
            name="流转金额"
            label="流转金额"
            value="123"
          />
          <van-field
            name="承兑企业"
            label="承兑企业"
            value="xxxx核心企业"
          />
          <van-field
            name="签收企业"
            label="签收企业"
            value="xxxx供应商企业"
          />
          <van-field
            name="接收企业"
            label="接收企业"
            value="xxxx供应商企业"
          />
          <van-field
            name="业务环节"
            label="业务环节"
            value="流转"
          />
          <van-field
            name="状态"
            label="状态"
            value="待签收"
          />
          <div class="copy_btn">复制</div>
        </van-cell-group>
      </van-form>
      <!--   应还、应收   -->
      <van-form v-show="formType == 5">
        <van-cell-group inset>
          <van-field
            name="融e信编号"
            label="融e信编号"
            value="123"
          />
          <van-field
            name="融e信金额"
            label="融e信金额"
            value="123"
          />
          <van-field
            name="承兑企业"
            label="承兑企业"
            value="xxxx核心企业"
          />
          <van-field
            name="接收企业"
            label="接收企业"
            value="xxxx供应商企业"
          />
          <van-field
            name="资金方"
            label="资金方"
            value="xxxx银行"
          />
          <van-field
            name="融e信承诺付款日"
            label="融e信承诺付款日"
            value="2021-11-12"
          />
          <van-field
            name="状态"
            label="状态"
            value="未逾期"
          />
          <div class="copy_btn">复制</div>
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
      userType: 1, // 1供应商，2核心企业，3资金方
      todayReceived: '$13131',
      tomorrowReceived: '$19996',
      number: '',
      quickList: [
        { title: 'XXX企业提交了再保理申请待复核', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales', time: 'yyyy-mm-dd'
          , path: '/todoList' },
        { title: 'XXX企业提交了再保理申请待复核', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales', time: 'yyyy-mm-dd'
          , path: '/todoList' },
        { title: 'XXX企业提交了再保理申请待复核', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales', time: 'yyyy-mm-dd'
          , path: '/todoList' },
        { title: 'XXX企业提交了再保理申请待复核', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales', time: 'yyyy-mm-dd'
          , path: '/todoList' }
      ],
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
    changeFormType(e) {
      this.formType = e
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
  .input_box {
    padding: 20px 10px;
    text-align: center;
    border-bottom: 1px solid rgba(51, 51, 51, .1);
    input {
      width: calc(100% - 84px);
      height: 60px;
      text-align: center;
      border-radius: 60px;
      border: 0px solid #000;
    }
  }

}
.business_query {
  margin-top: 40px;
  background: #fff;
  .business_query_item {
    list-style: none;
    line-height: 80px;
    padding: 0 42px;
    text-align: center;
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
