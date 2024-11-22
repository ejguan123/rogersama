<script setup>
import listF from '../../layout/listF.vue'
import { Parallax,EffectFlip,EffectFade } from "swiper/modules";
import CommonFloor from '../../floor/CommonFloor.vue'
import AllEvent from '../../../components/AllEvent.vue'
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      proFan:[
        {
          image: 'fan_hot/images/2411/123640.png',
          url:'https://www.tk3c.com/pt.aspx?pid=123640'
        },
         {
          image: 'fan_hot/images/2411/164957.png',
          url:'https://www.tk3c.com/pt.aspx?pid=164957'
        },
         {
          image: 'fan_hot/images/2411/184300.png',
          url:'https://www.tk3c.com/pt.aspx?pid=184300'
        },
         {
          image: 'fan_hot/images/2411/246180.png',
          url:'https://www.tk3c.com/pt.aspx?pid=246180'
        }
      ],
      sales:[
         {
          image: 'fan_hot/images/2411/s1-1.png',
          url:'https://www.tk3c.com/events/eventgift.aspx'
        },
          {
          image: 'fan_hot/images/2411/s1-3.png',
          url:'https://www.tk3c.com/events/eventgift.aspx'
        },
      ],
      floorImg: [
        {
          image: 'fan_hot/images/2411/s4.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=27404'
        },
        {
          image: 'fan_hot/images/2411/s5.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=16920'
        },
        {
          image: 'fan_hot/images/2411/s6.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=115230'
        },
        {
          image: 'fan_hot/images/2411/s7.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=17040'
        },
        {
          image: 'fan_hot/images/2411/s8.png',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=26943'
        },
        {
          image: 'fan_hot/images/2411/s9.png',
          url:'https://www.tk3c.com/dictitleurl.aspx?cid=115927'
        },
         {
          image: 'fan_hot/images/2411/s10.png',
          url:'https://www.tk3c.com/dic1.aspx?cid=11058&aid=4677'
        },
        {
          image: 'fan_hot/images/2411/s12.png',
          type: 'listM',
          url:'https://www.tk3c.com/dic2.aspx?cid=11058&aid=22588&hid=120412'
        }
      ],
      menuGo: 6880, //速速go樓層清單編號
      menu:[3428,3430,3429,4150,4153,6729,6730,4151],
      asides: [
        { text: '速速GO', href: '#go' },
        { text: '節能DC扇', href: '#pro3428' },
        { text: '對流循環扇', href: '#pro3430' },
        { text: '勁涼AC扇', href: '#pro3429' },
        { text: '瞬冷水冷扇', href: '#pro4150' },
        { text: '便攜小風扇', href: '#pro4153' },
         { text: '熨燙好心情', href: '#pro6729' },
        { text: '滅蚊一把罩', href: '#pro6730' },
        { text: '福利品', href: '#pro4151' },
      ],
      today: new Date()
    }
  },
  mounted() {
    const { menuGo } = this
    this.getFloorSingle(menuGo)
  },
}
</script>

<template>
   <div id="fan-container">
        <div class="background">
          <h2 class="title animate__animated animate__lightSpeedInLeft">
            <img :src="$filters.siteUrl('fan_hot/images/2411/title.png')" alt="" />
          </h2>

          <div class="product">
             <swiper
              :loop="true"
              :effect="'fade'"
              :fadeEffect="{
                crossFade: true,
              }"
              :parallax="true"
              :autoplay="{ delay: 1800, disableOnInteraction: false }"
              :modules="[Parallax,EffectFade]">
                <swiper-slide v-for="pro in proFan">
                  <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-scale="0.7" data-swiper-parallax-opacity="0">
                    <img :src="$filters.siteUrl(pro.image)" alt="" />
                  </a>
                </swiper-slide>
            </swiper>
          </div>
        </div>

        <p class="item">
          <img :src="$filters.siteUrl('fan_hot/images/2411/bg_de.png')" alt="" />
        </p>

        <!-- 指南 -->
        <section class="pro-box">
          <h2 class="title">
            <img :src="$filters.siteUrl('fan_hot/images/2411/s1.png')"
              alt="" />
          </h2>

          <ul>
            <li class="w:43%">
              <swiper
              :loop="true"
              :effect="'flip'"
              :flipEffect="{
                 slideShadows : false,
                 limitRotation : true,
              }"
              :autoplay="{ delay: 1300, disableOnInteraction: false }"
              :modules="[EffectFlip]"
              >
              <swiper-slide v-for="sale in sales">
                <a :href="$filters.addGALink(sale.url)" target="_blank">
                  <img :src="$filters.siteUrl(sale.image)">
                </a>
              </swiper-slide>
              </swiper>
            </li>
              <li><a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank">
                  <img :src="$filters.siteUrl('fan_hot/images/2411/s1-4.png')" alt="" />
                </a>
              </li>
              <li class="muti">
                 <img :src="$filters.siteUrl('fan_hot/images/2411/s1-2b.png')" alt="" />
                 <div class="links">
                  <a class="alert">
                     <img :src="$filters.siteUrl('fan_hot/images/2411/event2.png')" />
                  </a>
                   <a class="go" :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=11058&aid=4675&hid=88225')" target="_blank">
                     <img :src="$filters.siteUrl('fan_hot/images/2411/go2.png')" />
                  </a>
                 </div>
              </li>
              <li class="muti">
                 <img :src="$filters.siteUrl('fan_hot/images/2411/s1-5.png')" alt="" />
                 <div class="links">
                   <a class="go" :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=115927&aid=22750&hid=115598')" target="_blank">
                     <img :src="$filters.siteUrl('fan_hot/images/2411/go2.png')" />
                  </a>
                 </div>
              </li>
          </ul>
        </section>

        <!-- 全站活動 -->
         <AllEvent></AllEvent>

        <!-- 速速go -->
        <section class="sale-box scroll" id="go">
          <h2 class="title">
            <img :src="$filters.siteUrl('wet/images/tk3cgo_bar.png')" alt="" />
          </h2>

          <div class="sales">
            <component :is="listF" :isSwiper="1" :name="'sale'" :pro="product2[menuGo]"></component>
            <a class="more" :href="$filters.addGALink('https://fast.tk3c.com/store/219/category/13')" target="_blank">MORE</a>
          </div>
        </section>

        <!-- 其他樓層 --> 
         <CommonFloor :floors="floorImg" :menu="menu"></CommonFloor>
      </div>

      <!-- 右側選單 -->
      <aside class="aside-container">
        <span class="arrow hide"><i class="fas fa-chevron-left"></i></span>
        <div class="aside-wrap">
          <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
          <h3 class="aside-header"></h3>
          <div class="aside-content">
            <ul>
              <li v-for="aside in asides">
                <a :href="aside.href">{{ aside.text }}</a>
              </li>
            </ul>
          </div>
          <a href="#" class="go-top">GO TOP</a>
        </div>
      </aside>

