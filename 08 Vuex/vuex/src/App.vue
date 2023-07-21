<template>
  <div id="app">
    <h1>我是 App 组件</h1>
    <!--    <p>1 演示 Vuex 管理多界面状态</p>-->
    <!--    <h2>当前计数：{{ count }}</h2>-->
    <!--    <button @click="increment">+1</button>-->
    <!--    <button @click="decrement">-1</button>-->

    <!--    <p>2-1-1 演示 getters 基本使用（一）</p>-->
    <!--    <h2>当前计数*2：{{ doubleCounter }}</h2>-->
    <!--    <p>2-1-2 演示 getters 基本使用（二）</p>-->
    <!--    <h2>学生信息：{{ $store.state.students }}</h2>-->
    <!--    <h2>年龄大于20岁的学生信息：{{ overAgesStus }}</h2>-->
    <!--    <p>2-2-1 演示 getters 参数传递（一）</p>-->
    <!--    <h2>年龄大于30岁的学生个数：{{ overAgesStusCount }}</h2>-->
    <!--    <p>2-2-2 演示 getters 参数传递（二）</p>-->
    <!--    <h2>年龄大于30岁的学生信息：{{ $store.getters.overAgesStusInfo(30) }}</h2>-->

    <!--    <p>3-1-1 演示 mutations 传入一个参数</p>-->
    <!--    <h2>当前计数：{{ count }}</h2>-->
    <!--    <button @click="addCount(5)">+5</button>-->
    <!--    <p>3-1-2 演示 mutations 传入多个参数</p>-->
    <!--    <h2>学生信息：{{ $store.state.students }}</h2>-->
    <!--    <button @click="addStudent">添加学生信息</button>-->
    <!--    <p>3-2-1 演示 state 中的数据是否是响应式的</p>-->
    <!--    <h2>猫咪信息：{{ $store.state.info }}</h2>-->
    <!--    <button @click="updateInfo">更新信息</button>-->
    <!--    <p>3-2-2 演示 将后续添加的数据设置为响应式的</p>-->
    <!--    <h2>猫咪信息：{{ $store.state.info }}</h2>-->
    <!--    <button @click="addInfo">添加信息</button>-->
    <!--    <button @click="removeInfo">删除信息</button>-->

    <!--    <p>4-1 演示 actions 基本使用</p>-->
    <!--    <h2>猫咪信息：{{ $store.state.info }}</h2>-->
    <!--    <button @click="aUpdateInfo">更新信息</button>-->
    <!--    <p>4-2-1 演示 actions 传入一个参数</p>-->
    <!--    <h2>当前计数：{{ count }}</h2>-->
    <!--    <button @click="aAddCount(10)">+10</button>-->
    <!--    <p>4-2-2 演示 actions 传入多个参数</p>-->
    <!--    <h2>学生信息：{{ $store.state.students }}</h2>-->
    <!--    <button @click="aAddStudent">添加学生信息</button>-->

    <p>5 演示 modules 基本使用</p>
    <p>5-1 调用模块中的 state</p>
    <h2>{{ $store.state.a.name }}</h2>
    <p>5-2 调用模块中的 mutations</p>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateName">修改名字</button>
    <p>5-3 调用模块中的 getters</p>
    <h2>{{ $store.state.a.name }}</h2>
    <h2>{{ $store.getters.fullname1 }}</h2>
    <h2>{{ $store.getters.fullname2 }}</h2>
    <h2>{{ $store.getters.fullname3 }}</h2>
    <p>5-4 调用模块中的 actions</p>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="asyncUpdateName">异步修改名字</button>

    <hr>
    <hello-vuex/>
  </div>
</template>

<script>
import HelloVuex from "./components/HelloVuex.vue";
import * as types from "./store/mutations-types";

export default {
  name: "App",
  components: {
    HelloVuex
  },
  computed: {
    count() {
      return this.$store.state.counter;
    },
    doubleCounter() {
      return this.$store.getters.doubleCounter;
    },
    overAgesStus() {
      return this.$store.getters.overAgesStus;
    },
    overAgesStusCount() {
      return this.$store.getters.overAgesStusCount;
    }
  },
  methods: {
    increment() {
      this.$store.commit(types.INCREMENT);
    },
    decrement() {
      this.$store.commit(types.DECREMENT);
    },
    addCount(num) {
      this.$store.commit(types.ADD_COUNT, num);
    },
    // 方式一：普通提交风格
    // addStudent() {
    //   const payload = {id: 115, name: "可可", age: 3};
    //   return this.$store.commit(types.ADD_STUDENT, payload);
    // },
    // 方式二：添加 type 属性的提交风格
    addStudent() {
      const stu = {id: 115, name: "可可", age: 3};
      this.$store.commit({
        type: types.ADD_STUDENT,
        stu
      });
    },
    updateInfo() {
      this.$store.commit(types.UPDATE_INFO);
    },
    addInfo() {
      this.$store.commit(types.ADD_INFO, {height: 0.48});
    },
    removeInfo() {
      this.$store.commit(types.REMOVE_INFO);
    },
    aUpdateInfo() {
      // 1 携带一个参数
      // this.$store.dispatch(types.A_UPDATE_INFO,()=>{
      //   console.log("里面已经完成了");
      // });
      // 2 携带多个参数
      // this.$store.dispatch(types.A_UPDATE_INFO, {
      //   message: {
      //     name: "宝宝",
      //     age: 2
      //   },
      //   success: () => {
      //     console.log("里面已经完成了");
      //   }
      // });
      // 3 使用 Promise.then
      const message = {
        name: "宝宝",
        age: 2
      };
      this.$store.dispatch(types.A_UPDATE_INFO, message)
        .then(res => {
          console.log("里面已经完成了");
          console.log(res);
        });
    },
    aAddCount(num) {
      this.$store.dispatch(types.A_ADD_COUNT, num);
    },
    aAddStudent() {
      const aStu = {id: 116, name: "嘻嘻", age: 25};
      this.$store.dispatch({
        type: types.A_ADD_STUDENT,
        aStu
      });
    },
    updateName() {
      this.$store.commit(types.UPDATE_NAME, "南南");
    },
    asyncUpdateName() {
      this.$store.dispatch(types.A_UPDATE_NAME);
    }
  }
};
</script>

<style></style>
