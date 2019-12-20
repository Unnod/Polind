$(function(){

    new WOW().init();

    $('.menu__btn').on('click', function() {
        $('.menu-list').slideToggle();
    });

 

    var mixer = mixitup('.search__items');

    

});