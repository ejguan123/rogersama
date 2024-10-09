<script>
import { globalMixin } from '../../globalMixin.js'
export default {
  mixins: [globalMixin],
  props: ['pro']
}
</script>

<template>
  <!-- list_H版型 -->
  <div class="list_H bg01">
    <div class="boxH">
      <ul class="boxH_big">
        <li v-for="(proA, p) in pro.slice(0, 2)">
          <a
            :href="$filters.addGALink('http://www.tk3c.com/pt.aspx?pid=' + proA.productid)"
            :id="`prod${proA.productid}`"
            :name="`prod${proA.productid}`"
          >
            <!---icon--->
            <em id="RTProd_ctl02_ProdUc21_RTProdTop_ctl00_Icon" class="iconH_01"></em>
            <p class="itemH_img">
              <img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" />
            </p>
            <div class="boxH_word">
              <h4 :class="[proA.Promote.trim() == '' ? 'empty' : '']">{{ proA.Promote }}</h4>
              <storg v-html="proA.productname"></storg>
              <ol>
                <div v-html="proA.Productfunc"></div>
              </ol>
            </div>
            <div class="boxH_price">
              <p class="iconH_pro" v-if="getProPercent(proA) != 100">
                <span>{{ getProPercent(proA) }}</span
                >折
              </p>
              <strong class="fred">
                <em>${{ addNumComma(proA.nonmemberprice) }}</em>
                <i>活動價</i>
                {{ addNumComma(proA.realprice) }}
              </strong>
            </div>
          </a>
        </li>
      </ul>
      <ul class="boxH_s">
        <li v-for="(proA, pr) in pro.slice(2, pro.length)">
          <a
            :href="$filters.addGALink('http://www.tk3c.com/pt.aspx?pid=' + proA.productid)"
            :id="`prod${proA.productid}`"
            :name="`prod${proA.productid}`"
          >
            <p class="itemH_img">
              <img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" />
            </p>
            <div class="boxH_word">
              <h4 :class="[proA.Promote.trim() == '' ? 'empty' : '']">{{ proA.Promote }}</h4>
              <storg v-html="proA.productname"></storg>
              <ol>
                <div v-html="proA.Productfunc"></div>
              </ol>
            </div>
            <div class="boxH_price">
              <p class="iconH_pro" v-if="getProPercent(proA) != 100">
                <span>{{ getProPercent(proA) }}</span
                >折
              </p>
              <strong class="fred">
                <em>${{ addNumComma(proA.nonmemberprice) }}</em>
                <i>活動價</i>
                {{ addNumComma(proA.realprice) }}
              </strong>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
