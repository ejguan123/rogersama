<script setup>
import {Parallax } from 'swiper/modules'
import listF from '../../layout/listF.vue'
import AllEvent from '../../../components/AllEvent.vue'
import CommonFloor from '../../floor/CommonFloor.vue'
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      proWarm: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=221273',
          image: 'electric_heater/images/2411/221273.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=243314',
          image: 'electric_heater/images/2411/243314.png'
        },
         {
          url: 'https://www.tk3c.com/pt.aspx?pid=245362',
          image: 'electric_heater/images/2411/245362.png'
        },
      ],
      floorImg: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112699',
          image: 'electric_heater/images/2411/floor1_2.png'
        },
         {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112701',
          image: 'electric_heater/images/2411/floor2_2.png'
        },
         {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112709',
          image: 'electric_heater/images/2411/floor3_2.png'
        },
         {
          url: 'https://www.tk3c.com/dic2.aspx?cid=108783&aid=23230&hid=119914',
          image: 'electric_heater/images/2411/floor4_2.png'
        },
         {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112703',
          image: 'electric_heater/images/2411/floor5_2.png'
        },
         {
          url: 'https://www.tk3c.com/dictitleurl.aspx?cid=71323',
          image: 'electric_heater/images/2411/floor6_2.png'
        },
         {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112710',
          image: 'electric_heater/images/2411/floor7_2.png'
        },
         {
          url: 'https://www.tk3c.com/dic1.aspx?cid=11058&aid=16920',
          image: 'electric_heater/images/2411/floor8_2.png'
        },
         {
          url: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=23073',
          image: 'electric_heater/images/2411/floor9_2.png'
        },
      ],
      gifts:[
         {
          url: '#sale',
          image: 'electric_heater/images/2411/sp01.png'
        },
          {
          url: 'https://www.tk3c.com/events/eventgift.aspx',
          image: 'electric_heater/images/2411/sp02.png'
        },
          {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11058&aid=5779&hid=112763',
          image: 'electric_heater/images/2411/sp03_2.png'
        },
          {
          url: 'https://www.tk3c.com/dic2.aspx?cid=115927&aid=22750&hid=115598',
          image: 'electric_heater/images/2411/sp04.png'
        },
      ],
      icons:[
        {
          url: '#pro2473',
          image: 'electric_heater/images/2411/icon1.png'
        },
        {
          url: '#pro2474',
          image: 'electric_heater/images/2411/icon2.png'
        },
        {
          url: '#pro2475',
          image: 'electric_heater/images/2411/icon3_2.png'
        },
          {
          url: '#pro7639',
          image: 'electric_heater/images/2411/icon9.png'
        },
        {
          url: '#pro2476',
          image: 'electric_heater/images/2411/icon4_2.png'
        },
        {
          url: '#pro2477',
          image: 'electric_heater/images/2411/icon5.png'
        },
        {
          url: '#pro2478',
          image: 'electric_heater/images/2411/icon6.png'
        },
        {
          url: '#pro3741',
          image: 'electric_heater/images/2411/icon7.png'
        },
        {
          url: '#pro3742',
          image: 'electric_heater/images/2411/icon8.png'
        },
      ],
      asides:[
        {
          text:"早鳥獨享",
          href:'#sale'
        },
         {
          text:"強檔推薦",
          href:'#special'
        },
         {
          text:"葉片式電暖器",
          href:'#pro2473'
        },
         {
          text:"對流/陶瓷式電暖器",
          href:'#pro2474'
        },
         {
          text:"碳素/鹵素燈",
          href:'#pro2475'
        },
         {
          text:"溫熱便座",
          href:'#pro7639'
        },
         {
          text:"個人保暖",
          href:'#pro2476'
        },
         {
          text:"冷暖/除溼",
          href:'#pro2477'
        },
         {
          text:"烘被/烘衣/乾鞋機",
          href:'#pro2478'
        },
         {
          text:"循環對流",
          href:'#pro3741'
        },
         {
          text:"健康保健",
          href:'#pro3742'
        },
      ],
      menus: [2473,2474,2475,7639,2476,2477,2478,3741,3742],
      menuSp: 2472,
      menuSale: [7637, 7638],
      statusGift: 0,
      statusSale:0,
      today: new Date(),
    }
  },
  mounted() {
    const { today } = this

    //撈取現折樓層商品
    this.getFloorData(this.menuSale)

    //撈取強檔推薦樓層商品
    this.getFloorSingle(this.menuSp)
  },
  methods: {
    change(id) {
      this.statusGift = id
    },
    changeSale(id){
      this.statusSale = id
    }
  }
}
</script>

