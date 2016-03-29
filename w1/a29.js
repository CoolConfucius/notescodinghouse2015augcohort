//2015 8 29 Saturday morning 
//DOM manipulation. DOM accessing. In DOM tree, Html has head and body. Body has a lot of children. We're not searching the html, but searching the DOM live on the page. When you do $('div') , this right here is searching the DOM for all div tags. What this will do... it's a jquery object. What it really is is an array that match the query. Each time I do this, it's the searching part. It's expensive. DOM manipulation by nature is really slow. You can name your objects with a dollar sign. You want to know if it's a jquery object, not a vanilla object. var $divs = $('div'); Now that you have the variable, you don't have to search. If we go and try to manipulate now,if we go: $divs.addClass() . It's still manipulating the DOM, but doesn't have to look for it. 

//Jade. white space matters. div is the dfault. you can write code directly in your Jade. Jade allows data and variables to be injected into it, when html. Your Jade can be dynamic, you can set up in the Jade. The docs on the Jade site aren't so great. But it allows you to pull out things you'd like Emmet to do. each is a special kind of jade loop. jade iteration. explore html2jade ! The Jade and html match. The really nice thing about jade, like emmet, you don't have to worry about closing tag. well, in emmet you're in html and there's still closing tags. You don't have to worry about closing tags at all in jade! assuming if you have intentation properly. but it's easy to mess up. indentation is important. We'll be going into greater depth on Monday. 

//Next week is jquery week. Then we have ajax. Shit gets real. There's so much you can do with ajax. It's access to the internet. That means you can do anything. request and send off the nukes. THere's tons of data out there and with ajax you can access it. The weather for example. I'll have you guys make a weather app. Show the weather, have cute icons. 

//NPM allows you to install versions? You can do cool version stuff with it. NPM is a libray or function? Ip address. You have unique address internet provides you. What this libray does is it grabs what for you? A Git repository is really a folder. 

// var ipify = require('ipify'); 
// ipify(function(err, ip){
// 	console.log('My public IP address is:', ip); 
// }); 
// // this gives: My public IP address is: 24.6.45.239
// // . . . 
// // A read me tells readers the purpose and how to install. Make sure to create a read me. 

// var cheerio = require('cheerio');
// var request = require('request');

// var TPB_URL = 'https://thepiratebay.la/top/207';

// request(TPB_URL, function(err, resp, body) {
//   if (err || resp.statusCode !== 200) {
//     throw new Error("Couldn't reach thepiratebay... It might be down :(");
//   }

//   console.log('Top 100 Movies from The Pirate Bay');
//   console.log('----------------------------------\n');

//   var $ = cheerio.load(body);
//   $('#content .detName a').each(function(index, element) {
//     console.log(index, $(this).text());
//   });
// });


