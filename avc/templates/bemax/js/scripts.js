/*-----------------------------------------------------------------------------------

    Theme Name: Bemax
    Theme URI: http://
    Description: The Multi-Purpose Onepage Template
    Author: UI-ThemeZ
    Author URI: http://themeforest.net/user/UI-ThemeZ
    Version: 1.0

-----------------------------------------------------------------------------------*/


jQuery(function() {

    "use strict";

    var wind = jQuery(window);



    // scrollIt
    jQuery.scrollIt({
      upKey: 38,                // key code to navigate to the next section
      downKey: 40,              // key code to navigate to the previous section
      easing: 'swing',          // the easing function for animation
      scrollTime: 600,          // how long (in ms) the animation takes
      activeClass: 'active',    // class given to the active nav element
      onPageChange: null,       // function(pageIndex) that is called when page is changed
      topOffset: -80            // offste (in px) for fixed top navigation
    });



    // navbar scrolling background
    wind.on("scroll",function () {

        var bodyScroll = wind.scrollTop(),
            navbar = jQuery(".navbar"),
            navbloglogo = jQuery(".blog-nav .logo> img"),
            logo = jQuery(".navbar .logo> img");

        if(bodyScroll > 100){

            navbar.addClass("nav-scroll");
            //logo.attr('src', 'img/logo-dark.png');

        }else{

            navbar.removeClass("nav-scroll");
            //logo.attr('src', 'img/logo-light.png');
            //navbloglogo.attr('src', 'img/logo-dark.png');
        }
    });

    // close navbar-collapse when a  clicked
    jQuery(".navbar-nav a").on('click', function () {
        jQuery(".navbar-collapse").removeClass("show");
    });

    jQuery('ul.navbar-nav li a').click(function (e) {
        var linkHref = jQuery(this).attr("href");
        jQuery('html, body').animate({
            scrollTop: jQuery(linkHref).offset().top
        }, 1000);
        return false;
    });

    jQuery('ul.navbar-nav li a').on('click', function() {
        var t = jQuery(this); //optional but faster if we use it more than once
        t.parents('ul.navbar-nav').find('li').removeClass('active'); //remove all the active classes
        t.parentsUntil('ul.navbar-nav', 'li').addClass('active'); //set the active class to all the li parents of the anchor element
    })


    // progress bar
    wind.on('scroll', function () {
        jQuery(".skills-progress span").each(function () {
            var bottom_of_object = 
            jQuery(this).offset().top + jQuery(this).outerHeight();
            var bottom_of_window = 
            jQuery(window).scrollTop() + jQuery(window).height();
            var myVal = jQuery(this).attr('data-value');
            if(bottom_of_window > bottom_of_object) {
                jQuery(this).css({
                  width : myVal
                });
            }
        });
    });



    // sections background image from data background
    var pageSection = jQuery(".bg-img, section");
    pageSection.each(function(indx){
        
        if (jQuery(this).attr("data-background")){
            jQuery(this).css("background-image", "url(" + jQuery(this).data("background") + ")");
        }
    });


    // === owl-carousel === //

    // Testimonials owlCarousel
    jQuery('.testimonails .owl-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 15,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500
    });

    // Team owlCarousel
    jQuery('.team .owl-carousel').owlCarousel({
        loop:false,
        margin: 30,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:4
            }
        }
    });

    // Blog owlCarousel
    jQuery('.blog .owl-carousel').owlCarousel({
        loop:true,
        margin: 30,
        mouseDrag:false,
        autoplay:true,
        smartSpeed:500,
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            700:{
                items:2
            },
            1000:{
                items:3
            }
        }
    });


    // magnificPopup
    jQuery('.gallery').magnificPopup({
        delegate: '.popimg',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    // YouTubePopUp
    jQuery("a.vid").YouTubePopUp();


    // countUp
    jQuery('.numbers .count').countUp({
        delay: 10,
        time: 1500
    });


    // Services Tabs
    jQuery(".tabs-icon").on("click", ".item", function(){

        var myID = jQuery(this).attr("id");

        jQuery(this).addClass("active").siblings().removeClass("active");

        jQuery("#" + myID + "-content").fadeIn(700).siblings().hide();

    });


    // Map Show
    jQuery(".info").on("click", ".icon-toggle", function(){

        jQuery(".info").toggleClass("map-show");
        jQuery(".map").toggleClass("o-hidden");

    });


});


// === window When Loading === //

jQuery(window).on("load",function (){

    var wind = jQuery(window);

    // Preloader
    jQuery(".loading").fadeOut(500);


    // stellar
    wind.stellar();


    // isotope
    jQuery('.gallery').isotope({
      // options
      itemSelector: '.items'
    });

    var jQuerygallery = jQuery('.gallery').isotope({
      // options
    });

    // filter items on button click
    jQuery('.filtering').on( 'click', 'span', function() {

        var filterValue = jQuery(this).attr('data-filter');

        jQuerygallery.isotope({ filter: filterValue });

    });

    jQuery('.filtering').on( 'click', 'span', function() {

        jQuery(this).addClass('active').siblings().removeClass('active');

    });


});


// Slider 
jQuery(document).ready(function() {

    var owl = jQuery('.header .owl-carousel');


    // Slider owlCarousel
    jQuery('.slider .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin: 0,
        autoplay:true,
        smartSpeed:500
    });

    // Slider owlCarousel
    jQuery('.slider-fade .owl-carousel').owlCarousel({
        items: 1,
        loop:true,
        margin: 0,
        autoplay:true,
        smartSpeed:500,
        animateOut: 'fadeOut'
    });

    owl.on('changed.owl.carousel', function(event) {
        var item = event.item.index - 2;     // Position of the current item
        jQuery('h3').removeClass('animated fadeInLeft');
        jQuery('h1').removeClass('animated fadeInRight');
        jQuery('p').removeClass('animated fadeInUp');
        jQuery('.butn').removeClass('animated zoomIn');
        jQuery('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInLeft');
        jQuery('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInRight');
        jQuery('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInUp');
        jQuery('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated zoomIn');
    });

});
