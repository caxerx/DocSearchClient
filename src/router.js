import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
      path: '/app',
      name: 'app',
      component: App
    },
 
  ]
})
