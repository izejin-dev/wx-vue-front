import Vue from 'vue'
import Router from 'vue-router'
import { constantRouterMap } from './router.config.js'
import store from '../store';

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

const createRouter = () =>
  new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRouterMap
  })

const router = createRouter()

export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

router.beforeEach((to,form,next) => {
  // if (to.meta.requireAuth) {
  //
  // }
  const token = store.getters['app/token']
  // 已经登录
  if (token) {
    store.dispatch('app/setIsLogin', true);
    next();
  }else {
    if (to.name === 'Login' || to.name ==='Home') {
      next()
    }else {
      store.dispatch('app/setIsLogin', false);
      next({name: 'Login'});
    }
  }
})



export default router
