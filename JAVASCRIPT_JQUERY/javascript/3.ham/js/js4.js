
//nếu hàm nào sai thì tất cả các hàm phía sau sẻ không chạy



// biến toàn cục năm bên ngoài function . có thể áp dụng bất kì đâu trên trang web
// biến cục bộ khai báo trong function . Chỉ có thể khai báo trong funcion!
//ví dụ ở dưới biến a chỉ được gọi khi nằm trong function
var x = "' song song nhất cẩu ' là gì?";
y = "' song song ' là 2 ";
z = "' nhất ' là 1 ";
c = "' cẩu ' là cún ";
v = "' song song nhất cẩu ' là ' 2 1 cún ' ";
b = "' 2 1 cún ' là ' hun một cái ' ";
function math() {
	var a = "Mấu truyện vui";
	alert(a);
	alert(x);
	alert(y);
	alert(z);
	alert(c);
	alert(v);
	alert(b);
}
math();


//không dc vì nằm ngoài function. nếu hàm này sai thì tất cả các hàm phía sau sẻ không chạy
// nên để thành cmt 
//                                         alert(a);
// biến sẻ duduowcj hiển thị vì là biến toàn cục
alert(x);
