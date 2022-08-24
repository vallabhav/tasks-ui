
<script>
export default {
  props: ['task'],
  data() {
    return {
      checked: false,
      taskId: ''
    }
  },
  methods: {
    dateFormat(timestamp) {
       let date_formatted = new Date(timestamp);
       return date_formatted.toISOString().substring(0,10);
    },

    getTasksTobeCleared() {
      console.log("cleared tasks" + this.tasksToClear);
      return this.tasksToClear;
    },

    handleCheck(taskId) {
      this.taskId = taskId;
    }

  }
}
</script>

<template>
     <div class="task-row">
      <label class="task-name"  :for="task.id">{{ task.description }}</label>
      <input type="checkbox" @change="handleCheck(task.id)" :id="task.id" name="taskIds"  v-model="checked"  />
      <label class="date" :for="task.id">{{ dateFormat(task.date) }}</label>
    </div>
</template>

<style scoped>
.task-row {
  margin: 7px 0;
}

label {
  display: block;
}

label.task-name {
  font-size: 16px;
  font-weight: bold;
  color: rgba(255, 255, 255, .87)
}

label.date {
  font-size: 12px;
  font-weight: bold;
}

input[type=checkbox] {
  vertical-align: middle;
  float: right;
}

@media (min-width: 1024px) {
  .heading h1 {
    text-align: left;
  }
}
</style>
