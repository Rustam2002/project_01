$('#nav ul li').each(function(){
    $(this).on("click", function(){
        if ($(this).hasClass('home_li')) {
            $(".list a").removeClass('active');
            $(".list.home_li a").addClass('active');
            $(".main_page").addClass('p_active');
            $(".portfolio_page").removeClass('p_active');
            $(".about_page").removeClass('p_active');
        }else if ($(this).hasClass('portfolio_li')) {
            $(".list a").removeClass('active');
            $(".list.portfolio_li a").addClass('active');
            $(".main_page").removeClass('p_active');
            $(".portfolio_page").addClass('p_active');
            $(".about_page").removeClass('p_active');
        }else if ($(this).hasClass('about_li')) {
            $(".list a").removeClass('active');
            $(".list.about_li a").addClass('active');
            $(".main_page").removeClass('p_active');
            $(".portfolio_page").removeClass('p_active');
            $(".about_page").addClass('p_active');
        }
    });
});



    $('.brg').on("click",function(){
        $('.brg').addClass('dn');
        $('.menu_brg').addClass('db');
        $('#nav ul').addClass('brg_ul');
        $('.nav_mute').addClass('brg_nav');
    })
    $('.nav_mute').on("click",function(){
        $('.menu_brg').removeClass('db');
        $('.brg').removeClass('dn');
        $('#nav ul').removeClass('brg_ul');
        $(this).removeClass('brg_nav');
    })
    $('.menu_brg').on("click",function(){
        $(this).removeClass('db');
        $('.brg').removeClass('dn');
        $('#nav ul').removeClass('brg_ul');
        $('.nav_mute').removeClass('brg_nav');
    })

    $('.dark').on("click",function(){
        $('body').addClass('dark_mode');
        $('#nav').addClass('dark_mode_f');
        $('footer').addClass('dark_mode_f');
        $('.line').addClass('dark_mode_revers');
        $('.line_b').addClass('dark_mode_revers');
        $('.second').addClass('dark_mode_txt');
    })
    $('.light').on("click",function(){
        $('body').removeClass('dark_mode');
        $('#nav').removeClass('dark_mode_f');
        $('footer').removeClass('dark_mode_f');
        $('.line').removeClass('dark_mode_revers');
        $('.line_b').removeClass('dark_mode_revers');
        $('.second').removeClass('dark_mode_txt');
    })

    $('.login').on("click",function(){
        $('.form').removeClass('dn');
    })

    $('.btn_ex').on("click",function(){
        $('.form').addClass('dn');
    })
    $('.mute_form').on("click",function(){
        $('.form').addClass('dn');
    })
