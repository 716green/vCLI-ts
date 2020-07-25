<template>
  <div class="login">
    <div class="loginForm">
      <h1>Login</h1>
      <form class="form">
        <input
          type="text"
          name="username"
          v-model="input.username"
          placeholder="Username"
        /><br />
        <input
          type="password"
          name="password"
          v-model="input.password"
          placeholder="Password"
        /><br /><br />
        <button name="Login" type="submit">Login</button> or
        <router-link to="SignUp">
          Sign Up
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      input: {
        email: '',
        password: '',
      },
    }
  },
}
</script>

<style scoped>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.loginForm {
  background-color: whitesmoke;
  width: 50%;
  margin: auto;
}
</style>
