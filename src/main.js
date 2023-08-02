import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
require('./assets/tailwind.css')
import router from './router/index'
import { library } from "@fortawesome/fontawesome-svg-core";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { faGauge } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faPhone, faBars, faMugHot, faGauge, faChevronRight);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).use(router).mount('#app')
