/* September 1 2015 
 Use Clone for the Towers. You can't have an id that's just an integer

 */
// for (var i = 0; i < num; i++) {
// 	var $ring = $('div').addClass('ring').attr('id', 'r' + i )
// 	rings.push($ring);
// }
// $('#tower1 .ringHolder').append(rings); 

// function towerClicked () {
// 	var $this = $(this);
// 	var $holder = $this.children();
// 	var $selected = $('.selected'); 

// 	if(!$selected.length){
// 		$holder.children(':first-child').addClass('selected');
// 	} else {
// 		if (!$holder.children('.selected').length) {
// 			var selectedId = $selected.attr('id');
// 			if (!$holder.children().length || $holder.children(':first-child').attr('id') > selectedId) {};
// 				var $removed = $selected... 
// 		};
// 	}
// }
// 
// In Git, when having the fatal error, config the setting to false. 
// Don't do git init if it's already initialized! You know it's initialized when there's a .git file. 

// lodash is a big o' toolbox with utilities. A lot is pure add ons that you can already do with js. But lodash makes it easy, a short cut. 
// https://lodash.com/docs 
// _.kebabCase([string= ])
// _.pairs(object) 
// enter a pairs and output 2d array 
// _.shuffle(collection)
// give it an array and it returns the array randommized. Shuffling cards. 
// _.pluck(collect, path)
// _.sample(collection, [n])
// works on arrays, objects, or strings. They're all collections. Gets a random element. 
// _.(sample([1, 2, 3, 4])); pickes on element. Returns the element. 
// _.(sample([1, 2, 3, 4], 2)); picks two element.  Returns an array containing the returned elements. 
// _.camelCase('this and that and something else'); gives "thisAndThatAndSomethingElse"

// Here's a challenge. Go on lodash and see how you'd implement the lodash methods with js. Once you got it, you can look at the source code and see how they do it. Maybe learn something. 
// We have lodash filter and lodash map. Work the same way. 
// function timesThree(n) {
//   return n * 3;
// }
// _.map([1, 2], timesThree);
// // → [3, 6]
// _.map({ 'a': 1, 'b': 2 }, timesThree);
// // → [3, 6] (iteration order is not guaranteed)
// var users = [
//   { 'user': 'barney' },
//   { 'user': 'fred' }
// ];
// // using the `_.property` callback shorthand
// _.map(users, 'user');
// → ['barney', 'fred']

// If I want to do something, I wonder if lodash can do it. 

// var ob = {a:5, b:8};
// console.log(ob); 
// var json = JSON.stringify(ob);
// console.log(json); 
// console.log(JSON.parse(json).a);
// console.log(JSON.parse(json).b);


// load the modern build
var _ = require('lodash');
// or a method category
var array = require('lodash/array');
// or a method (great for smaller builds with browserify/webpack)
var chunk = require('lodash/array/chunk');

// Cards. the easy way is just having strings. also easier with numeric value attached to it as well. 
//var cards = ['ac', '2c', '3c'] // probably have some function to dynamically generate these things. 
// var suits = ['c', 'd', 's', 'h'];
// var ranks = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
// var cards = []; 
// suits.forEach(function(suit){
// 	ranks.forEach(function(rank){
// 		cards.push(rank + suit);
// 	})
// })
// console.log(cards.toString());
// console.log(cards.length);

// in black jack, you go over 21 and you bust. 
// OR cards is an object
// ace is worth eleven or one. 
// when you go to 21, you win. 

// var suits = ['c', 'd', 's', 'h'];
// var ranks = ['a', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'j', 'q', 'k'];
// var cards = []; 
// suits.forEach(function(suit){
// 	ranks.forEach(function(rank){
// 		var card = {};
// 		card.rank = rank;
// 		card.suit = suit; 
// 		card.value; 
// 		cards.push(rank + suit);
// 	})
// })
// console.log(cards.toString());
// console.log(cards.length);
// console.log(_.shuffle(cards)); 

