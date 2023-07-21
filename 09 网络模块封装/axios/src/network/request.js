import axios from "axios";

export function request(config) {
  // 1 创建 axios 实例
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 5000
  });

  // 2 使用 axios 拦截器：配置请求和响应拦截
  // 2-1 请求拦截，作用举例
  //   2-1-1 比如 config 中的一些信息不符合服务器的要求，需要进行某些变化时
  //   2-1-2 比如每次发送网络请求时, 都希望在界面中显示一个请求的图标时
  //   2-1-3 某些网络请求(比如登录(token)), 必须携带一些特殊的信息
  instance.interceptors.request.use(
    config => { // 请求成功，是需要返回的
      console.log("来到了 request 拦截 success 中");
      console.log(config);
      return config;
    }, err => { // 请求失败
      console.log("来到了 request 拦截 failure 中");
      console.log(err);
      return err;
    });

  // 2-2 响应拦截
  instance.interceptors.response.use(
    res => { // 响应成功，是需要返回的
      console.log("来到了 response 拦截 success 中");
      console.log(res.data);
      return res.data;
    }, err => { // 响应失败
      console.log("来到了 response 拦截 failure 中");
      console.log(err);
      return err;
    });

  // 3 发送真正的网络请求
  return instance(config);
}

// 传出结果方式三：封装最终方案（封装的目的就是返回 Promise，之后即使不使用 axios 了，也可以只替换封装内的内容）
// export function request(config) {
//   // 1 创建 axios 实例
//   const instance = axios.create({
//     baseURL: "http://123.207.32.32:8000",
//     timeout: 5000
//   });
//
//   // 2 发送真正的网络请求（这里返回的就是 Promise，所以后面可以使用 .then 方法）
//   return instance(config);
// }


// 传出结果方式三：最终方案（多此一举）
// export function request(config) {
//   return new Promise((resolve, reject) => {
//     // 1 创建 axios 实例
//     const instance = axios.create({
//       baseURL: 'http://123.207.32.32:8000',
//       timeout: 5000
//     })
//
//     // 2 发送真正的网络请求
//     instance(config)
//       .then(res => {
//         resolve(res)
//       })
//       .catch(err => {
//         reject(err)
//       })
//   })
// }

// 传出结果方式二：
// export function request(config) {
//   // 1 创建 axios 实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   // 2 发送真正的网络请求
//   instance(config.baseConfig)
//     .then(res => {
//       // console.log(res);
//       config.success(res);
//     })
//     .catch(err => {
//       // console.log(err);
//       config.failure(err)
//     })
// }

// 传出结果方式一：
// export function request(config, success, failure) {
//   // 1 创建 axios 实例
//   const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
//   })
//
//   // 2 发送真正的网络请求
//   instance(config)
//     .then(res => {
//       // console.log(res);
//       success(res);
//     })
//     .catch(err => {
//       // console.log(err);
//       failure(err)
//     })
// }

// 补充知识：上述回调函数讲解，把函数作为参数传入另一个函数里
// function test(aaa, bbb) {
// 	aaa('Hello World')
// 	bbb('err message')
// }
//
// test(
// 	res=> {
//   console.log(res);
// 	},
//   err=> {
//   console.log(err);
// 	}
// )
