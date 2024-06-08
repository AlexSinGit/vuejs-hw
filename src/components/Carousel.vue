<template>
  <div id="carousel" class="carousel slide" data-bs-ride="carousel" v-if="images.length > 0">
    <div class="carousel-inner">
      <div
        :class="[
          'carousel-item',
          {'active': index === currentSlide - 1 },
          {'carousel-item-next': index === nextSlideIndex() - 1 && direction === 'next'},
          {'carousel-item-prev': index === prevSlideIndex() - 1 && direction === 'prev'},
          {'carousel-item-start': (index === nextSlideIndex() - 1 && direction === 'next') && animStart},
          {'carousel-item-start': index === currentSlide - 1 && animStart && direction === 'next'},
          {'carousel-item-end': (index === prevSlideIndex() - 1 && direction === 'prev') && animStart},
          {'carousel-item-end': index === currentSlide - 1 && animStart && direction === 'prev'},
        ]"
        v-for="(image, index) in images"
        :key="index"
        @transitionend="onTransitionendEnd"
      >
        <img alt="image" class="d-block w-100" :src="image" />
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
      default: () => []
    }
  },
  data() {
    return {
      currentSlide: 1,
      animStart: false,
      nextIndex: 1,
      direction: 'none'
    }
  },
  methods: {
    nextSlideIndex(){
      let next = this.currentSlide + 1;
      if(next > this.images.length){
        next = 1;
      }
      return next;
    },
    prevSlideIndex(){
      let prev = this.currentSlide - 1;
      if(prev < 1){
        prev = this.images.length;
      }
      return prev;
    },
    nextSlide(){
      this.direction = 'next';
      this.nextIndex = this.nextSlideIndex();
      setTimeout(() => {
        this.animStart = true;
      }, 0);
    },
    prevSlide(){
      this.direction = 'prev';
      this.nextIndex = this.prevSlideIndex();
      setTimeout(() => {
        this.animStart = true;
      }, 0);
    },
    onTransitionendEnd(){
      this.currentSlide = this.nextIndex;
      this.animStart = false;
      this.direction = 'none';
    }
  }
};
</script>


<style scoped>

</style>