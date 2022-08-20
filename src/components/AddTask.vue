<script>
export default {
  data() {
    return {
      task: '',
      date: null
    }
  },
  methods: {
    addTask() {
      alert("new task: " + this.task + "-" + this.date);
    }
  }
}
</script>

<template>
  <div class="add-task">
    <h3>Add Task</h3>
    <label for="task">Description</label>
    <input class="form-input" id="task" v-model="task">
    <label for="date">Date</label>
    <input class="form-input" id="date" v-model="date">
    <button @click="addTask">Save</button>
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
