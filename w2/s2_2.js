$(document).ready(init); 
function init(){	
	$('#go').click(goClicked);
	$('#zip').on('keypress', inputKeypress); 
}

function inputKeypress(e){
	console.log(e);
	if(e.which === 13){
		goClicked(e);
	}
}


function goClicked(e){
		var zip = $('#zip'); 
		console.log('go clicked'); 
		
		var promise = $.get('http://api.wunderground.com/api/58853d29672309fb/conditions/q/CA/Fremont.json'); 

		promise.success(function(data){
			console.log('success data:', data); 					
			var city = data.current_observation.display_location.city; 
			var country = data.current_observation.display_location.country; 
			
			$('#location').text(city + ', ' + country);
			

		});
		promise.fail(function(error){
			console.log('error:', error); 
		});
	function getConditions(city, state){
		city = city.replace('', '_')
		$.get(http:'//api.wunderground.com/api/58853d29672309fb/conditions/q/'+state +'/' + city + '.json')
	}
	// .success(cb)
	// .fail(cb);

}

// geolookup auto ip tells you where you are based on your ip. 
// to have two ajax calls, you'll have to make them nested. 
// can use .empty to clear the image. 

// put the spans in a div. 
// announcement, don't put inline styles. don't put css in your html at all. what you want to do is give it a class and style the class. inline style is not a short cut. i promise it'll bite you in the ass. 
 
 // myapi.com/pets/fluffy example. 
 // PUT is update. 
 /* Create POST /pets would be to create new pets. We want it to read it:
 Read All would ge GET /pets . and Read One would be GET /pets/(petid) 
 Update PUT /pets/(petid) update that one pet
 Delete DELETE /pets/(petid) 
curl, in your terminal
?test= . we call this the query string 

default curl is get requst 
curl -X POST http://httpbin.org/post to post 
can curl -X GET http://httpbin.org/post to post 
but don't need to. 
https://www.mashape.com/ismaelc/yoda-speak
-H to set one header 
header usually come in key value pairs. 

can put input tag and button tag in a span, in a div. 
remember the settings object in ajax construction. 

var text = $('#yodaInput').val(); 
text = text.replace(' ', '+'); 

I would recommend getting a Mashape account and learn how to use it. Moral of the story is, don't be afraid of documentation. Just got to dive in, slug through it, and see if you can make sense of it. That's how you learn. 

You guys can do weather app, or markitondemand 

query string, aka parameters 
https://en.wikipedia.org/wiki/Query_string
& signals a new one. replace commas with question marks or equal signs? 

usually I just chain. 

header: {
	'Authorization': '', 
	'Content-Type': ''
}

wrap api in a json / jsonp. 
$.getJSON('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol + "&callback=?")

"&callback=?"

ajax with dataType: jsonp also works. 
$.ajax('http://dev.markitondemand.com/Api/v2/Quote/jsonp?symbol=' + symbol,{ 
	dataType: 'jsonp'
})
	.always(function(data){
		console.log(data);
	})

I might make you make a stock application. 
Be able to enter in a simple and get a quote. 
Loking at an api, We can take this information and draw a chart. 
Maybe we can pretend to buy stocks. user starts out with amount of money, quotes, then buy stocks. 

Hear the Weather in Yoda. No, just weatherApp. We want to get a lot of good stuff with this weather App. 
Get forecast for the day. highs and lows. the next few days. the current location. default to here, but can also change to somewhere else. maybe you can have one input box and determine. 
 
by default, it's where you are now. But may have an input box and button for you to enter the location. 
 */


