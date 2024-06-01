<template>
  <div class="container-xl">
    <div class="row">
      <div class="col-12">
        <Definitions :data="definitions"/>
        <hr/>
        <ProgressBar :percentage="percentage"/>
        <hr/>
        <Alert :type="'warning'" :text="'Test warning text'" />
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap/dist/css/bootstrap.min.css';
import Definitions from "@/components/Definitions";
import ProgressBar from "@/components/ProgressBar.vue";
import Alert from "@/components/Alert.vue";

export default {
  name: 'App',
  components: {
    Definitions,
    ProgressBar,
    Alert
  },
  data() {
    return {
      definitions: [
        { dt: 'one', dd: 'two', id: 1 },
        { dt: 'another term', dd: 'another description', id: 2 },
      ],
      percentage: 68
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
