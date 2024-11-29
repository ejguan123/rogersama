<script setup>
import { EffectFade, Parallax, EffectFlip } from 'swiper/modules'
import listF from '../../layout/listF.vue'
import { ref } from 'vue'
import AllEvent from '../../../components/AllEvent.vue' //全站活動

const swiperRef = ref()

const onSwiper = (swiper) => {
  swiperRef.value = swiper
}

const gotoSlide = (id) => {
  swiperRef.value.slideTo(id)
}
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      brands: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=22874&hid=123468',
          image: 'icewash2209/images/2407/sb3-4.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=22539&hid=123467',
          image: 'icewash2209/images/2407/sb3-7.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=83198&aid=18660&hid=123752&strPreView=y',
          image: 'icewash2209/images/2409/sb3-8.png'
        }
      ],
      proICE: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=194399',
          image: 'icewash2209/images/2412/194399.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=209619',
          image: 'icewash2209/images/2412/209619.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=219235',
          image: 'icewash2209/images/2412/219235.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=229402',
          image: 'icewash2209/images/2412/229402.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=238698',
          image: 'icewash2209/images/2412/238698.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=244261',
          image: 'icewash2209/images/2412/244261.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=246437',
          image: 'icewash2209/images/2412/246437.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=252733',
          image: 'icewash2209/images/2412/252733.png'
        }
      ],
      tab1: [
        {
          0: [
            {
              menu: 4423,
              title: 'icewash2209/images/2412/sb4.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
            }
          ],
          1: [
            {
              menu: 5540,
              title: 'icewash2209/images/2412/sb5.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
            }
          ],
          2: [
            {
              title: 'icewash2209/images/2412/sb6.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=12740',
              menu: [5981, 5982, 5983],
              content: [
                {
                  image: 'icewash2209/images/2411/R01_1.png'
                },
                {
                  image: 'icewash2209/images/2411/R01_2.png'
                },
                {
                  image: 'icewash2209/images/2411/R01_3.png'
                }
              ]
            }
          ],
          3: [
            {
              title: 'icewash2209/images/2412/sb7.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4937',
              menu: [7083, 7084],
              content: [
                {
                  image: 'icewash2209/images/2411/R02_1.png'
                },
                {
                  image: 'icewash2209/images/2411/R02_2.png'
                }
              ]
            }
          ],
          4: [
            {
              menu: 7085,
              title: 'icewash2209/images/2412/sb8.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=7101'
            }
          ]
        }
      ],
      tab2: [
        {
          0: [
            {
              menu: 7086,
              title: 'icewash2209/images/2412/sb4.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
            }
          ],
          1: [
            {
              menu: 7087,
              title: 'icewash2209/images/2412/sb5.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
            }
          ],
          2: [
            {
              title: 'icewash2209/images/2412/sb6.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18581',
              menu: [7088, 7089, 7090],
              content: [
                {
                  image: 'icewash2209/images/2411/W01_1.png'
                },
                {
                  image: 'icewash2209/images/2411/W01_2.png'
                },
                {
                  image: 'icewash2209/images/2411/W01_3.png'
                }
              ]
            }
          ],
          3: [
            {
              title: 'icewash2209/images/2412/sb7.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18641',
              menu: [7091, 7092, 7093],
              content: [
                {
                  image: 'icewash2209/images/2411/W02_1.png'
                },
                {
                  image: 'icewash2209/images/2411/W02_2.png'
                },
                {
                  image: 'icewash2209/images/2411/W02_3.png'
                }
              ]
            }
          ],
          4: [
            {
              menu: 6024,
              title: 'icewash2209/images/2412/sb9.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18643'
            }
          ],
          5: [
            {
              menu: 3651,
              title: 'icewash2209/images/2412/sb10.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=22912'
            }
          ]
        }
      ],
      tabs: [],
      menuDis: 6462, //現折券後台清單編號
      status: 0,
      statusGift: 0,
      statusPro: 0,
      isSale: true,
      today: new Date(),
      isBrand: false,
      saleUrl: ''
    }
  },
  mounted() {
    let { menuDis, tab1, tab2, today } = this

    //撈取現折券樓層商品
    this.getFloorSingle(menuDis)

    this.status == 0 ? (this.tabs = tab1[0]) : (this.tabs = tab2[0])

    for (const [t, t1] of Object.entries(tab1[0])) {
      //撈取商品樓層 冰箱
      if (t1[0].content != undefined) {
        this.getFloorData(t1[0].menu)
      } else {
        //無頁籤商品樓層
        this.getFloorSingle(t1[0].menu)
      }
    }

    for (const [t, t2] of Object.entries(tab2[0])) {
      //撈取商品樓層 洗衣機
      if (t2[0].content != undefined) {
        this.getFloorData(t2[0].menu)
      } else {
        //無頁籤商品樓層
        this.getFloorSingle(t2[0].menu)
      }
    }

    //預設顯示頁籤第一個內容
    setTimeout(() => {
      $all('.tab-area').forEach((tab, t) => {
        if (tab.querySelectorAll('.tab-content').length > 0) {
          tab.querySelectorAll('.tab-content')[0].style.display = 'block'
        }
      })
    }, 30)

    // 12月 更新現折券連結
    if (today >= new Date('2024/12/01')) {
      this.saleUrl = 'https://www.tk3c.com/dictitleurl.aspx?cid=124085&strPreView=y'
    } else {
      this.saleUrl = 'https://www.tk3c.com/dic2.aspx?cid=124026&aid=23890&hid=124046&strPreView=y'
    }
  },
  methods: {
    changeGift(id) {
      this.statusGift = id
    },
    change(id) {
      this.status = id
      this.status == 0 ? (this.tabs = this.tab1[0]) : (this.tabs = this.tab2[0])
    },
    changePro(id) {
      if (event) {
        let current = event.currentTarget,
          parentAr = current.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
          parentClass = parentAr.getAttribute('class'),
          parentName = parentClass.substr(16)

        setTimeout(() => {
          this.showAndHide(id, '.' + parentName)
        }, 30)
      }
    },
    message(id) {
      let infohtml = ''
      //活動辦法
      switch (id) {
        case 1:
          infohtml = `
              <img src="https://www.cdn-tkec.tw/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg" width="100%">
          <img src="https://www.cdn-tkec.tw/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg" width="100%">
          `
          break

        case 2:
          infohtml = `
            <img src="https://www.cdn-tkec.tw/image/UserFiles/sgs-2024-1.jpg" width="100%">
            <img src="https://www.cdn-tkec.tw/image/UserFiles/sgs-2024-2.jpg" width="100%">
          `
          break
      }

      Swal.fire({
        width: 900,
        html: infohtml,
        padding: '1em',
        showCloseButton: true,
        position: 'center',
        returnFocus: false,
        confirmButtonText: '確定',
        confirmButtonColor: '#46a5b0'
      })
    }
  }
}
</script>

