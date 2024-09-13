<script setup>
import listF from '../layout/listF.vue'
</script>
<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menu: [7338, 7339, 7340, 7341, 7342, 7350, 7343, 7344, 7345, 7346, 7347, 7348],
      floorImg: [
        {
          url: 'https://events.tk3c.com/events_net/green_subsidy/index.html',
          image: 'AutumnShopping/images/S04.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/24TK2C/index.html',
          image: 'AutumnShopping/images/S05.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/airConditionerLAB/index.html',
          image: 'AutumnShopping/images/S06.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=10890',
          image: 'AutumnShopping/images/S07.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/2024083C/index.html',
          image: 'AutumnShopping/images/S08.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/2024083C/index.html',
          image: 'AutumnShopping/images/S10.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/wet/index.html',
          image: 'AutumnShopping/images/S11.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/icewash2209/index.html',
          image: 'AutumnShopping/images/S09.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/fan_hot/index.html',
          image: 'AutumnShopping/images/S12.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/icewash2209/index.html',
          image: 'AutumnShopping/images/S13.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/events_net/PLAYGAMES/index.html',
          image: 'AutumnShopping/images/S14.png'
        },
        {
          url: 'https://events.tk3c.com/events_net/2020TVforever/index.html',
          image: 'AutumnShopping/images/S15.png'
        }
      ]
    }
  },
  mounted() {
    const { menu } = this
    this.getFloorData(menu)
  }
}
</script>

<template>
  <div class="floor" v-for="(pro, p) in products" :key="p">
    <h2 class="protitle">
      <a :name="`pro${pro.id}`" :id="`pro${pro.id}`"> </a>
      <a :href="$filters.addGALink(floorImg[p].url)" target="_blank">
        <img :src="$filters.siteUrl(floorImg[p].image)" />
      </a>

      {{ pro.datas.MenuTitle }}
    </h2>

    <component :is="listF" :pro="pro.datas.Data"></component>
  </div>
</template>
