<script setup>
  import { useHead,useScript } from "unhead";
  import listF from "../layout/listF";

//META DESCRIPTION 
useHead({
  title: "DJI NEO | 燦坤線上購物",
  meta: [
    {
      name: 'description',
      content: 'DJI NEO',
    }
    ,{
      property:'og:title',
      content:'DJI NEO | 燦坤線上購物'
    },
    {
      property:'og:description',
      content:'DJI NEO'
    },
    {
      property:'og:image',
      content:'https://www.tk3c.com/images/headimg.jpg'
    },
    {
      property:'og:url',
      content:'https://events.tk3c.com/events_net/DjiNeo/index.html'
    }
  ],
  link:[
      {
        rel: 'image_src',
        href: 'https://www.tk3c.com/images/headimg.jpg'
      },
    {
      rel: 'stylesheet',
      href: 'https://events.tk3c.com/events_net/events_net/DjiNeo/css/dji.css'
    },
    ]
});
</script>

<script> 
import { globalMixin } from "../../../globalMixin.js";

   export default {
    mixins: [globalMixin],
    data() {
      return {
        status:0,
        isVod:false,
        menu:7393
      }
    },
    mounted() {
      const {menu} = this;
       document.querySelectorAll('.wrapper')[1].innerHTML = "";

      //撈取樓層商品(menus = 後台陳列編號 array)
       this.getFloorSingle(menu);
    },
  methods: {
    change(id) {
     this.status = id;
    },
    message(id) {
      //活動辦法
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
        confirmButtonText: '關閉',
        position: 'center',
        confirmButtonColor: '#000',
        returnFocus: true,
        scrollbarPadding: false
      });
    }
  }
   }
</script>


<template>
  <div id="dji-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <a :href="$filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=111126&aid=22127&hid=123767&strPreView=y')"
          target="_blank">
          <img :src="$filters.siteUrl('DjiNeo/images/title.png')">
        </a>
      </h2>
    </div>

    <!-- 新品上市 -->
    <section class="special-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('DjiNeo/images/S01.png')">
      </h2>

      <a :href="$filters.addGALink('https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=main')"
        target="_blank">
        <img class="pc" :src="$filters.siteUrl('DjiNeo/images/C01.png')">
        <img class="mobile" :src="$filters.siteUrl('DjiNeo/images/C01_M.png')">
      </a>
    </section>

    <!-- 全站活動 -->
    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('DjiNeo/images/S02.png')">
      </h2>

      <ul class="tab mb:2% gap:20 gap:10@<576">
        <li class="w:auto bg:#fff r:20px" :class="[status == 0 ? 'active' : '']">
          <a @click="change(0)">線上獨家</a>
        </li>
        <li class="w:auto bg:#fff r:20px" :class="[status == 1 ? 'active' : '']">
          <a @click="change(1)">會員限定</a>
        </li>
      </ul>

      <div class="tab-content t1" v-if="status == 0">
        <a @click="message" class="mb:2% mb:4%@<576">
          <img class="pc" :src="$filters.siteUrl('DjiNeo/images/gift1.png')">
          <img class="mobile" :src="$filters.siteUrl('DjiNeo/images/gift1_M.png')">
        </a>
        <a :href="$filters.addGALink('https://page.line.me/tid7686u')" target="_blank">
          <img class="pc" :src="$filters.siteUrl('DjiNeo/images/line.png')">
          <img class="mobile" :src="$filters.siteUrl('DjiNeo/images/lineM.png')">
        </a>
      </div>

      <div class="tab-content t2" v-if="status == 1">
        <a href="https://events.tk3c.com/events_net/45536BTS/index.html?ec=DjiNeo#pro07" target="_blank">
          <img :src="$filters.siteUrl('DjiNeo/images/SP01.png')">
        </a>
      </div>
    </section>

    <!-- 商品區 -->
    <section class="pro-box">
      <div class="flex flex-wrap:wrap">
        <a class="w:44% w:90vw@<576" :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=251172')"
          target="_blank">
          <img :src="$filters.siteUrl('DjiNeo/images/PD1.png')">
        </a>
        <a class="w:44% w:90vw@<576" :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=251173')"
          target="_blank">
          <img :src="$filters.siteUrl('DjiNeo/images/PD2.png')">
        </a>
      </div>
    </section>

    <!-- 影片區 -->
    <section class="vod-group" v-if="isVod">
      <h2 class="title">
        <img :src="$filters.siteUrl('DjiNeo/images/S03.png')">
      </h2>

      <div class="youtube rel w:full h:0 pb:40% m:auto">
        <iframe class="w:full h:full abs left:0 right:0 top:0 z:-1 m:auto"
          src="https://www.youtube.com/embed/7xHQIDYTHiw?si=iM1AoSkR0xTJhvNc" frameborder="0" allowfullscreen>
        </iframe>
      </div>
    </section>

    <!-- 商品樓層 -->
    <section class="hot-group scroll" id="hot">
      <h2 class="title">
        <img :src="$filters.siteUrl('DjiNeo/images/S04.png')">
      </h2>


      <div class="box">
        <component :is="listF" :datas="product2[menu]"></component>
      </div>
    </section>

    <!-- 旗艦館 -->
    <section class="store-group">
      <a class="w:90% w:full@<576" :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=111126')"
        target="_blank">
        <img :src="$filters.siteUrl('DjiNeo/images/S05.png')">
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

