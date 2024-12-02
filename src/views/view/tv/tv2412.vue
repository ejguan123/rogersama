<script setup>
import { EffectCoverflow, EffectCube, Parallax } from 'swiper/modules'
import listF from '../../layout/listF.vue'
import TVFloor from '../../floor/CommonFloor.vue'
import { ref } from 'vue'
import AllEvent from '../../../components/AllEvent.vue' //全站活動

const swiperRef = ref()
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
          url: 'https://www.tk3c.com/pt.aspx?pid=216925',
          image: '2020TVforever/images/2412/216925.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=228009',
          image: '2020TVforever/images/2412/228009.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=240717',
          image: '2020TVforever/images/2412/240717.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=247821',
          image: '2020TVforever/images/2412/247821.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=249380',
          image: '2020TVforever/images/2412/249380.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=250718',
          image: '2020TVforever/images/2412/250718.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=253014',
          image: '2020TVforever/images/2412/253014.png'
        }
      ],
      gifts: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=116121',
          image: '2020TVforever/images/2412/C2.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11312',
          image: '2020TVforever/images/2412/C3.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=60645',
          image: '2020TVforever/images/2412/C1.png'
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
        { image: '2020TVforever/images/2410/logo_01.png' },
        { image: '2020TVforever/images/2410/logo_03.png' },
        { image: '2020TVforever/images/2410/logo_04.png' },
        { image: '2020TVforever/images/2410/logo_02.png' },
        { image: '2020TVforever/images/2410/logo_more.png' }
      ],
      nights: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=119275&aid=23434&hid=120453&strPreView=y',
          image: '2020TVforever/images/2412/n-02.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=119275&aid=23435&hid=121793&strPreView=y',
          image: '2020TVforever/images/2412/n-01.png'
        }
      ],
      floorImg: [
        {
          url: 'https://www.tk3c.com/search.aspx?q=%E9%9B%BB%E8%A6%96',
          image: '2020TVforever/images/2412/S5.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88783',
          image: '2020TVforever/images/2412/S6.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105564',
          image: '2020TVforever/images/2412/S7.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88767',
          image: '2020TVforever/images/2412/S8.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105586',
          image: '2020TVforever/images/2412/S9.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
          image: '2020TVforever/images/2412/S10.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=828',
          image: '2020TVforever/images/2412/S11.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=828&aid=331',
          image: '2020TVforever/images/2412/S12.png'
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
      menuSale: [5977, 4465, 4466, 4463, 4467], // 出清 陳列編號
      menuNight: [5421, 5420], //夜殺 陳列編號
      menu: [2751, 5613, 5198, 5199, 4846, 5200, 5201, 5202],
      status: 0,
      statusSale: 1,
      statusNight: 1,
      isNight: true,
      isDis: true,
      today: new Date(),
      disUrl: ''
    }
  },
  mounted() {
    const { saleTab, nights, menuDis, today } = this

    //撈取 現折券樓層商品
    this.getFloorSingle(menuDis)

    //撈取 出清樓層商品
    this.getFloorData(this.menuSale)

    //撈取夜間下殺樓層商品
    this.getFloorData(this.menuNight)

    // 2024 12月 更換現折券連結
    if (today >= new Date('2024/12/01')) {
      this.disUrl = 'https://www.tk3c.com/dictitleurl.aspx?cid=124085&strPreView=y'
    } else {
      this.disUrl = 'https://www.tk3c.com/dic2.aspx?cid=124026&aid=23890&hid=124045&strPreView=y'
    }
  },
  methods: {
    change(id) {
      this.status = id
    },
    changeSale(id) {
      if (event) {
        setTimeout(() => {
          this.statusSale = id
        }, 20)
      }
    },
    changeNight(id) {
      setTimeout(() => {
        this.statusNight = id
      }, 20)
    }
  }
}
</script>

