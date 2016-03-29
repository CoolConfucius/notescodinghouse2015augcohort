// 2015 Sep 3 
/* 
var $p = $('<p>').text
$img = $("<img>");
var arr=[ $p, $img]; 
// apend that array 
// what you want to do istead of appending html is: 
var $li=$('<li>').text(element.title); 
// ^ this is not a DOM maniuplation. It's not in the DOM. it's creating something in memory. 

// Instead of making them exist in html, make them exist in memory. 
// Display the webcam images from some place. 
//Use that webcam api, be able to enter in a location, and have it show webcams. I'll give you that api, and see what you can make of it. 
// Code School tutorials: Real-Time Web with Node.js and Angular js 
*/

var $tds = []; 

for(var i = 0; i < 6, i++){
	var $img = $('<img>'); 
	$img.addClass('camframes'); 
	$img.attr('alt', 'webcam'); 
	$img.attr('src', data.webcams[i].CURRENTIMAGEURL);
	// this image is ready to go. 
	// don't need an id. 
	var $td = $('<td>'); 
	$td.append($img); 
	// All of this manipulation is okay, because they're not DOM. They're in the memory. We can loop them just fine. 
	$tds.push($td); 

	//I have six tds in an array, but I want to put half of them in a tr and the other half in a different tr. 
	// Maybe all the evens in one, and all the odds in the other. 
}


// var arr = [1, 2, 3, 4, 5,6]
// arr.splice(3) 
// gives [4, 5, 6]
// arr 
// now gives [1, 2, 3]


var $secondTds = $tds.splice(3); 

var $tr1 = $('<tr>');
var $tr2 = $('<tr>');

$('#tableBOdy').append($tr1, $tr2); 
// It works! 
$('.hidden').removeClass('hidden'); 


// Jose 
// You have flexibility to pick the tasks you're most good at and can also do some other stuff. There's back end and front end and logic. We have a front end team and a back end team. 
// You have freedom to pursue other passions once your work is other. You can socialize. 


// Samer.
// Big things in jquery: DOM manipulation, event handling, and ajax, 
// jquery is just one option out of many. Vanilla javascript can also do DOM manipulation. Javascript can cross more domains. But jquery crosses the main domains. Code is mostly shorter with jquery than javascript. 70% use jquery. Community is a big part of it. 
// lodash is a utility libray but not for DOM manipulation. 
// How else can I do DOM manipulation other than jquery and Vanilla javascript? Angular? React. Ember relies on jquery. There are template languages. React is a specialized template language. There's also mustache and handle bars. It's DOM manipulation but not events. Jade is a template language that's popular. 
// template language is about string replacement. They all concatenate strings. All about string substitutions. 
// Ejs is also a big template language. 
// in the client, I need data from server. ajax request. if the data change every 5 seconds, what's the other alternative? instead of ajax request, we do a connector. here's ip. listen to data and you have to tell me if data has changed. sockets. 
// example of task runner: grunt, and gulp. it preps your source. other task runners? what is bower? bower is mostly introduced for client side packages. 
// webpack is a specialized task runner. if you use webpack, you don't need gulp. 
// gulp is still popular. There are other options other than grunt, gulp, and webpack. Those are server sides. Rails. On rails pipe line. There's also asp.net. 
// Why we really need them? We've been doing wihtout them. There are some main reasons why we need them. Big one: dependencies! 
// example of dependency. your javascript code main.js has jquery in it. Then it depends on jquery. So load jquery before main.js. 
// Another reason: compression. kill all the spaces and new lines. Makes one big giant line with no spaces. Why do we compress? more space. Can also save bytes by changing long variable names into shorter ones. This is uglifying. We care about long variable names. Browser doesn't care. We don't want to do this manually so it makes sense for a system to do it for us. 
// Task management. Minifying and uglifying are taks. But what else? Version. Versioning is important cuz you want to keep track of what's going on. 
// combine multiple js files into one. why? less server requests. less load on the server, better for us. less round trips. Less dependency. more advantages on depending on a single file. 
// transpiling: taking coffee script into javascript. Making something browser is comfortable with. 

// general procedure. npm init . npm install something --save 
// in new directory, git init . 

// webpack is requiring, and unbundling 
// source map. map the source to what the browser is executing. The browser will use source map to tell you where your error is in app.js 
// it's executing bundle.js , not app.js . but now the console shows your app.js 

// You should not commit generated code 
// echo "bundle.js" >> .gitignore
// echo "bunndle.js.map" >> .gitignore 
// echo means append to gitignore? 

// webpack -d 

  
  //npm install -g webpack-dev-server
  // then webpack-dev-server to run the server 

  // there is a tutorial 


  