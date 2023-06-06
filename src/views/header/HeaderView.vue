<script setup lang="ts">
import AuthVue from '@/components/AuthVue.vue'
import { USER } from '@/role'
import { ArrowDown, ShoppingCart } from '@element-plus/icons-vue'
import { useUserStore } from '@/stores/UserStore'

const userStore = useUserStore()
const userR = storeToRefs(userStore).userS

const myTaobaoC = computed(() =>
  userR.value.name && userR.value.name.length > 0 ? `${userR.value?.name}的淘宝` : '我的淘宝'
)
</script>
<template>
  <el-row>
    <el-col
      :span="9"
      :offset="15"
      style="display: flex; align-items: center; justify-content: flex-end"
    >
      <RouterLink to="/" style="text-decoration: none; color: black; margin-right: 5px">
        主页
      </RouterLink>
      <el-dropdown style="margin-top: 4px">
        <el-button type="primary">
          {{ myTaobaoC }}
          <el-icon class="el-icon--right"><ArrowDown /></el-icon>
        </el-button>
        <template #dropdown>
          <el-dropdown-menu>
            <RouterLink to="/usermanager/items" style="text-decoration: none; color: black">
              <el-dropdown-item> 已买的宝贝 </el-dropdown-item>
            </RouterLink>
            <RouterLink to="/usermanager" style="text-decoration: none; color: black">
              <el-dropdown-item> 我的足迹 </el-dropdown-item>
            </RouterLink>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <RouterLink to="/cart" style="text-decoration: none; color: black">
        <el-icon :size="28" color="red" style="vertical-align: middle; margin-right: 10px">
          <ShoppingCart />
        </el-icon>
        <span style="vertical-align: middle; margin-right: 5px"
          >购物车 <AuthVue :role="USER">0</AuthVue>
        </span>
      </RouterLink>
      <a href="https://github.com/bwhyman/vue3-integration" target="_blank">
        <svg style="width: 32px; height: auto" aria-hidden="true" viewBox="0 0 16 16">
          <path
            d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"
          ></path>
        </svg>
      </a>
    </el-col>
  </el-row>
</template>
<style scoped>
.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
