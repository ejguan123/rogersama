import axios from 'axios'
import axiosRetry from 'axios-retry'

export const globalMixin = {
  data() {
    return {
      products: [],
      product2: [],
      percent: 0,
      tabS: null,
      isLoading: false
    }
  },
  methods: {
    /*加入meta標籤
    * 參數格式: styles = [
     "url....",//第一個放分享圖
     "url....."
    ]
    */
    addStyle(styles) {
      styles.forEach((style, s) => {
        let link = document.createElement('link')
        link.type = 'text/css'

        link.rel = 'stylesheet'
        link.setAttribute('href', style)
        document.head.appendChild(link);
      })
    },
    addScript(script) {
      script.forEach((script, s) => {
        let scr = document.createElement('script')
        scr.setAttribute('src', script)
        document.body.appendChild(scr);
      })
    },
    //用後台陳列編號撈取全商品 [2000,20001,2002]
    /* retryDelay 兩種方法
    * 1. retryDelay: axiosRetry.exponentialDelay
      (Exponential back-off retry delay between requests)
      2. retryDelay: axiosRetry.linearDelay()
      (Liner retry delay between requests)
    */
    async getFloorData(menu) {
      let moreUrls = []

      //請求失敗重啟
      this.retryRequest();

      //取得menuid組成新url
      for (let z = 0; z < menu.length; z++) {
        moreUrls.push('https://events.tk3c.com/events_net/ashx/fkabow/GetAdSystemAll.ashx?menuid=' + menu[z])
      }

      //撈取所有 url api 資料
      await axios.all(moreUrls.map((moreUrl) => axios.get(moreUrl))).then((respon) => {
        respon.forEach((res, r) => {
          this.products[menu[r]] = res.data
        });
      })
        .catch((error) => {
          if (error.code === 'ECONNABORTED') {
            console.log('請求逾時')
          } else {
            console.log(error.message)
          }
        })
    },

    //用後台陳列編號撈取單一商品 如:2000
    async getFloorSingle(menu) {

      this.isLoading = true
      this.retryRequest();

      try {
        const res = await axios({
          method: 'get',
          url: 'https://events.tk3c.com/events_net/ashx/fkabow/GetAdSystemAll.ashx?menuid=' + menu,
          headers: {
            'Content-Type': 'application/json',
          }
        })

        this.product2[menu] = res.data.Data
        this.isLoading = false
      } catch (error) {
        if (error.code === 'ECONNABORTED') {
          console.log('請求逾時')
        } else {
          console.log(error.message)
        }
      }
    },
    //計算折數
    getProPercent(data) {
      let percent = Math.round((data.realprice / data.nonmemberprice) * 100)
      return percent
    },
    //價錢百分數加入逗號
    addNumComma(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    },
    //頁籤顯示隱藏
    showAndHide(id, element) {
      $all(`${element} .tab-content`).forEach((el) => {
        el.style.display = 'none'
        el.classList.remove('active')

        $all(`${element} .tab-content`)[id].style.display = 'block'
        $all(`${element} .tab-content`)[id].classList.add('active')
      })

      // 有輪播 .swiper-slide版本
      if ($all(`${element} .swiper-slide`).length > 0) {
        $all(`${element} .swiper-slide`).forEach((el) => {
          el.classList.remove('active')
          $all(`${element} .swiper-slide`)[id].classList.add('active')
        })
      }

      //無輪播版本
      if ($all(`${element} li`).length > 0) {
        $all(`${element} li`).forEach((el) => {
          el.classList.remove('active')
          $all(`${element} li`)[id].classList.add('active')
        })
      }

    },
    /*滑鼠滾動後固定背景
     *  element: 目標區域 selector
     *  scrollSelect:滾動後區域
     */
    fixedBg(element, scrollSelect) {
      if ($all(element).length > 0) {
        document.addEventListener('scroll', (e) => {
          let scrollTop = window.scrollY,
            scrollEl = document.querySelector(scrollSelect),
            elementPos = scrollEl.getBoundingClientRect()
          if (scrollTop >= elementPos.top - 50) {
            document.querySelector(element).classList.add('fixed')
          } else {
            document.querySelector(element).classList.remove('fixed')
          }
        })
      }
    },
    retryRequest() {
      //若request請求失敗則重新發送請求
      axiosRetry(axios, {
        retries: 2, //重新發送請求次數
        retryDelay: axiosRetry.linearDelay(),
        shouldResetTimeout: true,
      })
    },
    /*
    * 攔截器: 請求/回應一同處理 加快速度
    */
    interCatch() {
      axios.interceptors.response.use(
        response => response,
        error => {
          //如果為伺服器錯誤 重啟
          if (error.response) {
            switch (error.response.status) {
              case 401:
                console.log('tokan 不存在!')
                break;

              case 404:
                console.log('頁面不存在!')
                break;

              case 500:
                console.log('程式碼有誤')
                break

              default:
                console.log(error.message)
                break;
            }

            if (!window.navigator.onLine) {
              console.log('refresh page')
              return
            }
            axiosRetry(axios, {
              retries: 2,
              shouldResetTimeout: true,
              retryDelay: axiosRetry.exponentialDelay()
            })
          }
          return Promise.reject(error);
        }
      );
    }
  }
}
