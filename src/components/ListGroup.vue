<template>
  <ul class="list-group">
    <li class="list-group-item" v-for="(slot, index) in $slots.default()" :key="index">
      <component :is="slot" class="mb-0"></component>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ListGroup"
};
</script>

<style scoped>

</style>