import * as types from "./mutations-types";
import Vue from "vue";

export default {
  [types.INCREMENT](state) {
    state.counter++;
  },
  [types.DECREMENT](state) {
    state.counter--;
  },
  [types.ADD_COUNT](state, num) {
    state.counter += num;
  },
  // 方式一：普通方式
  // [types.ADD_STUDENT](state, payload) {
  //   state.students.push(payload);
  // },
  // 方式二：添加 type 后
  [types.ADD_STUDENT](state, payload) {
    state.students.push(payload.aStu);
  },
  [types.UPDATE_INFO](state) {
    // 同步操作，devtools 中的状态更新
    state.info.name = "汉堡";
    // 异步操作，devtools 中的状态不变
    // setTimeout(() => {
    //   state.info.name = "憨憨";
    // }, 1000);
  },
  [types.ADD_INFO](state, payload) { // 添加响应式
    // 方式一：Vue.set()
    Vue.set(state.info, "height", payload.height);
    // 方式二：给 info 赋值一个新的对象
    // state.info = {...state.info, "height": payload.height};
  },
  [types.REMOVE_INFO](state) { // 删除响应式
    // Vue.delete() 删除
    Vue.delete(state.info, "weight");
  }
};
