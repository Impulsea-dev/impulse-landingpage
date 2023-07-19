import auth from "@/middleware/auth";
const routes = [
  {
    path: "/login",
    name: "login",
    component: () => import("@/views/login.vue"),
  },
  {
    path: "/reset",
    name: "reset",
    component: () => import("@/views/reset.vue"),
  },
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
      {
        path: "/aboutus",
        name: "aboutus",
        component: () => import("@/views/aboutus.vue"),
      },
      {
        path: "/whatwedoservices",
        name: "whatwedoservices",
        component: () => import("@/views/whatwedoserv.vue"),
      },
      {
        path: "/whatwedotelco",
        name: "whatwedotelco",
        component: () => import("@/views/whatwedotelco.vue"),
      },
      {
        path: "/casestudies",
        name: "casestudies",
        component: () => import("@/views/casestudies.vue"),
      },
      {
        path: "/viewcases",
        name: "viewcases",
        component: () => import("@/views/viewcases.vue"),
      },
    
      {
        path: "/blog",
        name: "blog",
        component: () => import("@/views/newsandblog.vue"),
      },
      {
        path: "/blog/:name",
        name: "blogdetails",
        props: true,
        component: () => import("@/views/blogdetails.vue"),
      },
      {
        path: "/boostone",
        name: "boostone",
        component: () => import("@/views/boost1.vue"),
      },
      {
        path: "/boosttwo",
        name: "boosttwo",
        component: () => import("@/views/boost2.vue"),
      },
      {
        path: "/contactus",
        name: "contactus",
        component: () => import("@/views/contactus.vue"),
      },
      {
        path: "/services",
        name: "services",
        component: () => import("@/views/Services.vue"),
      },
      {
        path: "/telemetrics",
        name: "telemetrics",
        component: () => import("@/views/Telemetrics.vue"),
      },
      {
        path: "/product",
        name: "product",
        component: () => import("@/views/product.vue"),
      },
      {
        path: "/boost",
        name: "boost",
        component: () => import("@/views/ImpulseBoost.vue"),
      },
      {
        path: "/saveblog",
        name: "saveblog",
        meta: { middleware: [auth] },
        component: () => import("@/views/SaveBlog.vue"),
      },
    ],
  },
];

export default routes;
