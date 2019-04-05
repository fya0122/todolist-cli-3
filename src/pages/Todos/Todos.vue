<template>
  <div>
    <AddTodoItem @addtodoitem="addtodoitem"/>
    <div v-for="item of todos" :key="item.id">
      <TodoItem @deltodoitem="deltodoitem" @changecheckboxvalue="changecheckboxvalue" :todo="item"/>
    </div>
  </div>
</template>
<script>
  import TodoItem from './components/TodoItem.vue'
  import AddTodoItem from './components/AddTodoItem.vue'
  // import uuid from 'uuid'
  import axios from 'axios'

  export default {
    name: 'Todos',
    data() {
      return {
        todos: []
      }
    },
    created() {
      axios.get('http://jsonplaceholder.typicode.com/todos?_limit=10').then((res) => {
        if (res.status === 200 && res.statusText === 'OK' && res.data.length) {
          this.todos = res.data.map(item => {
            return {
              id: item.id,
              title: item.title,
              completed: item.completed
            }
          })
        }
      }).catch((err) => {
        window.console.log(err)
        this.todos = []
      })
    },
    components: {
      TodoItem,
      AddTodoItem
    },
    methods: {
      // type="checkbox"改变状态
      changecheckboxvalue(id) {
        window.console.error('//////')
        window.console.log(this.todos)
        const todos = this.todos
        for (const item of todos) {
          if (item.id === id) {
            item.completed = !item.completed
            break;
          }
        }
      },
      // 删除
      deltodoitem(id) {
        axios.delete(`http://jsonplaceholder.typicode.com/todos/${id}`).then((res) => {
          if (res.status === 200 && res.statusText === 'OK') {
            const todos = this.todos
            this.todos = todos.filter(item => item.id !== id)
          }
        }).catch((err) => {
          window.console.log(err)
        })
      },
      // 添加
      addtodoitem(obj) {
        const {title, completed} = obj
        axios.post('http://jsonplaceholder.typicode.com/todos', {
          title: title,
          completed: completed
        }).then((res) => {
          if (res.statusText === 'Created' && res.status === 201) {
            this.todos.unshift({
              id: res.data.id,
              title: res.data.title,
              completed: res.data.completed
            })
          }
        }).catch((err) => {
          window.console.log(err)
        })
      }
    }
  }
</script>
