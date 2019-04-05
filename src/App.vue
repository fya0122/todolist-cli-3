<template>
  <div id="app">
    <TodoHeader/>
    <!-- 里面的组件是不会走第二次created生命周期了呢 -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  import TodoHeader from './components/TodoHeader.vue'

  export default {
    name: 'app',
    components: {
      TodoHeader
    }
  }
</script>
