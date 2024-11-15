<script setup>
import listF from '../layout/listF.vue'
import mobileAi from '../layout/mobileAi.vue'
</script>

<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      status: 0,
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
              asidetext: '電競筆電',
              asideUrl: '#tab1',
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
              asidetext: '電競桌機',
              asideUrl: '#tab2',
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
              asidetext: '電競螢幕',
              asideUrl: '#tab3'
            }
          ],
          3: [
            {
              title: 'WUKONG/images/S05.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=117916&aid=23091',
              asidetext: '鍵鼠/耳機',
              asideUrl: '#tab4'
            }
          ],
          4: [
            {
              title: 'WUKONG/images/S06.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=117896&aid=23009&strPreView=y',
              asidetext: '顯示卡',
              asideUrl: '#tab5'
            }
          ],
          5: [
            {
              title: 'WUKONG/images/S07.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117896',
              asidetext: 'SSD/RAM',
              asideUrl: '#tab6'
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
              asidetext: 'PS5&週邊',
              asideUrl: '#tab7'
            }
          ],
          1: [
            {
              title: 'WUKONG/images/S09.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11312',
              asidetext: '電視',
              asideUrl: '#tab8',
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
              asidetext: '聲霸/喇叭',
              asideUrl: '#tab9'
            }
          ]
        }
      ]
    }
  },
  mounted() {
    const { tab1, tab2 } = this

    //撈取 steam 區樓層商品
    this.getFloorData(this.menu1)

    //撈取 ps5區樓層商品
    this.getFloorData(this.menu2)
  },
  methods: {
    change(id) {
      this.status = id
    }
  }
}
</script>

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

        <component
          v-if="products[menu1[t]] != undefined"
          :is="listF"
          :pro="products[menu1[t]].Data"
        ></component>

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
        :class="`tab${Number(t) + 7}-box`"
        :id="`tab${Number(t) + 7}`"
      >
        <h2 class="title">
          <a :href="$filters.addGALink(tab[0].url)" target="_blank">
            <img :src="$filters.siteUrl(tab[0].title)" />
          </a>
        </h2>

        <component
          v-if="products[menu2[t]] != undefined"
          :is="listF"
          :pro="products[menu2[t]].Data"
        ></component>

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
          <li v-for="(t1, t) in tab1[0]">
            <a :href="t1[0].asideUrl">{{ t1[0].asidetext }}</a>
          </li>
          <li><a href="#event">熱門活動 </a></li>
        </ul>
        <ul class="a2" v-show="status == 1">
          <li v-for="(t2, t) in tab2[0]">
            <a :href="t2[0].asideUrl">{{ t2[0].asidetext }}</a>
          </li>
          <li><a href="#event">熱門活動 </a></li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>

  <!-- 手機版選單 -->
  <mobileAi v-model:status="status" v-model:tab1="tab1" v-model:tab2="tab2"></mobileAi>
</template>

<style lang="scss">
@charset "utf-8";

@import '../../assets/sass/module/base';
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/WUKONG/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/WUKONG/images/';

/*  共用樣式調整 */
body {
  background: #000;
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'wukong_BG.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 45px,
      top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

.bg01 {
  background: none;
  position: relative;
  margin: 0 auto 2%;
}

.item {
  top: 250px;
  mix-blend-mode: screen;
}

#wukong-container {
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 44%;
    .title {
      width: 32%;
      position: absolute;
      left: 30%;
      top: 12%;
      animation: rotate-fly-right 1.8s ease-in;
      img {
        animation: blurFadeIn 2.2s linear;
        animation-delay: 0.8s;
      }
    }
    .product {
      width: 25%;
      position: absolute;
      right: 21%;
      top: 38%;
      overflow: hidden;
      animation: upAndDown 1.4s linear infinite alternate;
    }
  }
}

.special-box {
  margin: 0 auto 3%;
  .tab {
    li {
      width: 25%;
      margin: 0 15px 1%;
      filter: brightness(0.6);
      &.active {
        filter: brightness(1);
      }
    }
  }
}

.tab-area {
  .tags {
    justify-content: left;
    li {
      width: 30%;
      margin: 0 12px;
    }
  }
  .title {
    width: 40%;
  }
}

.tab1-box {
  .tags {
    li {
      &:first-of-type {
        width: 22%;
      }
    }
  }
}

.tab3-box {
  .tags {
    li {
      &:first-of-type {
        width: 25%;
      }
    }
  }
}
/*  電腦版其他尺寸 */
@include media-query('mobile', '992px') {
  #wukong-container {
    .background {
      padding-bottom: 55vw;
      .title {
        width: 46vw;
        left: 24vw;
        top: 5vw;
      }
      .product {
        width: 35vw;
        right: 10vw;
        top: 18vw;
      }
    }
  }

  body {
    &:before {
      background-size: 120% auto;
      background-position:
        -10vw 4vw,
        top;
    }
  }

  .bg01 {
    margin: 0 auto 3%;
  }

  .special-box {
    .tab {
      li {
        width: 33vw;
      }
    }
  }

  .tab-area {
    .title {
      width: 55vw;
    }
    .tags {
      li {
        width: 50vw;
        margin: 0 8px 2%;
      }
    }
  }

  .tab1-box {
    .tags {
      li {
        &:first-of-type {
          width: 35vw;
        }
      }
    }
  }

  .tab3-box {
    .tags {
      li {
        &:first-of-type {
          width: 36vw;
        }
      }
    }
  }

  .tab8-box {
    .tags {
      li {
        width: 45vw;
      }
    }
  }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #wukong-container {
    .background {
      padding-bottom: 95vw;
      .title {
        width: 75vw;
        left: -10vw;
        top: 22vw;
      }
      .product {
        width: 75vw;
        right: -8vw;
        top: 34vw;
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position:
        -54vw 22vw,
        top;
    }
  }

  section {
    .title {
      width: 100%;
    }
  }

  .special-box {
    margin: 0 auto 10%;
    .tab {
      li {
        width: 44vw;
        margin: 0 5px 1%;
      }
    }
  }

  .tab-area {
    .title {
      width: 90vw;
    }
  }

  .tab-area {
    .tags {
      li {
        width: 90vw;
        margin: 0 5px 3%;
      }
    }
  }

  .tab1-box {
    .tags {
      li {
        &:first-of-type {
          width: 65vw;
        }
      }
    }
  }

  .tab3-box {
    .tags {
      li {
        &:first-of-type {
          width: 75vw;
        }
      }
    }
  }
}
</style>
