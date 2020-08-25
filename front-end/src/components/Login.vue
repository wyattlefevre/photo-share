<template>
  <div class="hero">
    <v-row justify="center">
      <v-col lg="6">
        <v-card color="white">
          <v-container>
            <v-form class="mt-5">
              <v-row justify="center">
                <v-col lg="8" class="text-center">
                  <span class="text-lg-h5">Register for an account</span>
                  <hr />
                </v-col>
              </v-row>
              <v-row dense justify="center">
                <v-col lg="4">
                  <v-text-field dense outlined label="first name" v-model="firstName"></v-text-field>
                </v-col>
                <v-col lg="4">
                  <v-text-field dense outlined label="last name" v-model="lastName"></v-text-field>
                </v-col>
              </v-row>
              <v-row dense justify="center">
                <v-col lg="4">
                  <v-text-field dense outlined label="username" v-model="username"></v-text-field>
                </v-col>
                <v-col lg="4">
                  <v-text-field dense outlined label="password" type="password" v-model="password"></v-text-field>
                </v-col>
              </v-row>
              <v-row dense justify="center">
                <v-btn color="primary" @click.prevent="register">Register</v-btn>
              </v-row>
            </v-form>
            <v-form class="mt-12 mb-5">
              <v-row justify="center">
                <v-col lg="8" class="text-center">
                  <span class="text-lg-h5">Login</span>
                  <hr />
                </v-col>
              </v-row>
              <v-row dense justify="center">
                <v-col lg="4">
                  <v-text-field dense outlined label="username" v-model="usernameLogin"></v-text-field>
                </v-col>
                <v-col lg="4">
                  <v-text-field dense outlined label="password" type="password" v-model="passwordLogin"></v-text-field>
                </v-col>
              </v-row>
              <v-row dense justify="center">
                <v-btn color="primary" @click.prevent="login">Login</v-btn>
              </v-row>
            </v-form>
          </v-container>
        </v-card>
      </v-col>
    </v-row>

    <div class="heroBox">
      <form class="pure-form">
        <fieldset>
          <legend>Register for an account</legend>
          <input class="white" placeholder="first name" v-model="firstName" />
          <input placeholder="last name" v-model="lastName" />
        </fieldset>
        <fieldset>
          <input placeholder="username" v-model="username" />
          <input type="password" placeholder="password" v-model="password" />
        </fieldset>
        <fieldset>
          <button type="submit" class="pure-button pure-button-primary" @click.prevent="register">Register</button>
        </fieldset>
      </form>
      <p v-if="error" class="error">{{ error }}</p>
      <form class="pure-form space-above">
        <fieldset>
          <legend>Login</legend>
          <input placeholder="username" v-model="usernameLogin" />
          <input type="password" placeholder="password" v-model="passwordLogin" />
        </fieldset>
        <fieldset>
          <button type="submit" class="pure-button pure-button-primary" @click.prevent="login">Login</button>
        </fieldset>
      </form>
      <p v-if="errorLogin" class="error">{{ errorLogin }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'HomePage',
  data() {
    return {
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      usernameLogin: '',
      passwordLogin: '',
      error: '',
      errorLogin: '',
    };
  },
  methods: {
    async register() {
      this.error = '';
      this.errorLogin = '';
      if (!this.firstName || !this.lastName || !this.username || !this.password) return;
      try {
        let response = await axios.post('/api/users', {
          firstName: this.firstName,
          lastName: this.lastName,
          username: this.username,
          password: this.password,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.error = error.response.data.message;
        this.$root.$data.user = null;
      }
    },
    async login() {
      this.error = '';
      this.errorLogin = '';
      if (!this.usernameLogin || !this.passwordLogin) return;
      try {
        let response = await axios.post('/api/users/login', {
          username: this.usernameLogin,
          password: this.passwordLogin,
        });
        this.$root.$data.user = response.data.user;
      } catch (error) {
        this.errorLogin = 'Error: ' + error.response.data.message;
        this.$root.$data.user = null;
      }
    },
  },
};
</script>

<style scoped>
.space-above {
  margin-top: 50px;
}

h1 {
  font-size: 28px;
  font-variant: capitalize;
}

/* .hero {
  padding: 120px;
  display: flex;
  justify-content: center;
} */

.heroBox {
  text-align: center;
}

.hero form {
  font-size: 14px;
}

.hero form legend {
  font-size: 20px;
}

input {
  margin-right: 10px;
}

.error {
  margin-top: 10px;
  display: inline;
  padding: 5px 20px;
  border-radius: 30px;
  font-size: 10px;
  background-color: #d9534f;
  color: #fff;
}
</style>
