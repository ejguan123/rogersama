<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import listF from '../layout/listF.vue'
</script>
<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menu: [
        7529, 7530, 7531, 7532, 7533, 7534, 7535, 7536, 7537, 7538, 7539, 7540, 7541, 7542, 7543,
        7544, 7545, 7546
      ],
      floorImg: [
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=40444',
          image: 'double11_2024/images/part2/S1.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=93605',
          image: 'double11_2024/images/part2/S2.png',
          banner: [
            {
              url: 'https://www.tk3c.com/dic2.aspx?cid=93605&aid=20222&hid=123877',
              pc: 'double11_2024/images/bn_samsung.jpg',
              mobile: 'double11_2024/images/bn_samsungM.jpg'
            }
          ]
        },
        {
          url: 'https://events.tk3c.com/events_net/2024083C/index.html',
          image: 'double11_2024/images/part2/S3.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/WUKONG/index.html',
              pc: 'double11_2024/images/bn_wukongP5.jpg',
              mobile: 'double11_2024/images/bn_wukongP5M.jpg'
            },
            {
              url: 'https://events.tk3c.com/events_net/2024083C/index.html',
              pc: 'double11_2024/images/part2/bn_3c.jpg',
              mobile: 'double11_2024/images/part2/bn_3cM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=23504&hid=120184',
          image: 'double11_2024/images/part2/S4.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/2024083C/index.html',
              pc: 'double11_2024/images/part2/bn_3c.jpg',
              mobile: 'double11_2024/images/part2/bn_3cM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=44823',
          image: 'double11_2024/images/part2/S5.png',
          banner: [
            {
              url: 'https://www.tk3c.com/dic2.aspx?cid=44823&aid=22521&hid=113989&strPreView=y',
              pc: 'double11_2024/images/part2/bn_samung.jpg',
              mobile: 'double11_2024/images/part2/bn_samungM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=43403',
          image: 'double11_2024/images/part2/S6.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
          image: 'double11_2024/images/part2/S7.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/book_sale/index.html',
              pc: 'double11_2024/images/bn_book.jpg',
              mobile: 'double11_2024/images/bn_bookM.jpg'
            },
            {
              url: 'https://events.tk3c.com/events_net/WUKONG/index.html',
              pc: 'double11_2024/images/bn_wukongP5.jpg',
              mobile: 'double11_2024/images/bn_wukongP5M.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=111126',
          image: 'double11_2024/images/part2/S8.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/2020TVforever/index.html',
          image: 'double11_2024/images/part2/S9.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/2020TVforever/index.html',
              pc: 'double11_2024/images/part2/bn_tv.jpg',
              mobile: 'double11_2024/images/part2/bn_tvM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=83185',
          image: 'double11_2024/images/part2/S10.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/icewash2209/index.html',
          image: 'double11_2024/images/part2/S11.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/icewash2209/index.html',
              pc: 'double11_2024/images/part2/bn_ice.jpg',
              mobile: 'double11_2024/images/part2/bn_iceM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=71484',
          image: 'double11_2024/images/part2/S12.png'
          /*banner: [
            {
              url: 'https://events.tk3c.com/events_net/24spring_clean/index.html',
              pc: 'double11_2024/images/part2/bn_clean.jpg',
              mobile: 'double11_2024/images/part2/bn_cleanM.jpg'
            }
          ]*/
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=4640',
          image: 'double11_2024/images/part2/S13.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/fan_hot/index.html',
          image: 'double11_2024/images/part2/S14.png'
          /*banner: [
            {
              url: 'https://events.tk3c.com/events_net/fan_hot/index.html',
              pc: 'double11_2024/images/part2/bn_fan.jpg',
              mobile: 'double11_2024/images/part2/bn_fanM.jpg'
            }
          ]*/
        },
        {
          url: 'https://events.tk3c.com/events_net/airConditionerLAB/index.html',
          image: 'double11_2024/images/part2/S15.png',
          banner: [
            {
              url: 'https://events.tk3c.com/events_net/airConditionerLAB/index.html',
              pc: 'double11_2024/images/part2/bn_air.jpg',
              mobile: 'double11_2024/images/part2/bn_airM.jpg'
            }
          ]
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=71323&aid=16881',
          image: 'double11_2024/images/part2/S16.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=113296',
          image: 'double11_2024/images/part2/S17.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=111383&aid=22330',
          image: 'double11_2024/images/part2/S18.png'
        }
      ],
      today: Date()
    }
  },
  mounted() {
    const { menu, today } = this
    this.getFloorData(menu)
  }
}
</script>

<template>
  <section class="scroll" v-for="(pro, p) in products" :key="p">
    <h2 class="title" :id="`pro${pro.id}`">
      <a :href="$filters.addGALink(floorImg[p].url)" target="_blank">
        <img :src="$filters.siteUrl(floorImg[p].image)" />
      </a>
    </h2>

    <div class="banner w:full" v-if="floorImg[p].banner != undefined">
      <swiper
        class="overflow:hidden"
        :autoplay="{
          delay: 1500,
          disableOnInteraction: false
        }"
      >
        <swiper-slide v-for="banner in floorImg[p].banner">
          <a :href="$filters.addGALink(banner.url)" target="_blank">
            <img class="pc" :src="$filters.siteUrl(banner.pc)" />
            <img class="mobile" :src="$filters.siteUrl(banner.mobile)" />
          </a>
        </swiper-slide>
      </swiper>
    </div>

    <component :is="listF" :pro="pro.datas.Data"></component>
  </section>
</template>
