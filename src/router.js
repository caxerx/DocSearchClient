import Vue from 'vue'
import Router from 'vue-router'
import App from './App.vue'
import FeedBack from './pages/FeedBack'
import ViewReservation from './pages/ViewReservation.vue'
import CreateReservation from './pages/CreateReservation.vue'
import OnlineConsultant from './pages/OnlineConsultant.vue'
import MedicalRecordList from './pages/MedicalRecordList.vue'
import Test from './pages/Test.vue'
import Login from './pages/Login.vue'
import SignUp from './pages/SignUp.vue'
import Main from './pages/Main.vue'
import ViewDoctorInfo from './pages/ViewDoctorInfo.vue'
import DoctorList from './pages/DoctorList.vue'
import YourDriver from './pages/YourDriver.vue'
import EditProfile from './pages/EditProfile.vue'
import ChangePassword from './pages/ChangePassword'


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
      path: '/onlineConsultant',
      name: 'onlineConsultant',
      component: OnlineConsultant
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/signup',
      name: 'signup',
      component: SignUp
    },
    {
      path: '/test',
      name: 'test',
      component: Test
    },
    {
      path: '/',
      name:'/',
      component: Main
    },
    {
      path: '/yourDriver',
      name:'yourDriver',
      component: YourDriver,
      children:[
        {
          path: 'viewReservation', // url= shop/cart
          component: ViewReservation,
      
        },
        {
          path: 'medicalRecordList', // url= shop/cart
          component: MedicalRecordList,
    
        },
        {
          path: 'editProfile', // url= shop/cart
          component: EditProfile,
    
        },
        {path: 'changePassword',
         component: ChangePassword,
        }
        
      ]
    },
    
    {
      path: '/viewDoctorInfo',
      name: 'viewDoctorInfo',
      component: ViewDoctorInfo
    },
    {
      path: '/doctorList',
      name: 'doctorList',
      component: DoctorList
    },
  ]
})
