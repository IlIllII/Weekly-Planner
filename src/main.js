// main.js loads our app and mounts it into the div in index.html,
// which is in the public folder. The div is loaded into the element
// with the id of "app".
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
