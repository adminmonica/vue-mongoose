// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import axios from 'axios'
import QS from 'QS'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//引入自定义组件

import Login from './views/login'
import Index from './views/index'
import Add from './views/add'
import Update from './views/update'

Vue.prototype.$axios = axios
Vue.prototype.$qs = QS

Vue.use(ElementUI)
Vue.use(VueRouter)

Vue.config.productionTip = false

const router = new VueRouter({
	routes:[
		{path:"/",name:"Login",component:Login},
		{path:"/index",name:"Index",component:Index},
		{path:"/add",name:"Add",component:Add},
		{path:"/update",name:"Update",component:Update}
	],
	mode:"history"
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