<template>
  <div id="warm-container" v-cloak>
    <div class="background">
      <h2
        class="title"
      >
        <img :src="$filters.siteUrl('electric_heater/images/2411/title.png')" alt=" " />
      </h2>

      <div class="subtitle grid-cols:2 gap:10">
        <img :src="$filters.siteUrl('electric_heater/images/2411/C1.png')" alt=" " />
        <img :src="$filters.siteUrl('electric_heater/images/2411/C2.png')" alt=" " />
      </div>

      <div class="product">
       <swiper
          :loop="true"
          :parallax="true"
          :autoplay="{ delay: 1500, disableOnInteraction: false }"
          :modules="[Parallax]"
        >
          <swiper-slide v-for="(pro, p) in proWarm" :key="p">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-x="-4000">
              <img :src="$filters.siteUrl(pro.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>

      <p class="cloud c1">
        <img :src="$filters.siteUrl('electric_heater/images/2411/clo1.png')" alt=" " />
      </p>

       <p class="cloud c2">
        <img :src="$filters.siteUrl('electric_heater/images/2411/clo2.png')" alt=" " />
      </p>

       <p class="cloud c3">
        <img :src="$filters.siteUrl('electric_heater/images/2411/clo3.png')" alt=" " />
      </p>
    </div>

    <p class="item">
       <img :src="$filters.siteUrl('electric_heater/images/2411/de2.png')" alt=" " />
    </p>

    <!-- 暖心優惠一把抓 -->
    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('electric_heater/images/2411/bar_sp.png')" alt="本週環保小尖兵" />
      </h2>
      <ul class="w:35% w:50vw@<992 w:75vw@<576 mt:4% mb:1% grid-cols:2 gap:10">
        <li :class="[statusGift == 0 ? 'active' : '']" class="contrast(0.5) contrast(1).active">
          <a @click="change(0)">
            <img :src="$filters.siteUrl('electric_heater/images/2411/1-bt_01.png')">
          </a>
        </li>
        <li :class="[statusGift == 1 ? 'active' : '']" class="contrast(0.5) contrast(1).active">
           <a @click="change(1)">
            <img :src="$filters.siteUrl('electric_heater/images/2411/1-bt_02.png')">
          </a>
        </li>
      </ul>

      <!-- 線上獨家 -->
      <div class="w:80% w:90vw@<992 w:full@<576 m:auto bg:#fff p:4% r:20px r:10px@<576 b:4px|solid|#eaa651 box:border-box" v-if="statusGift == 0">
        <ul class="grid-cols:2 grid-cols:1@<576 gap:10">
          <li v-for="(gift,g) in gifts">
            <a v-if="g == 0" :href="gift.url">
              <img :src="$filters.siteUrl(gift.image)">
            </a>
              <a v-else :href="$filters.addGALink(gift.url)" target="_blank">
              <img :src="$filters.siteUrl(gift.image)">
            </a>
          </li>
        </ul>
      </div>

      <!-- 全站活動 -->
       <div v-if="statusGift == 1">
        <AllEvent></AllEvent>
       </div>
    </section>

    <!-- 本早鳥獨享 領券再現折 -->
    <section class="sale-group scroll" id="sale">
      <h2 class="title">
        <img :src="$filters.siteUrl('electric_heater/images/2411/bar01.png')" alt=" " />
      </h2>

      <ul class="w:42% w:50vw@<992 w:75vw@<576 mt:5% grid-cols:2 gap:10 mb:2%">
        <li :class="[statusSale == 0 ? 'active' : '']" class="brightness(0.8) brightness(1).active">
          <a @click="changeSale(0)">
            <img :src="$filters.siteUrl('electric_heater/images/2411/2-bt100.png')">
          </a>
        </li>
        <li :class="[statusSale == 1 ? 'active' : '']" class="brightness(0.8) brightness(1).active">
           <a @click="changeSale(1)">
            <img :src="$filters.siteUrl('electric_heater/images/2411/2-bt200.png')">
          </a>
        </li>
      </ul>
      <div class="box" v-for="(i,index) in 2" v-show="statusSale == index">
        <component v-if="products[menuSale[index]] != undefined" :is="listF" :isSwiper="1" :name="'sale-area'" :pro="products[menuSale[index]].Data"></component>
         <a class="more" :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=124026&aid=23890&hid=124083&strPreView=y')" target="_blank">
          <img :src="$filters.siteUrl('electric_heater/images/2411/more.png')"/>
        </a>
      </div>
    </section>

    <!-- 強檔推薦 保暖必Buy -->
    <section class="special-box scroll" id="special">
      <h2 class="title">
        <img :src="$filters.siteUrl('electric_heater/images/2411/bar02.png')" alt=" " />
      </h2>
     
      <div class="specials">
        <component :is="listF" :pro="product2[menuSp]"></component>
        <a class="more" :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=11058&aid=5779')" target="_blank">
          <img :src="$filters.siteUrl('electric_heater/images/2411/more.png')"/>
        </a>
      </div>
    </section>

    <!-- ICON 區 -->
     <section class="icon-group">
      <swiper
      :loop="false"
      :breakpoints="{
        0:{
           slidesPerView:2.2,
            spaceBetween:-20,
           grid: {
              fill: 'row',
              rows: 2
            }
        },
        600:{
          slidesPerView:3.3,
           spaceBetween:-30,
           grid: {
              fill: 'row',
              rows: 2
            }
        },
        992:{
          slidesPerView:5,
          spaceBetween:-40,
           grid: {
              fill: 'row',
              rows: 2
            }
        }
      }"
       :pagination="{
            el: '.icon-group .swiper-pagination',
            clickable:true
          }"
      >
      <swiper-slide v-for="(icon,i) in icons">
        <a :href="icon.url">
          <img :src="$filters.siteUrl(icon.image)" alt=" ">
        </a>
      </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
     </section>
  
     <!-- 其他樓層 -->
      <CommonFloor :floors="floorImg" :menu="menus"></CommonFloor>

    <!-- 右側選單 -->
    <aside class="aside-container">
       <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
      <div class="aside-wrap">
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
  </div>
