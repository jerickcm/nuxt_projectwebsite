import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55dd2d9b = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _b1f74746 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _0c00337e = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _36dfef66 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _2dcba3bc = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _3f3cab77 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _152c6828 = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages/logout" */))
const _34b6c0a6 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _8caa4080 = () => interopDefault(import('..\\pages\\post\\index.vue' /* webpackChunkName: "pages/post/index" */))
const _4bfe4509 = () => interopDefault(import('..\\pages\\quotes\\index.vue' /* webpackChunkName: "pages/quotes/index" */))
const _98f2b3f6 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _28f79524 = () => interopDefault(import('..\\pages\\technology.vue' /* webpackChunkName: "pages/technology" */))
const _41b6ff48 = () => interopDefault(import('..\\pages\\template.vue' /* webpackChunkName: "pages/template" */))
const _7edce174 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _79a87be3 = () => interopDefault(import('..\\pages\\tutorials.vue' /* webpackChunkName: "pages/tutorials" */))
const _8a023ad4 = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages/users" */))
const _d27b53a4 = () => interopDefault(import('..\\pages\\world-reminders\\index.vue' /* webpackChunkName: "pages/world-reminders/index" */))
const _c88af200 = () => interopDefault(import('..\\pages\\blog\\create.vue' /* webpackChunkName: "pages/blog/create" */))
const _426db22e = () => interopDefault(import('..\\pages\\blog\\manage.vue' /* webpackChunkName: "pages/blog/manage" */))
const _12dae1ae = () => interopDefault(import('..\\pages\\blog\\view.vue' /* webpackChunkName: "pages/blog/view" */))
const _0f2a4220 = () => interopDefault(import('..\\pages\\dash\\create.vue' /* webpackChunkName: "pages/dash/create" */))
const _2e582319 = () => interopDefault(import('..\\pages\\dash\\view.vue' /* webpackChunkName: "pages/dash/view" */))
const _12b8be9e = () => interopDefault(import('..\\pages\\news\\create.vue' /* webpackChunkName: "pages/news/create" */))
const _39b2409a = () => interopDefault(import('..\\pages\\news\\manage.vue' /* webpackChunkName: "pages/news/manage" */))
const _3fa8611a = () => interopDefault(import('..\\pages\\news\\view.vue' /* webpackChunkName: "pages/news/view" */))
const _b9353a04 = () => interopDefault(import('..\\pages\\post\\create.vue' /* webpackChunkName: "pages/post/create" */))
const _3317fa32 = () => interopDefault(import('..\\pages\\post\\manage.vue' /* webpackChunkName: "pages/post/manage" */))
const _6abf5ab2 = () => interopDefault(import('..\\pages\\post\\view.vue' /* webpackChunkName: "pages/post/view" */))
const _5b7ea6d5 = () => interopDefault(import('..\\pages\\quotes\\create.vue' /* webpackChunkName: "pages/quotes/create" */))
const _c2e57284 = () => interopDefault(import('..\\pages\\quotes\\manage.vue' /* webpackChunkName: "pages/quotes/manage" */))
const _71d2bf84 = () => interopDefault(import('..\\pages\\quotes\\view.vue' /* webpackChunkName: "pages/quotes/view" */))
const _693cba50 = () => interopDefault(import('..\\pages\\world-reminders\\create.vue' /* webpackChunkName: "pages/world-reminders/create" */))
const _a7694b8e = () => interopDefault(import('..\\pages\\world-reminders\\manage.vue' /* webpackChunkName: "pages/world-reminders/manage" */))
const _6ea95679 = () => interopDefault(import('..\\pages\\world-reminders\\view.vue' /* webpackChunkName: "pages/world-reminders/view" */))
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
    component: _0c00337e,
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
    path: "/login",
    component: _3f3cab77,
    name: "login"
  }, {
    path: "/logout",
    component: _152c6828,
    name: "logout"
  }, {
    path: "/news",
    component: _34b6c0a6,
    name: "news"
  }, {
    path: "/post",
    component: _8caa4080,
    name: "post"
  }, {
    path: "/quotes",
    component: _4bfe4509,
    name: "quotes"
  }, {
    path: "/register",
    component: _98f2b3f6,
    name: "register"
  }, {
    path: "/technology",
    component: _28f79524,
    name: "technology"
  }, {
    path: "/template",
    component: _41b6ff48,
    name: "template"
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
    path: "/world-reminders",
    component: _d27b53a4,
    name: "world-reminders"
  }, {
    path: "/blog/create",
    component: _c88af200,
    name: "blog-create"
  }, {
    path: "/blog/manage",
    component: _426db22e,
    name: "blog-manage"
  }, {
    path: "/blog/view",
    component: _12dae1ae,
    name: "blog-view"
  }, {
    path: "/dash/create",
    component: _0f2a4220,
    name: "dash-create"
  }, {
    path: "/dash/view",
    component: _2e582319,
    name: "dash-view"
  }, {
    path: "/news/create",
    component: _12b8be9e,
    name: "news-create"
  }, {
    path: "/news/manage",
    component: _39b2409a,
    name: "news-manage"
  }, {
    path: "/news/view",
    component: _3fa8611a,
    name: "news-view"
  }, {
    path: "/post/create",
    component: _b9353a04,
    name: "post-create"
  }, {
    path: "/post/manage",
    component: _3317fa32,
    name: "post-manage"
  }, {
    path: "/post/view",
    component: _6abf5ab2,
    name: "post-view"
  }, {
    path: "/quotes/create",
    component: _5b7ea6d5,
    name: "quotes-create"
  }, {
    path: "/quotes/manage",
    component: _c2e57284,
    name: "quotes-manage"
  }, {
    path: "/quotes/view",
    component: _71d2bf84,
    name: "quotes-view"
  }, {
    path: "/world-reminders/create",
    component: _693cba50,
    name: "world-reminders-create"
  }, {
    path: "/world-reminders/manage",
    component: _a7694b8e,
    name: "world-reminders-manage"
  }, {
    path: "/world-reminders/view",
    component: _6ea95679,
    name: "world-reminders-view"
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