<template>
  <div id="icewash-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2412/title.png')" alt="感恩冰洗賞" />
      </h2>

      <h5 class="subtitle">
        <swiper
          :loop="true"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :effect="'flip'"
          :flipEffect="{
            slideShadows: false,
            limitRotation: false
          }"
          :parallax="true"
          :modules="[EffectFlip, Parallax]"
        >
          <swiper-slide>
            <img
              data-swiper-parallax-opacity="0"
              :src="$filters.siteUrl('icewash2209/images/2412/sb1.png')"
              alt=" "
            />
          </swiper-slide>
          <swiper-slide>
            <img
              data-swiper-parallax-opacity="0"
              :src="$filters.siteUrl('icewash2209/images/2412/sb2.png')"
              alt=" "
            />
          </swiper-slide>
        </swiper>
      </h5>

      <div class="product">
        <swiper
          :loop="true"
          :autoplay="{ delay: 1800, disableOnInteraction: false }"
          :parallax="true"
          :effect="'fade'"
          :modules="[EffectFade, Parallax]"
        >
          <swiper-slide v-for="pro in proICE">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-opacity="0">
              <img :src="$filters.siteUrl(pro.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('icewash2209/images/2411/item.png')" alt="" />
    </p>

    <!-- 政府補助 -->
    <section class="min-width:30%">
      <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bn20241231.jpg')" alt="" />
    </section>

    <!-- 最高現折 -->
    <section class="sale-box" id="sale" v-if="isSale">
      <h2 class="title">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2310/dis_title.png')" />
      </h2>
      <div class="sale">
        <component
          :is="listF"
          :pro="product2[menuDis]"
          :isSwiper="1"
          :name="'sale-pro'"
        ></component>
        <a class="more" :href="$filters.addGALink(saleUrl)" target="_blank">
          <img :src="$filters.siteUrl('icewash2209/images/2405/MORE.png')" />
        </a>
      </div>
    </section>

    <!-- 獨家活動 -->
    <section class="gift-box">
      <ul class="gap:20 mb:2%">
        <li
          :class="[statusGift == 0 ? 'active' : '']"
          class="w:40% w:44vw@<992 w:75vw@<576 invert(0) invert(1).active"
        >
          <a @click="changeGift(0)"
            ><img :src="$filters.siteUrl('icewash2209/images/2411/nav1.png')"
          /></a>
        </li>
        <li
          :class="[statusGift == 1 ? 'active' : '']"
          class="w:40% w:44vw@<992 w:75vw@<576 invert(0) invert(1).active"
        >
          <a @click="changeGift(1)"
            ><img :src="$filters.siteUrl('icewash2209/images/2411/nav2.png')"
          /></a>
        </li>
      </ul>

      <!-- 活動搶先看 -->
      <div class="box b1" v-show="statusGift == 0">
        <ul class="gift w:90% w:95vw@<992 w:full@<576 rel m:auto">
          <li>
            <a
              :href="
                $filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=111723&aid=22434&hid=123829')
              "
              target="_blank"
              ><img :src="$filters.siteUrl('icewash2209/images/2412/S01-1.png')"
            /></a>
          </li>
          <li>
            <a
              :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=111723&aid=22539')"
              target="_blank"
              ><img :src="$filters.siteUrl('icewash2209/images/2412/S01-2.png')"
            /></a>
          </li>
          <li>
            <a
              :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=111723&aid=22639')"
              target="_blank"
              ><img :src="$filters.siteUrl('icewash2209/images/2412/S01-3.png')"
            /></a>
          </li>
          <li>
            <a
              :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=119202&aid=23268')"
              target="_blank"
              ><img :src="$filters.siteUrl('icewash2209/images/2412/S01-4.png')"
            /></a>
          </li>
        </ul>
      </div>

      <!-- 全站活動 -->
      <div class="box b2" v-show="statusGift == 1">
        <AllEvent></AllEvent>
      </div>
    </section>

    <!-- 政府補助 -->
    <section class="sub-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2412/S02.png')" alt="" />
      </h2>
      <ul class="gap:10">
        <li class="alert1 w:40% w:43vw@<992 w:90vw@<576">
          <a @click="message(1)"
            ><img :src="$filters.siteUrl('icewash2209/images/2412/C1.png')" alt=""
          /></a>
        </li>
        <li class="alert2 w:40% w:43vw@<992 w:90vw@<576">
          <a @click="message(2)"
            ><img :src="$filters.siteUrl('icewash2209/images/2412/C2.png')" alt=""
          /></a>
        </li>
        <li class="long w:80% w:88vw@<992">
          <a
            :href="
              $filters.addGALink(
                'https://events.tk3c.com/events_net/events_net/green_subsidy/index.html'
              )
            "
            target="_blank"
          >
            <img
              :src="$filters.siteUrl('icewash2209/images/2407/bn_turtle2406.jpg')"
              class="pc"
              alt=""
            />
            <img
              :src="$filters.siteUrl('icewash2209/images/2407/bn_turtle2406M.jpg')"
              class="mobile"
              alt=""
            />
          </a>
        </li>
      </ul>
    </section>

    <!-- 最強暢銷品牌 -->
    <section class="brand-box" id="brand" v-if="isBrand">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/2409/sb3-1.png')" alt="" />
      </h2>

      <swiper
        class="w:85% w:95vw@<992"
        :loop="false"
        :space-between="10"
        :autoplay="{
          delay: 1500,
          disableOnInteraction: false
        }"
        :breakpoints="{
          0: {
            slidesPerView: 2,
            grid: {
              fill: 'row',
              rows: 1
            }
          },
          600: {
            slidesPerView: 3,
            grid: {
              fill: 'row',
              rows: 1
            }
          },
          992: {
            slidesPerView: 3,
            grid: {
              fill: 'row',
              rows: 1
            }
          }
        }"
        :navigation="{
          nextEl: '.brand-box .next',
          prevEl: '.brand-box .prev'
        }"
      >
        <swiper-slide v-for="brand in brands">
          <a :href="$filters.addGALink(brand.url)" target="_blank">
            <img :src="$filters.siteUrl(brand.image)" alt="" />
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-button-prev prev"></div>
      <div class="swiper-button-next next"></div>
    </section>

    <!-- 冰箱 洗衣機選擇 -->
    <section class="info-box" id="info">
      <div class="flex flex-wrap:wrap gap:20 gap:10@<576 m:auto jc:center">
        <div class="w:40% w:45vw@<992 m:0|0 m:0|0|3%@<576">
          <img class="mb:2%" :src="$filters.siteUrl('icewash2209/images/2412/info1.png')" alt="" />
          <a
            class="brightness(0.7) brightness(1).active"
            :class="[status == 0 ? 'active' : '']"
            @click="change(0)"
            ><img :src="$filters.siteUrl('icewash2209/images/2411/btn1.png')" alt=""
          /></a>
        </div>

        <div class="w:40% w:45vw@<992 m:0|0 m:0|0|3%@<576">
          <img class="mb:2%" :src="$filters.siteUrl('icewash2209/images/2412/info2.png')" alt="" />
          <a
            class="brightness(0.7) brightness(1).active"
            :class="[status == 1 ? 'active' : '']"
            @click="change(1)"
            ><img :src="$filters.siteUrl('icewash2209/images/2411/btn2.png')" alt=""
          /></a>
        </div>
      </div>
    </section>

    <section class="pro-group">
      <div v-for="(i, key) in 2" v-show="status == key">
        <section
          class="tab-area scroll"
          v-for="(tab, t) in tabs"
          :class="[key == 0 ? `tab${Number(t) + 1}-box` : `tab${Number(t) + 6}-box`]"
          :id="[key == 0 ? `tab${Number(t) + 1}` : `tab${Number(t) + 6}`]"
        >
          <h2 class="title">
            <a :href="$filters.addGALink(tab[0].url)" target="_blank">
              <img :src="$filters.siteUrl(tab[0].title)" />
            </a>
          </h2>

          <div v-if="tab[0].content != undefined">
            <ul class="tab">
              <swiper
                class="w:full"
                :space-between="10"
                :breakpoints="{
                  0: {
                    slidesPerView: 2.3
                  },
                  600: {
                    slidesPerView: 3.5
                  },
                  992: {
                    slidesPerView: 4
                  }
                }"
                @swiper="onSwiper"
              >
                <swiper-slide
                  v-for="(content, c) in tab[0].content"
                  :class="[statusPro == c ? 'active' : '']"
                  @click="gotoSlide(c)"
                >
                  <a :href="$filters.addGALink(content.url)" @click.prevent="changePro(c)">
                    <img :src="$filters.siteUrl(content.image)" alt="" />
                  </a>
                </swiper-slide>
              </swiper>
            </ul>

            <div class="tab-content" v-for="(content, c) in tab[0].content" v-show="statusPro == c">
              <component
                v-if="products[tab[0].menu[c]] != undefined"
                :is="listF"
                :pro="products[tab[0].menu[c]].Data"
                :isSwiper="1"
                :name="`pro${Number(c) + 1}`"
              >
              </component>
            </div>
          </div>

          <div v-else>
            <component :is="listF" :pro="product2[tab[0].menu]" :isSwiper="1" :name="'pro'">
            </component>
          </div>
        </section>
      </div>
    </section>
  </div>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li><a href="#brand">最強暢銷品牌</a></li>
          <li><a href="#info">冰箱洗衣機</a></li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>
