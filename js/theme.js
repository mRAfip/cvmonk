/*
 Theme Name: Drox
 Theme URI: http://themewar.com/html/drox/
 Author: ThemeWar
 Author URI: http://themewar.com/
 Description: Drox - Agency & Portfolio HTML5 Responsive Template
 Version: 1.0
 License:
 License URI:
 */
/*=======================================================================
 [Table of contents]
 =========================================================================
 1. Revolution Slider 01
 2. Revolution Slider 02
 3. All Carousel
 4. Btn and Suffle
 5. Skills
 6. Qty
 7. Sidebar Mneu
 8. Count Down
 9. Fixed Header
 10. MegaMenu
 11. Mobile Menu
 12. All Toggles
 13. Back To Top and Preloader
 14. Maitaince Loader
 15. Cursor Mouse
 16. Tooltip
 17. Funfact Count
 18. Contact Form Submission
 */

(function ($) {
    'use strict';

    /* Init Vars */
    var client_sliders = $('.client_sliders'),
        featured_carousel = $('.featured_carousel'),
        team_slider = $('.team_slider'),
        feature_slider = $('.feature_slider'),
        h8_slider = $('.home_folio_carosel'),
        folio_carousel = $('.folio_carousel'),
        fs_single_sSlider = $('.fs_single_sSlider'),
        rc_post_slider = $('.rc_post_slider'),
        pro_realtedSlider = $('.pro_realtedSlider'),
        fs_single_bSlider = $('.fs_single_bSlider'),
        testimonial_slider = $('.testimonial_slider'),
        popup_folio = $('.popup_folio'),
        popup_video = $('.popup_video'),
        h4_slider = $('.h4_slider'),
        h6_slider = $('.h6_full_screen_slider'),
        slider_range = $("#slider-range"),
        countdown = $('#countdown_dashboard');

    /*--------------------------------------------------------
     / 1. Revolution Slider 01
     /----------------------------------------------------------*/
    var revapi = jQuery('#rev_slider_1').show().revolution({
        delay: 7000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: true,
                style: 'uranus',
                hide_onmobile: false,
                hide_onleave: false,
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                }
            },
            bullets: {
                enable: true,
                style: 'hermes',
                h_align: "center",
                v_align: "bottom",
                space: 10,
                hide_onmobile: false,
                hide_onleave: false,
                h_offset: 0,
                v_offset: 20
            }
        }
    });
    /*--------------------------------------------------------
     / 2. Revolution Slider 02
     /----------------------------------------------------------*/
    var revapi = jQuery('#rev_slider_2').show().revolution({
        delay: 7000,
        responsiveLevels: [1200, 1140, 778, 480],
        gridwidth: [1140, 920, 700, 380],
        sliderLayout: 'fullscreen',
        navigation: {
            arrows: {
                enable: true,
                style: 'uranus',
                hide_onmobile: true,
                hide_onleave: true,
                left: {
                    h_align: "left",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                },
                right: {
                    h_align: "right",
                    v_align: "center",
                    h_offset: 30,
                    v_offset: 0
                }
            },
            bullets: {
                enable: true,
                style: 'hermes',
                h_align: "center",
                v_align: "bottom",
                space: 10,
                hide_onmobile: true,
                hide_onleave: true,
                h_offset: 0,
                v_offset: 20
            }
        }
    });
    /*--------------------------------------------------------
     / 3. All Carousel
     /----------------------------------------------------------*/

    /*----- 3.1 Client Logo Slider -----*/
    client_sliders.owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            992: {
                items: 5
            },
            1024: {
                items: 6
            }
        }
    });
    
    /*----- 3.2 Feature Item Slider -----*/
    featured_carousel.owlCarousel({
        loop: true,
        margin: 5,
        responsiveClass: true,
        nav: false,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    
    /*----- 3.3 Team Member Slider -----*/
    team_slider.owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    
    /*----- 3.4 Featured Slider -----*/
    feature_slider.owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    /*----- 3.4 Home 8 Folio Item Slider -----*/
    h8_slider.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        autoplay: true,
        smartSpeed: 1500,
        animateOut: 'ease-out',
        animateIn: 'ease-in',
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    var allowTransitionLeft2 = true;
    var allowTransitionRight2 = true;
    h8_slider.on('mousewheel', '.owl-stage', function (e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            if (allowTransitionRight2) {
                allowTransitionRight2 = false;
                h8_slider.trigger('next.owl');
            }
            ;
        } else {
            if (allowTransitionLeft2) {
                allowTransitionLeft2 = false;
                h8_slider.trigger('prev.owl');
            }
            ;
        }
    }).on('translated.owl.carousel', function (e) {
        allowTransitionRight2 = (e.item.index > 0);
        allowTransitionLeft2 = (e.item.index > 0);
    });
    
    /*----- 3.5 Normal Folio Slider -----*/
    folio_carousel.owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        items: 3,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    /*----- 3.6 Single Folo Item Slider -----*/
    fs_single_sSlider.owlCarousel({
        loop: true,
        margin: 30,
        responsiveClass: true,
        nav: false,
        items: 3,
        dots: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });
    
    /*----- 3.7 Recent Post Slider -----*/
    rc_post_slider.owlCarousel({
        loop: false,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        nav: false,
        items: 2,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            }
        }
    });
    
    /*----- 3.8 Related Post Slider -----*/
    pro_realtedSlider.owlCarousel({
        loop: false,
        margin: 30,
        autoplay: true,
        responsiveClass: true,
        nav: false,
        items: 3,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    });

    /*----- 3.9 Single Post Item Slider -----*/
    fs_single_bSlider.owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        nav: false,
        items: 1,
        dots: true
    });

    /*----- 3.10 Testimonial Slider -----*/
    testimonial_slider.owlCarousel({
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        items: 1
    });
    
    /*----- 3.11 Portfolio Popup -----*/
    popup_folio.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: true,
        swipe: true,
        showTitle: false,
        controls: true
    });
    
    /*----- 3.12 Video Popup -----*/
    popup_video.lightcase({
        transition: 'elastic',
        showSequenceInfo: false,
        slideshow: false,
        swipe: true,
        showTitle: false,
        controls: true
    });

    /*----- 3.13 Home 4 Folio Slider -----*/
    h4_slider.owlCarousel({
        center: true,
        items: 2,
        loop: true,
        margin: 0,
        nav: false,
        dots: false,
        smartSpeed: 1500,
        animateOut: 'ease-out',
        animateIn: 'ease-in',
        responsive: {
            0: {
                items: 1
            },
            700: {
                items: 1.35
            },
            1200: {
                items: 1.52
            },
            1600: {
                items: 1.667
            }
        }
    });
    var allowTransitionLeft = true;
    var allowTransitionRight = true;
    h4_slider.on('mousewheel', '.owl-stage', function (e) {
        e.preventDefault();
        if (e.deltaY < 0) {
            if (allowTransitionRight) {
                allowTransitionRight = false;
                h4_slider.trigger('next.owl');
            }
            ;
        } else {
            if (allowTransitionLeft) {
                allowTransitionLeft = false;
                h4_slider.trigger('prev.owl');
            }
            ;
        }
    }).on('translated.owl.carousel', function (e) {
        allowTransitionRight = (e.item.index > 0);
        allowTransitionLeft = (e.item.index > 0);
    }).on('translate.owl.carousel', function (e) {
        var idx = e.item.index;
        $('.h4_slider .owl-item .ss_single_folio').removeClass('activeReady');
        $('.h4_slider .owl-item').eq(idx).children('.ss_single_folio').addClass('activeReady');
    });

    /*----- 3.14 Home 6 Slider -----*/
    h6_slider.owlCarousel({
        items: 1,
        loop: true,
        margin: 0,
        nav: true,
        navText: ['<i class="twi-angle-left2"></i>', '<i class="twi-angle-right2"></i>'],
        dots: true,
        smartSpeed: 1500
    }).on('translated.owl.carousel', function (e) {
        var idx = e.item.index;
        $('.h6_full_screen_slider .owl-item .h6s_item').removeClass('activeReady');
        $('.h6_full_screen_slider .owl-item').eq(idx).children('.h6s_item').addClass('activeReady');
    });

    if (slider_range.length > 0) {
        slider_range.slider({
            range: true,
            min: 0,
            max: 800,
            values: [18, 600],
            slide: function (event, ui) {
                $("#amount").html("$" + ui.values[ 0 ] + " — $" + ui.values[ 1 ]);
            }
        });
        $("#amount").html("$" + $("#slider-range").slider("values", 0) + " — $" + $("#slider-range").slider("values", 1));
    }


    /*--------------------------------------------------------
     / 4. Btn and Suffle
     /----------------------------------------------------------*/
    $('.drox_btn').on('mouseenter', function (e) {
        var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top: relY, left: relX})
    }).on('mouseout', function (e) {
        var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
        $(this).find('span').css({top: relY, left: relX})
    });

    $(window).on('load', function () {
        if ($(".shafull_container").length > 0)
        {
            var $grid = $('.shafull_container');
            $grid.shuffle({
                itemSelector: '.shaf_item',
                sizer: '.shaf_sizer'
            });
            /* reshuffle when user clicks a filter item */
            $('.shaf_filter li').on('click', function () {
                // set active class
                $('.shaf_filter li').removeClass('active');
                $(this).addClass('active');
                // get group name from clicked item
                var groupName = $(this).attr('data-group');
                // reshuffle grid
                $grid.shuffle('shuffle', groupName);
            });
        }
    });

    /*--------------------------------------------------------
     / 5. Skills
     /----------------------------------------------------------*/
    if ($(".single_skill").length > 0)
    {
        $('.single_skill').appear();
        $('.single_skill').on('appear', loadSkills);
    }
    var coun = true;
    function loadSkills()
    {
        $(".single_skill").each(function () {
            var datacount = $(this).attr("data-parcent");
            $(".ss_child", this).animate({'width': datacount + '%'}, 2000);
            if (coun)
            {
                $(this).find('span').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: datacount}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });

            }
        });
        coun = false;
    }
    /*--------------------------------------------------------
     / 6. Qty
     /----------------------------------------------------------*/
    if ($(".qtyBtn").length > 0)
    {
        $(".btnMinus").on('click', function () {
            var vals = parseInt($(this).next(".carqty").val(), 10);

            if (vals > 1)
            {
                vals -= 1;
                $(this).next(".carqty").val(vals);
            } else
            {
                $(this).next(".carqty").val(vals);
            }
            return false;
        });
        $(".btnPlus").on('click', function () {
            var vals = parseInt($(this).prev(".carqty").val(), 10);
            vals += 1;
            $(this).prev(".carqty").val(vals);
            return false;
        });
    }
    /*--------------------------------------------------------
     / 7. Sidebar Mneu
     /----------------------------------------------------------*/
    if ($(".sidebar_menu").length > 0)
    {
        $(".sidebar_menu ul li.menu-item-has-children > a, .menu_05 ul li.menu-item-has-children a:after").on('click', function (e) {
            e.preventDefault();
            if ($(this).parent('li').hasClass('active'))
            {
                $(this).parent('li').removeClass('active');
                $(this).next('ul.sub-menu').slideUp('slow');
            } else
            {
                $(".menu-item-has-children ul.sub-menu").slideUp('slow');
                $(".menu-item-has-children.active").removeClass("active");
                $(this).parent().toggleClass('active');
                $(this).next('ul.sub-menu').slideToggle('slow');
            }
        });
    }
    if ($(".menu_popup").length > 0)
    {
        $(".menu_popup ul li.menu-item-has-children > a").on('click', function (e) {
            e.preventDefault();
            if ($(this).parent('li').hasClass('active'))
            {
                $(this).parent('li').removeClass('active');
                $(this).next('ul.sub-menu').slideUp('slow');
            } else
            {
                $(".menu-item-has-children ul.sub-menu").slideUp('slow');
                $(".menu-item-has-children.active").removeClass("active");
                $(this).parent().toggleClass('active');
                $(this).next('ul.sub-menu').slideToggle('slow');
            }
        });
    }
    /*--------------------------------------------------------
     / 8. Count Down
     /----------------------------------------------------------*/
    if (countdown.length > 0) {
        var d = countdown.attr('data-day');
        var m = countdown.attr('data-month');
        var y = countdown.attr('data-year');
        countdown.countdown({
            until: new Date(y, m - 1, d),
            format: 'DHMS'
        });
    }
    /*--------------------------------------------------------
     / 9. Fixed Header
     /--------------------------------------------------------*/
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 40)
        {
            $(".fix_header").addClass('fixedHeader animated fadeInUp');
        } else
        {
            $(".fix_header").removeClass('fixedHeader animated fadeInUp');
        }
    });

    /*--------------------------------------------------------
     / 10. MegaMenu
     /----------------------------------------------------------*/
    $(document).on('ready', function () {
        var w = $('header > .container > .row, header > .container-fluid > .row').width() - 30;
        $('.megamenu').css({'width': w, 'left': '0 !important'});
    });

    /*--------------------------------------------------------
     / 11. Mobile Menu
     /---------------------------------------------------------*/
    $(window).on("load resize", function (e) {
        if ($(window).width() < 991) {
            $('.mobileMenuBar a').on('click', function (e) {
                e.preventDefault();
                $('.mobile_menu > ul').slideToggle();
            });
            $('.mobile_menu ul li.menu-item-has-children').each(function () {
                var $this = $(this);
                $this.append('<span class="submenu_toggler"><i class="twi-caret-down"></i></span>');
            });
            $('.mobile_menu ul li.menu-item-has-children > span.submenu_toggler').on('click', function () {
                var $this = $(this);

                if ($(this).hasClass('active-span')) {
                    $('i', $this).removeClass('twi-caret-up').addClass('twi-caret-down');
                } else {
                    $('i', $this).addClass('twi-caret-up').removeClass('twi-caret-down');
                }

                $(this).prev('ul.sub-menu, .megamenu').slideToggle();
                $(this).toggleClass('active-span');
            });
        }
        ;
    });

    $(window).on("load resize", function (e) {
        if ($(window).width() < 991) {
            $('.mb_menu_5').on('click', function (e) {
                e.preventDefault();
                $('.menu_05 > ul').slideToggle();
            });
        }
        ;
    });

    /*--------------------------------------------------------
     / 12. All Popup Toggles
     /----------------------------------------------------------*/
    $('.shares_toggles a').on('click', function (e) {
        e.preventDefault();
        $('.popup_socail_sec').toggleClass('active');
    });
    $('.popup_social_overlay, #sfCloser').on('click', function () {
        $('.popup_socail_sec').removeClass('active');
    });

    $('.social_popup a').on('mouseenter', function () {
        var $this = $(this);
        var bg = $this.attr('data-bg');
        $('.pop_background .pb_social_bg, .popu_social_mod .pb_social_bg').css({'background-color': bg, 'opacity': 1, visibility: 'visible'})
    }).on('mouseleave', function () {
        $('.pop_background .pb_social_bg, .popu_social_mod .pb_social_bg').css({'background-color': '#17191b', 'opacity': 0, visibility: 'hidden'})
    });

    $('.search_toggles a').on('click', function (e) {
        e.preventDefault();
        $('.popup_search_sec').toggleClass('active');
    });
    $('.popup_search_overlay, #search_Closer').on('click', function () {
        $('.popup_search_sec').removeClass('active');
    });

    $('.popup_togggle_menu').on('click', function (e) {
        e.preventDefault();
        $('.popup_menu').addClass('active').fadeIn();
        setTimeout(function () {
            if ($('.popup_menu').hasClass('active')) {
                var tlMenu = new TimelineLite();
                tlMenu.set($(".animated_menu"), {y: 80, opacity: 0});
                $(".animated_menu").each(function (index, element) {
                    tlMenu.to(element, 0.5, {y: 0, opacity: 1, delay: 0.4, ease: Power2.easeOut}, index * 0.1)
                });
            } else {
                var tlMenu = new TimelineLite();
                $(".animated_menu").each(function (index, element) {
                    tlMenu.to(element, 0.25, {y: -80, opacity: 0, ease: Power2.easeIn}, index * 0.05)
                });
            }

        }, 20)
    });
    $('#close_menu').on('click', function () {
        var tlMenu = new TimelineLite();
        $(".animated_menu").each(function (index, element) {
            tlMenu.to(element, 0.25, {y: -80, opacity: 0, ease: Power2.easeIn}, index * 0.05)
        });
        $(".popup_menu ul.sub-menu").slideUp('slow', function () {
            $(".menu-item-has-children.active").removeClass("active");
            $('.popup_menu').removeClass('active');
        });
        setTimeout(function () {
            $('.popup_menu').fadeOut()
        }, 500)
    });


    if ($('#scene_1').length > 0) {
        $('#scene_1').parallax();
    }

    /*--------------------------------------------------------
     / 13. Back To Top and Preloader
     /---------------------------------------------------------*/
    var back = $("#backtotop"),
            body = $("body, html");
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > $(window).height())
        {
            back.css({bottom: '50px', opacity: '1', visibility: 'visible'});
        } else
        {
            back.css({bottom: '-50px', opacity: '0', visibility: 'hidden'});
        }

    });
    body.on("click", "#backtotop", function (e) {
        e.preventDefault();
        body.animate({scrollTop: 0}, 800);
        return false;
    });

    /*--------------------------------------------------------
     / 14. Maitaince Loader
     /---------------------------------------------------------*/
    $(window).on('load', function () {
        if ($('.maintanance_bar').length > 0) {
            $('.maintanance_bar').each(function () {
                var $this = $(this);
                var today = new Date();

                var date1 = new Date($this.attr('data-sd'));
                var date2 = new Date($this.attr('data-ed'));

                var totaldiffTime = Math.abs(date2 - date1);
                var totaldiffDays = Math.ceil(totaldiffTime / (1000 * 60 * 60 * 24));

                var todaydiffTime = Math.abs(date1 - today);
                var todaydiffDays = Math.ceil(todaydiffTime / (1000 * 60 * 60 * 24));

                var parcents = (todaydiffDays / totaldiffDays) * 100;
                parcents = parcents.toFixed();
                $('.mb_child', $this).animate({'width': parcents + '%'}, 2000);

                $this.find('.percentst').each(function () {
                    var $this = $(this);
                    $({Counter: 0}).animate({Counter: parcents}, {
                        duration: 2000,
                        easing: 'swing',
                        step: function () {
                            $this.text(Math.ceil(this.Counter) + '%');
                        }
                    });
                });
            });
        }
    });

    /*--------------------------------------------------------
     / 15. Cursor Mouse
     /---------------------------------------------------------*/
    if ($('body').hasClass('enable_drox_coursor') && !$('html').hasClass('touch')) {
        $('body').append('<div id="drox_custom_cursor_holder"><span id="drox_custom_cursor"></span></div>');
        var holder = $("#drox_custom_cursor_holder"),
                cursor = $("#drox_custom_cursor"),
                reverse = $('.menu_01 ul ul.sub-menu, .megamenu, #backtotop, .show_cart_area, .pop_search_background, .pop_background, .popu_social_mod, .footer_01, .copyright_01:not(.foot_home_8, .white_bg_copyright), .drox_btn, .footer_02:not(.white_bg_footer), .popup_menu, .h6_full_screen_slider.owl-carousel .owl-nav button, .contact_form input[type="submit"], .commentForm input[type="submit"], .price_slider_wrapper input[type="submit"], .add_to_car_btn, .folio_02.black_overlay'),
                crose = $('.popup_social_overlay, .popup_search_overlay'),
                fader = $('.fader_item');
        holder.css({
            transform: "matrix(1, 0, 0, 1, " + $(window).width() / 2 + ", " + $(window).height() / 2 + ")"
        }), $(document).on("mousemove", function (e) {
            cursor.hasClass("drox_block") || holder.css({
                transform: "matrix(1, 0, 0, 1, " + e.clientX + ", " + e.clientY + ")"
            })
        }).on("mouseleave", function () {
            cursor.hasClass("drox_block") || cursor.addClass("drox_fade_coursor")
        }).on("mouseenter", function () {
            cursor.hasClass("drox_block") || cursor.removeClass("drox_fade_coursor")
        }), $("a").on("mouseenter", function () {
            cursor.hasClass("drox_block") || holder.addClass("drox_hovering")
        }).on("mouseleave", function () {
            cursor.hasClass("drox_block") || holder.removeClass("drox_hovering")
        }), reverse.length && reverse.on("mousemove", function () {
            cursor.hasClass("drox_block") || cursor.addClass("drox_reverse")
        }).on("mouseleave", function () {
            cursor.hasClass("drox_block") || cursor.removeClass("drox_reverse")
        }), fader.length && fader.on("mouseenter", function () {
            cursor.hasClass("drox_block") || cursor.addClass("drox_fade_coursor")
        }).on("mouseleave", function () {
            cursor.hasClass("drox_block") || cursor.removeClass("drox_fade_coursor")
        }), crose.on("mouseenter", function () {
            cursor.hasClass("drox_block") || holder.addClass("drox_cross")
        }).on("mouseleave", function () {
            cursor.hasClass("drox_block") || holder.removeClass("drox_cross")
        })
    }
    /*--------------------------------------------------------
     / 16. ToolTip
     /---------------------------------------------------------*/
    if ($('.folio_05').length > 0) {
        $('body').append('<div class="folio_tooltips_wrapper"><div class="ftw_titler"></div><div class="ftw_cater"></div></div>');
        var $ftw_holder = $('.folio_tooltips_wrapper');
        var $ftw_title = $ftw_holder.find('.ftw_titler');
        var $ftw_cat = $ftw_holder.find('.ftw_cater');
        $('.folio_05').each(function () {
            var $this = $(this);
            $this.on("mousemove", function (e) {
                $ftw_holder.css({
                    top: e.clientY,
                    left: e.clientX
                })
            }), $this.on("mouseenter", function () {
                var $ftw_holder_new = $(this),
                        $ftw_title_new = $ftw_holder_new.find("h3"),
                        $ftw_cat_new = $ftw_holder_new.find("p");
                $ftw_title_new.length && $ftw_title.html($ftw_title_new.html()), $ftw_cat_new.length && $ftw_cat.html($ftw_cat_new.html()), $ftw_holder.hasClass("fwt_is_active") || $ftw_holder.addClass("fwt_is_active")
            }).on("mouseleave", function () {
                $ftw_holder.hasClass("fwt_is_active") && $ftw_holder.removeClass("fwt_is_active")
            }), $(window).scroll(function () {
                $ftw_holder.hasClass("fwt_is_active") && ($ftw_holder.offset().top < $this.offset().top || $ftw_holder.offset().top > $this.offset().top + $this.outerHeight()) && $ftw_holder.removeClass("fwt_is_active")
            });
        })
    }
    /*--------------------------------------------------------
     / 17. Funfact Count
     /----------------------------------------------------------*/
    var skl = true;
    $('.timer').appear();
    $('.timer').on('appear', function () {
        if (skl)
        {
            $('.timer').each(function () {
                var $this = $(this);
                jQuery({Counter: 0}).animate({Counter: $this.attr('data-counter')}, {
                    duration: 3000,
                    easing: 'swing',
                    step: function () {
                        var num = Math.ceil(this.Counter).toString();
                        $this.html(num);
                    }
                });
            });
            skl = false;
        }
    });

    $('.popupsocial_mod_2').on('click', function (e) {
        e.preventDefault();
        $('.popu_social_mod').addClass('active');
    });
    $('#sfCloser_2').on('click', function () {
        $('.popu_social_mod').removeClass('active');
    });

    $('.cate_show h2 a').on('mouseenter', function () {
        var $this = $(this);
        var id = $this.attr('data-img');
        $(id).addClass('active');
    }).on('mouseleave', function () {
        $('.cate_images img').removeClass('active');
    });
    /*--------------------------------------------------------
     / 18. Contact Form Submission
     /--------------------------------------------------------*/
    $('#contact_form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);

        $('input[type="submit"]', this).attr('disabled', 'disabled');
        $('.ast_loader', this).fadeIn();

        var form_data = $this.serialize();

        var required = 0;
        $(".required", this).each(function () {
            if ($(this).val() === '')
            {
                $(this).addClass('reqError');
                required += 1;
            } else
            {
                if ($(this).hasClass('reqError'))
                {
                    $(this).removeClass('reqError');
                    if (required > 0)
                    {
                        required -= 1;
                    }
                }
            }
        });

        if (required === 0) {
            $.ajax({
                type: 'POST',
                url: 'ajax/mail.php',
                data: {form_data: form_data},
                success: function (data) {
                    $('input[type="submit"]', $this).removeAttr('disabled');
                    $('.ast_loader', $this).fadeOut();

                    $this.remove('.ast_con_message');
                    $('.ast_con_message', $this).fadeIn().html('Congratulation! Message successfully sent.');
                    setTimeout(function () {
                        $('.ast_con_message', $this).fadeOut().html('');
                    }, 5000);
                }
            });
        } else {
            $('input[type="submit"]', $this).removeAttr('disabled');
            $('.ast_loader', $this).fadeOut();
            $('.ast_con_message', $this).fadeOut().html('');
        }

    });
    $(".required").on('keyup', function () {
        $(this).removeClass('reqError');
    });

})(jQuery), (function ($) {
    var width = 100,
            perfData = window.performance.timing,
            EstimatedTime = -(perfData.loadEventEnd - perfData.navigationStart),
            time = parseInt((EstimatedTime / 1000) % 60) * 100;


    var PercentageID = $("#precent"),
            start = 0,
            end = 100,
            durataion = time;
    animateValue(PercentageID, start, end, durataion);

    function animateValue(id, start, end, duration) {

        var range = end - start,
                current = start,
                increment = end > start ? 1 : -1,
                stepTime = Math.abs(Math.floor(duration / range)),
                obj = $(id);

        var timer = setInterval(function () {
            current += increment;
            $(obj).text(current + "%");
            $(".loader_bar").css({width: current + '%'})

            if (current == end) {
                clearInterval(timer);
            }
        }, stepTime);
    }


    setTimeout(function () {
        $('.preloader-wrap').fadeOut(400);
    }, time);

})(jQuery);