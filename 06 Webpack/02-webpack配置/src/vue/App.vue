<template>
  <div>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
    <Cpn/>
  </div>
</template>

<script>
import Cpn from "./Cpn.vue";

export default {
  name: "App",
  components: {
    Cpn
  },
  data() {
    return {
      message: "Hello Webpack",
      name: "憨憨"
    };
  },
  methods: {
    btnClick() {
      console.log("点击按钮有效");
    }
  }
};
</script>

<style scoped>
.title {
  color: yellow;
}
</style>