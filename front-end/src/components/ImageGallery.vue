<template>
  <div>
    <section class="image-gallery">
      <router-link v-for="photo in photos" v-bind:key="photo._id" :to="{ name: 'photo', params: { id: photo._id } }">
        <v-card class="image">
          <img :src="photo.path" />
          <v-card-title>
            {{ photo.title }}
          </v-card-title>
          <v-card-subtitle>
            <p>{{ photo.user.firstName }} {{ photo.user.lastName }}</p>
            <p>{{ formatDate(photo.created) }}</p>
          </v-card-subtitle>
        </v-card>
      </router-link>
    </section>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'ImageGallery',
  props: {
    photos: Array,
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
p {
  margin: 0px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1em;
  margin: 1em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
}

.image img {
  width: 100%;
}
.image img:hover {
  width: 100.5%;
}

/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 4;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 3;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 2;
  }
}
</style>
