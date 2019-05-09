import Vue from 'vue'
import './plugins/vuetify'
import Vuetify from 'vuetify'
import App from './App.vue'

Vue.use(Vuetify)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
