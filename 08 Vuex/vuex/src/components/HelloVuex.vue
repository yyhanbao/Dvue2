<template>
  <div>
    <h1>我是 HelloVuex 组件</h1>
    <!--    <p>1 演示 Vuex 管理多界面状态</p>-->
    <!--    <h2>当前计数：{{ $store.state.counter }}</h2>-->

    <!--    <p>2-1-1 演示 getters 基本使用（一）</p>-->
    <!--    <h2>当前计数*2：{{ $store.getters.doubleCounter }}</h2>-->
    <!--    <p>2-1-2 演示 getters 基本使用（二）</p>-->
    <!--    <h2>学生信息：{{ $store.state.students }}</h2>-->
    <!--    <h2>年龄大于20岁的学生信息：{{ $store.getters.overAgesStus }}</h2>-->

    <!--    <p>2-2-1 演示 getters 参数传递（一）</p>-->
    <!--    <h2>年龄大于30岁的学生个数：{{ $store.getters.overAgesStusCount }}</h2>-->
    <!--    <p>2-2-2 演示 getters 参数传递（二）</p>-->
    <!--    <h2>年龄大于30岁的学生信息：{{ $store.getters.overAgesStusInfo(30) }}</h2>-->

    <!--    <p>3-1-1 演示 mutations 传入一个参数</p>-->
    <!--    <h2>当前计数：{{ $store.state.counter }}</h2>-->
    <!--    <p>3-1-2 演示 mutations 传入多个参数</p>-->
    <!--    <h2>学生信息：{{ $store.state.students }}</h2>-->

    <!--    <p>3-2-1 演示 state 中的数据是否是响应式的</p>-->
    <!--    <h2>猫咪信息：{{ $store.state.info }}</h2>-->
    <!--    <p>3-2-2 演示 将后续添加的数据设置为响应式的</p>-->
    <!--    <h2>猫咪信息：{{ $store.state.info }}</h2>-->

    <!--    <p>4-1 演示 actions 基本使用</p>-->
    <!--    <h2>猫咪信息：{{ $store.state.info }}</h2>-->
    <!--    <p>4-2-1 演示 actions 传入一个参数</p>-->
    <!--    <h2>当前计数：{{ $store.state.counter }}</h2>-->
    <!--    <p>4-2-2 演示 actions 传入多个参数</p>-->
    <!--    <h2>学生信息：{{ $store.state.students }}</h2>-->

    <p>5 演示 modules 基本使用</p>
    <p>5-1 调用模块中的 state</p>
    <h2>{{ $store.state.a.name }}</h2>
    <p>5-2 调用模块中的 mutations</p>
    <h2>{{ $store.state.a.name }}</h2>
    <p>5-3 调用模块中的 getters</p>
    <h2>{{ $store.state.a.name }}</h2>
    <h2>{{ $store.getters.fullname1 }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <p>5-4 调用模块中的 actions</p>
    <h2>{{ $store.state.a.name }}</h2>

  </div>
</template>

<script>
export default {
  name: "HelloVuex"
};
</script>

<style></style>
