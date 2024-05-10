<template>
  <main class="main">
    <div class="account">
      <div class="container">
        <h1 class="account__title">Login form</h1>
        <div class="account__form">
          <form @submit.prevent="login">
            <input
              type="text"
              v-model="username"
              class="txt txt--left"
              placeholder="username"
            />
            <input
              type="password"
              v-model="password"
              class="txt txt--left"
              placeholder="password"
            />
            <button type="submit" class="btn btn--brand btn--boxshadow w--100">
              login
            </button>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    login() {
      const username = this.username
      const password = this.password

      // Check if the entered username and password match the admin credentials
      if (username === 'admin' && password === 'adminpassword') {
        // Redirect to the admin dashboard if credentials are correct
        this.$router.push({ name: 'AdminDashboard' })
      } else {
        // Handle incorrect credentials (e.g., show error message)
        this.errorMessage = 'Invalid username or password'
      }
    }
  }
}
</script>

<style>
.error-message {
  color: red;
}
</style>
