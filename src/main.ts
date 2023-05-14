import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { setRole } from './role'

const roleId = sessionStorage.getItem('role')

// Top-level await is not available
// 引入插件可以编译，但运行时独立的await无法继续执行
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
