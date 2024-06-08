<template>
  <div class="container-xl">
    <div class="row">
      <div class="col-6 mx-auto">
        <Carousel :images="slides" />
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from './components/Carousel';

export default {
  name: 'App',
  components: {
    Carousel
  },
  data() {
    return {
      slides: [
        '/images/slide1.jpg',
        '/images/slide2.jpg',
        '/images/slide3.jpg',
        '/images/slide4.jpg',
      ]
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
