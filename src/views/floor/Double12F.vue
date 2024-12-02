<script setup>
import { Controller, EffectFlip, Parallax } from 'swiper/modules'
import listF from '../layout/listF.vue'
import { ref } from 'vue'

const swiperTab = ref()

//印表機頁籤樓層用
const onSwiper = (swiper) => {
  swiperTab.value = swiper
}

const goSlide = (id) => {
  swiperTab.value.slideTo(id)
}
</script>
<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menu: [
        7646,
        7562,
        7563,
        '',
        7569,
        7533,
        7535,
        7536,
        7537,
        7539,
        7545,
        7538,
        7543,
        7544,
        7665,
        7540,
        7541,
        7546,
        ''
      ],
      menuPrint: [7564, 7565, 7566, 7567, 7568],
      floorImg: [
        {
          url: 'https://events.tk3c.com/events_net/2024083C/index.html',
          image: 'double12_2024/images/1212/S06.png',
          class: 'nb-box'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=40444',
          image: 'double12_2024/images/1212/S07.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=93605&aid=20221',
          image: 'double12_2024/images/1212/S08.png',
          banner: [
            {
              url: 'https://www.tk3c.com/dic2.aspx?cid=93605&aid=20221&hid=122429',
              image: 'double12_2024/images/1212/S08BN.png'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=16917',
          image: 'double12_2024/images/1212/S09.png',
          class: 'print-box',
          content: [
            {
              image: '2024Thxgiving/images/hp.png'
            },
            {
              image: '2024Thxgiving/images/EPSON.png'
            },
            {
              image: '2024Thxgiving/images/Brother.png'
            },
            {
              image: '2024Thxgiving/images/Canon.png'
            },
            {
              image: '2024Thxgiving/images/FUJIFILM.png'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=10890',
          image: 'double12_2024/images/1212/S10.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=44823',
          image: 'double12_2024/images/1212/S11.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=629',
          image: 'double12_2024/images/1212/S12.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=111126',
          image: 'double12_2024/images/1212/S13.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/2020TVforever/index.html',
          image: 'double12_2024/images/1212/S14.png',
          banner: [
            {
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11312',
              image: 'double12_2024/images/1212/S14BN-1.png'
            },
            {
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11312',
              image: 'double12_2024/images/1212/S14BN-2.png'
            }
          ]
        },
        {
          url: 'https://events.tk3c.com/events_net/icewash2209/index.html',
          image: 'double12_2024/images/1212/S15.png',
          banner: [
            {
              image: 'double12_2024/images/1212/S15BN-1.png',
              links: [
                'https://www.tk3c.com/dictitleurl.aspx?cid=12504',
                'https://www.tk3c.com/dictitleurl.aspx?cid=83198',
                'https://www.tk3c.com/dictitleurl.aspx?cid=83198'
              ]
            },
            {
              url: 'https://events.tk3c.com/events_net/icewash2209/index.html',
              image: 'double12_2024/images/1212/S15BN-2b.png'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=113296',
          image: 'double12_2024/images/1212/S16.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=83185',
          image: 'double12_2024/images/1212/S17.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/airConditionerLAB/index.html',
          image: 'double12_2024/images/1212/S18.png',
          banner: [
            {
              image: 'double12_2024/images/1212/S18BN-1.png',
              links: [
                'https://events.tk3c.com/events_net/icewash2209/index.html',
                'https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2'
              ]
            },
            {
              url: 'https://events.tk3c.com/events_net/airConditionerLAB/index.html',
              image: 'double12_2024/images/1212/S18BN-2.png'
            },
            {
              image: 'double12_2024/images/1212/S18BN-3.png',
              links: [
                'https://events.tk3c.com/events_net/green_subsidy/index.html',
                'https://events.tk3c.com/events_net/airConditionerLAB/index.html'
              ]
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=71323&aid=16881',
          image: 'double12_2024/images/1212/S19.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=5779',
          image: 'double12_2024/images/1212/S20.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=71323',
          image: 'double12_2024/images/1212/S21.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=4640',
          image: 'double12_2024/images/1212/S22.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=111383&aid=22330',
          image: 'double12_2024/images/1212/S23.png'
        },
        {
          url: 'https://www.tk3c.com/other_store.aspx',
          image: 'double12_2024/images/1212/S24.png'
        }
      ],
      today: Date(),
      statusPrinter: 0
    }
  },
  mounted() {
    const { menu, today } = this
    //印表機樓層商品
    this.getFloorData(this.menuPrint)

    this.getFloorData(menu)
  },
  methods: {
    changePrinter(id) {
      setTimeout(() => {
        this.statusPrinter = id
      }, 20)
    }
  }
}
</script>

<template>
  <section
    class="floor scroll"
    v-for="(floor, f) in floorImg"
    :key="f"
    :class="floor.class ? floor.class : ''"
  >
    <h2 class="title" :id="[f == 3 ? 'print' : `pro${menu[f]}`]">
      <a :href="$filters.addGALink(floor.url)" target="_blank">
        <img :src="$filters.siteUrl(floor.image)" />
      </a>
    </h2>

    <!-- 加入banner圖片 -->
    <div class="banner rel" v-if="floor.banner != undefined" :class="`bn${f + 1}`">
      <swiper
        :loop="false"
        :effect="'flip'"
        :flipEffect="{
          slideShadows: false,
          limitRotation: false
        }"
        :parallax="true"
        :navigation="{
          prevEl: `.banner.bn${f + 1} .prev`,
          nextEl: `.banner.bn${f + 1} .next`
        }"
        :modules="[EffectFlip, Parallax]"
      >
        <swiper-slide v-for="(bn, b) in floor.banner">
          <a
            v-if="bn.url != undefined"
            :href="$filters.addGALink(bn.url)"
            target="_blank"
            data-swiper-parallax-opacity="0"
          >
            <img :src="$filters.siteUrl(bn.image)" alt=" " />
          </a>

          <div class="split-box rel w:full" v-if="bn.links != undefined">
            <img :src="$filters.siteUrl(bn.image)" alt=" " />
            <div class="w:full abs left:0 right:0 m:auto top:0 flex">
              <a
                v-for="(link, l) in bn.links"
                :href="$filters.addGALink(link)"
                class="h:22vmax! h:22rem!@<1440 h:16.5rem!@<992"
                target="_blank"
              ></a>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div v-if="floor.banner.length > 1" class="swiper-button-prev prev"></div>
      <div v-if="floor.banner.length > 1" class="swiper-button-next next"></div>
    </div>

    <!-- 印表機頁籤樓層 -->
    <div v-if="floor.content != undefined">
      <swiper
        :loop="false"
        :space-between="10"
        :breakpoints="{
          0: {
            slidesPerView: 3.3
          },
          600: {
            slidesPerView: 4.4
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

      <div class="box" v-for="(printer, p) in floor.content" v-show="statusPrinter == p">
        <component
          v-if="products[menuPrint[p]] != undefined"
          :is="listF"
          :pro="products[menuPrint[p]].Data"
        ></component>
      </div>
    </div>

    <!-- k幣商品 -->
    <div class="bonus mb:5%" v-if="f == 18" id="bonus">
      <img :src="$filters.siteUrl('double12_2024/images/1212/S24_pro.png')" />
    </div>

    <component
      v-if="f != 3 && f != 18 && products[menu[f]] != undefined"
      :is="listF"
      :pro="products[menu[f]].Data"
    >
    </component>
  </section>
</template>
