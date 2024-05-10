<template>
  <div>
  <div class="sum">
    <h1>sum:{{ sum }}</h1>
    <select v-model.number="add_num">
      <option value="1">1</option>
      <option value="2">2</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
  </div>
</template>

<script setup lang="ts" name="About">
import { ref } from 'vue'
import { useCountStore } from '@/store/count';
const countStore=useCountStore()

let sum=ref(0)
let add_num=ref(1)
function increment(){
  sum.value+=add_num.value
}
function decrement(){
  sum.value-=add_num.value
}

</script>
<style scoped>
.sum{
  background: rgba(34, 34, 243, 0.301);
  height: 6rem;
}
</style>
