import Vue from 'vue'
import VueRouter from 'vue-router'


import DashboardPageVue from '@/views/Dashboard/DashboardPage.vue'
import HomeDashboardVue from '@/views/Dashboard/HomeDashboard.vue'
import PlatDashboardVue from '@/views/Dashboard/PlatDashboard.vue'
import StandDashboardVue from '@/views/Dashboard/StandDashboard.vue'
import AnalyseDashboardVue from '@/views/Dashboard/AnalyseDashboard.vue'
import ProfilDashboardVue from '@/views/Dashboard/ProfilDashboard.vue'
import FoodShopViewVue from '@/views/FoodShop/FoodShopView.vue'
import BilleterieVue from '@/views/Billeterie/BilleterieVue.vue'
import ProfileVue from '@/views/Home/ProfilePage.vue'
import ContactVue from '@/views/Home/ContactPage.vue'
import HomePage from '@/views/Home/HomePage.vue'
import Stand3d from '@/views/Stand/Stand3dPage.vue'
import Stand2d from '@/views/Stand/Stand2dPage.vue'



import Loginpage from '@/views/Login/LoginPage.vue'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/dashboard',
    component: DashboardPageVue,
    children: [
      {
        path: 'home',
        name: 'home',
        component: HomeDashboardVue
      }, {
        path: 'plats',
        name: 'plats',
        component: PlatDashboardVue,
        children: [
          {
            path: 'edit/:id?',
            name: 'editarticle',
            component: ProfilDashboardVue,
          }
        ]
      }
      , {
        path: 'stand',
        component: StandDashboardVue,
        name: 'stand'
      }
      , {
        path: 'analyse',
        component: AnalyseDashboardVue,
        name: 'analyse'
      }
      , {
        path: 'profil',
        component: ProfilDashboardVue,
        name: 'profil'
      }
    ]
  },
  {
    path: '/billeterie',
    component: BilleterieVue
  },
  {
    path: '/boutique',
    component: FoodShopViewVue
  },
  {
    path: '/login',
    component: Loginpage
  },
  {
    path: '/stand3d',
    component: Stand3d
  },
  {
    path: '/stand2d',
    component: Stand2d
  },
  {
    path: '/profile',
    component: ProfileVue
  },
  {
    path: '/contact',
    component: ContactVue
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
