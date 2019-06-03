 
 // có 3 cách để gọi hàm
 var user1 = "Lê Đại Phú";
 var user2 = "Lê Đại Phong";
 var user3 = "Lê Đại Huỳnh";
 var user4 = "Lê Đại Thắng";

// Cách 1 : gọi trực tiếp hàm
		 document.write("Xin chào <b> " + user1 + " </b> đã ghé thăm diễn đàn <br>");
		 document.write("Xin chào <b> " + user2 + " </b> đã ghé thăm diễn đàn <br>");
		 document.write("Xin chào <b> " + user3 + " </b> đã ghé thăm diễn đàn <br>");
		 document.write("Xin chào <b> " + user4 + " </b> đã ghé thăm diễn đàn <br>");



		 // sử dụng hàm

		 // cách 1
		 function showMessage(user){
			
		 document.write("Xin chào <b> " + user + " </b> đã ghé thăm diễn đàn <br>"); 	
		 }

		 //gọi hàm đơn giản gõ tên hàm
		showMessage(user1);
		showMessage(user2);
		// hoặc truyền thảng tham số vào k cần khai báo
		showMessage("Lê Đại Hành");
		showMessage("Đại Bác");



// cách 3 : gọi hàm từ 1 hàm khác
function callShowMessage() { 
	showMessage( user4);
}
