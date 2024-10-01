import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createHead } from 'unhead' //新增meta tag
import { register } from 'swiper/element/bundle'
import '@master/css'

import App from '@/AppComponent.vue' //主頁面內容
import Mobile from '@/views/MobileComponent.vue' //手機版
import Floor from '@/views/floor/TVFloor.vue' //樓層區
import router from './router'

//清空後台過轉後生成的商品樓層
if (document.querySelectorAll('.wrapper').length > 0) {
  document.querySelectorAll('.wrapper')[1].innerHTML = ''
}

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

//手機版選單項目
import './assets/js/mobileText.js'
