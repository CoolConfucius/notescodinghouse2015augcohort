// var str = 'this is my crazy string';
// console.log(str.split(' '));
// console.log(str.split(/ /));
//These two output the same 
// console.log(str.split(/my/));
// var str = 'this is my crazy string_this_that and the_other';
// console.log(str.split(/[_ ]/));
// console.log(str.split(/([_ ])/));
//capture group: I want to match that thing and also keep it. What? Oh! It keeps it in the array! 
// var math = "2+5*9-2/99"; 
// console.log('some stuff\nsome stuff\nsome stuff\nsome stuff\nsome stuff\n')
// console.log(math.split(/([+\-*/])/));
// Remember bracket is range and - means range. So use \- for subtract. Or. 
// console.log(math.split(/([-+*/])/));
//So it knows - isn't the range but subtract. 
//Regex is an object like everything else in JS. Regex MDN. 
//Rubular. It's built on Ruby, but it's good enough. Alternative is Scriptular, js regex. Regex101 is the one. 
// RegExp test() . Match does more. Test just returns a true or false. 
// /([-+/*])/
// var str = "aiefjkjintkljisefnlujknljkl";
// console.log(/u/.test(str));
// console.log(/U/.test(str));
//search(regex) is kind of like an index of. String.prototype.search() . 
// console.log(str.search(/u/)); //returns 19, the index of u
// console.log(str[19]);
//Search is simple but fast.
// var str = "afeaoiefjkjintkljisefnlujknljkluanefoakejfnefaon";
// exec is like match. Except it's the other direction. RegExp.prototype.exec() . 
// match. we find the match and get it. 
// var str = 'If the regular expression does not include the g flag, returns the same result as RegExp.exec().';
// console.log(str.match(/g/)); 
// console.log(str.match('g')); 
// console.log(str.match(/g/g)); 
// console.log(str.match(/\w/g));
// console.log(str.match(/\w\w/g));
// console.log(str.match(/\w\w\w/g));
// console.log(str.match(/\w\w\w\w/g)); 
//we can make this better by using \b, boundary. 
// console.log(str.match(/\b\w\w\w\w/g)); 
// console.log(str.match(/\b\w{4}/g)); 
// console.log(str.match(/\b\w{4,}/g)); // this is four or more characters 
// console.log(/8/.exec(20750492783423))
// console.log(str.match(/\b\w{4,}/));
// In Node, if you don't give the global flag, it returns a 3 item array. It kind of looks like an object. Are those keys? 
// console.log(str.match(/\b\w{4,}/).index);
// var result = str.match(/\b\w{4,}/);
// var match = result[0];
// var index = result.index; 
// console.log('match:', match, 'index:', index); 

// make an email address matcher 

//My work: 
// var reg = /\b\w{3,50}\@(yahoo|gmail|hotmail)\.(com|net|org|edu|gov)\b/ig; 
// var text = "dsfkjsdlf\njk jkldsf@hotmail.net \ndsfkldsj coolconfucius@yahoo.com dfkljasd\nlkfj"; 
// console.log(text.match(reg)); 
//

// var str = 'The capturing groups are numbered according to the order of le';
// var regex = /\w+(ou)\w+/g;
// console.log(str.match(regex));
// var regex = /\w+(ou)\w+/;
// console.log(str.match(regex));
// var str = 'ou tou ouu tout';
// console.log(str.match(regex));
//?: matches but not remember the match. Non capturing group. 
// var regex = /\w+(?:ou)\w+/;
// console.log(str.match(regex)); 
// var regex = /\w+(?:ou)+\w+/;
// console.log(str.match(regex)); 
// var str = 'ou tou ouu tout eifjijouououefijeijfiej'
// console.log(str.match(regex)); 
// var regex = /\w+(ou)+\w+/;
// console.log(str.match(regex)); 
// not doing global so stopping at the first match! 
// var regex = /\w+(ou)+\w+/g;
// console.log(str.match(regex)); 
// var str = 'Mr. Jack Sprat and Mr. Jack Jackson';
// console.log(str.match(/Jack/g)); 
// console.log(str.match(/Jack(?=Sprat)/g)); 
// console.log(str.match(/Jack(?= Sprat)/g)); 
// console.log(str.match(/Jack Sprat/g)); 
// console.log(str.match(/Jack(?! Jackson)/g)); 
// console.log(str.match(/Jack(?! Jackson| )/g)); 
//Give comment with regex! Use it carefully. 
// ^ and $ . ^ only gives us match if it's begining of input. 
// var str = 'aelifj alfeij laeifj vubka kafejn akfjn bkj nhejkn';
// console.log(str.match(/^\w+\b/)); 
// to match hex, /[0-9a-fA-F]/ 
// console.log('eiaf if jaijf ialvj elaij aliej alivj aliejf laiejf lijukhaku'.match(/\w+$/));
// console.log('eiaf if jaijf ialvj elaij aliej alivj aliejf laiejf lijukhaku'.match(/\w+\s*$/));
// m flag makes deal with each line on it's own! 
// var str = 'eoiafj aejifjfia\nfijbi fej ak efi kfe\nefaij aeifj';
// console.log(str.match(/^\w+/mg));
//^^ That was the first word of each line! 
// console.log(str.match(/\b[A-Z]+\b/g));
// ^ to match only uppercase proceeded by and followed by word boundary 
// var str = 'the thing that we need';
// return truthy or null, that's true or false 
// if(str.search(/something/) !== -1){
// 	//We found something 
// }
// or: 
// if(str.test(/something/) !== -1){

