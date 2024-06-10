<script setup>
import { RouterLink } from 'vue-router'
</script>
<template>
  <nav>
    <div class="logo">Student Management</div>
    <div class="links">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/student">Students</RouterLink>
      <RouterLink to="/student/add">New Student</RouterLink>
    </div>
  </nav>
</template>

<style>
nav {
  width: 100%;
  padding: 20px 96px;
  background-color: #ddd;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;
}
nav .logo{
    font-size: 20px;
    font-weight: 600;
}
.links{
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 20px;
}
.links > *{
    text-decoration: none;
    color: #000000;
    font-size: 14px;
    cursor: pointer;
}
</style>
