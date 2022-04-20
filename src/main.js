import 'core-js/stable'
import 'regenerator-runtime/runtime'

import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全局引入按需引入UI库 vant
import '@/plugins/vant'
// 引入全局样式
import '@/assets/less/index.less'
// 移动端适配
import 'lib-flexible/flexible.js'
// 引入移动端调试
import '@/utils/vconsole.js'
// filters
import './filters'
// 全局注册微信js-sdk
import WechatPlugin from '@/utils/wechatPlugin'
//引入全局注册组件
import { NavBar, Icon } from 'vant';
import { Form, Field, CellGroup } from 'vant';
import { ActionSheet } from 'vant';
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)
import { Notify } from 'vant'
Vue.use(Notify)
Vue.use(ActionSheet)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(CellGroup)
Vue.use(WechatPlugin)
// 引入本地存储
import { storage, sessionStorage } from '@/utils/storage'
Vue.prototype.$storage = storage
Vue.prototype.$sessionStorage = sessionStorage
// 动态设置title
Vue.use(require('vue-wechat-title'))

Vue.config.productionTip = false

import { Swipe, SwipeItem } from 'vant';
import { Tab, Tabs } from 'vant';

Vue.use(Form);
Vue.use(Field);
Vue.use(Tab);
Vue.use(Tabs);
Vue.use(Swipe);
Vue.use(SwipeItem);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
