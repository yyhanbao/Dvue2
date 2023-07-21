// 1 使用 CommenJS 模块化规范
const {add, mul} = require("./js/mathUtils.js");

console.log(add(10, 11));
console.log(mul(10, 11));

// 2 使用 ES6 模块化规范
import {name, age, height} from "./js/info.js";

console.log(name, age, height);