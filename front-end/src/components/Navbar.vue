<template>
  <div class="navbar">
    <v-app-bar app color="primary" dark>
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-app-bar-nav-icon @click="drawer = !drawer" :color="hover ? 'accent' : 'white'"></v-app-bar-nav-icon>
      </v-hover>
      <router-link to="/">
        <v-toolbar-title class="white--text text-uppercase">
          <span class="font-weight-light">photo</span>
          <span class="font-weight-black">share</span>
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-btn icon href="https://github.com/wyattlefevre/photo-share">
          <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-github</v-icon>
        </v-btn>
      </v-hover>
      <v-hover v-slot:default="{ hover }" close-delay="200">
        <v-btn icon href="http://wyattlefevre.com/">
          <v-icon size="2em" :color="hover ? 'accent' : 'white'">mdi-home</v-icon>
        </v-btn>
      </v-hover>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary >
      <v-toolbar dark color="primary">
        <v-toolbar-title>
          <span class="font-weight-bold">Menu</span>
        </v-toolbar-title>
      </v-toolbar>
      <v-list nav>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route" @click="drawer = false">
          <v-list-item-title>{{ link.text }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data() {
    return {
      drawer: false,
      links: [
        { text: 'Home', route: '/' },
        { text: 'Dashboard', route: '/dashboard' },
      ],
    };
  },
};
</script>

<style scoped></style>
