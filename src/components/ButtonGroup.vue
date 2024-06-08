<template>
  <div class="btn-group" role="group">
    <button type="button" :class="['btn btn-secondary left', {'active': this.active === 'left' } ]" @click="onChoose('left')" >Left</button>
    <button type="button" :class="['btn btn-secondary right', {'active': this.active === 'right' } ]" @click="onChoose('right')" >Right</button>
  </div>
</template>

<script>
export default {
  name: "ButtonGroup",
  data(){
    return {
      active: 'none'
    }
  },
  methods:{
    onChoose(active){
      this.active = active;
    }
  }
};
</script>

<style scoped>

</style>