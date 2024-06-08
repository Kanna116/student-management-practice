<template>
  <div class="home">
    <h1>please go ahead to students page to see the data</h1>
    <RouterLink to="/student"><button class="btn">Go to students data page</button></RouterLink>
  </div>
</template>
<style>
.home {
  width: 100%;
  min-height: calc(100vh - 60px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
}

</style>
