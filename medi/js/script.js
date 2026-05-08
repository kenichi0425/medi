
// slick slider

$(function () {
    $(".slider").slick({
      autoplay: true,
      dots: true,
    });
  });
  
// slick slider

/* アコーディオンQ&A  */
$(function ($) {
  $('.js-accordion-title').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);
  });
  
  });
/* アコーディオンQ&A  */


// トップに戻る
$(function(){
  var pagetop = $('.page_top');
  // ボタン非表示
  pagetop.hide();

  // 100px スクロールしたらボタン表示
  $(window).scroll(function () {
     if ($(this).scrollTop() > 100) {
          pagetop.fadeIn();
     } else {
          pagetop.fadeOut();
     }
  });
  pagetop.click(function () {
     $('body, html').animate({ scrollTop: 0 }, 500);
     return false;
  });
});

// トップに戻る

// ハンバーガーメニュー
$(function() {
  
  // ハンバーガーボタン
  $('.hamburger').click(function() {
      $(this).toggleClass('active');

      if ($(this).hasClass('active')) {
          $('.globalMenuSp').addClass('active');
      } else {
          $('.globalMenuSp').removeClass('active');
      }
  });
  // ハンバーガーボタン

  /* 多階層メニュー  */
  $('.js-child-title').on('click', function () {
    /*クリックでコンテンツを開閉*/
    $(this).next().slideToggle(200);
    /*矢印の向きを変更*/
    $(this).toggleClass('open', 200);
  });
  /* 多階層メニュー  */

});

// ハンバーガーメニュー


//AOSふわっとアニメーション

AOS.init();