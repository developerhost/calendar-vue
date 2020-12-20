// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import firebase from 'firebase'

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBy-XMnFCcNAplJZdRspG08puGom4MqMwo",
  authDomain: "calendar-app-11578.firebaseapp.com",
  projectId: "calendar-app-11578",
  storageBucket: "calendar-app-11578.appspot.com",
  messagingSenderId: "1015345713907",
  appId: "1:1015345713907:web:4cc3340b6501ee43fbdd86"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
