import axios from "axios";
import axiosRetry from "axios-retry";

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
        let link = document.createElement('link');
        link.type = 'text/css';

        link.rel = (s == 0) ? 'image_src' : 'stylesheet';
        link.setAttribute('href', style);
        document.head.appendChild(link);
      });
    },
    //用後台陳列編號撈取全商品 [2000,20001,2002]
    async getFloorData(menu) {
      let newPro = [],
        newDatas = [];
      for (let z = 0; z < menu.length; z++) {
        axiosRetry(axios, {
          retries: 3,
          retryDelay: axiosRetry.exponentialDelay
        });
        newDatas.push(
          await axios.get('https://events.tk3c.com/events_net/ashx/fkabow/GetAdSystemAll.ashx?menuid=' + menu[z]).then((res) => {
            newPro.push({
              id: menu[z],
              datas: res.data
            })
          })
        )
      }


      Promise.all(newDatas)
        .then((res) => {
          this.products = newPro;
        })
        .catch(error => {
          if (error.code === 'ECONNABORTED') {
            console.log('請求逾時');
          } else {
            console.log(error.message);
          }
        })
    },

    //用後台陳列編號撈取單一商品 如:2000
    async getFloorSingle(menu) {
      this.isLoading = true;
      axiosRetry(axios, {
        retries: 3,
        retryDelay: axiosRetry.exponentialDelay
      });


      axios.get('https://events.tk3c.com/events_net/ashx/fkabow/GetAdSystemAll.ashx?menuid=' + menu)
        .then((res) => {
          this.product2[menu] = res.data.Data;
          this.isLoading = false;
        })
        .catch(error => {
          if (error.code === 'ECONNABORTED') {
            console.log('請求逾時');
          } else {
            console.log(error.message);
          }
        })
    },
    //計算折數
    getProPercent(data) {
      let percent = Math.round((data.realprice / data.nonmemberprice) * 100);
      return percent;
    },
    //價錢百分數加入逗號
    addNumComma(number) {
      return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    },
    //頁籤顯示隱藏
    showAndHide(id, element) {

      $all(`${element} .tab-content`).forEach(el => {
        el.style.display = 'none';
        el.classList.remove('active');

        $all(`${element} .tab-content`)[id].style.display = 'block';
        $all(`${element} .tab-content`)[id].classList.add('active');
      });

      $all(`${element} .swiper-slide`).forEach(el => {
        el.classList.remove('active');
        $all(`${element} .swiper-slide`)[id].classList.add('active');
      });
    }
  }
}

