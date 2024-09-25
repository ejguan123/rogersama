<script setup>
import { useHead, useScript } from 'unhead'
import listF from '../../layout/listF.vue'

//META DESCRIPTION
useHead({
  title: '月光市集 | 燦坤線上購物',
  meta: [
    {
      name: 'description',
      content: '月光市集'
    },
    {
      property: 'og:title',
      content: '月光市集 | 燦坤線上購物'
    },
    {
      property: 'og:description',
      content: '月光市集'
    },
    {
      property: 'og:image',
      content: 'https://www.tk3c.com/images/headimg.jpg'
    },
    {
      property: 'og:url',
      content: 'https://events.tk3c.com/events_net/nightsale/index.html'
    }
  ]
})
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menuSP: 7392,
      menus: [6149, 6150, 6151, 6152, 6153, 6154],
      proDatas: [
        { image: 'nightsale/images/part3/bar_top.png', menu: 6149, title: '每週強檔' },
        { image: 'nightsale/images/part3/bar000.png', menu: 6150, title: '大型家電' },
        { image: 'nightsale/images/part3/bar01.png', menu: 6151, title: '生活家電' },
        { image: 'nightsale/images/part3/bar02.png', menu: 6152, title: '電腦資訊' },
        { image: 'nightsale/images/part3/bar07.png', menu: 6153, title: '鍵盤滑鼠' },
        { image: 'nightsale/images/part3/bar04_b.png', menu: 6154, title: '數位週邊' }
      ],
      today: new Date(),
      isSp: false,
      income: 0
    }
  },
  updated() {
    //若某樓層沒有商品則隱藏此區域、移除右側選單(手機版)項目
    document.querySelectorAll('.pro-box').forEach((el, p) => {
      if (el.querySelectorAll('.bg01 li').length <= 0) {
        el.classList.add('hide')
        $all('.aside-container .aside-content li')[p].remove()
        $all('.mobile-for-product ul li')[p].remove()
      }
    })
  },
  mounted() {
    const { today } = this
    document.querySelectorAll('.wrapper')[1].innerHTML = ''

    const year = today.getFullYear(),
      month = today.getMonth() + 1,
      date = today.getDate()

    //撈取限時樓層商品
    this.getFloorSingle(this.menuSP)

    //撈取其他樓層
    this.getFloorData(this.menus)

    if (today >= new Date('2024/09/19 17:00') && today < new Date('2024/09/25 06:00')) {
      this.isSp = true
    }

    //加入時間倒數
    if (
      today >= new Date(year + '/' + month + '/' + date + ' 07:00') &&
      today < new Date(year + '/' + month + '/' + date + ' 22:00')
    ) {
      this.income = 1

      if (this.isSp == false) {
        $('.timearea').countdown({
          until: $.countdown.UTCDate(+8, year, month - 1, date, 22, 0, 0),
          format: 'hms',
          layout: '<span>倒數:</span> <i>{hnn}</i> <b>:</b> <i>{mnn}</i> <b>:</b> <i>{snn}</i>',
          onExpiry: this.timeUpMsg
        })
      }
    }

    //快閃
    if (
      today >= new Date(year + '/' + month + '/' + date + ' 06:00') &&
      today < new Date(year + '/' + month + '/' + date + ' 22:00')
    ) {
      this.income = 1

      if (this.isSp == true) {
        $('.timearea').countdown({
          until: $.countdown.UTCDate(+8, year, month - 1, date, 22, 0, 0),
          format: 'hms',
          layout: '<span>倒數:</span> <i>{hnn}</i> <b>:</b> <i>{mnn}</i> <b>:</b> <i>{snn}</i>',
          onExpiry: this.timeUpMsg
        })
      }
    }
  },
  methods: {
    timeUpMsg() {
      $('.timearea').countdown('destroy')
      $('.item').after('<b>開始搶購!</b>')
    }
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>

<template>
  <div id="night-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('nightsale/images/part3/title2.png')" />
      </h2>

      <div class="product">
        <img :src="$filters.siteUrl('nightsale/images/part3/moon.png')" />
      </div>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('nightsale/images/part3/bg_pp.png')" />
    </p>

    <div class="timearea"></div>

    <!-- 限時 -->
    <section class="special-box" v-show="isSp">
      <div class="special">
        <component :is="listF" :pro="product2[menuSP]" :incoming="income"></component>
      </div>
    </section>

    <section class="pro-box scroll" v-for="(pro, p) in products" :class="`pro${Number(p) + 1}-box`">
      <h2 class="title" :id="`pro${proDatas[p].menu}`">
        <img :src="$filters.siteUrl(proDatas[p].image)" />
      </h2>

      <div class="products">
        <component
          :is="listF"
          :pro="pro.datas.Data"
          :isSwiper="1"
          :name="`pro${Number(p) + 1}`"
          :incoming="income"
        ></component>
      </div>
    </section>
  </div>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li v-for="floor in proDatas">
            <a :href="`#pro${floor.menu}`">{{ floor.title }}</a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>
</template>
