import { USER } from '@/role'
import { type RouteRecordRaw } from 'vue-router'
export const routes: RouteRecordRaw[] = [
  {
    name: '/usermanager',
    path: '/usermanager',
    component: () => import('@/views/main/user/UserManagerView.vue'),
    meta: {
      role: USER
    },
    children: [
      {
        name: 'userhome',
        path: '',
        component: () => import('@/views/main/user/UserHomeView.vue')
      },
      {
        name: '/usermanager/items',
        path: 'items',
        component: () => import('@/views/main/user/UserItemsView.vue')
      },
      {
        path: 'auction',
        component: () => import('@/views/main/user/UserAuctionView.vue')
      }
    ]
  }
]
