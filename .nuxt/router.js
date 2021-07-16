import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _006f1191 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _5594be62 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _7cce7218 = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _7517826a = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _2c62e126 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _86f55c7a = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _5db2ad96 = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _1af5b64f = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _8bab091e = () => interopDefault(import('..\\pages\\terms-of-service.vue' /* webpackChunkName: "pages/terms-of-service" */))
const _fffbc610 = () => interopDefault(import('..\\pages\\world-reminders\\index.vue' /* webpackChunkName: "pages/world-reminders/index" */))
const _cd973b6c = () => interopDefault(import('..\\pages\\blog\\create.vue' /* webpackChunkName: "pages/blog/create" */))
const _4779fb9a = () => interopDefault(import('..\\pages\\blog\\manage.vue' /* webpackChunkName: "pages/blog/manage" */))
const _3e7eb4f3 = () => interopDefault(import('..\\pages\\blog\\view.vue' /* webpackChunkName: "pages/blog/view" */))
const _14368b8c = () => interopDefault(import('..\\pages\\dash\\create.vue' /* webpackChunkName: "pages/dash/create" */))
const _764448e3 = () => interopDefault(import('..\\pages\\dash\\view.vue' /* webpackChunkName: "pages/dash/view" */))
const _17c5080a = () => interopDefault(import('..\\pages\\news\\create.vue' /* webpackChunkName: "pages/news/create" */))
const _372c1be4 = () => interopDefault(import('..\\pages\\news\\manage.vue' /* webpackChunkName: "pages/news/manage" */))
const _be418370 = () => interopDefault(import('..\\pages\\post\\create.vue' /* webpackChunkName: "pages/post/create" */))
const _3824439e = () => interopDefault(import('..\\pages\\post\\manage.vue' /* webpackChunkName: "pages/post/manage" */))
const _46b0ff77 = () => interopDefault(import('..\\pages\\profile\\edit.vue' /* webpackChunkName: "pages/profile/edit" */))
const _3c2250c2 = () => interopDefault(import('..\\pages\\quotes\\create.vue' /* webpackChunkName: "pages/quotes/create" */))
const _24fd7788 = () => interopDefault(import('..\\pages\\quotes\\manage.vue' /* webpackChunkName: "pages/quotes/manage" */))
const _76df08f0 = () => interopDefault(import('..\\pages\\quotes\\view.vue' /* webpackChunkName: "pages/quotes/view" */))
const _b0146674 = () => interopDefault(import('..\\pages\\world-reminders\\create.vue' /* webpackChunkName: "pages/world-reminders/create" */))
const _29f726a2 = () => interopDefault(import('..\\pages\\world-reminders\\manage.vue' /* webpackChunkName: "pages/world-reminders/manage" */))
const _256163b1 = () => interopDefault(import('..\\pages\\admin\\blog\\create.vue' /* webpackChunkName: "pages/admin/blog/create" */))
const _6870039a = () => interopDefault(import('..\\pages\\admin\\blog\\manage.vue' /* webpackChunkName: "pages/admin/blog/manage" */))
const _ff6b053c = () => interopDefault(import('..\\pages\\admin\\news\\create.vue' /* webpackChunkName: "pages/admin/news/create" */))
const _794dc56a = () => interopDefault(import('..\\pages\\admin\\news\\manage.vue' /* webpackChunkName: "pages/admin/news/manage" */))
const _2d0c3faf = () => interopDefault(import('..\\pages\\admin\\post\\create.vue' /* webpackChunkName: "pages/admin/post/create" */))
const _701adf98 = () => interopDefault(import('..\\pages\\admin\\post\\manage.vue' /* webpackChunkName: "pages/admin/post/manage" */))
const _16e11b46 = () => interopDefault(import('..\\pages\\admin\\quotes\\create.vue' /* webpackChunkName: "pages/admin/quotes/create" */))
const _59efbb2f = () => interopDefault(import('..\\pages\\admin\\quotes\\manage.vue' /* webpackChunkName: "pages/admin/quotes/manage" */))
const _41f72c81 = () => interopDefault(import('..\\pages\\admin\\users\\create.vue' /* webpackChunkName: "pages/admin/users/create" */))
const _04d796f4 = () => interopDefault(import('..\\pages\\admin\\users\\logs.vue' /* webpackChunkName: "pages/admin/users/logs" */))
const _f5f4672c = () => interopDefault(import('..\\pages\\admin\\users\\manage.vue' /* webpackChunkName: "pages/admin/users/manage" */))
const _77c7b4ff = () => interopDefault(import('..\\pages\\admin\\world-reminders\\create.vue' /* webpackChunkName: "pages/admin/world-reminders/create" */))
const _8a535630 = () => interopDefault(import('..\\pages\\admin\\world-reminders\\manage.vue' /* webpackChunkName: "pages/admin/world-reminders/manage" */))
const _8549393a = () => interopDefault(import('..\\pages\\blog\\tags\\_id.vue' /* webpackChunkName: "pages/blog/tags/_id" */))
const _12581348 = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _09b3a24b = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _573e69c4 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _063a0540 = () => interopDefault(import('..\\pages\\world-reminders\\_id.vue' /* webpackChunkName: "pages/world-reminders/_id" */))
const _2026ec56 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _2ca55429 = () => interopDefault(import('..\\pages\\_username\\index.vue' /* webpackChunkName: "pages/_username/index" */))
const _32cb2ee8 = () => interopDefault(import('..\\pages\\_username\\following.vue' /* webpackChunkName: "pages/_username/following" */))
const _a561cb10 = () => interopDefault(import('..\\pages\\_username\\skel.vue' /* webpackChunkName: "pages/_username/skel" */))

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
    component: _5594be62,
    name: "admin"
  }, {
    path: "/blog",
    component: _7cce7218,
    name: "blog"
  }, {
    path: "/dashboard",
    component: _7517826a,
    name: "dashboard"
  }, {
    path: "/login",
    component: _2c62e126,
    name: "login"
  }, {
    path: "/privacy-policy",
    component: _86f55c7a,
    name: "privacy-policy"
  }, {
    path: "/profile",
    component: _5db2ad96,
    name: "profile"
  }, {
    path: "/register",
    component: _1af5b64f,
    name: "register"
  }, {
    path: "/terms-of-service",
    component: _8bab091e,
    name: "terms-of-service"
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
    path: "/post/create",
    component: _be418370,
    name: "post-create"
  }, {
    path: "/post/manage",
    component: _3824439e,
    name: "post-manage"
  }, {
    path: "/profile/edit",
    component: _46b0ff77,
    name: "profile-edit"
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
    path: "/admin/blog/create",
    component: _256163b1,
    name: "admin-blog-create"
  }, {
    path: "/admin/blog/manage",
    component: _6870039a,
    name: "admin-blog-manage"
  }, {
    path: "/admin/news/create",
    component: _ff6b053c,
    name: "admin-news-create"
  }, {
    path: "/admin/news/manage",
    component: _794dc56a,
    name: "admin-news-manage"
  }, {
    path: "/admin/post/create",
    component: _2d0c3faf,
    name: "admin-post-create"
  }, {
    path: "/admin/post/manage",
    component: _701adf98,
    name: "admin-post-manage"
  }, {
    path: "/admin/quotes/create",
    component: _16e11b46,
    name: "admin-quotes-create"
  }, {
    path: "/admin/quotes/manage",
    component: _59efbb2f,
    name: "admin-quotes-manage"
  }, {
    path: "/admin/users/create",
    component: _41f72c81,
    name: "admin-users-create"
  }, {
    path: "/admin/users/logs",
    component: _04d796f4,
    name: "admin-users-logs"
  }, {
    path: "/admin/users/manage",
    component: _f5f4672c,
    name: "admin-users-manage"
  }, {
    path: "/admin/world-reminders/create",
    component: _77c7b4ff,
    name: "admin-world-reminders-create"
  }, {
    path: "/admin/world-reminders/manage",
    component: _8a535630,
    name: "admin-world-reminders-manage"
  }, {
    path: "/blog/tags/:id?",
    component: _8549393a,
    name: "blog-tags-id"
  }, {
    path: "/blog/:id",
    component: _12581348,
    name: "blog-id"
  }, {
    path: "/news/:id?",
    component: _09b3a24b,
    name: "news-id"
  }, {
    path: "/post/:id?",
    component: _573e69c4,
    name: "post-id"
  }, {
    path: "/world-reminders/:id?",
    component: _063a0540,
    name: "world-reminders-id"
  }, {
    path: "/",
    component: _2026ec56,
    name: "index"
  }, {
    path: "/:username",
    component: _2ca55429,
    name: "username"
  }, {
    path: "/:username/following",
    component: _32cb2ee8,
    name: "username-following"
  }, {
    path: "/:username/skel",
    component: _a561cb10,
    name: "username-skel"
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
