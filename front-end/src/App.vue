<template>
  <v-app>
    <nav-bar />
    <v-main>
      <router-view />
    </v-main>
    <v-footer color="secondary" dark>
      <v-col class="text-center">
        <div class="font-weight-bold text-h5">Wyatt LeFevre</div>
        <v-hover v-slot:default="{ hover }" close-delay="200">
          <v-btn icon href="http://wyattlefevre.com/">
            <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-home</v-icon>
          </v-btn>
        </v-hover>
        <v-hover v-slot:default="{ hover }" close-delay="200">
          <v-btn icon href="https://github.com/wyattlefevre/">
            <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-github</v-icon>
          </v-btn>
        </v-hover>
        <v-hover v-slot:default="{ hover }" close-delay="200">
          <v-btn icon href="https://www.linkedin.com/in/wyatt-lefevre-a22b261a6/">
            <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-linkedin</v-icon>
          </v-btn>
        </v-hover>
        <v-hover v-slot:default="{ hover }" close-delay="200">
          <v-btn icon href="mailto:wyattlefevre@gmail.com">
            <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-email</v-icon>
          </v-btn>
        </v-hover>
      </v-col>
    </v-footer>
  </v-app>
</template>

<script>
// import Footer from "./components/Footer.vue";
import Navbar from '@/components/Navbar';
export default {
  components: {
    'nav-bar': Navbar,
  },
};
</script>
>

<style></style>
