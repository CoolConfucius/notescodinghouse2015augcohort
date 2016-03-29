// 2015 Sep 2 Wed
//When you make a request you're sending this request across the internet to some remote resource. 
// http requests. http verbs: get, pust, post, delete . they are methods. The verbs are just labels on the request. You can send a request with a post label and it will delete something. Restful transfer, the request makes sense. 
// myapi.com/users/:id GET 
// POST /users create 
// PUT/users update 
// Delete/users 
// RESTful. 
// status codes. 200s are generally successful. 300s are kind of successful but missing something? 400s are client errors. 404 is resource doesn't exist. 500s is server error. Server is on fire. You don't want to see these. 
// async is asynchronis 
// see main.js of git_rocks for some notes. 

// termimal: 
// touch inedex.tml main.js 
// bower i jquery 

//http://api.jquery.com/jquery.ajax/ 
/* url as an argument. 
I like to start with git hub api, but it limits number of request. if we all send request to the place, it looks like the same ip is hitting it, we run into limit. we may want tour browser. 
Tour hides are api addresses, so we can get around some limits. TorBrowser. 
*/
// http://api.theysaidso.com/qod.json
'use strict'; 

$(document).ready(init); 
function init(){	
	$('#go').click(goClicked);
}
// function goClicked(e){
// 		console.log('go clicked'); 
// 		// var promise = $.ajax('http://www.google.com/', {
// 		// 	dataType: "jsonp",
// 		// 	jsonp: "test",
// 		// 	method: 'GET'
// 		// }); 
// 		// what this returns is what's known as a promise. Also known as a deferred object, same thing as a promise. in and out analogy. receipt is a promise that you turn it into a burger later. 
// 		var promise = $.ajax('http://api.theysaidso.com/qod.json', {
// 			dataType: "jsonp",
// 			jsonp: "test",
// 			method: 'GET'
// 		}); 
// 		console.log('promise:', promise); 
// 		promise.success(function(data){
// 			console.log(data);
// 		});		
// }

// on promise, if success, then success get triggered.  
// function goClicked(e){
// 		console.log('go clicked'); 
// 		var results; 
// 		var promise = $.ajax('http://api.flickr.com/services/feeds/photos_public.gne?format=json&tags=' +encodeURI('kitties')+ "&jsoncallback=?", {
// 			dataType: "jsonp",		
// 			method: 'GET'
// 		}); 
		
// 		promise.success(function(data){
// 			console.log('data:', data); 
// 			// this runs after the request comes back. make sure we're doing inside? The data doesn't exist outside. 
// 			results = data; 
// 			// if I want to make another resquest, I'd do it here? 
// 		});
// 		promise.fail(function(error){
// 			console.log('error:', error); 
// 		});
// 		promise.always(function(data){
// 			console.log('always data:', data); 
// 		});
// 		console.log(results); //this is going to be undefined. 
// 		console.log('before');		
// }
// asynchronis code, the console.log is made synchronislly through time. the response is gonna come back some other time in the future we don't know. it's the nature of the internet, it's gonna take some time. 

// promise isn't the ajax function but what is returned from the function. 
// var getStuff = function(){
// 	return 'stuff'; 
// }
// // I can do one of two things; Either: 
// var x = getStuff; //this is storing the function itself. 
// //but what we're doing is invoking it. 
// var x = getStuff(); // so x will be the string. 

// I'm looking at the share screen and not focused on taking notes. 
// Only one of success or fail will happen. .always will always happen. 

// wunderground . explore my options . stratus plan . purchase key 
// now that you have an api key go to documentation 
// My api: http://api.wunderground.com/api/58853d29672309fb/conditions/q/CA/San_Francisco.json 

// function goClicked(e){
// 		console.log('go clicked'); 
// 		var results; 
// 		// var promise = $.ajax('http://api.wunderground.com/api/58853d29672309fb/conditions/q/CA/Fremont.json',
// 		// {				
// 		// 	method: 'GET'
// 		// }); 
// 		// we can also do .get instead of .ajax with method:GET. 
// 		// Remember to put in your own api key, not just copy Cade's . 
// 		var promise = $.get('http://api.wunderground.com/api/58853d29672309fb/conditions/q/CA/Fremont.json'); 

// 		promise.success(function(data){
// 			console.log('success data:', data); 		
// 			console.log('success data:', Object.keys(data.current_observation)); 		
// 			// make notes to narrow down. 
// 			// data.current_observation.display_location.city
// 			// data.current_observation.display_location.country
// 			// data.current_observation.temp_f
// 			// data.current_observation.icon 
// 			results = data; 			
// 		});
// 		promise.fail(function(error){
// 			console.log('error:', error); 
// 		});
// 		// promise.always(function(data){
// 		// 	console.log('always data:', data); 
// 		// });
// 		// Can also do this: 
// 		// promise.always(function(data){
// 		// 	if (data.statusText === 'error') {
// 		// 		console.log('error:', data); 
// 		// 	} else {
// 		// 		console.log('data:', data); 				
// 		// 	}		// but it makes more sense to use success and fail 
// 		// 	console.log('always data:', data); 
// 		// });

// 		console.log(results); //this is going to be undefined. 	
// }

// Let's start drawing things out. But I always do start with console logging. I want to know what it is or what's in there. Or I like to do object keys. 

// function goClicked(e){
// 		console.log('go clicked'); 
// 		var results; 
		
// 		var promise = $.get('http://api.wunderground.com/api/58853d29672309fb/conditions/q/CA/Fremont.json'); 

// 		promise.success(function(data){
// 			console.log('success data:', data); 		
// 			console.log('success data:', Object.keys(data.current_observation)); 		
// 			var city = data.current_observation.display_location.city; 
// 			var country = data.current_observation.display_location.country; 

// 			$('#city').text(city + ', ' + country);
			
// 			// data.current_observation.display_location.city
// 			// data.current_observation.display_location.country
// 			// data.current_observation.temp_f
// 			// data.current_observation.icon 
// 			results = data; 			
// 		});
// 		promise.fail(function(error){
// 			console.log('error:', error); 
// 		});

// 		console.log(results); //this is going to be undefined. 	
// }

// make a weather app. You guys decide what information you want to get. 

function goClicked(e){
		console.log('go clicked'); 
		var results; 
		
		var promise = $.get('http://api.wunderground.com/api/58853d29672309fb/conditions/q/CA/Fremont.json'
		//, {timeout: 500 // what does this do? we don't usually do this. }
		); 

		promise.success(function(data){
			console.log('success data:', data); 					
			var city = data.current_observation.display_location.city; 
			var country = data.current_observation.display_location.country; 

			$('#city').text(city + ', ' + country);

			// $('#location').text(city + ', ' + country);
			var $img = $('<img>'); 
			$img.attr('src', data.image_url);
			// data.current_observation.display_location.city
			// data.current_observation.display_location.country
			// data.current_observation.temp_f
			// data.current_observation.icon 
			results = data; 			
		});
		promise.fail(function(error){
			console.log('error:', error); 
		});

		console.log(results); //this is going to be undefined. 	
}



// api: http://api.wunderground.com/api/58853d29672309fb/forecast/q/CA/San_Francisco.json 
// the shape that's coming back in is going to change depending on what end point you're getting. 


