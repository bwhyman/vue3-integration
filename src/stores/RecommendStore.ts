import { defineStore } from 'pinia'
import type { Item } from '@/types'

export const useRecommendStore = defineStore('useRecommendStore', () => {
  const itemsS = ref<Item[]>([])
  return { itemsS }
})
