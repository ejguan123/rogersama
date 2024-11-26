import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle'
import '@master/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import VueLoading, { LoadingPlugin } from 'vue-loading-overlay' //載入中套件

import App from '@/AppComponent.vue' //主頁面內容
import Mobile from '@/views/MobileComponent.vue' //手機版
import router from './router'
import Floor from '@/views/floor/ThankFloor.vue'

const app = createApp(App)
const mobile = createApp(Mobile)
const floor = createApp(Floor)

const config = {
  //路徑
  siteUrl(value: string) {
    return 'https://events.cdn-tkec.tw/events_net/events_net/' + value
  },
  //追蹤碼
  addGALink(url: string) {
    const location = window.location.pathname.split('/')
    if (url !== undefined) {
      return url + (url.indexOf('?') >= 0 ? '&' : '?') + 'ec=' + location[2]
    }
  }
}

app.use(createPinia())
app.use(router)
app.use(register)

app.component('Swiper', Swiper)
app.component('SwiperSlide', SwiperSlide)

//使用方法: $filters.siteUrl(value)
app.config.globalProperties.$filters = config

floor.config.globalProperties.$filters = config

// id:app 區域有存在再綁到vue
if (document.querySelectorAll('#app').length > 0) app.mount('#app')

//id:mobile  區塊有存在再綁定到vue
if (document.querySelectorAll('#mobile').length > 0) mobile.mount('#mobile')

//其他樓層
if (document.querySelectorAll('#floor-area').length > 0) {
  floor.component('Swiper', Swiper)
  floor.component('SwiperSlide', SwiperSlide)
  floor.mount('#floor-area')
}

//手機版選單項目
import './assets/js/mobileText.js'
