<script setup>
import listF from '../../layout/listF.vue'
import { Parallax, EffectFlip, EffectFade } from 'swiper/modules'
import banner from '../../layout/banner.vue'
import mobileAi from '../../layout/mobileAi.vue'
import AllEvent from '../../../components/AllEvent.vue' //全站活動
import { ref } from 'vue'

const swiperRef = ref()

const onSwiper = (swiper) => {
  swiperRef.value = swiper
}

const goSlide = (id) => {
  swiperRef.value.slideTo(id)
}
</script>

<script>
import { globalMixin } from '../../../globalMixin.js'

export default {
  mixins: [globalMixin],
  data() {
    return {
      tab1: [
        {
          0: [
            {
              title: '2024083C/images/2411/S02.png',
              asidetext: '輕薄商務',
              asideUrl: '#tab1',
              menu: [7267, 7268],
              content: [
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11124',
                  image: '2024083C/images/2411/S02-1.png'
                },
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=11124',
                  image: '2024083C/images/2411/S02-2.png'
                }
              ]
            }
          ],
          1: [
            {
              title: '2024083C/images/2411/S03.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
              asidetext: '飆速電競',
              asideUrl: '#tab2',
              menu: [7269, 7270, 7271],
              content: [
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
                  image: '2024083C/images/2411/S03-1.png'
                },
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
                  image: '2024083C/images/2411/S03-2.png'
                },
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
                  image: '2024083C/images/2411/S03-3.png'
                }
              ]
            }
          ],
          2: [
            {
              title: '2024083C/images/2411/S05.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
              asidetext: '特仕改裝升級',
              asideUrl: '#tab3',
              menu: [7272, 7273, 7274],
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
                  image: '2024083C/images/2411/S05-1.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
                  image: '2024083C/images/2411/S05-2.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
                  image: '2024083C/images/2411/S05-3.png'
                }
              ]
            }
          ],
          3: [
            {
              title: '2024083C/images/2411/S06.png',
              asidetext: '精選螢幕',
              asideUrl: '#tab4',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=44823',
              menu: [7275, 7276],
              content: [
                {
                  image: '2024083C/images/2411/S06-1.png'
                },
                {
                  image: '2024083C/images/2411/S06-2.png'
                }
              ]
            }
          ],
          4: [
            {
              title: '2024083C/images/2411/S07.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=114130',
              asidetext: '高效桌機',
              asideUrl: '#tab5',
              menu: [7277, 7278],
              content: [
                {
                  image: '2024083C/images/2411/S07-1.png'
                },
                {
                  image: '2024083C/images/2411/S07-2.png'
                }
              ]
            }
          ],
          5: [
            {
              title: '2024083C/images/2411/S08.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117896',
              asidetext: 'DIY零組件',
              asideUrl: '#tab6',
              menu: [7279, 7280, 7281],
              content: [
                {
                  image: '2024083C/images/2411/S08-1.png'
                },
                {
                  image: '2024083C/images/2411/S08-2.png'
                },
                {
                  image: '2024083C/images/2411/S08-3.png'
                }
              ]
            }
          ]
        }
      ],
      tab2: [
        {
          0: [
            {
              title: '2024083C/images/2411/D01.png',
              url: 'https://events.tk3c.com/events_net/tk3c_fastdelivery/index.html',
              menu: 7357,
              asidetext: '速速Go',
              asideUrl: '#tab7'
            }
          ],
          1: [
            {
              title: '2024083C/images/2411/D02.png',
              url: 'hhttps://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122073',
              asidetext: 'Wi-Fi路由器',
              asideUrl: '#tab8',
              menu: [7285, 7282, 7284, 7283],
              content: [
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122073',
                  image: '2024083C/images/2411/D02-1.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=43403&aid=17260',
                  image: '2024083C/images/2411/D02-2.png'
                },
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122542',
                  image: '2024083C/images/2411/D02-3.png'
                },
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122073',
                  image: '2024083C/images/2411/D02-4.png'
                }
              ]
            }
          ],
          2: [
            {
              title: '2024083C/images/2411/D03.png',
              asidetext: 'DIY組裝機',
              asideUrl: '#tab9',
              menu: [7278, 7278],
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=10020',
                  image: '2024083C/images/2411/D03-1.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=6040',
                  image: '2024083C/images/2411/D03-2.png'
                }
              ]
            }
          ],
          3: [
            {
              title: '2024083C/images/2411/D04.png',
              asidetext: '鍵盤滑鼠',
              asideUrl: '#tab10',
              menu: [7286, 7287],
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=10020',
                  image: '2024083C/images/2411/D04-1.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=6040',
                  image: '2024083C/images/2411/D04-2.png'
                }
              ]
            }
          ],
          4: [
            {
              title: '2024083C/images/2411/D05.png',
              asidetext: '硬碟',
              asideUrl: '#tab11',
              menu: [7288, 7289],
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=117896&aid=23571',
                  image: '2024083C/images/2411/D05-1.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=117896&aid=22551',
                  image: '2024083C/images/2411/D05-2.png'
                }
              ]
            }
          ],
          5: [
            {
              title: '2024083C/images/2411/D06.png',
              asidetext: '隨身碟/記憶卡',
              asideUrl: '#tab12',
              menu: [7290, 7291],
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12356&aid=4855',
                  image: '2024083C/images/2411/D06-1.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12356&aid=4853',
                  image: '2024083C/images/2411/D06-2.png'
                }
              ]
            }
          ],
          6: [
            {
              title: '2024083C/images/2411/D08.png',
              asidetext: '投影機/監控設備',
              asideUrl: '#tab13',
              menu: [7292, 7293],
              content: [
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
                  image: '2024083C/images/2411/D08-1.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=43403&aid=11545',
                  image: '2024083C/images/2411/D08-2.png'
                }
              ]
            }
          ],
          7: [
            {
              title: '2024083C/images/2411/D09.png',
              asidetext: '辦公設備',
              asideUrl: '#tab14',
              menu: [7294, 7295, 7296, 7297],
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11684&aid=4762',
                  image: '2024083C/images/2411/D09-1.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=22323',
                  image: '2024083C/images/2411/D09-2.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11684&aid=4761',
                  image: '2024083C/images/2411/D09-3.png'
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=22325',
                  image: '2024083C/images/2411/D09-4.png'
                }
              ]
            }
          ],
          8: [
            {
              title: '2024083C/images/2411/E01.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=44823&aid=22525&hid=121385',
              menu: 7298,
              asidetext: '出清搶便宜',
              asideUrl: '#tab15'
            }
          ]
        }
      ],
      status: 0,
      pro: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=218927',
          image: '2024083C/images/2411/218927_b.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=250262',
          image: '2024083C/images/2411/250262_b.png'
        },
        { url: 'https://www.tk3c.com/pt.aspx?pid=250986', image: '2024083C/images/2411/250986.png' }
      ],
      gifts: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123020',
          image: '2024083C/images/2411/NB04.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123019',
          image: '2024083C/images/2411/NB05.png'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=123018',
          image: '2024083C/images/2411/NB06.png'
        }
      ],
      banner1: [
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=5261',
          image: '2024083C/images/2411/bn_lenovo.jpg'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=120108',
          image: '202404_green/images/bn_nbsaleM.jpg'
        }
      ],
      banner2: [
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=4770',
          image: '2024083C/images/2411/bn_msi.jpg'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
          image: '202404_green/images/bn_tesnbM.jpg'
        }
      ],
      sales: [
        {
          image: '2024083C/images/2411/D01-3.png'
        },
        {
          image: '2024083C/images/2411/D01-2.png'
        }
      ],
      menuSale: [7599, 7600],
      menuSale13: 7612,
      tabStatus: null,
      statusPro: 0,
      tabs: [],
      statusGift: 0,
      statusSale: 0,
      isSale: true,
      today: new Date()
    }
  },
  mounted() {
    const { tab1, tab2, today } = this

    //撈取筆電區樓層商品
    for (const [t, t1] of Object.entries(tab1[0])) {
      this.getFloorData(t1[0].menu)
    }

    //撈取周邊區樓層商品
    for (const [t, t2] of Object.entries(tab2[0])) {
      if (t2[0].content != undefined) {
        this.getFloorData(t2[0].menu)
      } else {
        this.getFloorSingle(t2[0].menu)
      }
    }

    //預設顯示頁籤第一個內容
    setTimeout(() => {
      $all('.tab-area').forEach((tab, t) => {
        if (tab.querySelectorAll('.tab-content').length > 0) {
          tab.querySelectorAll('.tab-content')[0].style.display = 'block'
        }
      })
    }, 60)

    //折價券樓層
    if (today >= new Date('2024/11/13')) {
      this.getFloorSingle(this.menuSale13)
    } else {
      this.getFloorData(this.menuSale)
    }
  },
  methods: {
    //應援指南頁籤切換
    changeGift(id) {
      this.statusGift = id
    },
    change(id) {
      if (event) {
        let current = event.currentTarget,
          parentAr = current.parentNode.parentNode.parentNode.parentNode,
          parentClass = parentAr.getAttribute('class'),
          parentName = parentClass.substr(16),
          getUrl = current.getAttribute('href')

        setTimeout(() => {
          this.showAndHide(id, `.${parentName}`)
          parentAr.querySelector('.title a').setAttribute('href', getUrl)
        }, 20)
      }
    },
    changeSale(id) {
      if (event) {
        setTimeout(() => {
          this.statusSale = id
        }, 22)
      }
    },
    goNB(element) {
      if (element == '#tab5') {
        //跳轉到組裝機樓層
        this.statusGift = 0

        setTimeout(() => {
          $all('.tab5-box li').forEach((el, t) => {
            el.classList.remove('active')
            $all('.tab5-box li')[1].classList.add('active')
          })
          $all('.tab5-box .tab-content').forEach((el, t) => {
            el.style.display = 'none'
            $all('.tab5-box .tab-content')[1].style.display = 'block'
          })

          goAnchor(element)
        }, 50)

        return false
      }

      //前往錨點
      let el = document.querySelector(element),
        rect = el.getBoundingClientRect(),
        move = rect.top + window.scrollY

      setTimeout(() => {
        window.scrollTo({
          top: move - 100,
          behavior: 'smooth'
        })
      }, 100)
    },
    alert(id) {
      //活動辦法
      let infoHtml = ''

      switch (id) {
        //筆電
        case 1:
          infoHtml = `
          <ul style='text-align:left;'>
            <li style='margin-bottom:15px;'>【活動一】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/11/1-11/30)，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2024/12/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽出1名送抽 Apple Watch S10 GPS 46mm 曜石黑鋁/墨水運動錶環 (市價$14,500，1名)​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.得獎名單將於2024/12/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a href="https://www.facebook.com/TDdd331" style="color:blue;text-decoration:underline;">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li style='margin-bottom:10px;'>3.得獎者請於2024/12/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
             <li style='margin-bottom:10px;'>4.經核對無誤後，燦坤3C將於2025/1/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
               <li style='margin-bottom:10px;'>5.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
                 <li style='margin-bottom:10px;'>6.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:30px;'>7.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

              <li style='margin-bottom:15px;'>【活動二】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/11/1-11/30)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$30,000，並於線上完成付款且後續未退貨退款者，並於2024/11/4(含)前至指定活動頁面完成登記申請，送Razer LEVIATHAN V2X利維坦巨獸喇叭 (市價$3,499，10名)​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.經核對無誤後，燦坤3C將於2024/12/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
               <li style='margin-bottom:10px;'>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:10px;'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

              <li style='margin-bottom:15px;'>【活動三】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/11/1-11/30)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$9,999，並於線上完成付款且後續未退貨退款者，並於2024/12/4(含)前至指定活動頁面完成登記申請，送Logitech MK295 無線靜音鍵鼠組-石墨灰 (市價$990，10名)。請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>1.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>2.經核對無誤後，燦坤3C將於2024/12/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>3.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
             <li style='margin-bottom:10px;'>4.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:10px;'>5.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

              <li style='margin-bottom:20px;color:red;font-weight:bold:bold;'>【活動二、三可擇一登記，無法累積贈送。如重複登記，燦坤保有所送贈品之決定權】</li>
        </ul>
        `
          break

        //DIY / 週邊
        case 2:
          infoHtml = `
        <ul style='text-align:left;'>
          <li style='margin-bottom:15px;'>【活動一】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/11/1-11/30)，於燦坤線上購物網站購買「全館任一網路設備/儲存卡碟/監控攝影機商品(含網路分享器/路由器、網路交換器/集線器、網路線、網路卡、硬碟、隨身碟、記憶卡、網路監控攝影機，下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，單筆發票消費金額滿$1,000，並於2024/12/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽頭獎- SONY WH-1000XM5 真無線藍牙耳機-黑 (市價$11,900，共1名) ; 二獎- Panasonic 6L 除濕機 (市價$7,090，1名) ; 三獎- Google TV Streamer (4K) (市價$3,250，1名)​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.得獎名單將於2024/12/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a href="https://www.facebook.com/TDdd331" style="color:blue;text-decoration:underline;">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li style='margin-bottom:10px;'>4.得獎者請於2024/12/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
              <li style='margin-bottom:10px;'>5.經核對無誤後，燦坤3C將於2025/1/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
               <li style='margin-bottom:10px;'>6.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
                 <li style='margin-bottom:10px;'>7.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:30px;'>8.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

               <li style='margin-bottom:15px;'>【活動二】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/11/1-11/30)內，於燦坤線上購物網站購買「全館任一DIY組裝電腦、內/外接硬碟(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2024/12/4(含)前至指定活動頁面完成登記申請，抽Intel Nuc迷你桌機 (市價$6,990，1名)​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.得獎名單將於2024/12/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a href="https://www.facebook.com/TDdd331" style="color:blue;text-decoration:underline;">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
                 <li style='margin-bottom:10px;'>4.得獎者請於2024/12/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
                 <li style='margin-bottom:30px;'>5.經核對無誤後，燦坤3C將於2025/1/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
                 <li style='margin-bottom:30px;'>6.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
                  <li style='margin-bottom:30px;'>7.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:30px;'>8.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

              <li style='margin-bottom:15px;'>【活動三】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/11/1-11/30)內，於燦坤線上購物網站購買「全館任一投影機(不包含輕劇院商品，下稱活動指定商品)」，單筆發票消費金額滿$8,000，並於線上完成付款且後續未退貨退款者，並於2024/12/4(含)前至指定活動頁面完成登記申請，送SodaStream Spirit 氣泡水機(珊瑚橘) (市價$4,500，6名)。​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.經核對無誤後，燦坤3C將於2025/1/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
                 <li style='margin-bottom:10px;'>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:10px;'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>`
          break
      }

      Swal.fire({
        width: 900,
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
  <div id="ai-container">
    <div class="background">
      <h2 class="title animate__animated animate__rollIn">
        <img :src="$filters.siteUrl('2024083C/images/2411/title2.png')" />
      </h2>
      <h5 class="subtitle">
        <swiper
          :loop="false"
          :autoplay="{
            delay: 1400,
            disableOnInteraction: false
          }"
          :effect="'flip'"
          :flipEffect="{
            slideShadows: false,
            limitRotation: false
          }"
          :modules="[EffectFlip]"
        >
          <swiper-slide>
            <img :src="$filters.siteUrl('2024083C/images/2411/sub1.png')" />
          </swiper-slide>
          <swiper-slide v-if="today < new Date('2024/11/13')">
            <img :src="$filters.siteUrl('2024083C/images/2411/sub2.png')" />
          </swiper-slide>
        </swiper>
      </h5>

      <div class="product">
        <swiper
          :loop="true"
          :effect="'fade'"
          :parallax="true"
          :autoplay="{ delay: 1800, disableOnInteraction: false }"
          :modules="[Parallax, EffectFade]"
        >
          <swiper-slide v-for="p in pro" class="flex!">
            <a :href="$filters.addGALink(p.url)" target="_blank" data-swiper-parallax-y="-2000">
              <img :src="$filters.siteUrl(p.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <!--  指南 -->
    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2024083C/images/2411/gift_title.png')" />
      </h2>

      <ul class="tab m:0|auto|1% m:0|auto|2%@<992 gap:10 gap:15@<576">
        <li
          class="w:32% w:45vw@<992 w:80vw@<576"
          :class="[statusGift == 0 ? 'active' : '']"
          :value="statusGift"
        >
          <a @click="changeGift(0)">
            <img :src="$filters.siteUrl('2024083C/images/2411/tab1.png')"
          /></a>
        </li>
        <li
          class="w:32% w:45vw@<992 w:80vw@<576"
          :class="[statusGift == 1 ? 'active' : '']"
          :value="statusGift"
        >
          <a @click="changeGift(1)">
            <img :src="$filters.siteUrl('2024083C/images/2411/tab2.png')"
          /></a>
        </li>
      </ul>

      <!-- 筆電 -->
      <div class="tab-content" v-if="statusGift == 0">
        <ul class="w:90% gap:10 w:full@<992 mb:2% overflow:hidden">
          <li class="w:44% w:45vw@<992 w:92vw@<576">
            <a href="#sale">
              <img
                v-if="today < new Date('2024/11/13')"
                :src="$filters.siteUrl('2024083C/images/2411/NB01.png')"
              />
              <img
                v-if="today >= new Date('2024/11/13')"
                :src="$filters.siteUrl('2024083C/images/2411/NB01_2.png')"
              />
            </a>
          </li>
          <li class="w:44% w:45vw@<992 w:92vw@<576">
            <a
              :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')"
              target="_blank"
              ><img :src="$filters.siteUrl('2024083C/images/2411/NB02.png')"
            /></a>
          </li>
          <li class="w:89% w:91vw@<992">
            <a
              :href="$filters.addGALink('https://www.tk3c.com/events/eventgift.aspx')"
              target="_blank"
              ><img :src="$filters.siteUrl('2024083C/images/2411/NB03.png')"
            /></a>
          </li>
          <li class="w:44% w:45vw@<992 w:92vw@<576">
            <swiper
              class="overflow:hidden"
              :loop="false"
              :space-between="10"
              :breakpoints="{
                0: {
                  slidesPerView: 2.2
                },
                600: {
                  slidesPerView: 3
                },
                992: {
                  slidesPerView: 3
                }
              }"
            >
              <swiper-slide v-for="(gift, g) in gifts">
                <a :href="$filters.addGALink(gift.url)" target="_blank">
                  <img :src="$filters.siteUrl(gift.image)" />
                </a>
              </swiper-slide>
            </swiper>
          </li>
          <li class="w:44% w:45vw@<992 w:92vw@<576">
            <a
              :href="
                $filters.addGALink('https://www.tk3c.com/dic2.aspx?cid=121466&aid=23847&hid=123246')
              "
              target="_blank"
              ><img :src="$filters.siteUrl('2024083C/images/2411/NB07.png')"
            /></a>
          </li>
        </ul>
        <a class="w:25% w:35vw@<992 w:50vw@<576 m:auto" @click="alert(1)">
          <img :src="$filters.siteUrl('2024083C/images/2411/info_b.png')" />
        </a>
      </div>

      <!-- 週邊 -->
      <div class="tab-content" v-if="statusGift == 1">
        <ul class="gap:10 mb:2%">
          <li class="rel w:81% w:92vw@<992">
            <a @click="goNB('#tab8')">
              <img :src="$filters.siteUrl('2024083C/images/2411/DIY01.png')" />
            </a>
          </li>
          <li class="w:40% w:46vw@<992 w:92vw@<576">
            <a @click="goNB('#tab5')" class="mb:2%@<576">
              <img :src="$filters.siteUrl('2024083C/images/2411/DIY02.png')" />
            </a>
          </li>
          <li class="w:40% w:45vw@<992 w:92vw@<576">
            <a @click="goNB('#tab13')" class="mb:2%@<576">
              <img :src="$filters.siteUrl('2024083C/images/2411/DIY03.png')" />
            </a>
          </li>
        </ul>
        <a @click="alert(2)" class="w:25% w:35vw@<992 w:50vw@<576 m:auto">
          <img :src="$filters.siteUrl('2024083C/images/2411/info_r.png')" />
        </a>
      </div>
    </section>

    <AllEvent></AllEvent>

    <div class="pro-group">
      <!-- 筆電樓層區 -->
      <div v-show="statusGift == 0" class="product-area pro1">
        <!-- 狂撒百萬折價券 -->
        <section class="sale-box" v-if="today < new Date('2024/11/13')" id="sale">
          <h2 class="title">
            <a
              :href="
                $filters.addGALink(
                  'https://www.tk3c.com/dic2.aspx?cid=123970&aid=23887&hid=124011&strPreView=y'
                )
              "
              target="_blank"
            >
              <img :src="$filters.siteUrl('2024083C/images/2411/S01.png')" />
            </a>
          </h2>
          <div class="tab">
            <swiper
              :loop="false"
              :space-between="10"
              :breakpoints="{
                0: {
                  slidesPerView: 2.3
                },
                600: {
                  slidesPerView: 3
                },
                992: {
                  slidesPerView: 4
                }
              }"
              @swiper="onSwiper"
            >
              <swiper-slide
                v-for="(sale, s) in sales"
                :class="[statusSale == s ? 'active' : '']"
                class="brightness(0.7) brightness(1).active"
                @click="goSlide(s)"
              >
                <a @click="changeSale(s)">
                  <img :src="$filters.siteUrl(sale.image)" />
                </a>
              </swiper-slide>
            </swiper>
          </div>

          <div
            v-for="(sale, s) in sales"
            :class="[statusSale == s ? 'active' : '']"
            class="box"
            v-show="statusSale == Number(s)"
          >
            <component
              v-if="products[menuSale[s]] != undefined"
              :is="listF"
              :pro="products[menuSale[s]].Data"
              :isSwiper="1"
              :name="'sale'"
            >
            </component>
          </div>
        </section>

        <!-- 11/13 更換現折券樓層 -->
        <section v-if="today >= new Date('2024/11/13')" class="sale-box" id="sale">
          <h2 class="title">
            <a
              :href="
                $filters.addGALink(
                  'https://www.tk3c.com/dic2.aspx?cid=124026&aid=23890&hid=124040&strPreView=y'
                )
              "
              target="_blank"
            >
              <img :src="$filters.siteUrl('2024083C/images/2411/S01_2.png')" />
            </a>
          </h2>

          <div class="sales">
            <component :is="listF" :pro="product2[menuSale13]" :isSwiper="1" :name="'sale'">
            </component>
          </div>
        </section>

        <section
          class="tab-area scroll"
          v-for="(t1, t) in tab1[0]"
          :class="`tab${Number(t) + 1}-box`"
          :id="`tab${Number(t) + 1}`"
        >
          <h2 class="title">
            <a
              v-if="t1[0].content != undefined"
              :href="$filters.addGALink(t1[0].content[0].url)"
              target="_blank"
            >
              <img :src="$filters.siteUrl(t1[0].title)" alt="" />
            </a>
            <a v-else :href="$filters.addGALink(t1[0].url)">
              <img :src="$filters.siteUrl(t1[0].title)" alt="" />
            </a>
          </h2>

          <div v-if="t1[0].content != undefined">
            <ul class="tab">
              <li v-for="(content, c) in t1[0].content" :class="[statusPro == c ? 'active' : '']">
                <a :href="$filters.addGALink(content.url)" @click.prevent="change(c)">
                  <img :src="$filters.siteUrl(content.image)" alt="" />
                </a>
              </li>
            </ul>

            <div class="tab-content" v-for="(content, c) in t1[0].content" v-show="statusPro == c">
              <component
                v-if="products[t1[0].menu[c]] != undefined"
                :is="listF"
                :pro="products[t1[0].menu[c]].Data"
              >
              </component>
            </div>
          </div>

          <div v-else>
            <component :is="listF" :pro="product2[t1[0].menu]" :isSwiper="1" :name="'pro'">
            </component>
          </div>
        </section>
      </div>

      <!-- 週邊樓層區 -->
      <div v-show="statusGift == 1" class="product-area pro2">
        <section
          class="tab-area scroll"
          v-for="(t2, t) in tab2[0]"
          :class="`tab${Number(t) + 7}-box`"
          :id="`tab${Number(t) + 7}`"
        >
          <h2 class="title">
            <a
              v-if="t2[0].content != undefined"
              :href="$filters.addGALink(t2[0].content[0].url)"
              target="_blank"
            >
              <img :src="$filters.siteUrl(t2[0].title)" alt="" />
            </a>
            <a v-else :href="$filters.addGALink(t2[0].url)">
              <img :src="$filters.siteUrl(t2[0].title)" alt="" />
            </a>
          </h2>

          <div v-if="t2[0].content != undefined">
            <ul class="tab">
              <li v-for="(content, c) in t2[0].content" :class="[statusPro == c ? 'active' : '']">
                <a :href="$filters.addGALink(content.url)" @click.prevent="change(c)">
                  <img :src="$filters.siteUrl(content.image)" alt="" />
                </a>
              </li>
            </ul>

            <div class="tab-content" v-for="(content, c) in t2[0].content" v-show="statusPro == c">
              <component
                v-if="products[t2[0].menu[c]] != undefined"
                :is="listF"
                :pro="products[t2[0].menu[c]].Data"
              >
              </component>
            </div>
          </div>

          <div v-else>
            <component :is="listF" :pro="product2[t2[0].menu]" :isSwiper="1" :name="'pro'">
            </component>
          </div>
        </section>
      </div>
    </div>

    <!-- 熱門活動 -->
    <component
      :is="banner"
      :banner1="banner1"
      :banner2="banner2"
      :title="'2024083C/images/2411/E02.png'"
    ></component>
  </div>

  <!-- 右側選單 -->
  <aside class="aside-container">
    <span class="collaspe"><i class="fas fa-chevron-right"></i></span>
    <div class="aside-wrap">
      <h3 class="aside-header"></h3>
      <div class="aside-content">
        <ul class="a1" v-if="statusGift == 0">
          <li v-for="t1 in tab1[0]">
            <a :href="t1[0].asideUrl">{{ t1[0].asidetext }}</a>
          </li>
          <li><a href="#event">熱門活動 </a></li>
        </ul>
        <ul class="a2" v-if="statusGift == 1">
          <li v-for="t2 in tab2[0]">
            <a :href="t2[0].asideUrl">{{ t2[0].asidetext }}</a>
          </li>
          <li><a href="#event">熱門活動 </a></li>
        </ul>
      </div>
      <a href="#" class="go-top">GO TOP</a>
    </div>
  </aside>

  <!-- 手機版選單 -->
  <mobileAi v-model:status="statusGift" v-model:tab1="tab1" v-model:tab2="tab2"></mobileAi>
