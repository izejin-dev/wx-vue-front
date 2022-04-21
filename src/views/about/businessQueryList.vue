<!-- home -->
<template>
  <div class="about-container">
    <div class="content_container">
      <div class="input_box">
        <input type="text" v-model="userType" placeholder="输入鼎e信搜索">
      </div>
      <!--   融资中、融资待审核   -->
      <van-form v-if="formType == 1">
        <van-cell-group inset  @click="toDetail" v-for="(item, index) in formList" :key="index">
          <template>
            <div class="e_number_box">
              <van-field name="融e信编号" label="融e信编号" readonly v-model="item.number" />
              <div class="copy_btn"
                   v-clipboard:copy="item.number"
                   v-clipboard:success.stop="handleCopy"
                   v-clipboard:error.stop="handleError"
              >复制</div>
            </div>
          </template>
          <van-field name="融资金额" label="融资金额" readonly v-model="item.amount"/>
          <van-field name="承兑企业" label="承兑企业" readonly v-model="item.core"/>
          <van-field name="签收企业" label="签收企业" readonly v-model="item.sign"/>
          <van-field name="融资企业" label="融资企业" readonly v-model="item.core"/>
          <van-field name="业务环节" label="业务环节" readonly v-model="item.businessLink"/>
          <van-field name="状态" label="状态" readonly v-model="item.state"/>
        </van-cell-group>
      </van-form>
      <!--   待签收、待承兑、已承兑   -->
      <van-form v-if="formType == 2">
        <van-cell-group inset @click="toDetail" v-for="(item, index) in formList" :key="index">
          <template>
            <div class="e_number_box">
              <van-field name="融e信编号" label="融e信编号" readonly v-model="item.number" />
              <div class="copy_btn"
                   v-clipboard:copy="item.number"
                   v-clipboard:success.stop="handleCopy"
                   v-clipboard:error.stop="handleError"
              >复制</div>
            </div>
          </template>
          <van-field name="融e信金额" label="融e信金额" readonly v-model="item.amount"/>
          <van-field name="承兑企业" label="承兑企业" readonly v-model="item.core"/>
          <van-field name="签收企业" label="签收企业" readonly v-model="item.sign"/>
          <van-field name="业务环节" label="业务环节" readonly v-model="item.businessLink"/>
          <van-field name="状态" label="状态" readonly v-model="item.state"/>
        </van-cell-group>
      </van-form>
      <!--   正常持有   -->
      <van-form v-if="formType == 3">
        <van-cell-group inset @click="toDetail" v-for="(item, index) in formList" :key="index">
          <template>
            <div class="e_number_box">
              <van-field name="融e信编号" label="融e信编号" readonly v-model="item.number" />
              <div class="copy_btn"
                   v-clipboard:copy="item.number"
                   v-clipboard:success.stop="handleCopy"
                   v-clipboard:error.stop="handleError"
              >复制</div>
            </div>
          </template>
          <van-field name="融e信金额" label="融e信金额" readonly v-model="item.amount"/>
          <van-field name="承兑企业" label="承兑企业" readonly v-model="item.core"/>
          <van-field name="签收企业" label="签收企业" readonly v-model="item.sign"/>
          <van-field name="业务环节" label="业务环节" readonly v-model="item.businessLink"/>
          <van-field name="状态" label="状态" readonly v-model="item.state"/>
        </van-cell-group>
      </van-form>
      <!--   流转中   -->
      <van-form v-if="formType == 4">
        <van-cell-group inset @click="toDetail" v-for="(item, index) in formList" :key="index">
          <template>
            <div class="e_number_box">
              <van-field name="融e信编号" label="融e信编号" readonly v-model="item.number" />
              <div class="copy_btn"
                   v-clipboard:copy="item.number"
                   v-clipboard:success.stop="handleCopy"
                   v-clipboard:error.stop="handleError"
              >复制</div>
            </div>
          </template>
          <van-field name="流转金额" label="流转金额" readonly v-model="item.amount"/>
          <van-field name="承兑企业" label="承兑企业" readonly v-model="item.core"/>
          <van-field name="签收企业" label="签收企业" readonly v-model="item.sign"/>
          <van-field name="接收企业" label="接收企业" readonly v-model="item.bank"/>
          <van-field name="业务环节" label="业务环节" readonly v-model="item.businessLink"/>
          <van-field name="状态" label="状态" readonly v-model="item.state"/>
        </van-cell-group>
      </van-form>
      <!--   应还、应收   -->
      <van-form v-if="formType == 5">
        <van-cell-group inset @click="toDetail" v-for="(item, index) in formList" :key="index">
          <template>
            <div class="e_number_box">
              <van-field name="融e信编号" label="融e信编号" readonly v-model="item.number"/>
              <div class="copy_btn"
                   v-clipboard:copy="item.number"
                   v-clipboard:success.stop="handleCopy"
                   v-clipboard:error.stop="handleError"
              >复制</div>
            </div>
          </template>
          <van-field name="融e信金额" label="融e信金额" readonly v-model="item.amount"/>
          <van-field name="承兑企业" label="承兑企业" readonly v-model="item.core"/>
          <van-field name="接收企业" label="接收企业" readonly v-model="item.supplier"/>
          <van-field name="资金方" label="资金方" readonly v-model="item.bank"/>
          <van-field name="融e信承诺付款日" label="融e信承诺付款日" readonly v-model="item.date"/>
          <van-field name="状态" label="状态" readonly v-model="item.state"/>
        </van-cell-group>
      </van-form>
    </div>
  </div>
</template>

<script>
// 请求接口
import { getUserInfo } from '@/api/user.js'
import { mapGetters } from 'vuex'
import { Notify } from 'vant';
export default {
  data() {
    return {
      wechat: `https://imgs.solui.cn/wx/640.gif`,
      userType: '', // 1供应商，2核心企业，3资金方
      formType: 0, // 1-融资中、融资待审核,2-待签收、待承兑、已承兑,3-正常持有,4-流转中,5-应还、应收
      components: {
        VanNotify: Notify.Component
      },
      formList: [
        {
          number: 123,
          amount: 999,
          core: 'xxxx核心企业',
          sign: 'xxxx核心企业',
          supplier: 'xxxx供应商企业',
          bank: 'xxx银行',
          businessLink: 'xxx银行',
          date: '2021-11-12',
          state: '未逾期',
        },
        {
          number: 12356,
          amount: 11999,
          core: 'xxxx核心企业',
          supplier: 'xxxx供应商企业',
          bank: 'xxx银行',
          date: '2021-11-12',
          state: '未逾期',
        },
      ],
    }
  },
  computed: {
    ...mapGetters(['userName'])
  },
  mounted() {
    this.initData()
    this.formType = this.$route.query.formType
    console.log(this.formType)
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
    },
    handleCopy(e) {
      this.$notify({
        message: '复制成功',
        type: 'success'
      })
    },
    handleError(e) {
      this.$notify({
        message: '复制失败',
        type: 'danger',
      })
    }
  }
}
</script>
<style lang="less" scoped>
.content_container {
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
  margin-top: 40px;
}
.e_number_box {
  display: flex;
}
.copy_btn {
  color: #0000FF;
  padding: 20px;
  width: 60px;
  cursor: pointer;
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
