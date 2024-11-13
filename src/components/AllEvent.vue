<script setup>
//需要輪播的活動圖
const alls = [
  { image: '2024Thxgiving/images/C1.png' },
  { image: '2024Thxgiving/images/C2.png' },
  { image: '2024Thxgiving/images/C3.png' },
  { image: '2024Thxgiving/images/C4.png' },
  { image: '2024Thxgiving/images/C5.png' }
]

//點擊彈出視窗 活動辦法
const message = () => {
  //滿額6000抽
  let infoHtml = `
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

  Swal.fire({
    width: 900,
    title: "<p style='margin-bottom:5px';>活動辦法</p>",
    html: infoHtml,
    confirmButtonText: '關閉',
    position: 'center',
    showCloseButton: true,
    confirmButtonColor: '#000',
    returnFocus: false
  })
}
</script>

<template>
  <!-- 全站活動 -->
  <section class="all-box">
    <img
      class="w:85% w:90vw@<992 w:full@<576 h:auto abs top:5% top:2vw@<992 top:15vw@<576 left:0 left:2vw@<576 right:0 m:auto scale(1.8)@<576"
      :src="$filters.siteUrl('2024Thxgiving/images/C_BOX.png')"
    />

    <div
      class="w:80% w:85vw@<992 w:90vw@<576 top:48% top:46vw@<992 top:99vw@<576 left:0 right:0 m:auto pt:13% pt:12%@<992 pt:19%@<576"
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
        <swiper-slide v-for="all in alls">
          <img :src="$filters.siteUrl(all.image)" />
        </swiper-slide>
      </swiper>
      <a
        @click.prevent="message"
        target="_blank"
        class="rel w:18% w:16vw@<992 w:35vw@<576 h:auto block m:auto"
      >
        <img :src="$filters.siteUrl('202411vip/imagesT/eventBtn.png')"
      /></a>
    </div>
  </section>
</template>
