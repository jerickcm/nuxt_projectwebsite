import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  BlogCard: () => import('../..\\components\\BlogCard.vue' /* webpackChunkName: "components/blog-card" */).then(c => wrapFunctional(c.default || c)),
  Dashboard: () => import('../..\\components\\Dashboard.vue' /* webpackChunkName: "components/dashboard" */).then(c => wrapFunctional(c.default || c)),
  DashTitle: () => import('../..\\components\\DashTitle.vue' /* webpackChunkName: "components/dash-title" */).then(c => wrapFunctional(c.default || c)),
  EventCard: () => import('../..\\components\\EventCard.vue' /* webpackChunkName: "components/event-card" */).then(c => wrapFunctional(c.default || c)),
  Nav: () => import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c)),
  NewsCard: () => import('../..\\components\\NewsCard.vue' /* webpackChunkName: "components/news-card" */).then(c => wrapFunctional(c.default || c)),
  PostCard: () => import('../..\\components\\PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c)),
  Template: () => import('../..\\components\\Template.vue' /* webpackChunkName: "components/template" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
