import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setRole } from './role'
import { makeServer } from './mock'

import.meta.env.DEV && makeServer()

const roleId = sessionStorage.getItem('role')

// Top-level await is not available
// 引入插件可以编译，但运行时独立的await无法继续执行
// 避免在角色权限路由路径下刷新页面时，直接加载默认路由信息，并重定向到登录组件，致使异步加载的角色权限路由失效
const setR = async () => {
  if (roleId) {
    await setRole(roleId)
  }

  const app = createApp(App)
  app.use(createPinia())
  app.use(router)
  app.mount('#app')
}

setR()
