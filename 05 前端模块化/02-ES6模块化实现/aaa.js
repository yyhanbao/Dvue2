// 小明
var name = "小明";
var age = 22;
var flag = true;

function sum(num1, num2) {
  return num1 + num2;
}

// 导出方式一：导出 {}
export {
  name, age, flag, sum
};

// 导出方式二：使用 export 直接导出
export var num = 222;
export var height = 1.62;

// 导出方式三：导出函数/类
export function mul(num1, num2) {
  return num1 * num2;
}

export class Person {
  run() {
    console.log("在奔跑");
  }
}

// 导出方式四：export default，使用者可以自己命名，同一模块只能有一个 export default
// const address = "北京市";
//
// export default address;

// 导出方式五：export default，导出全部，使用者可以自己命名
export default function (argument) {
  console.log(argument);
}