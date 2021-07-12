"use strict";function initSelectData(e){$(e).each(function(e,t){var s=$(t).attr("data-placeholder");s||(s="");var i=$(t).attr("data-multiple");i||$(t).attr("multiple")||(i=!1);var n=$(t).attr("data-container");n||(n="");var o=$(t).attr("data-dropdown");o||(o="");var r=$(t).closest(".form-select");$(t).select2({minimumResultsForSearch:1/0,multiple:i,placeholder:s,containerCssClass:n,dropdownCssClass:o,width:"resolve",dropdownParent:r})}),(0<window.navigator.userAgent.indexOf("MSIE ")||navigator.userAgent.match(/Trident.*rv\:11\./))&&$(".vk-widget-wrapper").hide(),starsLogicEffect()}function starsLogicEffect(){$(".star-rating-wrapper").each(function(e,i){var n=$(i).find(".icon");n.each(function(e,t){$(t).hasClass("starActive")&&$(t).text("star")}),n.hover(function(){var t=$(this).data("rating-value"),s=1;n.each(function(){var e=$(i).find('.icon[data-rating-value="'+s+'"]');s<=t?e.addClass("starHover"):e.removeClass("starHover"),s++})},function(){n.removeClass("starHover")}),n.click(function(){var e=$(this).data("rating-value");$(this).closest(".star-rating-wrapper").attr("data-rating-value",e);var t=$(this).siblings("input");if(t.val(e),t.change(),$(i).data("rating-value")){var s=$(i).attr("data-rating-value");n.each(function(e,t){e+1<=s?$(t).addClass("starActive").text("star"):$(t).removeClass("starActive").text("star_border")})}})})}$(document).ready(function(){var e=$(".banner-slider");e.on("init",function(e,t){$(this).css("opacity",1)}),e.slick({dots:!0,prevArrow:$(".js_banners_prev"),nextArrow:$(".js_banners_next"),autoplay:!0,autoplaySpeed:3500});var t=$(".slider-partners");t.on("init",function(e,t){$(this).css("opacity",1)}),t.slick({slidesToShow:6,slidesToScroll:1,prevArrow:$(".js_partners_prev"),nextArrow:$(".js_partners_next"),autoplay:!0,autoplaySpeed:3e3,responsive:[{breakpoint:1200,settings:{slidesToShow:5}},{breakpoint:992,settings:{slidesToShow:4,arrows:!1}}]});var s=$("#new-tab"),i=$(".slider-new-products");function n(){i.slick({infinite:!1,slidesToShow:4,slidesToScroll:1,prevArrow:$(".js_new_products_prev"),nextArrow:$(".js_new_products_next"),responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{infinite:!0,centerPadding:"100px",centerMode:!0,slidesToShow:1}},{breakpoint:541,settings:{infinite:!0,centerPadding:"20%",centerMode:!0,slidesToShow:1}},{breakpoint:426,settings:{infinite:!0,centerPadding:"15%",centerMode:!0,slidesToShow:1}},{breakpoint:376,settings:{infinite:!0,centerPadding:"10%",centerMode:!0,slidesToShow:1}},{breakpoint:321,settings:{infinite:!1,slidesToShow:1}}]})}i.on("init",function(e,t){$(this).css("opacity",1)}),n(),s.on("shown.bs.tab",function(){i.on("init",function(e,t){$(this).css("opacity",1)}),n()}),s.on("hide.bs.tab",function(){i.css("opacity",0),i.slick("unslick")});var o=$("#hit-tab"),r=$(".slider-hit-products");o.on("shown.bs.tab",function(){r.on("init",function(e,t){$(this).css("opacity",1)}),r.slick({infinite:!1,slidesToShow:4,slidesToScroll:1,prevArrow:$(".js_hit_products_prev"),nextArrow:$(".js_hit_products_next"),responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{infinite:!0,centerPadding:"100px",centerMode:!0,slidesToShow:1}},{breakpoint:541,settings:{infinite:!0,centerPadding:"20%",centerMode:!0,slidesToShow:1}},{breakpoint:426,settings:{infinite:!0,centerPadding:"15%",centerMode:!0,slidesToShow:1}},{breakpoint:376,settings:{infinite:!0,centerPadding:"10%",centerMode:!0,slidesToShow:1}},{breakpoint:321,settings:{infinite:!1,slidesToShow:1}}]})}),o.on("hide.bs.tab",function(){r.css("opacity",0),r.slick("unslick")});var a=$("#sale-tab"),c=$(".slider-sale-products");a.on("shown.bs.tab",function(){c.on("init",function(e,t){$(this).css("opacity",1)}),c.slick({infinite:!1,slidesToShow:4,slidesToScroll:1,prevArrow:$(".js_sale_products_prev"),nextArrow:$(".js_sale_products_next"),responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:{infinite:!0,centerPadding:"100px",centerMode:!0,slidesToShow:1}},{breakpoint:541,settings:{infinite:!0,centerPadding:"20%",centerMode:!0,slidesToShow:1}},{breakpoint:426,settings:{infinite:!0,centerPadding:"15%",centerMode:!0,slidesToShow:1}},{breakpoint:376,settings:{infinite:!0,centerPadding:"10%",centerMode:!0,slidesToShow:1}},{breakpoint:321,settings:{infinite:!1,slidesToShow:1}}]})}),a.on("hide.bs.tab",function(){c.css("opacity",0),c.slick("unslick")});var d=$(".slider-last-reviews");d.on("init",function(e,t){$(this).css("opacity",1)}),d.slick({infinite:!1,slidesToShow:2,slidesToScroll:1,prevArrow:$(".js_last_reviews_prev"),nextArrow:$(".js_last_reviews_next"),responsive:[{breakpoint:992,settings:{slidesToShow:1}},{breakpoint:576,settings:"unslick"}]});var l=$(".slider-reviews-company");l.on("init",function(e,t){$(this).css("opacity",1)}),l.slick({infinite:!1,slidesToShow:3,slidesToScroll:1,prevArrow:$(".js_reviews_company_prev"),nextArrow:$(".js_reviews_company_next"),responsive:[{breakpoint:992,settings:{slidesToShow:2}},{breakpoint:768,settings:"unslick"}]}),$(".counter").each(function(e,t){var s=$(t).find(".js_count"),i=1;s.attr("value",i),s.change(),$(t).find(".js_count_more").click(function(){i++,s.attr("value",i),s.change()}),$(t).find(".js_count_less").click(function(){--i<1&&(i=1),s.attr("value",i),s.change()})}),$(".js_close_banner").click(function(){$(this).closest(".banner").hide()}),$(".js_contact_address").click(function(){$(".js_contact_address").removeClass("active"),$(this).addClass("active")}),$(".dropdown-toggle").dropdown();var p=$("#modal-add-to-cart");p.on("shown.bs.modal",function(e){var t=$(".slider-modal-recommendation");t.on("init",function(e,t){$(this).css("opacity",1)}),t.slick({slidesToShow:2,slidesToScroll:1,dots:!0,prevArrow:$(".js_modal_recommendation_prev"),nextArrow:$(".js_modal_recommendation_next"),responsive:[{breakpoint:721,settings:{slidesToShow:1}}]})}),p.on("hidden.bs.modal",function(e){$(".slider-modal-recommendation").slick("unslick")});var h=$(".slider-personal-product");h.on("init",function(e,t){$(this).css("opacity",1)}),h.slick({infinite:!1,slidesToShow:4,slidesToScroll:1,prevArrow:$(".js_personal_product_prev"),nextArrow:$(".js_personal_product_next"),responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:426,settings:{slidesToShow:1}}]}),$(".js_eye").click(function(){$(this).toggleClass("show-psw"),$(this).hasClass("show-psw")?$(this).closest(".form-group").find("input").attr("type","text"):$(this).closest(".form-group").find("input").attr("type","password")});var u=$("#modal-video"),w="",f="";$(".js_play").click(function(){w="?autoplay=1",f="?enablejsapi=1";var e=$(this).attr("data-video");$(".js_player")[0].src="https://www.youtube.com/embed/"+e,w="https://www.youtube.com/embed/"+e+w,u.modal("show"),f="https://www.youtube.com/embed/"+e+f}),u.on("show.bs.modal",function(e){$(".js_player")[0].src=w}),u.on("hide.bs.modal",function(e){$(".js_player")[0].src=f}),u.on("hidden.bs.modal",function(e){$(".js_player")[0].src=""}),$("#up").on("change",function(){for(var e=[],t=$(this).get(0).files.length,s=0;s<$(this).get(0).files.length;++s)e.push($(this).get(0).files[s].name);2<t?$(this).closest(".form-group").find(".form-control").attr("value",t+" files selected"):$(this).closest(".form-group").find(".form-control").attr("value",e)}),initSelectData(".js_select")});




