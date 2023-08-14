import Vue from 'vue'
import Vuex from 'vuex';

import { store } from './store/comments.js';

//Main pages
import App from './views/App'

const app = new Vue({
    store,
    el: '#app',
    components: { App }
});