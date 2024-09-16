<script setup>
import { useHead, useScript } from 'unhead'
import listF from '../layout/listF.vue'

//META DESCRIPTION
useHead({
  title: 'IPHONE 16 配件揪團結帳頁 | 燦坤線上購物',
  meta: [
    {
      name: 'description',
      content: 'IPHONE 16 配件揪團結帳頁'
    },
    {
      property: 'og:title',
      content: 'IPHONE 16 配件揪團結帳頁 | 燦坤線上購物'
    },
    {
      property: 'og:description',
      content: 'IPHONE 16 配件揪團結帳頁'
    },
    {
      property: 'og:image',
      content: 'https://www.tk3c.com/images/headimg.jpg'
    },
    {
      property: 'og:url',
      content: 'https://events.tk3c.com/events_net/I16SALE/index.html'
    }
  ]
})
</script>

<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menu: 7442
    }
  },
  mounted() {
    const { menu } = this
    document.querySelectorAll('.wrapper')[1].innerHTML = ''

    //撈取樓層商品(menus = 後台陳列編號 array)
    this.getFloorSingle(menu)
  }
}
</script>

<template>
  <div id="iphone-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <a href="#sp" target="_blank">
          <img :src="$filters.siteUrl('I16SALE/images/title.png')" />
        </a>
      </h2>
    </div>

    <section class="special-box" id="sp">
      <div class="special">
        <component :is="listF" :pro="product2[menu]"></component>
      </div>
    </section>
  </div>

  <div class="custom-top"><p></p></div>
</template>
