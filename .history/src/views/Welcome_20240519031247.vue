<template>
  <div class="welcome container">
    <p>Welcome</p>
    <div v-if="showLogin">
      <h2>Login</h2>
      <LoginForm />
      <p>No account yet? <span @click="showLogin = false">Signup</span></p>
    </div>
    <div v-else>
      <SignupForm />
      <p>Already registered? <span @click="showLogin = true">Login</span></p>
    </div>
  </div>
</template>

<script>
import SignupForm from "../components/SignupForm.vue";
import LoginForm from "../components/LoginForm.vue";
import { ref } from "vue";

export default {
  components: {
    SignupForm,
    LoginForm,
  },
  setup() {
    const showLogin = ref(true);

    return { showLogin };
  },
};
</script>

<style>
.welcome {
  text-align: center;
  padding: 20px 0;
}
</style>