// }
//Let's look at string.prototype.replace() 
//That's say we want to replace thing with something 
// var result = str.replace('thing','something');
// console.log(result);
// var str = 'the thing that we need thing thing fjeijfiejthingjiejf';
// var result = str.replace('thing','something');
// console.log(result);
// To replace all the things: 
// var result = str.replace(/thing/g, 'something');
// console.log(result);
// var result = str.replace(/thing/g, 'something');

// function replacer(match, p1, p2, p3, offset, string) {
//   // p1 is nondigits, p2 digits, and p3 non-alphanumerics
//   return [p1, p2, p3].join(' - ');
// }
// var newString = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, replacer);
// console.log(newString); 

// var result = str.replace(/\w+/, function(match, index, string){
// 	console.log(match, index, string);
// });
// console.log(result); 
// var result = str.replace(/\w+/, function(match, index, string){
// 	console.log(match, index, string);
// 	return 'CANADA';
// });
// console.log(result); 
// var result = str.replace(/\w+/g, function(match, index, string){
// 	console.log(match, index, string);
// 	return 'CANADA';
// });
// console.log(result); 
// var result = str.replace(/\w+/g, function(match, index, string){
// 	console.log(match, index, string);
// 	return match + '!';
// });
// console.log(result); //adds exclamation mark at each word! 
// var result = str.replace(/\w+/g, function(match, index, string){
// 	console.log(match, index, string);
// 	return match.toUpperCase() + '!';
// });
// console.log(result); 
//fewer matches when regex is more specific. Replace only things that are matched. 
// var result = str.replace(/\w{5,}/g, function(match, index, string){
// 	console.log(match, index, string);
// 	return match.toUpperCase() + '!';
// });
// console.log(result); 
//Hangman! 
// var solution = 'hamburger'; 
// var puzzle = solution.replace(/\w/g, '_');
// console.log(solution);
// console.log(puzzle);
// hamburger
// _________
//This is so much easier than a for loop! 
//Let's make it so that it only replaces letters and leaves out hyphens or underscores? 
// var solution = 'ham-bur ger'; 
// var puzzle = solution.replace(/\w/g, function(match){
// 	if (/[a-z]/i.test(match)) {
// 		return '_';
// 	} else {
// 		return match; 
// 	}
// });
// console.log(solution);
// console.log(puzzle);
//Say we want to replace the r's. We need to compare the solution, find out where the rs are. Essentially we want to do a map, map over the solution. 

// var solution = 'ham-bur ger'; 
// var puzzle = solution.replace(/\w/g, function(match){
// 	if (/[a-z]/i.test(match)) {
// 		return '_';
// 	} else {
// 		return match; 
// 	}
// });
// var guess = 'r'; 
// var puzzle = puzzle.replace(/_/g, function(match, index){
// 	if(solution[index] === guess){
// 		return guess; 
// 	} else {
// 		return match; 
// 	}
// });
// console.log(solution);
// console.log(puzzle);
// ham-bur ger
// ___-__r __r
// puzzle = puzzleReplacer(puzzle, "r"); 
// function puzzleReplacer(puzzle, guess){
// 	return puzzle = puzzle.replace(/_/g, function(match, index){
// 	if(solution[index] === guess){
// 		return guess; 
// 	} else {
// 		return match; 
// 	}
// });
// }; 
// console.log(puzzle); 