// Samer: 
// http://youmightnotneedjquery.com/
/* JSON.parse is native. It parses any string and gives an actual json object you can work with. 
Post. If you're not using jquery, you'll put the IE code in a function. 
hide. el.style.display = 'none'; // el stands for html element. If you have an html element, you ahve to wrap as a jquery object to do jquery action. 
$0 selects certain element natively. 
var el = $0; 
el is now my h3. 
jQuery(el) is wrapping it as an jquery object. 
el.style is a css style declaration 
el.style.backgroundColor //notice this is in Camel case 
el.style.backgroundColor = '#00ffff'; //no red. we have green and blue. 
//ELEMENTS 
el.classList 
el.children 
// Each 
var elements = document.querySelectorAll(selector);
Array.prototype.forEach.call(elements, function(el, i){
});
Filter
Array.prototype.filter.call(document.querySelectorAll(selector), filterFn);
They're all part of the prototype. 
document.querySelectorAll('.my #awesome selector');
Don't need $ . 
Get Css style 
getComputedStyle(el)[ruleName];
get text: 
el.textContent

interview question. to select element id without jquery: 
var a = document.getElementById('matches')
a returns the element. 
parent node, pend, set html, set style, set text, toggle class, on and off...etc. 
On: you define an event. Off, you turn off the event you defined. 
Document Ready. there's a function for that. 
We're gonna implement a project without jquery, just native js. 
First, we're gonna work with the data. 

create a json file that represents this. we'll create a file called data.json . I want you to represent this data. You decide if you want to use an object or array. 
You're building instructions. Want to read the instructions from a fake api call / json file. You want to decide how to represent this json file. 

// Samer's timerQuiz 
cd into timer quiz 
look at destination. fork it on git hub. if you read the readme, there will be instructions on how to start. 
https://github.com/CodingHouseFI/html5-boilerplate
gulp is a task running. You define a bunch of tasks and use gulp to run them. 
Here's a node file, .js file. 
var fs = require('fs'); 
var path = require('path'); 
... 
syntax for defining a task: 
gulp.task('archive:create_archive')
gulp.task('archive', function(done){
	
}) ....
to use gulp, we need the dependencies. 
gulp compiles all your work into destination folder. In a production, you want to make sure all your js is good. you also want to combine. you edit a hundred files, you make gulp combine them and minify them, the assets. source folder and destination folder. 
undo uglified and minified by clicking the button. Have to run gulp every time you change folder. 
gulp, you can define your tasks in code, not configuration. Flexibility. 

go read the package. You'll understand a little bit of node proccessing. 

clone the link on the github page, not download
npm install will give errors if the directory doesn't have json package! 
npm install in the right directory 
then install gulp. then run gulp. 

paste your linkedin and twitter on general channel and let's follow each other. 

//JSON
var request = new XMLHttpRequest();
request.open('GET', '/my/url', true);

request.onload = function() {
  if (request.status >= 200 && request.status < 400) {
    // Success!
    var data = JSON.parse(request.responseText);
  } else {
    // We reached our target server, but it returned an error

  }
};

request.onerror = function() {
  // There was a connection error of some sort
};

request.send();

// Fuck, I didn't learn shit. 

WindowTimers.setTimeout()
https://developer.mozilla.org/en-US/docs/Web/API/WindowTimers/setTimeout 
every seconds, do this thing 
var t = setTimeout( function(){
	console.log("I am alive"); }, 5000 ); 

var t = setInterval( function(){ console.log("Stop me if you can"); }, 2000 ); 
// every two seconds, it'll log "Stop me if you can" 
To stop it, clear the timer. type in: 
clearInterval(t)
we stopped it. 

can also clearTimeout
setTimeout, setInterval, we use them all the time. 
*/
// var remainingSeconds = 5; 
// var remainingSecondsDiv = document.getElementById('remaining-seconds');
//I'm violating the standard of global variables. The solution is easy. Just wrap everything in an iffy. Immediatedly invoked function expression. 
// In function, we're no longer in global scope, but in the function scope? You don't want to expose anything to your global scope. 
// When you run your iffy, always use strict. 
// function(){
// 	'use strict'; 
// 	console.log('watch working??');

// 	var remainingSeconds = 5; 
// 	var remainingSecondsDiv = document.getElementById('remaining-seconds');
// 	remainingSecondsDiv.textContent = remainingSeconds;
// 	// setInterval(function(){
// 	// 	// want to stop when hit zero. 
// 	// 	if (remainingSeconds > 0) {
// 	// 		remainingSecondsDiv.textContent = --remainingSeconds;	
// 	// 	};
// 	// }, 1000)	//but interval is still running! 
// var intervalId = setInterval(function(){		
// 	remainingSecondsDiv.textContent = --remainingSeconds;	
// 	if (remainingSeconds === 0) {
// 		clearInterval(intervalId); 
// 	};		
// }, 1000)	
// var request = new XMLHttpRequest(); 
// request.open('GET', '/data.json', 'true');
// request.onload = function() {
// 	if(request.status >= 200 && request.status < 400){
// 			//Success! 
// 			var data = JSON.parse(request.responseText);
// 			//showNextSlide(data)
// 		} else {
// 			// We reached our target server, but it returned an error
// 		}; 
// 	}
// 	request.onerror = function(){
// 		// There was a connection error of some sort
// 	}
// }

