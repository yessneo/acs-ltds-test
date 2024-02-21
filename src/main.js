import Vue from 'vue';
import App from './App.vue';
import store from './store/index';
import router from './router/router'; // Adjust this path if necessary

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount('#app');
