import Vue from 'vue'
import VueExposeComponentNames from "vue-expose-component-names"

import App from './components/App.vue'

Vue.use(VueExposeComponentNames);

new Vue({
	el: '#app',
	render: h => h(App)
});