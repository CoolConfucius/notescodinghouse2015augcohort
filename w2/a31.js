$(document).ready(init);
function init(){
	console.log('working');
	// $(document).on('scroll', documentScroll);
	$('#enter').click(enterClicked); 
	//for specifically click events
	// It's a good idea to pass in event for the handler. 
	// if it's a specific button, I like to do an id. I'm not going to have more than one thing. 
	// If you're always careful of what you're selecting... no problem? 
	// same class, same handler. $('button').click(enterClicked); would include all buttons. Rule of thumb, be specific. 
	// click is a short hand. .on is the generic listener, be about any event. long way is $().on('click', enterClicked)
	// if we want double click, can say: 
	//$('#enter').on('dblclick', enterClicked); 
	//$('#item').on('keyup', inputKeyup); 
	$('#item').on('keypress', inputKeyup); 
};

var isBlack = true;  

// function documentScroll(e){
// 	// console.log(e); //gives event everytime you scroll. 
// 	// console.log( $(document).scrollTop() ); 
// 	var distanceFromTop = $(document).scrollTop(); 
// 	// this is how far we are from the top of page. Let's change the color of rect. 
// 	var $rect = $('#rect'); 
// 	// we could do the css function of jquery. 
// 	// if(distanceFromTop > 112){
// 	// 	$rect.css('background-color', 'red');
// 	// } else {
// 	// 	$rect.css('background-color', 'black')
// 	// }
// 	// $rect.css('background-color', distanceFromTop > 122 ? 'red' : 'black');
// 	// Every time we do this, it's a DOM manipulation. Not good. We only want to change it if we have to. Let's have some boolean. 
// 	if(distanceFromTop > 112 && isBlack){
// 		$rect.css('background-color', 'red');
// 		//this way, only do it when need to. 
// 		isBlack = false; 
// 	} else if(distanceFromTop <=122 && !isBlack){
// 		$rect.css('background-color', 'black');
// 		isBlack = true;
// 	}

// };

function enterClicked (event) {
	console.log('enter clicked'); 
	// console.log('event:', event); 
	// if(event.shiftKey){
	// 	//if true, holding shift, 
	// 	alert('shift key pressed!'); 
	// }
	//to get the input, 
	var $item = $('#item'); 
	var $list = $('#list');
	
	$list.data('sort', 'descending')
	$list.data('other', 1589);

	var sort = $list.data('sort');
	var other = $list.data('other'); 
	console.log('sort:', sort);
	console.log("other:", other);
	// console logs the change, but we're not actually changing the DOM. We're not chaning normal, but just the data attribute. 
	// I'm setting a new data attribute that doesn't exist in the html at all. We're reading it. We're able to get that value out. And it's an actual number value we set, not a string of that number. 

	var name = $item.val(); 
	// why val and not text? 
	// text refers to what's in the closing tag. Input keeps the words in the value of it. THat's the way it handles the words itself, a value. 
	// the value of input such as value='initial' is not text. It's an form element. 
	// $item.val(name.toUpperCase()); 
	// // ^ makes the input value upper case. 	
	var $div = $('<div>').text(name); 
	$list.append($div); //same as $div.appendTo($list); 
	//$div.prependTo($list); 
};

function inputKeyup(e){
	//console.log(e); 
	// Use String.fromCharCode to convert the ascii. 
	console.log(String.fromCharCode(e.which));
	// now this console logs the key that's pressed. Can also keep track of upper case
}

// prepend makes new first child. append makes new last child. 
// prepend and append make children of selected thing. before and after make siblings of the thing. 
// http://learn.jquery.com/using-jquery-core/data-methods/
// giving sencond argument is setting. Just giving one arguement is getting. 
// You can write your jquery directly in your console! 
// inputs and outputs: 
// $('#list').data('other', [2,3,4])
// [<div class=​"col-xs-6" id=​"list" data-sort=​"ascending">​…​</div>​]
// $('#list').data('other')[1]
// 3
// We can also do: 
// $('#list').attr('data-sort') // gives "ascending"
// $('#list').data('sort') // gives descending. Don't use attr. 

// CRUD: create read update and delete. A to do app is the classic crud app. Let's do that. 
// Here's what I want. It's an extension of what we have. We want to have a table... 
// We already got an input box. This is going to be our Task. We can enter in a name of a task. For ex: "buy cheese" and we have a button "add" . This much we got. 
// What we want to do here is have this task add to a table. Each row is going to represent one task. In the first column, we have a check box. 
// Or we can give the text a strike through while it's checked. When you hit an add button, you get a task and a check box. 
// See todo list. 

// Towers. On the left most tower, you have a number of disks. Each one is smaller than the one below it. The object of the game is to move all the disks from the first tower to the last tower. Rule. You cannot drop a disk on one that is smaller than it. You can only move one at a time. 