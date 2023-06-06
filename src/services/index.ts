import axios from '@/axios'
import { useRecommendStore } from '@/stores/RecommendStore'
import type { User } from '@/types'
import router from '@/router'
import { setRole } from '@/role'
import { useUserStore } from '@/stores/UserStore'

export const listItems = async () => {
  const resp = await axios.get('items')
  const store = useRecommendStore()
  store.itemsS = resp.data.data.items
}

export const getItem = async (id: string) => {
  const resp = await axios.get(`items/${id}`)
  return resp.data.data.item
}

export const login = async (user: User) => {
  try {
    const resp = await axios.post('login', user)
    const token = resp.headers.token
    const role = resp.headers.role
    sessionStorage.setItem('role', role)
    sessionStorage.setItem('token', token)
    sessionStorage.setItem('user', JSON.stringify(resp.data.data.user))
    const store = useUserStore()
    store.userS = resp.data.data.user
    store.roleS = role
    await setRole(role)
    router.push('/usermanager')
  } catch (error) {
    //
  }
}