// Добавленные скрипты ------------------------------------------------------------------------------
$(function () {

  // сдвоенный слайдер-галерея на на основе slick-слайдера на странице 
  $('.slider-top').slick({
    slidesToShow: 1,
    arrows: false,
    // fade: true,
    asNavFor: '.slider-nav',
    // responsive: [
    //   {
    //     breakpoint: 781,
    //     settings: {
    //       slidesToShow: 1
    //     }
    //   },
    // ]
  });

  $('.slider-nav').slick({
    asNavFor: '.slider-top',
    slidesToShow: 3,
    focusOnSelect: true,
    arrows: false,
    infinite: false
  });

  //  имитация поиска на странице 'дворники'
   $('.js_wiper_item_btn ').on('click', function(e) {
    e.preventDefault();
    $('.wipers__noresult').show();
  });

  function onChange1(field) {  //создаём ф-цию
    $(field).on('change', function() { //отслеживаем изменение значения в полях на странице 'дворники' во вкладке 'подбор по авто' и если все поля заполнены, делаем кнопку активной;
      if ($('.js_wipers_select_brand').val() != null && $('.js_wipers_select_model').val() != null && $('.js_wipers_select_modification').val() != null) {
          $('.js_wiper_item_btn_auto').prop('disabled', false);
      }
    });
  }

  onChange1('.js_wipers_select_brand');
  onChange1('.js_wipers_select_model');
  onChange1('.js_wipers_select_modification');

  $('.js_wipers_select_modification').on('change', function() {
    if ($(this).val() == 'consult') {
      $('.js_popup_consult_overlay, .js_popup_consult').fadeIn(300);
    }

  });

  function onChange2(field) {
    $(field).on('change', function() { //отслеживаем изменение значения в полях на странице 'дворники' во вкладке 'подбор по параметрам' и если все поля заполнены, делаем кнопку активной;
      if ($('.js_wipers_select_manufacturer').val() != null && $('.js_wipers_select_series').val() != null && $('.js_wipers_select_binding').val() != null && $('.js_wipers_select_length1').val() != null && $('.js_wipers_select_length2').val() != null && ($('.js_wipers_checkbox_frame').prop('checked') == true || $('.js_wipers_checkbox_frameless').prop('checked') == true)) {
          $('.wipers__item-btn').prop('disabled', false);
      } else {
        $('.wipers__item-btn').prop('disabled', true);
      }
    });
  }

  onChange2('.js_wipers_select_manufacturer');
  onChange2('.js_wipers_select_series');
  onChange2('.js_wipers_select_binding');
  onChange2('.js_wipers_select_length1');
  onChange2('.js_wipers_select_length2');
  onChange2('.js_wipers_checkbox_frame');
  onChange2('.js_wipers_checkbox_frameless');

  // выбор города в хедере
  let city =   $('.city-list li');
  
  $(city).on('click', function() {
    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $('.js_choice_city_field').val("");
      // $('.js_choice_city_btn').prop('disabled', true);
    } else {
      city.removeClass('active');
      $(this).addClass('active');
      $('.js_choice_city_field').val($(this).text());
      $('.js_choice_city_btn').prop('disabled', false);
    }
  });

  $('.js_choice_city_btn').on('click', function() {
    $('.js_header_city').text($('.js_choice_city_field').val());
   $('.js_choice_city_field').val("");
  });

  $('.js_choice_city_field').on('input', function() {
    if ($(this).val() != "") {
      $('.js_choice_city_btn').prop('disabled', false);
    } else {
      $('.js_choice_city_btn').prop('disabled', true);
    }
  });
  
  // Табы, вынесены в ф-цию 
  function newTabs(wrap, tab, tabs, item) {
    $(tab).on('click', function () {
      let id = $(this).attr('data-id');
      $(wrap).find(item).removeClass('active').hide();
      $(tabs).find(tab).removeClass('active');
      $(this).addClass('active');
      $('#' + id).addClass('active').fadeIn();
      return false;
    });
  }

  newTabs('.selection-auto__inner', '.selection-auto__tab', '.selection-auto__tabs', '.selection-auto__item'); //табы на странице 'каталог подбора запчпстей'
  newTabs('.selection-model__inner', '.selection-model__tab', '.selection-model__tabs', '.selection-model__item'); //табы на странице 'выбор запчастей по ммм' (выбор класса автомобиля)
  newTabs('.wipers__inner', '.wipers__tab', '.wipers__tabs', '.wipers__item'); //табы на странице 'дворники'

  // Кнопка показать больше, находится в табах на странице 'каталог подбора запчпстей'
  $('.js_selection_auto_btn').on('click', function() {
    $('.selection-auto__cards').find('.selection-auto__card').toggleClass('active');
  });

  $('.js_filter_category_btn').on('click', function() {
    $('.filter-category__item').toggleClass('visible');
  })


  //Модальное окно 'Заявка на консультацию со специалистом';
  $('.js_selection_intro_btn').on('click', function() {
    $('.popup-consult__form').removeClass('hide');
    $('.popup-consult__success').removeClass('active');
    $('.js_popup_consult_overlay, .js_popup_consult').fadeIn(300);
  });

  $('.js_popup_consult_close, .js_popup_consult_overlay').on('click', function() {
    $('.js_popup_consult_overlay, .js_popup_consult').fadeOut(300);
  });

  $('.js_popup_consult_btn').on('click', function(e) {
    e.preventDefault();   

    let consultName = $('.js_popup_consult_name');   //поле для имени в попапе на странице 'каталог подбора запчпстей';
    let consultPhone = $('.js_popup_consult_phone'); //поле для телефона в попапе на странице 'каталог подбора запчпстей';
    let consultCheck = $('.js_popup_consult_checkbox'); //чекбокс в попапе на странице 'каталог подбора запчпстей';

    if (consultName.val() != "" && consultPhone.val() != "" && consultCheck.prop('checked') == true) {
          $('.popup-consult__form').addClass('hide').trigger('reset');
          $('.popup-consult__success').addClass('active');
          $('.js_popup_consult_input').removeClass('green').removeClass('red');
    } else {
      $('.js_popup_consult_input').each(function () { // меняеи цвет input в зависимости от того заполненный он иили пустой;
       if ($(this).val() != "") {
       $(this).addClass('green').removeClass('red');
       } else {
       $(this).addClass('red').removeClass('green');
       }
     });
    }

  });

    // имитация поиска на странице 'каталог подбора запчастей'
    $('.js_selection_search_btn').on('click', function(e) {
      e.preventDefault();
      if ($('.js_selection_search_input').val() != "") {
        $('.result-search').addClass('active');
      } else {
        $('.result-search').removeClass('active');
      }
    });

});
//-----------------------------------------------------------------------------------------------------

