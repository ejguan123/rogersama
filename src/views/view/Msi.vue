<script setup>
import { useHead } from "@unhead/vue";

//META DESCRIPTION 
useHead({
  title: "MSI Intel Gamer Days | 燦坤線上購物",
  meta: [
    {
      name: 'description',
      content: 'MSI Intel Gamer Days',
    }
    , {
      property: 'og:title',
      content: 'MSI Intel Gamer Days | 燦坤線上購物'
    },
    {
      property: 'og:description',
      content: 'MSI Intel Gamer Days'
    },
    {
      property: 'og:image',
      content: 'https://www.tk3c.com/images/headimg.jpg'
    },
    {
      property: 'og:url',
      content: 'https://events.tk3c.com/events_net/events_net/IGD2024_MSI/index.html'
    }
  ]
});
</script>

<script> 
import { globalMixin } from "../../../globalMixin.js";
   export default {
  mixins: [globalMixin],
    data() {
      return {
        menus: [7299, 7301, 7302, 7303, 7304, 7305],
        tabs:[
          {
            0: [
              {
                "title": "IGD2024/images/bara.png",
                "url":"https://www.tk3c.com/dictitleurl.aspx?cid=117913",
                "content": [
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=117913`, 
                  "image": "IGD2024/images/bna01.png" ,
                    "menu":7299
                  },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=117913`, "image": "IGD2024/images/bna03.png" ,
                    "menu":7301
                  },
                ],
              },
            ],
            1: [
              {
                "title": "IGD2024/images/barb.png",
                "url":"https://www.tk3c.com/dictitleurl.aspx?cid=11124",
                "content": [
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=11124`, "image": "IGD2024/images/bnb01.png","menu":7302 },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=11124`, "image": "IGD2024/images/bnb02.png","menu":7303 },
                ]
              },
            ],
            2: [
              {
                "title": "IGD2024/images/barc.png",
                "url":"https://www.tk3c.com/dictitleurl.aspx?cid=114130",
                "content": [
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=114130`, "image": "IGD2024/images/bnc01.png","menu":7304 },
                  { "url": `https://www.tk3c.com/dictitleurl.aspx?cid=114130`, "image": "IGD2024/images/bnc02.png","menu":7305 },
                ]
              },
            ]
          }
        ],
        status:0,
      }
    },
  created() {
    let styles = [
      "https://www.tk3c.com/images/headimg.jpg",
      "https://events.tk3c.com/events_net/events_net/IGD2024/css/intel.css"
    ];

    //新增css 連結
    this.addStyle(styles);
  },
    mounted() {
      const {menus} = this;

      document.querySelector('body').classList.add('IGD2024_MSI');

       //swiper輪播
      this.slide();
      //撈取樓層商品(menus = 後台陳列編號 array)
      this.getFloorData(menus);

      //預設顯示頁籤第一個內容
       $all('.tab-area').forEach((tab,t) => {
        tab.querySelectorAll('.tab-content')[0].style.display = 'block';
       });

      this.tabSlide(0);
    },
  methods: {
    change(id) {

      if (event) {
        event.preventDefault();
        this.tabS = null;
        let current = event.currentTarget,
          parentAr = current.parentNode.parentNode.parentNode.parentNode.parentNode,
          parentClass = parentAr.getAttribute('class'),
          parentName = parentClass.substr(16);

        this.showAndHide(id, '.' + parentName);
        this.tabSlide(id);
      }
    },
    message(id) {
      //活動辦法
      let infoHtml = "";

      if (id == 1) {
        infoHtml = `
          <img width="100%" src="https://events.tk3c.com/events_net/events_net/IGD2024/images/Game_bundle.jpg">
        `;
      } else {
        infoHtml = `
        <iframe width="100%" height="500" src="https://events.tk3c.com/events_net/events_net/IGD2024/info.pdf"></iframe>
      `;
      }

      Swal.fire({
        width: 1200,
        title: "<p style='margin-bottom:5px';>活動詳情</p>",
        html: infoHtml,
        confirmButtonText: "關閉",
        position: 'center',
        showCloseButton: true,
        returnFocus: false,
      });
    }
  }
   }
</script>

