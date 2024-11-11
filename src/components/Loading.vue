<script setup>
import { toRefs } from 'vue'
import Loading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/css/index.css'

const props = defineProps({
  status: Boolean
})

const { status } = toRefs(props)
</script>

<template>
  <div class="rel">
    <Loading :can-cancel="true" :active.snyc="status" :color="'#FF0000'" :is-full-page="false">
    </Loading>
  </div>
</template>
