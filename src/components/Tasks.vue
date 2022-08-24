
<script>
import axios from "axios";

import Task from "./Task.vue";

axios.defaults.headers.get["Content-Type"] = "application/json";

export default {
  components: {
    Task,
  },
  props: ["tasks", "reloadTasks"],
  data() {
    return {
      tasksList: this.tasks,
      reload: this.reloadTasks
    };
  },
  created() {
    // fetch on init
    this.fetchData();
  },
  watch: {
    reloadTasks: {
      handler(updatedReload) {
        this.reload = updatedReload;
        if (updatedReload) {
          // reload
          this.fetchData();
          this.$parent.setReloadTask(false);
        }
      },
      // force eager callback execution
      immediate: true,
    },
  },
  methods: {
    async fetchData() {
      let self = this;

      axios({
        method: "get",
        url: "/tasks/all",
        responseType: "json",
      }).then(function (response) {
        self.tasksList = response.data;
      });
    },

    clearTasks() {

      let tasksTobeCleared = [];
      let self = this;

      this.$refs.task.forEach((element) => {
        if (element.$data.checked) {
          tasksTobeCleared.push(element.$data.taskId);
        }
      });

      console.log('tasks to be cleared:' + tasksTobeCleared);

      axios.delete('/tasks', {
        data: tasksTobeCleared,
      }).then(function (response) {
        // reload
        self.fetchData();
      });;
    }
  },
};
</script>

<template>
  <span v-show="reload">Reloading tasks ...</span>
  <div v-if="tasksList.length > 0" class="tasks-list">
    <div v-for="task in tasksList">
      <Task ref="task" v-bind:task="task" />
    </div>
    <div><button @click="clearTasks()">Clear</button></div>
  </div>
  <div v-else>
    <p>Tasks list is empty, click New button to add one.</p>
  </div>
</template>

<style scoped>
.task-row {
  margin: 7px 0;
}

.tasks-list {
  border: 1px solid rgb(236, 236, 236);
  border-radius: 10px;
  padding: 10px;
  margin: 10px 0;
}

label {
  display: block;
}

label.task-name {
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, 0.87);
}

label.date {
  font-size: 12px;
  font-weight: bold;
}

input[type="checkbox"] {
  vertical-align: middle;
  float: right;
}

button {
  text-align: center;
  padding: 5px 10px;
  margin-top: 5px;
  margin-right: 0;
  margin-left: auto;
  display: block;
}

@media (min-width: 1024px) {
  .heading h1 {
    text-align: left;
  }
}
</style>
