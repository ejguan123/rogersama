<script setup>
import CommonFloor from '../floor/CommonFloor.vue'

const menu = [7625, 7626, 7627, 7628, 7629, 7630, 7631, 7632]
const floorImg = [
  {
    image: 'cnair/images/s1.png',
    asideText: 'Iphone'
  },
  {
    image: 'cnair/images/s2.png',
    asideText: 'MacBook'
  },
  {
    image: 'cnair/images/s3.png',
    asideText: 'iPad'
  },
  {
    image: 'cnair/images/s4.png',
    asideText: 'iPad Air'
  },
  {
    image: 'cnair/images/s5.png',
    asideText: 'iPad Pro'
  },
  {
    image: 'cnair/images/s6.png',
    asideText: 'Apple watch SE'
  },
  {
    image: 'cnair/images/s7.png',
    asideText: 'Apple watch S10'
  },
  {
    image: 'cnair/images/s9.png',
    asideText: '耳機'
  }
]
</script>

<template>
  <div id="cnair-container">
    <div class="background">
      <span class="logo"><img :src="$filters.siteUrl('CNAIR/images/logo.png')" /></span>
      <h2 class="title">
        <img :src="$filters.siteUrl('CNAIR/images/title.png')" />
      </h2>
    </div>

    <section class="store-group">
      <p><img :src="$filters.siteUrl('CNAIR/images/store.png')" /></p>
      <div class="buttons">
        <a href="#info">
          <img :src="$filters.siteUrl('starlux/images/b1.png')" />
        </a>
        <a :href="$filters.addGALink('https://www.tk3c.com/other_store.aspx')" target="_blank">
          <img :src="$filters.siteUrl('starlux/images/b2.png')"
        /></a>
      </div>
    </section>

    <!-- 商品樓層 -->
    <CommonFloor :floors="floorImg" :menu="menu"></CommonFloor>

    <!-- 注意事項 -->
    <section class="info-group" id="info">
      <h2 class="title">員工福利委員會員購專案</h2>
      <div class="text">
        <p class="last">注意事項如下</p>
        <ol>
          <li>1.收單時間：即日起至<span class="red">2024/11/30 23:59</span>止</li>
          <li>2.交易須知：</li>
          <li><p>(1) 限【門市取貨門市付款】(預約門市取貨且選擇門市付款)，商品不得轉售。</p></li>
          <li><p>(2) 指定取貨/付款門市</p></li>
          <li><p>北市:內湖旗艦店、南京旗艦店</p></li>
          <li><p>桃竹苗:南崁店、桃園旗艦店、藝文店、大園店、桃園中山店、桃園力行店</p></li>
          <li>
            <p>
              (3)
              貨到門市後，燦坤3C會再行通知，請於期限內攜帶【員工識別證】至【預約取貨門市】，出示【門市交易預約單】後於實體門市現場進行選購與付款，逾期未完成取貨則預約單自動取消。
            </p>
          </li>
          <li><p>(4) 如非本人取貨、取貨未攜帶員工識別證等，燦坤3C得拒絕本交易。</p></li>
          <li>
            <p>
              (5)
              請務必填寫真實、正確資訊，若因姓名、電話、員工編號錯誤等不可歸責於燦坤3C之事由導致聯絡不上或無法出貨等情況，恕不負責，請多包涵。
            </p>
          </li>
          <li>
            <p class="last">
              (6)
              於本網頁所輸入的資料受個人資料保護法相關法規保護，基於作業需求，同意提供燦坤及協力廠商等於聯絡溝通使用。
            </p>
          </li>
          <li>
            3.請留意於本網頁成立的是【門市交易預約單】，是指於本網頁預約【至燦坤實體門市進行交易的優先資格】，商品依門市現貨為主，相關交易流程依實體門市規定為準，不屬於通訊交易，依法不享有七天猶豫期。
          </li>
          <li>4.活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。</li>
        </ol>
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
          <li class="main new"><a href="#info">活動辦法</a></li>
          <li v-for="(floor, f) in floorImg">
            <a :href="`#pro${menu[f]}`">{{ floor.asideText }}</a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>
