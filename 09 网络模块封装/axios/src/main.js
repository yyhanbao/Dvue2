import Vue from "vue";
import App from "./App";

// 导入 axios
import axios from "axios";

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  render: h => h(App)
});

// 1 axios 基本使用 ：请求数据
// 1-1 axios 会返回一个 Promise，所以可以使用 .then 方法
// 1-2 这里也接受 JSONP，如果遇到跨域问题，示例：
// url: "http://123.207.32.32:8000/home/multidata?callback=jsonp123"

// // 写法一：
// axios({  // 默认情况下发送的就是 get 请求
//   url: "http://123.207.32.32:8000/home/multidata",
//   method: "get" // 也可以通过指定 method 发送 get 请求，请求结果与上述一致
// }).then(res => {
//   // 打印出请求到的数据
//   console.log(res);
// }).catch(err => {
//   console.log(err);
// });

// // 写法二：
// // 不传请求参数
// axios.get("http://123.207.32.32:8000/home/multidata")
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });
// // 传入请求参数
// // axios.get("http://123.207.32.32:8000/home/data?type=sell&page=1")
// axios.get("http://123.207.32.32:8000/home/data",
//   {params: {type: "sell", page: 1}})
//   .then(res => {
//     console.log(res);
//   })
//   .catch(err => {
//     console.log(err);
//   });

// 2 axios 发送并发请求：发送两个请求，并在拿到两个请求的数据后做后续处理

// // 2-1 axios.all 使用方法
// axios.all([axios(), axios()])
//   .then(results => {
//   });

// // 2-2 axios.all 使用演示
// axios
//   .all([
//     axios({
//       url: "http://123.207.32.32:8000/home/multidata"
//     }),
//     axios({
//       url: "http://123.207.32.32:8000/home/data",
//       params: {
//         type: "sell",
//         page: 1
//       }
//     })
//   ])
//   // .then(results => {
//   //   console.log(results);
//   // });
//   // 2-3 axios.spread 可将数组 [res1,res2] 展开为 res1, res2
//   .then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
//   }));

// 3 axios.defaults 全局配置：抽离出公共配置
// // 3-1 配置前示例
// axios
//   .all([
//     axios({
//       baseURL: "http://123.207.32.32:8000",
//       url: "/home/multidata",
//       timeout: 5
//     }),
//     axios({
//       baseURL: "http://123.207.32.32:8000",
//       url: "/home/data",
//       timeout: 5,
//       params: {
//         type: "sell",
//         page: 1
//       }
//     })
//   ])
//   .then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
//   }));
// // 3-2 配置后示例：这里都是在使用全局的 axios 和对应的配置在进行网络请求，实际工作中，需要创建 axios 实例，通过实例发送请求
// axios.defaults.baseURL = "http://123.207.32.32:8000";
// axios.defaults.timeout = 5000;
//
// axios
//   .all([
//     axios({
//       url: "/home/multidata"
//     }),
//     axios({
//       url: "/home/data",
//       params: {
//         type: "sell",
//         page: 1
//       }
//     })
//   ])
//   .then(axios.spread((res1, res2) => {
//     console.log(res1);
//     console.log(res2);
//   }));

// 4-1 创建对应的 axios 实例
// const instance1 = axios.create({
//   baseURL: "http://123.207.32.32:8000",
//   timeout: 5000
// });
// // 4-2 发送网络请求
// instance1({
//   url: "/home/multidata"
// }).then(res => {
//   console.log(res);
// });
//
// instance1({
//   url: "/home/data",
//   params: {
//     type: "sell",
//     page: 1
//   }
// }).then(res => {
//   console.log(res);
// });

// const instance2 = axios.create({
//   baseURL: 'http://222.111.33.33:8000',
//   timeout: 10000,
//   // headers: {}
// })

// 5 封装 axios 请求
import {request} from "./network/request";

// // 拿到结果方式一：
// request({
//   url: '/home/multidata'
// }, res => {
//   console.log(res);
// }, err => {
//   console.log(err);
// })

// // 拿到结果方式二：
// request({
//   baseConfig: {
//
//   },
//   success: function (res) {
//
//   },
//   failure: function (err) {
//
//   }
// })

// // 拿到结果方式三：最终方案
request({
  url: "/home/multidata"
}).then(res => {
  console.log(res);
}).catch(err => {
  console.log(err);
});
