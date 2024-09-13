<script>
import axios from "axios";
import { globalMixin } from "../../../globalMixin.js";
  export default {
  mixins: [globalMixin],
    data() {
      return {
        menu: [7338, 7339, 7340, 7341, 7343, 7344, 7345, 7346,
          7347, 7348, 7349
        ],
        types: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        product3:[],
        floorImg:[
          {
            "url":"https://events.tk3c.com/events_net/green_subsidy/index.html",
            "image":"2408computer/images/sb5.png"
          },
          {
            "url": "https://events.tk3c.com/events_net/24TK2C/index.html",
            "image": "2408computer/images/sb6_2.png"
          },
          {
            "url": "https://events.tk3c.com/events_net/airConditionerLAB/index.html",
            "image": "2408computer/images/sb7.png"
          },
          {
            "url": "https://events.tk3c.com/events_net/2024083C/index.html",
            "image": "2408computer/images/sb8_2.png"
          },
          {
            "url": "https://events.tk3c.com/events_net/wet/index.html",
            "image": "2408computer/images/sb9.png"
          },
          {
            "url": "https://events.tk3c.com/events_net/icewash2209/index.html",
            "image": "2408computer/images/sb10.png"
          },
          {
            "url": "https://events.tk3c.com/events_net/fan_hot/index.html",
            "image": "2408computer/images/sb11.png"
          },
          {
            "url": "https://events.tk3c.com/events_net/icewash2209/index.html",
            "image": "2408computer/images/sb12.png"
          },
          {
            "url": "https://events.tk3c.com/events_net/events_net/PLAYGAMES/index.html",
            "image": "2408computer/images/sb13.png"
          },
          {
            "url": "https://events.tk3c.com/events_net/2020TVforever/index.html",
            "image": "2408computer/images/sb14.png"
          },
          {
            "url": "https://www.tk3c.com/dic2.aspx?cid=123139&aid=23800&hid=123290",
            "image": "2408computer/images/sb15.png"
          },
        ],
        siteUrl:'https://events.tk3c.com/events_net/events_net/'
      }
    },
    mounted() {
      const { menu } = this;
      this.getFloorData2(menu);
    },
    methods:{
      async getFloorData2(menu) {
        let newPro = [];
        try {
          for (let z = 0; z < menu.length; z++) {
            const res = await axios.get('https://events.tk3c.com/events_net/ashx/fkabow/GetAdSystemAll.ashx?menuid=' + menu[z]);
           newPro.push({
            id:menu[z],
            datas:res.data
           });
          }

          this.product3 = newPro;
        } catch (error) {
          if (error.response) {
            console.log(error.response.data);
            console.log(error.response.status);
          } else if (error.request) {
            console.log(error.request);
          } else {
            console.log(error.message);
          }
        }
      },
    }
  }
</script>

<template>


  <div class="floor" v-for="(pro, p) in product3" :key="p">
    <h2 class="protitle">
      <a :name="`pro${pro.id}`" :id="`pro${pro.id}`">

      </a>
      <img :src="$filters.siteUrl(floorImg[p].image)">
      {{ pro.datas.MenuTitle }}
      <a :href="$filters.addGALink(floorImg[p].url)" target="_blank" class="more">看更多</a>
    </h2>


    <div class="bg01 list_F">
      <ul>
        <li v-for=" (proA, p) in pro.datas.Data">
          <a :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=' + proA.productid)" :id="'prod' + proA.productid"
            :name="'prod' + proA.productid">
            <p class="itemF_img"><img onerror="ImgError(this);" :src="proA.ImgUrl" border="0"></p>
            <storg>{{ proA.productname }}</storg>
            <h4 :class="[proA.Promote.trim() == '' ? 'empty' : '']">{{ proA.Promote }}</h4>
            <div class="boxF_price">
              <p class="iconF_pro" v-if="getProPercent(proA) != 100"><span>{{ getProPercent(proA) }}</span>折</p>

              <strong class="txt_red fred">
                <em>市價${{ addNumComma(proA.nonmemberprice) }}</em>
                <i>活動價$</i>{{ addNumComma(proA.realprice) }}
              </strong>
            </div>
          </a>
        </li>
      </ul>
    </div>

    <!-- <div class="list_M bg01" v-if="types[p] == 1">
      <div class="hotpro_wrapper">

        <div v-for=" (pro, p) in pro.data.Data.slice(0, 2)" :class="[p == 0 ? 'hotproboxL' : 'hotproboxR']">
          <a :id="`prod${pro.productid}`" :name="`prod${pro.productid}`"></a>
          <div class="hotpro_pro">
            <div class="hotpro_pic">
              <p class="icon_number"></p>
              <img onerror="ImgError(this);" :src="pro.ImgUrl" border="0">
            </div>
            <div class="hotpromain">
              <div class="hotpro_sale"></div>
              <div class="hotpro_name">{{ pro.productname }}</div>
              <div class="hotpro_info" v-html="pro.Productfunc"></div>
              <div class="hotpro_price1 fred">${{ addNumComma(pro.nonmemberprice) }}</div>
              <div class="hotpro_price2">活動價$<span>{{ addNumComma(pro.realprice) }}</span></div>
              <a :href="'http://www.tk3c.com/pt.aspx?pid=' + pro.productid | addGALink">
                <div class="buybtn">前往購買</div>
              </a>
            </div>
          </div>
        </div>

      </div>


      <div class="list_special">
        <ul>

          <li v-for="(pro, pr) in pro.data.Data.slice(2, pro.data.Data.length) "><a
              :href="$filters.addGALink('http://www.tk3c.com/pt.aspx?pid=808673' + pro.productid)"
              :id="`prod${pro.productid}`" :name="`prod${pro.productid}`">
              <p class="item_img"><img onerror="ImgError(this);" :src="pro.ImgUrl" border="0"></p>
              <h4 :class="[pro.Promote.trim() == '' ? 'empty' : '']">{{ pro.Promote }}</h4>
              <storg>{{ pro.productname }}</storg>
              <div class="box_price">
                <p class="icon_pro" v-if="getProPercent(pro) != 100"><span>{{ getProPercent(pro) }}</span>折</p>
                <strong class="txt_red fred">
                  <em>${{ addNumComma(pro.nonmemberprice) }}</em>
                  <i>活動價</i>{{ addNumComma(pro.realprice) }}
                </strong>
              </div>
            </a></li>
        </ul>
      </div>
    </div> -->

  </div>
</template>