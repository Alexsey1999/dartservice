$(function() {

  $('.services__item-inner').each((index, elem) => {
    $(elem).on('click', function() {

      $('.services__item-content').not(this).slideUp();
      $(elem).next().not(":visible").slideDown();

      if ($(elem).find('.icon-arrow_drop_down').hasClass('arrow-active')) {
        $('.icon-arrow_drop_down').removeClass('arrow-active')
        return
      }

      $('.icon-arrow_drop_down').removeClass('arrow-active')
      $(elem).find('.icon-arrow_drop_down').addClass('arrow-active');

    })
  })

  $('.feedback__slider').slick({
    slidesToShow: 2,
    vertical: true,
    prevArrow: '<i class="icon-keyboard_arrow_up feedback-prev"></i>',
    nextArrow: '<i class="icon-keyboard_arrow_down feedback-next"></i>',
    verticalSwiping: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1181,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          vertical: false,
          verticalSwiping: false,
          dots: true,
          arrows: false,
          speed: 1200,
        }
      },
    ]
  })

  $('.team__slider').slick({
    slidesToShow: 1,
    infinite: true,
    arrows: false,
  })

  $('.boorger').on('click', function() {
    $('.header__nav').slideToggle()
  })

})
