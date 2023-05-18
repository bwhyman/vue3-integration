<script setup lang="ts">
import AuthorizationVue from '@/components/AuthorizationVue.vue'
import { USER } from '@/role'
import { ArrowDown, ShoppingCart } from '@element-plus/icons-vue'

AuthorizationVue
</script>
<template>
  <el-row>
    <el-col :span="4" :offset="16">
      <RouterLink
        to="/"
        style="text-decoration: none; color: black; margin-right: 5px; vertical-align: middle"
      >
        主页
      </RouterLink>
      <el-dropdown style="margin-top: 4px; vertical-align: middle">
        <el-button type="primary">
          我的淘宝
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
    </el-col>

    <el-col :span="4">
      <RouterLink to="/cart" style="text-decoration: none; color: black; vertical-align: middle">
        <el-icon :size="28" color="red" style="vertical-align: middle; margin-right: 10px">
          <ShoppingCart />
        </el-icon>
        <span style="vertical-align: middle"
          >购物车 <AuthorizationVue :role="USER">0</AuthorizationVue></span
        >
      </RouterLink>
      <a href="https://github.com/bwhyman/vue3-integration" target="_blank">
        <img
          style="width: 40px; height: auto; vertical-align: middle; margin-left: 10px"
          src="https://clipground.com/images/github-logo-png-7.jpg"
          alt="github"
        />
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
