<!-- home -->
<template>
  <div class="login">
        <div class="title">云商平台</div>
        <van-tabs v-model="active" @change="changeTabs">
            <van-tab title="密码登录">
                <van-form @submit="onSubmit">
                    <van-field
                        v-model="username"
                        name="用户名"
                        label="用户名"
                        placeholder="用户名"
                        :rules="[{ required: true, message: '请填写用户名' }]"
                    />
                    <van-field
                        v-model="password"
                        type="password"
                        name="密码"
                        label="密码"
                        placeholder="密码"
                        :rules="[{ required: true, message: '请填写密码' }]"
                    />
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submitUser">提交</van-button>
                    </div>
                </van-form>
            </van-tab>
            <van-tab title="验证码登录">
                <van-form @submit="submitCode">
                    <van-field
                        v-model="phone"
                        name="手机号"
                        label="手机号"
                        placeholder="手机号"
                        :rules="telRules"
                    />
                  <template>
                    <div style="display: flex">
                      <van-field
                        v-model="imgCode"
                        name="图形验证码"
                        label="图形验证码"
                        placeholder="图形验证码"
                        :rules="[{ required: true, message: '请填写图形验证码' }]"
                      />
                      <div class="get-code" @click="refreshCode()">
                        <s-identify :identifyCode="identifyCode"></s-identify>
                      </div>
                    </div>
                  </template>
                  <van-field
                    v-model="code"
                    name="验证码"
                    label="验证码"
                    placeholder="验证码"
                    :rules="[{ required: true, message: '请填写验证码' }]"
                  />
                    <div style="margin: 16px;">
                        <van-button round block type="info" native-type="submitCode">提交</van-button>
                    </div>
                </van-form>
            </van-tab>
        </van-tabs>
    <div style="margin: 16px;">
      <van-button round block type="info" @click="signIn">登录成功</van-button>
    </div>
  </div>
</template>

<script>
import SIdentify from "@/components/SIdentify.vue";
export default {
  name: 'Login',
  components: { SIdentify },
  data() {
    return {
      active: 0,
      username: '',
      password: '',
      phone: '',
      imgCode: '',
      code: '',
      identifyCode: '',
      identifyCodes: '0123456789abcdwerwshdjeJKDHRJHKOOPLMKQ', // 绘制的随机数
      telRules: [
        {
          required: true,
          message: '请填写手机号'
        },
        {
          validator: value => {
            return /^((\+|00)86)?1[3-9]\d{9}$/.test(value)
          },
          message: '请输入正确格式的手机号'
        }
      ]
    }
  },

  computed: {},
  created() {
    this.refreshCode()
  },

  mounted() {},

  methods: {
    changeTabs(e) {
      console.log(e, this.active)
    },
    submitUser() {

    },
    signIn() {
      this.$router.push({
        path: 'home',
        query: { isSignIn: true }
      })
    },
    refreshCode() {
      this.identifyCode = ''
      this.makeCode(this.identifyCodes,4)
    },
    randomNum(min, max) {
      max = max + 1
      return Math.floor(Math.random() * (max - min) + min)
    },
    // 随机生成验证码字符串
    makeCode(data, len) {
      for (let i = 0; i < len; i++) {
        this.identifyCode += data[this.randomNum(0, data.length - 1)]
      }
    },
    submitCode() {

    }
  }
}
</script>
<style lang="less" scoped>
.login{
    .title{
        width: 100%;
        height: 200px;
        font-size: 36px;
        font-weight: 700;
        line-height: 200px;
        text-align: center;
    }
    /deep/ .van-tabs__nav{
        background-color: transparent;
        width: 400px;
        margin-left: 30px;
    }
    /deep/ .van-tabs__line{
        background-color: #1989fa;
        width: 120px;
    }
    /deep/ .van-tabs__content{
        width: 600px;
        margin-left: 70px;
        margin-top: 60px;
    }
  /deep/ .van-button--round {
    border-radius: 10px;
  }
}
</style>
