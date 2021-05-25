import Vue from 'vue'
import VueRouter from 'vue-router'
import MovieDetails from "@/views/MovieDetails";
import ProductItem from "@/views/ProductItem";
import ShoppingCart from "@/views/ShoppingCart";
import Home from "@/views/Home";
import Catalog from "@/views/Catalog";
import ProductsCatalog from "@/views/ProductsCatalog";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movie-details',
    name: 'Movie Details',
    component: MovieDetails
  },
  {
    path: '/product-item/:movie',
    name: 'Single Movie',
    component: ProductItem
  },
  {
    path: '/shop-cart',
    name: 'Shopping Cart',
    component: ShoppingCart
  },
  {
    path:'/catalog',
    name:'Catalog',
    component: Catalog
  },
  {
    path:'/products-catalog',
    name:'Product catalog',
    component: ProductsCatalog
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
