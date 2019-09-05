import Vue from 'vue';
import Vuex from 'vuex';

import * as types from './types';
import { layout } from './modules';

Vue.use(Vuex);
const initPageState = () => {
  return {
    token: '',
  };
};
export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    layout,
  },
  state: initPageState(),
  mutations: {
    [types.TEST](state: any, pageState: any) {
      // do sth
    },
  },
  actions: {

  },
});
