import type { User } from '@/types'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('useUserStore', () => {
  const userStorage = sessionStorage.getItem('user')
  const userS = ref<User>({ name: '' })
  const roleS = ref('')
  if (userStorage) {
    // 需反序列化为JS对象
    userS.value = JSON.parse(userStorage)
    roleS.value = sessionStorage.getItem('role') ?? ''
  }
  return {
    userS,
    roleS
  }
})