// after lunch: 
// jquery is not a frame work, it's a libray. 
// If you're not using a framework, it's a good idea to use jquery. 
// Interview question. What's an event? Interaction between user and machine? Mouse clicks, keyboard strokes, audio input, scroll, any change to the DOM, manipulation of data that comes from external source, enter, manipulating texts, mouse hover, mouse up, mouse down, position, mouse in, mouse out, a lot are in the hover category, and document loading, when you resize, drag, drop are events. 
// Node. In three words: backend, framework, terminal javascript. Imporant is you can run it in your terminal. Javascript is a browser language, can't run in terminal directly. Node, it's a js framework that lets you run js on the server. Node is all about events. It's an evented programming. It's also called non-blocking. Everything else is blocking. Blocking is not a bad thing, but Node is non-blocking. Non-blocking and evented. Like we have events in jquery, we have events in node. The callback thing is huge in node. 
// http://learn.jquery.com/
// jQuery core. DOM manipulation. Be comfortable with Core, Events, and Ajax, and also jquery Plugins. 
// http://learn.jquery.com/using-jquery-core/
// $ is just an alias for jquery. we use dollar for convinience, less typing. But there are ways to deal with conflict. jquery() is $(). When you do $. you have: $.clone, $.css ...etc. $.data is a function. $('div') , $('div').data . jquery.data() and .data() are different things. jquery.data() is equivalent to $.data(). In that, you have more arguments. In .data() , it's just key and value. 
// $() is overloaded with things you can do. Like document ready. 
// Attributes. every html element has attributes. 
// anchor elements are for links. attribute for anchor is href and something else. 
// http://learn.jquery.com/using-jquery-core/attributes/ 
// to select first div arrat, $('div:first').length , $('div:first')[0]
// className is a native attribute that gives you class name of the element. 
// $('div:first').className doesn't work, but $('div:first')[0].className returns the class name 'constrain'. $('div:first')[0] is an html object. $('div:first') is a jquery object, so you can only call jquery on it. 
// $('div:first').attr('class') //gives 'constrain'
// $('div:first')[0].className //gives 'constrain'
// there are special attributes like data that has a value, but there are also attributes that don't have a val like check. 
// to select all inputs that have the name coding: 
// input[name=coding]
// supports regular expressions, so can have input[name=*coding] , to find inputs with names that contain coding. 
// div span > a > span means div with child span and so on. > means direct child. 
// div.circle.red means a div with the class circle or class red 
// div#a.xy[href] means a div with the id a class xy and propery href. All these conditions need to satisfy. 
//$("[data-live-domain]") //selects all the elements that have the property data-live-domain. 
// $("[data-live-domain='learn.jquery.com']") specifies what's in the property, verfy specify. The element that has that value. 
// $("[role=complementary]")
// usually attribute always work. 
// $(":not(div)") //this selects all the elements that are not div. 
// $(":not(.content") //means anything that doesn't have the class content. 
// $("div.has(a)") //any div that has an anchor. 
// Interview question. What's the difference between the above and below? 
//$("div a") 
// The first one is selecting the div that has an a. The second one selects the a. 
// To remove everything in the page, by default, chrome has a $, too.// doesn't have jquery at first, but after you use include jquery, now jQuery returns function m(a, b) . 
// URL Decoder/Encoder ... whut? 
// to select the body and remove everything: $('body').text('')
// $('body').text('hey') //gives hey on screen 
//$('body').html('what is the diff!!!') 
// We can do $('body').html('coding <h1>House</h1>') . it works. 
// but can't do: $('body').text('coding <h1>House</h1>')
// But text is simpler than html. 
//$('body').html('coding <h1>House</h1> <script> alert('I am here!!'); </script>')  . also works! that's called script injection. 
// document.cookie //lets me read your cookies. If you give me your html, I can read your cookies with very easy script. If I have your cookies, I can log into your facebook. Cookies is temporary storage in a browser. Cookies are responsible for remembering your log in states on twitter. Delete it, you log out. Remove the encryted content, refresh, and you're not logged in, despite not clicking log out. Html is no state? 
// DOM manipulation. It's expensive! 
// $() is overloaded. What does that mean? What is a function signature? It's its name, number of arguments it takes, the type of arguments it takes, and the type of value it returns. Those make the function signature. In programming languages like java, the signature is huge. I can have functions that take a different number of arguments that take arguments with the same name. They are all different. Overloading that definition of some. When you call a function that doesn't exist in java, the errors are very specific to the function. Js doesn't have that overloading. But we can still use logic and manual overloading. 
// $(function()) //that's an alias for document ready. 
// $("") // any string in there. This is selector. 
// $("<div/>") //this creates a brand new div that didn't exist. 
// parts of function signature includes its name, how many arguemtns it takes, what kinds of arguments it takes, and what it returns. This is in java. But not in javascript. Void, integer, is specifying the return value in the other programming languages. This doesn't exist in javascript. 
// $('<div>Something</div>')
// var a = $('<div>Something</div>')
// var body = $('body')
// body.append(a)
//This appends the a to the body. Then it goes into the DOM. Now the page shows "Something"
// var b = $("<div/>", { text: 'Something Else', class: 'special'} )
// b // returns <div class="special">Something Else</div> 
// body.append($("<div>Hello</div>"))
// What's the difference if I do that? What's highlighted is an expression. Isn't that the same thing we're doing with b? It's not. b is a variable. But when you do just <div>Hello</div>, every time you execute it you create a brand new dive
// body.append(b.clone())
// var c = $("<div/>", { text: 'Data Div', data: { a: 42, b: 43 } } )
// c.data() 
// $("div:last")
// ...
//$("div:last").data("wow") //gives the value of the data wow 

// Utility Methods http://learn.jquery.com/using-jquery-core/utility-methods/
//Extend is an important one. You don't have inheritance in js. Extend is like a manual inheritance. 
// C is a compile lanauge, you convert all the code into some binary. The exe file in windows is a binary file. Zip is a binary file. Images! They're all binary files. YOu can't read the content of the image. Compiled code is something you take from a text... that's why js is more efficient vs Ruby? js is runtime, also compiled, but not compiled into binary. Runtime is immediately after executing the code. In Ruby, you can change your code during the runtime. You can define a new js function... in eval, you can define a new function, variable, execute new code. 
// C compiles into Assembly, and Assemply compiles into binary. Assembly is very low level. C is higher level than Assembly. 

// semicolons is there to make minifying possible. Even when they're optional, we shouldn't leave them out. 

// border 50% to 
// div is a block element. span is an inline element. any element can be changed into inline by display. 
// we use javascript to make more boxes. 


// $(function(){
// 	var templateBox = $()
//   $("body").append(
//     $("#template .box").clone(); 
//   );
// });
// //$(".box") is too generic of a selector. Use: 
// $(".box:first").clone() 
// // other solution is to use an id. 


// $(document).ready(init); 
// var init = function(){
// 	var templateBox = $("#template .box"); 
// 	var body = $("body");
// 	for (var i = 0; i <=  .length; i++) {
// 		[i]
// 	};
// 	body.append(templateBox.clone().removeClass.("hidden"))
// }



// Study some jquery. Study some. Don't be idle. 












