$(document).ready(function(){

//click vào thẻ a
	$('.listvideo ul li a').click(function(){
//khai báo src ở the hiện tại lấy thuộc tính href
	var src = $(this).attr('href');
//trong class framevideo thay thế bên trong gia trị src bằng src mới khai báo
	$('.framevideo').attr('src', src);

//khai báo id video ở thẻ hiện tại lấy id và thay thê nội dung id_ thành khoảng trắng
	var id_video = $(this).attr('id').replace('id_','');
// dưa 1 cái gì nào đó vào sau dấu # trên url web
	window.location.hash = id_video;


// doi ten tieu de
	var title = $(this).text();
//trong class title thay thế nội dung text thành nọi dung title mới khai báo ở trên
	$('.title').text(title);




//xóa class tất cả các active 
	$('.listvideo ul li a').removeClass('active');
//sau đó mới  thêm class active
	$(this).addClass('active');






	// k reload trang
	return false;
});


//mục đích khi xem video thứ n nào đó reload trang nó vẫn ở vi deo đó

// khai báo biến hash hash  trên thanh url thay dấu # THÀNH KHOẢNG TRẮNG để có thể đưa vào code
	var hash = window.location.hash.replace('#','');

	if (hash !=''){
			$('#id_'+hash).click();
	}
	else{
//lấy video dầu tiên. thiets ập click cho video dau tiên
	$('.listvideo ul li:first-child  a').click();

	}
});