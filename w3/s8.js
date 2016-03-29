// 2015 Sep 8 
// Look for interview questions on Javascript. 
// pass in a string and return a new string where everything is turned into hash signs except for the last four characters. 

// Warm up
// function masker(string){
// 	if (string.length <= 4) { return string; };
// 	var newString = string.split('');  
// 	// for (var i = 0; i < newString.length -4; i++) {
// 	// 	newString[i] = '#';
// 	// 	console.log(newString[i]); 
// 	// };
// 	newString = newString.map(function(element, index){
// 		if (index < newString.length - 4) {
// 			return '#'
// 		} else return element; 
// 	});

// 	return newString.join('');
// };

// console.log(masker('2856710937'));
// console.log(masker('01234'));
// console.log(masker('567'));

//Jameela
// function mask(str){
// 	var splitstr = str.split('').reverse();
// 	var masked = splitstr.map(function(e, i){
// 		return (i < 4 ? e : '#');
// 	});
// 	return masked.reverse.join('');
// }
//Cade: can use < splitstr.length - 4 . Propbably a map is better because you're making a new array. 

//Joe
// var masker = function(str){
// 	if(str.length <= 4){
// 		return str; 
// 	}
// 	var last4 = str.match(/....$/)[0];
// 	str = str.replace(/./g, '#').replace(/....$/, last4);
// 	return str; 
// }
//Cade: dollar sign means the end of the string. So it means four characters only if at the end of the string. You can do it all in a single replace. Have a function, that'll give you each match and an index. Is it towards the end of string? if not, replace. Otherwise, return element took out. 

// Cade: if for loop condition is false, it won't run. 

// Test is over! 

// Cade: we're gonna do back end stuff before we go to Angular. 
// We're writing a server, our own castle. All entirely in our control. You can make your server do anything. When you get this request, I want you to do this with it. How are we gonna respond to request? We're looking at the other side of this organism. 

// Cade: on test, everyone generally did pretty well. I'm happy with you guys. We use test cases to test your code. 
// go to test.js and problem5 to go over test. my notes are over there. 

// String.prototype.substr() and String.prototype.substring() are different. check MDN. be wary. 

// We're done talking about the test. we're start node development. All the code we've been writing isn't node code. Node is a javascript runtime environment. only thing node does is run js. but there are additions to js that are built in node but not avaible else where. For example, require. require is a node syntax, not a js syntax. it's a webpack syntax, too, but that's because webpack runs in node. webpack takes what you're requiring and mix into one big bundle file. but node uses require. the other end of require is export. that's node. it's a node thing. 

// example of require. we've seen require used two ways. one is local file, give it a path, what you get. 
// make thing.js 
// var adder = function(x, y) {
// 	return x + y
// };
// module.exports = adder; 
//thing.js is like a module. 

// var func = require('./thing')
// ./ means same directory. single dot means here. subl . means open this directory. because require is implicit that we're sourcing js files, we don't need to put js. we can, but we don't need it. 
// console.log(func(5, 11));  // gives us 16
// worm hole. the connection is this module.exports. 
// you could also: 
// console.log(require('./thing')(5, 11));  // gives us 16 
// // but that sacrifices readability. This is a lot better: 
// var adder = require('./thing'); 
// console.log(adder(5, 11));

// relative to where main.js is. Cade creates new directories and moved the files into the directories. His terminal: 
// mkdir main
// mkdir thing 
// mv main.js main 
// mv thing.js thing 
// // Cade's advice, cloes your editor files before moving them around or you'll run into some problems. 

// var adder = require('../thing/thing'); 
// // go up a level, then into thing directory, then thing.js 
// // rename thing to adder for less confusiton. 
// terminal: mv thing/thing.js thing/adder.js 
// var adder = require('../thing/adder'); 

// don't have to have bloated files. not necessary faster to run, but faster to build, easier for developer. delegation. specialization. modulization. 

// here's the other way we use require. we can not only require we wrote oursevles, but also require modules we got from npm. if we don't give it a path, we give it a name. 

// first, npm init . now we got package json. now we want lodash so  npm install lodash --save now lodash is listed as dependency in json. now we can use it. 

// var _ = require('lodash'); // lodash ready to go
// var arr = [4,5,6,7,8,9];
// console.log(_.shuffle(arr)); 

// there's a whole world of utilities out there. we don't have to re invent any wheels. the npm website is a great resource. how bower is front end stuff... if you want to run lodash in browser, you can npm install lodash... something. that's what bower is for. npm is the node all. super easy. www.npmjs.com see most depended-upon packages. lodash is the first one there. async is my favorite. 

// non sequitar, in games, player can use dev tools to cheat. 

