import Vue from 'vue'
import App from './App.vue'
// 引入element ui核心文件
import ElementUI from 'element-ui';
// 使用element主题插件
import 'element-ui/lib/theme-chalk/index.css';
// 导入路由实例
// 使用绝对路径比较稳妥，vue-sli提供的符号@ 是src的当前的绝对路径
// index.js可以省略
// 导入一个文件夹 就会默认找索引文件 index.js index.vue index.json按顺序索引

import router from '@/router'
import axios from 'axios'
axios.defaults.baseURL='http://ttapi.research.itcast.cn/mp/v1_0/'
Vue.prototype.$http = axios
Vue.config.productionTip=false;

// 使用element ui插件
Vue.use(ElementUI);

new Vue({
  el: '#app',
  // 挂载实例
  router,
  render: h => h(App)
}).$mount('#app');