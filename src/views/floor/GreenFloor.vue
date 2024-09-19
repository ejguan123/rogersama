<script setup>
import listF from '../layout/listF.vue'
</script>
<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menu: [4348, 4349, 4350, 4352, 4353, 4369],
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

      <img :src="$filters.siteUrl(floorImg[p].image)" />
      <a class="more" :href="$filters.addGALink(floorImg[p].url)" target="_blank">
        <img :src="$filters.siteUrl('green_subsidy/images/more2.png')" />
      </a>

      {{ pro.datas.MenuTitle }}
    </h2>

    <component :is="listF" :pro="pro.datas.Data"></component>
  </div>
</template>
