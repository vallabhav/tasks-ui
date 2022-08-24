<script>
import AddTask from './AddTask.vue'
import Tasks from './Tasks.vue'

export default {
  components: {
    AddTask,
    Tasks
  },
  data() {
    return {
      tasks: [],
      reloadTasks: false
    }
  },
  methods: {
    setReloadTask(flag) {
      this.reloadTasks =  flag;
    }
  }
}
</script>

<template>
<div class="task-manager">
<h1>Task Manager System</h1>
  <AddTask/>
  <Tasks :tasks="tasks"  :reloadTasks="this.reloadTasks" />
</div>
</template>


<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

h1,
h3 {
  text-align: center;
}

.task-manager {
  width: 100%;
}

@media (min-width: 1024px) {
  .heading h1 {
    text-align: left;
  }
}
</style>
