<script>
import axios from "axios";
axios.defaults.headers.get["Content-Type"] = "application/json";
export default {
  props: ["reloadTasks", "showForm"],
  data() {
    return {
      task: {
        description: "",
        date: "",
      },
      showNewPanel: this.showForm
    };
  },
  methods: {
    addTask() {
      let self = this;
      let date = new Date(this.task.date).getTime();
      console.log("new task: " + this.task.description + "-" + date);

      axios
        .post("/tasks", {
          description: this.task.description,
          date: date,
        })
        .then(function (response) {
          // clear data
          self.task.description = "";
          self.task.date = "";

          // trigger reload tasks
          self.$parent.setReloadTask(true);
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
};
</script>

<template>
  <div v-if="showNewPanel">
    <button @click="showNewPanel = !showNewPanel">Close</button>
  </div>
  <div v-if="showNewPanel" class="add-task">
    <h3>Add Task</h3>
    <label for="task">Description</label>
    <input ref="description"  class="form-input" id="task" v-model="task.description" />
    <label for="date">Date(yyyy-dd-mm)</label>
    <input class="form-input" id="date" v-model="task.date" />
    <button @click="addTask">Save</button>
  </div>
  <div v-else class="new-btn-row">
    <button @click="showNewPanel = true">New</button>
  </div>
</template>

<style scoped>
.form-input {
  padding: 5px;
  width: 100%;
  display: block;
}

.add-task {
  border: 1px solid rgb(236, 236, 236);
  border-radius: 10px;
  padding: 10px;
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
