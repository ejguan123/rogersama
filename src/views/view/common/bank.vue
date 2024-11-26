<script setup>
import listF from '../../layout/listF.vue'
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      banks:[
        {
          image:'bank_ec/images/bank1.png',
          date:'2024/11/13-11/30',
          content:`
          <p>單筆分期刷滿$26,000享 <span>現折$1,000</span></p>
          <p>單筆分期刷滿$10,500享 <span>現折$500</span></p>
          <p>單筆不分期刷滿$7,300享 <span>現折$300</span></p>
          `,
          url:'https://www.taishinbank.com.tw/eServiceA/CreditCardAP/apply/index.jsp?pc=27&sl=1701029779',
          alertText:'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=monthlyOffer'
        },
        {
          image:'bank_ec/images/bank2.png',
          date:'即日起-11/30',
          content:`<p>單筆分期刷滿$20,800享 <span>現折$800</span></p>`,
          alertText:` <ul style='text-align:left;'>
             <li style='margin-bottom:10px;background:#d6d6d6;'>「星展銀行-燦坤線上購物現折禮遇」活動</li>
                <li style='margin-bottom:10px;'>1.活動期間：本案獲准後執行至2024/11/30止(起始日期：即日起)</li>
                 <li style='margin-bottom:3px;'>2.活動門檻：活動期間於燦坤線上購物網站單筆結帳金額，分3.6.8期刷滿20,000享現折800元</li>
                 <li style='margin-bottom:10px;'>即（單次購物車金額含折價券、購物金、K幣等折扣後須滿20,800－800=實刷滿20,000）</li>
                  <li style='margin-bottom:10px;'>3.活動限制/同門市：星展銀行活動不併行(例如：星展日及滿額禮活動)，另現折活動正、附卡消費分開計算；星展信用卡(包括於分割基準日受讓花旗銀行信用卡業務後之原花旗銀行信用卡)，不包含一般簽帳金融卡。​</li>
                 <li style='margin-bottom:3px;'>4.活動數量：每位會員及每張信用卡限回饋1次，限量60張。​</li>
                <li style='margin-bottom:10px;'>活動費用：使用每月檔期贊助金請款，實報實銷，預估48,000元 (60*800=48,000)</li>
        </ul>`
        },
        {
          image:'bank_ec/images/bank3.png',
          date:'2024/11/13-11/30',
          content:`<p>單筆刷滿$25,000享 <span>現折$800</span></p>
          <p>單筆刷滿$32,500享 <span>現折$2,500</span></p>
          `,
          url:"https://events.tk3c.com/events_net/invoice_login/detail.aspx?activity_id=861",
          alertText:"https://www.tk3c.com.tw/#actsdetail&8&719",
        },
      ],
      tabs:[
        {image:'bank_ec/images/S2-10000_b.png'},
         {image:'bank_ec/images/S2-30000_b.png'},
      ],
      asides:[
        {
          "text":"仟元刷卡現折好物",
          "href":""
        },
         {
          "text":"萬元刷卡現折好物",
          "href":""
        },
      ],
      today: new Date(),
      menuPro1:7640, 
      menuPro2:[7641,7642],
      status:0
    }
  },
  mounted() {
    const { today } = this

    //撈取千元刷卡樓層商品
    this.getFloorSingle(this.menuPro1)

    //撈取其他樓層
    this.getFloorData(this.menuPro2)
  },
  methods: {
    change(id) {
     this.status = id
    },
    message(text) {
        Swal.fire({
        width: 800,
        title: "<p style='margin-bottom:5px';>活動說明</p>",
        html: text,
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
  <div id="bank-container">
    <div class="background">
      <h2 class="title">
        <img :src="$filters.siteUrl('bank_ec/images/title2.png')" />
      </h2>
    </div>

    <p class="item">
      <img :src="$filters.siteUrl('bank_ec/images/item.png')" />
    </p>

    <!-- 銀行詳細說明 -->
    <section class="bank-group">
      <ul class="gap:10 jc:left@<992 jc:center@<576">
        <li v-for="(bank,b) in banks" class="rel w:31% w:46vw@<992 w:90vw@<576 mb:15%@<992 mb:0%@<576">
           <img class="mt:14%@<576" :src="$filters.siteUrl(bank.image)" />
           <div class="w:full max-width:18rem max-width:18.5rem@<992 max-width:18rem@<576 max-width:22rem@>2000 abs m:auto left:0 right:0 top:30% top:39vw@<576">
            <em class="color:#707070 mb:10px">{{ bank.date }}</em>
            <div v-html="bank.content" class="h:9vmax h:9rem@<1440 h:15rem@<992 h:12rem@<601 h:48vw@<576 f:1.1rem f:1.5em@<992 f:1.1rem@<601 f:1.3rem@>2000 pt:14% pt:2%@<992 pt:12@<576 box:border-box"></div>
           <div class="flex flex-wrap:wrap jc:center m:auto gap:10 p:1% box:border-box">
             <a class="w:38% m:0|0" target="_blank" v-if="b == 0" :href="$filters.addGALink('https://www.taishinbank.com.tw/eServiceA/CreditCardAP/apply/index.jsp?pc=27&sl=1701029779')">
               <img :src="$filters.siteUrl('bank_ec/images/go.png')" />
             </a>
              <a v-if="b == 2" class="w:38% m:0|0" :href="$filters.addGALink(bank.url)">
              <img :src="$filters.siteUrl('bank_ec/images/login.png')" />
             </a>
             <a v-if="b == 1" class="w:38% m:0|0" @click.prevent="message(bank.alertText)">
              <img :src="$filters.siteUrl('bank_ec/images/info.png')" />
             </a>
              <a v-if="b == 2" class="w:38% m:0|0" :href="bank.alertText" target="_blank">
              <img :src="$filters.siteUrl('bank_ec/images/login.png')" />
             </a>
             <a v-else class="w:38% m:0|0" :href="$filters.addGALink(bank.alertText)" target="_blank">
              <img :src="$filters.siteUrl('bank_ec/images/info.png')" />
             </a>
           </div>
           </div>
        </li>
      </ul>
    </section>

    <!-- 千元刷卡 -->
     <section class="pro1-box scroll">
      <h2 class="title">
        <img :src="$filters.siteUrl('bank_ec/images/S1.png')" />
      </h2>

        <div class="box">
          <component :is="listF" :pro="product2[menuPro1]"></component>
        </div>
     </section>

     <!-- 萬元刷卡 -->
    <section class="pro2-box scroll">
      <h2 class="title">
        <img :src="$filters.siteUrl('bank_ec/images/S2.png')" />
      </h2>

      <ul class="tab mb:2% mt:5% gap:10">
        <li v-for="(tab,t) in tabs" :class="[status == t ? 'active' : '']" class="hue-rotate(200deg).active w:42vw@<576">
          <a @click="change(t)">
            <img :src="$filters.siteUrl(tab.image)" />
          </a>
        </li>
      </ul>
      <div class="pro-content" v-for="(tab,t) in tabs" v-show="status == t">
        <component
          v-if="products[menuPro2[t]] != undefined"
          :is="listF"
          :pro="products[menuPro2[t]].Data"
        ></component>
      </div>
    </section>

    <footer>
       <img class="w:20% w:40vw@<992 w:65vw@<576 m:0|auto|2% m:0|auto|10%@<576" :src="$filters.siteUrl('bank_ec/images/copyRight.png')" />
    </footer>
  </div>

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
</template>

<style lang="scss">
@charset "utf-8";

@import '../../../assets/sass/module/base';
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/bank_ec/images/';
$origin: 'https://events.tk3c.com/events_net/events_net/bank_ec/images/';

/*  共用樣式調整 */
form#form1 {
  position: relative;
  &:before {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    $image: $dir + 'body_ffe5e2.png';
    background: url($image) repeat-y center;
    background-size: 100% auto;
    background-position:
      0 49vmax,
      top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    z-index: -2;
    top: 0;
  }
}

.item {
  top:200px
}

.bg01 {
  background: #ffb080;
}

section {
  .title {
    .more {
      width: 26%;
      padding: 0;
      font-size: 0;
      position: absolute;
      right: -30%;
      top: 28%;
    }
  }
}


#bank-container {
  .background {
    $image: $dir + 'kv.png';
    @include bg-responsive($image, 2000, 500);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 30%;
    .title {
      width: 25%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      top: 12%;
      animation: blurFadeIn 1.6s linear;
    }
  }
}


.bank-group {
  span {
    color: #f00;
    font-weight: bold;
    padding-left: 5px;
    box-sizing: border-box;
  }
  p {
    display: flex;
    flex-wrap: nowrap;
  }
  li {
    &:after {
      content: '';
      display: block;
      width: 100%;
      height: 60%;
      position: absolute;
      left: 0;
      right: 0;
      margin: 0 auto;
      bottom: 0;
      background: #fff;
      border-bottom-left-radius: 10px;
      border-bottom-right-radius: 10px;
      box-sizing: border-box;
      z-index: -1;
    }
  }
}


/*  電腦版其他尺寸 */

@include media-query('mobile', '992px') {
  #bank-container {
    .background {
      background-size: 150% auto;
      background-position:
        -23vw 4vw,
        top;
      padding-bottom: 50vw;
      .title {
        width: 40vw;
        top: 8vw;
      }
    }
  }

  section {
    .title {
      .more {
        width: 25vw;
        right: -5vw;
        top: -3vw;
        z-index: 5;
      }
    }
  }

  .bank-group {
    p {
      margin-bottom: 4%;
      flex-wrap: wrap;
    }
  }

  .pro2-box {
    .bg01 {
      margin: 0 auto 0;
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

  #bank-container {
    .background {
      background-size: 220% auto;
      background-position:
        -57vw 10vw,
        top;
      padding-bottom: 65vw;
      .title {
        width: 60vw;
        top: 14vw;
      }
    }
  }

  .bank-group {
    p {
      margin-bottom: 3%;
    }
  }

}
</style>