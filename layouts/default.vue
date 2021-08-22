<template>
  <el-container>
    <el-header>
      <app-navigation/>
    </el-header>
    <el-main>
      <nuxt/>
    </el-main>
    <el-footer style='color: brown'>Footer Side El-Ui</el-footer>
  </el-container>
</template>

<script>
import AppNavigation from '@/components/main/Navigation'
export default {
  name: 'Default',
  components: {
    AppNavigation
  }
}
</script>

<style scoped>

</style>
