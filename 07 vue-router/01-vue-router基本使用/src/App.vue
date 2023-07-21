<template>
  <div id="app">
    <h1>我是网站的标题</h1>
    <!--方法一：使用 <router-link/>实现路由跳转-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about" tag="button" replace>关于</router-link>

    <!--添加动态路由-->
    <!--使用 params 的类型传递参数-->
    <router-link to="/user/123">用户</router-link>

    <!--使用 query 的类型传递参数（一）-->
    <!--    <router-link-->
    <!--      :to="{-->
    <!--          	path: '/profile',-->
    <!--          	query: {name: 'why',age: 18}-->
    <!--        }">我的-->
    <!--    </router-link>-->

    <!--使用 query 的类型传递参数（二）-->
    <button @click="toProfile">我的</button>

    <!--方法二：使用 js 实现路由跳转-->
    <!--<button @click="linkToHome">首页</button>-->
    <!--<button @click="linkToAbout">关于</button>-->
    <keep-alive exclude="Profile">
      <!--exclude 里不可以有空格-->
      <router-view class="content"></router-view>
    </keep-alive>
    <h2>我是APP中的一些底部版权信息</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  // 方法二：使用 js 实现路由跳转
  methods: {
    //   linkToHome() {
    //     this.$router.push("./home");
    //     // this.$router.replace('./home');
    //     console.log("++++++");
    //   },
    //   linkToAbout() {
    //     this.$router.push("./about");
    //     // this.$router.replace('./about');
    //     console.log("------");
    //   },
    toProfile() {
      this.$router.push({
        path: "/profile",
        query: {name: "why", age: 18}
      });
    }
  }
};
</script>

<style>
.content {
  background-color: #f0f0f0;
}
</style>
