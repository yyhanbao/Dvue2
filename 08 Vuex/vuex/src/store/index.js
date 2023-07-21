import Vuex from "vuex";
import Vue from "vue";
import getters from "./getters";
import mutations from "./mutations";
import actions from "./actions";
import moduleA from "./modules/moduleA";

Vue.use(Vuex);

const state = {
  counter: 0,
  students: [
    {id: 111, name: "憨憨", age: 18},
    {id: 112, name: "傻傻", age: 12},
    {id: 113, name: "呵呵", age: 28},
    {id: 114, name: "嘿嘿", age: 35},
  ],
  info: {
    name: "憨宝",
    age: 4,
    weight: 4.5
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions,
  modules: {
    a: moduleA
  }
});

export default store;

// 补充知识演示：对象的解构

// 1 定义
// const obj = {
//   name: "憨憨",
//   age: 18,
//   height: 1.62
// };

// 2-1 获取方式一：太过繁琐
// const name = obj.name;
// const age = obj.age;
// const height = obj.height;

// 2-2 获取方式二：可以全取出，也可以只取出一部分
// const {name, age, height} = obj;
// 或
// const {name} = obj;
// console.log(obj.name);


