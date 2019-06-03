


/*
//không theo cách này các thẻ li thêm vào không thể xóa vì hàm xóa đẫ thực hiện truocs khi hàm đc thêm

$(document).ready(function(){

	$('.delete').click(function(){
		if(!confirm('Bạn có chắc muốn xóa không?')){
			return false;
		}
		// Xóa
		$(this).parent().remove();

	});


	// bổ sung thêm thẻ li
	$('.add').click(function(){
		var html = '<li>';
			html += '<input type="text" name="hobby" class="hobby" placeholder="hobby">';
			html += '<span class="delete">X</span>';
			html += '</li>';
		
		$('.hobby-list').append(html);

	});
});
*/


// thêm chức nawg xóa được các thẻ li vừa thêm

$(document).ready(function(){

	$('.hobby-list').on('click', '.delete', function(){
		if(!confirm('Bạn có chắc muốn xóa không?')){
			return false;
		}
		// Xóa
		$(this).parent().remove();

	});


	// bổ sung thêm thẻ li
	$('.add').click(function(){
		var html = '<li>';
			html += '<input type="text" name="hobby-num" class="hobby" placeholder="hobby">';
			html += '<span class="delete">X</span>';
			html += '</li>';
		
		$('.hobby-list').append(html);

	});

	// Xóa tất cả thẻ li trong hobby
	$('.delete-all').click(function(){
		if(!confirm('Bạn có chắc muốn xóa không?')){
			return false;
		}
		$('.hobby-list').html('');
	});



	$('.myform').submit(function(){
		
		var hobbys = $('input[name="hobby-num"]');

		var value = '';

		for (var i = 0; i < hobbys.length; i++){
			value += $(hobbys[i]).val() + ',';
		} 

		$('input[name="hobby"]').val(value);	
	});


});










$(document).ready(function(){
	
	$(document).ready(function(){ 

	   var submit = $("button[type='submit']");
	   submit.click(function(){
	          var data = $('form #test-form').serialize();
	          
	          var email = ('#email');
		        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		        if (!filter.test(email.value)) {
		            alert('Hay nhap dia chi email hop le.\nExample@gmail.com');
		            email.focus;
		            return false;
		        }
		        else
		        {
		            return true;
		        }
	          $.ajax({
	                type : 'GET', 
	                url : 'https://script.google.com/macros/s/AKfycbyoJFlbsT1yB8kPSI3nBco86d2j7iptcma1QrcOZabPLQEM7YA_/exec',
	                dataType:'json',
	                crossDomain : true,
	                data : data,
	                success : function(data) { 
	          			if(data == 'false') {
	                     alert('Thêm không thành công, bạn cũng có thể sử dụng để hiển thị Popup hoặc điều hướng');
	                  	}else{
	                     alert('Đã thêm dữ liệu vào Form');
	               	 }
	       		}
		    });
		    return false;
		   });
		 });
})