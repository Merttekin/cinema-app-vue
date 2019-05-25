<template>
  <div>
    <AppHeader/>
    <Loader v-if="isLoading"/>
    <div class="container py-5">
      <div v-for="group in groupedMovies" class="card-deck">
        <Movie v-for="movie in group" v-bind:key="movie.id" :movie="movie"/>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import AppHeader from "./AppHeader.vue";
import Loader from "./Loader.vue";
import Movie from "./Movie.vue";

export default {
  name: "Home",
  data() {
    return {
      isLoading: true
    };
  },
  computed: {
    ...mapGetters(["movies", "groupedMovies"])
  },
  components: {
    AppHeader,
    Loader,
    Movie
  },
  created() {
    this.$store.dispatch("fetchMovies").then(() => {
      this.isLoading = false;
    });
  }
};
</script>

