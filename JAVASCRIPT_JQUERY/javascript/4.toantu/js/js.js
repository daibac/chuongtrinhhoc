var y = 9;
document.write( "Giá trị y: " + y);


// tt cộng
x = y + 2;
document.write( "<br> Giá trị x= y + 2 = " + x);

// tt trừ
x = null;
x = y - 2;
document.write( "<br> Giá trị x= y - 2 = " + x);

// tt nhân
x = null;
x = y * 2;
document.write( "<br> Giá trị x = y * 2 = " + x);

// tt Chia
x = null;
x = y / 2;
document.write( "<br> Giá trị x = y / 2 = " + x);

// tt % chia lấy phần dư
x = null;
x = y % 2;
document.write( "<br> Giá trị x = y % 2 = " + x);

// tt ++ có 2 trường hợp 

//trường hop 1 : y++
x = null;
x = y++;
document.write( "<br><br> hai trường họp của toán tử ++ / -- <br> Giá trị x = y++ = " + x);
document.write( "<br> Giá trị y = " + y);

//trường hop 2 : ++y
x = null;
x = ++y;
document.write( "<br><br><br>giá trị ' y ' ở tt trên cộng thêm 1 nên bây giờ  ' y '  là 10 nha!");
document.write( "<br> Giá trị x = ++y = " + x);
document.write( "<br> Giá trị y = " + y);

//trường hop 2 : y--
x = null;
x = y--;
document.write( "<br><br><br>giá trị ' y ' ở tt trên cộng thêm 1 nên bây giờ  ' y '  là 11 nha!");
document.write( "<br> Giá trị x = y-- = " + x);
document.write( "<br> Giá trị y = " + y);


//trường hop 1 : --y
x = null;
x = --y;
document.write( "<br><br><br>giá trị ' y ' ở tt trên trừ 1 nên bây giờ  ' y '  là 10 nha!");
document.write( "<br> Giá trị x = --y = " + x);
document.write( "<br> Giá trị y = " + y);
