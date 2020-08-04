$(function(){
	
	/*메뉴*/
	$(".nav>li").mouseover(function(){
		$(".nav>li").children(".submenu").stop().slideDown();
		$(".sub_back").stop().slideDown();
	});
	$(".nav>li").mouseout(function(){
		$(".nav>li").children(".submenu").stop().slideUp();
		$(".sub_back").stop().slideUp();
	});
	
	/*슬라이드*/
 var cnt = 0; 
 setInterval(function(){
     $(".slideWrap li").fadeOut();
     cnt++;
     if(cnt > 2) {
              cnt = 0; 
     } 
      $(".slideWrap  li").eq(cnt).fadeIn();
     }, 4000);


	/*탭메뉴*/
	$(".noticeTitle a").click(function(){
		var target=$(this).attr("href");console.log(target)
		$(this).addClass("on").siblings().removeClass("on");
		$(target).show().siblings().hide();
	});



	/*팝업*/	
	
	$("#notice li").click(function(){
		$("#popup").fadeIn();
	});
	$(".close").click(function(){
		$("#popup").fadeOut();
	});
	
});





