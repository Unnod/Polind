$(function(){

    new WOW().init();

    $('.menu__btn').on('click', function() {
        $('.menu-list').slideToggle();
    });

    $('.header__items').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        dots: false,
        autoplay: true,
        pauseOnHover:true,
        responsive: [
            {
              breakpoint: 1411,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 580,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
        ]
    });
    // var header_slider = $('.header__items');
    // $(function(){
    //   header_slider.find('.slick-active:first').toggleClass('disable');
    //   header_slider.find('.slick-active:last').toggleClass('disable');
    // });

    var mixer = mixitup('.search__items');

    

});