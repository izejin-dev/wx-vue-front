/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    component: () => import('@/layouts/index'),
    redirect: '/home',
    meta: {
      title: '首页',
      keepAlive: false
    },
    children: [
      {
        path: '/home',
        name: 'Home',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false }
      },
      {
        path: '/about',
        name: 'About',
        component: () => import('@/views/about/about'),
        meta: { title: '关于我们', keepAlive: false }
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index'),
    meta: { title: '登录', keepAlive: false }
  },
  {
    path: '/todoList',
    name: 'todoList',
    component: () => import('@/views/about/todo'),
    meta: { title: '我的待办', keepAlive: false }
  },
  {
    path: '/progressNotice',
    name: 'progressNotice',
    component: () => import('@/views/about/progressNotice'),
    meta: { title: '进度通知', keepAlive: false }
  },
  {
    path: '/businessDetail',
    name: 'businessDetail',
    component: () => import('@/views/about/businessDetail'),
    meta: { title: '详情', keepAlive: false }
  },
  {
    path: '/businessQueryList',
    name: 'businessQueryList',
    component: () => import('@/views/about/businessQueryList'),
    meta: { title: '业务查询', keepAlive: false }
  },
  {
    path: '/businessQuery',
    name: 'businessQuery',
    component: () => import('@/views/about/businessQuery'),
    meta: { title: '业务查询', keepAlive: false }
  },
]
