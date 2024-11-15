<script setup>
import { Controller, EffectFlip, Parallax } from 'swiper/modules'
import { ref } from 'vue'
import listF from '../layout/listF.vue'
import listD from '../layout/listD.vue'
import ThankFloor from '../floor/ThankFloor.vue' //其他樓層
import mobile3 from '../layout/mobile3.vue' //手機版選單

const swiperRef1 = ref()
const swiperRef2 = ref()

/* 現折券swiper用 start */
const onSwiper = (swiper) => {
  swiperRef1.value = swiper
}

const onControlSwiper = (swiper) => {
  swiperRef2.value = swiper
}

const goSlide = (id) => {
  swiperRef2.value.slideTo(id)
  swiperRef1.value.slideTo(id)
}
/* 現折券swiper用 end */
</script>

<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menuSP: [7478, 7479], //封神榜陳列編號
      menuGreen: 7517, //環保商品陳列編號
      menuGo: 7518, //速速go陳列編號
      menuSale: [7613, 7614, 7615, 7616, 7603, 7604, 7605, 7606, 7607],
      gifts: [
        { image: '2024Thxgiving/images/C1.png' },
        { image: '2024Thxgiving/images/C2.png' },
        { image: '2024Thxgiving/images/C3.png' },
        { image: '2024Thxgiving/images/C4.png' },
        { image: '2024Thxgiving/images/C5.png' }
      ],
      specials: [
        { image: '2024Thxgiving/images/S1-1.png' },
        { image: '2024Thxgiving/images/S1-2.png' }
      ],
      sales: [
        { image: '2024Thxgiving/images/s100.png' },
        { image: '2024Thxgiving/images/s200.png' },
        { image: '2024Thxgiving/images/s300.png' },
        { image: '2024Thxgiving/images/s400.png' },
        { image: '2024Thxgiving/images/s399.png' },
        { image: '2024Thxgiving/images/s499.png' },
        { image: '2024Thxgiving/images/s599.png' },
        { image: '2024Thxgiving/images/s699.png' },
        { image: '2024Thxgiving/images/s999.png' }
      ],
      statusSale: 0, //現折券樓層用
      asides: [
        { text: '現折券', href: '#sale' },
        { text: '樂天信用卡', href: '#rakuten' },
        { text: '台新燦坤聯名卡', href: '#bank' },
        { text: '環保商品', href: '#green' },
        { text: 'AI筆電', href: '#pro7560' },
        { text: 'Apple', href: '#pro7529' },
        { text: 'Android', href: '#pro7563' },
        { text: '印表機', href: '#print' },
        { text: '平板/穿戴', href: '#pro7569' },
        { text: '桌機/螢幕', href: '#pro7533' },
        { text: '遊戲', href: '#pro7571' },
        { text: '電視', href: '#pro7537' },
        { text: '清淨除塵', href: '#pro7540' },
        { text: '空調', href: '#pro7543' },
        { text: '居家美容', href: '#pro7541' },
        { text: '冰箱/洗衣機', href: '#pro7539' },
        { text: '攝影/空拍機', href: '#pro7536' },
        { text: '廚房三機', href: '#pro7545' },
        { text: '電暖器', href: '#pro7611' },
        { text: '秋冬除濕', href: '#pro7544' },
        { text: '廚房家電', href: '#pro7553' },
        { text: '機車', href: '#pro7546' }
      ],
      gift2: [
        { image: '2024Thxgiving/images/gift1_2.png' },
        { image: '2024Thxgiving/images/gift2.png' },
        { image: '2024Thxgiving/images/gift3.png' },
        { image: '2024Thxgiving/images/gift4.png' },
        { image: '2024Thxgiving/images/gift5.png' },
        { image: '2024Thxgiving/images/gift6.png' },
        { image: '2024Thxgiving/images/gift7.png' },
        { image: '2024Thxgiving/images/gift8.png' }
      ],
      today: new Date(),
      statusSp: 0, //好物封神榜用
      isSale: true,
      isGift: true
    }
  },
  mounted() {
    const { specials, today, sales, menuGreen, menuGo } = this

    //標題動畫
    setTimeout(() => {
      document.querySelector('.background .title').classList.add('fadein')
    }, 1300)

    // 11/18 以後隱藏滿額禮區域
    if (today >= new Date('2024/11/19')) {
      this.isGift = false
    }

    //撈好物封神榜樓層商品
    this.getFloorData(this.menuSP)

    //撈取現折券樓層商品
    this.getFloorData(this.menuSale)

    //撈取環保樓層商品
    this.getFloorSingle(menuGreen)

    //撈取速速go樓層商品
    this.getFloorSingle(menuGo)
  },
  methods: {
    changeSp(id) {
      this.statusSp = id
    },
    changSale(id) {
      if (event) {
        setTimeout(() => {
          this.statusSale = id
        }, 30)
      }
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
  <div id="thank-container" v-cloak>
    <div class="background">
      <h2 class="title animate__animated animate__bounceInUp">
        <img :src="$filters.siteUrl('2024Thxgiving/images/title2.png')" />
      </h2>
      <p class="ribbon">
        <img :src="$filters.siteUrl('2024Thxgiving/images/ribbon.png')" />
      </p>

      <img
        class="w:60% w:68vw@<992 w:full@<576 scale(1.8)@<576 h:auto abs top:39% top:40vw@<992 top:98vw@<576 left:0 left:2vw@<576 right:0 m:auto"
        :src="$filters.siteUrl('2024Thxgiving/images/C_BOX.png')"
      />

      <div
        class="abs w:58% w:65vw@<992 w:90vw@<576 top:48% top:46vw@<992 top:99vw@<576 left:0 right:0 m:auto"
      >
        <swiper
          :loop="true"
          :autoplay="{
            delay: 1300,
            disableOnInteraction: false
          }"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 1
            },
            600: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 2.5
            }
          }"
        >
          <swiper-slide v-for="gift in gifts">
            <img :src="$filters.siteUrl(gift.image)" />
          </swiper-slide>
        </swiper>
        <a
          @click.prevent="message(1)"
          target="_blank"
          class="w:15% w:16vw@<992 w:35vw@<576 h:auto block m:auto"
        >
          <img :src="$filters.siteUrl('202411vip/imagesT/eventBtn.png')"
        /></a>
      </div>
    </div>

    <div id="confetti"></div>
    <p class="item">
      <img :src="$filters.siteUrl('2024Thxgiving/images/item.png')" />
    </p>

    <!-- 好物封神榜 -->
    <section class="special-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2024Thxgiving/images/S1.png')" />
      </h2>

      <div class="flex flex-wrap:wrap gap:10 jc:center mb:1% mb:3%@<576">
        <a
          v-for="(special, s) in specials"
          :class="[statusSp == s ? 'active' : '']"
          class="w:30% w:40vw@<992 w:45vw@<576 m:0|0 opacity(0.7) opacity(1).active"
          @click="changeSp(s)"
          ><img :src="$filters.siteUrl(special.image)"
        /></a>
      </div>

      <div v-for="(special, s) in specials" v-show="statusSp == s">
        <component
          v-if="products[menuSP[s]] != undefined"
          :is="listD"
          :pro="products[menuSP[s]].Data"
        ></component>
      </div>
    </section>

    <!-- 現折券 -->
    <section class="sale-box scroll" v-if="isSale" id="sale">
      <h2 class="title">
        <a
          :href="
            $filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=124026&aid=23890&strPreView=y')
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('2024Thxgiving/images/S2_2.png')" />
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
          :modules="[Controller]"
          :controller="{
            control: [saleContent]
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

      <div class="sale-area">
        <swiper
          id="saleContent"
          :loop="false"
          :allowTouchMove="false"
          :modules="[Controller]"
          @swiper="onControlSwiper"
        >
          <swiper-slide class="tab-content" v-for="(sale, s) in sales" :key="s">
            <component
              v-if="products[menuSale[s]] != undefined"
              :is="listF"
              :pro="products[menuSale[s]].Data"
              :isSwiper="1"
              :name="'sale'"
            ></component>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 滿額禮 -->
    <section v-if="isGift">
      <h2 class="title">
        <img :src="$filters.siteUrl('2024Thxgiving/images/gift_title.png')" />
      </h2>

      <div class="gifts">
        <swiper
          :loop="false"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 2.1,
              grid: {
                fill: 'row',
                rows: 2
              }
            },
            600: {
              slidesPerView: 3.3,
              grid: {
                fill: 'row',
                rows: 2
              }
            },
            992: {
              slidesPerView: 4,
              grid: {
                fill: 'row',
                rows: 2
              }
            }
          }"
        >
          <swiper-slide v-for="gift in gift2">
            <img :src="$filters.siteUrl(gift.image)" />
          </swiper-slide>
        </swiper>
        <div class="flex flex-wrap:wrap gap:10 jc:center mt:2% mt:4%@<576">
          <a
            class="w:15% m:0|5px w:25vw@<992 w:40vw@<576"
            href="https://www.tk3c.com/events/eventgift.aspx"
            target="_blank"
          >
            <img :src="$filters.siteUrl('202411vip/imagesT/vip/gift.png')" />
          </a>
          <a
            class="w:15% m:0|5px w:25vw@<992 w:40vw@<576"
            @click.prevent="message(2)"
            target="_blank"
          >
            <img :src="$filters.siteUrl('202411vip/imagesT/eventBtn.png')" />
          </a>
        </div>
      </div>
    </section>

    <!-- 樂天信用卡 -->
    <section class="rakuten-box scroll" id="rakuten">
      <h2 class="title">
        <a :href="$filters.addGALink('https://pse.is/6pn6vu')" target="_blank">
          <img :src="$filters.siteUrl('2024Thxgiving/images/raku_title.png')" />
        </a>
      </h2>

      <ul class="gap:10">
        <li class="w:60% w:62vw@<992 w:90vw@<576 mb:5%@<576">
          <img :src="$filters.siteUrl('2024Thxgiving/images/raku1.png')" />
          <a
            class="w:25% w:30vw@<992 w:40vw@<576 mt:2%"
            :href="
              $filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=124026&aid=23890&hid=124032')
            "
            target="_blank"
          >
            <img :src="$filters.siteUrl('2024Thxgiving/images/go.png')" />
          </a>
        </li>
        <li class="w:29.5% w:31vw@<992 w:90vw@<576 mb:5%@<576">
          <img :src="$filters.siteUrl('2024Thxgiving/images/raku2.png')" />
          <a
            class="w:48% w:30vw@<992 w:40vw@<576 mt:4%"
            :href="$filters.addGALink('https://pse.is/6pn6vu')"
            target="_blank"
          >
            <img :src="$filters.siteUrl('2024Thxgiving/images/go2.png')" />
          </a>
        </li>
      </ul>
    </section>

    <!-- 聯名卡 -->
    <section class="bank-group scroll" id="bank">
      <h2 class="title">
        <img :src="$filters.siteUrl('2024Thxgiving/images/S3.png')" />
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
            <img :src="$filters.siteUrl('2024Thxgiving/images/S3-1_PC_a.png')" />
          </a>
        </li>
        <li class="w:90% w:90vw@<992 w:full@<576">
          <swiper :loop="false" :space-between="10" :slidesPerView="2">
            <swiper-slide class="rel w:44% w:44vw@<992 w:94vw@<576">
              <img :src="$filters.siteUrl('2024Thxgiving/images/S3-2_b.png')" />
              <a
                class="w:32% w:30vw@<992 w:40vw@<576 mt:3% mt:6%@<576"
                :href="
                  $filters.addGALink(
                    'https://www.taishinbank.com.tw/eServiceA/CreditCardAP/apply/index.jsp?pc=27&sl=1701029779'
                  )
                "
                target="_blank"
              >
                <img :src="$filters.siteUrl('double11_2024/images/go_bank.png')" />
              </a>
            </swiper-slide>
            <swiper-slide class="rel w:44% w:44vw@<992 w:94vw@<576">
              <img :src="$filters.siteUrl('2024Thxgiving/images/S3-3_b.png')" />
              <a
                class="w:32% w:30vw@<992 w:40vw@<576 mt:3% mt:6%@<576"
                :href="
                  $filters.addGALink(
                    'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=monthlyOffer'
                  )
                "
                target="_blank"
              >
                <img :src="$filters.siteUrl('202411vip/imagesT/eventBtn.png')" />
              </a>
            </swiper-slide>
          </swiper>
        </li>
      </ul>
    </section>

    <!-- 環保商品 -->
    <section class="green-box scroll" id="green">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://events.tk3c.com/events_net/green_subsidy/index.html')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/green_title2.png')" />
        </a>
      </h2>

      <p class="w:85% w:80vw@<992 w:full@<576 m:auto p:2%|0|2% m:2%|0|0@<576">
        <img :src="$filters.siteUrl('double11_2024/images/part2/g1_3.png')" />
      </p>
      <img
        class="green-bg abs w:full left:0 right:0 m:auto top:13% top:16vw@<992 hidden@<576 z:-1"
        :src="$filters.siteUrl('double11_2024/images/green_bg.png')"
      />

      <div class="box">
        <component
          :is="listF"
          :pro="product2[menuGreen]"
          :isSwiper="1"
          :name="'green-pro'"
        ></component>
      </div>
    </section>

    <!-- 速速go -->
    <section class="go-group">
      <h2 class="title">
        <a
          :href="
            $filters.addGALink('https://events.tk3c.com/events_net/tk3c_fastdelivery/index.html')
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('double11_2024/images/go_title.png')" />
        </a>
      </h2>

      <div class="box">
        <component :is="listF" :pro="product2[menuGo]" :isSwiper="1" :name="'go-box'"></component>
      </div>
    </section>

    <!-- 其他樓層 -->
    <ThankFloor></ThankFloor>
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
          <li v-for="(aside, a) in asides">
            <a :href="aside.href">{{ aside.text }}</a>
          </li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>

  <mobile3></mobile3>
