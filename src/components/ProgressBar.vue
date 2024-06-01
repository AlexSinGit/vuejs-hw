<template>
  <div class="progress">
    <div class="progress-bar" role="progressbar" :aria-valuenow="percentage" aria-valuemin="0" aria-valuemax="100" :style="{ width: `${percentage}%` }"></div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    percentage: {
      type: Number,
      required: true,
      default: 0
    }
  }
};
</script>