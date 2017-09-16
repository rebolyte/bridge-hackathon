import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Page1 from '@/components/Page1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/page1',
      name: 'Page1',
      component: Page1
    },
  ]
})
