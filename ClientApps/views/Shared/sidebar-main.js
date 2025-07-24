// ClientApp/views/Shared/sidebar-main.js
import { createApp } from 'vue'
import Sidebar from './Components/BaseSidebar.vue'
function initSidebarApp() {
  const app = createApp(Sidebar)
  app.mount('#sidebar-app')
}
initSidebarApp();