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
        component: () => import('@/views/home/about'),
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
    path:'/todoList',
    name:'todoList',
    component:()=>import('@/views/home/todo'),
    meta: { title: '我的待办', keepAlive: false }
  },
  {
    path:'/businessQuery',
    name:'businessQuery',
    component:()=>import('@/views/home/businessQuery'),
    meta: { title: '业务查询', keepAlive: false }
  },
]