</template>

<style lang="scss">
@charset "utf-8";

@import '@/assets/sass/module/base';
$dir: 'https://events.cdn-tkec.tw/events_net/events_net/2024083C/images/2411/';
$origin: 'https://events.tk3c.com/events_net/events_net/2024083C/images/2411/';

/*  共用樣式調整 */
body {
  background: #000;
}

form#form1 {
  position: relative;
  &:before {
    content: '';
    width: 100%;
    height: 100%;
    display: block;
    $image: $dir + 'BG.png';
    background: url($image) repeat-y center;
    background-size: 100% auto;
    background-position:
      0 0,
      top;
    position: absolute;
    left: 0;
    right: 0;
    margin: 0 auto;
    top: 0;
    z-index: -2;
  }
}

.bg01 {
  background: none;
  position: relative;
}

.item {
  top: 350px;
}

#ai-container {
  width: 100%;
  margin: 0 auto;
  position: relative;

  .background {
    $image: $dir + 'KV.png';
    @include bg-responsive($image, 2000, 1031);
    position: relative;
    margin: 0 auto 0;
    background-position:
      0 45px,
      top;
    padding-bottom: 58%;
    animation: light 4s infinite;
    .title {
      width: 30%;
      position: absolute;
      left: 22%;
      top: 13%;
      animation-duration: 1.7s;
    }
    .subtitle {
      width: 25%;
      position: absolute;
      left: 25%;
      top: 60%;
    }
    .product {
      width: 22%;
      position: absolute;
      right: 23%;
      top: 17%;
      animation: slide-down 2.4s ease-in;
    }
  }
}

