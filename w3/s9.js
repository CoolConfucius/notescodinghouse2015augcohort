/* Sep 9 Wednesday 2015 
can't put spaces in a url or uri 
url is whole thing from http to end. uri can just be a portion of it. 
*/

// encodeURI('http://mysite.com/something else and stuff')
// gives "http://mysite.com/something%20else%20and%20stuff"
// encodeURIComponent('http://mysite.com/something else and stuff')
// gives "http%3A%2...mysite.com/something%20else%20and%20stuff"

// and there's decodeURIComponent 
// decodeURIComponent(URIComponent('http://mysite.com/something else and stuff')) 
// gives 'http://mysite.com/something else and stuff'

// URIComponent encodes everything 
// URIComponent doesn't escape certain characters check out MDN encodeURIComponent and decodeURIComponent

// just encodeURI and decodeURI keeps the slashes which can be useful. 
// If you try one and not get the behavior you expect, try the other. 
// We accept information as part of the URL. 
// what if you want to put in a sentence with punctuation? You can but you have to encode it first. From server side, you have to decode. Typically from server side, you're decoding. 

// Charles' 
// var reqURL = req.url;
// var reqInfo = reqURL.split('/')
// var answer = Number(reqInfo[3]) + Number(reqInfo[4])
// // Jameela 
// if (math) { doMaths };
// function doMaths(url, res){

// }
//we're gonna add a new api to our server. instead of math, it's gonna be:  /words/  you're gonna have a sentence here, some English. A uri encoded sentence. you get that sentence in and decode it. 
// letters, not characters. We want words, and spaces. We're gonna get uri encoded sentence. take sentence and respond with object that has those things. 

//JSON.stringify(obj) will return stringify version of the object. This is the opposite of the JSON.parse(jsonstring) 

// letters are not characters so just a-z for letters. 



//Joe's 
// can click on words or math . 
// a tags ahef  . splice object into an array and get data from there? 

// Cade modularize: 
// sentenceCounter.js 
'use strict'; 
var sentenceCounter = function(sentence){
	var wordMatch = sentence.match(/\w+/g);
	var letterMatch = sentence.match(/\w/g);
	var spaceMatch = sentence.match(/\ /g);
	return {
		words: wordMatch ? wordMatch.length : 0,
		letters: letterMatch ? letterMatch.length : 0,
		spaces: spaceMatch ? spaceMatch.length : 0
	}
}; 
module.exports = sentenceCounter; 

// main.js
var sentenceCounter = require('./sentenceCounter');
var urlMatch = req.url.match(/^(\/\w+)\/?([^\/]+)*/); //not using a global flag so I can get separate capture group. 
// [^\/] is some group of characters that aren't slashes. 
var endpoint = urlMatch[1];
switch(endpoint){
	case 'words': 
	var sentence = decodeURI(urlMatch[2]);
	var countObj = sentenceCounter(sentence);
	res.end(JSON.stringify(countObj));	
}


// utility to automatically start your server. nodemon. it watches your code, restarts server when change and save. now do nodemon main.js   nodemon stands for node monitor. running server and watching your code. it's like watch mode on gulp. 

// we made weather, math, and words. Let's make gravatar, globally recognized avatar. What I want you guys to do is sign up for a gravatar account. Make an enpoint on our uri. take email address and make gravatar url. https://en.gravatar.com/site/implement/hash

//coolconfucius@yahoo.com coolconfucius2015 standard password 

// hash is an algorithm and makes a hash out of it. a one way hash. you can have your avatar there and someone can't look at it and see your email address. 

// md5 
// I want you guys to make a new endpoint. it'll be /gravatarurl/c@codinghouse.co  . the @ sign will likely be needed to escape. Suppose not. it works just fine. pass in email address, put it into hash md5, and www.gravatar.com/avatar/c4170.... the hash. You're making the url. 


//Cade's 

var urlMatch = req.url.split('/'); // easier than the regex 
// in switch statement: 
case 'gravatar': 
var email = urlMatch[2]; 
// res.end(email); //test 
var hash = md5(email); 
console.log('email: ', email)
console.log('hash: ', hash);
var gravatarurl = 'http://www.gravatar.com/avatar/' + hash; 
//can redirect 	
	// res.writeHead(302, {
	// 				'Location': gravatarurl
	// 		}); 
	// 		res.end();
//instead of redirecting, let's respond with some html. 
// if I want to install my own... for html to work properly, the html has to be a string. string within a string. That's way we need single and double quotes. 
var html = "<html><img src='"+ gravatarurl +"'></img></html>";
res.end(html); 
//or 
var html = "<img src='"+ gravatarurl +"'></img>"; 
res.setHeader("Content-Type", "test/html");
res.end(html); 


// concept with switch. routing. we can decide where to send that request. that's called routing. we're doing it manually here but ew're going to the point where we can do it automatically, configuration. where you can go to one place and just see the math stuff or one place and just see gravatar. just like directing traffic. this is the heart of soul concept of modularilty. separating them into their own little components. 


// express is the E in MEAN Stack. 

//Samer. This is your node test. There is a library that comes with node called fs where you can read the content of files. fx or fs? You know how to write a server and send anything to a server. node is all about evented programming. your start reading a file and deal with the content. I want to see the content of your package json. 

// semantic versioning, semver . Second number is major update. Third number is security update. the science around semver is important. give me the latest from node 4.0 so if there's 4.7, let me know. if there's 4.1, not going to break the system. if there's 5, not going there. 
//Node is two big things. First, node is a wrap around V8 and second, something programming. A fork takes over. Old version of node is Joinit and new version is Node Foundation. 

