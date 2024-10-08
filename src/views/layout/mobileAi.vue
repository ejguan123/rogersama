<script setup>
const status = defineModel('status', {
  type: Number
})
const tab1 = defineModel('tab1', {
  type: Object
})
const tab2 = defineModel('tab2', {
  type: Object
})
</script>

<template>
  <!-- 手機版上方選單 -->
  <div class="nav-footer">
    <div class="footer-bg"></div>
    <div class="nav-box">
      <ul>
        <li data-id="top">回到上層</li>
        <li data-id="1">關注社群</li>
      </ul>
    </div>

    <div class="box-area social">
      <ul>
        <li>
          <a href="https://reurl.cc/QbZ149" target="_blank"><i class="fa-brands fa-meta"></i></a>
        </li>
        <li>
          <a href="https://reurl.cc/7pMZVl" target="_blank"><i class="fa-brands fa-line"></i></a>
        </li>
        <li>
          <a href="https://reurl.cc/3Ye8kX" target="_blank"
            ><i class="fa-brands fa-instagram"></i
          ></a>
        </li>
      </ul>
    </div>
  </div>

  <!-- go top -->
  <a class="gotop-mobile"></a>

  <div class="mobile-for-product">
    <div class="top-nav">
      <h3 class="title">快速選單</h3>
      <ul class="a1" v-show="status == 0">
        <li v-for="(t1, t) in tab1[0]">
          <a :href="t1[0].asideUrl">{{ t1[0].asidetext }}</a>
        </li>
        <li><a href="#event">熱門活動 </a></li>
      </ul>
      <ul class="a2" v-show="status == 1">
        <li v-for="t2 in tab2[0]">
          <a :href="t2[0].asideUrl">{{ t2[0].asidetext }}</a>
        </li>
        <li><a href="#event">熱門活動 </a></li>
      </ul>
    </div>
    <a class="switch"><i class="fa-solid fa-angle-down"></i></a>
  </div>
</template>
