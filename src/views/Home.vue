<template>
  <div class="home">
    <div v-if="userIsSignedIn">
      <Dashboard />
    </div>
    <div v-else-if="!userIsSignedIn && this.$router == 'signUp'">
      <SignUp />
    </div>

    <div v-else>
      <Login />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Login from '@/components/Login.vue'
import SignUp from '@/components/SignUp.vue'
import Dashboard from '@/components/Dashboard.vue'

export default {
  name: 'Home',
  components: {
    Login,
    SignUp,
    Dashboard,
  },
}
</script>
