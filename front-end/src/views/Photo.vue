<template>
  <div class="photo">
    <div class="content-wrapper">
      <div v-if="photo" class="content">
        <img :src="photo.path" />
        <div class="info">
          <h1>Title: {{photo.title}}</h1>
          <h1>User: {{photo.user.firstName}} {{photo.user.lastName}}</h1>
          <h2 style="font-size: 80%">Photo Description:</h2>
          <p>{{photo.description}}</p>
        </div>
        <div class="post-comment" v-if="user">
          <form class="pure-form" @submit.prevent="postComment">
            <h1>Add a comment below</h1>
            <textarea v-model="commentDescription" style="width: 300px; height: 100px"></textarea>
            <div class="buttons">
              <button class="pure-button pure-button-primary" type="submit">Submit</button>
            </div>
          </form>
        </div>
        <comments-list :comments="comments"></comments-list>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import CommentsList from "../components/CommentsList";
export default {
  name: "Photo",
  components: {
    CommentsList
  },
  data() {
    return {
      photoID: "",
      photo: "",
      comments: [],
      commentDescription: ""
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
        let response = await axios.get("/api/photos/" + ID);
        this.photo = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async getComments() {
      try {
        let response = await axios.get("/api/comments/" + this.photoID);
        this.comments = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async postComment() {
      try {
        await axios.post("/api/comments/", {
          user: this.user,
          photo: this.photo,
          description: this.commentDescription
        });
      } catch (error) {
        this.error = "Error: " + error.response.data.message;
      }
      this.comments.unshift({
          user: this.user,
          photo: this.photo,
          description: this.commentDescription
        });
      this.commentDescription = "";

    }
  }
};
</script>

<style scoped>
.content-wrapper {
  display: flex;
  justify-content: center;
}
.content {
  margin-top: 120px;
  max-width: 70%;
  display: flex;
  flex-direction: column;
  align-content: center;
}
.content img {
  max-width: 100%;
}
.content h1 {
  color: black;
}
.buttons {
  margin-top: 5px;
}
</style>