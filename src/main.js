
import ViewUI from 'view-design'
import 'view-design/dist/styles/iview.css'
import App from './App.vue'
import Vue from 'vue'

Vue.use(ViewUI);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
