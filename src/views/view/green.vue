<script setup>
import { useHead, useScript } from 'unhead'
import { Swiper, SwiperSlide } from 'swiper/vue'
import listF from '../layout/listF.vue'
import { ref } from 'vue'

//META DESCRIPTION
useHead({
  title: '環保集點 | 燦坤線上購物',
  meta: [
    {
      name: 'description',
      content:
        '電冰箱、洗衣機、空調冷氣、除濕機、風扇，一級節能補助，政府補助最高享6000元！環保集點來燦坤，周末點數10倍送，最高回饋1000'
    },
    {
      property: 'og:title',
      content: '環保集點 | 燦坤線上購物'
    },
    {
      property: 'og:description',
      content:
        '電冰箱、洗衣機、空調冷氣、除濕機、風扇，一級節能補助，政府補助最高享6000元！環保集點來燦坤，周末點數10倍送，最高回饋1000'
    },
    {
      property: 'og:image',
      content: 'https://www.tk3c.com/images/headimg.jpg'
    },
    {
      property: 'og:url',
      content: 'https://events.tk3c.com/events_net/green_subsidy/index.html'
    }
  ]
})

const swiperRef = ref()
const onSwiper = (swiper) => {
  swiperRef.value = swiper
}

const goSlide = (id) => {
  swiperRef.value.slideTo(id)
}
</script>

<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      tabs: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120395&strPreView=y',
          image: 'green_subsidy/images/tab1.png',
          menu: 4344
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120392&strPreView=y',
          image: 'green_subsidy/images/tab2.png',
          menu: 4345
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120393&strPreView=y',
          image: 'green_subsidy/images/tab3.png',
          menu: 4346
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120394&strPreView=y',
          image: 'green_subsidy/images/tab4.png',
          menu: 4347
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=120390&aid=23426&hid=120396&strPreView=y',
          image: 'green_subsidy/images/tab5_a.png',
          menu: 4390
        }
      ],
      printers: [
        { text: '主機', menu: 7394 },
        { text: '耗材', menu: 7395 }
      ],
      status: 0,
      stausPrinter: 0,
      today: new Date(),
      fullData: [],
      menuSp: 4850
    }
  },
  mounted() {
    const { menu, tabs, menuSp } = this
    document.querySelectorAll('.wrapper')[1].innerHTML = ''

    //this.greenSlide(0)

    //撈取綠點新鮮貨樓層
    this.getFloorSingle(menuSp)

    //撈取環保集點樓層商品
    this.getFloorSingle(tabs[0].menu)

    //撈取印表機樓層
    this.getFloorSingle(this.printers[0].menu)
  },
  methods: {
    changeGreen(id, menu) {
      if (event) {
        this.status = id
        this.getFloorSingle(menu)
      }
    },
    changePrinter(id, menu) {
      this.stausPrinter = id
      this.getFloorSingle(menu)
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

<style>
[v-clock] {
  display: none;
}
</style>

<template>
  <div id="green-container" v-cloak>
    <div class="background">
      <h2 class="title old">
        <img
          src="https://events.cdn-tkec.tw/events_net/events_net/green_subsidy/images/title.png"
          alt=""
        />
      </h2>
    </div>

    <!-- 本週環保小尖兵 -->
    <section class="special-group scroll" id="special">
      <h2 class="title">
        <img :src="$filters.siteUrl('green_subsidy/images/S1_a.png')" alt="本週環保小尖兵" />
      </h2>
      <div class="special">
        <component :is="listF" :pro="product2[menuSp]"></component>
      </div>
    </section>

    <!-- 綠點 -->
    <section class="green-box scroll" id="green">
      <h2 class="title">
        <img
          src="https://events.cdn-tkec.tw/events_net/events_net/green_subsidy/images/green_title.png"
          alt=""
        />
      </h2>
      <div class="green content">
        <ul>
          <div id="tab-area">
            <swiper
              @swiper="onSwiper"
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
            >
              <swiper-slide
                v-for="(tab, t) in tabs"
                class="swiper-slide"
                :class="[status == t ? 'active' : '']"
                @click="goSlide(t)"
              >
                <a @click="changeGreen(t, tab.menu)">
                  <img :src="$filters.siteUrl(tab.image)" />
                </a>
              </swiper-slide>
            </swiper>
          </div>
        </ul>

        <div class="tab-content" v-for="(tab, t) in tabs" v-show="status == t">
          <component :is="listF" :pro="product2[tab.menu]" :isSwiper="1"></component>
          <a class="more" :href="$filters.addGALink(tabs[t].url)" target="_blank">
            <img :src="$filters.siteUrl('green_subsidy/images/more2.png')" />
          </a>
        </div>
      </div>
    </section>

    <!-- 政府補助 -->
    <section class="sub-box" id="sub">
      <img
        class="sub-bg"
        src="https://events.cdn-tkec.tw/events_net/events_net/green_subsidy/images/sub_bg_2406.png"
        alt=""
      />
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
          <a @click="changePrinter(p, printer.menu)">{{ printer.text }}</a>
        </li>
      </ul>

      <div class="tab-content" v-for="(printer, p) in printers" v-show="stausPrinter == p">
        <component :is="listF" :pro="product2[printer.menu]"></component>
      </div>
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
              <a href="#printer" onclick="ProcessGaEvent('green_subsidy','click','印表機')"
                >印表機</a
              >
            </li>
            <li>
              <a href="#pro4348" onclick="ProcessGaEvent('green_subsidy','click','冰箱')">冰箱</a>
            </li>
            <li>
              <a href="#pro4349" onclick="ProcessGaEvent('green_subsidy','click','洗衣機')"
                >洗衣機</a
              >
            </li>
            <li>
              <a href="#pro4350" onclick="ProcessGaEvent('green_subsidy','click','分離式空調')"
                >分離式空調</a
              >
            </li>
            <li>
              <a href="#pro4352" onclick="ProcessGaEvent('green_subsidy','click','窗型空調')"
                >窗型空調</a
              >
            </li>
            <li>
              <a href="#pro4353" onclick="ProcessGaEvent('green_subsidy','click','除濕機')"
                >除濕機</a
              >
            </li>
            <li>
              <a href="#pro4369" onclick="ProcessGaEvent('green_subsidy','click','節能涼風扇')"
                >節能涼風扇</a
              >
            </li>
          </ul>
        </div>
        <a href="#" class="go-top">GO TOP</a>
      </div>
    </aside>
  </div>
</template>
