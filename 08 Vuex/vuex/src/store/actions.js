import * as types from "./mutations-types";

export default {
  // context: 上下文
  [types.A_UPDATE_INFO](context, payload) {
    //   setTimeout(() => {
    //     context.commit(types.UPDATE_INFO);
    //     // 1 传递一个参数
    //     // payload();
    //     // 2 传递多个参数
    //     // console.log(payload.message.name);;
    //     // payload.success();
    //   }, 1000);
    // 3 使用 Promise
    return new Promise(resolve => {
      setTimeout(() => {
        context.commit(types.UPDATE_INFO);
        console.log(payload.name);
        resolve("111111");
      }, 1000);
    });
  },
  [types.A_ADD_COUNT](context, num) {
    setTimeout(() => {
      context.commit(types.ADD_COUNT, num);
    }, 1000);
  },
  [types.A_ADD_STUDENT](context, payload) {
    setTimeout(() => {
      console.log(payload.aStu);
      context.commit(types.ADD_STUDENT, payload);
    }, 1000);
  },
};
