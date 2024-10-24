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
  <section class="scroll" v-for="(pro, p) in products" :key="p">
    <h2 class="title" :id="`pro${pro.id}`">
      <a :href="$filters.addGALink(floors[p].url)">
        <img :src="$filters.siteUrl(floors[p].image)" />
      </a>
    </h2>

    <component :is="listF" :pro="pro.datas.Data"></component>
  </section>
</template>