// Samer's node resource: http://www.nodebeginner.org/ 

// What is non blocking? Every line in your code is gonna do something. everything takes time, micro seconds to minutes. every command takes time. does this mean command 9 should wait on command 8? or can they be parrellel? in blocking, 8 blocks 9. That is blocking programming. in non blocking programming, 8 line will start executing and line 9 starts immediately. Let's say line 8 takes a minute. line 9 doesn't wait and goes... this is why we pass a callback. line 8, when you're done, please execute this function. This is only in non blocking code. 
// If line 9 depends on line 8, you can't do it. Say you read a file and want to count the lines in the file. You can't say line 8 is readFile and line 9 is count the lines. Counting lines depends on file. What you need to do is : 
// readFile( () => {
// 	countTheLines in the file
// });
// if every line depends on previous lines, then node is not the answer. in node, this would be a nested callback hell. 
// what function doesn't wait on others in javascript? intervals and timeouts. Those are non blocking. those are specifically execute and then exit and execute the next thing. 
// Node's first big thing is executing javascript on the server side. javascript is a browser language. to execute javascript needs a compiler that used to be in the browser. Chrome release their v8 which is their compiler for javascript. Node wrapping v8 is a huge thing. I can test my code on my server, don't need a browser. But the second big value is non blocking performing. It's competing with the others such as Rails. Node is minimalistic, doesn't have features in Rails, but Node has the feature of non event blocking. Node is minimalistic which means you pick what you need. You install libraries. Big differences between Node mentality and everything else. Node is about not waiting on each other. 
// javascript is a two phase runtime language. it is compiling code, and then it's runtime. Node is same, but the runtime doesn't wait. The runner doesn't wait for these lines. When pass callback, it's registering a future function. register a line and wait 15 minutes. it's so easy with Node because that's the nature. vs in other langauges, you have to do this manually. Nobody is waiting on others. that's the big picture. 

//this line starts the server but it's not gonna wait. that callback is really handling the request. 

// https://nodejs.org/docs/v0.3.1/api/fs.html look at readFile. Don't look at readSynce yet. readFile is what we need. 

// if you don't specify encoding.... reading Chinese characters is different than reading English characters. Chinese characters consume more bytes. So specify utf-8 encoding. 

// What features in normal languages change with the flow? There are many of them. First one is jump, don't use it, but it changes the flow. calling a function changes the flow. call it and you jump inside the function and then go out. A loop change the flow. if else changes the flow. You have to identify those in an interview! the new thing that changes a flow is callback. switch statement, any condition,  and recursive changes the flow. calling, importing a module changes the flow. The callback changes the flow in a werid way. when you're ready, execute that. settimeout changes the flow because it's a callback. 

// how to you delete in your editor? in vim, :g/console/d means delete every line that has console in it. 

// same idea in jquery, do not execute until document is ready

// javascript is the language that tries to do everything and you pick what works for you. Can do OO, functional, blocking, non blocking. 

// Your code should have some logic that's "if it's not available, wait for it."

// This is Node. you're a node expert. However, the power comes from you in knowing what libraries to use. One is process. 

// in linux, the top command can be useful. uptime is the time since you restart. 
// If you haven't restarted your Mac in 10 days, kudos? 

// We want to teach you express. It's really node. instead of you handling manually, use express. we're not gonna reinvent wheels here. express is global thing we can use all the time. node philosophy, if it's there, use it. 

// Samer. I want to see the output of your vm stats. Second task, make it refresh every 5 seconds. Do that by set interval. Inside set interval, action. It's window.location or something. Third task: try to only limit output to free pages. How? Idk. 


// Cade: Express. It's the E in MEAN Stack. 
// we're gonna make a simple express server. 
// expressjs.com
// Cade: curl -X POST localhost:8000 
// The form is in the pay load. In curl, we can send pay load data. send data with our request.   -d  to do that. Cade: curl -X POST localhost:8000 -d thing=otherthing

// Cade's diagram. App. We get req and res on the get go. from the left, they go right, and it's res. In the middle, middle ware adds functionality, sort of like an express plug in. That's the iea of the next. next is ctually a callback. when you invoke next, it's gonna pass on req and res to a piece of middle ware. req and res are objects, we can add properties to them. 

// app.use is for installing middle ware. put in a function in there. it takes in 3 arguments. use is to get, use middle ware. all it does, middle ware allows you to modify the request or response. in the middle ware, you can do anything you want to it. and when you're done, you just have ot invoke next. next signals it's done and passes off response to next piece of middle ware. middle ware extracts body? 

// Me: to use curl, first have a terminal running the server, and have another tab where you enter the curl command. 

// it's a matter of convention we have routes do what they do. Get request is not supposed to change the server, it's supposed to just request and receive. if we do several Get requests, we should get the same thing every time. 

// RESTful apis? REST: REpresentational State Transfer . the request is supposed to represent what we want to do.  CRUD. these are the methods. Create is Post. Post is the creation. POST /users is creating new user. Read is GET. GET /users is to give the list of users. GET /users/(userid) shows one user. U is update. Update is PUT. PUt /users/(userid) updates one user. Delete is Delete. Delete /users/(userid) is delete one. 
// Idenpotent request is one that's supposed to be same result everytime. A Get request is supposed to be idenpotent. It'll get the latest version of the same thing. the other methods are not idenpotent

// Homework is to migrate your urls to express. 
// express makes it a lot easier to get parameters from your url. /math/add those are parameters