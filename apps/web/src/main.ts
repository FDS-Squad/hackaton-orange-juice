import './assets/styles/base.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

// Bootstrap
import 'bootstrap/dist/js/bootstrap.js';

// Oh-Vue-Icons
import { OhVueIcon, addIcons } from 'oh-vue-icons';
import * as FaIcons from 'oh-vue-icons/icons/fa';

// TITLE
router.afterEach((to) => {
  document.title = to.meta.title?.toString() || 'Carregando...';
});

import App from './App.vue';
import router from './router';

const app = createApp(App);

const Fa = Object.values({ ...FaIcons });

// Adds
addIcons(...Fa);
// Uses
app.use(createPinia());
app.use(router);
// Components
app.component('v-icon', OhVueIcon);
// Mount
app.mount('#app');
