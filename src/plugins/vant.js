// 按需全局引入 vant组件
import Vue from 'vue'
import { Button, List, Cell, Tabbar, TabbarItem } from 'vant'
Vue.use(Button)
Vue.use(Cell)
Vue.use(List)
Vue.use(Tabbar).use(TabbarItem)

import { NavBar, Icon } from 'vant'
import { Form, Field, CellGroup } from 'vant'
import { ActionSheet } from 'vant'
Vue.use(ActionSheet)
Vue.use(NavBar)
Vue.use(Icon)
Vue.use(Form)
Vue.use(Field)
Vue.use(CellGroup)

import { Dialog } from 'vant'
Vue.use(Dialog)
import { Notify } from 'vant'
Vue.use(Notify)

import { Swipe, SwipeItem } from 'vant'
import { Tab, Tabs } from 'vant'
Vue.use(Tab)
Vue.use(Tabs)
Vue.use(Swipe)
Vue.use(SwipeItem)
