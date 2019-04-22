import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'
import Vuex from 'vuex'



import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'




// Helpers
import colors from 'vuetify/es5/util/colors'
import VueSweetalert2 from 'vue-sweetalert2';
import { createProvider } from './vue-apollo'



Vue.use(Vuex)
Vue.use(require('vue-cookie'))
Vue.use(require('vue-moment'));
Vue.use(VueSweetalert2)


Vue.use(Vuetify, {
  theme: {
    primary: colors.lightBlue.darken4,
    secondary: colors.blue.darken1,
    accent: colors.indigo.base, 
  }
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  apolloProvider: createProvider(),
  render: (h) => h(App)
})
