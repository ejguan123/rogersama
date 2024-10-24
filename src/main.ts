//清空後台過轉後生成的商品樓層
if (document.querySelectorAll('.wrapper').length > 0) {
  document.querySelectorAll('.wrapper')[1].innerHTML = ''
}

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { register } from 'swiper/element/bundle'
import '@master/css'
import { Swiper, SwiperSlide } from 'swiper/vue'
import VueLoading from 'vue-loading-overlay'

import App from '@/AppComponent.vue' //主頁面內容
import Mobile from '@/views/MobileComponent.vue' //手機版
import router from './router'

const app = createApp(App)
const mobile = createApp(Mobile)

const config = {
  //路徑
  siteUrl(value: string) {
    return 'https://events.tk3c.com/events_net/events_net/' + value
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
app.component('Loading', VueLoading)

//使用方法: $filters.siteUrl(value)
app.config.globalProperties.$filters = config

app.mount('#app')

//id:mobile  區塊有存在再綁定到vue
if (document.querySelectorAll('#mobile').length > 0) mobile.mount('#mobile')

//手機版選單項目
import './assets/js/mobileText.js'
