

$(document).ready(function(){

	$('.submit').click(function(){
		$('.text').val('Nhập giá trị khác');
		$('.text').attr('style', 'color:#fff ; background:gray;');

		var value = $('.text').attr('style');
		$('.show').html(value);



	});

})




// thêm class
$(document).ready(function(){

	$('.submit-box').click(function(){
		$('.text-box').val('Nhập giá trị khác');
		$('.text-box').addClass('text-box123123');



	});

})



// kết hop kiểm tra -> xóa -> thêm class

$(document).ready(function(){
	$('.submit-box-1').click(function(){
	
		var more = $('.text-box-1');


/* Cách truyền thống
		if ($(more).hasClass('text-box123123')) {
			$(more).removeClass('text-box123123');
		}
		else{ $(more).addClass('text-box123123');
		}

*/
// jquery hổ trợ 
		$(more).toggleClass('text-box123123');

	});
});





$(document).ready(function(){
	$('.click-here').click(function(){
		var chane = $('.sub-menu');



/*  Cách truyền thống
		if ($(chane).hasClass('hidden')){
			$(chane).removeClass('hidden');
			}
		else{
			$(chane).addClass('hidden')
		}


*/
// jquery hổ trợ 
		$(chane).toggleClass('hidden');


	});
});






$(document).ready(function(){
	$('.button').click(function(){
		var check = $('.checkbox');
		// kt xem dữ liệu bên trong
		var status = $(check).prop('checked');
		alert(status);



	});
});

$(document).ready(function(){
	$('.button1').click(function(){
		var check = $('.checkbox1');
		//thêm
		$(check).prop('my-data','Giá trị bị ẩn');
		alert($(check).prop('my-data'));

		//xóa
		$(check).removeProp('my-data','Giá trị bị ẩn');
		alert($(check).prop('my-data'));



	});
});

