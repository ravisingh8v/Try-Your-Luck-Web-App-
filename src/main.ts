import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import { createAuth0 } from '@auth0/auth0-vue';
import { auth0 } from './service/auth.service'

// const auth0 = createAuth0({
//     domain: "dev-14utcje1ixpmbxfb.us.auth0.com",
//     clientId: "ipgXJIIFBpvk10HY9VHBqTjd4RI96uIr",
//     authorizationParams: {
//         redirect_uri: window.location.origin
//     }
// })


createApp(App).use(store).use(router).use(auth0).mount('#app')
