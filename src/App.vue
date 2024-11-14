<template>
  <div id="app">
    <Header/>

    <router-view v-slot="{ Component }">
      <component :is="Component"/>
    </router-view>

    <Footer/>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  computed: {
  }
}
</script>

<style>
body {
  font-family: Arial, sans-serif;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

#layout {
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 0;
}

main {
  flex: 1;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
