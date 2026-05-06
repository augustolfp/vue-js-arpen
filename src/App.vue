<script>
</script>

<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style scoped>
#app > nav {
  display: flex;
  flex-direction: column;
  gap: 4px;
}
</style>
