<template>
  <article class='post'>
    <header class='post-header'>
      <div class='post-title'>
        <h1>Post title</h1>
        <nuxt-link to='/'>
          <i class='el-icon-back'></i>
        </nuxt-link>
      </div>

      <div class='post-info'>
        <small>
          <i class='el-icon-pie-chart'></i>
          {{ new Date().toLocaleString() }}
        </small>
        <small>
          <i class='el-icon-view'></i>
          42
        </small>
      </div>

      <div class='post-image'>
        <img
          src='@/assets/dark-web-5030163_960_720.jpg'
          alt='post image'>
      </div>
    </header>

    <main class='post-content'>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi
        deleniti, eius eos harum incidunt nobis pariatur quod suscipit voluptatum!
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi
        deleniti, eius eos harum incidunt nobis pariatur quod suscipit voluptatum!</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab commodi
        deleniti, eius eos harum incidunt nobis pariatur quod suscipit voluptatum!</p>
    </main>

    <footer style='color: brown'>
      //FORM

      <div class='comments' v-if='true'>

      </div>
      <div class='text-center' v-else>No Comments</div>
    </footer>
  </article>
</template>

<script>
export default {
  name: 'Id',
  validate({params}) {
    return Boolean(params.id)
  }
}
</script>

<style scoped>
.post {
  max-width: 600px;
  margin: 0 auto;
}

.post-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.post-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.post-image img {
  width: 100%;
  height: auto;
}

.post-header {
  margin-bottom: 1.5rem;
}

.post-content {
  margin-bottom: 2rem;
}
</style>
