const routes = [
  {
    path: "/",
    name: "Layout",
    redirect: "/",
    component: () => import("@/Layout/index.vue"),
    children: [
      {
        path: "/",
        name: "home",
        component: () => import("@/views/index.vue"),
      },
    ],
  },
];

export default routes;
