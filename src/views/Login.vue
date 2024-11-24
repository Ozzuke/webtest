<template>
  <div>
    <main>
      <LoginContainer @login="handleLogin" />
    </main>
  </div>
</template>

<script>
import LoginContainer from "@/components/LoginContainer.vue";

export default {
  name: "Login",
  components: {
    LoginContainer,
  }
};
</script>
