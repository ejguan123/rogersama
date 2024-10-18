<script setup>
import listF from '../layout/listF.vue'
</script>
<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menu: [2751, 5613, 5198, 5199, 4846, 5200, 5201, 5202],
      floorImg: [
        {
          url: 'https://www.tk3c.com/search.aspx?q=%E9%9B%BB%E8%A6%96',
          image: '2020TVforever/images/2410/S5.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88783',
          image: '2020TVforever/images/2410/S6.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105564',
          image: '2020TVforever/images/2410/S7.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=4712&hid=88767',
          image: '2020TVforever/images/2410/S8.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11312&aid=21600&hid=105586',
          image: '2020TVforever/images/2410/S9.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
          image: '2020TVforever/images/2410/S10.png'
        },
        {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=828',
          image: '2020TVforever/images/2410/S11.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=828&aid=331',
          image: '2020TVforever/images/2410/S12.png'
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
  <section class="scroll" v-for="(pro, p) in products" :key="p">
    <h2 class="title" :id="`pro${pro.id}`">
      <a :href="$filters.addGALink(floorImg[p].url)">
        <img :src="$filters.siteUrl(floorImg[p].image)" />
      </a>
    </h2>

    <component :is="listF" :pro="pro.datas.Data"></component>
  </section>
</template>
