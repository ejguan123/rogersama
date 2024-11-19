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
  <section class="floor" v-for="(floor, f) in floors" :key="f">
    <h2 class="title">
      <a :name="`pro${menu[f]}`" :id="`pro${menu[f]}`"> </a>
      <img :src="$filters.siteUrl(floor.image)" />
    </h2>

    <component
      v-if="products[menu[f]] != undefined"
      :is="listF"
      :pro="products[menu[f]].Data"
    ></component>
  </section>
</template>
