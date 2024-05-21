<template>
  <form @submit.prevent="handleSubmit()">
    <input
      type="text"
      required
      placeholder="Display Name"
      v-model="displayName"
    />
    <input type="email" required placeholder="E- mail" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button type="submit">Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
import useSignup from "./../composable/useSignup.js";
export default {
  setup() {
    const { error, signup } = useSignup();
    const displayName = ref("");
    const email = ref("");
    const password = ref("");

    const handleSubmit = async () => {
      console.log(displayName.value, email.value, password.value);
      await signup(email.value, password.value, displayName.value);
    };

    return { displayName, email, password };
  },
};
</script>

<style></style>
