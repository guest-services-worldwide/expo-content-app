import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DataView from "../views/DataView.vue";
import VideoView from "@/views/VideoView.vue";

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/data',
    name: 'data',
    component: DataView
  },
  {
    path: '/video',
    name: 'video',
    component: VideoView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
