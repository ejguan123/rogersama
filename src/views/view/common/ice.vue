<script setup>
  import { useHead,useScript } from "@unhead/vue";

//META DESCRIPTION 
useHead({
  title: "冰箱洗衣機主題館 | 燦坤線上購物",
  meta: [
    {
      name: 'description',
      content: '電冰箱、洗衣機、乾衣機、冷凍櫃、洗碗機，一級節能補助！各大品牌空調活動好禮多選一送給你!Panasonic國際牌、HITACHI日立、TECO東元、SAMSUNG三星、Whirlpool惠而浦、SANLUX台灣三洋、LG樂金、SHARP夏普、TOSHIBA 東芝，更多便宜優惠價格就在燦坤線上購物',
    }
    ,{
      property:'og:title',
      content:'冰箱洗衣機主題館 | 燦坤線上購物'
    },
    {
      property:'og:description',
      content:'電冰箱、洗衣機、乾衣機、冷凍櫃、洗碗機，一級節能補助！各大品牌空調活動好禮多選一送給你!Panasonic國際牌、HITACHI日立、TECO東元、SAMSUNG三星、Whirlpool惠而浦、SANLUX台灣三洋、LG樂金、SHARP夏普、TOSHIBA 東芝，更多便宜優惠價格就在燦坤線上購物'
    },
    {
      property:'og:image',
      content:'https://www.tk3c.com/images/headimg.jpg'
    },
    {
      property:'og:url',
      content:'https://events.tk3c.com/events_net/icewash2209/index.html'
    }
  ]
});
</script>

<script> 
import { globalMixin } from "../../../globalMixin.js";

   export default {
    mixins: [globalMixin],
    props:['floornames'],
    data() {
      return {
        menus: [6462, 4423, 5540, 5981, 5982, 5983, 7083, 7084, 7085,
          7086, 7087, 7088, 7089, 7090, 7091, 7092, 7093, 6024, 3651
        ],
        tabs:[
          {
            0: [
              {
                "title": "icewash2209/images/24618/R00_2.png",
                "url": "https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878"
              },
            ],
            1: [
              {
                "title": "icewash2209/images/24618/R01.png",
                "url": "https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878"
              },
            ],
            2: [
              {
                "title": "icewash2209/images/24618/R02.png",
                "content": [
                  { "url": "https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878", "image": "icewash2209/images/24618/R02_1.png" },
                  { "url": "https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878", "image": "icewash2209/images/24618/R02_2.png" },
                  { "url": "https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878", "image": "icewash2209/images/24618/R02_3.png" }
                ]
              }
            ],
            3: [
              {
                "title": "icewash2209/images/24618/R03.png",
                "content": [
                  { "url": "https://www.tk3c.com/dic2.aspx?cid=12504&aid=4937&hid=12644", "image": "icewash2209/images/24618/R03_1.png" },
                  { "url": "https://www.tk3c.com/dic2.aspx?cid=12504&aid=4937&hid=12645", "image": "icewash2209/images/24618/R03_2.png" },
                ]
              }
            ],
            4: [
              {
                "title": "icewash2209/images/24618/R04.png",
                "url": "https://www.tk3c.com/dic1.aspx?cid=12504&aid=7101"
              }
            ],
            5: [
              {
                "title": "icewash2209/images/24618/W00_2.png",
                "url": "https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620"
              },
            ],
            6: [
              {
                "title": "icewash2209/images/24618/W01.png",
                "url": "https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620"
              },
            ],
            7: [
              {
                "title": "icewash2209/images/24618/W02.png",
                "content": [
                  { "url": "https://www.tk3c.com/dic2.aspx?cid=83198&aid=18581&hid=83408", "image": "icewash2209/images/24618/W02_1.png" },
                  { "url": "https://www.tk3c.com/dic2.aspx?cid=83198&aid=18581&hid=83409", "image": "icewash2209/images/24618/W02_2.png" },
                  { "url": "https://www.tk3c.com/dic2.aspx?cid=83198&aid=18581&hid=83412", "image": "icewash2209/images/24618/W02_3.png" }
                ]
              }
            ],
            8: [
              {
                "title": "icewash2209/images/24618/W03.png",
                "content": [
                  { "url": "https://www.tk3c.com/dic2.aspx?cid=83198&aid=18641&hid=83372", "image": "icewash2209/images/24618/W03_1.png" },
                  { "url": "https://www.tk3c.com/dic2.aspx?cid=83198&aid=18641&hid=83370", "image": "icewash2209/images/24618/W03_2.png" },
                  { "url": "https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620", "image": "icewash2209/images/24618/W03_3.png" },
                ]
              }
            ],
            9: [
              {
                "title": "icewash2209/images/24618/W04.png",
                "url": "https://www.tk3c.com/dic1.aspx?cid=83198&aid=18643"
              }
            ],
            10: [
              {
                "title": "icewash2209/images/24618/W05.png",
                "url": "https://www.tk3c.com/dic1.aspx?cid=83198&aid=22912"
              }
            ],
          }
        ],
        status:0,
        subtitle:[
          { "image": "icewash2209/images/2407/st1.png" },
        ],
        products: [
          { "url": "https://www.tk3c.com/pt.aspx?pid=140129", "image": "icewash2209/images/2407/140129.png" },
          { "url": "https://www.tk3c.com/pt.aspx?pid=184760", "image": "icewash2209/images/2407/184760.png" },
          { "url": "https://www.tk3c.com/pt.aspx?pid=197758", "image": "icewash2209/images/2407/197758.png" },
          { "url": "https://www.tk3c.com/pt.aspx?pid=243441", "image": "icewash2209/images/2407/243441.png" },
          { "url": "https://www.tk3c.com/pt.aspx?pid=243990", "image": "icewash2209/images/2407/243990.png" },
        ]

      }
    },
    created() {
      let styles = [
        "https://www.tk3c.com/images/headimg.jpg",
        "https://events.tk3c.com/events_net/events_net/IGD2024/css/intel.css"
      ];

      styles.forEach((style,s) => {
        let link = document.createElement('link');
        link.type = 'text/css';

        link.rel =  (s == 0) ? 'image_src' : 'stylesheet';
        link.setAttribute('href',style);
        document.head.appendChild(link);
      });
    },
    mounted() {
      const {menus,menu2} = this;
      let location = window.location.pathname.split('/');

      document.querySelector('body').classList.add('IGD2024_ACER');

       //swiper輪播
      this.slide();
      //撈取樓層商品(menus = 後台陳列編號 array)
       this.getFloorData(menus);
      this.product2 = this.getFloorSingle(menu2);


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

        this.showAndHide(id,'.' + parentName);
        this.tabSlide(id);
      }
    },
  }
   }
