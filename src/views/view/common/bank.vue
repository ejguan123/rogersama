<script setup>
import listF from '../../layout/listF.vue'
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      banks: [
        {
          image: 'bank_ec/images/bank1.png',
          date: '2024/11/13-11/30',
          content: `
          <p><b>單筆分期刷滿$26,000享</b><span>現折$1,000</span></p>
          <p><b>單筆分期刷滿$10,500享</b><span>現折$500</span></p>
          <p><b>單筆不分期刷滿$7,300享</b><span>現折$300</span></p>
          `,
          url: 'https://www.taishinbank.com.tw/eServiceA/CreditCardAP/apply/index.jsp?pc=27&sl=1701029779',
          alertText:
            'https://events.tk3c.com/events_net/tk3c_creditcard/index.html?page=monthlyOffer'
        },
        {
          image: 'bank_ec/images/bank2.png',
          date: '即日起-11/30',
          content: `<p><b>單筆分期刷滿$20,800享</b><span>現折$800</span></p>`,
          alertText: ` <ul style='text-align:left;'>
             <li style='margin-bottom:30px;background:#d6d6d6;'>活動期間自2024/11/26起至2024/11/30 </li>
             <li style='margin-bottom:10px;'>凡於活動期間消費刷「星展銀行信用卡」，可享有下列檔期活動優惠。 </li>
                <li style='margin-bottom:10px;'>※信用卡綁定LINE Pay或其他第三方支付恕不享有本活動優惠。 </li>
                 <li style='margin-bottom:40px;'>※不包含一般簽帳金融卡，活動不併行(例如：星展日及滿額禮活動)，另現折活動正、附卡消費分開計算。 相關活動注意事項請參閱下方，活動未盡事宜以燦坤3C公告為主，燦坤3C保留活動最終解釋、修改、變更之權利。</li>
                 <li style='margin-bottom:10px;'>凡於活動期間(2024/11/26-2024/11/30)於燦坤線上購物網站購買全館商品，除享有「促銷價」的折扣外，刷「星展銀行信用卡」，單筆分期刷滿20,000元(限分3、6、8期，再享分期0%利率)，可享現折800元的優惠，單張發票不累贈，最多折抵一次，總限量60名。 </li>
                  <li style='margin-bottom:30px;'>請先加入燦坤線上購物會員或是登入會員帳號及密碼，選擇購買商品後，在購物車勾選想適用銀行優惠，將於結帳時由系統判斷是否符合活動條件，符合活動條件將直接於結帳金額現折。 ​</li>
                 <li style='margin-bottom:10px;background:#d6d6d6;'>回饋限制與例外 ​</li>
                <li style='margin-bottom:10px;'>(1)總限量60名，每位會員每張星展銀行信用卡限回饋1次。</li>
                <li style='margin-bottom:10px;'>(2)消費滿額以活動商品實際發票開立金額認定，部分商品除外，如：點數卡、以及其他不能使用分期交易的商品；且所有折扣後的結帳刷卡金額須滿20,000元(限分3、6、8期)始符本活動之條件</li>
                <li style='margin-bottom:10px;'>(3)活動指定商品，需於2024/12/15前出貨/配送完成，如遲至2024/12/16 (含)才出貨/配送則不享本活動優惠，如因商品缺貨等不可歸責於會員的原因導致無法於前開期間出貨/配送完成，仍可享有本活動優惠。</li>
                <li style='margin-bottom:10px;'>(4)如每位會員每張星展銀行信用卡回饋超過1次時，燦坤有權取消訂單。</li>
                <li style='margin-bottom:10px;'>(5)若退貨導致發票金額不達滿額門檻，須補足800元。</li>
                <li style='margin-bottom:10px;'>活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。</li>
        </ul>`
        },
        {
          image: 'bank_ec/images/bank3.png',
          date: '2024/11/13-11/30',
          content: `<p><b>單筆刷滿$25,000享</b><span>現折$800</span></p>
          <p><b>單筆刷滿$32,500享</b><span>現折$2,500</span></p>
          <p style="margin-bottom:20px;"></p>
          <p><b>單筆分期刷滿$50,000</b><span>登錄送5,000燦坤K幣</span>	</p>
          `,
          url: 'https://events.tk3c.com/events_net/invoice_login/detail.aspx',
          alertText: 'https://www.tk3c.com.tw/#actsdetail&8&719'
        }
      ],
      bank1After: [
        {
          date: '2024/12/1-12/31'
        }
      ],
      bank2After: [
        {
          date: '2024/12/1-12',
          alertText: ` <ul style='text-align:left;'>
             <li style='margin-bottom:30px;background:#d6d6d6;'>活動期間 2024/12/1-12/12</li>
             <li style='margin-bottom:10px;'>於活動期間(2024/12/1-2024/12/12)於燦坤實體門市或燦坤線上購物網站購買全館商品，除享有「促銷價」的折扣外，刷「星展銀行信用卡」，單筆分期刷滿20,000元(限分3、6、8期，再享分期0%利率)，可享現折800元的優惠，單張發票不累贈，最多折抵一次，總限量1,000名。</li>
                <li style='margin-bottom:10px;'>(1)燦坤實體門市：結帳時須出示「燦坤振興_星展銀行分期現折800元券(APP)」(取得方式請見第2點說明)，憑券兌換現折800元，限量兌換900名，每位會員及每張星展銀行信用卡限回饋2次。</li>
                <li style='margin-bottom:10px;'>(2)燦坤線上購物網站：請先加入燦坤線上購物會員或是登入會員帳號及密碼，選擇購買商品後，在購物車勾選想適用銀行優惠，將於結帳時由系統判斷是否符合活動條件，符合活動條件將直接於結帳金額現折800元，限量100名，每位會員及每張星展銀行信用卡限回饋1次。</li>
        </ul>`
        }
      ],
      bank3After: [
        {
          date: '2024/12/1-31',
          content: `<p><b>單筆刷滿$25,000享</b><span>現折$800</span></p>
          <p style="margin-bottom:20px;"></p>
          <p><b>單筆分期刷滿$50,000</b><span>登錄送5,000燦坤K幣</span>	</p>
          `,
          alertText: 'https://www.tk3c.com.tw/#activityinfo&8'
        }
      ],
      tabs: [
        { image: 'bank_ec/images/S2-10000_b.png' },
        { image: 'bank_ec/images/S2-30000_b.png' }
      ],
      asides: [
        {
          text: '仟元刷卡現折好物',
          href: ''
        },
        {
          text: '萬元刷卡現折好物',
          href: ''
        }
      ],
      today: new Date(),
      menuPro1: 7640,
      menuPro2: [7641, 7642],
      status: 0
    }
  },
  mounted() {
    const { today, banks } = this

    // 12月更新銀行訊息
    if (today >= new Date('2024/12/01')) {
      banks[0].date = this.bank1After[0].date
      banks[1].date = this.bank2After[0].date
      banks[1].alertText = this.bank2After[0].alertText
      banks[2].date = this.bank3After[0].date
      banks[2].content = this.bank3After[0].content
      banks[2].alertText = this.bank3After[0].alertText
    }

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

    <em
      class="font-weight:bold block w:97vw@<576 f:2rem f:1.5rem@<576 color:#000 m:1rem|0|4rem m:1rem|0|0@<576"
      >※門市付款之預約單無法享有指定信用卡刷卡優惠※</em
    >

    <!-- 銀行詳細說明 -->
    <section class="bank-group">
      <ul class="gap:10 jc:left@<992 jc:center@<576">
        <li
          v-for="(bank, b) in banks"
          class="rel w:31% w:46vw@<992 w:90vw@<576 mb:15%@<992 mb:0%@<576"
        >
          <img class="mt:14%@<576" :src="$filters.siteUrl(bank.image)" />
          <div
            class="w:full max-width:19rem max-width:20rem@<992 max-width:18rem@<576 max-width:22rem@>2000 abs m:auto left:0 right:0 top:30% top:39vw@<576"
          >
            <em class="color:#707070 mb:10px">{{ bank.date }}</em>
            <div
              v-html="bank.content"
              class="h:9vmax h:9rem@<1440 h:15rem@<992 h:12rem@<601 h:48vw@<576 h:7vmax@>2500 f:1.1rem f:1.5em@<992 f:1.1rem@<601 f:1.3rem@>2000 pt:8% pt:2%@<992 pt:6%@<576 box:border-box"
            ></div>
            <div class="flex flex-wrap:wrap jc:center m:auto gap:10 p:1% box:border-box">
              <a
                class="w:38% m:0|0"
                target="_blank"
                v-if="b == 0"
                :href="
                  $filters.addGALink(
                    'https://www.taishinbank.com.tw/eServiceA/CreditCardAP/apply/index.jsp?pc=27&sl=1701029779'
                  )
                "
              >
                <img :src="$filters.siteUrl('bank_ec/images/go.png')" />
              </a>
              <a
                v-if="b == 2"
                class="w:38% m:0|0"
                :href="$filters.addGALink(bank.url)"
                target="_blank"
              >
                <img :src="$filters.siteUrl('bank_ec/images/login2.png')" />
              </a>
              <a v-if="b == 1" class="w:38% m:0|0" @click.prevent="message(bank.alertText)">
                <img :src="$filters.siteUrl('bank_ec/images/info.png')" />
              </a>
              <a v-else class="w:38% m:0|0" :href="bank.alertText" target="_blank">
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
        <li
          v-for="(tab, t) in tabs"
          :class="[status == t ? 'active' : '']"
          class="hue-rotate(200deg).active w:42vw@<576"
        >
          <a @click="change(t)">
            <img :src="$filters.siteUrl(tab.image)" />
          </a>
        </li>
      </ul>
      <div class="pro-content" v-for="(tab, t) in tabs" v-show="status == t">
        <component
          v-if="products[menuPro2[t]] != undefined"
          :is="listF"
          :pro="products[menuPro2[t]].Data"
        ></component>
      </div>
    </section>

    <footer>
      <img
        class="w:20% w:40vw@<992 w:65vw@<576 m:0|auto|2% m:0|auto|10%@<576"
        :src="$filters.siteUrl('bank_ec/images/copyRight.png')"
      />
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
  top: 200px;
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
    $image: $origin + 'kv.png';
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
    text-align: left;
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
