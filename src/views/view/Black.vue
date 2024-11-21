<script setup>
import { ref } from 'vue'
import listF from '../layout/listF.vue'
import listD from '../layout/listD.vue'

const swiperRef = ref()

/* 現折券swiper用 start */
const onSwiper = (swiper) => {
  swiperRef.value = swiper
}

const goSlide = (id) => {
  swiperRef.value.slideTo(id)
}
/* 現折券swiper用 end */
</script>

<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menuSale: [7613, 7614, 7615, 7616, 7603, 7604, 7605, 7606, 7607],
      menuPro: [7625, 7626, 7627, 7628],
      menuSp: [7633, 7634],
      sales: [
        { image: '2024thxgiving/images/s100.png' },
        { image: '2024thxgiving/images/s200.png' },
        { image: '2024thxgiving/images/s300.png' },
        { image: '2024thxgiving/images/s400.png' },
        { image: '2024thxgiving/images/s399.png' },
        { image: '2024thxgiving/images/s499.png' },
        { image: '2024thxgiving/images/s599.png' },
        { image: '2024thxgiving/images/s699.png' },
        { image: '2024thxgiving/images/s999.png' }
      ],
      morePro: [
        { image: 'double12_2024/images/S03.png' },
        { image: 'double12_2024/images/S04.png' },
        { image: 'double12_2024/images/S05.png' },
        { image: 'double12_2024/images/S06.png' }
      ],
      spTabs: [
        { image: 'double12_2024/images/tab1.png' },
        { image: 'double12_2024/images/tab2.png' }
      ],
      asides: [
        { text: '現折券', href: '#sale' },
        { text: '全站優惠', href: '#all' },
        { text: '台新燦坤聯名卡', href: '#bank' }
      ],
      statusSale: 0, //現折券樓層用
      statusSp: 1,
      today: new Date()
    }
  },
  mounted() {
    this.getFloorData(this.menuSp)

    //撈取現折券樓層商品
    this.getFloorData(this.menuSale)
  },
  methods: {
    changSale(id) {
      if (event) {
        setTimeout(() => {
          this.statusSale = id
        }, 30)
      }
    },
    changeSp(id) {
      this.statusSp = id
    },
    message(id) {
      //活動辦法

      let infoHtml = ''

      switch (id) {
        case 1:
          //全站滿額6000抽
          infoHtml = `
              <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.於燦坤3C門市或燦坤線上購物網站購買皆可參加本活動，但本活動需具有「燦坤實體有效會員」身分，且以會員卡片背後所記載的燦坤會員卡號綁定燦坤APP，並以該「已綁定燦坤APP的燦坤實體有效會員卡」身分進行消費方符資格。如您是透過燦坤線上購物購買時，請確認您於購買(訂單成立)時已將您的「燦坤線上購物會員帳號」完成「燦坤實體有效會員」身分綁定，如購買(訂單成立)時未完成綁定，則無法參加。​</li>
             <li style='margin-bottom:10px;'>2.凡於活動期間(2024/11/13~11/30)，以會員資格消費購買全館商品(部分商品除外)，單張發票消費金額滿$6,000元(含)起，並於2024/12/15前出貨/配送完成，且後續未退貨退款者，憑發票即可獲得本活動抽獎資格(1張發票1次抽獎機會)，將抽出頭獎1名送「PlayStation5 Pro主機(市價$24,280元)」、二獎 1名送「dyson二合一吹風直髮器(市價$16,600元)」、三獎1名送「SAMSUNG Galaxy Watch7+Fit3+Buds FE(市價$15,660元)」、四獎2名送「王品商品券2張(市價$3,498元)」、五獎3名送「1000燦坤K幣(1燦坤K幣= NT$1元)」 。​</li>
               <li style='margin-bottom:10px;'>3.消費金額以實際發票開立金額認定，購買提貨券、APPLE、小米、點數卡系列商品之消費金額恕不累計。​</li>
                <li style='margin-bottom:10px;'>4.中獎名單，燦坤3C將於2024/12/25公布於FACEBOOK粉絲專頁「燦坤3C」，並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。</li>
                 <li style='margin-bottom:10px;'>5.中獎者請於2024/12/31前回填中獎通知函：(1)攜帶身分證件、中獎發票至「原消費門市」，出示中獎簡訊並填寫中獎通知函完成；或(2)私訊「燦坤3C」粉絲專頁，提供姓名/電話/中獎簡訊畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整者或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%))。</li>
                  <li style='margin-bottom:10px;'>6.經核對符合活動條件者:</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 實體獎品：燦坤3C會另行通知領取時間，請於指定領取時間內至指定門市領取，如中獎者有額外運送/安裝需求，另行計價，逾期領獎視為放棄。請留意票券兌換期限，相關兌換規則依票券服務提供者網站規定為準，若逾期未使用，但因燦坤3C確實已有提供此一獎品，故依稅法相關規定仍會列入本年度之個人綜合所得稅申報​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2) 燦坤K幣：燦坤3C會將燦坤K幣匯入您的會員帳戶中，使用期限預計為2025/1/10~2025/2/28，逾期自動失效，如遇系統維護等狀況，將延後匯入，實際以燦坤作業時間為準。1燦坤K幣可折抵消費金額NT$1元，使用限制及折抵規則，悉以燦坤3C實體門市會員條款及最新公告為準使用期限。​</li>
              <li style='margin-bottom:10px;'>7.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。</li>
               <li style='margin-bottom:10px;'>8.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：</li>
                 <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品/匯入燦坤K幣。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額/燦坤3C將會以系統自動扣回燦坤K幣，如您已使用燦坤K幣，就無法足額扣回的部分，您應返還等值金額(1燦坤K幣= NT$1元)。​</li>
                <li style='margin-bottom:10px;'>9.涉及大宗採購且(或)有議價時，因已經過議價給予價格優惠，該筆交易(發票)將無法參與本活動。</li>
              <li style='margin-bottom:10px;'>10.活動未盡事宜以燦坤3C公告為主，燦坤3C保留活動最終解釋、修改、變更之權利。</li>
        </ul>
          `
          break

        case 2:
          //會員滿額加碼
          infoHtml = `
              <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.本活動限僅限「燦坤實體有效會員」參加。​</li>
             <li style='margin-bottom:10px;'>2.活動期間(2024/11/13-11/18)於任一燦坤3C門市以會員資格消費滿指定門檻，燦坤加碼贈送好禮，好禮以活動POP為準。​</li>
               <li style='margin-bottom:10px;'>3.活動期間消費金額之計算，以實際發票開立金額為主，同日/同一門市/同一會員卡號方得累計(含門市取貨付款訂單)，每張發票限計算1次， APPLE、小米、dyson、提貨券商品之消費金額恕不累計。​</li>
                <li style='margin-bottom:10px;'>4.好禮(贈品)以門市展示實品為準，數量有限，送完為止。</li>
                 <li style='margin-bottom:10px;'>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，若發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)致未達滿額門檻者，，燦坤3C將以下列方式處理：</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會提供贈品。​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(2) 提供贈品後：您需將贈品退回，倘若已使用(拆封外盒視同使用)贈品，則需返回等同贈品價值金額。​</li>
              <li style='margin-bottom:10px;'>6.本活動不與其他優惠活動(包含指定商品最高回饋5%燦坤K幣、其他會員紅利券、銀行現折贈品券、聯名卡現折優惠券活動)併行，例如：凡有送其他燦坤3C會員紅利券或銀行現折贈品券的商品，該筆交易(發票)將無法參與本活動。</li>
               <li style='margin-bottom:10px;'>7.特價(含變價、競價)商品、限時限量商品、出清商品等優惠商品或涉及大宗採購且(或)有議價時，因燦坤已提供非常優惠之商品價格，該筆交易(發票)將無法參與本活動。</li>
                <li style='margin-bottom:10px;'>8.活動未盡事宜以燦坤3C公告為主，燦坤3C保留活動最終解釋、修改、變更之權利。</li>
        </ul>
          `
          break
      }

      Swal.fire({
        width: 1000,
        title: "<p style='margin-bottom:5px';>活動辦法</p>",
        html: infoHtml,
        showCloseButton: true,
        confirmButtonText: '關閉',
        position: 'center',
        confirmButtonColor: '#000',
        returnFocus: true,
        scrollbarPadding: false
      })
    }
  }
}
</script>