</template>

<style lang="scss">
  @import '../../../assets/sass/module/base';
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/electric_heater/images/2411/';
$origin: 'https://events.tk3c.com/events_net/events_net/electric_heater/images/2411/';

body {
  background: #eaa651;
  position: relative;
  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.png';
    background: url($image) no-repeat center;
    background-size: 100% auto;
    background-position:
      0 0,
      top;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

.bg01 {
  background: #db433c;
}

#warm-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 35%;
    .title {
      width: 30%;
      position: absolute;
      left: 21%;
      top: 17%;
      animation: zoomInNormal 1.6s linear;
    }
   .product{
    width: 30%;
    position: absolute;
    right: 12%;
    top: 14%;
   }
   .subtitle {
    width: 27%;
    position: absolute;
    left: 22%;
    top: 67%;
   }
   .cloud {
    width: 8%;
    position: absolute;
    &.c1 {
      left: 5%;
      top: 49%;
      animation: slowMove 0.6s infinite alternate;
    }
    &.c2 {
      left: 52%;
      top: 13%;
      animation: slowMove 1.3s infinite alternate;
    }
    &.c3 {
      right: 3%;
      top: 69%;
      animation: slowMove 0.8s infinite alternate;
    }
   }
  }
}

.floor {
  .title {
    width: 100%;
  }
}

.special-box,
.sale-group {
  .bg01 {
    background: #9c4638;
    margin: 0 auto 2%;
  }
}

@include media-query('mobile', '992px') {
  body {
    &:before {
      background-size: 120% auto;
      background-position: -13vw 4vw,top;
    }
  }

  #warm-container {
    .background {
      padding-bottom: 45vw;
      .title {
        width: 35vw;
        left: 14vw;
        top: 12vw;
      }
      .subtitle {
        width: 32vw;
        left: 14vw;
        top: 32vw;
      }
      .product {
        width: 35vw;
        right: 9vw;
        top: 9vw;
      }
      .cloud {
        width: 10vw;
        &.c1 {
          top: 25vw;
          left: 2vw;
        }
        &.c2 {
          top: 9vw;
          left: 49vw;
        }
        &.c3 {
          right: 0;
          top: 27vw;
        }
      }
    }
  }
}

@include media-query('mobile', '576px') {
   .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }


  body {
    &:before {
      background-size: 180% auto;
      background-position: -45vw 21vw,top;
    }
  }

  #warm-container {
    .background  {
      padding-bottom: 90vw;
      .title {
        width: 50vw;
        left: 1vw;
        top: 35vw;
      }
      .subtitle {
        width: 47vw;
        left: 2vw;
        top: 64vw;
      }
      .product {
        width: 48vw;
        right: -1vw;
        top: 35vw;
      }
      .cloud {
        width: 15vw;
        &.c1 {
          top: 27vw;
          left: 23vw;
          animation: slowMove 1.4s infinite alternate;
        }
        &.c2 {
          display: block;
        }
        &.c3 {
          right: 25vw;
          top: 32vw;
          animation: slowMove 2s infinite alternate;
        }
      }
    }
  }

  .floor {
    .title {
      width: 120%;
      margin: 0 -9% 2%;
    }
  }
}
</style>
