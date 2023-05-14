import { defineStore } from 'pinia'
import router from '@/router'
import { setRole, USER } from '@/role'

export const useUserStore = defineStore('user-store', () => {
  const loginA = async (number: string, password: string) => {
    if (number == '1001' && password == '1001') {
      sessionStorage.setItem('role', USER)
      await setRole(USER)
      router.push('/usermanager')
    }
  }

  return {
    loginA
  }
})