// function(){
// 	'use strict'; 
// 	console.log('watch working??');

// 	var showNextSlide = function(slideObject){
// 		var remainingSeconds = slideObject.seconds; 
// 		var remainingSecondsDiv = document.getElementById('remaining-seconds');
// 		var instructionsDiv = document.getElementById('instructions');
		
// 		remainingSecondsDiv.textContent = remainingSeconds;
// 		instructionsDiv.textContent = slideObject.instructions; 

// 		var intervalId = setInterval(function(){		
// 			remainingSecondsDiv.textContent = --remainingSeconds;	
// 			if (remainingSeconds === 0) {
// 				clearInterval(intervalId); 
// 			};		
// 		}, 1000);
// 	};
	
// 	var request = new XMLHttpRequest(); 
// 	request.open('GET', '/data.json', 'true');
	
// 	request.onload = function() {
// 		if(request.status >= 200 && request.status < 400){
// 			//Success! 
// 			var data = JSON.parse(request.responseText).data;
// 			showNextSlide(data[0])
// 		} else {
// 			// We reached our target server, but it returned an error
// 		}; 
// 	}
// 	request.onerror = function(){
// 		// There was a connection error of some sort
// 	}
// }




function(){
	'use strict'; 
	console.log('watch working??');
	var data, currentSlideId = -1 ; // relatively global? // -1 to start at 0. 
	var showNextSlide = function(slideObject){
		var slideObject = data[++currentSlideId];
		var remainingSeconds = slideObject.seconds; 
		var remainingSecondsDiv = document.getElementById('remaining-seconds');
		var instructionsDiv = document.getElementById('instructions');
		
		remainingSecondsDiv.textContent = remainingSeconds;
		instructionsDiv.textContent = slideObject.instructions; 

		var intervalId = setInterval(function(){		
			remainingSecondsDiv.textContent = --remainingSeconds;	
			if (remainingSeconds === 0) {
				clearInterval(intervalId); 
			};		
		}, 1000);
	};
	
	var request = new XMLHttpRequest(); 
	request.open('GET', '/data.json', 'true');
	
	request.onload = function() {
		if(request.status >= 200 && request.status < 400){
			//Success! 
			var data = JSON.parse(request.responseText).data;
			data.push( { instructions: 'Done', seconds: null }); 
			showNextSlide();
		} else {
			// We reached our target server, but it returned an error
		}; 
	}
	request.onerror = function(){
		// There was a connection error of some sort
	}
}

// i want a button that says I'm ready. The button says next. 
// time elapsed and time remaining 
// total time, display that. and see user time compared to total time
// no jquery. and change color. Let the font color be the invert of the background color. 
// edit the files in src and then gulp so that the files in dist will be updated. 
// i tried just opening the index html in the brower. It didn't work. Probably need localhost for this. 



//Cade Walk through of Samer's code. We want to pull it down and use it. Get the link for the git. We can use the address bar, too. Let's go over and clode it. 
// git clone the_adress 
//Then we ls into it. This code is not ready to run at all. We need a few things to do. 
// The package.json file means we need node dependencies. Just seeing that tells us we need an npm install. 
// Seeing the fulpfile.js tells us that this is a gulp project, that we need to run gulp to run this code. It's not gonna work until we install gulp thorugh npm. 
// Two kinds of installatoin, the default mode, which is local. There's also the -g global installation. But the global thing is just so you can get the command. You still need to install locally. 
// in the directory, type: npm i 
// Bunch of gulp stuff. now that we have npm installed, we got all our dependencies in our node modules. We're still not quite ready. The hint is the gulp file. It's used for building your code. What gulp is used for is building your code, converting your less into css for example. typically, the code we write is in the source directory. THat's src, not to be confused with dist. dist is kind of a copy of src, but we don't touch dist at all. what will happen is, when gulp, src overrides the dist. dist is what will be run in the browser. it's easy to mistake. don't want to touch dist and don't get confused. it's gonna be more clear in the future. we will get to jade one day. for now, know that you want to code in the src directory. 

// gulp default. usally we're running defualt so we just have to type gulp. 
 
// see comments on main.js 
// status code. 400 and above are failure codes, usually user codes. problems that originate from client side. 
// 500s are errors from server side. server took a crap and then 500 error. 

// this is core to web development. 
// timers. 
// The time started isn't going to change. 
// Find out how much time remaining by adding. update when you go to new slide or when hit and. either way makes sense. for you to keep updated throughout, if one line is really long... when they do hit next, it'll really change. 
// we're doing it directly in the main js file. 
// Keep gulp running and have another iterm tab. 
// by default when you run gulp, it also runs watch. 
