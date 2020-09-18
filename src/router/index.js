import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    alias: ['/inicio', '/home', '/portada'],
  },
  {
    path: "/administrador",
    name: "Administrador",
    component: () =>
      import(/* webpackChunkName: "Administrador" */ "../components/Administrador.vue"),
      children: [{
        path: "simple",
        name: "Simple",
        component: () =>
        import(/* webpackChunkName: "simple" */ "../components/Simple.vue"),
      },
      {
        path: "avanzado",
        name: "Avanzado",
        component: () =>
        import(/* webpackChunkName: "avanzado" */ "../components/Avanzado.vue"),
      },
    ],
  },
  {
    path: "/sobremi",
    name: "Sobremi",
    alias: ['/acerca'],
    component: () =>
      import(/* webpackChunkName: "sobre mi" */ "../views/Sobremi.vue"),
  },
  {
    path: "/contacto",
    name: "Contacto",
    alias:['/contactame'], 
    component: () =>
      import(/* webpackChunkName: "contacto" */ "../views/Contacto.vue"),
  },
  {
    path: "/post/:entrada",
    name: "Post",
    component: () =>
      import(/* webpackChunkName: "post" */ "../views/Post.vue"),
    children: [
      {
        path: "comentarios",
        name: "Comentarios",
        component: () =>
          import(
            /* webpackChunkName: "comentarios" */ "../components/Comentarios.vue"
          ),
      },
    ],
  },//final de post
  {
    //pagina not found 404
    path: "*",
    name: "Not_found",
    component: () =>
      import(/* webpackChunkName: "not found" */ "../components/NotFound.vue"),
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
