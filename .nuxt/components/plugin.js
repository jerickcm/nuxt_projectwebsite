import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  AdminNav: () => import('../..\\components\\AdminNav.vue' /* webpackChunkName: "components/admin-nav" */).then(c => wrapFunctional(c.default || c)),
  BlogCard: () => import('../..\\components\\BlogCard.vue' /* webpackChunkName: "components/blog-card" */).then(c => wrapFunctional(c.default || c)),
  BlogList: () => import('../..\\components\\BlogList.vue' /* webpackChunkName: "components/blog-list" */).then(c => wrapFunctional(c.default || c)),
  Contact: () => import('../..\\components\\Contact.vue' /* webpackChunkName: "components/contact" */).then(c => wrapFunctional(c.default || c)),
  Dashboard: () => import('../..\\components\\Dashboard.vue' /* webpackChunkName: "components/dashboard" */).then(c => wrapFunctional(c.default || c)),
  DashTitle: () => import('../..\\components\\DashTitle.vue' /* webpackChunkName: "components/dash-title" */).then(c => wrapFunctional(c.default || c)),
  EventCard: () => import('../..\\components\\EventCard.vue' /* webpackChunkName: "components/event-card" */).then(c => wrapFunctional(c.default || c)),
  FooterNav: () => import('../..\\components\\FooterNav.vue' /* webpackChunkName: "components/footer-nav" */).then(c => wrapFunctional(c.default || c)),
  IndexBlogs: () => import('../..\\components\\IndexBlogs.vue' /* webpackChunkName: "components/index-blogs" */).then(c => wrapFunctional(c.default || c)),
  IndexDescription: () => import('../..\\components\\IndexDescription.vue' /* webpackChunkName: "components/index-description" */).then(c => wrapFunctional(c.default || c)),
  IndexTopics: () => import('../..\\components\\IndexTopics.vue' /* webpackChunkName: "components/index-topics" */).then(c => wrapFunctional(c.default || c)),
  IndexWidget: () => import('../..\\components\\IndexWidget.vue' /* webpackChunkName: "components/index-widget" */).then(c => wrapFunctional(c.default || c)),
  Nav: () => import('../..\\components\\Nav.vue' /* webpackChunkName: "components/nav" */).then(c => wrapFunctional(c.default || c)),
  NewsCard: () => import('../..\\components\\NewsCard.vue' /* webpackChunkName: "components/news-card" */).then(c => wrapFunctional(c.default || c)),
  PostCard: () => import('../..\\components\\PostCard.vue' /* webpackChunkName: "components/post-card" */).then(c => wrapFunctional(c.default || c)),
  QuotesCard: () => import('../..\\components\\QuotesCard.vue' /* webpackChunkName: "components/quotes-card" */).then(c => wrapFunctional(c.default || c)),
  QuoteWidget: () => import('../..\\components\\QuoteWidget.vue' /* webpackChunkName: "components/quote-widget" */).then(c => wrapFunctional(c.default || c)),
  RecommendedBlogs: () => import('../..\\components\\RecommendedBlogs.vue' /* webpackChunkName: "components/recommended-blogs" */).then(c => wrapFunctional(c.default || c)),
  Search: () => import('../..\\components\\Search.vue' /* webpackChunkName: "components/search" */).then(c => wrapFunctional(c.default || c)),
  Services: () => import('../..\\components\\Services.vue' /* webpackChunkName: "components/services" */).then(c => wrapFunctional(c.default || c)),
  SkeletonCard: () => import('../..\\components\\SkeletonCard.vue' /* webpackChunkName: "components/skeleton-card" */).then(c => wrapFunctional(c.default || c)),
  TagsIndex: () => import('../..\\components\\TagsIndex.vue' /* webpackChunkName: "components/tags-index" */).then(c => wrapFunctional(c.default || c)),
  Template: () => import('../..\\components\\Template.vue' /* webpackChunkName: "components/template" */).then(c => wrapFunctional(c.default || c)),
  Tools: () => import('../..\\components\\Tools.vue' /* webpackChunkName: "components/tools" */).then(c => wrapFunctional(c.default || c)),
  Topic: () => import('../..\\components\\Topic.vue' /* webpackChunkName: "components/topic" */).then(c => wrapFunctional(c.default || c)),
  TopicM: () => import('../..\\components\\TopicM.vue' /* webpackChunkName: "components/topic-m" */).then(c => wrapFunctional(c.default || c)),
  VuetifyLogo: () => import('../..\\components\\VuetifyLogo.vue' /* webpackChunkName: "components/vuetify-logo" */).then(c => wrapFunctional(c.default || c)),
  WidgetBlog: () => import('../..\\components\\WidgetBlog.vue' /* webpackChunkName: "components/widget-blog" */).then(c => wrapFunctional(c.default || c)),
  WidgetBlogtags: () => import('../..\\components\\WidgetBlogtags.vue' /* webpackChunkName: "components/widget-blogtags" */).then(c => wrapFunctional(c.default || c)),
  WidgetNews: () => import('../..\\components\\WidgetNews.vue' /* webpackChunkName: "components/widget-news" */).then(c => wrapFunctional(c.default || c)),
  WidgetNewstags: () => import('../..\\components\\WidgetNewstags.vue' /* webpackChunkName: "components/widget-newstags" */).then(c => wrapFunctional(c.default || c)),
  WidgetPost: () => import('../..\\components\\WidgetPost.vue' /* webpackChunkName: "components/widget-post" */).then(c => wrapFunctional(c.default || c)),
  WidgetPosttags: () => import('../..\\components\\WidgetPosttags.vue' /* webpackChunkName: "components/widget-posttags" */).then(c => wrapFunctional(c.default || c)),
  WidgetQuote: () => import('../..\\components\\WidgetQuote.vue' /* webpackChunkName: "components/widget-quote" */).then(c => wrapFunctional(c.default || c)),
  WorldRemindersCard: () => import('../..\\components\\WorldRemindersCard.vue' /* webpackChunkName: "components/world-reminders-card" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
