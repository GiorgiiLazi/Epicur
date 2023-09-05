import { createRouter, createWebHistory } from 'vue-router'
import HomeView from "@/views/HomeView.vue"
import AboutView from "@/views/AboutView.vue"
import OurTours from "@/views/OurTours.vue"
import WhyUs from "@/views/WhyUs.vue"
import Destinations from "@/views/Destinations.vue"


const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/tours',
    name: 'tours',
    component: OurTours
  },
  {
    path: '/why',
    name: 'why',
    component: WhyUs
  },
  {
    path: '/destinations',
    name: 'destinations',
    component: Destinations
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