// var name = "John Smith"; 
// console.log(name.replace(/(\w+)\s(\w+)/, function(match, c1, c2, index, string){
// 	console.log(match);
// 	console.log(c1);
// 	console.log(c2);
// 	console.log(index);
// 	console.log(string); 
// })); 
// var name = "       John Smith"; 
// console.log(name.replace(/(\w+)\s(\w+)/, function(match, c1, c2, index, string){
// 	console.log(match);
// 	console.log(c1);
// 	console.log(c2);
// 	console.log(index);
// 	console.log(string); 
// })); 
// console.log(name.replace(/(\w+)\s(\w+)/, function(match, c1, c2, index, string){
// 	console.log(match);
// 	console.log(c1);
// 	console.log(c2);
// 	console.log(index);
// 	console.log(string); 
// 	return c2 + ', ' + c1; 
// })); 
// var name = "       John Smith   $$$$$ Blingy"; 
// console.log(name.replace(/([\w$]+)\s(\w+)/, function(match, c1, c2, index, string){
// 	console.log(match);
// 	console.log(c1);
// 	console.log(c2);
// 	console.log(index);
// 	console.log(string); 
// 	return c2 + ', ' + c1; 
// })); 
// console.log(name.replace(/([\w$]+)\s(\w+)/g, function(match, c1, c2, index, string){
// 	console.log(match);
// 	console.log(c1);
// 	console.log(c2);
// 	console.log(index);
// 	console.log(string); 
// 	return c2 + ', ' + c1; 
// })); 

//I want you to take a string and format it phone number? 
// I want you to turn 1234567890 into (123)456-7890
// var phoneNo = "1234567890"; 
// var phoneReg = /(\d{3})(\d{3})(\d{4})/; 
// console.log(phoneNo.replace(phoneReg, function(match, c1, c2, c3, index, string){
// 	return '(' + c1 + ')' + c2 + '-' + c3; 
// })); 

//Samer. 
//Implement reverse with reduce. That's optional challenge. 
// Build simple game with jquery. Treasure hunt game. We're gonna do this with jquery. 
//There's a lot of java script. The DOM manipulation is limited. 
// Mike's code. Using bootstrap. class="box btn col-xs-2" 
// In html, Good idea to have java script script tag below just above the closing body tag. This way, we don't have to wait for javascript to load. 
// <script src="https://ajax.googlepis.com/ajax/libs/jquery/1.11.3/jquery.min.js"></script>
// <row> is not bootstrap syntax. Use <div class="row"> 
// Interview Question! What is semantic web? Basically having your html descriptive in exactly what you can do. Basically describing your markup with English. 
// Strategy in web development in general is simplify. Makes it easy to test. Don't over analyze upfront. 
// in css, specificity is more important than order, so div .box has priority over .winner even if .winner appears later. THe more childs you add to your selector the more specific it is. 
//ALso inline styles has more priority. 
// background color instead of color for bootrap square. 
// remember to add dot for class! Keep in mind strict equality vs loose equality. 
// Get around with parseInt or....use Number("1") 
//  $("btn").on("click", function(){
// 	if(this.id === randomNumber){
// 		$(this).addClass("winner");
// 	} else {
// 		$(this).addClass("loser");
// 	}
// });
// // Fix: 
// $(".btn").on("click", function(){
// 	if(this.id === randomNumber){
// 		$(this).addClass("winner");
// 	} else {
// 		$(this).addClass("loser");
// 	}
// });
// // There is a data element in jquery. Instead of id, we could do data-id. So data-id="0"
// // $(this).data("id") returns 1 . Use data instead of id. 
// // What's missing? default and event. 
// $(".btn").on("click", function(event){
// 	event.preventDefault(); 
// 	if(this.id === randomNumber){
// 		$(this).addClass("winner");
// 	} else {
// 		$(this).addClass("loser");
// 	}
// });
// // prevent default would prevent going to the link. Me: but why would we do that? 
// // interview question: what can we do with an event? If you don't know the answer, say inspect. That's a safe acceptable answer in an interview. 
// // stop propagation. 
// // If I click the div, I also click the row, and its parents. Stop propagation. 
// // adding return false at the end is the short cut for prevent default and stop propagation. But don't use it. 
// // having $(this) many times is bad practice. It means look for this inside the DOM. This means jquery will have to parse through DOM to find the element. THis is an expensive process. 
// // Solution, we can save it. 
// $(".btn").on("click", function(event){
// 	event.preventDefault(); 
// 	var $link = $(this); 
// 	if($link.id === randomNumber){
// 		$link.addClass("winner");
// 	} else {
// 		$link.addClass("loser");
// 	}
// });
// // This distinguishes you from beginner programmer to intermeidate programmer. In jquery code, you want to minimize number of operations in DOM. 
// // For loop append is al ot of operations. Append once if you can. 
// // Here's a good place to use turnery instead of if statement Because it's a simple case. 
// $(".btn").on("click", function(event){
// 	event.preventDefault(); 
// 	var $link = $(this); 
// 	$link.addClass($link.data("id") === randomNumber ? "winner" : "loser"); 
// });
// // Much shorter! 
// // Non turnery users will use the following. 
// $(".btn").on("click", function(event){
// 	event.preventDefault(); 
// 	var $link = $(this); 
// 	var cellClass;
// 	if($link.id === randomNumber){
// 		cellClass= "winner";
// 	} else {
// 		cellClass= "loser";
// 	}
// 	$link.addClass(cellClass); 
// });
// But we like the turnery version much better. 
// LHS is the value. And RHS. THat's why turneries are useful. 
// The turnery is a RHS thing. So you can do: 
// var x = (? :); 
// But you can't do var x = if ... 
// Can do var x = turnery. But Can't do var if statement. 
// RHS is all about value. If the value doesn't exist, there's a problem. What? 
// Big terms in js to reemmber: values and expression, and variable. These are 3 major things to understand and be comfortable with js. 
// LH and RH are advanced, don't worry about it. 
// A turnery is an expression. 
// <h4>Turns Remaining: <span id="counter">3</span></h4>
//PUtting that 3 in the DOM is a mistake. It's not representing your data. Because your data is the variable. Instead, you should connect with the variable. Bind the counter with turnsRemaining variable. 
//This way, we don't have to worry about changing the DOM. What we care about is binding turnsRemaining into the counter. 
// var turnsRemaining = 3; 
// var decrementTurnsRemaining = function(){
// 	//Does this take any arguments? It doesn't need to because of global variables... but 
// 	// turnsRemaining is in a function so it's not global? 
// 	$("#counter").text(--turnsRemaining); 
// 	//Use prefix so that'll decrement variable first then set the counter. 
// }; 

