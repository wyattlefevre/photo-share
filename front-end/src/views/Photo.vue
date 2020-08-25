<template>
  <v-container class="photo">
    <v-row>
      <v-col>
        <v-card v-if="photo.user">
          <v-img contain max-height="100vh" :src="photo.path"> </v-img>
          <v-card-title>Title: {{ photo.title }}</v-card-title>
          <v-card-subtitle class="font-weight-black">User: {{ photo.user.firstName }} {{ photo.user.lastName }}</v-card-subtitle>
          <v-card-text>
            <div class="font-weight-bold">
              Description:
            </div>
            <div>
              {{ photo.description }}
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row dense class="mt-8">
      <v-col>
        <div class="text-h4">Comments</div>
      </v-col>
    </v-row>
    <v-row justify="left" v-if="user">
      <v-col>
        <div class="text-h6 mb-4">Add a comment</div>
        <v-textarea
        auto-grow
        dense
        outlined
        rows="2"
        v-model="commentDescription"
        ></v-textarea>
        <v-btn @click.prevent="postComment" color="secondary">Submit</v-btn>
      </v-col>
    </v-row>
    <v-row v-else>
      <v-col>
        <router-link to="/dashboard">Login or sign up</router-link> to add your comment!
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <comments-list :comments="comments"></comments-list>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from 'axios';
import CommentsList from '../components/CommentsList';
export default {
  name: 'Photo',
  components: {
    CommentsList,
  },
  data() {
    return {
      photoID: '',
      photo: '',
      comments: [],
      commentDescription: '',
    };
  },
  created() {
    this.photoID = this.$route.params.id;
    this.getPhoto(this.photoID);
    this.getComments();
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  methods: {
    async getPhoto(ID) {
      try {
        let response = await axios.get('/api/photos/' + ID);
        this.photo = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async getComments() {
      try {
        let response = await axios.get('/api/comments/' + this.photoID);
        this.comments = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async postComment() {
      try {
        await axios.post('/api/comments/', {
          user: this.user,
          photo: this.photo,
          description: this.commentDescription,
        });
      } catch (error) {
        this.error = 'Error: ' + error.response.data.message;
      }
      this.comments.unshift({
        user: this.user,
        photo: this.photo,
        description: this.commentDescription,
      });
      this.commentDescription = '';
    },
  },
};
</script>

<style scoped>
</style>
