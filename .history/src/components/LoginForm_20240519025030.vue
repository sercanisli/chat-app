<template>
  <form @submit.prevent="handleSubmit">
    <input type="email" required placeholder="E- mail" v-model="email" />
    <input type="password" required placeholder="Password" v-model="password" />
    <button>Sign Up</button>
  </form>
</template>

<script>
import { ref } from "vue";
export default {
  setup() {
    const email = ref("");
    const password = ref("");

    const handleSubmit = () => {
      console.log(email.value, password.value);
    };

    return { displayName, email, password };
  },
};
</script>

<style></style>