</template>

<style lang="scss">
@charset "utf-8";

@import '../../../src/assets/sass/module/base';
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2024Thxgiving/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/2024Thxgiving/images/';

/*  共用樣式調整 */
body {
  background: #86000a;
}

form#form1 {
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'bg.png';
    background: url($image) repeat-y center;
    background-size: 107% auto;
    background-position:
      0 45px,
      top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -2;
  }
}

.aside-container {
  zoom: 0.8;
}

.bg01 {
  background: #fca841;
  border-radius: 10px;
  box-sizing: border-box;
}

#thank-container {
  .background {
    $image: $dir + 'KV_PC.png';
    @include bg-responsive($image, 2000, 1657);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 83%;
    .title {
      width: 36%;
      position: absolute;
      left: 0;
      right: 0;
      top: 8%;
      margin: 0 auto;
      animation-duration: 1.6s;
      opacity: 0;
      &.fadein {
        opacity: 1;
        animation: bg-wave2 0.8s ease-in;
      }
    }
    .ribbon {
      width: 100%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 21%;
    }
  }
}

section {
  .swiper-wrapper {
    padding-bottom: 5px;
    box-sizing: border-box;
  }
}

.special-box {
  margin: -20% auto 5%;
  .title {
    width: 85%;
  }
}

.green-box {
  .bg01 {
    background: #d3ffcd;
    border-radius: 0;
  }
}

