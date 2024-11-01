<script setup>
import { EffectFade, Parallax } from 'swiper/modules'
import listF from '../../layout/listF.vue'
import TVFloor from '../../floor/TVFloor.vue'
import { ref } from 'vue'

const swiperRef = ref()
const modules = [EffectFade, Parallax]
const onSwiper = (swiper) => {
  swiperRef.value = swiper
}

const goSlide = (id) => {
  swiperRef.value.slideTo(id)
}
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      proTV: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=221284',
          image: '2020TVforever/images/2410/221284.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=238958',
          image: '2020TVforever/images/2410/238958.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=239413',
          image: '2020TVforever/images/2410/239413.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=245384',
          image: '2020TVforever/images/2410/245384.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=246741',
          image: '2020TVforever/images/2410/246741.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=247645',
          image: '2020TVforever/images/2410/247645.png'
        }
      ],
      gifts: [
        {
          url: 'https://liff.line.me/1645278921-kWRPP32q/?accountId=philipstw-tv',
          image: '2020TVforever/images/2410/C1.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=116121',
          image: '2020TVforever/images/2410/C2.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=11312&aid=23350&strPreView=y',
          image: '2020TVforever/images/2410/C3.png'
        }
      ],
      brands: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=40805',
          image: '2020TVforever/images/2409/JVC.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11336',
          image: '2020TVforever/images/2409/SONY.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11340',
          image: '2020TVforever/images/2409/samsung.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=60645',
          image: '2020TVforever/images/2409/philips.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11338',
          image: '2020TVforever/images/2409/pana.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11343',
          image: '2020TVforever/images/2409/LG.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11346',
          image: '2020TVforever/images/2409/sampo.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=11353',
          image: '2020TVforever/images/2409/BenQ.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=112906',
          image: '2020TVforever/images/2409/AOC.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=116121',
          image: '2020TVforever/images/2409/TCL.png'
        }
      ],
      saleTab: [
        { image: '2020TVforever/images/2410/logo_01.png', menu: 5977 },
        { image: '2020TVforever/images/2410/logo_03.png', menu: 4465 },
        { image: '2020TVforever/images/2410/logo_04.png', menu: 4466 },
        { image: '2020TVforever/images/2410/logo_02.png', menu: 4463 },
        { image: '2020TVforever/images/2410/logo_more.png', menu: 4467 }
      ],
      nights: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=119275&aid=23434&hid=120453',
          image: '2020TVforever/images/2409/ncta2.png',
          menu: 5421
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=119275&aid=23435&hid=121793',
          image: '2020TVforever/images/2409/ncta1.png',
          menu: 5420
        }
      ],
      floorImg: [
        {
          url: 'https://www.tk3c.com/search.aspx?q=%E9%9B%BB%E8%A6%96',
          image: '2020TVforever/images/2410/S5.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88783',
          image: '2020TVforever/images/2410/S6.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105564',
          image: '2020TVforever/images/2410/S7.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88767',
          image: '2020TVforever/images/2410/S8.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105586',
          image: '2020TVforever/images/2410/S9.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
          image: '2020TVforever/images/2410/S10.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=828',
          image: '2020TVforever/images/2410/S11.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=828&aid=331',
          image: '2020TVforever/images/2410/S12.png'
        }
      ],
      asides: [
        { text: '品牌福利出清', href: '#sale' },
        { text: '必BUY熱銷排行', href: '#pro2751' },
        { text: 'OLED電視最大賞', href: '#pro5613' },
        { text: '大視野加倍過癮', href: '#pro5198' },
        { text: 'QLED極致炫彩', href: '#pro5199' },
        { text: '小資族激省攻略', href: '#pro4846' },
        { text: '投影氣氛嗨翻天', href: '#pro5200' },
        { text: '聲臨其境更刺激', href: '#pro5201' },
        { text: '超給力助攻周邊', href: '#pro5202' }
      ],
      menuDis: 4328, //現折 清單編號
      status: 0,
      statusSale: 0,
      statusNight: 0,
      isNight: true,
      isDis: true,
      today: new Date()
    }
  },
  mounted() {
    const { saleTab, nights, menuDis, today } = this

    //背景固定
    this.fixedBg('.background2', '.gift-box')

    //撈取 現折券樓層商品
    this.getFloorSingle(menuDis)

    //撈取 品牌樓層商品
    this.getFloorSingle(saleTab[0].menu)

    //撈取夜間下殺樓層商品
    this.getFloorSingle(nights[0].menu)

    // 10/4-14 隱藏現折券樓層
    if (today >= new Date('2024/10/04') && today < new Date('2024/10/15')) {
      this.isDis = false
    }
  },
  methods: {
    change(id) {
      this.status = id
    },
    changeSale(id, menu) {
      if (event) {
        setTimeout(() => {
          this.statusSale = id
          this.getFloorSingle(menu)
        }, 100)
      }
    },
    changeNight(id, menu) {
      setTimeout(() => {
        this.statusNight = id
        this.getFloorSingle(menu)
      }, 100)
    }
  }
}
</script>

