import Vue  from "vue"
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// 路由
export default new VueRouter({
    routes: [{
        path: '/',
        component: () => import('@/views/Main'),
        children: []
    }]
})