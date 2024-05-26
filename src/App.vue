<template>
  <div class="container-xl">
    <div class="row">
      <div class="col-12">
        <h1>Card v1</h1>
      </div>
    </div>
    <div class="row mt-3 mb-3">
      <div class="col-lg-3 col-md-6 col-sm-12 col-12">
        <CardV1 />
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <h1>Card v2</h1>
      </div>
    </div>
    <div class="row mt-3 mb-3 gy-4">
      <div class="col-lg-4 col-md-6 col-sm-12 col-12">
        <CardV2 title="My title" />
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 col-12">
        <CardV2 text="My text" />
      </div>
      <div class="col-lg-4 col-md-6 col-sm-12 col-12">
        <CardV2 title="My title" text="My text" />
      </div>
    </div>
  </div>
</template>

<script>
import "bootstrap/dist/css/bootstrap.min.css";
import CardV1 from "@/components/CardV1.vue";
import CardV2 from "@/components/CardV2.vue";

export default {
  name: "App",
  components: {
    CardV1,
    CardV2
  },
  mounted() {
    document.body.setAttribute('data-bs-theme', 'dark');
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
