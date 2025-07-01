import { createWebHistory, createRouter } from "vue-router";
import List from "./components/List.vue";
import Home from "./components/Home.vue";
import Detail from "./components/Detail.vue";

const routes = [
  {
    path: "/",
    component: Home,
  },
  {
    path: "/list",
    component: List,
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
  },
  {
    path: "/:anything(.*)", // 404 페이지는 가장 마지막에
    component: Home,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 