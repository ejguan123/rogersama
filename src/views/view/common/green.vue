<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import listF from '../../layout/listF.vue'
import { ref } from 'vue'

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
      status: 0,
      stausPrinter: 0,
      today: new Date(),
      fullData: [],
      menuSp: 4850
    }
  },
  mounted() {
    const { menu, tabs, menuSp } = this

    //撈取綠點新鮮貨樓層
    this.getFloorSingle(menuSp)

    //撈取環保集點樓層商品
    this.getFloorSingle(tabs[0].menu)

    //撈取印表機樓層
    this.getFloorSingle(this.printers[0].menu)

    //剩下樓層
    setTimeout(() => {
      this.getFloorData(menu)
    }, 100)
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

<template>
  <div id="green-container" v-cloak>
    <div class="background">
      <h2
        class="title w:25% abs right:30% top:20% m:auto w:35vw@<992 w:55vw@<576 left:45vw@<992 left:42vw@<576 top:11vw@<992 top:20vw@<576"
      >
        <img
          src="https://events.cdn-tkec.tw/events_net/events_net/green_subsidy/images/title_240919.png"
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

    <section class="scroll" v-for="(pro, p) in products">
      <h2 class="title">
        <img :src="$filters.siteUrl(floorImg[p].image)" />
        <a
          :href="$filters.addGALink(floorImg[p].url)"
          :name="`pro${pro.id}`"
          :id="`pro${pro.id}`"
          class="more"
          target="_blank"
          ><img
            src="https://events.tk3c.com/events_net/events_net/green_subsidy/images/more2.png"
            alt=""
        /></a>
      </h2>

      <component :is="listF" :pro="pro.datas.Data"></component>
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
            <li v-for="pro in products">
              <a :href="`#pro${pro.id}`">{{ pro.datas.MenuTitle }}</a>
            </li>
          </ul>
        </div>
        <a href="#" class="go-top">GO TOP</a>
      </div>
    </aside>
  </div>
</template>
