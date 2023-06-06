import { routes } from './UserRoutes'
import router from '@/router'

const setUser = () => {
  routes.forEach((r) => router.addRoute(r))
}

setUser()
