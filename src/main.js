// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import '@/style/index.css'
import ElementUI from 'element-ui'
import axios from '@/utils/request'
import '@/mocks/index'
import '@/router/permission'
/*import'@/router/router'*/
import IconSvg from '@/components/Icon-svg'
import textOver from '@/components/text-over'
import butCol from '@/components/but-col'
Vue.component('icon-svg', IconSvg)
Vue.component('text-over', textOver)
Vue.component('but-col', butCol)
Vue.prototype.$axios = axios
Vue.config.productionTip = false
Vue.use(ElementUI)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
