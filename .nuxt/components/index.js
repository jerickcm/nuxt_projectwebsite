import { wrapFunctional } from './utils'

export { default as AdminNav } from '../..\\components\\AdminNav.vue'
export { default as BlogCard } from '../..\\components\\BlogCard.vue'
export { default as Dashboard } from '../..\\components\\Dashboard.vue'
export { default as DashTitle } from '../..\\components\\DashTitle.vue'
export { default as EventCard } from '../..\\components\\EventCard.vue'
export { default as FooterNav } from '../..\\components\\FooterNav.vue'
export { default as Nav } from '../..\\components\\Nav.vue'
export { default as NewsCard } from '../..\\components\\NewsCard.vue'
export { default as PostCard } from '../..\\components\\PostCard.vue'
export { default as QuotesCard } from '../..\\components\\QuotesCard.vue'
export { default as Search } from '../..\\components\\Search.vue'
export { default as Template } from '../..\\components\\Template.vue'
export { default as VuetifyLogo } from '../..\\components\\VuetifyLogo.vue'
export { default as WorldRemindersCard } from '../..\\components\\WorldRemindersCard.vue'

export const LazyAdminNav = import('../..\\components\\AdminNav.vue' /* webpackChunkName: "components/admin-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyBlogCard = import('../..\\components\\BlogCard.vue' /* webpackChunkName: "components/blog-card" */).then(c => wrapFunctional(c.default || c))
export const LazyDashboard = import('../..\\components\\Dashboard.vue' /* webpackChunkName: "components/dashboard" */).then(c => wrapFunctional(c.default || c))
export const LazyDashTitle = import('../..\\components\\DashTitle.vue' /* webpackChunkName: "components/dash-title" */).then(c => wrapFunctional(c.default || c))
export const LazyEventCard = import('../..\\components\\EventCard.vue' /* webpackChunkName: "components/event-card" */).then(c => wrapFunctional(c.default || c))
export const LazyFooterNav = import('../..\\components\\FooterNav.vue' /* webpackChunkName: "components/footer-nav" */).then(c => wrapFunctional(c.default || c))
export const LazyNav = import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c))
export const LazyNewsCard = import('../..\\components\\NewsCard.vue' /* webpackChunkName: "components/news-card" */).then(c => wrapFunctional(c.default || c))
export const LazyPostCard = import('../..\\components\\PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c))
export const LazyQuotesCard = import('../..\\components\\QuotesCard.vue' /* webpackChunkName: "components/quotes-card" */).then(c => wrapFunctional(c.default || c))
export const LazySearch = import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c))
export const LazyTemplate = import('../..\\components\\Template.vue' /* webpackChunkName: "components/template" */).then(c => wrapFunctional(c.default || c))
export const LazyVuetifyLogo = import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c))
export const LazyWorldRemindersCard = import('../..\\components\\WorldRemindersCard.vue' /* webpackChunkName: "components/world-reminders-card" */).then(c => wrapFunctional(c.default || c))