<template>
  <div id="black-container">
    <div class="background">
      <h2 class="title animate__animated animate__bounceIn">
        <img :src="$filters.siteUrl('double12_2024/images/title.png')" />
      </h2>
      <h5 class="subtitle" v-if="today < new Date('2024/12/01')">
        <a :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')" target="_blank">
          <img :src="$filters.siteUrl('double12_2024/images/subtitle2.png')" />
        </a>
      </h5>

      <p class="ribbon">
        <img :src="$filters.siteUrl('double12_2024/images/ribbon.png')" />
      </p>

      <p class="stage">
        <img :src="$filters.siteUrl('double12_2024/images/STAGE.png')" />
      </p>
    </div>

    <canvas id="canvas"></canvas>

    <!-- 黑五搶先購 -->
    <section>
       <h2 class="title">
          <img :src="$filters.siteUrl('double12_2024/images/S03_2.png')" />
       </h2>
      <ul class="tab gap:10 mb:1%">
        <li
          v-for="(sp, s) in spTabs"
          :class="[statusSp == s ? 'active' : '']"
          class="w:21% w:27vw@<992 w:37vw@<576 brightness(0.8) brightness(1).active"
        >
          <a @click="changeSp(s)">
            <img :src="$filters.siteUrl(sp.image)" />
          </a>
        </li>
      </ul>

      <div v-for="(sp, s) in spTabs" v-show="statusSp == s">
        <component
          v-if="products[menuSp[s]] != undefined"
          :is="listD"
          :pro="products[menuSp[s]].Data"
        ></component>
      </div>
    </section>

    <!-- 現折券 -->
    <section class="sale-box scroll" id="sale">
      <h2 class="title">
        <a
          :href="
            $filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=124026&aid=23890&strPreView=y')
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('double12_2024/images/S02.png')" />
        </a>
      </h2>

      <div class="tab mb:1%">
        <swiper
          :loop="false"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 2.4
            },
            600: {
              slidesPerView: 4.3
            },
            992: {
              slidesPerView: 6.3
            }
          }"
          @swiper="onSwiper"
        >
          <swiper-slide
            v-for="(sale, s) in sales"
            :key="s"
            :class="[statusSale == s ? 'active' : '']"
            class="hue-rotate(-560deg).active"
            @click="goSlide(s)"
          >
            <a @click="changSale(s)">
              <img :src="$filters.siteUrl(sale.image)" alt />
            </a>
          </swiper-slide>
        </swiper>
      </div>

      <div class="sale-content" v-for="(sale, s) in sales" v-show="statusSale == s">
        <component
          v-if="products[menuSale[s]] != undefined"
          :is="listF"
          :pro="products[menuSale[s]].Data"
          :isSwiper="1"
          :name="'sale'"
        ></component>
      </div>
    </section>

    <!-- 6000抽 -->
    <section class="scroll" id="all">
      <a @click.prevent="message(1)" class="w:90% w:90vw@<992 w:full@<576">
        <img :src="$filters.siteUrl('double12_2024/images/subtitle.png')" />
      </a>
    </section>

    <!-- 聯名卡 -->
    <section class="bank-group scroll" id="bank">
      <h2 class="title">
        <img :src="$filters.siteUrl('double12_2024/images/S01.png')" />
      </h2>

      <ul class="gap:10 mb:2%">
        <li class="w:90% w:90vw@<992 w:full@<576">
          <a
            :href="
              $filters.addGALink(
                'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main'
              )
            "
            target="_blank"
          >
            <img class="pc" :src="$filters.siteUrl('double12_2024/images/S1-1_PC.png')" />
            <img class="mobile" :src="$filters.siteUrl('double12_2024/images/S1-1_M.png')" />
          </a>
        </li>
        <li class="w:90% w:89vw@<992 w:93vw@<576">
          <swiper
            :loop="false"
            :space-between="10"
            :autoplay="{
              delay: 1600,
              disableOnInteraction: false
            }"
            :observer="true"
            :breakpoints="{
              0: {
                slidesPerView: 1.1
              },
              600: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 2
              }
            }"
          >
            <swiper-slide class="rel w:44% w:44vw@<992 w:94vw@<576">
              <img :src="$filters.siteUrl('double12_2024/images/S1-2.png')" />
              <a
                class="w:32% w:30vw@<992 w:40vw@<576 mt:3% mt:6%@<576"
                :href="
                  $filters.addGALink(
                    'https://www.taishinbank.com.tw/eServiceA/CreditCardAP/apply/index.jsp?pc=27&sl=1701029779'
                  )
                "
                target="_blank"
              >
                <img :src="$filters.siteUrl('double12_2024/images/login.png')" />
              </a>
            </swiper-slide>
            <swiper-slide class="rel w:44% w:44vw@<992 w:94vw@<576">
              <img :src="$filters.siteUrl('double12_2024/images/S1-3.png')" />
              <a
                class="w:32% w:30vw@<992 w:40vw@<576 mt:3% mt:6%@<576"
                :href="
                  $filters.addGALink(
                    'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=monthlyOffer'
                  )
                "
                target="_blank"
              >
                <img :src="$filters.siteUrl('double12_2024/images/info.png')" />
              </a>
            </swiper-slide>
          </swiper>
        </li>
      </ul>
    </section>
  </div>

  <!-- 左側選單 -->
  <aside class="aside-container left">
    <span class="collaspe"><i class="fas fa-chevron-left"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul></ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="arrow"><i class="fas fa-chevron-left"></i></span>
    <div class="aside-wrap">
      <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li v-for="aside in asides">
            <a  :href="aside.href">
              {{ aside.text }}
            </a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>
