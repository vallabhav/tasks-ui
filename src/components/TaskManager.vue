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
      tasks: [
        {
          id: '0001',
          name: 'Learn React',
          date: '2022-01-03'
        },
        {
          id: '0002',
          name: 'Profit',
          date: '2021-01-05'
        }
      ]
    }
  }
  
}
</script>

<template>
<div class="task-manager">
  <AddTask />
  <Tasks :tasks="tasks" />
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
