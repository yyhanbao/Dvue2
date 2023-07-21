// 1 使用 CommenJS 模块化规范
const {add, mul} = require("./js/mathUtils.js");

console.log(add(10, 11));
console.log(mul(10, 11));

// 2 使用 ES6 模块化规范
import {name, age, height} from "./js/info.js";

console.log(name, age, height);

// 3 依赖 css 文件
require("./css/normal.css");

// 4 依赖 less 文件
require("./css/special.less");
document.writeln("<div>Hello World</div>");

// 5 使用 Vue 进行开发
import Vue from "vue";
import App from "./vue/App.vue";

new Vue({
  el: "#app", // el 用于指定 Vue 要管理的 DOM，可以帮助解析其中的指令、事件监听等等
  template: "<App/>", // 这里的内容会替换掉挂载的对应 el 的模板
  components: {
    App
  }
});