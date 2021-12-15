import { createRouter, createWebHistory } from "vue-router";

import Home from "@/modules/slifer/pages/Home.vue";
import buttons from "@/modules/slifer/pages/buttons.vue";
import notifications from "@/modules/slifer/pages/notifications.vue";
import cards from "@/modules/slifer/pages/cards.vue";
import forms from "@/modules/slifer/pages/forms.vue";
import tables from "@/modules/slifer/pages/tables.vue";
import prints from "@/modules/slifer/pages/prints.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/buttons",
    name: "buttons",
    component: buttons,
  },
  {
    path: "/notifications",
    name: "notifications",
    component: notifications,
  },
  {
    path: "/cards",
    name: "cards",
    component: cards,
  },
  {
    path: "/forms",
    name: "forms",
    component: forms,
  },
  {
    path: "/tables",
    name: "tables",
    component: tables,
  },
  {
    path: "/prints",
    name: "prints",
    component: prints,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
