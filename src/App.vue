<template>
  <div class="container-xl">
    <div class="row">
      <div class="col-lg-4 col-md-6 col-sm-12 col-12 mx-auto">
        <ListGroup>
          <p>one</p>
          <p>two</p>
        </ListGroup>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from "@/components/ListGroup.vue";
export default {
  name: 'App',
  components: {
    ListGroup
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
