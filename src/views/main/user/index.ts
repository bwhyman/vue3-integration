import { routes } from './router'
import router from '@/router'

export const setUser = () => {
  routes.forEach((r) => router.addRoute(r))
}
