// JavaScript Document

var words;

function initialize() {
	var $boxes = $('#boxes');
	for(var i = 0; i < words.length; i++) {
		var $li = $('<li></li>');
		$li.attr('hidden', true)
		$li.html(i+1);
		$li.attr('word_number', i);
		
		$li.click(boxClick);
		
		$boxes.append($li);
	}

	$(document).keyup(onKey);
}

function boxClick(e) {
	var $e = $(e.target);
	i = parseInt($e.attr('word_number'));
	if($e.attr('hidden')) {
		$e.attr('hidden', false);
		$e.html(words[i].text);	
		if(words[i].red)
			$e.addClass('red');
	} else {
		$e.attr('hidden', true);
		$e.removeClass('red');
		$e.html(i+1);	
	}
}

function onKey(e) {
	var i = -1;
	switch(e.keyCode) {
		case 49: //1
		case 97:
			i = 0;
			break;
		case 50: //2
		case 98:
			i = 1;
			break;
		case 51: //3
		case 99:
			i = 2;
			break;
		case 52: //4
		case 100:
			i = 3;
			break;
		case 53: //5
		case 101:
			i = 4;
			break;
		case 54: //6
		case 102:
			i = 5;
			break;
	}
	if(i == -1 || i >= words.length)
		return;
	
	$('#boxes').find('li').eq(i).trigger('click');
}