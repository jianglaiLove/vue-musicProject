import Vue from 'vue';
import Vuex from 'vuex';
import * as states from './state';
import * as getters from './getters';
import mutations from './mutations';
import * as actions from './actions';


Vue.use(Vuex)


export default new Vuex.Store ({
  states,
  getters,
  mutations,
  actions
})
