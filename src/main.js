import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router' //引入配置的router
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import SlideNav from '@/components/SlideNav'
Vue.use(VueRouter)
Vue.use(ElementUI);
Vue.component('SlideNav',SlideNav)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
