$('select.drop-select').each(function(){
                new Select({
                    el: this,
                    selectLikeAlignment: $(this).attr('data-select-like-alignement') || 'auto',
                    className: 'select-theme'
                });
            });
 $(document).ready(function () {
 	var navHeight = 52;
	$("#yt_1").click(function () {
		$("#r1").prop('checked', true);					   
 		$("html,body").stop().animate({
 			scrollTop: $(".go_here").offset().top - navHeight
 		}, 800);
 	});
   $("#yt_2").click(function () {
		$("#r2").prop('checked', true);					   
 		$("html,body").stop().animate({
 			scrollTop: $(".go_here").offset().top - navHeight
 		}, 800);
 	});
   $("#yt_3,#yt_4").click(function () {	
		$("#r2,#r1").prop('checked', false);							
 		$("html,body").stop().animate({
 			scrollTop: $(".go_here").offset().top - navHeight
 		}, 800);
 	});
});
$(window).scroll(function () {
		if ($(window).width() > 0) {
			if ($(this).scrollTop() > 10) {
				$('header').addClass('boxshow');
				$('.scroll_show').fadeIn(500);
			}else {
				$('header').removeClass('boxshow');
				$('.scroll_show').fadeOut(100);
			}
		}
	});

$(document).ready(function(){
	$(window).load(function() {
	var select_w = $(".select-target").width(); 				
	console.log(select_w);
	home_top=33;
    $(".select-content").css({width:select_w+home_top});
  });				   
});

 function debounce(fn, delay) {
        var timer
        return function() {
            var context = this
            var args = arguments
            clearTimeout(timer)
            timer = setTimeout(function() {
                fn.apply(context, args)
            }, delay)
        }
    }
    $(window).on('resize', debounce(function() {
        var _windowWidth = $(window).width();
        var _windowHeight = $(window).height();
         if (_windowWidth > 1025 &&_windowHeight>770){
            $(".main-section,.movie-section").mouseover(
            function(e) {
                $(document).bind("mousemove", function(e) {
                    $(".top_bg,.top_bg5").css("transform","translate3d("+ (- (e.screenX*.02)) +"px,"+ ( -( e.screenY*.05))+ "px, 0px)");
                    $(".top_bg2,.top_bg4").css("transform","translate3d("+ (- (e.screenX*.04)) +"px,"+ ( -( e.screenY*.01))+ "px, 0px)");
                    $(".top_bg3").css("transform","translate3d("+ (- (e.screenX*.02)) +"px,"+ ( -( e.screenY*.0))+ "px, 0px)");
                });

            })
         }

    }, 1000));
$(window).trigger('resize');


	
