<script setup>
import listF from '../layout/listF.vue'
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
    <h2 class="title" :name="`pro${menu[f]}`" :id="`pro${menu[f]}`">
      <a v-if="floor.url" :href="$filters.addGALink(floor.url)">
        <img :src="$filters.siteUrl(floor.image)" />
      </a>
      <img v-else :src="$filters.siteUrl(floor.image)" />
    </h2>

    <component
      v-if="products[menu[f]] != undefined"
      :is="floor.type != undefined ? floor.type : listF"
      :pro="products[menu[f]].Data"
    ></component>
  </section>
</template>
