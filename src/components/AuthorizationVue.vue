<script setup lang="ts">
import { useStore } from '@/stores'
interface Props {
  role: string
}
const props = defineProps<Props>()
const store = useStore()
const roleC = computed(() => store.roleS == props.role)
</script>
<template>
  <slot v-if="roleC"></slot>
</template>
