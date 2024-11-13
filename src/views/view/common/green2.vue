<script setup>
import { Controller } from 'swiper/modules'
import listF from '../../layout/listF.vue'
import listD from '../../layout/listD.vue'
import { ref } from 'vue'

const swiperRef1 = ref()
const swiperRef2 = ref()
const swiperRefNew = ref()

/* 環保集點專區start */
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

/* 環保集點專區end */

/* 週末16%回饋區 start */
const onSwiperNew = (swiper) => {
  swiperRefNew.value = swiper
}

const goSlideNew = (id) => {
  swiperRefNew.value.slideTo(id)
}

/* 週末16%回饋區 end */
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      tabs: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120395&strPreView=y',
          image: 'green_subsidy/images/tab1.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120392&strPreView=y',
          image: 'green_subsidy/images/tab2.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120393&strPreView=y',
          image: 'green_subsidy/images/tab3.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120394&strPreView=y',
          image: 'green_subsidy/images/tab4.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120396&strPreView=y',
          image: 'green_subsidy/images/tab5_a.png'
        }
      ],
      printers: [{ text: '主機' }, { text: '耗材' }],
      floorImg: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120393',
          image: 'green_subsidy/images/S3_a.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120394',
          image: 'green_subsidy/images/S4_a.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120392',
          image: 'green_subsidy/images/S5_a.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120392',
          image: 'green_subsidy/images/S6_a.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120395',
          image: 'green_subsidy/images/S7_a.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120816',
          image: 'green_subsidy/images/S8_a.png'
        }
      ],
      menu: [4348, 4349, 4350, 4352, 4353, 4369],
      menuGreen: [4344, 4345, 4346, 4347, 4390],
      menuPrint: [7394, 7395],
      status: 0,
      stausPrinter: 0,
      statusNew: 0,
      today: new Date(),
      fullData: [],
      menuSp: 4850,
      isVip: true,
      isNew: false
    }
  },
  mounted() {
    const { menu, tabs, menuSp, today } = this

    //撈取綠點新鮮貨樓層
    this.getFloorSingle(menuSp)

    //撈取環保集點樓層商品
    this.getFloorData(this.menuGreen)

    //撈取印表機樓層
    this.getFloorData(this.menuPrint)

    //剩下樓層
    this.getFloorData(menu)

    if (today >= new Date('2024/11/13')) {
      this.isVip = false
    }

    // 10.26-11.10 每週六日顯示
    if (today >= new Date('2024/10/26') && today < new Date('2024/11/11')) {
      if (today.getDay() == 6 || today.getDay() == 0) {
        this.isNew = true
      }
    }
  },
  methods: {
    changeGreen(id) {
      if (event) {
        this.status = id
      }
    },
    changePrinter(id) {
      this.stausPrinter = id
    },
    message(id) {
      //活動說明
      let infoHtml = ''

      if (id == 1) {
        infoHtml = `
          <img src="https://www.tk3c.com/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg" width="100%">
          <img src="https://www.tk3c.com/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg" width="100%">
        `
      } else if (id == 2) {
        infoHtml = `
          <img src="https://www.tk3c.com/image/UserFiles/sgs-2024-1.jpg" width="100%">
          <img src="https://www.tk3c.com/image/UserFiles/sgs-2024-2.jpg" width="100%">
        `
      }

      Swal.fire({
        width: 900,
        html: infoHtml,
        padding: '1em',
        showCloseButton: true,
        position: 'center',
        returnFocus: false,
        confirmButtonText: '確定',
        confirmButtonColor: '#000'
      })
    }
  }
}
</script>

