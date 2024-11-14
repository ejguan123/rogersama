<script setup>
import listF from '../layout/listF.vue'
</script>

<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menus: [7617, 7618, 7619, 7620, 7621, 7622, 7623, 7624], //商品陳列編號
      gifts: [
        { image: 'banquet/images/sp01.png' },
        { image: 'banquet/images/sp02.png' },
        { image: 'banquet/images/sp03.png' },
        { image: 'banquet/images/sp04.png' },
        { image: 'banquet/images/sp05.png' },
        { image: 'banquet/images/sp06.png' }
      ],
      floorImg: [
        {
          image: 'banquet/images/bar01.png',
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=40444'
        },
        {
          image: 'banquet/images/bar02.png',
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=93605'
        },
        {
          image: 'banquet/images/bar03.png',
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=40343'
        },
        {
          image: 'banquet/images/bar04.png'
        },
        {
          image: 'banquet/images/bar05.png'
        },
        {
          image: 'banquet/images/bar06.png'
        },
        {
          image: 'banquet/images/bar07.png'
        },
        {
          image: 'banquet/images/bar08.png',
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=71484'
        }
      ],
      asides: [
        { text: 'Apple' },
        { text: '三星' },
        { text: '穿戴裝置' },
        { text: '50000以上' },
        { text: '20000-49999' },
        { text: '10000-19999' },
        { text: '9999以下' },
        { text: 'Dyson/石頭/追覓' },
        { text: '聯絡方式', href: '#contact' }
      ],
      gift2: [
        { image: 'banquet/images/gift1_2.png' },
        { image: 'banquet/images/gift2.png' },
        { image: 'banquet/images/gift3.png' },
        { image: 'banquet/images/gift4.png' },
        { image: 'banquet/images/gift5.png' },
        { image: 'banquet/images/gift6.png' },
        { image: 'banquet/images/gift7.png' },
        { image: 'banquet/images/gift8.png' }
      ],
      today: new Date(),
      statusSp: 0, //好物封神榜用
      isSale: true,
      isGift: true
    }
  },
  mounted() {
    const { today } = this

    //撈好樓層商品
    this.getFloorData(this.menus)
  },
  methods: {
    message() {
      let infoHtml = `
              <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>(1)活動期間消費金額之計算，以實際發票開立金額為主，購買Apple、小米、Dyson、點數卡與提貨券系列商品之消費金額恕不累計。​</li>
             <li style='margin-bottom:10px;'>(2)如符合活動條件且選擇送券者，券使用期限至2025/12/31，逾期失效，燦坤得拒絕本券之使用，其餘限制及規則依券面記載事項辦理。​</li>
             <li style='margin-bottom:10px;'>(3)若發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)致發票金額不達滿額門檻，須退還贈品或補足券面金額，若贈品已使用(拆封外盒視同使用等)，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:10px;'>(4)涉及大宗採購且(或)有議價時，因已經過議價給予價格優惠，該筆交易(發票)將無法參與本活動。​</li>
              <li style='margin-bottom:10px;'>(5)本活動不與其他優惠活動(包含會員特典滿額禮活動、銀行全月單筆分期活動、抽獎或現折券等專案活動)併行活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
          `

      Swal.fire({
        width: 800,
        title: "<p style='margin-bottom:5px';>活動條件限制</p>",
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
  <div id="banquet-container" v-cloak>
    <div class="background">
      <h2 class="title animate__animated animate__fadeInDownBig">
        <img :src="$filters.siteUrl('banquet/images/title.png')" />
      </h2>
      <p class="product animate__animated animate__fadeInRight">
        <img :src="$filters.siteUrl('banquet/images/product.png')" />
      </p>
    </div>

    <div id="confetti"></div>

    <!-- 滿額禮 -->
    <section>
      <h2
        class="rel w:full w:112%@<992 w:150%@<576 m:0|auto|-1% m:0|-6%|-6px@<992 m:0|-26%|-5px@<576"
      >
        <a :href="$filters.addGALink('https://www.tk3c.com/other_store.aspx')">
          <img :src="$filters.siteUrl('banquet/images/spA_bar.png')" />
        </a>
        <b
          class="w:10% w:14vw@<992 w:25vw@<576 cursor:pointer bg:red color:#fff f:bold r:30px p:1% box:border-box abs right:21% right:21vw@<992 top:87% top:26vw@<992 top:32vw@<576 z:10"
          @click.prevent="message"
          >活動詳情</b
        >
      </h2>

      <div
        class="w:90% w:full@<992 w:110%@<576 m:auto m:0|-5%|0@<576 bg:#f3ce93 p:2% box:border-box"
      >
        <swiper
          :loop="false"
          :space-between="10"
          :autoplay="{
            delay: 1400,
            disableOnInteraction: false
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1.3
            },
            600: {
              slidesPerView: 3
            },
            992: {
              slidesPerView: 3
            }
          }"
        >
          <swiper-slide v-for="gift in gifts">
            <img :src="$filters.siteUrl(gift.image)" />
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 樓層區 -->
    <section class="scroll" v-for="(floor, f) in floorImg">
      <h2 class="title" :id="`pro${menus[f]}`">
        <a v-if="floor.url != undefined" :href="$filters.addGALink(floor.url)" target="_blank">
          <img :src="$filters.siteUrl(floor.image)" />
        </a>
        <img v-else :src="$filters.siteUrl(floor.image)" />
      </h2>

      <div class="box">
        <component
          v-if="products[menus[f]] != undefined"
          :is="listF"
          :pro="products[menus[f]].Data"
        ></component>
      </div>
    </section>

    <!-- 聯絡方式 -->
    <section class="scroll" id="contact">
      <h2 class="w:full w:112%@<992 w:150%@<576 m:0|auto|-1% m:0|-6%|-5px@<992 m:0|-26%|-5px@<576">
        <img :src="$filters.siteUrl('banquet/images/spB_bar.png')" />
      </h2>

      <div
        class="w:90% w:full@<992 w:110%@<576 m:auto m:0|-5%|0@<576 bg:#f3ce93 p:2% box:border-box"
      >
        <div>
          <swiper
            :loop="false"
            :space-between="10"
            :breakpoints="{
              0: {
                slidesPerView: 1.1
              },
              600: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 2
              }
            }"
          >
            <swiper-slide>
              <a
                class="w:60% w:42vw@<992 w:70vw@<576 mb:2% mb:5%@<992"
                :href="
                  $filters.addGALink(
                    'https://events.tk3c.com/events_net/events_net/201512_service/index.html'
                  )
                "
                target="_blank"
              >
                <img :src="$filters.siteUrl('banquet/images/B_bn01.png')" />
              </a>
              <img :src="$filters.siteUrl('banquet/images/B_sp_01.png')" />
            </swiper-slide>

            <swiper-slide>
              <a
                class="w:60% w:42vw@<992 w:70vw@<576 mb:2% mb:5%@<992"
                :href="
                  $filters.addGALink(
                    'https://events.tk3c.com/events_net/events_net/201512_service/index.html'
                  )
                "
                target="_blank"
              >
                <img :src="$filters.siteUrl('banquet/images/B_bn02.png')" />
              </a>
              <img :src="$filters.siteUrl('banquet/images/B_sp_02.png')" />
            </swiper-slide>
          </swiper>
        </div>

        <div class="w:full mt:2% flex flex-wrap:wrap gap:10 jc:center">
          <h1
            class="w:36% w:70vw@<992 w:90vw@<576 color:#a1622b f:2em f:3em@<992 f:2em@<576 f:bold"
          >
            專人服務 聯絡方式
          </h1>
          <ol
            class="w:60% w:88vw@<992 w:90vw@<576 text:left color:#a1622b f:1.2em f:1.5em@<992 f:1.2em@<361"
          >
            <li class="flex flex-wrap:wrap mb:10px">
              請洽企業窗口專人服務信箱:
              <address class="color:blue">cust_mange@tk3c.com</address>
            </li>
            <li class="flex flex-wrap:wrap mb:10px mb:20px@<576">
              <div class="flex flex-direction:row">
                或電聯:<span class="color:blue pr:5px"
                  ><a href="tel:0277203999">02-7720-3999</a></span
                >
                |
              </div>
              <div class="flex flex-direction:row">
                簡小姐分機: <span class="color:blue pr:5px">10806</span> |
              </div>
              <div class="flex flex-direction:row">
                陳小姐分機: <span class="color:blue pr:5px">10832</span>
              </div>
            </li>
            <li class="flex flex-wrap:wrap w:auto mb:10px">
              或全省門市
              <a
                class="w:21% w:18vw@<992 w:28vw@<576 m:0|2%"
                :href="$filters.addGALink('https://www.tk3c.com/other_store.aspx')"
              >
                <img :src="$filters.siteUrl('banquet/images/shop.png')" />
              </a>
            </li>
          </ol>
        </div>
      </div>
    </section>
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
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li v-for="(aside, a) in asides">
            <a :href="[a == 8 ? aside.href : `#pro${menus[a]}`]">{{ aside.text }}</a>
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
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/banquet/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/banquet/images/';

/*  共用樣式調整 */
body {
  background: #a32121;
}

form#form1 {
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.jpg';
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

.bg01 {
  background: #fca841;
}

#banquet-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 40%;
    .title {
      width: 75%;
      position: absolute;
      left: 0;
      right: 0;
      top: 45px;
      margin: 0 auto;
      animation-duration: 2s;
    }
    .product {
      width: 35%;
      position: absolute;
      right: 3%;
      margin: 0 auto;
      top: 24%;
      animation-duration: 1.3s;
    }
  }
}

/*  電腦版其他尺寸 */

@include media-query('mobile', '992px') {
  #banquet-container {
    .background {
      padding-bottom: 55vw;
      .title {
        width: 90vw;
      }
      .product {
        width: 45vw;
        right: -6vw;
        top: 13vw;
      }
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

  #banquet-container {
    .background {
      padding-bottom: 140vw;
      .title {
        width: 140%;
        top: 21vw;
        left: -23vw;
      }
      .product {
        width: 85vw;
        top: 65vw;
        right: 0;
        left: 0;
        margin: 0 auto;
      }
    }
  }
}
</style>