// var randomNumber = Math.floor(Math.random()*9);
// var turnsRemaining = 3; 
// $(".btn").on("click", function(event){
// 	event.preventDefault(); 
// 	var $link = $(this); 
// 	$link.addClass($link.data("id") === randomNumber ? "winner" : "loser"); 
// });
// var decrementTurnsRemaining = function(){	
// 	$("#counter").text(--turnsRemaining); 
// }; 

// To optimize this: 
// var randomNumber = Math.floor(Math.random()*9);
// var turnsRemaining = 3; 
// var $counter = $("#counter");
// $counter.text(turnsRemaining); 
// $(".btn").on("click", function(event){
// 	event.preventDefault(); 
// 	var $link = $(this); 
// 	$link.addClass($link.data("id") === randomNumber ? "winner" : "loser"); 
// });
// var decrementTurnsRemaining = function(){	
// 	$counter.text(--turnsRemaining); 
// }; 
// variables with $ in name is standard practice for jquery elements. __variable_name is private. 
// proto is prototype. Prototype of an object in javascript has to do with inheritance. 
// In all other languages, inheritance is done by classes. 
// Delegate prototype to element? 
// In JS, prototype is like a parent. 
// say a is an object. Then a.__proto__ is Object {} 
// b = [] . b.__proto__ is [] 
// b.__proto__.__proto__ is Object {} 
// every object can delegate its method. Delegation! 
// Back to game, after 3 wrong clicks, the 4th click shouldn't happen! 
// var randomNumber = Math.floor(Math.random()*9);
// var turnsRemaining = 3; 
// var $counter = $("#counter");
// $counter.text(turnsRemaining); 
// if (turnsRemaining > 0) {
// 	$(".btn").on("click", function(event){
// 		event.preventDefault(); 
// 		var $link = $(this); 
// 		$link.addClass($link.data("id") === randomNumber ? "winner" : "loser"); 
// 	});	
// };
// var decrementTurnsRemaining = function(){	
// 	$counter.text(--turnsRemaining); 
// }; 
// Why doesn't this work? Why we can have 4 or more clicks? 
// In this code, when I click 5 times in the game, I'm only executing the if statement once. THis is bad. I need to exec the if statement each time I click. 
// Define the click handler. The click handler is a callback. 
// var randomNumber = Math.floor(Math.random()*9);
// var turnsRemaining = 3; 
// var $counter = $("#counter");
// $counter.text(turnsRemaining); 
// if (turnsRemaining > 0) {
// 	var handleClick = function(event){
// 		event.preventDefault(); 
// 		decrementTurnsRemaining(); 
// 		var $link = $(this); 
// 		$link.addClass($link.data("id") === randomNumber ? "winner" : "loser"); 	
// 	}	
// };
// //$(".btn").on("click", handleClick()); //passing evaluation of the function 
// //if handleClick() returns 42, then the above is equivalent to: 
// //$(".btn").on("click", 42); 
// $(".btn").on("click", handleClick);	//passing actual function 
// //function is same class as variable, can pass around as arguments. 
// var decrementTurnsRemaining = function(){	
// 	$counter.text(--turnsRemaining); 
// }; 
// Alerting is a bad experience. Don't do that. 
//I want to know, is your code readable? maintainable? Adding a game state makes it more maintainable. 
// var randomNumber = Math.floor(Math.random()*9);
// console.log(randomNumber); //This helps with debugging! 
// var turnsRemaining = 3; 
// var $counter = $("#counter");
// var gameState = 'on'; // 'on', 'won', 'lost' //Good to put commment here, and yet it's better to not have comments. See below 
// $counter.text(turnsRemaining); 
// var isGameStillOn = function(){
// 	return gameState === 'on'; //reemmber to put return! 
// }
// var changeGameState = function(newState) {
// 	gameState = newState; 
// 	$("#headerMessage").text(); 
// }
// var handleClick = function(event){
// 	if (isGameStillOn()) { 
// 		event.preventDefault(); 
// 		decrementTurnsRemaining(); 
// 		var $link = $(this); 
// 		var correctAnswer = ($link.data("id") === randomNumber); 
// 		$link.addClass( correctAnswer ? "winner" : "loser");
// 		if (correctAnswer) {
// 			changeGameState('won');
// 			return; // Adding this prevents the override! Return is to exit a function. Break is to break out of a loop. 
// 		}; 			
// 	}
// 	if (turnsRemaining === 0) {
// 		changeGameState('lost'); //without update, This guy is overriding a previous line: changeGameState('won'); ! 

