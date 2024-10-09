<script setup>
import listF from '../layout/listF.vue'
import listM from '../layout/listM.vue'
</script>
<script>
import { globalMixin } from '../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      menu: [2383, 2384, 2385, 2386, 2387],
      floorImg: [
        {
          image: 'dyson/images/fl1.jpg'
        },
        {
          image: 'dyson/images/fl2.jpg'
        },
        {
          image: 'dyson/images/fl3.jpg',
          type: listM
        },
        {
          image: 'dyson/images/fl4.jpg',
          type: listM
        },
        {
          image: 'dyson/images/fl5.jpg'
        }
      ]
    }
  },
  mounted() {
    const { menu } = this
    this.getFloorData(menu)
  }
}
</script>

<template>
  <div class="floor" v-for="(pro, p) in products" :id="`pro${pro.id}`">
    <h2 class="protitle">
      <a :name="`pro${pro.id}`"></a>

      <img :src="$filters.siteUrl(floorImg[p].image)" />
      {{ pro.datas.MenuTitle }}
    </h2>

    <component :is="floorImg[p].type ? floorImg[p].type : listF" :pro="pro.datas.Data"></component>
  </div>
</template>
