export default {
  doubleCounter: state => {
    return state.counter * 2;
  },
  // overAgesStus: state => {
  //   return state.students.filter(s => s.age >= 20);
  // },
  // overAgesStusCount: state => {
  //   return state.students.filter(s => s.age >= 20).length;
  // },
  overAgesStus: state => {
    return state.students.filter(s => s.age >= 30);
  },
  overAgesStusCount: (state, getters) => {
    return getters.overAgesStus.length;
  },
  overAgesStusInfo: (state) => {
    return age => {
      return state.students.filter(s => s.age >= age);
    };
  }
};
