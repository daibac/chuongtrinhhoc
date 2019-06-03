$(document).ready(function () {

	$('.tab-title li a').click(function()
	{
		var id = $(this).attr('href').replace('#', '');		

		//tab-title dc active khi click
		$('.tab-title li').removeClass('active-tab');
		$(this).parent().addClass('active-tab');

		// ẩn các tab khac
		$('#' + id).siblings().hide();
		//hiển thị tab đc click vs hiệu ứng
		$('#' + id).fadeIn();

		return false;
	});

$('.tab-title li:first-child a').click();


});