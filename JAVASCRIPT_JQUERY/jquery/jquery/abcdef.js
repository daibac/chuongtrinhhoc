$(document).ready(function(){


// khi click vào id button thì các id có đc khai báo bên dưới sẻ bị ẩn đi, click sẻ hiện lên < thay đổi trạng thái các id đc chỉ định>
	$('#button').click(function(){
		$('#h5, #h3, #h8').toggle();
	});
// sự kiện double-click
	$('#h10').dblclick(function(){
		$(this).hide();
	});
// mouseenter sự kiện xảy ra khi trỏ chuột vào phần tử đó
	$('#h11').mouseenter(function(){
		$(this).css('color','red');
	});
// hover sự kiện xảy ra khi hover chuột vào phần tử đó
	$('#h12').hover(function(){
		$(this).css('color','red');
	});


// mouseleave  sự kiện xảy ra khi ra khỏi phẩn tử
	$('#h13').mouseleave(function(){
		$(this).css('color','red');
	});

	


				// tất cả phần tử p khi được click đều bị ẩn đi
//					$("p").on('click', function(){
//						  $(this).hide();
//					});




			// Sự kiện của chuột

// suwj kieenj click 
	$('.click').click(function(){
		$(this).hide();
	});

//double click
	$(".dblclick").dblclick(function(){
		$(this).hide();
	});
// mouseenter khi trỏ chuột vào
	$('.mouseenter').mouseenter(function(){
		$(this).hide();
	});
// mouseleave khi ròi khởi phần tử
	$('.mouseleave').mouseleave(function(){
		$(this).hide();0
	});

//hover kết hợp mouseenter(vào) và mouseleave(ra)
	$('.hover').hover(function(){
		$(this).css({'color':'red' , 'background':'yellow'});
	}, function(){
		$(this).css({'color':'green' , 'background':'orange'});
	});



			// Sự kiện của Bàn phím < keyboard >
// key press 
	$('.keypress').keypress(function(){
		var press = $(this).val();
		$('.result-keypress').html(press);
	});
// keydown
	$('.keydown').keydown(function(){
		var down = $(this).val();
		$('.result-keydown').html(down);
	});

// keyup
	$('.keyup').keyup(function(){
		var up = $(this).val();
		$('.result-keyup').html(up);
	});


			//form events

// submit
	$('form').submit(function(){
		alert('Ghét vì phải load lại trang :)')
	});
// focus thay đổi phần tử đang làm việc
	$('.focus').focus(function(){
		$(this).css({
			'background':'green',
			'color':'#fff'
		});
	});

// focus thay đổi phần tử khi không làm việc với nó nữa
	$('.blur').blur(function(){
		$(this).css({
			'background':'yellow',
			'color':'red'
		});
	});
// Kết hợp focus + blur
	$('.focus-blur').focus(function(){
		$(this).css({
			'background':'gray',
			'color':'#fff'
		});
	});

	$('.focus-blur').blur(function(){
		$(this).css({
			'background':'yellow',
			'color':'red'
		});
	});

//  Change
// Sự kiện change() xảy ra khi giá trị của các phần tử như <select> <textarea> <input> bị thay đổi.

	$('.change').change(function(){
		$(this).css({
			'background':'green',
			'color':'#fff'
		});
	});

// resize 
// Sự kiện réize() xảy ra khi giá trị của các phần tử bị thay đổi kích thước.
	var m = 0;
	$(window).resize(function(){
    $(".resize-1").text(m += 1);
  });


	$( '.scroll' ).scroll(function() {
	  $( "span" ).css( "display", "inline" ).fadeOut( "slow" );
	});


//	$( window ).unload(function() {
//		return "Bye now!";
//	});

	$('.ononon').on({
		click : function(){
			$(this).css('color','gray');
		},
		mouseenter : function(){
			$(this).css('color','red');
		},
		mouseleave : function(){
			$(this).css('color','green');
		}
	});















});
