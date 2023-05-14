<script setup lang="ts"></script>
<template>
  <el-row>
    <el-col :span="4">
      <h3>User全部功能</h3>
      <ul style="list-style: none">
        <li><RouterLink to="/usermanager/auction">我的拍卖</RouterLink></li>
        <li>机票酒店保险</li>
        <li>我的彩票</li>
        <li>官方集运</li>
        <li>我的发票</li>
      </ul>
    </el-col>
    <el-col :span="20"><RouterView /> </el-col>
  </el-row>
</template>
