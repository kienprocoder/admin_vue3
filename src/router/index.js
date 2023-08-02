
import { createWebHistory, createRouter} from 'vue-router'
import Dashboard from '@/components/Dashboard.vue'
import Home from '@/components/Home'
import Product from '@/components/Product.vue'
import Users from '@/components/Users.vue'
import Report from '@/components/ReportComponent.vue'
import Settings from '@/components/Settings.vue'

const routes = [
    {
        path: '/',
        component: Dashboard
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/user',
        component: Users
    },
    {
        path: '/product',
        component: Product
    },
    {
        path: '/report',
        component: Report
    },
    {
        path: '/setting',
        component: Settings
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router