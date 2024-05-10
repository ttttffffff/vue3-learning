<template>
  <h2>sum: {{ sum }}</h2>
  <button @click="sum++">sum++</button>
  <br>
  <button @click="adddog()">add a dog</button>
  <img v-for="(dog,index) in dogList" :key="index" :src="dog">
  
</template>
<script setup lang="ts" name="Person">
import { ref,reactive } from 'vue'; 
import axios from 'axios';
    let sum=ref(0)
    let dogList=reactive([
        'http://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg'
    ])
    function adddog(){
        axios.get('https://dog.ceo/api/breeds/image/random').then(res=>{
            dogList.push(res.data.message)
        })
    }

</script>

<style scoped>
img{
    height: 100px;
}

</style>
