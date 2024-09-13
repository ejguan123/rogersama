<script setup>
import { useHead, useScript } from 'unhead'
import listF from '../layout/listF.vue'

//META DESCRIPTION
useHead({
  title: '黑神話悟空專區 | 燦坤線上購物'
})
</script>

<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      status: 1,
      proDatas: [
        { url: 'https://www.tk3c.com/pt.aspx?pid=252002', image: 'WUKONG/images/252002.png' }
      ],
      menu1: [7433, 7434, 7435, 7436, 7437, 7438],
      menu2: [7439, 7440, 7441],
      tab1: [
        {
          0: [
            {
              title: 'WUKONG/images/S02.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
              menu: 7433,
              tag: [
                {
                  url: 'https://events.tk3c.com/events_net/2024083C/index.html',
                  image: 'WUKONG/images/tag1-1_a.png'
                },
                {
                  url: 'https://events.tk3c.com/events_net/2024083C/index.html',
                  image: 'WUKONG/images/tag1-2_a.png'
                },
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123687&strPreView=y',
                  image: 'WUKONG/images/tag1-3_a.png'
                }
              ]
            }
          ],
          1: [
            {
              title: 'WUKONG/images/S03.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117914',
              menu: 7434,
              tag: [
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123687&strPreView=y',
                  image: 'WUKONG/images/tag2-1_a.png'
                }
              ]
            }
          ],
          2: [
            {
              title: 'WUKONG/images/S04.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117915',
              menu: 7435,
              tag: [
                {
                  url: 'https://events.tk3c.com/events_net/screen2308/index.html',
                  image: 'WUKONG/images/tag3-1_a.png'
                },
                {
                  url: 'https://events.tk3c.com/events_net/screen2308/index.html',
                  image: 'WUKONG/images/tag3-2_a.png'
                },
                {
                  url: 'https://events.tk3c.com/events_net/screen2308/index.html',
                  image: 'WUKONG/images/tag3-3_a.png'
                }
              ]
            }
          ],
          3: [
            {
              title: 'WUKONG/images/S05.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=117916&aid=23091',
              menu: 7436
            }
          ],
          4: [
            {
              title: 'WUKONG/images/S06.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=117896&aid=23009',
              menu: 7437
            }
          ],
          5: [
            {
              title: 'WUKONG/images/S07.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117896',
              menu: 7438
            }
          ]
        }
      ],
      tab2: [
        {
          0: [
            {
              title: 'WUKONG/images/S08.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=629&aid=10180',
              menu: 7439
            }
          ],
          1: [
            {
              title: 'WUKONG/images/S09.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11312',
              menu: 7440,
              tag: [
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11312',
                  image: 'WUKONG/images/tag8-1.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11312&aid=23373',
                  image: 'WUKONG/images/tag8-2.png'
                }
              ]
            }
          ],
          2: [
            {
              title: 'WUKONG/images/S10.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=828',
              menu: 7441
            }
          ]
        }
      ]
    }
  },
  mounted() {
    const { tab1, tab2 } = this
    document.querySelectorAll('.wrapper')[1].innerHTML = ''

    //撈取 steam 區樓層商品
    for (const [t, tab] of Object.entries(tab1[0])) {
      this.getFloorSingle(tab[0].menu)
    }

    //撈取 ps5區樓層商品
    for (const [t, tab] of Object.entries(tab2[0])) {
      this.getFloorSingle(tab[0].menu)
    }
  },
  methods: {
    change(id) {
      this.status = id
    }
  }
}
</script>

<style lang="scss">
[v-cloak] {
  display: none;
}
</style>

<template>
  <div id="wukong-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('WUKONG/images/title.png')" />
      </h2>

      <div class="product">
        <swiper-container
          :loop="true"
          :parallax="true"
          :autoplay="{
            delay: 1600,
            disableOnInteraction: false
          }"
        >
          <swiper-slide v-for="pro in proDatas">
            <a :href="$filters.addGALink(pro.url)" target="_blank">
              <img :src="$filters.siteUrl(pro.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper-container>
      </div>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('WUKONG/images/item.png')" />
    </p>

    <!-- 目錄 -->
    <section class="special-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('WUKONG/images/S01.png')" />
      </h2>

      <ul class="tab">
        <li :class="[status == 0 ? 'active' : '']" :value="0">
          <a @click="change(0)"><img :src="$filters.siteUrl('WUKONG/images/steam.png')" /></a>
        </li>
        <li :class="[status == 1 ? 'active' : '']" :value="1">
          <a @click="change(1)"><img :src="$filters.siteUrl('WUKONG/images/ps5.png')" /></a>
        </li>
      </ul>
    </section>

    <!-- steam平台 樓層 -->
    <div class="special sp1" v-if="status == 0">
      <section
        class="tab-area scroll"
        v-for="(tab, t) in tab1[0]"
        :class="`tab${Number(t) + 1}-box`"
        :id="`tab${Number(t) + 1}`"
      >
        <h2 class="title">
          <a :href="$filters.addGALink(tab[0].url)" target="_blank">
            <img :src="$filters.siteUrl(tab[0].title)" />
          </a>
        </h2>

        <component :is="listF" :pro="product2[tab[0].menu]"></component>

        <ul class="tags" v-if="tab[0].tag != undefined">
          <li v-for="tag in tab[0].tag">
            <a :href="$filters.addGALink(tag.url)" target="_blank">
              <img :src="$filters.siteUrl(tag.image)" alt="" />
            </a>
          </li>
        </ul>
      </section>
    </div>

    <!-- ps5區 -->
    <div class="special sp2" v-if="status == 1">
      <section
        class="tab-area scroll"
        v-for="(tab, t) in tab2[0]"
        :key="t"
        :class="`tab${Number(t)}-box`"
        :id="`tab${Number(t + 7) + 1}`"
      >
        <h2 class="title">
          <a :href="$filters.addGALink(tab[0].url)" target="_blank">
            <img :src="$filters.siteUrl(tab[0].title)" />
          </a>
        </h2>

        <component :is="listF" :pro="product2[tab[0].menu]"></component>
        <ul class="tags" v-if="tab[0].tag != undefined">
          <li v-for="tag in tab[0].tag">
            <a :href="$filters.addGALink(tag.url)" target="_blank">
              <img :src="$filters.siteUrl(tag.image)" alt="" />
            </a>
          </li>
        </ul>
      </section>
    </div>
  </div>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="arrow"><i class="fas fa-chevron-left"></i></span>
    <div class="aside-wrap">
      <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul class="a1" v-show="status == 0">
          <li><a href="#tab1">電競筆電</a></li>
          <li><a href="#tab2">電競桌機</a></li>
          <li><a href="#tab3">電競螢幕</a></li>
          <li><a href="#tab4">鍵鼠/耳機</a></li>
          <li><a href="#tab5">顯卡</a></li>
          <li><a href="#tab6">SSD/RAM</a></li>
        </ul>
        <ul class="a2" v-show="status == 1">
          <li><a href="#tab7">Wi-PS5 & 週邊</a></li>
          <li><a href="#tab8">電視</a></li>
          <li><a href="#tab9">聲霸/喇叭</a></li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>
</template>
