$(document).ready(function(){
	$('.click-here').click(function(){
	$('.click-here').css({
		"background" : "url('images/bg-gray.jpg')",
		"border" : "1px solid red",
		"color" : "#fff",
		"text-shadow" : "-1px -1px 2px #ff00f5",
		"font-size" : "20px",
		"padding" : "20px",
		"text-transform" : "uppercase"
	});
});

})





//đặc biệt luôn phải return: false; cho hàm này

$(document).ready(function(){
	$('.menu ul li >a').click(function(){
		var $ul = $(this).next();
/*
		// khi bấm vào 1 thẻ li thì tất cả thẻ con đã mở phải đóng lại
		$('.menu ul li ul ').removeClass('active');

		if($ul.hasClass('active')){
			$ul.removeClass('active');
		}
		else{
			$ul.addClass('active');
		}

*/
/*
// tối ưu code (2 cái remove nên k cần nữa
		$('.menu ul li ul ').removeClass('active');
		$ul.addClass('active');


*/

//hiệu ứng


// visible (trạng thái click chưa nhả ra đang hiển thị)
		var $visible = $('.menu ul li ul:visible');
		$visible.slideToggle();

//hiệu ứng xổ xuống
		$ul.slideToggle();



// Css laij khi click vao ul li >a
$(document).ready(function(){
	$('.menu ul li >a').mousedown(function(){
		$('.menu ul li >a').css({
			"background" : "none",
			"color" : "#000"
		});
	});
});





		return false;
	});
});