.gift-box {
  margin: -9.7% auto 5%;
  .title {
    width: 22%;
    margin: 0 auto 6%;
  }
  .tab {
    li {
      filter: brightness(0.6);
      &.active {
        filter: brightness(1);
      }
    }
  }
}

.tab-area {
  .tab {
    li {
      width: auto;
      margin: 0 5px;
      filter: hue-rotate(0);
      filter: brightness(0.7);
      &.active {
        filter: brightness(1);
      }
    }
  }
}

.sale-box {
  .tab {
    .swiper-wrapper {
      justify-content: center;
    }
  }
}

.sale-box {
  .box {
    &.active {
      animation: hide-and-show 1s linear;
    }
  }
}

/*  電腦版其他尺寸 */
@include media-query('mobile', '1600px') {
  .gift-box {
    margin: -9.3% auto 5%;
  }
}
@include media-query('mobile', '1440px') {
  .gift-box {
    margin: -9% auto 5%;
  }
}
@include media-query('mobile', '992px') {
  #ai-container {
    .background {
      background-size: 145% auto;
      background-position:
        -23vw 4vw,
        top;
      padding-bottom: 77vw;
      .title {
        width: 40vw;
        left: 14vw;
        top: 13vw;
      }
      .subtitle {
        width: 35vw;
        left: 16vw;
        top: 50vw;
      }
      .product {
        width: 33vw;
        right: 11vw;
        top: 14vw;
      }
    }
  }

  .gift-box {
    margin: -7vw auto 5%;
    .title {
      width: 25vw;
    }
  }

  .tab-area {
    .tab {
      li {
        width: 38vw;
      }
    }
  }

  .tab2-box,
  .tab3-box {
    .tab {
      li {
        width: 30vw;
      }
    }
  }

  .tab9-box,
  .tab15-box {
    .tab {
      margin-bottom: 0;
      li {
        width: 35vw;
        margin: 0 5px 2%;
      }
    }
  }
}

