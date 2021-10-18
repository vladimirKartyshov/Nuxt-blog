<template>
  <div class='page-wrap'>
    <el-breadcrumb separator="/" class="mb">
      <el-breadcrumb-item to="/admin/list">Посты</el-breadcrumb-item>
      <el-breadcrumb-item>{{post.title}}</el-breadcrumb-item>
    </el-breadcrumb>

    <el-form
      ref="form"
      :model="controls"
      :rules="rules"
      @submit.native.prevent='onSubmit'
    >
<!--      <h2>Войти в панель администратора</h2>-->

      <el-form-item label="Текст в формате.md или .html" prop="text">
        <el-input
          type='textarea'
          v-model.trim="controls.text"
          resize='none'
          :rows='10'
        />
      </el-form-item>

      <el-form-item>
        <el-button
          type="primary"
          native-type='submit'
          round
          :loading='loading'
        >
          Обновить
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Id',
  layout: 'admin',
  middleware: ['admin-auth'],
  async asyncData({store, params}) {
    const post = await store.dispatch('post/fetchAdminById', params.id)
    return {post}
  },
  data() {
    return {
      loading: false,
      controls: {
        text: '',
      },
      rules: {
        text: [
          { required: true, message: 'Текст не должен быть пустым', trigger: 'blur' },
        ]
      }
    }
  },
  methods: {
   onSubmit() {
     this.$refs.form.validate(valid => {
       if (valid) {
         this.loading = true
       }
     })
   }
}
}
</script>

<style scoped>
.page-wrap {
  width: 600px;
}
</style>
