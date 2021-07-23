<template>
  <el-card
    shadow='hover'
    :body-style='{padding:0}'
    class='post'
  >
    <header slot='header' class='post-header'>
      <h3>Post title</h3>
      <small>
        <i class='el-icon-pie-chart'></i>
        {{ new Date().toLocaleString() }}
      </small>
    </header>

    <div class='post-body'>
      <img
        src='@/assets/method-draw-image-1.png'
        alt='post image'
        class='post-image'>
    </div>

    <footer class='post-footer'>
      <el-button round @click='openPost'>Open</el-button>
      <span>
        <icon class='el-icon-s-comment'></icon>
        12
      </span>
    </footer>
  </el-card>
</template>

<script>
export default {
  name: 'Post',
  methods: {
    openPost() {
      const id = 'test-id'
      this.$router.push(`/post/${id}`)
    }
  }
}
</script>

<style scoped>
.post {
  margin-bottom: 1.5rem;
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.post-body {
  /*margin-bottom: 1rem;*/
}

.post-image {
  width: 100%;
  height: auto;
}

.post-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}
</style>
