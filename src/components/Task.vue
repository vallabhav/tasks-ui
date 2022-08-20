
<script>
export default {
  props: ['task'],
  data() {
    return {

    }
  },
  methods: {
    delete() {
      
    }
  }
}
</script>

<template>
     <div class="task-row">
      <label class="task-name">{{ task.name }}<input type="checkbox" id="{{ task.id }}" /></label>
      <label class="date">{{ task.date }}</label>
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
