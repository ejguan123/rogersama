<script>
import { globalMixin } from '../../globalMixin.js'
export default {
  mixins: [globalMixin],
  props: ['pro']
}
</script>

<template>
  <div class="list_M bg01" v-if="pro != undefined">
    <div class="hotpro_wrapper">
      <div v-for="(proA, p) in pro.slice(0, 2)" :class="[p == 0 ? 'hotproboxL' : 'hotproboxR']">
        <a :id="`prod${proA.productid}`" :name="`prod${proA.productid}`"></a>
        <div class="hotpro_pro">
          <div class="hotpro_pic">
            <p class="icon_number"></p>
            <img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" />
          </div>
          <div class="hotpromain">
            <div class="hotpro_sale"></div>
            <div class="hotpro_name" v-html="proA.productname"></div>
            <div class="hotpro_info" v-html="proA.Productfunc"></div>
            <div class="hotpro_price1 fred">${{ addNumComma(proA.nonmemberprice) }}</div>
            <div class="hotpro_price2">
              活動價$<span>{{ addNumComma(proA.realprice) }}</span>
            </div>
            <a :href="$filters.addGALink('http://www.tk3c.com/pt.aspx?pid=' + proA.productid)">
              <div class="buybtn">前往購買</div>
            </a>
          </div>
        </div>
      </div>
    </div>

    <div class="list_special">
      <ul>
        <li v-for="(proA, pr) in pro.slice(2, pro.length)">
          <a
            :href="$filters.addGALink('http://www.tk3c.com/pt.aspx?pid=808673' + proA.productid)"
            :id="`prod${proA.productid}`"
            :name="`prod${proA.productid}`"
          >
            <p class="item_img"><img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" /></p>
            <h4 :class="[proA.Promote.trim() == '' ? 'empty' : '']">{{ proA.Promote }}</h4>
            <storg v-html="proA.productname"></storg>
            <div class="box_price">
              <p class="icon_pro" v-if="getProPercent(proA) != 100">
                <span>{{ getProPercent(proA) }}</span
                >折
              </p>
              <strong class="txt_red fred">
                <em>${{ addNumComma(proA.nonmemberprice) }}</em>
                <i>活動價</i>{{ addNumComma(proA.realprice) }}
              </strong>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