// function sayHi() {
//   $('.subscribe-form__container').addClass('active');
// }

// setTimeout(sayHi, 1000);


// Закрываем куки
$('.cookies-container input').click(function (evt) {
  evt.preventDefault();
  $('.cookies-container').addClass('none');
}
  )

//   $(function () {
//   $('.example-popover').popover({
//     container: 'body'
//   })
// })



var s_letters = "qwertyuiopasdfghjklzxcvbnm"; // Буквы в нижнем регистре
var b_letters = "QWERTYUIOPLKJHGFDSAZXCVBNM"; // Буквы в верхнем регистре
var digits = "0123456789"; // Цифры
var specials = "!@#$%^&*()_-+=\|/.,:;[]{}"; // Спецсимволы
           
var input_test = document.getElementById('current-passwordsecond');//получаем поле
var block_check = document.getElementById('block_check');//получаем блок с индикатором
       
input_test.addEventListener('keyup', function(evt){
var input_test_val = input_test.value;//получаем значение из поля
        
var is_s = false; // Есть ли в пароле буквы в нижнем регистре
var is_b = false; // Есть ли в пароле буквы в верхнем регистре
var is_d = false; // Есть ли в пароле цифры
var is_sp = false; // Есть ли в пароле спецсимволы
        
for (var i = 0; i < input_test_val.length; i++) {
    /* Проверяем каждый символ пароля на принадлежность к тому или иному типу */
    if (!is_s && s_letters.indexOf(input_test_val[i]) != -1) {
         is_s = true
    }
    else if (!is_b && b_letters.indexOf(input_test_val[i]) != -1) {
          is_b = true
    }
    else if (!is_d && digits.indexOf(input_test_val[i]) != -1) {
           is_d = true
    }
    else if (!is_sp && specials.indexOf(input_test_val[i]) != -1) {
           is_sp = true
    }
}

var rating = 0;
if (is_s) rating++; // Если в пароле есть символы в нижнем регистре, то увеличиваем рейтинг сложности
if (is_b) rating++; // Если в пароле есть символы в верхнем регистре, то увеличиваем рейтинг сложности
if (is_d) rating++; // Если в пароле есть цифры, то увеличиваем рейтинг сложности
if (is_sp) rating++; // Если в пароле есть спецсимволы, то увеличиваем рейтинг сложности
/* Далее идёт анализ длины пароля и полученного рейтинга, и на основании этого готовится текстовое описание сложности пароля */
if (input_test_val.length < 6 && rating < 3) {
    block_check.style.width = "10%";
    block_check.style.backgroundColor = '#e7140d';
}
else if (input_test_val.length < 6 && rating >= 3) {
    block_check.style.width = "50%";
    block_check.style.backgroundColor = '#ffdb00';
}
else if (input_test_val.length >= 8 && rating < 3) {
    block_check.style.width = "50%";
    block_check.style.backgroundColor = '#ffdb00';
}
else if (input_test_val.length >= 8 && rating >= 3) {
    block_check.style.width = "100%";
    block_check.style.backgroundColor = '#61ac27';
}
else if (input_test_val.length >= 6 && rating == 1) {
    block_check.style.width = "10%";
    block_check.style.backgroundColor = '#e7140d';
}
else if (input_test_val.length >= 6 && rating > 1 && rating < 4) {
    block_check.style.width = "50%";
    block_check.style.backgroundColor = '#ffdb00';
}
else if (input_test_val.length >= 6 && rating == 4) {
    block_check.style.width = "100%";
    block_check.style.backgroundColor = '#61ac27';
};
});

var prof = function() {
        $('body').addClass('shadowed');
        // $('#profitably').css('display', 'block');
        $('#profitably').css('opacity', '1');
      }




    $(document).ready(function(e) {
      setTimeout(prof, 7000);
   

    })


$('#profitably .close').click(function() {
    $('body').removeClass('shadowed');
    $('#profitably').css('display', 'none');
})


$('.header__search form').submit(function(e) {
  e.preventDefault();
  var text = $('.header__search form .form-search-control').val();
  if(text.length < 3) {
    $('.form-group-search label').addClass('active');
  } else {
    $('.form-group-search label').removeClass('active');
    window.location.replace("search-results.html");
  }
})

$('.header__search form .form-search-control').focus(function() {
  $('.form-group-search label').removeClass('active');
})