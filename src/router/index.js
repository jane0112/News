import Vue from 'vue'
import VueRouter from 'vue-router'
import NewsList from '../views/NewsList'
import NewsDetail from '../views/NewsDetail'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'News',
    component: NewsList
  },
  {
    path: '/newsDetail',
    name: 'NewsDetail',
    component: NewsDetail
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
