import { defineStore } from 'pinia'

export const useExceptionStore = defineStore('useExceptionStore', () => {
  const exceptionS = ref('')

  return { exceptionS }
})