</template>

<style lang="scss">
@charset "utf-8";

@import '../../../assets/sass/module/base';
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/icewash2209/images/2412/';
$origin: 'https://events.tk3c.com/events_net/events_net/icewash2209/images/2412/';

/*  共用樣式調整 */
body {
  background: #e03850;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'BG.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 0,
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
  margin: 0 auto 2%;
}

.more {
  font-size: 0;
  padding: 0;
}

/* 冰洗頁面*/
#icewash-container {
  .background {
    $image: $dir + 'KV.png';
    @include bg-responsive($image, 2000, 860);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 48%;
    .title {
      width: 30%;
      position: absolute;
      left: 24%;
      top: 23%;
      margin: 0 auto;
      animation: rotate-fly-right 1.8s ease-in;
    }
    .subtitle {
      width: 20%;
      position: absolute;
      left: 28%;
      top: 45%;
    }
    .product {
      width: 25%;
      position: absolute;
      top: 2vmax;
      right: 22%;
      .swiper-wrapper {
        align-items: baseline;
      }
    }
  }
}

#brand-area {
  width: 85%;
  .swiper-wrapper {
    align-items: baseline;
  }
}

.tab-area {
  .tab {
    width: 95%;
    margin-bottom: 0;
    .swiper-slide {
      &.active {
        filter: drop-shadow(4px 3px 2px #0287d0);
      }
    }
    .swiper-wrapper {
      padding-bottom: 10px;
    }
  }
}

#gift-area {
  width: 80%;
}

