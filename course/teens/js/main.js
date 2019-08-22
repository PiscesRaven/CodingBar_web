/*$('.drop-select').val('L1BS01 線上自學 PyGame 遊戲設計');*/

$(".class1").click(function () {
	$('.drop-select').val('L1BS01 線上自學 PyGame 遊戲設計');
	$('select.drop-select').each(function(){
                new Select({
                    el: this,
                    selectLikeAlignment: $(this).attr('data-select-like-alignement') || 'atuo',
                    className: 'select-theme',
                });
            });
});
$(".class2").click(function () {
	$('.drop-select2').val('L1BT01 線上小班家教 PyGame 遊戲設計');
	$('select.drop-select2').each(function(){
                new Select({
                    el: this,
                    selectLikeAlignment: $(this).attr('data-select-like-alignement') || 'atuo',
                    className: 'select-theme',
                });
            });
});
$(".class3").click(function () {
	$('.drop-select3').val('L1AS02 線上自學 Python 入門');
	$('select.drop-select3').each(function(){
                new Select({
                    el: this,
                    selectLikeAlignment: $(this).attr('data-select-like-alignement') || 'atuo',
                    className: 'select-theme',
                });
            });
});
$(".class4").click(function () {
	$('.drop-select4').val('L1AT02 線上小班家教 Python 入門');
	$('select.drop-select4').each(function(){
                new Select({
                    el: this,
                    selectLikeAlignment: $(this).attr('data-select-like-alignement') || 'atuo',
                    className: 'select-theme',
                });
            });
});
 $(document).ready(function () {
	 $('.drawer').drawer(); 
	 addAnchorAnimation();
     addAnchorIndex();
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
     $("#yt_5").click(function () {						
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
				$('.scroll_show').fadeOut(0);
			}
		}
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
		var select_w = $(".number_give").width();
		var home_top2 = 872;
         if (_windowWidth > 1025 &&_windowHeight>770){
            $(".main-section,.movie-section").mouseover(
            function(e) {
                $(document).bind("mousemove", function(e) {
                    $(".top_bg,.top_bg5,.top_bg6").css("transform","translate3d("+ (- (e.screenX*.02)) +"px,"+ ( -( e.screenY*.05))+ "px, 0px)");
                    $(".top_bg2,.top_bg4,.top_bg7").css("transform","translate3d("+ (- (e.screenX*.04)) +"px,"+ ( -( e.screenY*.01))+ "px, 0px)");
                    $(".top_bg3").css("transform","translate3d("+ (- (e.screenX*.02)) +"px,"+ ( -( e.screenY*.0))+ "px, 0px)");
                });

            })
         };
		if (_windowWidth > 1001 &&_windowHeight>0){
			$(".signup").click(function(e) {
				$(document).bind("mousemove", function(e) {
				//console.log(select_w);
				//console.log(home_top);
				//console.log(home_top2);
                $(".select-content").css({width:home_top2});		
				 });
			})
        };
		if (_windowWidth < 1000 &&_windowHeight>0){
			$("body").mouseover(function(e) {
				$(document).bind("mousemove", function(e) {
				//console.log(select_w);
				//console.log(home_top);
				//console.log(home_top2);
                $(".select-content").css({width:select_w});	
				 });
			})
        };
    }, 0));
$(window).trigger('resize');
 $('.show_tab').click(function() {
		$('.show_tab').toggleClass('active')					   
		$('#hid_tab').slideToggle();
		$("html,body").stop().animate({
 			scrollTop: $(".show_tab").offset().top - 130
 		}, 800);
 });	
$('.flex-1,.c04').click(function() {
	$('.flex-1').addClass('active');	
	$('.flex-2,.flex-3,.flex-4').removeClass("active"); 
    $('.c01').fadeIn(500);
    $('.c02,.c03,.c04').fadeOut(0);
  });
 $('.flex-2,.c01').click(function() {
	$('.flex-2').addClass('active');	
	$('.flex-1,.flex-3,.flex-4').removeClass("active"); 
    $('.c02').fadeIn(500);
    $('.c01,.c03,.c04').fadeOut(0);
  });
 $('.flex-3,.c02').click(function() {
	$('.flex-3').addClass('active');	
	$('.flex-1,.flex-2,.flex-4').removeClass("active"); 
    $('.c03').fadeIn(500);
    $('.c01,.c02,.c04').fadeOut(0);
  });
$('.flex-4,.c03').click(function() {
	$('.flex-4').addClass('active');	
	$('.flex-1,.flex-2,.flex-3').removeClass("active"); 
    $('.c04').fadeIn(500);
    $('.c01,.c02,.c03').fadeOut(0);
  });
// add navigation anchor animation
function addAnchorAnimation() {
    $('.two_btn').find('[id^="li-"]').on('click', function () {
        if ($(this).index() > 2) return;  // only top 3 lists need to add animation
        $(".navbar-toggle").click() // close navigation window

        var target_name = $(this).attr('id').split('-')[1],
            bodyPadding = parseInt($('body').css('padding-top')) - 4;
        if (window.location.href.indexOf('Class') >= 1) {
            target_offset = $('#section-' + target_name).offset().top - bodyPadding;
            $('body, html').animate({
                scrollTop: target_offset
            }, 1000);
        } else {
            sessionStorage.setItem("goto", target_name);
        }
    });
}
//add by nick
function addAnchorIndex() {
    if (sessionStorage.getItem("goto") != null) {
        var target_name = sessionStorage.getItem("goto"), bodyPadding = parseInt($('body').css('padding-top')) - 4;
        target_offset = $('#section-' + target_name).offset().top - bodyPadding;
        $('body, html').animate({
            scrollTop: target_offset
        }, 1000);
        sessionStorage.removeItem("goto");
    }
}

wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
                    wow.init();