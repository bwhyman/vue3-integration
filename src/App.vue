<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderView from './views/header/HeaderView.vue'
import FooterView from './views/footer/FooterView.vue'
import { useExceptionStore } from '@/stores/ExceptionStore'
const alertdialog = defineAsyncComponent(() => import('@/components/AlertDialog.vue'))
const exceptionStore = useExceptionStore()
</script>

<template>
  <el-container>
    <el-header style="background: #f5f5f5; padding: 15px; margin-bottom: 15px">
      <HeaderView />
    </el-header>
    <el-main style="border-radius: 5px; background: white">
      <RouterView />
    </el-main>
    <el-footer style="border-radius: 5px; background: white; margin-top: 15px; padding: 15px">
      <FooterView />
    </el-footer>
  </el-container>
  <alertdialog v-if="exceptionStore.exceptionS.length > 0" />
</template>
<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
body {
  background: rgb(234, 232, 235);
  max-width: 100vw;
}
#app {
  max-width: 960px;
  margin: auto;
  border-radius: 10px;
  padding: 10px;
  min-height: 100vh;
}
</style>
