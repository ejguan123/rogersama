<script setup>
import { Controller, EffectFlip, Parallax } from 'swiper/modules'
import { ref } from 'vue'
import listF from '../layout/listF.vue'
import listD from '../layout/listD.vue'
import ThankFloor from '../floor/ThankFloor.vue' //其他樓層

const swiperRef1 = ref()
const swiperRef2 = ref()

/* 現折券swiper用 start */
const onSwiper = (swiper) => {
  swiperRef1.value = swiper
}

const onControlSwiper = (swiper) => {
  swiperRef2.value = swiper
}

const goSlide = (id) => {
  swiperRef2.value.slideTo(id)
  swiperRef1.value.slideTo(id)
}
/* 現折券swiper用 end */
</script>

<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menuGreen: 7517, //環保商品陳列編號
      menuGo: 7518, //速速go陳列編號
      gifts: [
        { image: '2024Thxgiving/images/C1.png' },
        { image: '2024Thxgiving/images/C2.png' },
        { image: '2024Thxgiving/images/C3.png' },
        { image: '2024Thxgiving/images/C4.png' },
        { image: '2024Thxgiving/images/C5.png' }
      ],
      specials: [
        { image: '2024Thxgiving/images/S1-1.png', menu: 7478 },
        { image: '2024Thxgiving/images/S1-2.png', menu: 7479 }
      ],
      sales: [
        { image: '2024Thxgiving/images/s100.png', menu: 7590 },
        { image: '2024Thxgiving/images/s200.png', menu: 7591 },
        { image: '2024Thxgiving/images/s400.png', menu: 7592 },
        { image: '2024Thxgiving/images/s500.png', menu: 7593 },
        { image: '2024Thxgiving/images/s600.png', menu: 7594 },
        { image: '2024Thxgiving/images/s700.png', menu: 7595 },
        { image: '2024Thxgiving/images/s1000.png', menu: 7596 }
      ],
      statusSale: 0, //現折券樓層用
      asides: [
        { text: '現折券', href: '#sale' },
        { text: '環保商品', href: '#green' },
        { text: '台新燦坤聯名卡', href: '#bank' },
        { text: 'AI筆電', href: '#pro7560' },
        { text: 'Apple', href: '#pro7562' },
        { text: 'Android', href: '#pro7563' },
        { text: '印表機', href: '#pro7564' },
        { text: '平板/穿戴', href: '#pro7569' },
        { text: '遊戲', href: '#pro7571' },
        { text: '電視', href: '#pro7558' },
        { text: '季節家電', href: '#pro7555' },
        { text: '空調', href: '#pro7559' },
        { text: '健康美容', href: '#pro7556' },
        { text: '冰箱/洗衣機', href: '#pro7557' }
      ],
      today: new Date(),
      statusSp: 0, //好物封神榜用
      isSale: true
    }
  },
  mounted() {
    const { specials, today, sales, menuGreen, menuGo } = this

    //標題動畫
    setTimeout(() => {
      document.querySelector('.background .title').classList.add('fadein')
    }, 1300)

    //撈好物封神榜樓層商品
    this.getFloorSingle(specials[0].menu)

    //撈取現折券樓層商品
    this.getFloorSingle(sales[0].menu)

    //撈取環保樓層商品
    this.getFloorSingle(menuGreen)

    //撈取速速go樓層商品
    this.getFloorSingle(menuGo)
  },
  methods: {
    changeSp(id, menu) {
      if (event) {
        this.statusSp = id
        this.getFloorSingle(menu)
      }
    },
    changSale(id, menu) {
      if (event) {
        setTimeout(() => {
          this.statusSale = id
          this.getFloorSingle(menu)
        }, 30)
      }
    },
    message(id) {
      //活動辦法

      let infoHtml = ''
      //雙11搶先購物券
      infoHtml = `
              <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.本活動限燦坤線上購物會員參加，凡於活動期間(2024/10/24-2024/10/31)於燦坤線上購物網站購買活動指定商品，除享有「促銷價」的折扣外，另外可再領取「雙11搶先購物券」直接折抵結帳金額。​</li>
             <li style='margin-bottom:10px;'>2.購買「指定價位(促銷價)區間」活動指定商品，每台可折抵「雙11搶先購物券」乙張，限量兌換折抵，兌完截止(依兌換次序為準)：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1)指定商品單品促銷價4,000元(含)~7,999元(含)：每台可折抵「100元雙11搶先購物券」一張，限量40張。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2)指定商品單品促銷價8,000元(含)~14,999元(含)：每台可折抵「200元雙11搶先購物券」一張，限量40張。​</li>
              <li style='margin-bottom:10px;padding-left:10px;'>(3)指定商品單品促銷價15,000元(含)以上：每台可折抵「500元雙11搶先購物券」一張，限量30張。​</li>
               <li style='margin-bottom:10px;'>3.活動期間獲得之「雙11搶先購物券」之限量兌換張數及使用限制:​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1)每人每種券限領取一次，本活動之「雙11搶先購物券」為限量兌換，依兌換次序為準，並非一經領取即得兌換，限量兌換以完成結帳付款時間為準，逾期/超過限量名額自動失效。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2)兌換期間為活動期間，逾期自動失效；直接於結帳時兌換折抵即可，一經使用即失效，事後退/換貨，恕不再補發，請注意如您選擇使用本券，則結帳時無法再選擇使用「燦坤發行的燦坤線上購物網站購物金或其他折抵憑證」。​</li>
              <li style='margin-bottom:10px;padding-left:10px;'>(3)本活動之券，限一次使用完畢，不得兌換現金、找零及抵付費用(運費、裝備等)，折抵後依燦坤保固規定辦理。(本券屬贈品券，折抵商品時不再開立統一發票) ​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(4)如遇各品牌官網舉辦之活動有金額限制時，因本券會直接折抵結帳金額，可能會造成您無法參加各品牌官網活動，請斟酌使用。​</li>
              <li style='margin-bottom:10px;padding-left:10px;'>(5)本活動不與其他優惠活動併行，例如：凡使用其他專案優惠活動購買之商品，就不能再使用本活動之券。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(6)其餘使用限制及規則依各券面及網站記載事項辦理。​</li>
              <li style='margin-bottom:10px;'>4.活動未盡事宜以燦坤線上購物官網公告為主，燦坤線上購物保留活動最終解釋、修改、變更之權利。</li>
        </ul>
          `

      Swal.fire({
        width: 1000,
        title: "<p style='margin-bottom:5px';>活動辦法</p>",
        html: infoHtml,
        showCloseButton: true,
        confirmButtonText: '關閉',
        position: 'center',
        confirmButtonColor: '#000',
        returnFocus: true,
        scrollbarPadding: false
      })
    }
  }
}
</script>

