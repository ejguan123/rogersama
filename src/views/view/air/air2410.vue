<script setup>
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Controller, EffectFade, Parallax, EffectCube } from 'swiper/modules'
import listF from '../../layout/listF.vue'
import { ref } from 'vue'
import AirVideo from '../AirVideo.vue'

const swiperRef1 = ref()
const swiperRef2 = ref()

const onSwiper = (swiper) => {
  swiperRef1.value = swiper
}

const onControlSwiper = (swiper) => {
  swiperRef2.value = swiper
}

const goSlide = (id) => {
  swiperRef2.value.slideTo(id)
  swiperRef1.value.slideTo(id)
}

//滑動後動作
const onSlideChange = (e) => {
  swiperRef1.value.slideTo(e.realIndex)
  $all('.info-box .tab .swiper-slide').forEach((el) => {
    el.classList.remove('active')
  })
  $all('.info-box .tab .swiper-slide')[e.realIndex].classList.add('active')
}
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      proAir: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=180195',
          image: 'airConditionerLAB/images/2410/180195_1a.png',
          text: 'airConditionerLAB/images/2410/180195_2b.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=183903',
          image: 'airConditionerLAB/images/2410/183903_1.png',
          text: 'airConditionerLAB/images/2410/183903_2a.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=212543',
          image: 'airConditionerLAB/images/2410/212543_1a.png',
          text: 'airConditionerLAB/images/2410/212543_2a.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=235291',
          image: 'airConditionerLAB/images/2410/235291_1a.png',
          text: 'airConditionerLAB/images/2410/235291_2b.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=237456',
          image: 'airConditionerLAB/images/2410/237456_1.png',
          text: 'airConditionerLAB/images/2410/237456_2a.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=245238',
          image: 'airConditionerLAB/images/2410/245238_1.png',
          text: 'airConditionerLAB/images/2410/245238_2a.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=245720',
          image: 'airConditionerLAB/images/2410/245720_1.png',
          text: 'airConditionerLAB/images/2410/245720_2a.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=245849',
          image: 'airConditionerLAB/images/2410/245849_1.png',
          text: 'airConditionerLAB/images/2410/245849_2a.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=246919',
          image: 'airConditionerLAB/images/2410/246919_1a.png',
          text: 'airConditionerLAB/images/2410/246919_2b.png'
        }
      ],
      specials: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123849',
          image: 'airConditionerLAB/images/2410/a01.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123852',
          image: 'airConditionerLAB/images/2410/a02.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123857',
          image: 'airConditionerLAB/images/2410/a03.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123856',
          image: 'airConditionerLAB/images/2410/a04.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123855',
          image: 'airConditionerLAB/images/2410/a05.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123853',
          image: 'airConditionerLAB/images/2410/a06.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123858',
          image: 'airConditionerLAB/images/2410/a07.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=111598',
          image: 'airConditionerLAB/images/2410/a08.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=123854',
          image: 'airConditionerLAB/images/2410/a09.png'
        }
      ],
      brands: [
        {
          menu: 4414,
          image: 'airConditionerLAB/images/2410/logo_panasonic.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11238',
          pc: 'airConditionerLAB/images/2410/brand_pana.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_panaM.jpg'
        },
        {
          menu: 4413,
          image: 'airConditionerLAB/images/2410/logo_daikin.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11237',
          pc: 'airConditionerLAB/images/2410/brand_daikin.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_daikinM.jpg'
        },
        {
          menu: 4415,
          image: 'airConditionerLAB/images/2410/logo_hitach.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11236',
          pc: 'airConditionerLAB/images/2410/brand_hit.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_hitM.jpg'
        },
        {
          menu: 4417,
          image: 'airConditionerLAB/images/2410/logo_mitsubshi.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=37503',
          pc: 'airConditionerLAB/images/2410/brand_mit.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_mitM.jpg'
        },
        {
          menu: 4416,
          image: 'airConditionerLAB/images/2410/logo_sampo.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11240',
          pc: 'airConditionerLAB/images/2410/brand_sampo.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_sampoM.jpg'
        },
        {
          menu: 5516,
          image: 'airConditionerLAB/images/2410/logo_teco.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=11239',
          pc: 'airConditionerLAB/images/2410/brand_teco.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_tecoM.jpg'
        },
        {
          menu: 4418,
          image: 'airConditionerLAB/images/2410/logo_lg.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=104083',
          pc: 'airConditionerLAB/images/2410/brand_lg.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_lgM.jpg'
        },
        {
          menu: 5517,
          image: 'airConditionerLAB/images/2410/logo_Heran.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=71512',
          pc: 'airConditionerLAB/images/2410/brand_her.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_herM.jpg'
        },
        {
          menu: 4436,
          image: 'airConditionerLAB/images/2410/logo_fujitsu.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=111598',
          pc: 'airConditionerLAB/images/2410/brand_fuji2.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_fuji2M.jpg'
        },
        {
          menu: 4419,
          image: 'airConditionerLAB/images/2410/logo_chimei.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=4707&hid=115784',
          pc: 'airConditionerLAB/images/2410/brand_chimei.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_chimeiM.jpg'
        },
        {
          menu: 4420,
          image: 'airConditionerLAB/images/2410/logo_kolin.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=122558',
          pc: 'airConditionerLAB/images/2402/bn_kolin.jpg',
          mobile: 'airConditionerLAB/images/2402/bn_kolinM.jpg'
        },
        {
          menu: 4655,
          image: 'airConditionerLAB/images/2410/logo_sharp.png',
          url: 'https://www.tk3c.com/dic2.aspx?cid=11225&aid=23717&hid=122557&strPreView=y',
          pc: 'airConditionerLAB/images/2410/brand_sharp.jpg',
          mobile: 'airConditionerLAB/images/2410/brand_sharpM.jpg'
        }
      ],
      events: [
        {
          url: 'https://events.tk3c.com/events_net/2021airconditioning/index.html',
          image: 'airConditionerLAB/images/202301/bn01_b.jpg'
        },
        {
          url: 'https://www.tk3c.com/Events/2018Air/index.aspx',
          image: 'airConditionerLAB/images/1001/bn02.jpg'
        }
      ],
      floors: [
        {
          0: [
            {
              title: 'airConditionerLAB/images/2410/bra_s5.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4704&ec=airConditionerLAB',
              content: [
                {
                  menu: 4288,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4704&ec=airConditionerLAB',
                  image: 'airConditionerLAB/images/2405/s2-1.png'
                },
                {
                  menu: 4289,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4704&ec=airConditionerLAB',
                  image: 'airConditionerLAB/images/2405/s2-2.png'
                },
                {
                  menu: 4290,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4704&ec=airConditionerLAB',
                  image: 'airConditionerLAB/images/2405/s2-3b.png'
                },
                {
                  menu: 4291,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4704&ec=airConditionerLAB',
                  image: 'airConditionerLAB/images/2405/s2-4.png'
                }
              ]
            }
          ],
          1: [
            {
              title: 'airConditionerLAB/images/2410/bra_s6.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4702&ec=airConditionerLAB',
              content: [
                {
                  menu: 4292,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4702&ec=airConditionerLAB',
                  image: 'airConditionerLAB/images/2405/s3-1.png'
                },
                {
                  menu: 4293,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4702&ec=airConditionerLAB',
                  image: 'airConditionerLAB/images/2405/s3-2.png'
                },
                {
                  menu: 4294,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4702&ec=airConditionerLAB',
                  image: 'airConditionerLAB/images/2405/s3-3b.png'
                },
                {
                  menu: 4295,
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=4702&ec=airConditionerLAB',
                  image: 'airConditionerLAB/images/2405/s3-4.png'
                }
              ]
            }
          ],
          2: [
            {
              menu: 4130,
              title: 'airConditionerLAB/images/2410/bra_s7.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11225&aid=13580&ec=airConditionerLAB'
            }
          ]
        }
      ],
      infos: [
        {
          0: [
            {
              tab: 'airConditionerLAB/images/2405/bn_01.png',
              pc: 'airConditionerLAB/images/2402/info_new1.png',
              mobile: 'airConditionerLAB/images/2402/info_new1m.png'
            }
          ],
          1: [
            {
              tab: 'airConditionerLAB/images/2405/bn_02.png',
              pc: 'airConditionerLAB/images/2402/info_new2.png',
              mobile: 'airConditionerLAB/images/2402/info_new2m.png'
            }
          ],
          2: [
            {
              tab: 'airConditionerLAB/images/2405/bn_03.png',
              pc: 'airConditionerLAB/images/2402/info_new3.png',
              mobile: 'airConditionerLAB/images/2402/info_new3m.png'
            }
          ],
          3: [
            {
              tab: 'airConditionerLAB/images/2405/bn_04.png',
              pc: 'airConditionerLAB/images/2402/info4.png',
              mobile: 'airConditionerLAB/images/2402/info4_m.png'
            }
          ],
          4: [
            {
              tab: 'airConditionerLAB/images/2405/bn_05.png',
              pc: 'airConditionerLAB/images/2402/info5.png',
              mobile: 'airConditionerLAB/images/2402/info5_m.png'
            }
          ]
        }
      ],
      menuDis: 5515, //現折 清單編號
      menuBear: 4148, //熊速配
      menuHot: 4127, //熱銷空調首選
      menuCold: 3695, //冷暖空調
      menuWet: 7466, //除濕機用
      statusBrand: 0, //品牌區專區
      statusTab: 0, //商品樓層用
      statusInfo: 0,
      isDis: true,
      today: new Date()
    }
  },
  mounted() {
    const { brands, floors, menuDis, menuBear, today, menuHot, menuCold, menuWet } = this

    //固定背景
    this.fixedBg('.background2', '.special-box')

    //撈取 現折券樓層商品
    this.getFloorSingle(menuDis)

    //撈取 品牌樓層商品
    this.getFloorSingle(brands[0].menu)

    //撈取 熱銷空調樓層商品
    this.getFloorSingle(menuHot)

    //撈取 冷暖空調樓層商品
    this.getFloorSingle(menuCold)

    //撈取 除濕機樓層商品
    this.getFloorSingle(menuWet)

    //撈取熊速配樓層商品
    this.getFloorSingle(menuBear)

    for (const [f, floor] of Object.entries(floors[0])) {
      //撈取有頁籤的商品樓層
      if (floor[0].content != undefined) {
        this.getFloorSingle(floor[0].content[0].menu)
      } else {
        //無頁籤商品樓層
        this.getFloorSingle(floor[0].menu)
      }
    }

    //預設顯示頁籤第一個內容
    $all('.tab-area').forEach((tab, t) => {
      if (tab.querySelectorAll('.tab-content').length > 0) {
        tab.querySelectorAll('.tab-content')[0].style.display = 'block'
      }
    })

    // 10/4-14 隱藏現折券樓層
    if (today >= new Date('2024/10/04') && today < new Date('2024/10/15')) {
      this.isDis = false
    }
  },
  methods: {
    changeBrand(id, menu) {
      if (event) {
        setTimeout(() => {
          this.statusBrand = id
          this.getFloorSingle(menu)
        }, 100)
      }
    },
    changeTab(id, menu) {
      if (event) {
        let current = event.currentTarget,
          parentAr = current.parentNode.parentNode.parentNode.parentNode.parentNode,
          parentClass = parentAr.getAttribute('class'),
          parentName = parentClass.substr(16)

        setTimeout(() => {
          this.getFloorSingle(menu)
          this.showAndHide(id, `.${parentName}`)
        }, 100)
      }
    },
    changeInfo(id) {
      setTimeout(() => {
        this.statusInfo = id
      }, 150)
    },
    message(id) {
      //活動辦法
      let infoHtml = ''

      switch (id) {
        case 1:
          //空調場勘預約預約抽好禮
          infoHtml = `
               <p style="color:red;font-weight:bold;margin-bottom:25px;text-align:left;">本活動需完成(1)預約空調場勘+(2)購買分離式空調+(3)安裝完成，請留意預約空調場勘時所填寫的聯絡地址及聯絡電話需與空調安裝地址及聯絡電話相同。</p>
           <ul style='text-align:left;'>
                    <li style='margin-bottom:10px';>1.凡於活動期間(2024/8/1~9/30)，於燦坤線上購物網站預約空調場勘，且於燦坤線上購物網站或燦坤實體門市以會員資格購買「全系列分離式空調(外機計)(下稱活動指定商品)」，並於2024/10/10前出貨/配送完成，且後續未退貨退款者，即可獲得本活動抽獎資格(1張發票1次抽獎機會)，將抽出1名送「DAIKIN 7坪閃流放電空氣清淨機MC30YSCT(227244)(市價$8,800)」。​</li>
                    <li style='margin-bottom:10px';>2.中獎名單將於2024/10/15公告於FACEBOOK粉絲專頁「燦坤3C」，並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
                    <li style='margin-bottom:10px';>3.中獎者請於2024/10/25前回填中獎通知函：(1)攜帶身分證件、中獎發票至「原消費門市」，出示中獎簡訊並填寫中獎通知函完成；或(2)私訊「燦坤3C」粉絲專頁，提供姓名/電話/中獎簡訊畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整者或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%))。​</li>
                    <li style='margin-bottom:10px';>4.經核對符合活動條件者，燦坤3C會另行通知，請中獎者於2024/10/31前前往原消費門市領取(如為線上購買，燦坤3C會與中獎者確認領取門市)，如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄。​</li>
                    <li style='margin-bottom:10px';>5.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
                    <li style='margin-bottom:10px';>6.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
                    <li style='margin-bottom:10px;padding-left:10px';>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
                    <li style='margin-bottom:10px';>8.涉及大宗採購且(或)有議價時，因已經過議價給予價格優惠，該筆交易(發票)將無法參與本活動。​</li>
                    <li style='margin-bottom:10px';>9.活動未盡事宜以燦坤3C公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
          `
          break

        case 2:
          //政府補助 退貨
          infoHtml = `
           html: <img src="https://www.tk3c.com/image/product/desc/202302/%E5%8F%83%E8%80%83%E8%87%AA%E4%B8%AD%E8%8F%AF%E6%B0%91%E5%9C%8B%E8%B2%A1%E6%94%BF%E9%83%A8FB%E5%AE%98%E7%B6%B2%20%E8%A9%B3%E6%83%85%E8%B3%87%E8%A8%8A%E8%AB%8B%E6%9F%A5%E8%A9%A2%E6%94%BF%E5%BA%9C%E7%B6%B2%E7%AB%99.jpg" width="100%">
                <img src="https://www.tk3c.com/image/product/desc/202302/%E8%9E%A2%E5%B9%95%E6%93%B7%E5%8F%96%E7%95%AB%E9%9D%A2%202023-02-02%20163504(1).jpg" width="100%">
        `
          break

        case 3:
          //政府補助 汰舊換新
          infoHtml = `
            <img src="https://www.tk3c.com/image/UserFiles/sgs-2024-1.jpg" width="100%">
            <img src="https://www.tk3c.com/image/UserFiles/sgs-2024-2.jpg" width="100%">
          `
          break

        case 4:
          //更多費用
          infoHtml = `
             <img src="https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2402/alert_price.png" width="100%" style="margin-bottom:30px">
                <img src="https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2402/alert_price2.png" width="100%" style="margin-bottom:30px">
                <img src="https://events.tk3c.com/events_net/events_net/airConditionerLAB/images/2402/alert_price3.png" width="100%" style="margin-bottom:30px"
          `
          break
      }

      Swal.fire({
        width: 1000,
        title: "<p style='margin-bottom:5px';>活動辦法</p>",
        html: infoHtml,
        confirmButtonText: '關閉',
        position: 'center',
        showCloseButton: true,
        confirmButtonColor: '#000',
        returnFocus: false
      })
    }
  }
}
</script>

