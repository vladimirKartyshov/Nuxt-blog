<template>
  <div class='error-layout'>
    <div class='error-content'>
      <h1 class='error-title'>ERROR 404</h1>
      <nuxt-link to='/'>Return to main page</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Error'
}
</script>

<style scoped>
.error-layout {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}

.error-content{
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 5rem;
}

.error-title {
  color: #a50909;
  margin-bottom: 1rem;
}
</style>
