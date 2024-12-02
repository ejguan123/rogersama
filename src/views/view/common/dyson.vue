<script setup>
import listM from '../../layout/listM.vue'
import DysonFloor from '../../floor/CommonFloor.vue'

const today = new Date()

//banner輪播
const slides = [
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=244460',
    pc: 'dyson/images/dyson231109.jpg',
    mobile: 'dyson/images/dyson231109M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=240606',
    pc: 'dyson/images/dyson231109B2.jpg',
    mobile: 'dyson/images/dyson231109B2M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=239788',
    pc: 'dyson/images/dysonv12.jpg',
    mobile: 'dyson/images/dysonv12M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=242153',
    pc: 'dyson/images/dysonHD15.jpg',
    mobile: 'dyson/images/dysonHD15M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=210740',
    pc: 'dyson/images/bn5.jpg',
    mobile: 'dyson/images/bn5M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=216981',
    pc: 'dyson/images/bn6.jpg',
    mobile: 'dyson/images/bn6M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=216977',
    pc: 'dyson/images/bn7.jpg',
    mobile: 'dyson/images/bn7M.jpg'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?cid=110689&aid=22108&hid=110701&pid=216979',
    pc: 'dyson/images/bn1.jpg',
    mobile: 'dyson/images/bn1M.jpg'
  }
]

//5個 商品類別
const navs = [
  {
    url: 'https://www.tk3c.com/dic2.aspx?cid=71484&aid=16984&hid=71501',
    image: 'dyson/images/icon1.png'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?cid=110689&aid=22108&hid=110701&pid=216979',
    image: 'dyson/images/icon2.png'
  },
  {
    url: 'https://www.tk3c.com/dic2.aspx?cid=71323&aid=16887&hid=71363',
    image: 'dyson/images/icon3.png'
  },
  {
    url: 'https://www.tk3c.com/dic2.aspx?cid=4640&aid=2488&hid=53624',
    image: 'dyson/images/icon4.png'
  },
  {
    url: 'https://www.tk3c.com/pt.aspx?pid=245500',
    image: 'dyson/images/icon5.png'
  }
]

const menu = [2383, 2384, 2385, 2386, 2387]
const floorImg = [
  {
    image: 'dyson/images/fl1.jpg'
  },
  {
    image: 'dyson/images/fl2.jpg'
  },
  {
    image: 'dyson/images/fl3.jpg',
    type: listM
  },
  {
    image: 'dyson/images/fl4.jpg',
    type: listM
  },
  {
    image: 'dyson/images/fl5.jpg'
  }
]
</script>

<template>
  <div id="dyson-container">
    <div class="header">
      <p class="logo">
        <img :src="$filters.siteUrl('dyson/images/logo.png')" alt="" />
      </p>
      <b>品牌旗艦館</b>
    </div>
    <div class="navbar">
      <ul>
        <li><a href="#pro2383">新品上市</a></li>
        <li><a href="#pro2384">吸塵器</a></li>
        <li><a href="#pro2385">空氣清淨機與風扇</a></li>
        <li><a href="#pro2386">頭髮護理</a></li>
        <li><a href="#pro2387">乾手器</a></li>
      </ul>
    </div>

    <!-- 輪播區 -->
    <div class="slidebox">
      <swiper
        :loop="true"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false
        }"
        :navigation="{
          nextEl: '.slidebox .next',
          prevEl: '.slidebox .prev'
        }"
        :pagination="{
          el: '.slidebox .page',
          type: 'bullets',
          clickable: true
        }"
      >
        <swiper-slide v-for="slide in slides">
          <a :href="$filters.addGALink(slide.url)" target="_blank">
            <img class="pc" :src="$filters.siteUrl(slide.pc)" />
            <img class="mobile" :src="$filters.siteUrl(slide.mobile)" />
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination page bottom:2%!"></div>
      <div class="swiper-button-prev prev"></div>
      <div class="swiper-button-next next"></div>
    </div>

    <!-- 選單區 -->
    <div class="navSed pt:2%">
      <ul>
        <swiper
          :loop="false"
          :autoplay="{
            delay: 1400,
            disableOnInteraction: false
          }"
          :space-between="20"
          :breakpoints="{
            0: {
              slidesPerView: 2
            },
            600: {
              slidesPerView: 3
            },
            992: {
              slidesPerView: 5
            }
          }"
        >
          <swiper-slide v-for="nav in navs">
            <a :href="$filters.addGALink(nav.url)" target="_blank">
              <img :src="$filters.siteUrl(nav.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </ul>
    </div>

    <!-- 影片區 -->
    <div class="youtube">
      <video autoplay muted loop>
        <source :src="$filters.siteUrl('dyson/video/dyson2307.mp4')" type="video/mp4" />
      </video>
    </div>

    <!-- 商品樓層區 -->
    <DysonFloor :floors="floorImg" :menu="menu"></DysonFloor>
  </div>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li>
            <a href="#pro2383">新品上市</a>
          </li>
          <li class="">
            <a href="#pro2384">吸塵器</a>
          </li>
          <li class="">
            <a href="#pro2385">空氣清淨機與風扇</a>
          </li>
          <li class="">
            <a href="#pro2386">頭髮護理</a>
          </li>
          <li class="">
            <a href="#pro2387">乾手器</a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>
</template>