<template>
  <div id="thank-container" v-cloak>
    <div class="background">
      <h2 class="title animate__animated animate__bounceInUp">
        <img :src="$filters.siteUrl('2024Thxgiving/images/title.png')" />
      </h2>
      <p class="ribbon">
        <img :src="$filters.siteUrl('2024Thxgiving/images/ribbon.png')" />
      </p>

      <img
        class="w:60% w:68vw@<992 w:full@<576 scale(1.8)@<576 h:auto abs top:39% top:40vw@<992 top:98vw@<576 left:0 left:2vw@<576 right:0 m:auto"
        :src="$filters.siteUrl('2024Thxgiving/images/C_BOX.png')"
      />

      <div
        class="abs w:58% w:65vw@<992 w:90vw@<576 top:48% top:46vw@<992 top:99vw@<576 left:0 right:0 m:auto"
      >
        <swiper
          :loop="false"
          :autoplay="{
            delay: 1300,
            disableOnInteraction: false
          }"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 1
            },
            600: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 2.5
            }
          }"
        >
          <swiper-slide v-for="gift in gifts">
            <img :src="$filters.siteUrl(gift.image)" />
          </swiper-slide>
        </swiper>
        <a class="w:15% w:16vw@<992 w:35vw@<576 h:auto block m:auto">
          <img :src="$filters.siteUrl('2024Thxgiving/images/info.png')"
        /></a>
      </div>
    </div>

    <div id="confetti"></div>
    <p class="item">
      <img :src="$filters.siteUrl('2024Thxgiving/images/item.png')" />
    </p>

    <!-- 好物封神榜 -->
    <section class="special-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2024Thxgiving/images/S1.png')" />
      </h2>

      <div class="flex flex-wrap:wrap gap:10 jc:center mb:1% mb:3%@<576">
        <a
          v-for="(special, s) in specials"
          :class="[statusSp == s ? 'active' : '']"
          class="w:30% w:40vw@<992 w:45vw@<576 m:0|0 opacity(0.7) opacity(1).active"
          @click="changeSp(s, special.menu)"
          ><img :src="$filters.siteUrl(special.image)"
        /></a>
      </div>

      <div v-for="(special, s) in specials" v-show="statusSp == s">
        <component :is="listD" :pro="product2[special.menu]"></component>
      </div>
    </section>

    <!-- 現折券 -->
    <section class="sale-box scroll" v-if="isSale" id="sale">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=123908&aid=23881')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('2024Thxgiving/images/S2.png')" />
        </a>
      </h2>

      <div class="tab mb:1%">
        <swiper
          :loop="false"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 2.4
            },
            600: {
              slidesPerView: 3.3
            },
            992: {
              slidesPerView: 6.4
            }
          }"
          :modules="[Controller]"
          :controller="{
            control: [saleContent]
          }"
          @swiper="onSwiper"
        >
          <swiper-slide
            v-for="(sale, s) in sales"
            :key="s"
            :class="[statusSale == s ? 'active' : '']"
            class="hue-rotate(-560deg).active"
            @click="goSlide(s)"
          >
            <a @click="changSale(s, sale.menu)">
              <img :src="$filters.siteUrl(sale.image)" alt />
            </a>
          </swiper-slide>
        </swiper>
      </div>

      <div class="sale-area">
        <swiper
          id="saleContent"
          :loop="false"
          :allowTouchMove="false"
          :modules="[Controller]"
          @swiper="onControlSwiper"
        >
          <swiper-slide class="tab-content" v-for="(sale, s) in sales" :key="s">
            <component
              :is="listF"
              :pro="product2[sale.menu]"
              :isSwiper="1"
              :name="'sale'"
            ></component>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 聯名卡 -->
    <section class="bank-group scroll" id="bank">
      <h2 class="title">
        <img :src="$filters.siteUrl('2024Thxgiving/images/S3.png')" />
      </h2>

      <ul class="gap:10 mb:2%">
        <li class="w:90% w:90vw@<992 w:full@<576">
          <a
            :href="
              $filters.addGALink(
                'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main'
              )
            "
            target="_blank"
          >
            <img class="pc" :src="$filters.siteUrl('2024Thxgiving/images/S3-1_PC.png')" />
            <img class="mobile" :src="$filters.siteUrl('2024Thxgiving/images/S3-1_M.png')" />
          </a>
        </li>
        <li class="w:90% w:90vw@<992 w:full@<576">
          <swiper
            :loop="false"
            :space-between="10"
            :breakpoints="{
              0: {
                slidesPerView: 1
              },
              600: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 2
              }
            }"
            :navigation="{
              prevEl: '.bank-group .prev',
              nextEl: '.bank-group .next'
            }"
          >
            <swiper-slide class="w:44% w:44vw@<992 w:94vw@<576">
              <a
                :href="
                  $filters.addGALink(
                    'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main'
                  )
                "
                target="_blank"
              >
                <img :src="$filters.siteUrl('2024Thxgiving/images/S3-2.png')" />
              </a>
            </swiper-slide>
            <swiper-slide class="w:44% w:44vw@<992 w:94vw@<576">
              <a
                :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123139')"
                target="_blank"
              >
                <img :src="$filters.siteUrl('2024Thxgiving/images/S3-3.png')" />
              </a>
            </swiper-slide>
          </swiper>
          <div class="swiper-button-prev prev"></div>
          <div class="swiper-button-next next"></div>
        </li>
      </ul>
    </section>

    <!-- 環保商品 -->
    <section class="green-box scroll" id="green">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://events.tk3c.com/events_net/green_subsidy/index.html')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/green_title2.png')" />
        </a>
      </h2>

      <p class="w:85% w:80vw@<992 w:full@<576 m:auto p:2%|0|2% m:2%|0|0@<576">
        <img :src="$filters.siteUrl('double11_2024/images/part2/g1_3.png')" />
      </p>
      <img
        class="green-bg abs w:full left:0 right:0 m:auto top:13% top:16vw@<992 hidden@<576 z:-1"
        :src="$filters.siteUrl('double11_2024/images/green_bg.png')"
      />

      <div class="box">
        <component
          :is="listF"
          :pro="product2[menuGreen]"
          :isSwiper="1"
          :name="'green-pro'"
        ></component>
      </div>
    </section>

    <!-- 速速go -->
    <section class="go-group">
      <h2 class="title">
        <a
          :href="
            $filters.addGALink('https://events.tk3c.com/events_net/tk3c_fastdelivery/index.html')
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/go_title.png')" />
        </a>
      </h2>

      <div class="box">
        <component :is="listF" :pro="product2[menuGo]" :isSwiper="1" :name="'go-box'"></component>
      </div>
    </section>

    <!-- 其他樓層 -->
    <ThankFloor></ThankFloor>
  </div>

  <!-- 左側選單 -->
  <aside class="aside-container left">
    <span class="collaspe"><i class="fas fa-chevron-left"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul></ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="arrow"><i class="fas fa-chevron-left"></i></span>
    <div class="aside-wrap">
      <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li v-for="(aside, a) in asides">
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

