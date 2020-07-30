import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    goldTotal: 0,
    activity: []
  },
  mutations: {
    sumarOro(state, newOro){
      state.goldTotal = state.goldTotal + newOro;
    },
    addActivity(state, newActivity){
      state.activity = [...state.activity, newActivity];
    },
    resetGold(state){
      state.goldTotal = 0;
    },
    resetActivities(state){
      state.activity = [];
    }
  }
  
})

Vue.config.productionTip = false

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
