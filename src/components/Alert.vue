<template>
  <div :class="`alert alert-${type}`" role="alert">
    {{text}}
  </div>
</template>

<script >
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
      default: "success",
      validator(value) {
        const validTypes = ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
        const isValid = validTypes.includes(value);
        if (!isValid) {
          console.warn(`Invalid prop: type "${value}" is not a valid alert type. Allowed types: ${validTypes.join(', ')}`);
        }
        return isValid;
      }
    }
  }
};
</script>