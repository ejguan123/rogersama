<script setup>
import listF from '../layout/listF.vue'
</script>
<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  props: ['floors'],
  data() {
    return {
      menu: [2751, 5613, 5198, 5199, 4846, 5200, 5201, 5202]
    }
  },
  mounted() {
    const { menu } = this
    this.getFloorData(menu)
  }
}
</script>

<template>
  <section class="scroll" v-for="(floor, f) in floors" :key="f">
    <h2 class="title" :id="`pro${menu[f]}`">
      <a :href="$filters.addGALink(floor.url)">
        <img :src="$filters.siteUrl(floor.image)" />
      </a>
    </h2>

    <component
      v-if="products[menu[f]] != undefined"
      :is="listF"
      :pro="products[menu[f]].Data"
    ></component>
  </section>
</template>
