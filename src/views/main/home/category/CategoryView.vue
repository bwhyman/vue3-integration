<script setup lang="ts">
import { categories } from './DatabaseUtils'
import { Lollipop } from '@element-plus/icons-vue'
</script>
<template>
  <el-row style="align-items: center">
    <el-col :span="6">
      <h2>分类</h2>
      <ul style="list-style: none">
        <li v-for="(c, index) of categories" :key="index">
          <el-icon :size="20" style="vertical-align: middle; margin-right: 10px"
            ><Lollipop
          /></el-icon>
          <span style="vertical-align: middle">{{ c.name }}</span>
        </li>
      </ul>
    </el-col>
    <el-col :span="16">
      <div class="block text-center">
        <el-carousel height="150px">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3 class="small justify-center" text="2xl">{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </div>
    </el-col>
  </el-row>
</template>
<style scoped>
.demonstration {
  color: var(--el-text-color-secondary);
}

.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
