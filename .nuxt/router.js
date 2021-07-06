import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _55dd2d9b = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _508874f6 = () => interopDefault(import('..\\pages\\admin\\index.vue' /* webpackChunkName: "pages/admin/index" */))
const _0c00337e = () => interopDefault(import('..\\pages\\blog\\index.vue' /* webpackChunkName: "pages/blog/index" */))
const _6c1f47c0 = () => interopDefault(import('..\\pages\\dashboard\\index.vue' /* webpackChunkName: "pages/dashboard/index" */))
const _3f3cab77 = () => interopDefault(import('..\\pages\\login.vue' /* webpackChunkName: "pages/login" */))
const _34b6c0a6 = () => interopDefault(import('..\\pages\\news\\index.vue' /* webpackChunkName: "pages/news/index" */))
const _8caa4080 = () => interopDefault(import('..\\pages\\post\\index.vue' /* webpackChunkName: "pages/post/index" */))
const _361520f9 = () => interopDefault(import('..\\pages\\privacy-policy.vue' /* webpackChunkName: "pages/privacy-policy" */))
const _4ab6786b = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _4bfe4509 = () => interopDefault(import('..\\pages\\quotes\\index.vue' /* webpackChunkName: "pages/quotes/index" */))
const _98f2b3f6 = () => interopDefault(import('..\\pages\\register.vue' /* webpackChunkName: "pages/register" */))
const _0f035527 = () => interopDefault(import('..\\pages\\terms-of-service.vue' /* webpackChunkName: "pages/terms-of-service" */))
const _d27b53a4 = () => interopDefault(import('..\\pages\\world-reminders\\index.vue' /* webpackChunkName: "pages/world-reminders/index" */))
const _c88af200 = () => interopDefault(import('..\\pages\\blog\\create.vue' /* webpackChunkName: "pages/blog/create" */))
const _426db22e = () => interopDefault(import('..\\pages\\blog\\manage.vue' /* webpackChunkName: "pages/blog/manage" */))
const _12dae1ae = () => interopDefault(import('..\\pages\\blog\\view.vue' /* webpackChunkName: "pages/blog/view" */))
const _0f2a4220 = () => interopDefault(import('..\\pages\\dash\\create.vue' /* webpackChunkName: "pages/dash/create" */))
const _2e582319 = () => interopDefault(import('..\\pages\\dash\\view.vue' /* webpackChunkName: "pages/dash/view" */))
const _12b8be9e = () => interopDefault(import('..\\pages\\news\\create.vue' /* webpackChunkName: "pages/news/create" */))
const _39b2409a = () => interopDefault(import('..\\pages\\news\\manage.vue' /* webpackChunkName: "pages/news/manage" */))
const _b9353a04 = () => interopDefault(import('..\\pages\\post\\create.vue' /* webpackChunkName: "pages/post/create" */))
const _3317fa32 = () => interopDefault(import('..\\pages\\post\\manage.vue' /* webpackChunkName: "pages/post/manage" */))
const _d6211cfe = () => interopDefault(import('..\\pages\\profile\\edit.vue' /* webpackChunkName: "pages/profile/edit" */))
const _5b7ea6d5 = () => interopDefault(import('..\\pages\\quotes\\create.vue' /* webpackChunkName: "pages/quotes/create" */))
const _c2e57284 = () => interopDefault(import('..\\pages\\quotes\\manage.vue' /* webpackChunkName: "pages/quotes/manage" */))
const _71d2bf84 = () => interopDefault(import('..\\pages\\quotes\\view.vue' /* webpackChunkName: "pages/quotes/view" */))
const _693cba50 = () => interopDefault(import('..\\pages\\world-reminders\\create.vue' /* webpackChunkName: "pages/world-reminders/create" */))
const _a7694b8e = () => interopDefault(import('..\\pages\\world-reminders\\manage.vue' /* webpackChunkName: "pages/world-reminders/manage" */))
const _36feb38a = () => interopDefault(import('..\\pages\\admin\\blog\\create.vue' /* webpackChunkName: "pages/admin/blog/create" */))
const _278f4624 = () => interopDefault(import('..\\pages\\admin\\blog\\manage.vue' /* webpackChunkName: "pages/admin/blog/manage" */))
const _3f69bfec = () => interopDefault(import('..\\pages\\admin\\news\\create.vue' /* webpackChunkName: "pages/admin/news/create" */))
const _fb0f4056 = () => interopDefault(import('..\\pages\\admin\\news\\manage.vue' /* webpackChunkName: "pages/admin/news/manage" */))
const _27a8fb8e = () => interopDefault(import('..\\pages\\admin\\post\\create.vue' /* webpackChunkName: "pages/admin/post/create" */))
const _2f3a2222 = () => interopDefault(import('..\\pages\\admin\\post\\manage.vue' /* webpackChunkName: "pages/admin/post/manage" */))
const _e98c3960 = () => interopDefault(import('..\\pages\\admin\\quotes\\create.vue' /* webpackChunkName: "pages/admin/quotes/create" */))
const _636ef98e = () => interopDefault(import('..\\pages\\admin\\quotes\\manage.vue' /* webpackChunkName: "pages/admin/quotes/manage" */))
const _66c03b37 = () => interopDefault(import('..\\pages\\admin\\users\\create.vue' /* webpackChunkName: "pages/admin/users/create" */))
const _f23e49ac = () => interopDefault(import('..\\pages\\admin\\users\\logs.vue' /* webpackChunkName: "pages/admin/users/logs" */))
const _ac6249c0 = () => interopDefault(import('..\\pages\\admin\\users\\manage.vue' /* webpackChunkName: "pages/admin/users/manage" */))
const _51ae5835 = () => interopDefault(import('..\\pages\\admin\\world-reminders\\create.vue' /* webpackChunkName: "pages/admin/world-reminders/create" */))
const _d6860fc4 = () => interopDefault(import('..\\pages\\admin\\world-reminders\\manage.vue' /* webpackChunkName: "pages/admin/world-reminders/manage" */))
const _75c57aed = () => interopDefault(import('..\\pages\\blog\\tags\\_id.vue' /* webpackChunkName: "pages/blog/tags/_id" */))
const _7060fd66 = () => interopDefault(import('..\\pages\\blog\\_id.vue' /* webpackChunkName: "pages/blog/_id" */))
const _f97ead56 = () => interopDefault(import('..\\pages\\news\\_id.vue' /* webpackChunkName: "pages/news/_id" */))
const _4dedd228 = () => interopDefault(import('..\\pages\\post\\_id.vue' /* webpackChunkName: "pages/post/_id" */))
const _21ac0c16 = () => interopDefault(import('..\\pages\\world-reminders\\_id.vue' /* webpackChunkName: "pages/world-reminders/_id" */))
const _75950860 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _fd03a442 = () => interopDefault(import('..\\pages\\_username\\index.vue' /* webpackChunkName: "pages/_username/index" */))
const _57943d9e = () => interopDefault(import('..\\pages\\_username\\following.vue' /* webpackChunkName: "pages/_username/following" */))
const _65b93202 = () => interopDefault(import('..\\pages\\_username\\skel.vue' /* webpackChunkName: "pages/_username/skel" */))

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
    component: _508874f6,
    name: "admin"
  }, {
    path: "/blog",
    component: _0c00337e,
    name: "blog"
  }, {
    path: "/dashboard",
    component: _6c1f47c0,
    name: "dashboard"
  }, {
    path: "/login",
    component: _3f3cab77,
    name: "login"
  }, {
    path: "/news",
    component: _34b6c0a6,
    name: "news"
  }, {
    path: "/post",
    component: _8caa4080,
    name: "post"
  }, {
    path: "/privacy-policy",
    component: _361520f9,
    name: "privacy-policy"
  }, {
    path: "/profile",
    component: _4ab6786b,
    name: "profile"
  }, {
    path: "/quotes",
    component: _4bfe4509,
    name: "quotes"
  }, {
    path: "/register",
    component: _98f2b3f6,
    name: "register"
  }, {
    path: "/terms-of-service",
    component: _0f035527,
    name: "terms-of-service"
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
    path: "/post/create",
    component: _b9353a04,
    name: "post-create"
  }, {
    path: "/post/manage",
    component: _3317fa32,
    name: "post-manage"
  }, {
    path: "/profile/edit",
    component: _d6211cfe,
    name: "profile-edit"
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
    path: "/admin/blog/create",
    component: _36feb38a,
    name: "admin-blog-create"
  }, {
    path: "/admin/blog/manage",
    component: _278f4624,
    name: "admin-blog-manage"
  }, {
    path: "/admin/news/create",
    component: _3f69bfec,
    name: "admin-news-create"
  }, {
    path: "/admin/news/manage",
    component: _fb0f4056,
    name: "admin-news-manage"
  }, {
    path: "/admin/post/create",
    component: _27a8fb8e,
    name: "admin-post-create"
  }, {
    path: "/admin/post/manage",
    component: _2f3a2222,
    name: "admin-post-manage"
  }, {
    path: "/admin/quotes/create",
    component: _e98c3960,
    name: "admin-quotes-create"
  }, {
    path: "/admin/quotes/manage",
    component: _636ef98e,
    name: "admin-quotes-manage"
  }, {
    path: "/admin/users/create",
    component: _66c03b37,
    name: "admin-users-create"
  }, {
    path: "/admin/users/logs",
    component: _f23e49ac,
    name: "admin-users-logs"
  }, {
    path: "/admin/users/manage",
    component: _ac6249c0,
    name: "admin-users-manage"
  }, {
    path: "/admin/world-reminders/create",
    component: _51ae5835,
    name: "admin-world-reminders-create"
  }, {
    path: "/admin/world-reminders/manage",
    component: _d6860fc4,
    name: "admin-world-reminders-manage"
  }, {
    path: "/blog/tags/:id?",
    component: _75c57aed,
    name: "blog-tags-id"
  }, {
    path: "/blog/:id",
    component: _7060fd66,
    name: "blog-id"
  }, {
    path: "/news/:id",
    component: _f97ead56,
    name: "news-id"
  }, {
    path: "/post/:id",
    component: _4dedd228,
    name: "post-id"
  }, {
    path: "/world-reminders/:id?",
    component: _21ac0c16,
    name: "world-reminders-id"
  }, {
    path: "/",
    component: _75950860,
    name: "index"
  }, {
    path: "/:username",
    component: _fd03a442,
    name: "username"
  }, {
    path: "/:username/following",
    component: _57943d9e,
    name: "username-following"
  }, {
    path: "/:username/skel",
    component: _65b93202,
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
