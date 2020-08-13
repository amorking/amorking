$(function () {

    /*메뉴*/
    $(".nav>li").mouseover(function () {
        $(".nav>li").children(".submenu").stop().slideDown();
        $(".sub_back").stop().slideDown();
    });
    $(".nav>li").mouseout(function () {
        $(".nav>li").children(".submenu").stop().slideUp();
        $(".sub_back").stop().slideUp();
    });

    /*슬라이드*/
    var cnt = 0;
    setInterval(function () {
        $(".slider li").fadeOut();
        cnt++;
        if (cnt > 2) {
            cnt = 0;
        }
        $(".slider li").eq(cnt).fadeIn();
    }, 3500);


    /*탭메뉴*/
    $(".tab-title a").click(function () {
        $(".tab-title a").removeClass('on');
        $(".tab-con .tab").removeClass('on');
        $(this).addClass('on');
        $("#" + $(this).data('id')).addClass('on');
    });



    /*팝업*/

    $("#notice li").click(function () {
        $("#popup").fadeIn();
    });
    $(".close").click(function () {
        $("#popup").fadeOut();
    });

});