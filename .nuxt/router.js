import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _006f1191 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _51964053 = () => interopDefault(import('..\\pages\\admin.vue' /* webpackChunkName: "pages/admin" */))
const _7cce7218 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _2c7c2e17 = () => interopDefault(import('..\\pages\\contact-us.vue' /* webpackChunkName: "pages/contact-us" */))
const _6f8d2718 = () => interopDefault(import('..\\pages\\dashboard.vue' /* webpackChunkName: "pages/dashboard" */))
const _2c62e126 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _c5d73294 = () => interopDefault(import('..\\pages\\logout.vue' /* webpackChunkName: "pages/logout" */))
const _c98599ba = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _6f437336 = () => interopDefault(import('..\\pages\\post\\index.vue' /* webpackChunkName: "pages/post/index" */))
const _04805a02 = () => interopDefault(import('..\\pages\\quotes\\index.vue' /* webpackChunkName: "pages/quotes/index" */))
const _1af5b64f = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _33705b38 = () => interopDefault(import('..\\pages\\technology.vue' /* webpackChunkName: "pages/technology" */))
const _469390a6 = () => interopDefault(import('..\\pages\\template.vue' /* webpackChunkName: "pages/template" */))
const _c5b8b284 = () => interopDefault(import('..\\pages\\test.vue' /* webpackChunkName: "pages/test" */))
const _001b74d9 = () => interopDefault(import('..\\pages\\tutorials.vue' /* webpackChunkName: "pages/tutorials" */))
const _6590c68c = () => interopDefault(import('..\\pages\\users.vue' /* webpackChunkName: "pages/users" */))
const _fffbc610 = () => interopDefault(import('..\\pages\\world-reminders\\index.vue' /* webpackChunkName: "pages/world-reminders/index" */))
const _cd973b6c = () => interopDefault(import('..\\pages\\blog\\create.vue' /* webpackChunkName: "pages/blog/create" */))
const _4779fb9a = () => interopDefault(import('..\\pages\\blog\\manage.vue' /* webpackChunkName: "pages/blog/manage" */))
const _3e7eb4f3 = () => interopDefault(import('..\\pages\\blog\\view.vue' /* webpackChunkName: "pages/blog/view" */))
const _14368b8c = () => interopDefault(import('..\\pages\\dash\\create.vue' /* webpackChunkName: "pages/dash/create" */))
const _764448e3 = () => interopDefault(import('..\\pages\\dash\\view.vue' /* webpackChunkName: "pages/dash/view" */))
const _17c5080a = () => interopDefault(import('..\\pages\\news\\create.vue' /* webpackChunkName: "pages/news/create" */))
const _372c1be4 = () => interopDefault(import('..\\pages\\news\\manage.vue' /* webpackChunkName: "pages/news/manage" */))
const _f0d6f238 = () => interopDefault(import('..\\pages\\news\\view.vue' /* webpackChunkName: "pages/news/view" */))
const _be418370 = () => interopDefault(import('..\\pages\\post\\create.vue' /* webpackChunkName: "pages/post/create" */))
const _3824439e = () => interopDefault(import('..\\pages\\post\\manage.vue' /* webpackChunkName: "pages/post/manage" */))
const _128c7871 = () => interopDefault(import('..\\pages\\post\\view.vue' /* webpackChunkName: "pages/post/view" */))
const _3c2250c2 = () => interopDefault(import('..\\pages\\quotes\\create.vue' /* webpackChunkName: "pages/quotes/create" */))
const _24fd7788 = () => interopDefault(import('..\\pages\\quotes\\manage.vue' /* webpackChunkName: "pages/quotes/manage" */))
const _76df08f0 = () => interopDefault(import('..\\pages\\quotes\\view.vue' /* webpackChunkName: "pages/quotes/view" */))
const _b0146674 = () => interopDefault(import('..\\pages\\world-reminders\\create.vue' /* webpackChunkName: "pages/world-reminders/create" */))
const _29f726a2 = () => interopDefault(import('..\\pages\\world-reminders\\manage.vue' /* webpackChunkName: "pages/world-reminders/manage" */))
const _0b5ee322 = () => interopDefault(import('..\\pages\\world-reminders\\view.vue' /* webpackChunkName: "pages/world-reminders/view" */))
const _2026ec56 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _006f1191,
    name: "about"
  }, {
    path: "/admin",
    component: _51964053,
    name: "admin"
  }, {
    path: "/blog",
    component: _7cce7218,
    name: "blog"
  }, {
    path: "/contact-us",
    component: _2c7c2e17,
    name: "contact-us"
  }, {
    path: "/dashboard",
    component: _6f8d2718,
    name: "dashboard"
  }, {
    path: "/login",
    component: _2c62e126,
    name: "login"
  }, {
    path: "/logout",
    component: _c5d73294,
    name: "logout"
  }, {
    path: "/news",
    component: _c98599ba,
    name: "news"
  }, {
    path: "/post",
    component: _6f437336,
    name: "post"
  }, {
    path: "/quotes",
    component: _04805a02,
    name: "quotes"
  }, {
    path: "/register",
    component: _1af5b64f,
    name: "register"
  }, {
    path: "/technology",
    component: _33705b38,
    name: "technology"
  }, {
    path: "/template",
    component: _469390a6,
    name: "template"
  }, {
    path: "/test",
    component: _c5b8b284,
    name: "test"
  }, {
    path: "/tutorials",
    component: _001b74d9,
    name: "tutorials"
  }, {
    path: "/users",
    component: _6590c68c,
    name: "users"
  }, {
    path: "/world-reminders",
    component: _fffbc610,
    name: "world-reminders"
  }, {
    path: "/blog/create",
    component: _cd973b6c,
    name: "blog-create"
  }, {
    path: "/blog/manage",
    component: _4779fb9a,
    name: "blog-manage"
  }, {
    path: "/blog/view",
    component: _3e7eb4f3,
    name: "blog-view"
  }, {
    path: "/dash/create",
    component: _14368b8c,
    name: "dash-create"
  }, {
    path: "/dash/view",
    component: _764448e3,
    name: "dash-view"
  }, {
    path: "/news/create",
    component: _17c5080a,
    name: "news-create"
  }, {
    path: "/news/manage",
    component: _372c1be4,
    name: "news-manage"
  }, {
    path: "/news/view",
    component: _f0d6f238,
    name: "news-view"
  }, {
    path: "/post/create",
    component: _be418370,
    name: "post-create"
  }, {
    path: "/post/manage",
    component: _3824439e,
    name: "post-manage"
  }, {
    path: "/post/view",
    component: _128c7871,
    name: "post-view"
  }, {
    path: "/quotes/create",
    component: _3c2250c2,
    name: "quotes-create"
  }, {
    path: "/quotes/manage",
    component: _24fd7788,
    name: "quotes-manage"
  }, {
    path: "/quotes/view",
    component: _76df08f0,
    name: "quotes-view"
  }, {
    path: "/world-reminders/create",
    component: _b0146674,
    name: "world-reminders-create"
  }, {
    path: "/world-reminders/manage",
    component: _29f726a2,
    name: "world-reminders-manage"
  }, {
    path: "/world-reminders/view",
    component: _0b5ee322,
    name: "world-reminders-view"
  }, {
    path: "/",
    component: _2026ec56,
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