</script>

<template>
  <div id="icewash-container">
    <div class="background">
      <h2 class="title"><img :src="$filiter.siteUrl('icewash2209/images/2407/title.png')" alt="冰箱X洗衣機 外宿好夥伴" /></h2>

      <div class="subtitle">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="sub in subtitle">
            <img :src="$filiter.siteUrl(sub)">
          </div>
        </div>
      </div>

      <p class="people animate__animated animate__fadeInLeft"><img
          src="https://events.tk3c.com/events_net/events_net/icewash2209/images/2407/de.png" />
      </p>
      <p class="product">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="pro in products">
          <a :href="$filiter.addGALink(pro.url)" target="_blank">
            <img :src="$filiter.siteUrl(pro.image)">
          </a>
        </div>
      </div>
      </p>

    </div>

    <p class="item"><img src="https://events.tk3c.com/events_net/events_net/icewash2209/images/2407/item.png" />
    </p>

    <!-- 最高現折 -->
    <section class="sale-box" id="sale">
      <h2 class="title"><img
          src="https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2310/dis_title.png" alt="熱銷強品" />
      </h2>
      <div class="sale">
        <a class="more" href="https://www.tk3c.com/dictitleurl.aspx?cid=111723" target="_blank">
          <img src="https://events.tk3c.com/events_net/events_net/icewash2209/images/2405/MORE.png">
        </a>

      </div>
    </section>

    <section class="gift-box"></section>

    <section class="sub-box">
      <h2 class="title"><img
          src="https://events.tk3c.com/events_net/events_net/icewash2209/images/24618/sub_title2.png" />
      </h2>
      <ul class="gap:10">
        <li class=" alert1 w:40% w:43vw@<992"><a><img
              src="https://events.tk3c.com/events_net/events_net/icewash2209/images/2407/sb2-2.png" alt="" /></a>
        </li>
        <li class="alert2 w:40% w:43vw@<992"><a><img
              src="https://events.tk3c.com/events_net/events_net/icewash2209/images/2407/sb2-3.png" alt="" /></a>
        </li>
        <li class="long w:80% w:88vw@<992"><a
            href="https://events.tk3c.com/events_net/events_net/green_subsidy/index.html" target="_blank" class="info">
            <img src="https://events.tk3c.com/events_net/events_net/icewash2209/images/2407/bn_turtle2406.jpg"
              class="pc" alt="" />
            <img src="https://events.tk3c.com/events_net/events_net/icewash2209/images/2407/bn_turtle2406M.jpg"
              class="mobile" alt="" /> </a></li>
      </ul>
    </section>

    <!-- 最強暢銷品牌 -->
    <section class="brand-box" id="brand">
      <h2 class="title"><img src="https://events.tk3c.com/events_net/events_net/icewash2209/images/2407/sb3-1.png" />
      </h2>
    </section>

    <section class="info-box" id="info">
      <div class="flex flex-wrap:wrap gap:20 gap:10@<576 m:auto jc:center">
        <a data-id="1" class="w:40% w:45vw@<992 m:0|0"><img
            src="https://events.tk3c.com/events_net/events_net/icewash2209/images/24618/info1_b.png" /></a>
        <a data-id="2" class="w:40% w:45vw@<992 m:0|0"><img
            src=" https://events.tk3c.com/events_net/events_net/icewash2209/images/24618/info2_b.png" /></a>
      </div>
    </section>

    <section class="pro-group">
      <div class="products"></div>
      <div class="products"></div>
    </section>



  </div>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li><a href="#brand">最強暢銷品牌</a></li>
          <li><a href="#info">冰箱洗衣機</a></li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>

</template>

