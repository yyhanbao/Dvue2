import * as types from "../mutations-types";

export default {
  state: {
    name: "东东"
  },
  mutations: {
    [types.UPDATE_NAME](state, payload) {
      state.name = payload;
    }
  },
  getters: {
    fullname1(state) {
      return state.name + "1111";
    },
    fullname2(state, getters) {
      return getters.fullname1 + "2222";
    },
    fullname3(state, getters, rootState) {
      return getters.fullname2 + rootState.counter;
    }
  },
  actions: {
    [types.A_UPDATE_NAME](context) {
      console.log(context);
      setTimeout(() => {
        context.commit(types.UPDATE_NAME, "西西");
      }, 1000);
    }
  }
};
