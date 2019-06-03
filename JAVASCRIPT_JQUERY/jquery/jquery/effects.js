

//toggle
$(document).ready(function(){
$( "button" ).click(function() {
  $( ".p" ).toggle();
  });

})




// chuyển về kich thích chỉ định
$(document).ready(function(){
	$('.button-run').click(function(){
		var $run = $('.box-box');
		$run.animate({
			"width" : "200px",
			"opacity" : ".7"
		}, 2000, function(){
			alert('finist');
		});
	});
});

// chạy qua chỉ định rồi chạy về lại chổ củ
$(document).ready(function(){
	$('.button-run-run').click(function(){
		var $run_run = $('.box-box-run');
		$run_run.animate({
			"width" : "200px",
			"opacity" : ".7"
		}, 2000, function(){
			$run_run.animate({
				"opacity" : "1",
				"width" : "100%"
			}, 2000 );
		});
	});
});



// chạy qua lại giữa kích thước mặc định và kích thước chỉ định liên tục

$(document).ready(function(){
	function animate1(){

		
			var $chane = $('.text-chane');
			$chane.animate({
				"width" : "200px",
				"opacity" : ".7"
			}, 2000, function(){
				//
				animate2();
			});
		
	}

	function animate2(){
		
			var $chane = $('.text-chane');
			$chane.animate({
				"width" : "100%",
				"opacity" : "1"
			}, 2000, function(){
				//

				animate1();
			});
		}
	$('.button-chane').click(function(){
		animate1();
	});
});

// Ẩn box
$(document).ready(function(){
	$('.button-hd-sh').click(function(){
		var $hidden = $('.hidden-show');
		if ($hidden.is(':visible')){			
		$hidden.hide(500);
		}
		else{
			$hidden.show(500);
		}
	})
});


// Ẩn box vs hiệu ứng slider

$(document).ready(function(){
	$('.button-slide').click(function(){
		var $slide = $('.hidden-slide');
		if ($slide.is(':visible')){			
		$slide.slideUp(500);
		}
		else{
			$slide.slideDown(500);
		}
	})
});

