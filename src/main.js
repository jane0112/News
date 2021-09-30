import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './setup/setupAxios';
import 'bootstrap';
// import './assets/main.scss'
import 'bootstrap/dist/css/bootstrap.css';


Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