@import '../../../src/assets/sass/module/base';
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2024Thxgiving/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/2024Thxgiving/images/';

/*  共用樣式調整 */
body {
  background: #86000a;
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
    background-size: 107% auto;
    background-position:
      0 45px,
      top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -2;
  }
}

.aside-container {
  zoom: 0.9;
}

.bg01 {
  background: #fca841;
  border-radius: 10px;
  box-sizing: border-box;
}

#thank-container {
  .background {
    $image: $origin + 'KV_PC.png';
    @include bg-responsive($image, 2000, 1657);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 83%;
    .title {
      width: 36%;
      position: absolute;
      left: 0;
      right: 0;
      top: 8%;
      margin: 0 auto;
      animation-duration: 1.6s;
      opacity: 0;
      &.fadein {
        opacity: 1;
        animation: bg-wave2 0.8s ease-in;
      }
    }
    .ribbon {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 21%;
    }
  }
}

section {
  .swiper-wrapper {
    padding-bottom: 5px;
    box-sizing: border-box;
  }
}

.special-box {
  margin: -20% auto 5%;
  .title {
    width: 100%;
  }
}

.green-box {
  .bg01 {
    background: #d3ffcd;
    border-radius: 0;
  }
}

.go-group {
  .bg01 {
    background: #575757;
    border-radius: 0;
  }
}

.sale-box {
  .bg01 {
    background: #fe9694;
    border-radius: 0;
  }
}

.air-box {
  .bg01 {
    margin: 0 auto 2%;
  }
  .banner-brands {
    .banner1 {
      .swiper-pagination {
        bottom: 3% !important;
      }
    }
  }
}

.print-box {
  .swiper-wrapper {
    justify-content: center;
  }
}

/*  電腦版其他尺寸 */

@include media-query('mobile', '1440px') {
  .aside-container {
    zoom: 0.5;
  }
}
@include media-query('mobile', '992px') {
  #thank-container {
    .background {
      background-size: 120% auto;
      background-position:
        -10vw 4vw,
        top;
      padding-bottom: 96vw;

      .title {
        width: 45vw;
        top: 9vw;
      }
    }
  }

  .print-box {
    .swiper-wrapper {
      justify-content: left;
    }
  }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #thank-container {
    .background {
      background-size: 180% auto;
      background-position:
        -40vw 21vw,
        top;
      padding-bottom: 190vw;
      .title {
        width: 85vw;
        top: 25vw;
      }
    }
  }

  .air-box {
    .bg01 {
      margin: 0 auto 4%;
    }
  }
}
</style>