</template>

<style lang="scss">
  @charset "utf-8";

@import "../../../assets/sass/module/base";
$dir: "https://events.cdn-tkec.tw/events_net/events_net/fan_hot/images/2411/";
$origin: "https://events.tk3c.com/events_net/events_net/fan_hot/images/2411/";

/*  共用樣式調整 */

body {
  background: #ffdc9f;
  position: relative;
  &:before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + "bg.png";
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position: 0 45px, top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

.protitle {
  height: auto;
  @include hide-text;
  margin: 0 auto 1%;
  a {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
  }
}

.bg01 {
  background: #75dbff;
  border-radius: 10px;
  box-sizing: border-box;
}

.item {
  top: 150px;
}

/* 風扇 */
#fan-container {
  .background {
    $image: $dir + "kv_bg.png";
    @include bg-responsive($image, 2000, 863);
    position: relative;
    margin: 0 auto 0;
    background-position: 0 45px, top;
    padding-bottom: 50%;
    .title {
      width: 35%;
      position: absolute;
      left: 23%;
      top: 28%;
      margin: 0 auto;
      animation-duration: 0.5s;
    }
    .product {
      width: 20%;
      position: absolute;
      right: 19%;
      top: 23%;
    }
  }
}

.pro-box {
  li {
    width: 44%;
    margin: 0 5px 1%;
    &.muti {
      position: relative;
      img {
        transform: scale(1.1);
        position: relative;
      }
      .links {
        width: 100%;
        position: absolute;
        top: 73%;
        left: 0;
        right: 0;
        margin: 0 auto;
        display: flex;
        align-items: baseline;
        a {
          margin: 0 0;
          img {
            transform: scale(1);
          }
        }
      }
      &:nth-of-type(even) {
        img {
          top: -20px;
        }
        .links {
          left: 80%;
          img {
            top: 0;
          }
          a {
            width: 17%;
          }
        }
      }
      &:nth-of-type(odd) {
        img {
          top: -32px;
        }
        .links {
          left: 55%;
          img {
            top: 0;
          }
          a {
            &:nth-of-type(odd) {
              width: 26%;
            }
            &:nth-of-type(even) {
              width: 17%;
            }
          }
        }
      }
    }
  }
}

.sale-box {
  .bg01 {
    padding: 1% 1% 0;
    margin: 0 auto 2%;
  }
  .more {
    background: #75dbff;
  }
}

/*  電腦版其他尺寸 */

@include media-query("mobile", "992px") {
  #fan-container {
    .background {
      background-size: 120% auto;
      background-position: -10vw 4vw, top;
      padding-bottom: 60vw;
      .title {
        width: 45vw;
        top: 19vw;
        left: 11vw;
      }
      .product {
        width: 30vw;
        right: 10vw;
        top: 12vw;
      }
    }
  }

  .pro-box {
    li {
      width: 44vw;
      &.muti {
        .links {
          top: 17.5vw;
        }
        &:nth-of-type(odd) {
          img {
            top: -25px;
          }
          .links {
            img {
              top: 0;
            }
          }
        }
        &:nth-of-type(even) {
          img {
            top: -15px;
          }
          .links {
            img {
              top: 0;
            }
          }
        }
      }
    }
  }

  .protitle {
    margin: 0 auto 3%;
  }
}

/* 手機版 */
@include media-query("pad", "577px", "610px") {
  .pro-box {
    li {
      &.muti {
        .links {
          top: 16vw;
        }
      }
    }
  }
}
@include media-query("mobile", "576px") {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #fan-container {
    .background {
      background-size: 180% auto;
      background-position: -36vw 22vw, top;
      padding-bottom: 205vw;
      .title {
        width: 90vw;
        top: 37vw;
        left: 0;
        right: 0;
        margin: 0 auto;
      }
      .product {
        width: 70vw;
        right: 0;
        left: 0;
        top: 106vw;
        margin: 0 auto;
      }
    }
  }

  .sale-box {
    .bg01 {
      padding: 2% 2% 0;
      box-sizing: border-box;
    }
  }

  .pro-box {
    li {
      width: 90vw;
      margin: 0 5px 4%;
      &.muti {
        .links {
          top: 35vw;
        }
      }
    }
  }
}

</style>
