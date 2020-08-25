<template>
  <div>
    <!-- <section class="comments-list">
        <h1 style="font-size: 170%">Comments</h1>
          <div class="comment" v-for="comment in comments" :key="comment._id">
              <div class="comment-info">
                  <h1 class="comment-user">{{comment.user.firstName}} {{comment.user.lastName}}</h1>
                  <h2>{{formatDate(comment.created)}}</h2>
                  <p>{{comment.description}}</p>
              </div>
          </div>
      </section> -->
    <v-card outlined v-for="comment in comments" :key="comment._id" class="mb-2">
      <v-card-title> {{ comment.user.firstName }} {{ comment.user.lastName }} </v-card-title>
      <v-card-subtitle>{{ formatDate(comment.created) }}</v-card-subtitle>
      <v-card-text class="black--text">
        {{ comment.description }}
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  name: 'CommentsList',
  props: {
    comments: Array,
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15) return moment(date).fromNow();
      else return moment(date).format('d MMMM YYYY');
    },
  },
};
</script>

<style scoped>
/* h1 {
  color: black;
}
.comment-user {
  color: black;
} */
</style>
