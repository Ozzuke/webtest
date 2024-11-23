<script>
export default {
  name: "RightSidebar"
}
</script>

<template>
  <aside class="right-sidebar">
    <h2>Attention!</h2>
    <p>Due to migration to Vue 3, deployment to GitHub Pages requires a new approach.

      Please refer to the section in README.md for instructions.</p>
  </aside>
</template>

<style scoped>
aside {
  border-left: #666 solid 1px;
}

h2 {
  color: #f00;
  margin-bottom: 0;
  animation: blink 0.5s linear 5;
}

p {
  margin-top: 10px;
  padding: 0;
  text-align: left;
}

@keyframes blink {
  0% {
    opacity: 1;
  }
  49% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  99% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
