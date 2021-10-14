<template>
  <el-form
    ref="form"
    :model="controls"
    :rules="rules"
    @submit.native.prevent='onSubmit'
  >
    <h2>Войти в панель администратора</h2>

    <el-form-item label="Login" prop="login">
      <el-input v-model.trim="controls.login"/>
    </el-form-item>

    <div class='mb2'>
      <el-form-item label="Password" prop="password">
        <el-input v-model.trim="controls.password" type='password' />
      </el-form-item>
    </div>

    <el-form-item>
      <el-button
        type="primary"
        native-type='submit'
        round
        :loading='loading'
      >
        Enter
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  name: 'User',
  layout: 'admin',
  middleware: ['admin-auth'],
  data() {
    return {
      loading: false,
      controls: {
        login: '',
        password: ''
      },
      rules: {
        login: [
          { required: true, message: 'Введите логин', trigger: 'blur' },
        ],
        password: [
          { required: true, message: 'Введите пароль', trigger: 'blur' },
          {min: 6, message: 'Пароль должен быть не менее 6 символов',
            trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    onSubmit() {
      this.$refs.form.validate(async valid => {
        if (valid) {
          this.loading = true

          try {
            const formData = {
              login: this.controls.login,
              password: this.controls.password
            }
            await this.$store.dispatch('auth/createUser',formData)
            this.$message.success('новый пользователь создан')
            this.controls.login = ''
            this.controls.password = ''
            this.loading = false

          }catch (e) {
            this.loading = false
          }
        }
      })
    }
  }
}
</script>

<style scoped>
form {
  width: 600px;
}
</style>
