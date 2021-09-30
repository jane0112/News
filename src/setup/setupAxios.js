import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
import constant from "@/constant";

axios.defaults.baseURL = constant.apiUrl;

axios.interceptors.request.use(
  function(config) {
    return config;
  },
  function(error) {
    return Promise.reject(error);
  }
);
axios.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          alert("你要找的頁面不存在");
          break;
        case 500:
          alert("程式發生問題");
          break;
        default:
          console.log(error.message);
      }
    }
    if (!window.navigator.onLine) {
      alert("網路出了點問題，請重新連線後重整網頁");
      return;
    }
    return Promise.reject(error);
  }
);
Vue.use(VueAxios, axios);
