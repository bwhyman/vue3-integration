<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const ListView = defineAsyncComponent(() => import('./ListView.vue'))
const loadingVue = defineAsyncComponent(() => import('@/components/LoadingVue.vue'))
</script>
<template>
  <el-row style="margin-top: 15px">
    <el-col :span="24">
      <h1>猜你喜欢</h1>
    </el-col>
    <suspense>
      <template #default>
        <ListView />
      </template>
      <template #fallback>
        <loadingVue />
      </template>
    </suspense>
  </el-row>
</template>
