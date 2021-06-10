import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55dd2d9b = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _b1f74746 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _c86e76f8 = () => interopDefault(import('..\\pages\\blog.vue' /* webpackChunkName: "pages/blog" */))
const _36dfef66 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _2dcba3bc = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _71c2df5c = () => interopDefault(import('..\\pages\\index84.vue' /* webpackChunkName: "pages/index84" */))
const _3f3cab77 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _152c6828 = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages/logout" */))
const _165b1f35 = () => interopDefault(import('..\\pages\\news.vue' /* webpackChunkName: "pages/news" */))
const _1e24f2e1 = () => interopDefault(import('..\\pages\\posts.vue' /* webpackChunkName: "pages/posts" */))
const _7a06c973 = () => interopDefault(import('..\\pages\\posts_view.vue' /* webpackChunkName: "pages/posts_view" */))
const _98f2b3f6 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _28f79524 = () => interopDefault(import('..\\pages\\technology.vue' /* webpackChunkName: "pages/technology" */))
const _7edce174 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _79a87be3 = () => interopDefault(import('..\\pages\\tutorials.vue' /* webpackChunkName: "pages/tutorials" */))
const _8a023ad4 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages/users" */))
const _0f2a4220 = () => interopDefault(import('..\\pages\\dash\\create.vue' /* webpackChunkName: "pages/dash/create" */))
const _2e582319 = () => interopDefault(import('..\\pages\\dash\\view.vue' /* webpackChunkName: "pages/dash/view" */))
const _b9353a04 = () => interopDefault(import('..\\pages\\post\\create.vue' /* webpackChunkName: "pages/post/create" */))
const _6abf5ab2 = () => interopDefault(import('..\\pages\\post\\view.vue' /* webpackChunkName: "pages/post/view" */))
const _75950860 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _55dd2d9b,
    name: "about"
  }, {
    path: "/admin",
    component: _b1f74746,
    name: "admin"
  }, {
    path: "/blog",
    component: _c86e76f8,
    name: "blog"
  }, {
    path: "/contact-us",
    component: _36dfef66,
    name: "contact-us"
  }, {
    path: "/dashboard",
    component: _2dcba3bc,
    name: "dashboard"
  }, {
    path: "/index84",
    component: _71c2df5c,
    name: "index84"
  }, {
    path: "/login",
    component: _3f3cab77,
    name: "login"
  }, {
    path: "/logout",
    component: _152c6828,
    name: "logout"
  }, {
    path: "/news",
    component: _165b1f35,
    name: "news"
  }, {
    path: "/posts",
    component: _1e24f2e1,
    name: "posts"
  }, {
    path: "/posts_view",
    component: _7a06c973,
    name: "posts_view"
  }, {
    path: "/register",
    component: _98f2b3f6,
    name: "register"
  }, {
    path: "/technology",
    component: _28f79524,
    name: "technology"
  }, {
    path: "/test",
    component: _7edce174,
    name: "test"
  }, {
    path: "/tutorials",
    component: _79a87be3,
    name: "tutorials"
  }, {
    path: "/users",
    component: _8a023ad4,
    name: "users"
  }, {
    path: "/dash/create",
    component: _0f2a4220,
    name: "dash-create"
  }, {
    path: "/dash/view",
    component: _2e582319,
    name: "dash-view"
  }, {
    path: "/post/create",
    component: _b9353a04,
    name: "post-create"
  }, {
    path: "/post/view",
    component: _6abf5ab2,
    name: "post-view"
  }, {
    path: "/",
    component: _75950860,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
