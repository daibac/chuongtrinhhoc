






/// đổi màu cho toàn bộ phần tử đc chỉ đinhj
$(document).ready(function(){
	
	var colors = ['red','blue','pink','gray','yellow','green'];
	function getRandomInt(max, min) {
	  return Math.floor(Math.random() * (max - min +1)) + min;
	}

	$('#clickme').click(function(){
		var list = $('ul li');

		var random = getRandomInt(0, 5);

		$(list).css('color', colors[random]);
	});

});





/// Đổi màu tùng phần tử
$(document).ready(function(){
	
	var colors = ['red','blue','pink','gray','yellow','green'];
	function getRandomInt(max, min) {
	  return Math.floor(Math.random() * (max - min +1)) + min;
	}

	$('#clickrandom').click(function(){
		var list = $('ul li');

		for (var i = 0; i < list.length; i++){

			var random = getRandomInt(0, 5);

			$(list[i]).css('color', colors[random]);

		}


	});

});