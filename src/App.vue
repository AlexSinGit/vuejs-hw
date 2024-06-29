<template>
  <el-menu
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="false"
  >
    <el-menu-item class="logo">
      <h1 class="m-0">ToDo List</h1>
    </el-menu-item>
  </el-menu>
  <el-drawer
    v-model="drawer"
    title="Create task"
    :before-close="handleDrawerClose"
    :size="drawerWidth"
  >
    <ToDoForm @setToDoItem="handleSetToDoItem" @onCancelForm="handleCancelForm" />
  </el-drawer>

  <el-empty description="No tasks have been added at this time" :image-size="250" v-if="toDoItems.length === 0">
    <el-button type="primary" size="large" :icon="Plus" @click="handleDrawerOpen">Add First</el-button>
  </el-empty>

  <el-container v-if="toDoItems.length > 0" :style="{maxWidth: '1200px', margin: '0 auto'}">
    <el-main>
      <el-row :gutter="20">
        <el-col class="mb-20" v-for="(item, index) in toDoItems" :key="item.id" :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
          <el-card>
            <template #header>
              <div class="card-header">
                <h2 class="task-title">{{ item.title }}</h2>
                <el-button type="danger" :icon="Delete" @click="removeItem(item, index)" />
              </div>
            </template>
            <p class="text item">{{ item.description }}</p>
            <template #footer>
              <el-select
                v-model="item.status"
                placeholder="Select"
                size="large"
                @change="handleTaskStatusChange(item, index)"
              >
                <el-option
                  v-for="status in todoStatuses"
                  :key="status.id"
                  :label="status.label"
                  :value="status.value"
                />
              </el-select>
            </template>
          </el-card>
        </el-col>
      </el-row>
    </el-main>
  </el-container>

  <el-button type="primary" class="float-button" size="large" :icon="Plus" circle @click="handleDrawerOpen" />
</template>

<script>
import ToDoForm from "@/components/ToDoForm.vue";
import { Plus, Delete } from "@element-plus/icons-vue";
import { ElMessage, ElMessageBox } from "element-plus";

import { todoStatuses } from "@/commons/options";
import LStorage from "@/functions/LStorage";

export default {
  name: "App",
  components: {
    ToDoForm
  },
  data() {
    return {
      drawer: false,
      drawerWidth: '30%',
      toDoItems: []
    };
  },
  computed: {
    Plus: () => Plus,
    Delete: () => Delete,
    todoStatuses: () => todoStatuses
  },
  created() {
    this.toDoItems = LStorage.getAllItems();
  },
  methods: {
    handleDrawerOpen(){
      this.calculateDrawerWidth();
      this.drawer = true;
    },
    handleDrawerClose(done) {
      this.closeDrawer(done);
    },
    handleSetToDoItem(todoItem) {
      let savedItem = LStorage.addItem({ ...todoItem });
      this.toDoItems.push(savedItem);
      this.drawer = false;
    },
    handleCancelForm(callback) {
      this.closeDrawer(() => this.drawer = false, callback);
    },
    handleTaskStatusChange(item) {
      LStorage.updateItem(item.id, { status: item.status });
      ElMessage({
        message: 'Congrats, status is updated successfully.',
        type: 'success',
      });
    },
    closeDrawer(done, callback = null) {
      ElMessageBox.confirm("Are you sure you want to close this?")
        .then(() => {
          done();
          if (typeof callback === "function") callback();
        });

    },
    removeItem(item, index) {
      ElMessageBox.confirm("Are you sure you want to close this?")
        .then(() => {
          LStorage.removeItem(item.id);
          this.toDoItems.splice(index, 1);
        }).catch(() => {});
    },
    calculateDrawerWidth() {
      if (window.innerWidth <= 600) {
        this.drawerWidth = "80%";
      } else if (window.innerWidth <= 1024) {
        this.drawerWidth = "50%";
      } else {
        this.drawerWidth = "30%";
      }
    }
  }
};
</script>

<style>
#app {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.m-0 {
  margin: 0;
}

.mb-20 {
  margin-bottom: 20px;
}

.el-card__header {
  padding: 14px;
}

.task-title {
  margin-top: 0;
  margin-bottom: 0;
}

.text.item {
  color: #666666;
  margin-top: 0;
  margin-bottom: 0;
}

.el-menu-item.logo {
  pointer-events: none !important;
}

.float-button {
  position: fixed;
  right: 20px;
  bottom: 20px;
}

.card-header {
  display: flex;
  justify-content: space-between;
}
</style>
