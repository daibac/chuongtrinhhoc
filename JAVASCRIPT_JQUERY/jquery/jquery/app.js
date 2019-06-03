

// Ví dụ in ra thông tin tất cả text bên trong ul




$(document).ready(function(){

// hàm đếm số lượng thẻ li
	//var ul = $('.list'); ==> // lấy thẻ ul. thẻ ul cchuwas tất cả các thẻ con trong nó
	// var li = $(ul.find('li')); ==> // Tìm kiếm tất cả thẻ li trong thẻ ul
	// alert(li.length);


	// hàm lấy dữ liệu
	var content = '';

	var ul = $('.list');

	// trở thành 1 array
	var li = $(ul).find('li');

	// kiểm tra các giá trị bên trong của 1 đối tượng bất kỳ( chỉ tác dụng hiển thị trên console )
	console.log(li);
	

	for(var i = 0; i < li.length; i++){
		content += '<p><a href="index.html" style="color:green;">' + $(li[i]).text() + '</a></p>';
	}


	$('.result').html(content);
});









/*
//selector     *      choinj tất cacr các thẻ html
$(document).ready(function(){
	// thêm backround vào tất cả thẻ trên toàn trang html kêt cả head , meta ,title,...
	$ ('*').css('background', 'gray');

	//sử dụng trong thẻ nào đó ( chọn thẻ có class là list và gán backg cho tất cả các thẻ bên trong)
	$('.list *').css('background','green');

});


*/




//1 số cách chọn

/*
$(document).ready(function(){

	//chọn bằng id
//	$('#list-li').css('color','yellow');

	//chọn bằng class
//	$('.list-li').css('color','#999999');

	// chọn bằng tag name 
//	$('ul li:first-child a').css('color', '#000').css('background','#fff');

	//chọn bawnghf attribute ( tên thẻ và thuộc tính trong đó)
//	$('a[title="ajax"]').css('color','#FF9900');
	//ngược lại
//	$('a[title != "ajax"]').css('color', '#fff');


})

*/