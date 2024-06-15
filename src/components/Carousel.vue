<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel" v-if="images.length > 0">
    <div class="carousel-inner">
      <div
        v-for="(image, index) in images"
        :class="[
          'carousel-item',
          {'active': index === currentSlide }
        ]"
        :key="image.id"
      >
        <img :alt="image.alt" class="d-block w-100" :src="image.src" />
      </div>
    </div>
    <button class="carousel-control-prev" data-bs-target="#carousel" type="button" data-bs-slide="prev" @click="prevSlide">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" data-bs-target="#carousel" type="button" data-bs-slide="next" @click="nextSlide">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  props: {
    images: {
      type: Array,
      required: true,
      default: () => [],
      validator: (value) => {
        if (!Array.isArray(value)) {
          console.warn('Items should be an array');
          return false;
        }

        const isValid = value.every(item => typeof item === 'object' && item !== null);

        if (!isValid) {
          console.warn('Every item in the array should be an object');
        }

        return isValid;
      }
    }
  },
  data() {
    return {
      currentSlide: 0
    }
  },
  methods: {
    nextSlide(){
      this.currentSlide++;
      if(this.currentSlide > this.images.length - 1){
        this.currentSlide = 0;
      }
    },
    prevSlide(){
      this.currentSlide--;
      if(this.currentSlide < 0){
        this.currentSlide = this.images.length - 1;
      }
    }
  }
};
</script>