<template>
  <div id="green-container" v-cloak>
    <div class="background">
      <span class="logo" v-if="isVip">
        <img :src="$filters.siteUrl('double11_2024/images/logo.png')" />
      </span>
      <h2
        class="title w:25% abs right:26% top:19% m:auto w:40vw@<992 w:55vw@<576 left:45vw@<992 left:44vw@<576 top:9vw@<992 top:22vw@<576"
      >
        <img :src="$filters.siteUrl('green_subsidy/images/new/title.png')" alt="" />
      </h2>
    </div>

    <!-- 環保3C家電產品 週末16%回饋 -->
    <section class="new-box" v-if="isNew">
      <div class="w:full flex jc:center flex-wrap:wrap gap:10 m:0|0|5% m:0|0|10%@<576">
        <a href="#info" class="w:42% w:45vw@<992 w:90vw@<576 m:0|0|4%"
          ><img :src="$filters.siteUrl('green_subsidy/images/new/btn1.png')"
        /></a>
        <a
          :href="
            $filters.addGALink('https://events.tk3c.com/events_net/greenpoint.tk3c/index.html')
          "
          class="w:42% w:45vw@<992 w:90vw@<576 m:0|0|4%"
          target="_blank"
          ><img :src="$filters.siteUrl('green_subsidy/images/new/btn2.png')"
        /></a>

        <div class="rel m:auto" id="info">
          <img
            class="w:full abs left:0 top:0 right:0 z:-1 hidden@<576"
            :src="$filters.siteUrl('green_subsidy/images/new/g1.png')"
          />
          <p class="w:90% w:full@<576 m:auto pt:1.5%">
            <img :src="$filters.siteUrl('green_subsidy/images/new/g3.png')" />
          </p>
        </div>
      </div>

      <div class="box">
        <!-- 頁籤 -->
        <div class="flex flex-wrap:wrap gap:10 mb:1%">
          <swiper
            :loop="false"
            :space-between="10"
            :breakpoints="{
              0: {
                slidesPerView: 2.4,
                grid: {
                  fill: 'row',
                  rows: 1
                }
              },
              600: {
                slidesPerView: 4.3,
                grid: {
                  fill: 'row',
                  rows: 1
                }
              },
              992: {
                slidesPerView: 7,
                grid: {
                  fill: 'row',
                  rows: 2
                }
              }
            }"
            @swiper="onSwiperNew"
          >
            <swiper-slide
              v-for="(newTab, n) in newTabs"
              :class="[statusNew == n ? 'active' : '']"
              class="w:20% brightness(0.7) brightness(1).active"
              @click="goSlideNew(n)"
            >
              <a @click="changeNew(n, newTab.menu)"
                ><img :src="$filters.siteUrl(newTab.image)"
              /></a>
            </swiper-slide>
          </swiper>
        </div>

        <!-- 對應商品 -->
        <div class="tab-content" v-for="(newTab, n) in newTabs" v-show="statusNew == n">
          <component :is="listF" :pro="product2[newTab.menu]"></component>
        </div>
      </div>
    </section>

    <!-- 本週環保小尖兵 -->
    <section class="special-group scroll" id="special">
      <h2 class="title">
        <img :src="$filters.siteUrl('green_subsidy/images/S1_a.png')" alt="本週環保小尖兵" />
      </h2>
      <div class="special">
        <component :is="listD" :pro="product2[menuSp]"></component>
      </div>
    </section>

    <!-- 綠點 -->
    <section class="green-box scroll" id="green">
      <h2 class="title">
        <img :src="$filters.siteUrl('green_subsidy/images/green_title.png')" alt="" />
      </h2>
      <div class="green content">
        <ul>
          <div id="tab-area">
            <swiper
              :loop="false"
              :space-between="10"
              :breakpoints="{
                0: {
                  slidesPerView: 2.4
                },
                600: {
                  slidesPerView: 3.4
                },
                992: {
                  slidesPerView: 5
                }
              }"
              :modules="[Controller]"
              :controller="{
                control: [greenContent]
              }"
              @swiper="onSwiper"
            >
              <swiper-slide
                v-for="(tab, t) in tabs"
                class="swiper-slide"
                :class="[status == t ? 'active' : '']"
                @click="goSlide(t)"
              >
                <a @click="changeGreen(t)">
                  <img :src="$filters.siteUrl(tab.image)" />
                </a>
              </swiper-slide>
            </swiper>
          </div>
        </ul>

        <div class="content-area">
          <swiper id="greenContent" :loop="false" :modules="[Controller]" @swiper="onControlSwiper">
            <swiper-slide class="tab-content" v-for="(tab, t) in tabs">
              <component
                v-if="products[menuGreen[t]] != undefined"
                :is="listF"
                :pro="products[menuGreen[t]].Data"
                :allowTouchMove="false"
                :isSwiper="1"
                :name="'g'"
              ></component>
              <a class="more" :href="$filters.addGALink(tabs[t].url)" target="_blank">
                <img :src="$filters.siteUrl('green_subsidy/images/more2.png')" />
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <!-- 政府補助 -->
    <section class="sub-box" id="sub">
      <img class="sub-bg" :src="$filters.siteUrl('green_subsidy/images/sub_bg_2406.png')" alt="" />
      <ul>
        <li class="alert1">
          <a @click="message(1)">
            <img :src="$filters.siteUrl('green_subsidy/images/a05_1.png')" alt="" />
          </a>
        </li>
        <li class="alert2">
          <a @click="message(2)">
            <img :src="$filters.siteUrl('green_subsidy/images/a05_2.png')" alt="" />
          </a>
        </li>
        <li class="long">
          <a
            :href="
              $filters.addGALink('https://events.tk3c.com/events_net/greenpoint.tk3c/index.html')
            "
            target="_blank"
          >
            <img :src="$filters.siteUrl('green_subsidy/images/turtle_2406.png')" alt="" />
          </a>
        </li>
      </ul>
    </section>

    <!-- 印表機 -->
    <section class="printer-box scroll" id="printer">
      <h2 class="title">
        <img :src="$filters.siteUrl('green_subsidy/images/S2_a.png')" alt="" />
        <a
          class="more"
          :href="
            $filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=123239')
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('green_subsidy/images/more2.png')" alt="" />
        </a>
      </h2>

      <ul class="tab gap:10 mb:1%">
        <li
          class="w:22% w:25vw@<992 w:38vw@<576 font-size:1.2em font-size:2em@<992 fone-size:1.5em@<576 p:8px bg:#fff"
          v-for="(printer, p) in printers"
          :class="[stausPrinter == p ? 'active' : '']"
        >
          <a @click="changePrinter(p)">{{ printer.text }}</a>
        </li>
      </ul>

      <div class="tab-content" v-for="(printer, p) in printers" v-show="stausPrinter == p">
        <component
          v-if="products[menuPrint[p]] != undefined"
          :is="listF"
          :pro="products[menuPrint[p]].Data"
        ></component>
      </div>
    </section>

    <section class="scroll" v-for="(floor, f) in floorImg" :key="f">
      <h2 class="title">
        <img :src="$filters.siteUrl(floor.image)" />
        <a
          :href="$filters.addGALink(floor.url)"
          :name="`pro${menu[f]}`"
          :id="`pro${menu[f]}`"
          class="more"
          target="_blank"
          ><img :src="$filters.siteUrl('green_subsidy/images/more2.png')" alt=""
        /></a>
      </h2>

      <component
        v-if="products[menu[f]] != undefined"
        :is="listF"
        :pro="products[menu[f]].Data"
      ></component>
    </section>

    <!-- 右側選單 -->
    <aside class="aside-container">
      <span class="arrow"><i class="fas fa-chevron-left"></i></span>
      <div class="aside-wrap">
        <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
        <h3 class="aside-header"></h3>
        <div class="aside-content">
          <ul>
            <li class="main"><a href="#green">環保集點專區</a></li>
            <li>
              <a href="#printer">印表機</a>
            </li>
            <li><a href="#pro4348">冰箱</a></li>
            <li><a href="#pro4349">洗衣機</a></li>
            <li><a href="#pro4350">分離式空調</a></li>
            <li><a href="#pro4352">窗型空調</a></li>
            <li><a href="#pro4353">除濕機</a></li>
            <li><a href="#pro4369">節能涼風扇</a></li>
          </ul>
        </div>
        <a href="#" class="go-top">GO TOP</a>
      </div>
    </aside>
  </div>
