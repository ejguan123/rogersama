<script setup>
import listF from '../../layout/listF.vue'
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
      income: 0,
      dateTime: ''
    }
  },
  updated() {
    //若某樓層沒有商品則隱藏此區域、移除右側選單(手機版)項目
    document.querySelectorAll('.pro-box').forEach((el, p) => {
      if (el.querySelectorAll('.bg01').length > 0) {
        if (el.querySelectorAll('.bg01 .swiper-slide').length <= 0) {
          el.classList.add('hide')
          document.querySelectorAll('.aside-container .aside-content li')[p].remove()
          document.querySelectorAll('.mobile-for-product ul li')[p].remove()
        }
      }
    })

    //限時樓層有商品才顯示
    if (document.querySelectorAll('.special-box .special .bg01 .swiper-slide').length > 0) {
      this.isSp = true
    }
  },
  mounted() {
    const { today } = this

    const year = today.getFullYear(),
      month = today.getMonth() + 1,
      date = today.getDate()

    //撈取限時樓層商品
    this.getFloorSingle(this.menuSP)

    //撈取其他樓層
    this.getFloorData(this.menus)

    this.dateTime = today >= new Date('2024/10/10 07:00') ? ' 07:00' : ' 06:00'

    //加入時間倒數
    if (
      today >= new Date(year + '/' + month + '/' + date + ' 07:00') &&
      today < new Date(year + '/' + month + '/' + date + ' 22:00')
    ) {
      this.income = 1

      $('.timearea').countdown({
        until: $.countdown.UTCDate(+8, year, month - 1, date, 22, 0, 0),
        format: 'hms',
        layout: '<span>倒數:</span> <i>{hnn}</i> <b>:</b> <i>{mnn}</i> <b>:</b> <i>{snn}</i>',
        onExpiry: this.timeUpMsg
      })
    }

    //快閃
    if (
      today >= new Date(year + '/' + month + '/' + date + this.dateTime) &&
      today < new Date(year + '/' + month + '/' + date + ' 22:00')
    ) {
      this.income = 1

      $('.timearea').countdown({
        until: $.countdown.UTCDate(+8, year, month - 1, date, 22, 0, 0),
        format: 'hms',
        layout: '<span>倒數:</span> <i>{hnn}</i> <b>:</b> <i>{mnn}</i> <b>:</b> <i>{snn}</i>',
        onExpiry: this.timeUpMsg
      })
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
        <div class="bg01 list_F p:1% p:2%@<576" v-if="product2[menuSP] != undefined">
          <ul>
            <swiper
              class="overflow:hidden"
              :space-between="10"
              :navigation="{
                prevEl: `.special-box .prev`,
                nextEl: `.special-box .next`
              }"
              :breakpoints="{
                0: {
                  slidesPerView: 2.2,
                  grid: {
                    fill: 'row',
                    rows: 3
                  }
                },
                601: {
                  slidesPerView: 3.3,
                  grid: {
                    fill: 'row',
                    rows: 4
                  }
                },
                992: {
                  slidesPerView: 4.3,
                  grid: {
                    fill: 'row',
                    rows: 4
                  }
                },
                1281: {
                  slidesPerView: 5.3,
                  grid: {
                    fill: 'row',
                    rows: 4
                  }
                }
              }"
            >
              <swiper-slide
                class="bg:#fff"
                :class="[income ? 'before' : '']"
                v-for="(proA, p) in product2[menuSP]"
              >
                <a
                  :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=' + proA.productid)"
                  :id="'prod' + proA.productid"
                  :name="'prod' + proA.productid"
                >
                  <p class="itemF_img">
                    <img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" />
                  </p>
                  <storg v-html="proA.productname"></storg>
                  <h4 :class="[proA.Promote.trim() == '' ? 'empty' : '']">{{ proA.Promote }}</h4>
                  <div class="boxF_price">
                    <p class="iconF_pro" v-if="getProPercent(proA) != 100">
                      <span>{{ getProPercent(proA) }}</span
                      >折
                    </p>

                    <strong class="txt_red fred">
                      <em>市價${{ addNumComma(proA.nonmemberprice) }}</em>
                      <i>活動價$</i>{{ addNumComma(proA.realprice) }}
                    </strong>
                  </div>
                </a>
              </swiper-slide>
            </swiper>
            <div class="swiper-button-prev prev"></div>
            <div class="swiper-button-next next"></div>
          </ul>
        </div>
      </div>
    </section>

    <section class="pro-box scroll" v-for="(pd, p) in proDatas" :class="`pro${Number(p) + 1}-box`">
      <h2 class="title" :id="`pro${menus[p]}`">
        <img :src="$filters.siteUrl(pd.image)" />
      </h2>

      <div class="products">
        <component
          v-if="products[menus[p]] != undefined"
          :is="listF"
          :pro="products[menus[p]].Data"
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
