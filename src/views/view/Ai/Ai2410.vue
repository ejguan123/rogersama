<script setup>
import listF from '../../layout/listF.vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Parallax, EffectCube } from 'swiper/modules'
import banner from '../../layout/banner.vue'
import mobileAi from '../../layout/mobileAi.vue'
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
              title: '2024083C/images/2410/S1_a.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=12504&aid=4878',
              menu: 7267,
              asidetext: '激省主打',
              asideUrl: '#tab1'
            }
          ],
          1: [
            {
              title: '2024083C/images/2410/S2.png',
              asidetext: '輕薄商務',
              asideUrl: '#tab2',
              content: [
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=23504&hid=120183',
                  image: '2024083C/images/2410/S2_1.png',
                  menu: 7267
                },
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=23504&hid=120184',
                  image: '2024083C/images/2410/S2_2.png',
                  menu: 7268
                }
              ]
            }
          ],
          2: [
            {
              title: '2024083C/images/2410/S3.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
              asidetext: '飆速電競',
              asideUrl: '#tab3',
              content: [
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
                  image: '2024083C/images/2410/S3_1.png',
                  menu: 7269
                },
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
                  image: '2024083C/images/2410/S3_2.png',
                  menu: 7270
                },
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117913',
                  image: '2024083C/images/2410/S3_3.png',
                  menu: 7271
                }
              ]
            }
          ],
          3: [
            {
              title: '2024083C/images/2410/S5.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
              asidetext: '特仕改裝升級',
              asideUrl: '#tab4',
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
                  image: '2024083C/images/2410/MSI.png',
                  menu: 7272
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
                  image: '2024083C/images/2410/ASUS.png',
                  menu: 7273
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
                  image: '2024083C/images/2410/ACER.png',
                  menu: 7274
                }
              ]
            }
          ],
          4: [
            {
              title: '2024083C/images/2410/S6.png',
              asidetext: '精選螢幕',
              asideUrl: '#tab5',
              content: [
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=44823',
                  image: '2024083C/images/2410/S6_1.png',
                  menu: 7275
                },
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117915',
                  image: '2024083C/images/2410/S6_2.png',
                  menu: 7276
                }
              ]
            }
          ],
          5: [
            {
              title: '2024083C/images/2410/S7.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=114130',
              asidetext: '高效桌機',
              asideUrl: '#tab6',
              content: [
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=114130',
                  image: '2024083C/images/2410/S7_1.png',
                  menu: 7277
                },
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=79023',
                  image: '2024083C/images/2410/S7_2.png',
                  menu: 7278
                }
              ]
            }
          ],
          6: [
            {
              title: '2024083C/images/2410/S8.png',
              url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117896',
              asidetext: 'DIY零組件',
              asideUrl: '#tab7',
              content: [
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117896',
                  image: '2024083C/images/2410/S8_1.png',
                  menu: 7281
                },
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117896',
                  image: '2024083C/images/2410/S8_2.png',
                  menu: 7279
                },
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=117896',
                  image: '2024083C/images/2410/S8_3.png',
                  menu: 7280
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
              title: '2024083C/images/2410/S9.png',
              url: 'https://events.tk3c.com/events_net/tk3c_fastdelivery/index.html',
              menu: 7357,
              asidetext: '速速Go',
              asideUrl: '#tab8'
            }
          ],
          1: [
            {
              title: '2024083C/images/2410/S10.png',
              url: 'https://www.tk3c.com/dic1.aspx?cid=83198&aid=18620',
              asidetext: 'Wi-Fi路由器',
              asideUrl: '#tab9',
              content: [
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122073',
                  image: '2024083C/images/2410/S10_1.png',
                  menu: 7285
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=43403&aid=17260',
                  image: '2024083C/images/2410/S10_2.png',
                  menu: 7282
                },
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122542',
                  image: '2024083C/images/2410/S10_3.png',
                  menu: 7284
                },
                {
                  url: 'https://www.tk3c.com/dic2.aspx?cid=43403&aid=11540&hid=122073',
                  image: '2024083C/images/2410/S10_4.png',
                  menu: 7283
                }
              ]
            }
          ],
          2: [
            {
              title: '2024083C/images/2410/S11.png',
              asidetext: 'DIY組裝機',
              asideUrl: '#tab10',
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=10020',
                  image: '2024083C/images/2410/S11_1.png',
                  menu: 7278
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=6040',
                  image: '2024083C/images/2410/S11_2.png',
                  menu: 7278
                }
              ]
            }
          ],
          3: [
            {
              title: '2024083C/images/2410/S12.png',
              asidetext: '鍵盤滑鼠',
              asideUrl: '#tab11',
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=10020',
                  image: '2024083C/images/2410/S12_1.png',
                  menu: 7286
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=14719&aid=6040',
                  image: '2024083C/images/2410/S12_2.png',
                  menu: 7287
                }
              ]
            }
          ],
          4: [
            {
              title: '2024083C/images/2410/S13.png',
              asidetext: '硬碟',
              asideUrl: '#tab12',
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=117896&aid=23571',
                  image: '2024083C/images/2410/S13_1.png',
                  menu: 7288
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=117896&aid=22551',
                  image: '2024083C/images/2410/S13_2.png',
                  menu: 7289
                }
              ]
            }
          ],
          5: [
            {
              title: '2024083C/images/2410/S14.png',
              asidetext: '隨身碟/記憶卡',
              asideUrl: '#tab13',
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12356&aid=4855',
                  image: '2024083C/images/2410/S14_1.png',
                  menu: 7290
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=12356&aid=4853',
                  image: '2024083C/images/2410/S14_2.png',
                  menu: 7291
                }
              ]
            }
          ],
          6: [
            {
              title: '2024083C/images/2410/S15.png',
              asidetext: '投影機/監控設備',
              asideUrl: '#tab14',
              content: [
                {
                  url: 'https://www.tk3c.com/dictitleurl.aspx?cid=19729',
                  image: '2024083C/images/2410/S15_1.png',
                  menu: 7292
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=43403&aid=11545',
                  image: '2024083C/images/2410/S15_2.png',
                  menu: 7293
                }
              ]
            }
          ],
          7: [
            {
              title: '2024083C/images/2410/S16.png',
              asidetext: '辦公設備',
              asideUrl: '#tab15',
              content: [
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11684&aid=4762',
                  image: '2024083C/images/2410/S16_1.png',
                  menu: 7294
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=22323',
                  image: '2024083C/images/2410/S16_2.png',
                  menu: 7295
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=11684&aid=4761',
                  image: '2024083C/images/2410/S16_3.png',
                  menu: 7296
                },
                {
                  url: 'https://www.tk3c.com/dic1.aspx?cid=108783&aid=22325',
                  image: '2024083C/images/2410/S16_4.png',
                  menu: 7297
                }
              ]
            }
          ],
          8: [
            {
              title: '2024083C/images/2410/S17.png',
              url: 'https://www.tk3c.com/dic2.aspx?cid=44823&aid=22525&hid=121385',
              menu: 7298,
              asidetext: '出清搶便宜',
              asideUrl: '#tab16'
            }
          ]
        }
      ],
      status: 0,
      pro: [
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=238947',
          image: '2024083C/images/2410/238947.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=239828',
          image: '2024083C/images/2410/239828.png'
        },
        {
          url: 'https://www.tk3c.com/pt.aspx?pid=245131',
          image: '2024083C/images/2410/245131.png'
        },
        { url: 'https://www.tk3c.com/pt.aspx?pid=248185', image: '2024083C/images/2410/248185.png' }
      ],
      gifts: [
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=121466&aid=23847&hid=123246&strPreView=y',
          image: '2024083C/images/2410/a-e2.png'
        },
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=121466&aid=23566&strPreView=y',
          image: '2024083C/images/2410/a-e3.png'
        }
      ],
      banner1: [
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=44823&aid=23793',
          image: '202405_shopping/images/samsung240527.jpg'
        },
        {
          url: 'https://www.tk3c.com/dic2.aspx?cid=11124&aid=22469&hid=120108',
          image: '202404_green/images/bn_nbsaleM.jpg'
        }
      ],
      banner2: [
        {
          url: 'https://www.tk3c.com/dic1.aspx?cid=11124&aid=22124',
          image: '202404_green/images/bn_tesnbM.jpg'
        }
      ],
      tabStatus: null,
      statusPro: 0,
      tabs: [],
      statusGift: 0
    }
  },
  mounted() {
    const { tabs, tab1, tab2 } = this

    //撈取筆電區樓層商品
    for (const [t, t1] of Object.entries(tab1[0])) {
      if (t1[0].content != undefined) {
        this.getFloorSingle(t1[0].content[0].menu)
      } else {
        this.getFloorSingle(t1[0].menu)
      }
    }

    //撈取周邊區樓層商品
    for (const [t, t2] of Object.entries(tab2[0])) {
      if (t2[0].content != undefined) {
        this.getFloorSingle(t2[0].content[0].menu)
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
  },
  methods: {
    //應援指南頁籤切換
    changeGift(id) {
      this.statusGift = id
    },
    change(id, menu) {
      if (event) {
        let current = event.currentTarget,
          parentAr = current.parentNode.parentNode.parentNode.parentNode,
          parentClass = parentAr.getAttribute('class'),
          parentName = parentClass.substr(16),
          getUrl = current.getAttribute('href')

        setTimeout(() => {
          this.getFloorSingle(menu)
          this.showAndHide(id, `.${parentName}`)
          parentAr.querySelector('.title a').setAttribute('href', getUrl)
        }, 300)
      }
    },
    goNB(element) {
      if (element == '#tab6') {
        //跳轉到組裝機樓層
        this.statusGift = 0

        setTimeout(() => {
          $all('.tab6-box li').forEach((el, t) => {
            el.classList.remove('active')
            $all('.tab6-box li')[1].classList.add('active')
          })
          $all('.tab6-box .tab-content').forEach((el, t) => {
            el.style.display = 'none'
            $all('.tab6-box .tab-content')[1].style.display = 'block'
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
             <li style='margin-bottom:20px;'>活動期間(2024/10/1-10/31)，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2024/11/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽出1名送Marshall Stockwell II 攜帶型喇叭-古銅黑(245024) (市價$7,900)​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.得獎名單將於2024/11/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a href="https://www.facebook.com/TDdd331" style="color:blue;text-decoration:underline;">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li style='margin-bottom:10px;'>3.得獎者請於2024/11/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
             <li style='margin-bottom:10px;'>4.經核對無誤後，燦坤3C將於2024/12/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
               <li style='margin-bottom:10px;'>5.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
                 <li style='margin-bottom:10px;'>6.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:30px;'>7.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

              <li style='margin-bottom:15px;'>【活動二】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/10/1-10/31)內，於燦坤線上購物網站購買「全館任一搭載Intel處理器筆電(下稱活動指定商品)」，單品發票消費金額滿$9,999，並於線上完成付款且後續未退貨退款者，並於2024/11/4(含)前至指定活動頁面完成登記申請，送Yeelight 充電摺疊檯燈-白 (207795) (市價$1095，30名) ; 單品發票消費金額滿$30,000，並於線上完成付款且後續未退貨退款者，並於2024/11/4(含)前至指定活動頁面完成登記申請，送Logitech MX Master 3S無線滑鼠-黑 (市價$4,290)，限量10名。​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.經核對無誤後，燦坤3C將於2024/11/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>4.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
               <li style='margin-bottom:10px;'>5.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:10px;'>6.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>
        </ul>
        `
          break

        //DIY / 週邊
        case 2:
          infoHtml = `
        <ul style='text-align:left;'>
          <li style='margin-bottom:15px;'>【活動一】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/10/1-10/31)，於燦坤線上購物網站購買「全館任一網路設備/儲存卡碟/監控攝影機商品(含網路分享器/路由器、網路交換器/集線器、網路線、網路卡、硬碟、隨身碟、記憶卡、網路監控攝影機，下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，單筆發票消費金額滿$1,000，並於2024/11/4(含)前至指定活動頁面完成登記申請即可獲得本活動抽獎資格，抽頭獎- Dyson Supersonic吹風機 HD08黑鋼色 (245500) (市價$12,900，共1名) ; 二獎- AirPods 4-主動式降噪(252142) (市價$5,990，1名) ; 三獎- Panasonic 25L機械式微波爐(243980) (232339) (市價$3,590，1名)​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(抽獎)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.得獎名單將於2024/11/15公布於FACEBOOK粉絲專頁「燦坤線上購物」(<a href="https://www.facebook.com/TDdd331" style="color:blue;text-decoration:underline;">https://www.facebook.com/TDdd331</a>) 並另以簡訊通知中獎者，通知以會員資料所留存的個人聯絡資料為準。倘中獎人因個人因素致無法收受上開通知(如無法收受、未能讀取或遲誤讀取)，均與燦坤3C無涉。​</li>
             <li style='margin-bottom:10px;'>4.得獎者請於2024/11/23前回填中獎通知函：私訊「燦坤線上購物」粉絲專頁，提供會員帳號(email)/姓名/電話/訂單編號/中獎公告畫面，小編會提供回函，請依規定填寫並繳交相關資料，並將正本掛號寄回燦坤3C內湖總部，以郵戳為憑。逾期、資料不符規定或填寫不正確、不完整或未依中獎通知函規定期限存入代扣稅金者，視同放棄中獎/兌獎權利。(依稅法規定，抽中獎項市值超過1,001元(含)以上，將列入本年度之個人綜合所得稅申報，超過20,000元(含)以上者，依法須預先扣繳10%稅金(外籍人士20%)。​</li>
              <li style='margin-bottom:10px;'>5.經核對無誤後，燦坤3C將於2024/12/25起陸續寄出獎項至得獎者中獎通知函地址(限台灣本島地區且不可為郵政信箱)。如中獎者有額外運送/安裝需求，另行計價，逾期領獎或安裝完成視為放棄，若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
               <li style='margin-bottom:10px;'>6.獎項詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金，中獎資格不可轉讓予第三人。​</li>
                 <li style='margin-bottom:10px;'>7.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供獎品前：燦坤3C將不會寄送獎品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供獎品後：中獎人需將獎品退回，倘若已使用獎品，則需返回等同獎品價值金額。​</li>
             <li style='margin-bottom:30px;'>8.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

               <li style='margin-bottom:15px;'>【活動二】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/10/1-10/31)內，於燦坤線上購物網站購買「全館任一DIY組裝電腦(下稱活動指定商品)」，並於線上完成付款且後續未退貨退款者，並於2024/11/4(含)前至指定活動頁面完成登記申請，送Logitech G PRO 無線電競滑鼠(210405) (市價$3,990，5名)​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.經核對無誤後，燦坤3C將於2024/11/25起陸續寄出獎項至會員資料地址(限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
             <li style='margin-bottom:10px;'>3.商品詳細內容與規格以實物為準，不得轉換、轉讓、轉售或折換現金。​</li>
                 <li style='margin-bottom:10px;'>4.會員須遵守燦坤相關購物服務條款及其他交易有關之規定，活動期間內，若會員取消該筆訂單，或因違反相關服務條款或因司法案件等原因遭到鎖定或納入黑名單等，將會無法參與活動或無法獲得活動獎勵。若中獎發票後續有取消、退貨、退款或換貨等情事或有其他爭議(如非為會員本人購買)者，燦坤3C將以下列方式處理：​</li>
             <li style='margin-bottom:10px;padding-left:10px;'>(1) 提供贈品前：燦坤3C將不會寄送贈品。​</li>
             <li style='margin-bottom:20px;padding-left:10px;'>(2) 提供贈品後：需將贈品退回，倘若已使用贈品，則需返回等同贈品價值金額。​</li>
             <li style='margin-bottom:30px;'>5.活動未盡事宜以燦坤線上購物官網公告為準，燦坤3C保留活動最終解釋修改變更之權利。​</li>

              <li style='margin-bottom:15px;'>【活動三】</li>
             <li style='margin-bottom:20px;'>活動期間(2024/10/1-10/31)內，於燦坤線上購物網站購買「全館任一投影機(不包含輕劇院商品，下稱活動指定商品)」，單筆發票消費金額滿$8,000，並於線上完成付款且後續未退貨退款者，並於2024/11/4(含)前至指定活動頁面完成登記申請，送HomePod mini 白色(212358) (市價$3,000，7名)​</li>
             <li style='margin-bottom:10px;'>1.請留意登記完成不代表保證獲得回饋(贈送)資格，燦坤3C後續會進行資格檢核，相關認定以燦坤3C電腦系統之紀錄與認定為準。​</li>
             <li style='margin-bottom:10px;'>2.消費金額以實際發票開立金額認定，僅限活動指定商品消費金額，其他商品恕不累計。​</li>
             <li style='margin-bottom:10px;'>3.經核對無誤後，燦坤3C將於2024/12/25起陸續寄出獎項至會員資料地址 (限台灣本島地區且不可為郵政信箱)。若因地址/收件人錯誤、無人收件等不可歸責於燦坤3C之事由導致延遲、遺失等情況，恕不負責，請多包涵。​</li>
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
      <h2 class="title"><img :src="$filters.siteUrl('2024083C/images/2410/title.png')" /></h2>
      <h5 class="subtitle"><img :src="$filters.siteUrl('2024083C/images/2410/st.png')" /></h5>

      <div class="product">
        <swiper
          :loop="true"
          :effect="'cube'"
          :autoplay="{ delay: 1800, disableOnInteraction: false }"
          :modules="[EffectCube]"
        >
          <swiper-slide v-for="p in pro" class="flex!">
            <a :href="$filters.addGALink(p.url)" target="_blank">
              <img :src="$filters.siteUrl(p.image)" alt="" />
            </a>
          </swiper-slide>
        </swiper>
      </div>
    </div>

    <p class="item"><img :src="$filters.siteUrl('2024083C/images/2410/de.png')" /></p>

    <!--  指南 -->
    <section class="gift-box">
      <h2 class="title">
        <img :src="$filters.siteUrl('2024083C/images/2410/gift_title.png')" />
      </h2>

      <ul class="tab m:0|auto|1% m:0|auto|2%@<992 gap:10 gap:15@<576">
        <li
          class="w:12% w:23vw@<992 w:28vw@<576"
          :class="[statusGift == 0 ? 'active' : '']"
          :value="statusGift"
        >
          <a @click="changeGift(0)">
            <img :src="$filters.siteUrl('2024083C/images/2410/tab1.png')"
          /></a>
        </li>
        <li
          class="w:26% w:48vw@<992 w:61vw@<576"
          :class="[statusGift == 1 ? 'active' : '']"
          :value="statusGift"
        >
          <a @click="changeGift(1)">
            <img :src="$filters.siteUrl('2024083C/images/2410/tab2.png')"
          /></a>
        </li>
      </ul>

      <!-- 筆電 -->
      <div class="tab-content" v-if="statusGift == 0">
        <ul class="w:70% w:90vw@<992 w:100%@<576 mb:2% overflow:hidden">
          <swiper
            class="overflow:hidden"
            :loop="false"
            :space-between="10"
            :breakpoints="{
              0: {
                slidesPerView: 2
              },
              600: {
                slidesPerView: 2
              },
              992: {
                slidesPerView: 2
              }
            }"
          >
            <swiper-slide v-for="(gift, g) in gifts">
              <a :href="$filters.addGALink(gift.url)" target="_blank">
                <img :src="$filters.siteUrl(gift.image)" />
              </a>
            </swiper-slide>
          </swiper>
        </ul>
        <div class="w:70% w:90vw@<992 w:100%@<576 m:0|auto|2%">
          <a :href="$filters.addGALink('https://page.line.me/tid7686u')" target="_blank">
            <img :src="$filters.siteUrl('2024083C/images/2410/a-e4.png')" />
          </a>
        </div>
        <a class="w:25% w:35vw@<992 w:50vw@<576 m:auto" @click="alert(1)">
          <img :src="$filters.siteUrl('2024083C/images/2410/info.png')" />
        </a>
      </div>

      <!-- 週邊 -->
      <div class="tab-content" v-if="statusGift == 1">
        <ul class="gap:10 mb:2%">
          <li class="rel w:70% w:90vw@<992 w:100%@<576">
            <a @click="goNB('#tab9')">
              <img :src="$filters.siteUrl('2024083C/images/2410/a-e5.png')" />
            </a>
          </li>
          <li class="w:35% w:44.5vw@<992 w:100%@<576">
            <a @click="goNB('#tab6')" class="mb:2%@<576">
              <img :src="$filters.siteUrl('2024083C/images/2410/a-e6.png')" />
            </a>
          </li>
          <li class="w:35% w:44.5vw@<992 w:100%@<576">
            <a @click="goNB('#tab14')" class="mb:2%@<576">
              <img :src="$filters.siteUrl('2024083C/images/2410/a-e7.png')" />
            </a>
          </li>
        </ul>
        <a @click="alert(2)" class="w:25% w:35vw@<992 w:50vw@<576 m:auto">
          <img :src="$filters.siteUrl('2024083C/images/2410/info.png')" />
        </a>
      </div>
    </section>

    <div class="pro-group">
      <!-- 筆電樓層區 -->
      <div v-show="statusGift == 0" class="product-area pro1">
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
                <a :href="$filters.addGALink(content.url)" @click.prevent="change(c, content.menu)">
                  <img :src="$filters.siteUrl(content.image)" alt="" />
                </a>
              </li>
            </ul>

            <div class="tab-content" v-for="(content, c) in t1[0].content" v-show="statusPro == c">
              <component :is="listF" :pro="product2[content.menu]"> </component>
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
          :class="`tab${Number(t) + 8}-box`"
          :id="`tab${Number(t) + 8}`"
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
                <a :href="$filters.addGALink(content.url)" @click.prevent="change(c, content.menu)">
                  <img :src="$filters.siteUrl(content.image)" alt="" />
                </a>
              </li>
            </ul>

            <div class="tab-content" v-for="(content, c) in t2[0].content" v-show="statusPro == c">
              <component :is="listF" :pro="product2[content.menu]"> </component>
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
    <component :is="banner" :banner1="banner1" :banner2="banner2"></component>
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
