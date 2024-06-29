<template>
  <el-form :model="form">
    <el-form-item>
      <el-input v-model="form.title" size="large" @input="validateField('title')" placeholder="Title" />
      <div class="err-mes" v-if="errors.title">{{ errors.title }}</div>
    </el-form-item>
    <el-form-item>
      <el-input v-model="form.description" size="large" @input="validateField('description')" placeholder="Description" type="textarea"  />
      <div class="err-mes" v-if="errors.description">{{ errors.description }}</div>
    </el-form-item>
    <el-form-item>
      <el-select size="large" v-model="form.status" placeholder="Choose status">
        <el-option v-for="item in todoStatuses" :label="item.label" :value="item.value" :key="item.id" />
      </el-select>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" size="large" @click.prevent="submitTask">Save</el-button>
      <el-button type="danger" size="large" @click="handleCancelForm" >Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script>

import { todoStatuses } from "@/commons/options";
import { toDoItemValidationSchema } from "@/schemes/toDoItemFormSchema";

export default {
  name: "ToDoForm",
  props: ['onFormOpen'],
  data: () => {
    return {
      errors: {},
      form: {
        title: '',
        description: '',
        status: 'not-complete'
      }
    }
  },
  computed: {
    todoStatuses: () => todoStatuses
  },
  methods: {
    async validateField(field) {
      try {
        await toDoItemValidationSchema.validateAt(field, this.form);
        this.errors[field] = null;
      } catch (err) {
        this.errors[field] = err.message;
      }
    },
    async validate() {
      try {
        await toDoItemValidationSchema.validate(this.form, { abortEarly: false });
        this.errors = {};
        return true;
      } catch (err) {
        const validationErrors = {};
        err.inner.forEach((error) => {
          validationErrors[error.path] = error.message;
        });
        this.errors = validationErrors;
        return false;
      }
    },
    async submitTask(){
      const isValid = await this.validate();
      if (isValid) {
        this.$emit('setToDoItem', this.form);
        this.resetForm();
      }
    },
    handleCancelForm(){
      this.$emit('onCancelForm', () => {
        this.resetForm();
      });
    },
    resetForm(){
      this.form.title = '';
      this.form.description = '';
      this.form.status = 'not-complete';
      this.errors = {};
    }
  }
};
</script>

<style scoped>
.err-mes {
  color: red;
  font-size: 12px;
}
</style>