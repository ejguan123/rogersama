<script setup>
import { useHead, useScript } from 'unhead'
import { Swiper, SwiperSlide } from 'swiper/vue'
import listF from '../layout/listF.vue'
import { ref } from 'vue'

const swiperRef = ref()
const onSwiper = (swiper) => {
  swiperRef.value = swiper
}

const goSlide = (id) => {
  swiperRef.value.slideTo(id)
}

//META DESCRIPTION
useHead({
  title: '3C家電秋季購物節 | 燦坤線上購物',
  meta: [
    {
      name: 'description',
      content:
        '3C家電秋季購物節，筆電、電視、冰箱、洗衣機、空調、生活家電、廚房家電、螢幕等商品通通有！門市下單最高回饋8%K幣，線上購物領券限折最高1000，再刷台新燦坤聯名卡最高折1100，優惠不容錯過！'
    },
    {
      property: 'og:title',
      content: '3C家電秋季購物節 | 燦坤線上購物'
    },
    {
      property: 'og:description',
      content:
        '3C家電秋季購物節，筆電、電視、冰箱、洗衣機、空調、生活家電、廚房家電、螢幕等商品通通有！門市下單最高回饋8%K幣，線上購物領券限折最高1000，再刷台新燦坤聯名卡最高折1100，優惠不容錯過！'
    },
    {
      property: 'og:image',
      content: 'https://www.tk3c.com/images/headimg.jpg'
    },
    {
      property: 'og:url',
      content: 'https://events.tk3c.com/events_net/AutumnShopping/index.html'
    }
  ],
  link: [
    {
      rel: 'image_src',
      href: 'https://www.tk3c.com/images/headimg.jpg'
    }
  ]
})
</script>

