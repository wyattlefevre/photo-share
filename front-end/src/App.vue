<template>
<v-app>
  <nav-bar/>
    <v-main>
      <router-view />
    </v-main>
</v-app>
</template>

<script>
// import Footer from "./components/Footer.vue";
import Navbar from '@/components/Navbar'
export default {
  components: {
    // Footer
    'nav-bar': Navbar,
  }
};
</script>>

<style>
</style>