import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from 'unhead'
import { register } from 'swiper/element/bundle'
import '@master/css'

import App from '@/AppComponent.vue'
import Mobile from '@/views/MobileComponent.vue'
import Floor from '@/views/floor/AutumnFloor.vue'
import router from './router'

const app = createApp(App)
const mobile = createApp(Mobile)
const floor = createApp(Floor)

const config = {
  //路徑
  siteUrl(value: string) {
    return 'https://events.tk3c.com/events_net/events_net/' + value
  },
  //追蹤碼
  addGALink(url: string) {
    let location = window.location.pathname.split('/')
    if (url !== undefined) {
      return url + (url.indexOf('?') >= 0 ? '&' : '?') + 'ec=' + location[2]
    }
  }
}

app.use(createPinia())
app.use(router)
app.use(createHead)
app.use(register)

//使用方法: $filters.siteUrl(value)
app.config.globalProperties.$filters = config

//樓層使用
floor.config.globalProperties.$filters = config

app.mount('#app')
mobile.mount('#mobile')
floor.mount('#floor')

import './assets/js/mobileText.js'
