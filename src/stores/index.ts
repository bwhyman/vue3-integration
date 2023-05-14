import { defineStore } from 'pinia'
import { listRecommendItems, getItem } from '@/database/'

export const useStore = defineStore('store', () => {
  const listItemsA = async () => await listRecommendItems()

  const getItemA = async (id: string) => await getItem(id)

  return { listItemsA, getItemA }
})
