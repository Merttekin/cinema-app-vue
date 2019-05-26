<template>
  <div class="col-md-4">
    <div class="card">
        <router-link :to="movieDetailsPath">
      <!-- <img class="card-img-top" :src="posterPath" :alt="movie.original_title"> -->
      <Poster class="card-img-top" :posterName="movie.poster_path" :alt="movie.original_title"/>
        </router-link>
      <div class="card-body">
        <h5 class="card-title">{{movie.original_title}}</h5>
        <p
          class="card-text"
        >{{movie.overview}}</p>
        <div class="card-footer">
        <p class="card-text">
          <small class="text-muted">Average Rating: {{movie.vote_average.toFixed(2)}}</small>
        </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Poster from "./Poster.vue";
export default {
  name: "Movie",
  props: {
    movie: {
      type: Object,
      required: true
    }
  },
  components: {
    Poster
  },
  computed: {
      movieDetailsPath() {
          return `/movie/${this.movie.id}`;
      }
  }
};
</script>

<style>
.card{
    min-width: 250px;
    margin-bottom: 30px;
}
.card-text{
  font-size: 12px;
}
</style>
