// 路由的相关配置 得到路由实例
import Vue from 'vue'
import Login from '@/views/login'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes=[{path:'/login',component:Login}]

const router =new VueRouter({
    routes
})
export default router