<template>
  <div id="air-container" v-cloak>
    <div class="background">
      <h2 class="title">
        <img
          class="pc"
          :src="$filters.siteUrl('airConditionerLAB/images/2410/title.png')"
          alt="暖心回饋季"
        />
        <img
          class="mobile"
          :src="$filters.siteUrl('airConditionerLAB/images/2410/m_t.png')"
          alt="暖心回饋季"
        />
      </h2>

      <div class="product">
        <swiper
          :loop="true"
          :observer="true"
          :parallax="true"
          :autoplay="{ delay: 1800, disableOnInteraction: false }"
          :modules="[Parallax]"
        >
          <swiper-slide v-for="pro in proAir" class="flex! ai:baseline! flex-wrap:wrap@<576">
            <a :href="$filters.addGALink(pro.url)" target="_blank" data-swiper-parallax-x="-800">
              <img :src="$filters.siteUrl(pro.image)" alt="" />
            </a>
            <a
              class="text rel right:3% right:-1vw@<576"
              :href="$filters.addGALink(pro.url)"
              data-swiper-parallax-x="-3000"
              data-swiper-parallax-duration="800"
              target="_blank"
            >
              <img :src="$filters.siteUrl(pro.text)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <div class="background2"></div>

    <!-- 預約 -->
    <section class="gift-box mt:-42%" id="gift">
      <a
        class="w:70% w:90vw@<992 w:100%@<576"
        href="https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2"
        target="_blank"
        ><img :src="$filters.siteUrl('airConditionerLAB/images/2410/bn_Site.png')" alt="" />
      </a>
    </section>

    <!-- 現折券 -->
    <section class="discount-box" id="dis" v-if="isDis">
      <h2 class="title">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bra_s1.png')" alt="" />
      </h2>

      <div class="discount">
        <component :is="listF" :pro="product2[menuDis]" :isSwiper="1" :name="'dis'"></component>
        <a
          class="more"
          :href="
            $filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=123798&strPreView=y')
          "
          target="_blank"
          >MORE</a
        >
      </div>
    </section>

    <!-- 精選活動 -->
    <section class="special-box">
      <img
        class="w:full h:full abs top:4% top:6%@<992 top:8%@<576 left:0 right:0 m:auto z:-1"
        :src="$filters.siteUrl('airConditionerLAB/images/2410/box.png')"
        alt=""
      />
      <h2 class="w:23% w:30vw@<992 w:45vw@<576 m:0|auto|3%">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bra_ss1.png')" alt="" />
      </h2>

      <div class="special w:90% m:auto">
        <swiper
          :space-between="10"
          :autoplay="{
            delay: 1400,
            disableOnInteraction: false
          }"
          :breakpoints="{
            0: {
              slidesPerView: 1.8,
              grid: {
                fill: 'row',
                rows: 2
              }
            },
            600: {
              slidesPerView: 3,
              grid: {
                fill: 'row',
                rows: 3
              }
            },
            992: {
              slidesPerView: 3,
              grid: {
                fill: 'row',
                rows: 3
              }
            }
          }"
        >
          <swiper-slide v-for="sp in specials">
            <a :href="$filters.addGALink(sp.url)" target="_blank">
              <img :src="$filters.siteUrl(sp.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </section>

    <!-- 品牌 -->
    <section class="brand-box scroll" id="brand">
      <h2 class="title">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bra_s2.png')" alt="" />
      </h2>

      <ul class="tab">
        <swiper
          class="w:full overflow:hidden"
          :space-between="10"
          :breakpoints="{
            0: {
              slidesPerView: 3,
              grid: {
                fill: 'row',
                rows: 4
              }
            },
            600: {
              slidesPerView: 4.1,
              grid: {
                fill: 'row',
                rows: 3
              }
            },
            992: {
              slidesPerView: 6.25,
              grid: {
                fill: 'row',
                rows: 2
              }
            }
          }"
        >
          <swiper-slide
            v-for="(brand, b) in brands"
            class="brightness(0.65) brightness(1).active"
            :class="[statusBrand == b ? 'active' : '']"
          >
            <a @click="changeBrand(b, brand.menu)">
              <img :src="$filters.siteUrl(brand.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </ul>

      <div class="brand-content" v-for="(brand, b) in brands" v-show="statusBrand == b">
        <a
          v-if="b != 10"
          class="banner w:100% mb:1%"
          :href="$filters.addGALink(brand.url)"
          target="_blank"
        >
          <img class="pc" :src="$filters.siteUrl(brand.pc)" alt="" />
          <img class="mobile" :src="$filters.siteUrl(brand.mobile)" alt="" />
        </a>
        <component
          :is="listF"
          :pro="product2[brand.menu]"
          :isSwiper="1"
          :name="`brand${b + 1}`"
        ></component>
      </div>
    </section>

    <!-- 熱銷空調首選 -->
    <section class="hot-group scroll" id="hot">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://www.tk3c.com/search.aspx?q=%E7%A9%BA%E8%AA%BF')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bra_s3.png')" alt="" />
        </a>
      </h2>

      <component :is="listF" :pro="product2[menuHot]" :isSwiper="1" :name="'hot'"></component>
    </section>

    <!-- 冷暖空調 -->
    <section class="cold-group scroll" id="cold">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://www.tk3c.com/dictitleurl.aspx?cid=11225')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bra_s4.png')" alt="" />
        </a>
      </h2>

      <component :is="listF" :pro="product2[menuCold]"></component>
    </section>

    <!-- 除濕機 -->
    <section class="wet-group scroll" id="wet">
      <h2 class="title">
        <a
          :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=71323&aid=16881')"
          target="_blank"
        >
          <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bra_s8.png')" alt="" />
        </a>
      </h2>

      <component :is="listF" :pro="product2[menuWet]"></component>
    </section>

    <!-- 熊速配專區 -->
    <section class="bear-box scroll" id="bear">
      <h2 class="title">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2303/pro_title.jpg')" />
      </h2>
      <div class="bear">
        <component :is="listF" :pro="product2[menuBear]" :isSwiper="1" :name="'bear'"></component>
        <a
          class="more"
          :href="$filters.addGALink('https://www.tk3c.com/dic1.aspx?cid=11225&aid=23421')"
          target="_blank"
          >點我看更多</a
        >
      </div>
    </section>

    <!-- 政府補助 -->
    <section class="sub-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('airConditionerLAB/images/2410/bar_b.png')" alt="" />
      </h2>

      <ul>
        <li class="long">
          <a
            :href="
              $filters.addGALink('https://events.tk3c.com/events_net/greenpoint.tk3c/index.html')
            "
            target="_blank"
          >
            <img :src="$filters.siteUrl('airConditionerLAB/images/2410/b01.png')" alt="" />
          </a>
        </li>
        <li class="alert1">
          <a @click="message(2)">
            <img :src="$filters.siteUrl('airConditionerLAB/images/2410/b02.png')" />
          </a>
        </li>
        <li class="alert2">
          <a @click="message(3)">
            <img :src="$filters.siteUrl('airConditionerLAB/images/2410/b03.png')" />
          </a>
        </li>
      </ul>
    </section>

    <!-- 尊榮安裝 -->
    <section class="air-info scroll">
      <a
        id="vvip"
        :href="
          $filters.addGALink('https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2')
        "
        target="_blank"
      >
        <img class="pc" :src="$filters.siteUrl('airConditionerLAB/images/2405/vvip.png')" />
        <img
          class="mobile"
          :src="$filters.siteUrl('airConditionerLAB/images/2402/vvip_br_m.png')"
        />
      </a>
    </section>

    <section class="info-box">
      <div class="content">
        <ul class="tab">
          <swiper
            id="infoTab"
            :space-between="10"
            :breakpoints="{
              0: {
                slidesPerView: 2.5
              },
              600: {
                slidesPerView: 3.6
              },
              992: {
                slidesPerView: 5
              }
            }"
            :modules="[Controller]"
            :controller="{
              control: [infoContent]
            }"
            @swiper="onSwiper"
          >
            <swiper-slide
              v-for="(info, i) in infos[0]"
              :class="[statusInfo == i ? 'active' : '']"
              @click="goSlide(i)"
            >
              <a @click="changeInfo(i)"><img :src="$filters.siteUrl(info[0].tab)" alt="" /></a>
            </swiper-slide>
          </swiper>
        </ul>
        <img class="tab-bg" :src="$filters.siteUrl('airConditionerLAB/images/2402/b_bg.png')" />
        <div class="move-area">
          <swiper
            :loop="false"
            :autoHeight="true"
            :effect="'fade'"
            :parallax="true"
            :modules="[EffectFade, Controller, Parallax]"
            id="infoContent"
            @swiper="onControlSwiper"
            @slideChange="onSlideChange"
          >
            <swiper-slide v-for="(info, i) in infos[0]">
              <a
                data-swiper-parallax-opacity="0"
                :href="
                  $filters.addGALink(
                    'https://www.tk3c.com/mobile/mob_appointment_page.aspx?BookType=type2'
                  )
                "
              >
                <img class="pc scale(1.1)" :src="$filters.siteUrl(info[0].pc)" alt="" />
                <img class="mobile mt:-5%@<992" :src="$filters.siteUrl(info[0].mobile)" alt="" />
              </a>
            </swiper-slide>
          </swiper>
        </div>
      </div>
    </section>

    <!-- 更多費用 -->
    <section class="info2-box">
      <div class="description">
        <p>
          <img class="pc" :src="$filters.siteUrl('airConditionerLAB/images/2402/c01.png')" />
          <img class="mobile" :src="$filters.siteUrl('airConditionerLAB/images/2402/c01_m.png')" />
        </p>

        <a class="alert" @click="message(4)"
          ><img :src="$filters.siteUrl('airConditionerLAB/images/2402/c_bn.png')" />
        </a>
      </div>
    </section>

    <!-- banner -->
    <section class="event-box">
      <swiper
        class="pb:1%"
        :loop="true"
        :autoplay="{
          delay: 1800,
          disableOnInteraction: false
        }"
        :pagination="{
          el: '.event-box .swiper-pagination',
          clickable: true
        }"
      >
        <swiper-slide v-for="event in events">
          <a :href="$filters.addGALink(event.url)" target="_blank">
            <img :src="$filters.siteUrl(event.image)" alt="" />
          </a>
        </swiper-slide>
      </swiper>
      <div class="swiper-pagination"></div>
    </section>

    <section
      class="tab-area scroll"
      v-for="(floor, f) in floors[0]"
      :class="`tab${Number(f) + 1}-box`"
      :id="`tab${Number(f) + 1}`"
    >
      <h2 class="title">
        <a :href="$filters.addGALink(floor[0].url)" target="_blank">
          <img :src="$filters.siteUrl(floor[0].title)" />
        </a>
      </h2>

      <div class="content">
        <div v-if="floor[0].content != undefined">
          <ul class="tab">
            <li v-for="(content, c) in floor[0].content" :class="[statusTab == c ? 'active' : '']">
              <a @click="changeTab(c, content.menu)">
                <img :src="$filters.siteUrl(content.image)" alt="" />
              </a>
            </li>
          </ul>

          <div class="tab-content" v-for="(content, c) in floor[0].content" v-show="statusTab == c">
            <component :is="listF" :pro="product2[content.menu]"></component>
          </div>
        </div>
        <component v-else :is="listF" :pro="product2[floor[0].menu]"></component>
      </div>
    </section>

    <!-- 影片 -->
    <component :is="AirVideo"></component>
  </div>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul>
          <li><a href="#brand">強檔大牌</a></li>
          <li><a href="#hot">熱銷空調首選</a></li>
          <li><a href="#cold">冷暖空調</a></li>
          <li><a href="#wet">除濕機</a></li>
          <li><a href="#bear">熊速配專區</a></li>
          <li><a href="#vvip">VVIP尊榮安裝</a></li>
          <li><a href="#tab1">分離式空調</a></li>
          <li><a href="#tab2">窗型空調</a></li>
          <li><a href="#tab3">移動式冷氣</a></li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>
</template>
