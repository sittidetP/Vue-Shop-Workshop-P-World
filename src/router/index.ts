import DetailView from "../views/DetailView.vue";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CheckoutView from "@/views/CheckoutView.vue";
import SuccessView from "@/views/SuccessView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/detail/:id",
      name: "detail",
      component: DetailView,
    },
    {
      path: "/checkout/:id",
      name: "checkout",
      component: CheckoutView,
    },
    {
      path: "/success",
      name: "success",
      component: SuccessView,
    },
  ],
});

export default router;
