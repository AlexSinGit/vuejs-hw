<script>
export default {
  name: "CardV2",
  props: [ 'title', 'text' ],
  methods: {
    isRender: (value) => typeof value === 'string' && value.length > 0
  }
};
</script>

<template>
  <div class="card">
    <div class="card-body">
      <h4 class="card-title" v-if="isRender(this.title)" >{{ this.title }}</h4>
      <p class="card-text" v-if="isRender(this.text)" >{{ this.text }}</p>
    </div>
  </div>
</template>

<style scoped>

</style>