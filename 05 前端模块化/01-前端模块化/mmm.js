(function () {
  // 1 使用 aaa.js 中定义的 flag
  if (moduleA.flag) {
    console.log("小明是天才，哈哈哈哈哈哈");
  }

  // 2 使用 aaa.js 中定义的 sum 函数
  console.log(moduleA.sum(40, 50));
})();
