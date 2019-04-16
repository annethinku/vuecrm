// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import axios from 'axios';
import qs from 'qs' ;
import Vuex from 'vuex';
import store from './vuex'
import VCharts from 'v-charts'

Vue.prototype.$axios = axios;
Vue.prototype.API1='/static';
Vue.prototype.qs = qs;
//全局注册，使用方法为:this.$axios Vue.prototype.qs = qs
// 全局注册，使用方法为:this.qs
Vue.use(iView);
Vue.use(Vuex);
Vue.use(VCharts)

Vue.config.productionTip = false;

// const store=new Vuex.Store({
//   state:{
//     count:6
//   },
//   mutations:{
//     increment(state){
//       state.count++
//     }
//   }
// })
// store.commit('increment')
// console.log(store.state.count)

/* eslint-disable no-new */
// console.log(store.state.title)
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
new Vue({
  el:'title',
  computed:{
    title(){
      return store.state.title
    }
  }
})