<template>
  <div id="intel-container">
    <div class="background">
      <h2 class="title"><img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/msi/title2.png">
      </h2>
    </div>

    <p class="item"><img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/p02.png"></p>

    <!-- 指南 -->
    <section class="special-box">
      <h2 class="title"><img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/sp_bar01.png"></h2>

      <ul>
        <li><a href="https://www.tk3c.com/dic2.aspx?cid=121466&aid=23847&hid=123633&strPreView=y&ec=IGD2024_MSI"
            target="_blank"><img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/sp01_a.png"></a>
        </li>
        <li class="muti">
          <img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/sp02_a.png">
          <div class="links">
            <a href="https://www.tk3c.com/dic2.aspx?cid=121466&aid=23847&hid=123634&strPreView=y&ec=IGD2024_MSI"
              target="_blank">
              <img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/go.png">
            </a>
            <a class="alert" @click.prevent="message(1)">
              <img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/go2.png">
            </a>
          </div>
        </li>
        <li class="slide">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123687&strPreView=y&ec=IGD2024_MSI"
                target="_blank"><img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/sp09.png"></a>
            </div>
            <div class="swiper-slide">
              <a href="https://www.tk3c.com/dic1.aspx?cid=121466&aid=23845&strPreView=y&ec=IGD2024_MSI"
                target="_blank"><img
                  src="https://events.tk3c.com/events_net/events_net/IGD2024/images/sp03-1_a.png"></a>
            </div>
          </div>
        </li>
        <li class="muti">
          <img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/sp04_a.png">
          <div class="links">
            <a href="https://www.tk3c.com/dic2.aspx?cid=121466&aid=23847&hid=123246&strPreView=y&ec=IGD2024_MSI"
              target="_blank">
              <img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/go.png">
            </a>
            <a class="alert" @click.prevent="message(2)">
              <img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/go2.png">
            </a>
          </div>
        </li>
        <li class="slide2">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a href="https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123501&ec=IGD2024_MSI"
                target="_blank"><img
                  src="https://events.tk3c.com/events_net/events_net/IGD2024/images/msi/sp08.png"></a>
            </div>
            <div class="swiper-slide">
              <a href="https://www.tk3c.com/dic1.aspx?cid=121466&aid=23844&strPreView=y&ec=IGD2024_MSI"
                target="_blank"><img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/sp05_a.png"></a>
            </div>
          </div>
        </li>
        <li><a href="https://www.tk3c.com/dic1.aspx?cid=121466&aid=23566&ec=IGD2024_MSI" target="_blank"><img
              src="https://events.tk3c.com/events_net/events_net/IGD2024/images/sp06_a.png"></a>
        </li>
      </ul>
    </section>


    <section class="pro-box">
      <h2 class="title"><img src="https://events.tk3c.com/events_net/events_net/IGD2024/images/barpt.png"></h2>
      <a href="https://www.tk3c.com/pt.aspx?pid=248185&ec=IGD2024_MSI" target="_blank"><img
          src="https://events.tk3c.com/events_net/events_net/IGD2024/images/msi/pd_248185.png"></a>
      <a href="https://www.tk3c.com/pt.aspx?pid=248187&ec=IGD2024_MSI" target="_blank"><img
          src="https://events.tk3c.com/events_net/events_net/IGD2024/images/msi/pd_248187.png"></a>
      <a href="https://www.tk3c.com/pt.aspx?pid=250185&ec=IGD2024_MSI" target="_blank"><img
          src="https://events.tk3c.com/events_net/events_net/IGD2024/images/msi/pd_250185b.png"></a>
      <a href="https://www.tk3c.com/pt.aspx?pid=250608&ec=IGD2024_MSI" target="_blank"><img
          src="https://events.tk3c.com/events_net/events_net/IGD2024/images/msi/pd_250608.png"></a>
    </section>

    <section class="tab-area scroll" v-for="(tab,t) in tabs[0]" :class="`tab${Number(t) + 1}-box`" :id="`tab${Number(t) + 1}`">
      <h2 class="title">
        <a :href="$filters.addGALink(tab[0].url)" target="_blank"><img :src="$filters.siteUrl(tab[0].title)"> </a>
      </h2>


      <div class="content">
        <ul class="tab">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(content,c) in tab[0].content" :class="[status == c ? 'active' : '']">
              <a :href="$filters.addGALink(content.url)" @click="change(Number(c))">
                <img :src="$filters.siteUrl(content.image)">
              </a>
            </div>
          </div>
        </ul>


        <div class="tab-content" v-for="(content,c) in tab[0].content">
          <div class="bg01 list_F" v-if="products[content.menu] != undefined">
            <ul>
              <li v-for=" (pro, p) in products[content.menu]">
                <a :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=' + pro.productid)"
                  :id="'prod' + pro.productid" :name="'prod' + pro.productid">
                  <p class="itemF_img"><img onerror="ImgError(this);" :src="pro.ImgUrl" border="0"></p>
                  <storg>{{ pro.productname }}</storg>
                  <h4 :class="[pro.Promote.trim() == '' ? 'empty' : '']">{{ pro.Promote }}</h4>
                  <div class="boxF_price">
                    <p class="iconF_pro" v-if="getProPercent(pro) != 100"><span>{{ getProPercent(pro) }}</span>折</p>

                    <strong class="txt_red fred">
                      <em>市價${{ addNumComma(pro.nonmemberprice) }}</em>
                      <i>活動價$</i>{{ addNumComma(pro.realprice) }}
                    </strong>
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
          <li><a href="#tab1">飆速電競</a></li>
          <li><a href="#tab2">輕薄商務</a></li>
          <li><a href="#tab3">高效桌機</a></li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>

</template>

