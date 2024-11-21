<script setup>
import { EffectFade, Parallax } from 'swiper/modules'
import listF from '../../layout/listF.vue'
import TVFloor from '../../floor/TVFloor.vue'
import { ref } from 'vue'
import AllEvent from '../../../components/AllEvent.vue' //全站活動

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
          url: 'https://www.tk3c.com/pt.aspx?pid=250546',
          image: '2020TVforever/images/2411/pd1.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=250718',
          image: '2020TVforever/images/2411/pd2.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=228183',
          image: '2020TVforever/images/2411/pd3.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=228009',
          image: '2020TVforever/images/2411/pd4.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=250175',
          image: '2020TVforever/images/2411/pd5.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=245385',
          image: '2020TVforever/images/2411/pd6.png'
        }
      ],
      gifts: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=116121',
          image: '2020TVforever/images/2411/s1-1.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=11312&aid=23889',
          image: '2020TVforever/images/2411/s1-2.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4708&hid=60645',
          image: '2020TVforever/images/2411/s1-3.png'
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
          image: '2020TVforever/images/2409/ncta2.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=119275&aid=23435&hid=121793&strPreView=y',
          image: '2020TVforever/images/2409/ncta1.png'
        }
      ],
      floorImg: [
        {
          url: 'https://www.tk3c.com/search.aspx?q=%E9%9B%BB%E8%A6%96',
          image: '2020TVforever/images/2410/S5.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88783',
          image: '2020TVforever/images/2411/S6.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105564',
          image: '2020TVforever/images/2411/S7.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88767',
          image: '2020TVforever/images/2411/S8.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105586',
          image: '2020TVforever/images/2411/S9.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
          image: '2020TVforever/images/2411/S10.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=828',
          image: '2020TVforever/images/2411/S11.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=828&aid=331',
          image: '2020TVforever/images/2411/S12.png'
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

    // 2024/11/1-12 隱藏線折券樓層
    if (today >= new Date('2024/11/01') && today < new Date('2024/11/13')) {
      this.isDis = false
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

<style lang="scss">
@charset "utf-8";

@import '../../../assets/sass/module/base';
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2020TVforever/images/2411/';
$origin: 'https://events.tk3c.com/events_net/events_net/2020TVforever/images/2411/';

/*  共用樣式調整 */
body {
  background: #8ec7e3;
}

form#form1 {
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.png';
    background: url($image) repeat-y center;
    background-size: 100% auto;
    background-position:
      0 0,
      top;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    margin: 0 auto;
    z-index: -1;
  }
}

.bg01 {
  background: #92f9c5;
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
    .product {
      width: 30%;
      position: absolute;
      right: 16%;
      top: 31%;
    }
    .title {
      width: 35%;
      position: absolute;
      left: 17%;
      top: 22%;
      animation: slide-down 1.6s ease-in;
      img {
        animation: tada 1.2s linear;
        animation-delay: 1.5s;
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

.sale-group {
  .tab-content {
    .bg01 {
      background: #dd9b3f;
      margin: 0 auto 0;
    }
  }
}

.discount-box {
  .bg01 {
    background: #fc6125;
    margin: 0 auto 1%;
  }
}

.night-box {
  .bg01 {
    background: none;
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

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #tv-container {
    .background {
      padding-bottom: 46vw;
      .title {
        width: 45vw;
        top: 11vw;
        left: 10vw;
      }
      .product {
        width: 40vw;
        right: 4vw;
        top: 14vw;
      }
      .gift {
        top: 5vw;
      }
    }
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
      padding-bottom: 180vw;
      .title {
        left: 0;
        right: 0;
        margin: 0 auto;
        width: 95vw;
        top: 29vw;
      }
      .product {
        width: 98vw;
        left: 8vw;
        right: 0;
        margin: 0 auto;
        top: 97vw;
        .swiper-wrapper {
          align-items: baseline;
        }
      }
      .gift {
        top: 22vw;
      }
    }
  }

  .night-box {
    .title {
      .more {
        right: -5vw;
        top: 1vw;
      }
    }
  }
}
</style>

<template>
  <div id="tv-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2411/title2.png')" alt="" />
      </h2>

      <p class="gift">
        <img :src="$filters.siteUrl('2020TVforever/images/2411/de.png')" />
      </p>

      <div class="product">
        <swiper
          :loop="true"
          :effect="'fade'"
          :fadeEffect="{
            crossFade: true
          }"
          :parallax="true"
          :autoplay="{ delay: 1600, disableOnInteraction: false }"
          :modules="[EffectFade, Parallax]"
        >
          <swiper-slide v-for="(pro, p) in proTV" :key="p">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-opacity="0">
              <img :src="$filters.siteUrl(pro.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div id="confetti"></div>
    <div class="background2"></div>

    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2411/s1.png')" alt="" />
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

    <AllEvent></AllEvent>

    <!-- 現折券 -->
    <section class="discount-box" id="dis" v-if="isDis">
      <h2 class="title">
        <img :src="$filters.siteUrl('2020TVforever/images/2411/s2.png')" alt="" />
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
        <img :src="$filters.siteUrl('2020TVforever/images/2411/s3.png')" alt="" />
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
        <img :src="$filters.siteUrl('2020TVforever/images/2411/s4.png')" alt="" />
      </h2>

      <div class="content">
        <ul class="tab gap:10 mb:2%">
          <li
            v-for="(night, n) in nights"
            :key="n"
            :class="[statusNight == n ? 'active' : '']"
            class="w:20% w:35vw@<992 w:42vw@<576 translateZ(0) grayscale(1) grayscale(0).active"
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
        <img :src="$filters.siteUrl('2020TVforever/images/2411/S5.png')" alt="" />
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
