import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import FeedBack from './pages/FeedBack'
import ViewReservation from './pages/ViewReservation.vue'
import CreateReservation from './pages/CreateReservation.vue'
import Test from './pages/Test.vue'
import Login from './pages/Login.vue'
import ViewDoctorInfo from './pages/ViewDoctorInfo.vue'

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
    {
      path: '/feedBack',
      name: 'feedBack',
      component: FeedBack
    },
    {
      path: '/viewReservation',
      name: 'viewReservation',
      component: ViewReservation
    },  
     {
      path: '/createReservation',
      name: 'createReservation',
      component: CreateReservation
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/viewDoctorInfo',
      name: 'viewDoctorInfo',
      component: ViewDoctorInfo
    },
    
 
  ]
})
