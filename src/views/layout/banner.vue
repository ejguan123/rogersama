<script setup>
import { toRefs } from 'vue'
import { EffectFlip } from 'swiper/modules'

const props = defineProps({
  banner1: Object,
  banner2: Object,
  title: String
})

const { banner1 } = toRefs(props)
const { banner2 } = toRefs(props)
const { title } = toRefs(props)
</script>

<template>
  <!-- 熱門活動 -->
  <section class="event-box scroll" id="event">
    <h2 class="title">
      <img :src="$filters.siteUrl(title)" />
    </h2>
    <div class="content w:full">
      <!-- 左邊banner輪播翻轉 -->
      <div class="banner1">
        <swiper
          class="overflow:hidden"
          :loop="true"
          :autoplay="{
            delay: 1600,
            disableOnInteraction: false
          }"
          :effect="'flip'"
          :flipEffect="{
            slideShadows: false
          }"
          :modules="[EffectFlip]"
        >
          <swiper-slide v-for="b1 in banner1">
            <a :href="$filters.addGALink(b1.url)" target="_blank">
              <img :src="$filters.siteUrl(b1.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </div>

      <!-- 右邊banner輪播翻轉 -->
      <div class="banner2">
        <swiper
          class="overflow:hidden"
          :loop="false"
          :autoplay="{
            delay: 1600,
            disableOnInteraction: false
          }"
          :effect="'flip'"
          :flipEffect="{
            slideShadows: false
          }"
          :modules="[EffectFlip]"
        >
          <swiper-slide v-for="b2 in banner2">
            <a :href="$filters.addGALink(b2.url)" target="_blank">
              <img :src="$filters.siteUrl(b2.image)" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </section>
</template>
