<script setup lang="ts">
import { useStore } from '@/stores'
const store = useStore()

const items = await store.listItemsA()
</script>
<template>
  <div style="display: flex; flex-wrap: wrap">
    <RouterLink
      v-for="(i, index) of items"
      :to="`/items/${i.id}`"
      :key="index"
      style="color: #000; text-decoration: none"
    >
      <div class="card-item">
        <div class="card-item-img">
          <img :src="i.href" alt="items" />
        </div>
        <div class="card-item-info">
          <div class="card-item-info-title">{{ i.name }}</div>
          <div class="card-item-info-price">$ {{ i.price }}</div>
        </div>
      </div>
    </RouterLink>
  </div>
</template>
<style scoped>
.card-item {
  width: 280px;
  display: flex;
  border-radius: 5px;
  background: gainsboro;
  margin: 10px;
  border: 1px solid white;
}
.card-item-link {
  text-decoration: none;
  color: #000;
}
.card-item-link:hover > .card-item {
  background: white;
}
.card-item-img {
  margin: 5px;
  flex-basis: 40%;
  width: 150px;
}
.card-item-img > img {
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
.card-item-info {
  margin: 5px;
  flex-basis: 60%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.card-item:hover {
  background: white;
  border: 1px solid red;
  border-radius: 10px;
}
</style>
