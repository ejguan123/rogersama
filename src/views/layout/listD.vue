<script>
import { globalMixin } from '../../globalMixin.js'
export default {
  mixins: [globalMixin],
  props: ['pro']
}
</script>

<template>
  <!-- list_D版型 -->
  <div class="list_D bg01" v-if="pro != undefined">
    <ul>
      <li v-for="(proA, p) in pro">
        <a
          :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=' + proA.productid)"
          :id="'prod' + proA.productid"
          :name="'prod' + proA.productid"
        >
          <storg v-html="proA.productname"></storg>
          <p class="itemD_img">
            <img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" />
          </p>
          <p class="fgray">市價${{ addNumComma(proA.nonmemberprice) }}</p>
          <p class="itemD_text fred">
            活動價$<span>{{ addNumComma(proA.realprice) }}</span>
          </p>
          <h4 :class="[proA.Promote.trim() == '' ? 'empty' : '']">{{ proA.Promote }}</h4>
          <div class="buybtn">
            立即優惠
            <div class="gobtn">搶購</div>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
