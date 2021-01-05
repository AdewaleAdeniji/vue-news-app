import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'



// Make BootstrapVue available throughout your project

// Optionally install the BootstrapVue icon components plugin

createApp(App).use(router).mount('#app') 