<template>
  <div id="tv-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2412/title.png')" alt="" />
      </h2>

      <div class="pro">
        <swiper
          :loop="true"
          :effect="'cube'"
          :cubeEffect="{
            slideShadows: false,
            shadow: false
          }"
          :observer="true"
          :parallax="true"
          :autoplay="{ delay: 2000, disableOnInteraction: false }"
          :modules="[Parallax, EffectCube]"
        >
          <swiper-slide v-for="(pro, p) in proTV" :key="p">
            <a :href="$filters.addGALink(pro.url)" target="_blank">
              <img :src="$filters.siteUrl(pro.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="background2"></div>

    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2412/SC.png')" alt="" />
      </h2>

      <div class="w:full">
        <swiper
          :loop="false"
          :effect="'coverflow'"
          :centeredSlides="true"
          :centeredSlidesBounds="true"
          :coverflowEffect="{
            rotate: 20,
            stretch: 3,
            depth: 110,
            modifier: 1,
            slideShadows: false
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1.2
            },
            600: {
              slidesPerView: 3
            },
            992: {
              slidesPerView: 3
            }
          }"
          :modules="[EffectCoverflow]"
        >
          <swiper-slide v-for="gift in gifts">
            <a :href="$filters.addGALink(gift.url)" target="_blank">
              <img :src="$filters.siteUrl(gift.image)" alt=" " />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 全站活動 -->
    <AllEvent></AllEvent>

    <!-- 現折券 -->
    <section class="discount-box" id="dis" v-if="isDis">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2412/S1.png')" alt="" />
      </h2>

      <div class="discount">
        <component :is="listF" :pro="product2[menuDis]" :isSwiper="1" :name="'dis'"></component>
        <a class="more" :href="$filters.addGALink(disUrl)" target="_blank">
          <img :src="$filters.siteUrl('2020TVforever/images/2409/btn-more.png')" alt="" />
        </a>
      </div>
    </section>

    <!-- 福利 -->
    <section class="sale-group scroll" id="sale">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2412/S2.png')" alt="" />
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
                class="contrast(0.5) contrast(1).active"
                @click="goSlide(s)"
              >
                <a @click="changeSale(s)"><img :src="$filters.siteUrl(sale.image)" alt="" /></a>
              </swiper-slide>
            </swiper>
          </div>
        </div>

        <div class="tab-content" v-for="(sale, s) in saleTab" :key="s" v-show="statusSale == s">
          <component
            v-if="products[menuSale[s]] != undefined"
            :is="listF"
            :pro="products[menuSale[s]].Data"
            :isSwiper="1"
          ></component>
        </div>
      </div>
    </section>

    <!-- 夜間下殺 -->
    <section class="night-box" v-show="isNight">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2412/S3.png')" alt="" />
      </h2>

      <div class="content">
        <ul class="tab gap:10 mb:2%">
          <li
            v-for="(night, n) in nights"
            :key="n"
            :class="[statusNight == n ? 'active' : '']"
            class="w:20% w:30vw@<992 w:40vw@<576 translateZ(0) grayscale(1) grayscale(0).active"
          >
            <a @click="changeNight(n)">
              <img :src="$filters.siteUrl(night.image)" alt="" />
            </a>
          </li>
        </ul>

        <!-- 商品內容 -->
        <div class="tab-content" v-for="(night, n) in nights" :key="n" v-show="statusNight == n">
          <component
            v-if="products[menuNight[n]] != undefined"
            :is="listF"
            :pro="products[menuNight[n]].Data"
          ></component>
          <a class="more" :href="$filters.addGALink(night.url)" target="_blank"
            ><img :src="$filters.siteUrl('2020TVforever/images/2409/btn-more.png')" alt=""
          /></a>
        </div>
      </div>
    </section>

    <!-- 品牌 -->
    <section class="brand-group">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2412/S4.png')" alt="" />
      </h2>

      <swiper
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
      </swiper>
      <div class="swiper-pagination"></div>
    </section>

    <!-- 其他樓層 -->
    <TVFloor :floors="floorImg" :menu="menu"></TVFloor>
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

<style lang="scss">
@charset "utf-8";

@import '../../../assets/sass/module/base';
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2020TVforever/images/2412/';
$origin: 'https://events.tk3c.com/events_net/events_net/2020TVforever/images/2412/';

/*  共用樣式調整 */
body {
  background: #5b1805;
}

.bg01 {
  background: #dd9b3f;
  border-radius: 10px;
  box-sizing: border-box;
}

.fix_btn {
  .dropdown-menu {
    display: none;
  }
}

/* 電視頁面區 */
#tv-container {
  width: 100%;
  margin: 0 auto 0;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 36%;
    .pro {
      width: 30%;
      position: absolute;
      right: 17%;
      top: 26%;
    }
    .title {
      width: 35%;
      position: absolute;
      left: 19%;
      top: 24%;
      animation: rotate-fly-left 1.6s ease-in;
      img {
        animation: heartBeat 1s linear;
        animation-delay: 1.2s;
      }
    }

    .gift {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 0;
      z-index: -1;
    }
  }
}

.background2 {
  width: 100%;
  height: 100%;
  $image: $dir + 'bg.png';
  background: url($image) no-repeat center;
  background-size: 100% auto;
  background-position:
    0 15px,
    top;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  margin: 0 auto;
  z-index: -2;
}

.sale-group {
  .tab-content {
    .bg01 {
      margin: 0 auto 0;
    }
  }
}

.discount-box {
  .bg01 {
    margin: 0 auto 1%;
  }
}

.night-box {
  .bg01 {
    margin: 0 auto 1%;
  }
}

#sale-area {
  .swiper-slide {
    &:last-of-type {
      img {
        transform: scale(0.62);
        position: relative;
        left: -35px;
        top: -17px;
      }
    }
  }
}

.brand-group {
  .swiper-pagination {
    .swiper-pagination-bullet {
      background: #fff !important;
    }
    .swiper-pagination-bullet-active {
      background: #fff !important;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #tv-container {
    .background {
      padding-bottom: 50vw;
      .title {
        width: 45vw;
        top: 14vw;
        left: 10vw;
      }
      .pro {
        width: 40vw;
        right: 7vw;
        top: 14vw;
      }
    }
  }

  .background2 {
    background-size: 120% auto;
    background-position:
      -10vw 4vw,
      top;
  }

  #sale-area {
    .swiper-slide {
      &:last-of-type {
        img {
          transform: scale(0.68);
          left: -23px;
          top: -13px;
        }
      }
    }
  }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  #tv-container {
    .background {
      padding-bottom: 185vw;
      .title {
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 95vw;
        top: 29vw;
      }
      .pro {
        width: 98vw;
        left: 0;
        right: 0;
        margin: 0 auto;
        top: 97vw;
        .swiper-wrapper {
          align-items: baseline;
        }
      }
    }
  }

  .background2 {
    background-size: 180% auto;
    background-position:
      -42vw 22vw,
      top;
  }

  .brand-group {
    .swiper-pagination {
      bottom: -6% !important;
    }
  }
}
</style>
