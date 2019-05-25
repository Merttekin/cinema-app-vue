<template>
  <div>Home</div>
</template>

<script>
export default {
  name: 'Home',
  data(){
    return{

    }
  },
  created(){
    this.$store.dispatch('fetchMovies');
  }
};
</script>

<style>
</style>
