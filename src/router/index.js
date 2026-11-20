import { createRouter, createWebHashHistory } from 'vue-router'
import SectionsListView from '../views/SectionsListView.vue'
import SectionDetailView from '../views/SectionDetailView.vue'

const router = createRouter({
  // Используем hash-режим, чтобы на GitHub Pages не было ошибок 404
  history: createWebHashHistory(),
  routes: [
    { path: '/', component: SectionsListView },
    { path: '/section/:id', component: SectionDetailView }
  ]
})

export default router