/* 手機版 */
@include media-query('mobile', '576px') {
  .fix_btn {
    display: block;
    .dropdown-menu {
      display: none;
    }
  }

  #ai-container {
    .background {
      background-size: 400% auto;
      background-position:
        -118vw 22vw,
        top;
      padding-bottom: 200vw;
      .title {
        width: 80vw;
        left: 0;
        top: 27vw;
        right: 0;
        margin: 0 auto;
      }
      .subtitle {
        width: 65vw;
        left: 0;
        right: 0;
        top: 98vw;
        margin: 0 auto;
      }
      .product {
        width: 70vw;
        right: 0;
        top: 114vw;
        left: 0;
        margin: 0 auto;
      }
    }
  }

  .gift-box {
    margin: 8vw auto 5%;
    .title {
      width: 50vw;
      padding: 2%;
      box-sizing: border-box;
      background: #fff;
    }
  }

  .tab-area {
    .tab {
      margin-bottom: 0;
      li {
        width: 42vw;
        margin: 0 5px 3%;
      }
    }
  }

  .tab3-box {
    .tab {
      li {
        width: 28vw;
      }
    }
  }

  .tab9-box,
  .tab15-box {
    .tab {
      li {
        width: 43vw;
      }
    }
  }

  .sale-box {
    .tab {
      .swiper-wrapper {
        justify-content: left;
      }
    }
  }
}

@include media-query('pc', '2000px') {
  #ai-container {
    .background {
      .product {
        width: 20vmax;
        right: 25vmax;
        top: 11vmax;
      }
    }
  }
}

@include media-query('pc', '2500px') {
  #ai-container {
    .background {
      .product {
        width: 17vmax;
        right: 26vmax;
        top: 13vmax;
      }
    }
  }
}
</style>
