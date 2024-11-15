<script setup>
import { EffectFade, Parallax } from 'swiper/modules'
import listF from '../layout/listF.vue'
import { ref } from 'vue'

const swiperRef = ref()

/* swiper用 start */
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
      menus: [
        7560, 7529, 7563, 7564, 7569, 7533, 7571, 7537, 7540, 7543, 7541, 7539, 7536, 7545, 7611,
        7544, 7553, 7546
      ],
      menuPrint: [7564, 7565, 7566, 7567, 7568],
      floorImg: [
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11124',
          image: '2024Thxgiving/images/S5.png',
          menu: 7560
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=40444',
          image: '2024Thxgiving/images/S6.png',
          menu: 7529
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=93605&aid=20221',
          image: '2024Thxgiving/images/S7_2.png',
          menu: 7563
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=16917',
          image: '2024Thxgiving/images/S8.png',
          class: 'print-box',
          content: [
            {
              image: '2024Thxgiving/images/hp.png',
              menu: 7564
            },
            {
              image: '2024Thxgiving/images/EPSON.png',
              menu: 7565
            },
            {
              image: '2024Thxgiving/images/Brother.png',
              menu: 7566
            },
            {
              image: '2024Thxgiving/images/Canon.png',
              menu: 7567
            },
            {
              image: '2024Thxgiving/images/FUJIFILM.png',
              menu: 7568
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=10890',
          image: '2024Thxgiving/images/S9.png',
          menu: 7569
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=44823',
          image: '2024Thxgiving/images/S9_2.png',
          menu: 7533
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=629',
          image: '2024Thxgiving/images/S10_2.png',
          menu: 7571
        },
        {
          url: 'https://events.tk3c.com/events_net/2020TVforever/index.html',
          image: '2024Thxgiving/images/S11.png',
          menu: 7537
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=71323',
          image: '2024Thxgiving/images/S13_2.png',
          menu: 7540
        },
        {
          url: 'https://events.tk3c.com/events_net/airConditionerLAB/index.html',
          image: '2024Thxgiving/images/S12.png',
          class: 'air-box',
          menu: 7543
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=4640',
          image: '2024Thxgiving/images/S15_2.png',
          menu: 7541
        },
        {
          url: 'https://events.tk3c.com/events_net/icewash2209/index.html',
          image: '2024Thxgiving/images/S16.png',
          menu: 7539
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=111126',
          image: '2024Thxgiving/images/S17.png',
          menu: 7536
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=113296',
          image: '2024Thxgiving/images/S19.png',
          menu: 7545
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=5779',
          image: '2024Thxgiving/images/S20_2.png',
          menu: 7611
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=71323&aid=16881',
          image: '2024Thxgiving/images/S21_2.png',
          menu: 7544
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=83185',
          image: '2024Thxgiving/images/S22.png',
          menu: 7553
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=111383&aid=22330',
          image: '2024Thxgiving/images/S23.png',
          menu: 7546
        }
      ],
      airBanners: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123849&strPreView=y',
          pc: 'airConditionerLAB/images/2410/brand_pana.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_panaM.jpg'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123852&strPreView=y',
          pc: 'airConditionerLAB/images/2410/brand_daikin.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_daikinM.jpg'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123856&strPreView=y',
          pc: 'airConditionerLAB/images/2410/brand_mit.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_mitM.jpg'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123854&strPreView=y',
          pc: 'airConditionerLAB/images/2410/brand_sampo.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_sampoM.jpg'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123853&strPreView=y',
          pc: 'airConditionerLAB/images/2410/brand_teco.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_tecoM.jpg'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=104083&strPreView=y',
          pc: 'airConditionerLAB/images/2410/brand_lg.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_lgM.jpg'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123855&strPreView=y',
          pc: 'airConditionerLAB/images/2410/brand_her.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_herM.jpg'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123857&strPreView=y',
          pc: 'airConditionerLAB/images/2410/brand_chimei.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_chimeiM.jpg'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123858&strPreView=y',
          pc: 'airConditionerLAB/images/2410/brand_sharp.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_sharpM.jpg'
        }
      ],
      today: Date(),
      statusPrinter: 0
    }
  },
  mounted() {
    const { menus, today } = this

    //其他樓層
    this.getFloorData(menus)

    //撈取印表機樓層商品
    this.getFloorData(this.menuPrint)
  },
  methods: {
    changePrinter(id) {
      if (event) {
        setTimeout(() => {
          this.statusPrinter = id
        }, 20)
      }
    }
  }
}
</script>

