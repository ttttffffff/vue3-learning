<template>
  <div class="app">
    <h2>vue路由测试</h2>
    <!-- 导航区 -->
    <div class="navigate">
      <RouterLink to="/home" active-class="active">首页</RouterLink>
      <RouterLink to="/news" active-class="active">新闻</RouterLink>
      <RouterLink to="/about" active-class="active">关于</RouterLink>
    </div>
    <div class="content">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterView,RouterLink} from 'vue-router'

</script>

<style scoped>
.active{
  color: orange;
  font-style:bold;
  text-decoration: none;
  

}

</style>
