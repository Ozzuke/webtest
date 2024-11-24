<template>
  <div>
    <main>
      <SignUpContainer @login="handleLogin" />
    </main>
  </div>
</template>

<script>
import SignUpContainer from "@/components/SignUpContainer.vue";

export default {
  name: "SignUp",
  components: {
    SignUpContainer,
  }
};
</script> 
