import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: () => import('@/components/HelloWorld')
    },
    {
      path: '/myPage',
      name: 'myPage',
      component: () => import('@/views/myPage')
    },
    {
      path: '/peojectTable',
      name: 'peojectTable',
      component: () => import('@/views/peojectTable')
    },
    {
      path: '/controlPage',
      name: 'controlPage',
      component: () => import('@/views/controlPage')
    }
  ]
})
