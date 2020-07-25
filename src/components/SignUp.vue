<template>
  <div class="signUp">
    <div class="signUpForm">
      <h1>Sign Up</h1>
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
        /><br />
        <input
          name="passwordMatch"
          type="password"
          value="this.passwordMatch"
          v-model="input.passwordMatch"
          placeholder="Confirm"
        />
        <br />
        <div v-if="!this.checkMatch && this.passwordLength">
          No Match
        </div>
        <div v-else></div>
        <br /><br />
        <button name="Login" type="submit">Login</button> or
        <router-link to="Login">
          Existing Login
        </router-link>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: 'signUp',
  data() {
    return {
      input: {
        email: '',
        password: '',
        passwordMatch: '',
      },
    }
  },
  computed: {
    checkMatch() {
      return this.input.password == this.input.passwordMatch
    },
    passwordLength() {
      return this.input.password && this.input.passwordMatch
    },
  },
}
</script>

<style scoped>
* {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
.signUpForm {
  background-color: whitesmoke;
  width: 50%;
  margin: auto;
}
</style>
