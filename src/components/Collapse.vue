<template>
  <div>
    <p>
      <a class="btn btn-primary" data-bs-toggle="collapse" href="#" role="button" aria-expanded="false" @click="toggle">Link with href</a>
    </p>
    <div :class="['collapse', { 'show': localOpened === true }]">
      <div class="card card-body">
        {{text}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Collapse",
  props: {
    text: {
      type: String,
      default: '',
      required: true
    },
    opened: {
      type: Boolean,
      default: true,
      required: true
    }
  },
  data(){
    return {
      localOpened: this.opened
    }
  },
  methods: {
    toggle() {
      this.localOpened = !this.localOpened;
    }
  }
};
</script>