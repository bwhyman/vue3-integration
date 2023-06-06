import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('@/views/main/home/HomeView.vue')
  },
  {
    props: true,
    path: '/items/:id',
    component: () => import('@/views/main/home/item/ItemView.vue')
  },
  {
    path: '/login',
    component: () => import('@/views/main/login/LoginView.vue')
  },
  {
    name: '/usermanager',
    path: '/usermanager',
    redirect: '/login',
    children: [
      {
        path: 'items',
        redirect: '/login'
      }
    ]
  },
  {
    path: '/error',
    component: () => import('@/views/ErrorView.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/error'
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: routes
})

router.beforeEach((to) => {
  // 排除，没有声明角色权限的路由
  if (!to.meta.role) {
    return true
  }

  if (to.meta.role != sessionStorage.getItem('role')) {
    return '/login'
  }
  return true
})

export default router
