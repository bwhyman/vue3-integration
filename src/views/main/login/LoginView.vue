<script setup lang="ts">
import { User, Lock } from '@element-plus/icons-vue'
import { login } from '@/services'
import type { User as UserType } from '@/types'

const userR = ref<UserType>({ number: '1001', password: '1001' })
const loginF = () => {
  login(userR.value)
  userR.value = {}
}
</script>
<template>
  <div>
    <el-row>
      <el-col :span="8" :offset="16">
        <el-card class="box-card">
          <template #header>
            <div class="card-header">
              <span>密码登录</span>
            </div>
          </template>
          <el-form>
            <el-form-item>
              <el-input :prefix-icon="User" v-model="userR.number" />
            </el-form-item>
            <el-form-item>
              <el-input type="password" :prefix-icon="Lock" v-model="userR.password" />
            </el-form-item>
            <el-button style="width: 100%; background: red; color: white" @click="loginF"
              >登录</el-button
            >
          </el-form>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