.gift-box {
  .gift {
    li {
      width: 44%;
    }
  }
  .sec {
    .swiper-wrapper {
      align-items: baseline;
    }
  }
}

/*  電腦版其他尺寸 */

@include media-query('mobile', '992px') {
  #icewash-container {
    .background {
      background-size: 120% auto;
      background-position:
        -8vw 4vw,
        top;
      padding-bottom: 62vw;
      .title {
        width: 40vw;
        top: 12vw;
        left: 17vw;
      }
      .subtitle {
        width: 28vw;
        left: 21vw;
        top: 27vw;
      }
      .product {
        width: 30vw;
        right: 14vw;
        top: 3vw;
      }
    }
  }

  .tab-area {
    .tab {
      width: 100%;
    }
  }

  #gift-area {
    width: 100%;
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

  #icewash-container {
    .background {
      background-size: 370% auto;
      background-position:
        -156vw 10vw,
        top;
      padding-bottom: 180vw;
      .title {
        width: 90vw;
        left: 0;
        right: 0;
        top: 20vw;
      }
      .subtitle {
        width: 50vw;
        left: 8vw;
        top: 49vw;
      }
      .product {
        width: 70vw;
        left: 29vw;
        right: 0;
        margin: 0 auto;
        top: 40vw;
      }
    }
  }

  .gift-box {
    .gift {
      li {
        width: 95vw;
      }
    }
  }

  .tab3-box,
  .tab8-box,
  .tab9-box {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }

  #brand-area {
    width: 90vw;
  }
}
</style>
