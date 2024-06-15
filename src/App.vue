<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-sm-12 col-12 mx-auto">
        <Collapse
          text="Lorem Ipsum is simply dummy text of the printing and typesetting industry."
          :opened="true"
        />
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import Collapse from "@/components/Collapse.vue";
export default {
  name: 'App',
  components: {
    Collapse
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
