import Vue from 'vue'
import App from './App.vue'
import router from './router/router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'
import axios from 'axios'
import VueAxios from 'vue-axios'
import  echarts from 'echarts'
import '../node_modules/echarts/map/js/world.js'

Vue.prototype.$echarts=echarts
Vue.prototype.$axios = axios
// Vue.config.productionTip = false


Vue.use(ElementUI);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
