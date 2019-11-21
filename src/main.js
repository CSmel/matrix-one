import Vue from 'vue'
import App from './App.vue'
import VueTyperPlugin from 'vue-typer'
Vue.use(VueTyperPlugin);
new Vue({
  el: '#app',
  render: h => h(App),

});
