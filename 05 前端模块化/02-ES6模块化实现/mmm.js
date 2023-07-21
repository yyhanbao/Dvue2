// 1 导入{}中定义的变量
import {name, age, flag, sum} from "./aaa.js";

console.log("我是" + name, "我今年 " + age + " 岁");
if (flag) {
  console.log("小明是天才，哈哈哈哈哈哈");
  console.log(sum(20, 30));
}

// 2 导入 export 定义的变量
import {num, height} from "./aaa.js";

console.log(num);
console.log(height);

// 3 导入 export 定义的 function / class
import {mul, Person} from "./aaa.js";

console.log(mul(30, 50));

const p = new Person();
p.run();

// 4 导入 export default 中的内容
// import addr from "./aaa.js";
//
// console.log(addr);

// 5 全部统一导入
import * as aaa from "./aaa.js";

console.log(aaa.name);
console.log(aaa.mul(11, 10));