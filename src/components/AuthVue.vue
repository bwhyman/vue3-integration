<script setup lang="ts">
import { useUserStore } from '@/stores/UserStore'
interface Props {
  role: string
}
const props = defineProps<Props>()
const store = useUserStore()

const roleC = computed(() => store.roleS == props.role)
</script>
<template>
  <slot v-if="roleC"></slot>
</template>
