

var age = 5;

document.write( " Tuổi các bé là : " + age + "<br>");

var result = ( age > 5 ) ? "Vào tiểu học" : " Chưa đủ tuổi vào lớp 1";
document.write( result + "<br> <hr> <hr>");



var age = 6;

document.write( " Tuổi các bé là : " + age + "<br>");

var result = ( age > 5 ) ? "Vào tiểu học" : " Chưa đủ tuổi vào lớp 1" + "";
document.write( result + "<br> <hr> <hr> ");


// 0 / - / +
document.write( "Bài toán hiển thị 1 số có phải là số 0 số dương hay là số âm <br><br>");

var x = -5;
var sosanh = (x == 0) ? " x là 0" : (x <= 0) ? "x là số âm" : "x là số dương" ;
document.write( sosanh + "<br><br>");

var x = 0;
var sosanh = (x == 0) ? " x là 0" : (x <= 0) ? "x là số âm" : "x là số dương" ;
document.write( sosanh + "<br><br>");

var x = 10;
var sosanh = (x == 0) ? " x là 0" : (x <= 0) ? "x là số âm" : "x là số dương" ;
document.write( sosanh + "<br><br>");