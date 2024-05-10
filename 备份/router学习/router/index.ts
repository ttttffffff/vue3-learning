import { createRouter,createWebHistory } from "vue-router";
import Home from '@/components/Home.vue'
const router=createRouter({
    history:createWebHistory(),//路由器的工作模式
    routes:[
        {
            path:'/home',
            component:Home,
        },
        {
            path:'/about',
            component:()=>import('@/components/About.vue')
        },
        {
            path:'/news',
            component:()=>import('@/components/News.vue')
        }
    ]
})
export default router;