</template>

<style lang="scss">
@charset "utf-8";

@import '../../assets/sass//module/base';

$dir: 'https://events.cdn-tkec.tw/events_net/events_net/CNAIR/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/CNAIR/images/';

body {
  background: #e870d7;
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.png';
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

.protitle {
  @include hide-text;
  height: auto;
  margin: 0 auto 1%;
}

.bg01 {
  padding: 2%;
  box-sizing: border-box;
  position: relative;
  background: none;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    background: #dc8fec;
    box-shadow: 0px 0px 3px 3px #ffffff8f;
    border-radius: 50px;
    box-sizing: border-box;
    z-index: -1;
  }
}

#cnair-container {
  .background {
    width: 100%;
    height: 100%;
    position: relative;
    padding-bottom: 34%;
    .title {
      width: 45%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 31%;
      animation: slide-down 1.5s ease-in;
      img {
        animation: wave-move 1.8s linear infinite alternate;
        animation-delay: 1s;
      }
    }

    .logo {
      width: 15%;
      height: auto;
      display: block;
      position: absolute;
      top: 25%;
      left: 0;
      right: 0;
      margin: 0 auto;
    }
    .mark {
      width: 20%;
      position: absolute;
      top: 45px;
      right: 5%;
      display: none;
    }
  }
}

.store-group {
  min-width: 40%;
  .buttons {
    @include flex-arrange;
    a {
      width: 47%;
      margin: 0 1px 2%;
    }
  }
}

.info-group {
  .title {
    margin: 0 auto;
    color: #fff;
    background: red;
    padding: 1%;
    font-size: 2em;
    font-weight: bold;
    font-weight: bold;
    box-sizing: border-box;
    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
  }
  .text {
    width: 90%;
    margin: 0 auto;
    padding: 2%;
    background: #fff;
    border-radius: 20px;
    box-sizing: border-box;
    text-align: left;
    font-size: 18px;
    ol {
      li {
        margin-bottom: 5px;
        word-break: break-all;
        .red {
          color: red;
          font-weight: bold;
        }
      }
      p {
        padding-left: 20px;
      }
      .other {
        padding-left: 30px;
      }
    }
    .last {
      margin-bottom: 20px;
    }
  }
}

@include media-query('mobile', '992px') {
  body {
    &:before {
      background-size: 120% auto;
      background-position:
        -10vw 4vw,
        top;
    }
  }

  #cnair-container {
    .background {
      padding-bottom: 53vw;
      .logo {
        width: 30vw;
        top: 12vw;
      }
      .title {
        width: 80vw;
        top: 16vw;
      }
    }
  }

  .bg01 {
    &:before {
      border-radius: 35px;
      box-sizing: border-box;
    }
  }

  .info-group {
    .title {
      width: 80%;
    }
    .text {
      width: 95%;
      font-size: 20px;
    }
  }
}

@include media-query('mobile', '576px') {
  .fix_btn {
    .dropdown-menu {
      display: none;
    }
  }
  #cnair-container {
    .background {
      padding-bottom: 70vw;
      .title {
        width: 95vw;
        top: 27vw;
      }
      .logo {
        width: 45vw;
        top: 21vw;
      }
    }
  }

  body {
    &:before {
      background-size: 180% auto;
      background-position:
        -52vw 10vw,
        top;
    }
  }

  .bg01 {
    &:before {
      box-shadow: 0px 0px 2px 2px #ffffff8f;
      border-radius: 10px;
      box-sizing: border-box;
    }
  }

  .info-group {
    .title {
      width: 90%;
      font-size: 1.5em;
    }
    .text {
      width: 100%;
      font-size: 16px;
      padding: 3%;
      box-sizing: border-box;
    }
  }
}
</style>
