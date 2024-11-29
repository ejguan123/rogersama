<script setup>
import listF from '../layout/listF.vue'
import AllEvent from '@/components/AllEvent.vue'
</script>

<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      status: 0,
      menu: 7393,
      today: new Date()
    }
  },
  mounted() {
    const { menu } = this

    //撈取樓層商品(menus = 後台陳列編號 array)
    this.getFloorSingle(menu)
  },
  methods: {
    change(id) {
      this.status = id
    },
    message(id) {
      //活動辦法

      let infoHtml = ''
      switch (id) {
        case 1:
          //賞楓之旅
          infoHtml = `
              <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.於燦坤3C門市或燦坤線上購物網站購買皆可參加本活動，但本活動需具有「燦坤實體有效會員」身分，且以會員卡片背後所記載的燦坤會員卡號綁定燦坤APP，並以該「已綁定燦坤APP的燦坤實體有效會員卡」身分進行消費方符資格。如您是透過燦坤線上購物購買時，請確認您於購買(訂單成立)時已將您的「燦坤線上購物會員帳號」完成「燦坤實體有效會員」身分綁定，如購買(訂單成立)時未完成綁定，則無法參加。​</li>
             <li style='margin-bottom:10px;'>2.凡於活動期間(2024/08/30~10/31)，以會員資格消費購買全館商品(部分商品除外)，單張發票消費金額滿$5,000元(含)起，並於2024/11/15前出貨/配送完成，且後續未退貨退款者，憑發票即可獲得本活動抽獎資格(1張發票1次抽獎機會)，將抽出1名，贈送「韓國賞楓雙人遊機+酒抵用券一張(市價$80,000元)」。​</li>
             <li style='margin-bottom:10px;'>3.消費金額以實際發票開立金額認定，購買提貨券、APPLE、小米、點數卡系列商品金恕不累計。​</li>
             <li style='margin-bottom:10px;'>4.中獎名單，燦坤3C將於2024/11/22公布於FACEBOOK粉絲專頁「燦坤3C」，並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
              <li style='margin-bottom:10px;'>5.中獎者請於2024/11/30前回填中獎通知函：(1)攜帶身分證件、中獎發票至「原消費門市」，出示中獎簡訊並填寫中獎通知函完成；或(2)私訊「燦坤3C」粉絲專頁，提供姓名/電話/中獎簡訊畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整者或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%))。​</li>
              <li style='margin-bottom:10px;'>6.「韓國賞楓雙人遊機+酒抵用券一張(市價$80,000元)」領取方式：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 經核對符合活動條件者，燦坤3C會另行通知，燦坤3C會於2024/12/20前以掛號寄至中獎人中獎通知函載地址(限台灣本島地區且不可為郵政信箱)，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 商品內容，未含稅金(兩地機場稅、燃油附加費等)，由持券人開票時自付，獎項票券使用期限與預訂規則等，悉依券面記載事項及票券服務提供者網站規定為準，敬請中獎者妥善保管並於效期內使用，逾期作廢，遺失恕不受理補發。(請留意，若中獎人逾期未使用導致作廢，但因燦坤3C確實已有提供此一獎項，故依稅法相關規定仍會列入本年度之個人綜合所得稅申報)。​</li>
             <li style='margin-bottom:10px;'>7.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
               <li style='margin-bottom:10px;'>8.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
              <li style='margin-bottom:10px;'>9.涉及大宗採購且(或)有議價時，因已經過議價給予價格優惠，該筆交易(發票)將無法參與本活動。</li>
              <li style='margin-bottom:10px;'>10.活動未盡事宜以燦坤3C公告為主，燦坤3C保留活動最終解釋、修改、變更之權利。</li>
        </ul>
          `
          break

        case 2:
          //超級感謝抽
          infoHtml = `
               <ul style='text-align:left;'>
             <li style='margin-bottom:10px;'>1.於燦坤3C門市或燦坤線上購物網站購買皆可參加本活動，但本活動需具有「燦坤實體有效會員」身分，且以會員卡片背後所記載的燦坤會員卡號綁定燦坤APP，並以該「已綁定燦坤APP的燦坤實體有效會員卡」身分進行消費方符資格。如您是透過燦坤線上購物購買時，請確認您於購買(訂單成立)時已將您的「燦坤線上購物會員帳號」完成「燦坤實體有效會員」身分綁定，如購買(訂單成立)時未完成綁定，則無法參加。​</li>
             <li style='margin-bottom:10px;'>2.凡於活動期間(2024/10/15~10/31)，以會員資格消費購買全館商品(部分商品除外)，單張發票消費金額滿$50,000元(含)起，並於2024/11/15前出貨/配送完成，且後續未退貨退款者，憑發票即可獲得本活動抽獎資格(1張發票1次抽獎機會)，將抽出2名，贈送「Samsung Galaxy Watch Ultra(250296_98隨機出貨，市價$21,900元)」。​</li>
             <li style='margin-bottom:10px;'>3. 消費金額以實際發票開立金額認定，購買提貨券、APPLE、小米、點數卡系列商品金恕不累計。​</li>
             <li style='margin-bottom:10px;'>4.中獎名單，燦坤3C將於2024/11/22公布於FACEBOOK粉絲專頁「燦坤3C」，並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
              <li style='margin-bottom:10px;'>5.中獎者請於2024/11/30前回填中獎通知函：(1)攜帶身分證件、中獎發票至「原消費門市」，出示中獎簡訊並填寫中獎通知函完成；或(2)私訊「燦坤3C」粉絲專頁，提供姓名/電話/中獎簡訊畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整者或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%))。​</li>
              <li style='margin-bottom:10px;'>6.「Samsung Galaxy Watch Ultra (市價$21,900元)」領取方式：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>經核對符合活動條件者，燦坤3C會另行通知領取時間，請於指定領取時間內至指定門市領取，如中獎者有額外運送/安裝需求，另行計價，逾期領獎視為放棄。​</li>
             <li style='margin-bottom:10px;'>7.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
               <li style='margin-bottom:10px;'>8.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
              <li style='margin-bottom:10px;'>9.涉及大宗採購且(或)有議價時，因已經過議價給予價格優惠，該筆交易(發票)將無法參與本活動。</li>
              <li style='margin-bottom:10px;'>10.活動未盡事宜以燦坤3C公告為主，燦坤3C保留活動最終解釋、修改、變更之權利。</li>
        </ul>
            `
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
  <div id="dji-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <a
          :href="
            $filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=111126&aid=22584&hid=123904')
          "
          target="_blank"
        >
          <img :src="$filters.siteUrl('DjiNeo/images/air/title.png')" />
        </a>
      </h2>
    </div>

    <!-- 聯名卡 -->
    <section class="special-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('DjiNeo/images/air/S01.png')" />
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
            <img
              v-if="today >= new Date('2024/12/01')"
              class="pc"
              :src="$filters.siteUrl('double12_2024/images/1212/S3-1.png')"
            />
            <img v-else class="pc" :src="$filters.siteUrl('double12_2024/images/S1-1_PC.png')" />

            <img
              v-if="today >= new Date('2024/12/01')"
              class="mobile"
              :src="$filters.siteUrl('double12_2024/images/1212/S3-1_M.png')"
            />
            <img v-else class="mobile" :src="$filters.siteUrl('double12_2024/images/S1-1_M.png')" />
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
              <img
                v-if="today >= new Date('2024/12/01')"
                :src="$filters.siteUrl('double12_2024/images/bank7_3.png')"
              />
              <img v-else :src="$filters.siteUrl('double12_2024/images/S1-2.png')" />
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

    <!-- 全站活動 -->
    <AllEvent></AllEvent>

    <!-- 商品區 -->
    <section class="pro-box">
      <div class="flex flex-wrap:wrap">
        <a
          class="w:90% w:95vw@<992 mb:2% mb:4%@<992 w:100%@<576"
          :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=252616')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('DjiNeo/images/air/PD1.png')" />
        </a>
        <a
          class="w:90% w:95vw@<992 mb:2% mb:4%@<992 w:100%@<576"
          :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=252617')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('DjiNeo/images/air/PD2.png')" />
        </a>
        <a
          class="w:90% w:95vw@<992 mb:2% mb:4%@<992 w:100%@<576"
          :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=252618')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('DjiNeo/images/air/PD3.png')" />
        </a>
      </div>
    </section>

    <!-- 商品樓層 -->
    <section class="hot-group scroll" id="hot">
      <h2 class="title">
        <img :src="$filters.siteUrl('DjiNeo/images/S04.png')" />
      </h2>

      <div class="box">
        <component :is="listF" :pro="product2[menu]"></component>
      </div>
    </section>

    <!-- 旗艦館 -->
    <section class="store-group">
      <a
        class="w:90% w:full@<576"
        :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=111126')"
        target="_blank"
      >
        <img :src="$filters.siteUrl('DjiNeo/images/S05.png')" />
      </a>
    </section>
  </div>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="arrow"><i class="fas fa-chevron-left"></i></span>
    <div class="aside-wrap">
      <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li><a href="#hot">熱門激推商品</a></li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>
</template>
