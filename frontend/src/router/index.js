import AppLayout from "@/layout/AppLayout.vue";
import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: AppLayout,
      children: [
        {
          path: "/",
          name: "Dashboard",
          component: () => import("@/views/Dashboard.vue"),
        },
      ],
    },
    {
      path: "/artcredits",
      component: AppLayout,
      children: [
        {
          path: "/artcredits",
          name: "Art Credits",
          component: () => import("@/views/ArtCredits.vue"),
        },
      ],
    },
    {
      path: "/apes",
      component: AppLayout,
      children: [
        {
          path: "/apes/abioticcoral",
          name: "Abiotic Coral",
          component: () => import("@/views/pages/apes/AbioticCoral.vue"),
        },
        {
          path: "/apes/soiltypes",
          name: "Soil Types",
          component: () => import("@/views/pages/apes/SoilTypes.vue"),
        },
        {
          path: "/apes/watertesting",
          name: "Water Testing",
          component: () => import("@/views/pages/apes/WaterTest.vue"),
        },
      ],
    },
    {
      path: "/bio",
      component: AppLayout,
      children: [
        {
          path: "/bio/celldivision",
          name: "dashboard",
          component: () => import("@/views/pages/bio/CellDivision.vue"),
        },
      ],
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notfound",
      component: () => import("@/views/NotFound.vue"),
    },
  ],
});

export default router;
