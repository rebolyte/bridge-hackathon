import Vue from 'vue'
import VueRouter from 'vue-router'

import Hello from '@/Hello'
import Page1 from '@/Page1'
import Page2 from '@/Page2'
import Page3 from '@/Page3'
import Page4 from '@/Page4'
import Splash from '@/Splash'


Vue.use(VueRouter)

/*
 * Uncomment this section and use "load()" if you want
 * to lazy load routes.
function load (component) {
  // '@' is aliased to src/components
  return () => import(`@/${component}.vue`)
}
*/

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */

   routes: [
     {
       path: '/',
       name: 'Splash',
       component: Splash
     },
     {
       path: '/page1',
       name: 'Page1',
       component: Page1
     },
     {
       path: '/page2',
       name: 'Page2',
       component: Page2
     },
     {
       path: '/page3',
       name: 'Page3',
       component: Page3
     },
     {
       path: '/page4',
       name: 'Page4',
       component: Page4
     },
   ]
})