// lodash is a superset of underscore. request is one that's not necessary, but is convinient. simple api. we'll be talking about a number of these different libraries.  moment js is great. it's a date and time parsing utility for doing pretty much anything with time. moment is insanely powerful and cool. moment by itself is now. momentjs.com 

// in browser, do bower and load in script tag. in server, do npm and use require. webpack is used in browser, but it runs in node. depending on what you require, it'll just pull out what you need. it's weird line blurring. it runs in node, produces bundle that runs in browser. 

// anytime it says module not found, that means you need to install whatever is not found. there are also modules that come preinstalled, that you don't need npm to use it. don't need npm install cuz already part of node. 

// So we are gonna make a server. 
// var http = require('http'); 
// see nodeserver main.js 

// try to make a couple of end points. think of something. maybe you have a cat or dog end point. display something about a cat or a dog. I want to give you guys five minutes just play with it and see what happens. 

// Me playing around. 
// var http = require('http');  
// var PORT = 8000; 
// var server = http.createServer(function(request, response){
	
// 		console.log('\n\n');
		
// 		console.log(new Date()); //check out the terminal 
// 		console.log('url:', request.url); //tells it what end point we hit. 
// 		console.log('method:', request.method);
// 		console.log('statusCode:', request.statusCode);
// 		console.log('statusMessage:', request.statusMessage);
		
// 		switch(request.url){
// 			case '/users': 
// 				response.statusCode = 404; 				
// 				response.write('<style>h1 {color: purple;}</style><h1> 404 Not today, pal. </h1>')
// 				response.end('<h1> 404 Not today, pal. </h1>')
// 				break; 
// 			case '/redirect':
// 				// response.writeHead(302, {
// 				// 	'Location': 'users'
// 				// }); 

// 				response.writeHead(302, {
// 					'Location': 'http://google.com'
// 				}); 
// 				// response.writeHead(302, {
// 				// 	'Location': 'bananas'
// 				// }); 
// 				response.end('<h1>Redirect</h1>');
// 				break; 
			
// 			case '/bj':
// 				response.writeHead(302, {
// 					'Location': 'https://github.com/CoolConfucius/BlackJack'
// 				}); 
// 				response.end('<h1>BJ</h1>');
// 				break;

// 			case '/towers':
// 				response.writeHead(302, {
// 					'Location': 'https://github.com/CoolConfucius/HanoiTowers'
// 				}); 
// 				response.end('<h1>Towers</h1>');
// 				break;

// 			case '/calc':
// 				response.writeHead(302, {
// 					'Location': 'https://github.com/CoolConfucius/Calculator'
// 				}); 
// 				response.end('<h1>Calculator</h1>');
// 				break;    
// 			default:
// 				response.end('default'); 		
// 		}
// 		response.end('some text!'); 
// }); 

// server.listen(PORT, function(){		
		
// 		console.log("Server now listening on port " + PORT + "! ;)")
		
// 	});

// console.log('end of file'); 



// I wnat you guys to go read an npm package and see if it works. That is request. this npm package so you gotta install it. it basically is ajax, essentially making ajax call in node. go and read the page for request, figure out how to get it working. and see if you can make a request. Here's an idea: see if you can get weather data with the underground api and get it in node. 
// your url is gonna be: /weather 
// when you get a request at that url, you wanna make your own request to weather underground and see if you can display it somehow. see if you can get data from wunderground. 


// common to name req and res for request and response. 

// homework tonight, you guys will be making your own api. Here's the idea. We're gonna make math apis. You're gonna have your api end point. When I say your api, I mean you go to localhost: 8000 . the root of that is your api. localhost: 8000/ the root of your directory. Your homepage will be there if you have one. we'll be making a set of apis. namespace. if you think about your computer directory structure. make sense, way to organize way things behave. 
// We want /math everything comes from that. /math/add/2/3 will give you 5. This is how it's gonna be. 
// /math/op/x/y 
//You guys are comfortable with string manipulation so you can check stuff. And you'll be able to, using regular expressions... but this is your challenge. You'll be getting something like math/add/2/3 and you need to figure out how to get these values. The operators are going to be strings, a word. A word for the four basic operations, then a number, and slash another number. This is a challenge of you guys figure out how to do this. 

// No, we're not doing this with request. Request is an libray to make ajax calls. All you need is http, just the core module. That's it. You should respond with the answer. Put it in response.end() . We're separating the idea of the DOM. DOM is just a browser thing. You can console.log it, too. I recommend console loggin the url. Make sure you're getting it properly. That's the first step. If you can get all those, then it's simple math stuff. You guys done stuff to do the math. THe difference is how we're getting the operator. 
// We'll talk about deployment in the future. Make a new repo on github, and push it up. 
// I may suggest modulizing your code. You can write a math module and you can just require that. 



















































