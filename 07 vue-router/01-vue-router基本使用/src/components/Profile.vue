<template>
  <div>
    <h2>我是档案标题</h2>
    <!-- 获取 query 类型传递参数 -->
    <h2>name：{{$route.query.name}}</h2>
    <h2>age：{{$route.query.age}}</h2>
  </div>
</template>

<script>
export default {
  name: 'Profile',
  // 验证使用了 exclude，该组件会被频繁创建和销毁
  // created() {
  //   console.log("profile created");
  // },
  // destroyed() {
  //   console.log("profile destroyed");
  // }
}
</script>

<style scoped></style>
