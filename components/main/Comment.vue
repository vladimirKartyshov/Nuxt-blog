<template>
  <el-card class='comment'>
    <div class='comment-header'>
      <span>Person name</span>
      <small>
         <i class='el-icon-pie-chart'></i>
          {{ new Date().toLocaleString() }}
      </small>
    </div>

    <div class='comment-text'>
      Lorem ipsum dolor sit amet.
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'Comment',
  props: ['comment']
}
</script>

<style scoped>
.comment {
  margin-bottom: 1rem;
}

.comment-header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5rem;
  font-size: 0.8rem;
}

.comment-text {
  white-space: pre-line;
}
</style>
