
<script>
import Task from './Task.vue'

export default {
  components: {
    Task
  },
  props: ['tasks'],
  methods: {
    delete() {
      
    }
  }
}
</script>

<template>
  <div class="tasks-list">
    <div v-for="task in tasks">
      <Task v-bind:task="task"   />
    </div>
    
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
