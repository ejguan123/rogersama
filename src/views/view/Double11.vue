<script setup>
import { Controller } from 'swiper/modules'
import { ref } from 'vue'
import listF from '../layout/listF.vue'
import DoubleFloor from '../floor/DoubleFloor.vue' //雙11樓層

const swiperRef1 = ref()
const swiperRef2 = ref()
const swiperRef3 = ref()
const swiperRef4 = ref()

/* 全站神券swiper用 start */
const onSwiperSP = (swiper) => {
  swiperRef1.value = swiper
}

const onControlSwiperSP = (swiper) => {
  swiperRef2.value = swiper
}

const goSlide = (id) => {
  swiperRef2.value.slideTo(id)
  swiperRef1.value.slideTo(id)
}
/* 全站神券swiper用 end */

/* 現折券swiper用 start */
const onSwiperSale = (swiper) => {
  swiperRef3.value = swiper
}

const onControlSwiperSale = (swiper) => {
  swiperRef4.value = swiper
}

const goSlideSale = (id) => {
  swiperRef4.value.slideTo(id)
  swiperRef3.value.slideTo(id)
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
      menuPrice: 7572, //挑戰最低價用
      specials: [
        { image: 'double11_2024/images/sp100.png', menu: 7519 },
        { image: 'double11_2024/images/sp200.png', menu: 7520 },
        { image: 'double11_2024/images/sp400.png', menu: 7521 },
        { image: 'double11_2024/images/sp500.png', menu: 7522 },
        { image: 'double11_2024/images/sp1000.png', menu: 7573 },
        { image: 'double11_2024/images/sp2000.png', menu: 7574 },
        { image: 'double11_2024/images/sp3000.png', menu: 7575 }
      ],
      special_after: [
        { image: 'double11_2024/images/part2/c-1111.png', menu: 7597 },
        { image: 'double11_2024/images/part2/c-111.png', menu: 7590 },
        { image: 'double11_2024/images/part2/c-211.png', menu: 7591 },
        { image: 'double11_2024/images/part2/c-411.png', menu: 7592 },
        { image: 'double11_2024/images/part2/c-511.png', menu: 7593 },
        { image: 'double11_2024/images/part2/c-1111b.png', menu: 7594 },
        { image: 'double11_2024/images/part2/c-2111.png', menu: 7595 },
        { image: 'double11_2024/images/part2/c-3011b.png', menu: 7596 }
      ],
      sales: [
        { image: 'double11_2024/images/c-100.png', menu: 7523 },
        { image: 'double11_2024/images/c-400.png', menu: 7524 },
        { image: 'double11_2024/images/c-500.png', menu: 7525 },
        { image: 'double11_2024/images/c-600.png', menu: 7526 },
        { image: 'double11_2024/images/c-700.png', menu: 7527 },
        { image: 'double11_2024/images/c-1000_b.png', menu: 7528 }
      ],
      statusSp: 0, //全戰神券樓層用
      statusSale: 0, //現折券樓層用
      asides: [
        { text: '環保商品', href: '#green' },
        { text: '全站神券', href: '#sp' },
        { text: 'Apple', href: '#pro7529' },
        { text: 'Android', href: '#pro7530' },
        { text: '高效筆電', href: '#pro7531' },
        { text: '美型筆電', href: '#pro7532' },
        { text: '桌機/螢幕', href: '#pro7533' },
        { text: '網通/印表機', href: '#pro7534' },
        { text: '電競', href: '#pro7535' },
        { text: '攝影/空拍機', href: '#pro7536' },
        { text: '電視', href: '#pro7537' },
        { text: '廚電', href: '#pro7538' },
        { text: '冰箱/洗衣機', href: '#pro7539' },
        { text: '掃除精選', href: '#pro7540' },
        { text: '健康美容', href: '#pro7541' },
        { text: '風扇', href: '#pro7542' },
        { text: '空調', href: '#pro7543' },
        { text: '秋冬除濕', href: '#pro7544' },
        { text: '廚房三機', href: '#pro7545' },
        { text: '機車', href: '#pro7546' }
      ],
      today: new Date(),
      isSale: true,
      vips: [
        { image: 'double11_2024/images/part2/S3-e1.png' },
        { image: 'double11_2024/images/part2/S3-e2.png' },
        { image: 'double11_2024/images/part2/S3-e3.png' }
      ],
      isVip: false,
      isAll: true,
      isGift: false,
      isComputer: false,
      spNum: 6.3
    }
  },
  mounted() {
    const { menuGo, menuGreen, sales, specials, menuPrice, today } = this

    //撈取挑戰最低價樓層商品
    this.getFloorSingle(menuPrice)

    //撈取環保樓層商品
    this.getFloorSingle(menuGreen)

    //撈取速速go樓層商品
    this.getFloorSingle(menuGo)

    //撈取全站神券樓層商品
    this.getFloorSingle(this.special_after[0].menu)

    //撈取現折券樓層商品
    this.getFloorSingle(sales[0].menu)

    // 11/1-12 隱藏現折券區
    if (today < new Date('2024/11/13')) {
      this.isSale = false
    }

    if (today >= new Date('2024/11/01') && today < new Date('2024/11/13')) {
      this.isVip = true
      this.isGift = true
    }

    if (today >= new Date('2024/11/01')) {
      this.specials = this.special_after
      this.isAll = false
    }

    if (today >= new Date('2024/11/05')) {
      specials.splice(0, 1)
    }

    if (today >= new Date('2024/11/01') && today < new Date('2024/11/05')) {
      this.isComputer = true
    }
  },
  methods: {
    changSp(id, menu) {
      if (event) {
        setTimeout(() => {
          this.statusSp = id
          this.getFloorSingle(menu)
        }, 20)
      }
    },
    changSale(id, menu) {
      if (event) {
        setTimeout(() => {
          this.statusSale = id
          this.getFloorSingle(menu)
        }, 20)
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
  <div id="double-container" v-cloak>
    <div class="background" :class="[today >= new Date('2024/11/01') ? 'new' : '']">
      <span class="logo">
        <img
          v-if="today < new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/logo.png')"
        />
        <img
          v-if="today >= new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/part2/logo.png')"
        />
      </span>
      <h2 class="title animate__animated animate__lightSpeedInLeft">
        <img
          v-if="today < new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/title.png')"
        />
        <img
          v-if="today >= new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/part2/title.png')"
        />
      </h2>
      <h5 class="subtitle">
        <img
          v-if="today < new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/subtitle2.png')"
        />
        <img
          v-if="today >= new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/part2/subtitle.png')"
        />
      </h5>
      <p class="circle animate__animated animate__bounceInRight">
        <img :src="$filters.siteUrl('double11_2024/images/sub2.png')" />
      </p>
      <p class="product">
        <img :src="$filters.siteUrl('double11_2024/images/item.png')" />
      </p>
    </div>

    <!-- 早鳥優惠 -->
    <section class="early-box">
      <p class="early-bg rel w:75% w:85vw@<992 w:90vw@<576 m:auto">
        <img
          v-if="today < new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/all1.png')"
        />
        <img
          v-if="today >= new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/part2/all1b.png')"
        />
      </p>
      <img
        class="w:85% w:90vw@<992 w:full@<576 abs m:auto h:full left:0 right:0 top:0 z:-1"
        :src="$filters.siteUrl('double11_2024/images/car_bg.png')"
      />
      <div class="flex flex-wrap:wrap gap:10 jc:center">
        <a
          v-if="today < new Date('2024/11/01')"
          class="w:15% w:20vw@<992 w:25vw@<576 m:0|2%"
          href="https://www.tk3c.com/dictitleurl.aspx?cid=123938"
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/btn1.png')" />
        </a>

        <a
          v-if="today >= new Date('2024/11/01')"
          class="w:15% w:20vw@<992 w:25vw@<576 m:0|2%"
          href="https://www.tk3c.com/dic2.aspx?cid=123970&aid=23887&hid=123978&strPreView=y"
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/btn1.png')" />
        </a>

        <a class="w:15% w:20vw@<992 w:25vw@<576 m:0|2%" @click="message">
          <img :src="$filters.siteUrl('double11_2024/images/btn2.png')" />
        </a>
      </div>
    </section>

    <!-- 3c家電大賞 -->
    <section v-if="isComputer">
      <a
        class="w:85% w:90vw@<992 w:95vw@<576"
        :href="
          $filters.addGALink(
            'https://www.tk3c.com/dic2.aspx?cid=123970&aid=23887&hid=123978&strPreView=y'
          )
        "
      >
        <img :src="$filters.siteUrl('double11_2024/images/bn_computer.jpg')" />
      </a>
    </section>

    <!-- 挑戰最低價 -->
    <section class="price-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('double11_2024/images/price_title2.png')" />
      </h2>

      <div class="bg01 list_F" v-if="product2[menuPrice] != undefined">
        <ul>
          <swiper
            class="overflow:hidden"
            :space-between="10"
            :navigation="{
              prevEl: `.price-box .prev`,
              nextEl: `.price-box .next`
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
                  rows: 3
                }
              },
              992: {
                slidesPerView: 4.3,
                grid: {
                  fill: 'row',
                  rows: 3
                }
              },
              1281: {
                slidesPerView: 5.3,
                grid: {
                  fill: 'row',
                  rows: 3
                }
              }
            }"
          >
            <swiper-slide class="bg:#fff" v-for="(proA, p) in product2[menuPrice]">
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
    </section>

    <!-- 滿額好禮 -->
    <section class="vip-group" v-if="isVip">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')">
          <img :src="$filters.siteUrl('double11_2024/images/part2/vip_title.png')" />
        </a>
      </h2>

      <swiper
        :loop="false"
        :space-between="10"
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
        <swiper-slide v-for="vip in vips">
          <a
            :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')"
            target="_blank"
          >
            <img :src="$filters.siteUrl(vip.image)" />
          </a>
        </swiper-slide>
      </swiper>
    </section>

    <!-- 全站活動 -->
    <section class="all-box" v-if="isAll">
      <ul class="gap:10">
        <li class="mb:1% w:80% w:85vw@<992 w:full@<576">
          <a
            :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')"
            target="_blank"
          >
            <img :src="$filters.siteUrl('double11_2024/images/all2.png')" />
          </a>
        </li>
        <li class="w:40% w:42vw@<992 w:45vw@<576">
          <a :href="$filters.addGALink('https://www.facebook.com/TDdd331')" target="_blank">
            <img :src="$filters.siteUrl('double11_2024/images/FB.png')" />
          </a>
        </li>
        <li class="w:40% w:42vw@<992 w:45vw@<576">
          <a :href="$filters.addGALink('https://page.line.me/tid7686u')" target="_blank">
            <img :src="$filters.siteUrl('double11_2024/images/line.png')" />
          </a>
        </li>
      </ul>
    </section>

    <!-- 線上獨家活動 -->
    <section class="gift-box" v-show="isGift">
      <img :src="$filters.siteUrl('double11_2024/images/part2/line.png')" />
      <div class="w:full h:full flex flex-wrap:wrap m:auto abs left:0 right:0 top:0">
        <a
          class="w:49% w:46vw@<576"
          :href="$filters.addGALink('https://www.facebook.com/TDdd331')"
        ></a>
        <a
          class="w:49% w:46vw@<576"
          :href="$filters.addGALink('https://page.line.me/tid7686u')"
        ></a>
      </div>
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
        <img
          v-if="today < new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/g1_3.png')"
        />
        <img
          v-if="today >= new Date('2024/11/01')"
          :src="$filters.siteUrl('double11_2024/images/part2/g1_3.png')"
        />
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

    <!-- 全站神券 -->
    <section class="special-box scroll" id="sp">
      <h2 class="title">
        <a
          v-if="today < new Date('2024/11/01')"
          :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123938')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/sp_title.png')" />
        </a>

        <a
          v-if="today >= new Date('2024/11/01')"
          :href="
            $filters.addGALink(
              'https://www.tk3c.com/dic2.aspx?cid=123970&aid=23887&hid=123978&strPreView=y'
            )
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/part2/sp_title2.png')" />
        </a>
      </h2>

      <div class="tab">
        <swiper
          :loop="false"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 2.4
            },
            600: {
              slidesPerView: 4.3
            },
            992: {
              slidesPerView: spNum
            }
          }"
          :modules="[Controller]"
          :controller="{
            control: [spContent]
          }"
          @swiper="onSwiperSP"
        >
          <swiper-slide
            v-for="(sp, s) in specials"
            :key="s"
            :class="[statusSp == s ? 'active' : '']"
            class="brightness(0.6) brightness(1).active"
            @click="goSlide(s)"
          >
            <a @click="changSp(s, sp.menu)"><img :src="$filters.siteUrl(sp.image)" alt /></a>
          </swiper-slide>
        </swiper>
      </div>

      <div class="special">
        <swiper
          id="spContent"
          :loop="false"
          :allowTouchMove="false"
          :modules="[Controller]"
          @swiper="onControlSwiperSP"
        >
          <swiper-slide class="tab-content" v-for="(sp, s) in specials" :key="s">
            <component :is="listF" :pro="product2[sp.menu]" :isSwiper="1" :name="'sp'"></component>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 現折券 -->
    <section class="sale-box" v-if="isSale">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=123908&aid=23881')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/sale_title.png')" />
        </a>
      </h2>

      <div class="tab">
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
              slidesPerView: 6
            }
          }"
          :modules="[Controller]"
          :controller="{
            control: [saleContent]
          }"
          @swiper="onSwiperSale"
        >
          <swiper-slide
            v-for="(sale, s) in sales"
            :key="s"
            :class="[statusSale == s ? 'active' : '']"
            class="brightness(0.6) brightness(1).active"
            @click="goSlideSale(s)"
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
          @swiper="onControlSwiperSale"
        >
          <swiper-slide class="tab-content" v-for="(sale, s) in sales" :key="s">
            <component
              :is="listF"
              :pro="product2[sale.menu]"
              :isSwiper="1"
              :name="'sp'"
            ></component>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 聯名卡 -->
    <section class="bank-group" id="bank">
      <h2 class="title">
        <img :src="$filters.siteUrl('double11_2024/images/bank_title.png')" />
      </h2>

      <ul class="gap:10 mb:2%">
        <li class="w:85% w:85vw@<992 w:full@<576">
          <img
            v-if="today < new Date('2024/11/01')"
            :src="$filters.siteUrl('double11_2024/images/bank1.png')"
          />
          <img v-else :src="$filters.siteUrl('double11_2024/images/part2/bank1b.png')" />
        </li>
      </ul>

      <div class="content rel w:85% w:85vw@<992 w:95vw@<576 m:auto">
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
            <img :src="$filters.siteUrl('double11_2024/images/bank2.png')" />
          </swiper-slide>
          <swiper-slide class="w:44% w:44vw@<992 w:94vw@<576">
            <img
              v-if="today < new Date('2024/11/01')"
              :src="$filters.siteUrl('double11_2024/images/bank3.png')"
            />
            <img v-else :src="$filters.siteUrl('double11_2024/images/part2/bank3.png')" />
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev prev"></div>
        <div class="swiper-button-next next"></div>
      </div>
      <a
        class="w:18% w:23vw@<992 w:40vw@<576 mt:2%"
        :href="
          $filters.addGALink(
            'https://www.taishinbank.com.tw/eServiceA/CreditCardAP/apply/index.jsp?pc=27&sl=1701029779'
          )
        "
        target="_blank"
      >
        <img :src="$filters.siteUrl('double11_2024/images/go_bank.png')" />
      </a>
    </section>

    <!-- 其他樓層 -->
    <DoubleFloor></DoubleFloor>
  </div>

  <!-- 左側選單 -->
  <!--<aside class="aside-container left" v-if="today >= new Date('2024/11/01')">
    <span class="collaspe"><i class="fas fa-chevron-left"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul></ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>-->

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
