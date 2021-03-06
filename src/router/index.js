import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

let router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path: '/', name: 'Todos', component: () => import('../pages/Todos/Todos.vue')},
    {path: '/about', name: 'About', component: () => import('../pages/About/About.vue')}
  ]
})
router.beforeEach((to, form, next) => {
  next()
})
export default router
