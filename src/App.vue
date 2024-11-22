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

main {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e5e5e5;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

router-view {
  display: flex;
  flex: 1;
  flex-direction: column;
}

button > img {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    -webkit-user-drag: none;
}
</style>
