<template>
  <h1>Welcome to admin page</h1>
</template>

<script>
export default {
  name: 'Index',
  layout: 'admin',
  middleware: ['admin-auth']
}
</script>

<style scoped>

</style>
