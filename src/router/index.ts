import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import UserRegistration from './../views/user-registration.vue';
import AppMaster from './../components/app-master.vue'
import UserLogin from '@/views/user-login.vue';
import userRegistrationVue from './../views/user-registration.vue';
import { useAuth0 } from '@auth0/auth0-vue';
import appMasterVue from './../components/app-master.vue';
const routes: Array<RouteRecordRaw> = [
  // {
  //   path: '/',
  //   name: '/',
  //   redirect: '/home'
  // },
  // {
  //   path: '/',
  //   redirect: 'home'
  // },
  {
    path: '/',
    name: 'home',
    component: appMasterVue,
    meta: { requiredAuth: true }
  },
  {
    path: '/registration',
    name: 'registration',
    component: UserRegistration
  },


]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to, from, next) => {
  const { loginWithRedirect, isAuthenticated } = useAuth0()
  if (to.meta.requiredAuth && !isAuthenticated.value) {
    console.log('work')
    loginWithRedirect()
  } else {
    next()
  }
})
router.afterEach(() => {
  console.log(useAuth0().isAuthenticated.value)
})
export default router
