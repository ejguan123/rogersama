<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { EffectFade, Parallax } from 'swiper/modules'
import listF from '../../layout/listF.vue'
import { ref } from 'vue'

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
      gifts: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=83198&aid=18660&hid=123752&strPreView=y',
          image: 'icewash2209/images/2409/sb1-6_a.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=12504&aid=22579&hid=123807&strPreView=y',
          image: 'icewash2209/images/2409/sb1-7_a.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=23099&hid=123810&strPreView=y',
          image: 'icewash2209/images/2409/sb1-8_a.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=12504&aid=22579&hid=123812&strPreView=y',
          image: 'icewash2209/images/2409/sb1-9_a.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=83198&aid=18660&hid=123813&strPreView=y',
          image: 'icewash2209/images/2409/sb1-10_a.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=22434&hid=123688&strPreView=y',
          image: 'icewash2209/images/2409/sb1-5_a.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=22434&hid=123829&strPreView=y',
          image: 'icewash2209/images/2409/sb1-11.png'
        }
      ],
      gift_after: [
        {
          url: 'https://www.tk3c.com/events/eventgift.aspx',
          image: 'icewash2209/images/2409/sb1-4b.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=111723&aid=22434&hid=123829&strPreView=y',
          image: 'icewash2209/images/2409/sb1-11.png'
        }
      ],
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
          url: 'https://www.tk3c.com/pt.aspx?pid=234076',
          image: 'icewash2209/images/2409/pd1.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=247404',
          image: 'icewash2209/images/2409/pd2.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=223616',
          image: 'icewash2209/images/2409/pd3_2.png'
        }
      ],
      tab1: [
        {
          0: [
            {
              menu: 4423,
              title: 'icewash2209/images/2409/sb4.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
            }
          ],
          1: [
            {
              menu: 5540,
              title: 'icewash2209/images/2409/sb12.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878'
            }
          ],
          2: [
            {
              title: 'icewash2209/images/2409/sb6.png',
              content: [
                {
                  menu: 5981,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
                  image: 'icewash2209/images/24618/R02_1.png'
                },
                {
                  menu: 5982,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
                  image: 'icewash2209/images/24618/R02_2.png'
                },
                {
                  menu: 5983,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
                  image: 'icewash2209/images/24618/R02_3.png'
                }
              ]
            }
          ],
          3: [
            {
              title: 'icewash2209/images/2409/sb7.png',
              content: [
                {
                  menu: 7083,
                  url: 'https://www.tk3c.com/dic2.aspx?cid=12504&aid=4937&hid=12644',
                  image: 'icewash2209/images/24618/R03_1.png'
                },
                {
                  menu: 7084,
                  url: 'https://www.tk3c.com/dic2.aspx?cid=12504&aid=4937&hid=12645',
                  image: 'icewash2209/images/24618/R03_2.png'
                }
              ]
            }
          ],
          4: [
            {
              menu: 7085,
              title: 'icewash2209/images/2409/sb5.png',
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
              title: 'icewash2209/images/2409/sb4.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
            }
          ],
          1: [
            {
              menu: 7087,
              title: 'icewash2209/images/2409/sb12.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620'
            }
          ],
          2: [
            {
              title: 'icewash2209/images/2409/sb6.png',
              content: [
                {
                  menu: 7088,
                  url: 'https://www.tk3c.com/dic2.aspx?cid=83198&aid=18581&hid=83408',
                  image: 'icewash2209/images/24618/W02_1.png'
                },
                {
                  menu: 7089,
                  url: 'https://www.tk3c.com/dic2.aspx?cid=83198&aid=18581&hid=83409',
                  image: 'icewash2209/images/24618/W02_2.png'
                },
                {
                  menu: 7090,
                  url: 'https://www.tk3c.com/dic2.aspx?cid=83198&aid=18581&hid=83412',
                  image: 'icewash2209/images/24618/W02_3.png'
                }
              ]
            }
          ],
          3: [
            {
              title: 'icewash2209/images/2409/sb7.png',
              content: [
                {
                  menu: 7091,
                  url: 'https://www.tk3c.com/dic2.aspx?cid=83198&aid=18641&hid=83372',
                  image: 'icewash2209/images/24618/W03_1.png'
                },
                {
                  menu: 7092,
                  url: 'https://www.tk3c.com/dic2.aspx?cid=83198&aid=18641&hid=83370',
                  image: 'icewash2209/images/24618/W03_2.png'
                },
                {
                  menu: 7093,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620',
                  image: 'icewash2209/images/24618/W03_3.png'
                }
              ]
            }
          ],
          4: [
            {
              menu: 6024,
              title: 'icewash2209/images/2409/sb10.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18643'
            }
          ],
          5: [
            {
              menu: 3651,
              title: 'icewash2209/images/2409/sb11.png',
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
      isBrand: false
    }
  },
  mounted() {
    let { menuDis, tabs, tab1, tab2, today } = this

    //撈取現折券樓層商品
    this.getFloorSingle(menuDis)

    this.status == 0 ? (this.tabs = tab1[0]) : (this.tabs = tab2[0])

    for (const [t, tab] of Object.entries(tab1[0])) {
      //撈取有頁籤的商品樓層 冰箱
      if (tab[0].content != undefined) {
        this.getFloorSingle(tab[0].content[0].menu)
      } else {
        //無頁籤商品樓層
        this.getFloorSingle(tab[0].menu)
      }
    }

    for (const [t, tab] of Object.entries(tab2[0])) {
      //撈取有頁籤的商品樓層 洗衣機
      if (tab[0].content != undefined) {
        this.getFloorSingle(tab[0].content[0].menu)
      } else {
        //無頁籤商品樓層
        this.getFloorSingle(tab[0].menu)
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

    // 10/4-13 隱藏現折券樓層
    if (today >= new Date('2024/10/04') && today < new Date('2024/10/14')) {
      this.isSale = false
      this.gifts = this.gift_after
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
    changePro(id, menu) {
      if (event) {
        let current = event.currentTarget,
          parentAr = current.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode,
          parentClass = parentAr.getAttribute('class'),
          parentName = parentClass.substr(16)

        setTimeout(() => {
          this.getFloorSingle(menu)
          this.showAndHide(id, '.' + parentName)
        }, 100)
      }
    },
    message(id) {
      let infohtml = ''
      //活動辦法
      switch (id) {
        case 1:
          infohtml = `
              <img src="https://www.tk3c.com/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg" width="100%">' +
          <img src="https://www.tk3c.com/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg" width="100%">
          `
          break

        case 2:
          infohtml = `
            <img src="https://www.tk3c.com/image/UserFiles/sgs-2024-1.jpg" width="100%">
            <img src="https://www.tk3c.com/image/UserFiles/sgs-2024-2.jpg" width="100%">
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
        <img :src="$filters.siteUrl('icewash2209/images/2409/title2.png')" alt="感恩冰洗賞" />
      </h2>

      <h5 class="subtitle">
        <img :src="$filters.siteUrl('icewash2209/images/2409/st2.png')" alt="59折" />
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
      <img :src="$filters.siteUrl('icewash2209/images/2409/de.png')" alt="" />
    </p>

    <canvas id="canvas"></canvas>

    <!-- 最高現折 -->
    <section class="sale-box" id="sale" v-if="isSale">
      <h2 class="title">
        <img
          :src="$filters.siteUrl('airConditionerLAB/images/2310/dis_title.png')"
          alt="熱銷強品"
        />
      </h2>
      <div class="sale">
        <component
          :is="listF"
          :pro="product2[menuDis]"
          :isSwiper="1"
          :name="'sale-pro'"
        ></component>
        <a
          class="more"
          :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123798')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('icewash2209/images/2405/MORE.png')" />
        </a>
      </div>
    </section>

    <!-- 獨家活動 -->
    <section class="gift-box">
      <h2 class="w:25% w:55vw@<576 m:0|auto|1% m:0|auto|3%@<576">
        <img :src="$filters.siteUrl('icewash2209/images/2409/sb1.png')" alt="" />
      </h2>

      <div class="gift w:90% w:full@<992 rel m:auto">
        <swiper
          :loop="false"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 1
            },
            600: {
              slidesPerView: 3
            },
            992: {
              slidesPerView: 3
            }
          }"
          :navigation="{
            nextEl: '.gift-box .next',
            prevEl: '.gift-box .prev'
          }"
        >
          <swiper-slide v-for="(gift, g) in gifts">
            <a :href="$filters.addGALink(gift.url)" target="_blank">
              <img :src="$filters.siteUrl(gift.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
        <div class="swiper-button-prev prev"></div>
        <div class="swiper-button-next next"></div>
      </div>
    </section>

    <!-- 政府補助 -->
    <section class="sub-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('icewash2209/images/24618/sub_title2.png')" alt="" />
      </h2>
      <ul class="gap:10">
        <li class="alert1 w:40% w:43vw@<992 w:90vw@<576">
          <a @click="message(1)"
            ><img :src="$filters.siteUrl('icewash2209/images/2407/sb2-2.png')" alt=""
          /></a>
        </li>
        <li class="alert2 w:40% w:43vw@<992 w:90vw@<576">
          <a @click="message(2)"
            ><img :src="$filters.siteUrl('icewash2209/images/2407/sb2-3.png')" alt=""
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
        <a
          class="w:40% w:45vw@<992 m:0|0 brightness(0.7) brightness(1).active"
          :class="[status == 0 ? 'active' : '']"
          @click="change(0)"
          ><img :src="$filters.siteUrl('icewash2209/images/24618/info1_b.png')" alt=""
        /></a>
        <a
          class="w:40% w:45vw@<992 m:0|0 brightness(0.7) brightness(1).active"
          :class="[status == 1 ? 'active' : '']"
          @click="change(1)"
          ><img :src="$filters.siteUrl('icewash2209/images/24618/info2_b.png')" alt=""
        /></a>
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
            <img :src="$filters.siteUrl(tab[0].title)" alt="" />
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
                  <a @click="changePro(c, content.menu)">
                    <img :src="$filters.siteUrl(content.image)" alt="" />
                  </a>
                </swiper-slide>
              </swiper>
            </ul>

            <div class="tab-content" v-for="(content, c) in tab[0].content" v-show="statusPro == c">
              <component
                :is="listF"
                :pro="product2[content.menu]"
                :isSwiper="1"
                :name="`pro${Number(c) + 1}`"
              >
              </component>
              <a class="more" :href="$filters.addGALink(content.url)" target="_blank">
                <img :src="$filters.siteUrl('icewash2209/images/2405/MORE.png')" />
              </a>
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
