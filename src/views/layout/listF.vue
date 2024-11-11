<script>
import { globalMixin } from '../../globalMixin.js'
export default {
  mixins: [globalMixin],
  props: ['pro', 'isSwiper', 'name', 'incoming']
}
</script>

<!-- 商品樓層list_F版型 4小 -->
<template>
  <!-- 有輪播 -->
  <div class="bg01 list_F p:1%|1%|0! p:2%|2%|0!@<576" v-if="isSwiper == true">
    <ul v-if="pro != undefined" :class="[name != undefined ? name : '']">
      <swiper
        class="pro overflow:hidden"
        :loop="true"
        :autoplay="{
          delay: 2500,
          disableOnInteraction: false
        }"
        :observer="true"
        :observeParents="true"
        :loopAdditionalSlides="2"
        :space-between="10"
        :navigation="{
          prevEl: `.${name} .prev`,
          nextEl: `.${name} .next`
        }"
        :breakpoints="{
          0: {
            slidesPerView: 2
          },
          601: {
            slidesPerView: 3
          },
          992: {
            slidesPerView: 4
          }
        }"
      >
        <swiper-slide :class="[incoming ? 'before' : '']" v-for="(proA, p) in pro" class="bg:#fff">
          <a
            :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=' + proA.productid)"
            :id="'prod' + proA.productid"
            :name="'prod' + proA.productid"
          >
            <p class="itemF_img"><img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" /></p>
            <storg v-html="proA.productname"></storg>
            <h4 :class="[proA.Promote.trim() == '' ? 'empty' : '']">{{ proA.Promote }}</h4>
            <div class="boxF_price">
              <p class="iconF_pro" v-if="getProPercent(proA) != 100">
                <span>{{ getProPercent(proA) }}</span
                >折
              </p>

              <strong class="txt_red fred">
                <em>市價${{ addNumComma(proA.nonmemberprice) }}</em>
                <i>活動價$</i>{{ addNumComma(proA.realprice) }}
              </strong>
            </div>
          </a>
        </swiper-slide>
      </swiper>
      <div v-if="pro.length > 4" class="swiper-button-prev prev"></div>
      <div v-if="pro.length > 4" class="swiper-button-next next"></div>
    </ul>
  </div>

  <!-- 無輪播 -->
  <div class="bg01 list_F" v-else>
    <ul v-if="pro != undefined">
      <li :class="[incoming ? 'before' : '']" v-for="(proA, p) in pro">
        <a
          :href="$filters.addGALink('https://www.tk3c.com/pt.aspx?pid=' + proA.productid)"
          :id="'prod' + proA.productid"
          :name="'prod' + proA.productid"
        >
          <p class="itemF_img"><img onerror="ImgError(this);" :src="proA.ImgUrl" border="0" /></p>
          <storg v-html="proA.productname"></storg>
          <h4 :class="[proA.Promote.trim() == '' ? 'empty' : '']">{{ proA.Promote }}</h4>
          <div class="boxF_price">
            <p class="iconF_pro" v-if="getProPercent(proA) != 100">
              <span>{{ getProPercent(proA) }}</span
              >折
            </p>

            <strong class="txt_red fred">
              <em>市價${{ addNumComma(proA.nonmemberprice) }}</em>
              <i>活動價$</i>{{ addNumComma(proA.realprice) }}
            </strong>
          </div>
        </a>
      </li>
    </ul>
  </div>
</template>
