import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AdminNav: () => import('../..\\components\\AdminNav.vue' /* webpackChunkName: "components/admin-nav" */).then(c => wrapFunctional(c.default || c)),
  BlogCard: () => import('../..\\components\\BlogCard.vue' /* webpackChunkName: "components/blog-card" */).then(c => wrapFunctional(c.default || c)),
  BlogWidget: () => import('../..\\components\\BlogWidget.vue' /* webpackChunkName: "components/blog-widget" */).then(c => wrapFunctional(c.default || c)),
  Dashboard: () => import('../..\\components\\Dashboard.vue' /* webpackChunkName: "components/dashboard" */).then(c => wrapFunctional(c.default || c)),
  DashTitle: () => import('../..\\components\\DashTitle.vue' /* webpackChunkName: "components/dash-title" */).then(c => wrapFunctional(c.default || c)),
  EventCard: () => import('../..\\components\\EventCard.vue' /* webpackChunkName: "components/event-card" */).then(c => wrapFunctional(c.default || c)),
  FooterNav: () => import('../..\\components\\FooterNav.vue' /* webpackChunkName: "components/footer-nav" */).then(c => wrapFunctional(c.default || c)),
  Nav: () => import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c)),
  NewsCard: () => import('../..\\components\\NewsCard.vue' /* webpackChunkName: "components/news-card" */).then(c => wrapFunctional(c.default || c)),
  PostCard: () => import('../..\\components\\PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c)),
  QuotesCard: () => import('../..\\components\\QuotesCard.vue' /* webpackChunkName: "components/quotes-card" */).then(c => wrapFunctional(c.default || c)),
  QuoteWidget: () => import('../..\\components\\QuoteWidget.vue' /* webpackChunkName: "components/quote-widget" */).then(c => wrapFunctional(c.default || c)),
  Search: () => import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c)),
  Template: () => import('../..\\components\\Template.vue' /* webpackChunkName: "components/template" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c)),
  WorldRemindersCard: () => import('../..\\components\\WorldRemindersCard.vue' /* webpackChunkName: "components/world-reminders-card" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
