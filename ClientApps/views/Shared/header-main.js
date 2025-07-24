// ClientApp/views/Shared/header-main.js
import { createApp } from 'vue'
import Header from './Components/BaseHeader.vue'
function initHeaderApp() {
  const app = createApp(Header)
  app.mount('#header-app')
}
initHeaderApp();