// 	};	
// }	
// };
// $(".btn").on("click", handleClick);	
// var decrementTurnsRemaining = function(){	
// 	$counter.text(--turnsRemaining); 
// }; 
// before last update: We just added a bunch of things without testing. It's not working. To debug, add break point. 
// before last updates: isGameStillOn is returning undefined. What's the problem? You're not returning! You have to explicitly say return. 
// "It's working!" is not enough. Need to think about edge cases. I'd write a test for every test case. 
// One last thing, toggle with the game state. Use an array or object. I like object. 
// var randomNumber = Math.floor(Math.random()*9);
// console.log(randomNumber); //This helps with debugging! 
// var turnsRemaining = 3; 
// var $counter = $("#counter");
// var gameStates = {
// 	'on': 'Treature Hunt', 
// 	'won': 'You won!', 
// 	'lost': 'Game Over'
// }; //More code, but it's better, more readable. 
// var currentGameState = gameStates['on']; 
// $counter.text(turnsRemaining); 
// var isGameStillOn = function(){
// 	return currentGameState === 'on'; //reemmber to put return! 
// }
// var changeGameState = function(newState) {
// 	currentGameState = newState; 
// 	$("#headerMessage").text(gameStates[currentGameState]); 
// }
// var handleClick = function(event){
// 	if (isGameStillOn()) { 
// 		event.preventDefault(); 
// 		decrementTurnsRemaining(); 
// 		var $link = $(this); 
// 		var correctAnswer = ($link.data("id") === randomNumber); 
// 		$link.addClass( correctAnswer ? "winner" : "loser");
// 		if (correctAnswer) {
// 			changeGameState('won');
// 			return; // Adding this prevents the override! Return is to exit a function. Break is to break out of a loop. 
// 		}; 			
// 	}
// 	if (turnsRemaining === 0) {
// 		changeGameState('lost'); //without update, This guy is overriding a previous line: changeGameState('won'); ! 

// 	};	
// }	
// };
// $(".btn").on("click", handleClick);	
// var decrementTurnsRemaining = function(){	
// 	$counter.text(--turnsRemaining); 
// }; 
// Your homework tonight, break out of "it works" and think "I want to write good code" 
// in terminal, cd - means cd back, it means to go back to where you were before. 





