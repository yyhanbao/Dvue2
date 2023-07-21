<template>
  <div>
    <h2>我是首页标题</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Home",
  // created() {
  //   console.log("home created");
  // },
  // destroyed() {
  //   console.log("home destroyed");
  // },
  // activated & deactivated 函数, 只有该组件使用了 keep-alive 时, 才是有效的
  activated() {
    this.$router.push(this.path);
    // console.log("activated");
  },
  // deactivated() {
  //   console.log("deactivated");
  // },
  //组件内守卫
  beforeRouteLeave(to, from, next) {
    // console.log(this.$route.path);
    this.path = this.$route.path;
    // console.log("beforeRouteLeave");
    next();
  }
};
</script>

<style scoped>
</style>
