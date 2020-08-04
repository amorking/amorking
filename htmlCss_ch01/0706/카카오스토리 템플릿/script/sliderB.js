$(document).ready(function(){
	
	var wid = $(".panel li").width();
	
	$(".prev").on("click",function(){
		$(".panel").stop().animate({"margin-left":wid*-2},600,function(){
			$(".panel li:first").appendTo(".panel");
			$(".panel").css({"margin-right":-wid});
		});
	});
	
	
	$(".next").on("click",function(){
		$(".panel").stop().animate({"margin-left":"0px"},600,function(){
			$(".panel li:last").prependTo(".panel");
			$(".panel").css({"margin-right":-wid});
		});
	});
		

	
});















