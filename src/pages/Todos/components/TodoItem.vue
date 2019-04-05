<template>
  <div :class="{'is-complete': todo.completed}" class="todo-item">
    <p>
      <input :checked="todo.completed" @change="changeCheckboxValue(todo.id)" type="checkbox"/>
      {{ todo.title }}
      <button @click="delTodoItem(todo.id)" class="del">×</button>
    </p>
  </div>
</template>
<script>
  export default {
    name: 'TodoItem',
    props: {
      todo: Object
    },
    methods: {
      // type="checkbox"触发的方法
      changeCheckboxValue(id) {
        this.$emit('changecheckboxvalue', id)
      },
      // 删除
      delTodoItem(id) {
        this.$emit('deltodoitem', id)
      }
    }
  }
</script>
<style scoped>
  .todo-item {
    background: #f4f4f4;
    padding: 10px;
    border-bottom: 1px dotted #ccc;
  }

  .is-complete {
    text-decoration: line-through;
  }

  .del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    float: right;
  }
</style>
