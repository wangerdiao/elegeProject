import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router' //引入配置的router
Vue.use(VueRouter)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
