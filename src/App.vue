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
  computed: {
      slides: () => [
        { id: 1, src: '/images/slide1.jpg', alt: 'slide-1' },
        { id: 2, src: '/images/slide2.jpg', alt: 'slide-2' },
        { id: 3, src: '/images/slide3.jpg', alt: 'slide-3' },
        { id: 4, src: '/images/slide4.jpg', alt: 'slide-4' }
      ]
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
