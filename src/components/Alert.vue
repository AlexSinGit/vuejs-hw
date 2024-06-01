<template>
  <div :class="`alert alert-${type}`" role="alert">
    {{text}}
  </div>
</template>

<script>
export default {
  name: "Alert",
  props: {
    text: {
      type: String,
      required: true,
      default: ''
    },
    type: {
      type: String,
      required: true,
      default: "success"
    }
  }
};
</script>