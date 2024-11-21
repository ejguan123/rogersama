<script setup>
import listF from '../layout/listF.vue'
import listM from '../layout/listM.vue'
import listD from '../layout/listD.vue'
</script>

<script>
import { globalMixin } from '../../globalMixin.js'
export default {
  mixins: [globalMixin],
  props: ['floors', 'menu'],
  mounted() {
    this.getFloorData(this.menu)
  }
}
</script>

<template>
  <section class="floor scroll" v-for="(floor, f) in floors" :key="f">
    <h2 class="title">
      <a v-if="floor.url" :href="$filters.addGALink(floor.url)" :name="`pro${menu[f]}`" :id="`pro${menu[f]}`"> 
         <img :src="$filters.siteUrl(floor.image)" />
      </a>
      <img v-else :src="$filters.siteUrl(floor.image)" />
    </h2>

    <component
      v-if="products[menu[f]] != undefined"
      :is="floor.type == 'listM' ? listM : listF"
      :pro="products[menu[f]].Data"
    ></component>
  </section>
</template>
