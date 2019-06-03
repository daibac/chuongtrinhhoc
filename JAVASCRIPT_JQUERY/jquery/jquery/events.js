


// 8-3
$(document).ready(function(){

	$('.events_click').click(function(){ 
		alert('Thuê xe ')
	})

	$('.events_click').click(function(){
		alert('Thuê người lái ')
	})

	$('.events_click').click(function(){
		alert('Đi mua hoa')
	})

	$('.events_click').click(function(){
		alert('Ra mắt nhà bạn gái')
	})

	$('.events_click').click(function(){
		alert('Đi chơi khuya')
	})


	var click2 = '';
	$('.events_click').click(function(){
		click2 = ('2 vạch');
	$('.click2').html(click2);
	$('.click2').css('color', '#4fff00').css('background','#666').css('font-size', '32px').css('text-transform','uppercase').css('font-weight','600;');
	})
});




// 1-5` submit
$(document).ready(function(){
	$('.day1-5').click(function(){
		alert('Ngày 1 - 5 làm gì? ');
	});
	// submit 
	$('.form1-5').submit(function(){
		alert('submided');
	});


});


$(document).ready(function(){
	//click vào ô text 
	$('.focus').focus(function(){
		var value = $ (this).val();
		$('.focus-result').html(value);
	});


	$(".focusin-p").focusin(function(){
		$(".focusin").css("display" ,"inline").fadeOut( 5000 );
	});





});

/*
//test hiển thị mà sai. test lại sau
var h = '';
$(document).ready(function(){
	//click vào ô text 
	$('.focus').focus(function(){
		h('click me');
	$('.result').html(h);
		});
})
*/


// khi vào ô nhập text mà click ra ngoài
$(document).ready(function(){
	$('.blur').blur(function(){
		var value = $ (this).val();
		$('.blur-result').html(value);
	});



// khi nhấn xuống bt, nhả chuột ra thục hiện lệnh

	$('.keyup').keyup(function(){
		var value = $ (this).val();
		$('.keyup-result').html(value);
	});



// khi nhấn xuống  thục hiện lệnh

	$('.keydown').keydown(function(){
		var value = $ (this).val();
		$('.keydown-result').html(value);
	});



// khi nhấn Giữ thục hiện lệnh

	$('.keypress').keypress(function(){
		var value = $ (this).val();
		$('.keypress-result').html(value);	
	});


// nhấn chuột xuống
	$( ".Mousedown" ).mousedown(function() {
	  $('.Mousedown-result').append('Mousedown');
	});

// nhả chuột ra 
	$(".Mouseup").mouseup(function(){
	  $('.Mouseup-result').text('Mouseup');
	})


	$( ".Mouse" )
		.mousedown(function() {
		  $('.Mouse-result').append('<span style="color:red;"> Mousedown </span>');
		})
		.mouseup(function(){
		  $('.Mouse-result').append('<span style="color:white;"> Mouseup </span>');
		});




// di chuyển chuột vào phần tử( kích hoạt 1 lần)
	$(".mouseenter").mouseenter(function(){
		$('.mouseenter-result').append('di chuyển chuột qua phần tử');
	});


// di chuyển chuột trong phần tử sẻ kích hoạt ( vô hạn đến khi ra khỏi phần tử)
	$(".mousemove").mousemove(function( event ) {
		var pageCoords = "( " + event.pageX + ", " + event.pageY + " )";
		var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
		$( ".mousemove-result-1" ).text( "( event.pageX, event.pageY ) : " + pageCoords );
		$( ".mousemove-result-2" ).text( "( event.clientX, event.clientY ) : " + clientCoords );
	});

	
// di chuyển chuột trong phần tử sẻ kích hoạt ( vô hạn đến khi ra khỏi phần tử)
	$(".mouseout").mousemove(function() {
		var n = 0;
		$(this).css('background','red');
		$('.mouseout-result').text( ++n );
	});

//
$('.mouseover').mouseover(function(){
	var n = 0;
		$(this).css('background','red');
		$('.mouseover-result').text( ++n );
})


















// hover
	$('.hover').hover(function(){
		$(this).addClass('hover-');
	}, function(){
		$(this).removeClass('hover-');
	});









//.on /.off

$('.delete-all').click(function(){
	$("body")
	.off(".Mouseenter",".mousemove");

});






$( window ).resize(function() {
  $( ".resize-result" ).text( $( window ).width() );
  $( ".resize-result1" ).html( $( window ).width() );
  $( ".resize-result2" ).append( $( window ).width() );
  $( ".resize-result3" ).prepend( $( window ).width() );
});




$( window ).unload(function() {
  return "Bye now!";
});

























});