// JavaScript Document

var current_task = -1;
var tasks = new Array();

/**
*	Returns two unique random numbers in range [0, n)
*	(In an ugly way...)
*/
function randomize_red(n) {
	var list = new Array();
	for(var i = 0; i < n; i++)
		list.push(i);
	var result = Array();
	result.push(list.pop(Math.floor(Math.random() * list.length)));
	result.push(list.pop(Math.floor(Math.random() * list.length)));
	return result;
}

/**
*	Adds the task specified by string, with red boxes specified by the list red_boxes.
*	The last can be omitted; two random values are then generated.
*/
function add_task(string, red_boxes) {
	var words = string.split(' ');
	if(words.length > 6)
		words = words.slice(0, 6);

	if(red_boxes == undefined)
		var values = randomize_red;

	var reds = red_boxes || [Math.floor(Math.random() * words.length), Math.floor(Math.random() * words.length)];
	console.log(reds);
	tasks.push([words, reds]);
}

/**
*	Binds keys, and displays the first task.
*/
function init() {
	$(document).keyup(onKey);
	next_task();
}

/**
*	Displays the next task.
*/
function next_task() {
	current_task++;
	if(current_task >= tasks.length)
		return;
	var words = tasks[current_task][0];
	var red_boxes = tasks[current_task][1];
	var $boxes = $('#boxes');
	$boxes.html('');
	for(var i = 0; i < words.length; i++) {
		var $li = $('<li></li>');
		$li.attr('hidden', true)
		$li.html(i+1);
		$li.attr('word_number', i);
		$li.attr('red', $.inArray(i, red_boxes) >= 0);
		
		$li.click(boxClick);
		
		$boxes.append($li);
	}
}

/**
*	Handles click events, displaying boxes when numbers are clicked,
*	and the next task when enter is clicked.
*/
function boxClick(e) {
	var $e = $(e.target);
	i = parseInt($e.attr('word_number'));
	if($e.attr('hidden')) {
		$e.attr('hidden', false);
		$e.html(tasks[current_task][0][i]);	
		if($e.attr('red') == 'true')
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
		case 13: //Enter
			next_task();
			return;
	}
	if(i == -1 || i >= tasks[current_task][0].length)
		return;
	
	$('#boxes').find('li').eq(i).trigger('click');
}