<template>
  <div id="tv-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2410/title2.png')" alt="" />
      </h2>

      <div class="product">
        <swiper
          :loop="true"
          :effect="'fade'"
          :autoplay="{ delay: 1600, disableOnInteraction: false }"
          :observer="true"
          :parallax="true"
          :modules="modules"
        >
          <swiper-slide v-for="(pro, p) in proTV" :key="p" class="opacity:0 opacity:1.active">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-opacity="0">
              <img :src="$filters.siteUrl(pro.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="background2"></div>

    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2410/sp_title.png')" alt="" />
      </h2>
      <a
        v-for="(gift, g) in gifts"
        class="w:90% w:95vw@<992 mb:2%"
        :key="g"
        :href="$filters.addGALink(gift.url)"
        target="_blank"
      >
        <img :src="$filters.siteUrl(gift.image)" alt="" />
      </a>
    </section>

    <!-- 現折券 -->
    <section class="discount-box" id="dis" v-if="isDis">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2410/dis_title.png')" alt="" />
      </h2>

      <div class="discount">
        <component :is="listF" :pro="product2[menuDis]" :isSwiper="1" :name="'dis'"></component>
        <a
          class="more"
          :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123908')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('2020TVforever/images/2409/btn-more.png')" alt="" />
        </a>
      </div>
    </section>

    <!-- 福利 -->
    <section class="sale-group scroll" id="sale">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2410/sale_title.png')" alt="" />
      </h2>

      <div class="content">
        <div class="tab">
          <div id="sale-area">
            <swiper
              :space-between="10"
              :breakpoints="{
                0: {
                  slidesPerView: 2.5
                },
                600: {
                  slidesPerView: 4.3
                },
                992: {
                  slidesPerView: 5
                }
              }"
              @swiper="onSwiper"
            >
              <swiper-slide
                v-for="(sale, s) in saleTab"
                :key="s"
                :class="[statusSale == s ? 'active' : '']"
                @click="goSlide(s)"
              >
                <a @click="changeSale(s, sale.menu)"
                  ><img :src="$filters.siteUrl(sale.image)" alt=""
                /></a>
              </swiper-slide>
            </swiper>
          </div>
        </div>

        <div class="tab-content" v-for="(sale, s) in saleTab" :key="s" v-show="statusSale == s">
          <component :is="listF" :pro="product2[sale.menu]" :isSwiper="1"></component>
        </div>
      </div>
    </section>

    <!-- 夜間下殺 -->
    <section class="night-box" v-show="isNight">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2410/night_title.png')" alt="" />
      </h2>

      <div class="content">
        <ul class="tab gap:10">
          <li v-for="(night, n) in nights" :key="n" :class="[statusNight == n ? 'active' : '']">
            <a @click="changeNight(n, night.menu)">
              <img :src="$filters.siteUrl(night.image)" alt="" />
            </a>
          </li>
        </ul>

        <!-- 商品內容 -->
        <div class="tab-content" v-for="(night, n) in nights" :key="n" v-show="statusNight == n">
          <component :is="listF" :pro="product2[night.menu]"></component>
          <a class="more" :href="$filters.addGALink(night.url)" target="_blank"
            ><img :src="$filters.siteUrl('2020TVforever/images/2409/btn-more.png')" alt=""
          /></a>
        </div>
      </div>
    </section>

    <!-- 品牌 -->
    <section class="brand-group">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2410/brand_title.png')" alt="" />
      </h2>

      <swiper-container
        class="overflow:hidden"
        :autoplay="{
          delay: 1800,
          disableOnInteraction: false
        }"
        :space-between="10"
        :breakpoints="{
          0: {
            slidesPerView: 3,
            grid: {
              fill: 'row',
              rows: 2
            }
          },
          600: {
            slidesPerView: 5,
            grid: {
              fill: 'row',
              rows: 2
            }
          },
          992: {
            slidesPerView: 5,
            grid: {
              fill: 'row',
              rows: 2
            }
          }
        }"
        :pagination="{
          el: '.brand-group .swiper-pagination'
        }"
        :style="{
          '--swiper-pagination-color': '#fff'
        }"
      >
        <swiper-slide v-for="(brand, b) in brands" :key="b">
          <a :href="$filters.addGALink(brand.url)" target="_blank">
            <img :src="$filters.siteUrl(brand.image)" alt="" />
          </a>
        </swiper-slide>
      </swiper-container>
      <div class="swiper-pagination"></div>
    </section>

    <TVFloor :floors="floorImg"></TVFloor>
  </div>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li v-for="(aside, a) in asides" :key="a" :class="[a == 0 ? 'main' : '']">
            <a :href="aside.href">{{ aside.text }}</a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>
</template>
