document.addEventListener("DOMContentLoaded", function () {
  let asides = document.querySelectorAll('.aside-container .aside-content li a'),
    mobileNav = document.querySelector('.nav-footer .box-area.type ul'),
    mobileNav2 = document.querySelector('.mobile-for-product ul'),
    mobiles = document.querySelectorAll('.mobile-for-product ul'),
    asideA = document.querySelectorAll('.aside-container .aside-content .a1'),
    special = document.querySelectorAll('.special-box .tab li');

  if (asideA.length > 0) {
    change(1);
    special.forEach((link, s) => {
      link.addEventListener("click", (e) => {
        let id = e.currentTarget.value;
        change(id);
      });
    });

    function change(id) {
      mobiles.forEach(el => {
        el.style.display = 'none';
        mobiles[id].style.display = 'flex';
      });
    }
  } else {

    //新增手機版選單項目
    asides.forEach((el, a) => {
      let asideText = el.textContent,
        asideHref = el.getAttribute('href');


      //手機版下方選單
      if (document.querySelectorAll('.nav-footer .box-area.type ul').length > 0) {
        mobileNav.insertAdjacentHTML("beforeend",
          `<li><a href="${asideHref}">${asideText}</a></li>`
        );
      }

      //手機版上方選單
      if (document.querySelectorAll('.mobile-for-product ul').length > 0) {
        mobileNav2.insertAdjacentHTML("beforeend",
          `<li><a href="${asideHref}">${asideText}</a></li>`
        );
      }

    });
  }
});