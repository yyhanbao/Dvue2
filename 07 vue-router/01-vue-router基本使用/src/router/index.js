import Vue from "vue";
import Router from "vue-router";

// 直接引用
// import Home from "../components/Home.vue";
// import About from "../components/About.vue";
// import User from "../components/User.vue";

// 使用懒加载
const Home = () => import("../components/Home.vue");
const About = () => import("../components/About.vue");
const User = () => import("../components/User.vue");
const HomeNews = () => import("../components/HomeNews.vue");
const HomeMessage = () => import("../components/HomeMessage.vue");
const Profile = () => import("../components/Profile.vue");

Vue.use(Router);

const routerPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error);
};

const routes = [
  { // 添加默认路由
    path: "/",
    redirect: "/home"
  },
  {
    path: "/home",
    component: Home,
    children: [ // 配置子组件和子路径的映射关系
      {
        path: "",
        redirect: "news"
      },
      {
        path: "news",
        component: HomeNews,
        meta: {
          title: "首页-新闻"
        }
      },
      {
        path: "message",
        component: HomeMessage,
        meta: {
          title: "首页-消息"
        }
      }
    ],
    meta: {
      title: "首页"
    }
  },
  {
    path: "/about",
    component: About,
    meta: {
      title: "关于"
    },
    // 路由独享守卫
    beforeEnter: (to, from, next) => {
      // console.log('about beforeEnter');
      next();
    }
  },
  { // 添加动态路由
    path: "/user/:id",
    component: User,
    meta: {
      title: "用户"
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      title: "我的"
    }
  }
];

const router = new Router({
  routes,
  mode: "history"
});

// 全局守卫-前置守卫(guard)
router.beforeEach((to, from, next) => {
  document.title = to.meta.title;
  // console.log("全局 beforeEach");
  next();
});
// 全局守卫-后置钩子(hook)
router.afterEach((to, from) => {
  // console.log("全局 afterEach");
});

export default router;