</template>

<style lang="scss">
@charset "utf-8";

@import '../../../src/assets/sass/module/base';
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/double12_2024/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/double12_2024/images/';

/*  共用樣式調整 */
body {
  background: #000;
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
    position: fixed;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -1;
  }
}

.bg01 {
  background: none;
}

#black-container {
  .background {
    width: 100%;
    height: 0;
    position: relative;
    margin: 0 auto 0;
    padding-bottom: 55%;
    .title {
      width: 35%;
      position: absolute;
      left: 0;
      right: 0;
      top: 14%;
      margin: 0 auto;
      animation-duration: 1.4s;
      &:before {
        content: '';
        display: block;
        position: absolute;
        width: 60%;
        height: 100%;
        background: url(https://events.cdn-tkec.tw/events_net/events_net/rock202206/images/2304/light_line.png)
          no-repeat;
        background-size: 100% auto;
        animation: righttoleft 3s infinite;
        left: -5%;
        top: 20%;
        mix-blend-mode: lighten;
      }
      &:after {
        content: '';
        display: block;
        position: absolute;
        width: 60%;
        height: 100%;
        background: url(https://events.cdn-tkec.tw/events_net/events_net/rock202206/images/2304/light_line.png)
          no-repeat;
        background-size: 100% auto;
        animation: righttoright 3s infinite;
        right: -5%;
        top: 45%;
        mix-blend-mode: lighten;
      }
    }

    .ribbon {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 45px;
    }
    .subtitle {
      width: 50%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 59%;
      z-index: 2;
    }
    .stage {
      width: 55%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 43%;
      z-index: -1;
    }
  }
}

section {
  .swiper-wrapper {
    padding-bottom: 5px;
    box-sizing: border-box;
  }
  .title {
    width: 80%;
  }
}

/*  電腦版其他尺寸 */

@include media-query('mobile', '1440px') {
  .aside-container {
    zoom: 0.5;
  }
}
@include media-query('mobile', '992px') {
  #black-container {
    .background {
      padding-bottom: 82vw;

      .title {
        width: 50vw;
        top: 11vw;
      }
      .subtitle {
        width: 85vw;
        top: 45vw;
      }
      .stage {
        width: 60vw;
        top: 34vw;
      }
    }
  }

  body {
    &:before {
      background-size: 130%;
      background-position:
        -15vw 4vw,
        top;
    }
  }

  section {
    .title {
      width: 100%;
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

  #black-container {
    .background {
      padding-bottom: 130vw;
      .title {
        width: 80vw;
        top: 27vw;
      }
      .subtitle {
        width: 100%;
        top: 82vw;
      }
      .stage {
        width: 90vw;
        top: 65vw;
      }
      .ribbon {
        z-index: -1;
      }
    }
  }

  body {
    &:before {
      background-size: 180%;
      background-position:
        -40vw 10vw,
        top;
    }
  }

  section {
    .title {
      width: 140%;
      margin: 0 -20% 3%;
    }
  }
}
</style>
