import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import DaySpanVuetify from 'dayspan-vuetify'


import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import 'dayspan-vuetify/dist/lib/dayspan-vuetify.min.css'


// Helpers
import colors from 'vuetify/es5/util/colors'




Vue.use(Vuetify, {
  theme: {
    primary: colors.lightBlue.darken2,
    secondary: colors.blue.darken1,
    accent: colors.indigo.base, 
  }
})


Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
})
