import * as types from '../types';

const initPageState = () => {
  return {
    isCollapse: false,
  };
};
const home = {
  state: initPageState(),
  mutations: {
    [types.CLOSESIDE](state: any, pageState: any) {
      state.isCollapse = false;
    },
    [types.OPENSIDE](state: any, pageState: any) {
      state.isCollapse = true;
    },
  },
  actions: {},
};

export default home;