</template>

<style lang="scss">
@charset "utf-8";

@import '../../../assets/sass/module/base';
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/green_subsidy/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/green_subsidy/images/';
$dir2: 'https://events.cdn-tkec.tw/events_net/events_net/green_subsidy/images/new/';
/*  共用樣式調整 */

body {
  background: #cceea9;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    $image: $dir2 + 'kv.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 0,
      top;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

form#form1 {
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    $image: $origin + 'bg_origin.png';
    background: url($image) repeat-y center;
    background-size: 100% auto;
    background-position:
      0 45vmax,
      top;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -2;
  }
}

.bg01 {
  background: #23b4fe;
  border-radius: 10px;
}

/* 環保集點 */
#green-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 36%;
    .title {
      animation: zoomInNormal 1.6s linear;
    }
    .logo {
      width: 6%;
      height: auto;
      display: block;
      position: absolute;
      left: 21%;
      top: 45px;
    }
  }
}

section {
  .more {
    position: absolute;
    right: -15%;
    top: 30%;
    &:hover {
      position: absolute;
    }
  }
}
.new-box {
  .tab-content {
    .bg01 {
      background: #2fbe44;
    }
  }
  .swiper-wrapper {
    justify-content: center;
    padding-bottom: 10px;
  }
}

.special-group {
  .title {
    margin: 0 auto 0%;
  }
  .bg01 {
    border-radius: 0;
    background: #23948a;
    padding: 1%;
    .list_special {
      ul {
        justify-content: left;
        li {
          width: 23.9%;
          margin: 0 9px 8px 0;
        }
      }
    }
    ul {
      justify-content: left;
    }
    .hotproboxL,
    .hotproboxR {
      .icon_number {
        display: none;
      }
    }
  }

  .tab {
    justify-content: left;
    flex-wrap: nowrap;
    li {
      width: 48%;
      margin: 0 10px;
      filter: grayscale(1);
      transform: translateZ(0);
      &.active {
        filter: grayscale(0);
        transform: translateZ(0);
      }
    }
  }

  .tab-content {
    .bg01 {
      display: none;
      &:nth-of-type(1) {
        background: #ff5901;
      }
      &:nth-of-type(2) {
        background: #4f5a98;
        ul {
          justify-content: left;
          li {
            margin: 6px 5px;
          }
        }
        .prev2,
        .next2 {
          display: none;
        }
      }
    }
    .swiper-slide {
      margin: 0 0;
    }
  }

  .swiper-slide {
    margin: 0 0;
  }
  .special {
    position: relative;
  }
}