<template>
  <section
    class="scroll"
    v-for="(floor, f) in floorImg"
    :key="f"
    :class="[floor.class ? floor.class : '']"
  >
    <h2 class="title" :id="[f != 3 ? `pro${floor.menu}` : 'print']">
      <a :href="$filters.addGALink(floor.url)" target="_blank">
        <img :src="$filters.siteUrl(floor.image)" />
      </a>
    </h2>

    <!-- 印表機頁籤樓層 -->
    <div v-if="floor.content != undefined">
      <swiper
        :loop="false"
        :space-between="10"
        :breakpoints="{
          0: {
            slidesPerView: 2.3
          },
          600: {
            slidesPerView: 4.3
          },
          992: {
            slidesPerView: 6
          }
        }"
        class="mb:1%"
        @swiper="onSwiper"
      >
        <swiper-slide
          v-for="(printer, p) in floor.content"
          :class="[statusPrinter == p ? 'active' : '']"
          class="brightness(0.5) brightness(1).active"
          @click="goSlide(p)"
        >
          <a @click="changePrinter(p)"><img :src="$filters.siteUrl(printer.image)" /></a>
        </swiper-slide>
      </swiper>

      <div v-for="(printer, p) in floor.content" v-show="statusPrinter == p">
        <component
          v-if="products[menuPrint[p]] != undefined"
          :is="listF"
          :pro="products[menuPrint[p]].Data"
        ></component>
      </div>
    </div>

    <!-- 空調banner -->
    <div class="banner w:full rel" v-if="f == 9">
      <swiper
        :loop="false"
        class="overflow:hidden"
        :navigation="{
          prevEl: `.banner .prev`,
          nextEl: `.banner .next`
        }"
      >
        <swiper-slide>
          <a
            :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=11225')"
            target="_blank"
          >
            <img :src="$filters.siteUrl('2024Thxgiving/images/S12-1_PC.png')" />
          </a>
        </swiper-slide>
        <swiper-slide>
          <img :src="$filters.siteUrl('2024Thxgiving/images/S12-2_PC.png')" />
          <div class="flex flex-wrap:wrap w:full abs top:0 left:0 right:0 m:auto">
            <a
              class="w:49% h:22vmax h:22rem@<1440 h:35vw@<992 h:9rem@<576"
              :href="
                $filters.addGALink('https://events.tk3c.com/events_net/green_subsidy/index.html')
              "
              target="_blank"
            ></a>
            <a
              class="w:47%"
              :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=11225')"
              target="_blank"
            ></a>
          </div>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev prev"></div>
      <div class="swiper-button-next next"></div>
    </div>

    <component
      v-if="f != 3 && products[menus[f]] != undefined"
      :is="listF"
      :pro="products[menus[f]].Data"
    >
    </component>

    <!-- 各空調品牌banner -->
    <div class="banner-brands" v-if="f == 9">
      <div class="banner1 mb:1% rel">
        <swiper
          :loop="true"
          :effect="'fade'"
          :parallax="true"
          :autoplay="{
            delay: 1800,
            disableOnInteraction: false
          }"
          :pagination="{
            el: '.banner-brands .page',
            clickable: true
          }"
          :navigation="{
            prevEl: `.banner-brands .banner1 .prev`,
            nextEl: `.banner-brands .banner1 .next`
          }"
          :modules="[EffectFade, Parallax]"
        >
          <swiper-slide v-for="air in airBanners">
            <a :href="$filters.addGALink(air.url)" target="_blank" data-swiper-parallax-opacity="0">
              <img class="pc" :src="$filters.siteUrl(air.pc)" />
              <img class="mobile" :src="$filters.siteUrl(air.mobile)" />
            </a>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev prev"></div>
        <div class="swiper-button-next next"></div>
        <div class="swiper-pagination page"></div>
      </div>

      <div class="banner2 rel">
        <a
          :href="
            $filters.addGALink(
              'https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2'
            )
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('2024Thxgiving/images/bn_air.png')" />
        </a>
      </div>
    </div>
  </section>
</template>
