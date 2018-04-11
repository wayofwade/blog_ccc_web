import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: '登录',
      component: resolve => require(['../components/login/Login.vue'], resolve)
    },

    {
      path: '/index',
      name: '主页',
      component: resolve => require(['../components/common/Index.vue'], resolve),
      children: [
        {
          path: '/',
          name: '我的首页',
          component: resolve => require(['../components/pages/ShowIndex.vue'], resolve)
        },
        {
          path: '/blogList',
          name: '技术博客',
          component: resolve => require(['../components/blogList/BlogList.vue'], resolve)
        },
        {
          path: '/articleList',
          name: '碎碎杂谈',
          component: resolve => require(['../components/pages/ArticleList.vue'], resolve)
        },
        {
          path: '/timeList',
          name: '时间轴',
          component: resolve => require(['../components/pages/TimeList.vue'], resolve)
        }
      ]
    }
  ]
})