.go-group {
  .bg01 {
    background: #575757;
    border-radius: 0;
  }
}

.sale-box {
  .bg01 {
    background: #fe9694;
    border-radius: 0;
  }
}

.air-box {
  .bg01 {
    margin: 0 auto 2%;
  }
  .banner-brands {
    .banner1 {
      .swiper-pagination {
        bottom: 3% !important;
      }
    }
  }
}

.print-box {
  .swiper-wrapper {
    justify-content: center;
  }
}

.gifts {
  .swiper-wrapper {
    align-items: baseline;
  }
}

/*  電腦版其他尺寸 */

@include media-query('mobile', '1440px') {
  .aside-container {
    zoom: 0.5;
  }
}
@include media-query('mobile', '992px') {
  #thank-container {
    .background {
      background-size: 120% auto;
      background-position:
        -10vw 4vw,
        top;
      padding-bottom: 96vw;

      .title {
        width: 45vw;
        top: 9vw;
      }
    }
  }

  .print-box {
    .swiper-wrapper {
      justify-content: left;
    }
  }

  .special-box {
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

  #thank-container {
    .background {
      background-size: 180% auto;
      background-position:
        -40vw 21vw,
        top;
      padding-bottom: 190vw;
      .title {
        width: 85vw;
        top: 25vw;
      }
    }
  }

  .air-box {
    .bg01 {
      margin: 0 auto 4%;
    }
  }
}
</style>
