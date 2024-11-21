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
  },
  methods: {
    handleLogin({ email, password }) {
      // Handle login logic here
      console.log("Email:", email, "Password:", password);
      this.$router.push("/");
    },
  },
};
</script>