<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      sales: [
        { url: '', image: 'AutumnShopping/images/s1000.png', menu: 7377 },
        { url: '', image: 'AutumnShopping/images/s700.png', menu: 7378 },
        { url: '', image: 'AutumnShopping/images/s600.png', menu: 7379 },
        { url: '', image: 'AutumnShopping/images/s500.png', menu: 7380 },
        { url: '', image: 'AutumnShopping/images/s499.png', menu: 7381 },
        { url: '', image: 'AutumnShopping/images/s200.png', menu: 7382 },
        { url: '', image: 'AutumnShopping/images/s100.png', menu: 7383 }
      ],
      icons: [
        {
          url: 'https://events.tk3c.com/events_net/24_99shopping/index.html',
          image: 'AutumnShopping/images/icon1.png'
        },
        { url: '#pro7342', image: 'AutumnShopping/images/icon2.png' },
        { url: '#pro7347', image: 'AutumnShopping/images/icon3.png' },
        {
          url: 'https://events.tk3c.com/events_net/printer2024/index.html',
          image: 'AutumnShopping/images/icon4.png'
        },
        { url: '#pro4341', image: 'AutumnShopping/images/icon5.png' },
        { url: '#pro7345', image: 'AutumnShopping/images/icon6.png' },
        { url: '#pro7344', image: 'AutumnShopping/images/icon7.png' },
        { url: '#pro7348', image: 'AutumnShopping/images/icon8.png' },
        { url: '#pro7339', image: 'AutumnShopping/images/icon9.png' },
        { url: '#pro7340', image: 'AutumnShopping/images/icon10.png' }
      ],
      pros: [
        { url: '', image: 'AutumnShopping/images/PD01.png' },
        { url: '', image: 'AutumnShopping/images/PD02.png' },
        { url: '', image: 'AutumnShopping/images/PD03.png' },
        { url: '', image: 'AutumnShopping/images/PD04.png' }
      ],
      status: 0,
      statusSale: 0,
      today: new Date(),
      pro: [],
      sale: null,
      menuBank: 7337
    }
  },
  mounted() {
    const { menuBank } = this

    document.querySelectorAll('.wrapper')[1].innerHTML = ''

    //撈取現折樓層商品
    this.getFloorSingle(this.sales[0].menu)

    //撈取聯名卡樓層
    this.getFloorSingle(menuBank)
  },
  methods: {
    change(id) {
      this.status = id
    },
    changeSale(id, menu) {
      if (event) {
        this.showAndHide(Number(id), '.sale-box')
        this.getFloorSingle(menu)
      }
    },
    go(element) {
      if (element.indexOf('#') < 0) {
        window.open(element)
        return false
      }

      //前往錨點
      let el = document.querySelector(element),
        rect = el.getBoundingClientRect(),
        move = rect.top + window.scrollY

      window.scrollTo({
        top: move - 150,
        behavior: 'smooth'
      })
    },
    message(type) {
      let infoHtml = ''

      switch (type) {
        case 1:
          // 登記即可抽 iPad Air活動辦法
          infoHtml = `
             <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.活動期間 (2024/8/26 -2024/9/12) ，於燦坤線上購物網站購買全館任一商品 ，並於線上完成付款且後續未退貨退款者，並於2024/9/16(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，將抽出1名送「iPad Air 11吋 Wi-Fi 128GB (1名) (不挑色)。​</li>
             <li style='margin-bottom:10px;'>2.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>3.得獎名單將於2024/10/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a href="https://www.facebook.com/TDdd331" style="color:blue;text-decoration:underline;">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li style='margin-bottom:10px;'>4.得獎者請於2024/10/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依小編提供之繳交期限與規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
              <li style='margin-bottom:10px;'>5.經核對無誤後，燦坤3C將於2024/11/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
              <li style='margin-bottom:10px;'>6.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。 ​</li>
               <li style='margin-bottom:10px;'>7.會員須遵守燦坤線上購物服務條款、使用規範及其他交易有關之規定，若活動期間內，若會員帳號因違反燦坤線上購物相關規則或因司法案件等原因遭到鎖定或納入黑名單，或系統偵測與判斷您有使用任何外掛程式或非正常方式進行登記，將會無法參與活動或無法獲得活動獎勵。若後續有爭議者，燦坤3C將以下列方式處理 :​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:10px;'>8.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
          `
          break

        case 2:
          // 綁卡會員下單加碼抽1000燦坤K弊 *10名
          infoHtml = `
             <ul style='text-align:left;'>
             <li style='margin-bottom:10px;color:red;font-weight:bold;'>1.請留意：本活動需具有「燦坤實體有效會員」身分。請確認您於購買(訂單成立)時已將您的「燦坤線上購物會員帳號」完成「燦坤實體有效會員」身分綁定，如購買(訂單成立)時未完成綁定，則無法參加。​</li>
             <li style='margin-bottom:10px;'>2.活動期間(2024/9/1-9/9)，於燦坤線上購物網站購買全館任一商品 ，並於線上完成付款且後續未退貨退款者，並於2024/9/13(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽10名送1,000燦坤K弊 。​</li>
             <li style='margin-bottom:10px;'>3.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>4.得獎名單將於2024/10/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a href=">https://www.facebook.com/TDdd331" style="color:blue;text-decoration:underline;">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
              <li style='margin-bottom:10px;'>5.得獎者請於2024/10/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
              <li style='margin-bottom:10px;'>6.經核對符合活動條件者，燦坤3C會將燦坤K幣匯入您的會員帳戶中，使用期限預計為2024/12/3-2025/1/1，如遇系統維護等狀況，將延後匯入，實際以燦坤作業時間為準，逾期失效。如您的會員卡屬於臨時卡身分(會員卡正在申請核卡中)，請盡速完成開卡，避免影響您燦坤K幣匯入的權益。燦坤K幣需下載並綁定燦坤APP「名稱：TK3C」方可天天使用。1燦坤K幣可折抵消費金額NT$1元，使用限制及折抵規則，悉以燦坤3C實體門市會員條款及最新公告為準。​</li>
               <li style='margin-bottom:10px;'>7.會員須遵守燦坤線上購物服務條款、使用規範及其他交易有關之規定，若活動期間內，若會員帳號因違反燦坤線上購物相關規則或因司法案件等原因遭到鎖定或納入黑名單，或系統偵測與判斷您有使用任何外掛程式或非正常方式，將會無法參與活動或無法獲得活動獎勵。若後續有爭議者，燦坤3C 將以下列方式處理:​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供燦坤K幣前：燦坤3C將不會匯入燦坤K幣。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供燦坤K幣後：燦坤3C將會以系統自動扣回燦坤K幣，如您已使用燦坤K幣，就無法足額扣回的部分，您應返還等值金額(1燦坤K幣= NT$1元)。​</li>
             <li style='margin-bottom:10px;'>8.活動未盡事宜以燦坤線上購物官網公告為主，燦坤線上購物保留活動最終解釋、修改、變更之權利。​</li>
        </ul>
          `
          break

        case 3:
          // 9/10-9/12 滿千送百元下單禮
          infoHtml = `
             <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.活動期間(2024/9/10~2024/9/12)內，於燦坤線上購物網站購買全館任一商品，單筆發票消費金額滿1,000元，並於線上完成付款且後續未退貨退款者，並於2024/9/16(含)前至指定活動頁面完成登記申請，送 「E-books X82 Type-C鋁合金快充線1M- (不挑色)(市價$179)」 ，限量100名。(單筆訂單限登記一次，每一會員帳號以一次登記為限)。​</li>
             <li style='margin-bottom:10px;'>2.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>3.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>4.經核對無誤後，燦坤3C將於2024/11/25起陸續寄出獎項至會員資料地址(限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
              <li style='margin-bottom:10px;'>5.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
              <li style='margin-bottom:10px;'>6.會員須遵守燦坤線上購物服務條款、使用規範及其他交易有關之規定，若活動期間內，若會員帳號因違反燦坤線上購物相關規則或因司法案件等原因遭到鎖定或納入黑名單，或系統偵測與判斷您有使用任何外掛程式或非正常方式進行登記，將會無法參與活動或無法獲得活動獎勵。若後續有爭議者，燦坤3C將以下列方式處理:​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:10px;'>7.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
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
    },
    message2() {
      Swal.fire({
        width: 1000,
        title: "<p style='margin-bottom:5px';>活動辦法</p>",
        html: ` <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.活動期間(2024/9/1-9/30)內，於燦坤線上購物網站購買全館任一商品，單筆發票消費金額滿指定金額，並於線上完成付款且後續未退貨退款者，並於2024/10/4(含)前至指定活動頁面完成登記申請，送以下指定好禮(單筆訂單限登記一次與一項贈品，不累贈，如於指定登記頁面登記兩項獎品，將以低價者送出)： ​</li>
              <li style='margin-bottom:10px;padding-left:10px;'>(1) 滿$8,000 登記送「輝葉良品 MARVEL露營收納箱-美國隊長 HY-C32-W」 (貨號240956，)限量20名。 ​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 滿$25,000 登記送「myFirst Camera 3 雙鏡頭兒童相機」 (貨號227725)限量15名。 ​</li>
             <li style='margin-bottom:10px;'>2.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>3.經核對無誤後，燦坤3C將於2024/11/25起陸續寄出獎項至會員資料地址(限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
              <li style='margin-bottom:10px;'>5.會員須遵守燦坤線上購物服務條款、使用規範及其他交易有關之規定，若活動期間內，若會員帳號因違反燦坤線上購物相關規則或因司法案件等原因遭到鎖定或納入黑名單，或系統偵測與判斷您有使用任何外掛程式或非正常方式進行登記，將會無法參與活動或無法獲得活動獎勵。若後續有爭議者，燦坤3C將以下列方式處理 :​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:10px;'>7.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。 ​</li>
        </ul>`,
        showCloseButton: true,
        confirmButtonText: '我要登記',
        position: 'center',
        confirmButtonColor: '#f00',
        returnFocus: true,
        scrollbarPadding: false
      }).then(() => {
        window.open('https://page.line.me/tid7686u?ec=AutumnShopping')
      })
    }
  }
}
</script>

<style>
[v-cloak] {
  display: none;
}
</style>

<template>
  <div id="computer-container" v-cloak>
    <div class="background">
      <h2 class="title animate__animated animate__backInLeft">
        <img :src="$filters.siteUrl('AutumnShopping/images/title.png')" />
      </h2>

      <div class="product">
        <div class="box">
          <swiper-container
            :loop="false"
            :parallax="true"
            :autoplay="{
              delay: 1600,
              disableOnInteraction: false
            }"
          >
            <swiper-slide v-for="p in pros">
              <a
                data-swiper-parallax="800"
                class="cursor:auto;pointer-events:all"
                :href="$filters.addGALink(p.url)"
                target="_blank"
              >
                <img :src="$filters.siteUrl(p.image)" />
              </a>
            </swiper-slide>
          </swiper-container>
        </div>
      </div>
    </div>

    <p class="item"><img :src="$filters.siteUrl('AutumnShopping/images/item.png')" /></p>
    <canvas id="canvas"></canvas>

    <!-- 現折券 -->
    <section class="sale-box">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123738')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('AutumnShopping/images/S02.png')" />
        </a>
      </h2>

      <ul class="tab">
        <swiper
          @swiper="onSwiper"
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
              slidesPerView: 7
            }
          }"
        >
          <swiper-slide
            v-for="(sale, s) in sales"
            :class="[statusSale == s ? 'active' : '']"
            @click="goSlide(s)"
          >
            <a @click="changeSale(s, sale.menu)">
              <img :src="$filters.siteUrl(sale.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </ul>

      <div class="tab-content" v-for="(sale, s) in sales" v-show="statusSale == s">
        <component
          :is="listF"
          :pro="product2[sale.menu]"
          :isSwiper="1"
          :name="'.sale-box'"
        ></component>
      </div>
    </section>

    <!--  全站優惠 -->
    <section class="gift-box scroll" id="gift">
      <h2 class="title animate__animated animate__backInUp">
        <img :src="$filters.siteUrl('AutumnShopping/images/S01.png')" />
      </h2>

      <ul class="tab gap:10 gap:5@<576 mb:1% mb:2%@<576">
        <li class="w:29% w:40vw@<992 w:51vw@<576" :class="[status == 0 ? 'active' : '']">
          <a @click="change(0)"
            ><img :src="$filters.siteUrl('AutumnShopping/images/S01-1.png')"
          /></a>
        </li>
        <li class="w:23% w:31vw@<992 w:40vw@<576" :class="[status == 1 ? 'active' : '']">
          <a @click="change(1)"
            ><img :src="$filters.siteUrl('AutumnShopping/images/S01-2.png')"
          /></a>
        </li>
      </ul>

      <!-- 線上獨家活動 -->
      <div class="tab-content t1" v-show="status == 0">
        <div class="w:full m:auto">
          <a
            @click.prevent="message2"
            class="w:90% w:90vw@<992 w:95vw@<576 mb:2% mb:5%@<992"
            target="_blank"
          >
            <img class="pc" :src="$filters.siteUrl('AutumnShopping/images/gift1.png')" />
            <img class="mobile" :src="$filters.siteUrl('AutumnShopping/images/gift1_M.png')" />
          </a>

          <h3 class="w:65% w:80vw@<992 w:95vw@<576 m:0|auto|1%">
            <img :src="$filters.siteUrl('AutumnShopping/images/bank_title2.png')" />
          </h3>

          <ul class="mb:3% gap:10">
            <li class="w:90% w:90vw@<992 w:95vw@<576">
              <a
                :href="
                  $filters.addGALink(
                    'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main'
                  )
                "
                target="_blank"
              >
                <img class="pc" :src="$filters.siteUrl('AutumnShopping/images/bank1.png')" />
                <img class="mobile" :src="$filters.siteUrl('AutumnShopping/images/bank1_M.png')" />
              </a>
            </li>
            <li class="w:45% w:90vw@<992 w:95vw@<576 mb:1%@<992">
              <a
                :href="
                  $filters.addGALink(
                    'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main'
                  )
                "
              >
                <img :src="$filters.siteUrl('AutumnShopping/images/bank2.png')" />
              </a>
            </li>
            <li class="w:45% w:90vw@<992 w:95vw@<576">
              <a :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123139')">
                <img :src="$filters.siteUrl('AutumnShopping/images/bank3.png')" />
              </a>
            </li>
          </ul>

          <a
            class="w:90% w:90vw@<992 w:95vw@<576"
            :href="$filters.addGALink('https://page.line.me/tid7686u')"
            target="_blank"
          >
            <img class="pc" :src="$filters.siteUrl('AutumnShopping/images/line.png')" />
            <img class="mobile" :src="$filters.siteUrl('AutumnShopping/images/line_M.png')" />
          </a>
        </div>
      </div>

      <!-- 線上會員綁定 -->
      <div class="tab-content t2" v-show="status == 1">
        <ul class="gap:10">
          <li class="w:90% w:90vw@<992 w:95vw@<576">
            <a
              :href="$filters.addGALink('https://events.tk3c.com/events_net/45536BTS/index.html')"
              target="_blank"
            >
              <img :src="$filters.siteUrl('AutumnShopping/images/SP01.png')" />
            </a>
          </li>
          <li class="w:44% w:45vw@<992 w:95vw@<576">
            <a href="https://events.tk3c.com/events_net/45536BTS/index.html#pro07" target="_blank">
              <img :src="$filters.siteUrl('AutumnShopping/images/SP02.png')" />
            </a>
          </li>
          <li class="w:44% w:45vw@<992 w:95vw@<576">
            <a href="https://events.tk3c.com/events_net/45536BTS/index.html#pro07">
              <img :src="$filters.siteUrl('AutumnShopping/images/SP03.png')" />
            </a>
          </li>
        </ul>
      </div>
    </section>

    <!-- 空調vvip -->
    <section class="air-group">
      <a
        id="vvip"
        class="air-info"
        :href="
          $filters.addGALink('https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2')
        "
        target="_blank"
      >
        <img class="pc" :src="$filters.siteUrl('airConditionerLAB/images/2405/vvip.png')" />
        <img
          class="mobile"
          :src="$filters.siteUrl('airConditionerLAB/images/2402/vvip_br_m.png')"
        />
      </a>
    </section>

    <!-- 樓層icon -->
    <section class="icon-group">
      <div class="icon">
        <swiper
          :loop="false"
          :autoplay="{
            delay: 1400,
            disableOnInteraction: false
          }"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 3,
              grid: {
                fill: 'row',
                rows: 2
              }
            },
            600: {
              slidesPerView: 4,
              grid: {
                fill: 'row',
                rows: 2
              }
            },
            992: {
              slidesPerView: 5.1,
              grid: {
                fill: 'row',
                rows: 2
              }
            }
          }"
          :pagination="{
            el: '.icon-group .swiper-pagination'
          }"
        >
          <swiper-slide v-for="(icon, i) in icons">
            <a @click="go(icon.url)">
              <img :src="$filters.siteUrl(icon.image)" />
            </a>
          </swiper-slide>
          <div class="swiper-pagination"></div>
        </swiper>
      </div>
    </section>

    <!-- 聯名卡 -->
    <section class="card-group" id="card">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123139')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('AutumnShopping/images/S03.png')" />
        </a>
      </h2>

      <div class="card">
        <component
          :is="listF"
          :pro="product2[menuBank]"
          :isSwiper="1"
          :name="'.card-group'"
        ></component>
      </div>

      <a
        class="banner"
        :href="
          $filters.addGALink(
            'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main'
          )
        "
        target="_blank"
      >
        <img class="pc" :src="$filters.siteUrl('24618go/images/tk3c_card3.jpg')" />
        <img class="mobile" :src="$filters.siteUrl('24618go/images/tk3c_card3M.jpg')" />
      </a>
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
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li class="main"><a href="#gift">全站優惠報你知</a></li>
          <li><a href="#pro7338">環保集點</a></li>
          <li><a href="#pro7339">廚房小家電</a></li>
          <li><a href="#pro7340">空調</a></li>
          <li><a href="#pro4341">手機/平板</a></li>
          <li><a href="#pro7342">筆電/桌機</a></li>
          <li><a href="#pro7350">電腦週邊</a></li>
          <li><a href="#pro7343">清掃家電</a></li>
          <li><a href="#pro7344">冰箱 </a></li>
          <li><a href="#pro7345">風扇</a></li>
          <li><a href="#pro7346">洗衣機</a></li>
          <li><a href="#pro7347">遊戲 </a></li>
          <li><a href="#pro7348">電視/影音</a></li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>
</template>