.sub-box {
  ul {
    width: 100%;
    position: absolute;
    top: 10%;
    left: 0;
    right: 0;
    li {
      width: 45%;
      margin: 0 5px 10px;
      &.long {
        width: 90%;
      }
    }
  }
  &.origin {
    margin: -14% auto 3%;
  }
  .alert3 {
    margin: 5% auto 0;
  }
}

.green-box {
  .green {
    background: #2ca69c;
    position: relative;
    padding-bottom: 2%;
  }

  .title {
    margin: 0 auto 0;
  }

  .tab-content {
    width: 95%;
    margin: 0 auto 0;
    .bg01 {
      background: none;
      margin: 0 auto 0;
    }
    .swiper-slide {
      margin: 0 0;
    }
  }

  .more {
    margin: 0 auto 0;
    position: relative;
    left: 0;
    right: 0;
    top: 0;
    &:hover {
      position: relative;
    }
  }
}

#tab-area {
  .swiper-slide {
    opacity: 0.4;
    &.active {
      opacity: 1;
    }
  }
}

.printer-box {
  .tab {
    li {
      &.active {
        background: #3f3a39;
        color: #fff;
      }
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #green-container {
    .background {
      padding-bottom: 48vw;
      .logo {
        width: 10vw;
        left: 16vw;
      }
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position:
        -11vw 4vw,
        top;
    }
  }

  section {
    .more {
      width: 30vw;
      right: -3vw;
      top: -4vw;
    }
  }

  .sub-box {
    li {
      width: 42vw;
      margin: 0 5px 2%;
      &.long {
        width: 85vw;
      }
    }
  }

  .new-box {
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

  #green-container {
    .background {
      padding-bottom: 75vw;
      .logo {
        width: 15vw;
        left: 0;
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position:
        -42vw 10vw,
        top;
    }
  }

  .green-box {
    overflow: hidden;
    .tab {
      li {
        width: 29%;
      }
    }

    .swiper-button-next {
      right: 0 !important;
      &:after {
        color: #0c598a;
      }
    }
    .swiper-button-prev {
      right: 0 !important;
      &:after {
        color: #0c598a;
      }
    }
  }

  .special-group {
    width: 100%;
    .bg01 {
      .list_special {
        padding: 0.8% 0 0.3% 2%;
        ul {
          li {
            width: 47.8%;
            margin: 0 8px 8px 0;
          }
        }
      }
    }
    .tab {
      li {
        margin: 0 5px;
      }
    }
    .tab-content {
      .prev2,
      .next2 {
        display: none;
      }
    }
  }
}
</style>
