<template>
  <img :src="this.imagePath" class="backdrop-image">
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      required: true
    }
  },
  computed: {
    imagePath() {
      return `https://image.tmdb.org/t/p/w1280${this.imageName}`;
    }
  }
};
</script>

<style>
.backdrop-image{
    width: 93%;
    height: 93vh;
    position: absolute;
    top: 0;
    left: 0;
    filter: blur(50px);
    transform: scale(1.1);
}
</style>
