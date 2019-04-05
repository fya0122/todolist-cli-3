<template>
  <div class="addTodoItem">
    <input v-model.trim="title" type="text" placeholder="请添加待办事项...."/>
    <button class="btn" @click="addTodoItem">添加</button>
  </div>
</template>
<script>
  export default {
    name: 'AddTodoItem',
    data() {
      return {
        title: ''
      }
    },
    methods: {
      addTodoItem() {
        if (this.title) {
          const obj = {
            title: this.title,
            completed: false
          }
          this.$emit('addtodoitem', obj)
          this.title = ''
        } else {
          alert('请输入内容在添加!')
        }
      }
    }
  }
</script>
<style scoped>
  .addTodoItem {
    display: flex;
  }

  input[type='text'] {
    flex: 10;
    padding: 5px;
    outline: none;
  }

  button {
    flex: 2;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
    outline: none;
  }

  .btn:hover {
    background: #666;
    border: none;
    outline: none;
  }
</style>
