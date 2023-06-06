<script setup lang="ts">
import type { Item } from '@/types'
import { ref, watchEffect } from 'vue'
import { getItem } from '@/services'
const props = defineProps<{ id: string }>()
const itemR = ref<Item>()
const loadingR = ref(true)
watchEffect(() => {
  getItem(props.id).then((item) => {
    itemR.value = item
    loadingR.value = false
  })
})
</script>
<template>
  <el-skeleton :loading="loadingR" animated>
    <template #template>
      <el-row>
        <el-col :span="8">
          <el-skeleton-item variant="image" style="width: 150px; height: 150px" />
        </el-col>
        <el-col :span="16">
          <el-skeleton-item variant="h1" />

          <el-skeleton-item variant="text" style="width: 100px" />
        </el-col>
      </el-row>
    </template>
    <template #default>
      <el-row>
        <el-col :span="8">
          <img style="border-radius: 10px" :src="itemR?.href" alt="item" />
        </el-col>
        <el-col :span="16">
          <h2>{{ itemR?.name }}</h2>
          <p>
            {{ itemR?.price }}
          </p>
        </el-col>
      </el-row>
    </template>
  </el-skeleton>

  <!-- <el-col :span="8">
      <img style="border-radius: 10px" :src="itemR?.href" alt="" />
    </el-col>
    <el-col :span="16">
      <h2>{{ itemR?.name }}</h2>
      <p>
        {{ itemR?.price }}
      </p>
    </el-col> -->
</template>
