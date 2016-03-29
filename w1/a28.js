// 2015 8 28 Fri 
// Berlin's cyrstal ball: 
//if($('input').val().length) . . . 
// On math parser. PEMDAS. MD are one group, do it left to right. Same with A and S. The biggest struggle here is the parentheses thing. I don't blame you. It's really tricky. 
// 'use strict'; 
// strict mode is a special mode of javascript. One that is more strict. Without this mode, js is pretty lenient. It lets you get away with things. 
// For example, 
//x = 5; 
//console.log(x); 
// This returns 5. But in strict mode, it's an error, it says x is not defined. 
// Why strict mode? Example: 
// var thing = 10; 
// thng = somethingelse; 
// Here, strict mode will tell you it's not defined. It's helps with debugging. 
// Without strict mode, you can declare several object keys. You can't do that in strict mode. YOu can't delete certain things in strict mode. 
// var o = { p: 1, p: 2 }; 
// In non-strict mode, you override the key. In strict mode, you can't have duplicates. 
// Take my word for it. Always use strict mode. From now on, always use strict mode. It'll help you out. I promise. 
// Just javascript is too lenient. Strict mode makes it better to use for programmer. 

// var math = '2 + ((5 - 6 / 3) * 9) + ((5 - 3) * 9) / 4'; 
// // var math = '2 + (3 * 9) + ((5 - 3) * 9) / 4'; 
// // var math = '2 + 27 + ((5 - 3) * 9) / 4'; 
// // var math = '2 + 27 + (2 * 9) / 4'; 
// // var math = '2 + 27 + 18 / 4'; 
// //It's ridiculous to find matching parentheses. Not substainable. 
// // The inner most parens is what we want to evaluate first. What we wanna do is we want to pull out that inside parentheses group. How do we do that? With regular expression. 
// math = math.replace(/ /g, ''); 
// function findInnermostBlock (mathString) {
// 	// Before update: this math is a local variable. If I change the math argument into somethingelse, the math in the function will be the global math. This is how scoping, closure works. 
// 	// If I make a new variable: var math, it's brand new. I shouldn't do that. It's confusing. Let's change math to string. 

// 	//var match = math.match(/\(   \) /)
// 	// We want: an opening paren, then a bunch of stuff that's not paren, then a closing paren. 
// 	// Use caret to specify what we don't want. 
// 	var match = mathString.match(/\([^(]+\)/); 
// 	// This ideaally finds the innermost parentheses block. 
// 	return match; 
// };
// console.log(findInnermostBlock(math)); 
// Mac-3:notes mac$ node a28
// [ '(5-6/3)*9)', index: 3, input: '2+((5-6/3)*9)+((5-3)*9)/4' ]
// The regex is greedy. 

// function findInnermostBlock (mathString) {	
// 	var match = mathString.match(/\([^()]+\)/); 
// 	return match; 
// };
// console.log(findInnermostBlock(math)); 
// This gives us what we want. 
// Let's talk about splice. 
// var arr = [5,6,20,7,8]; 
// console.log(arr.splice(2, 0, 10)); 
// console.log(arr); 
//Splice changes the array. Because it didn't take out anything, it returns an empty array. 
// console.log(arr.splice(2, 1, 20)); 
// var str = 'abcdef'; 
// var strArr = str.split(''); 
// console.log(strArr.splice(2, 1, 'z')); 
// strArr.splice(2, 1, 'z'); 
// console.log(strArr); 
// console.log(strArr.splice(3, 2, 'w', 'x', 'y')); 
// strArr.splice(3, 2, 'w', 'x', 'y'); 
// console.log(strArr); 

// console.log(Array.prototype.splice); 
// This capital A array is a prototype
// Array.prototype.splice.call(str, 2, 2, 'Z');
// console.log(str); 
// Doesn't work. 
// str = str.split('').splice(2, 0, 'Z'); 
// splice does change the original. But returns what's removed. 
// var str = 'abcdef'; 
// var strArr = str.split('');  
// strArr.splice(2, 0, 'Z');
// str = strArr.join('');
// console.log(str); 
//Array.prototype.forEach.call(str, );
// We're basically calling forEach on this string. The first arg would be the function. 
// var str = 'abcdef'; 
// Array.prototype.forEach.call(str, function(char, index, array){
// 	console.log(char, index, array); 
// });
//This is kind of like this: 
// str.forEach(function(char, index, array){
// }); 
// But forEach is for arrays. Some people consider the Array.prototype to be a short cut. That way, you can pass in a string without converting it first. 
// apply 
// Array.prototype.forEach.apply(str, [function(char, index, array){
// 	console.log(char, index, array); 
// }]);
// This does the same thing. The only difference between call and apply is call can accept logs of arguments. 

// Array.prototype.reduce.call(str, function(acc, char, index, array){
// 	console.log(char, index, array); 
// }, 0); // initial value. 
// // The first arguement is the string itself. 
// Array.prototype.reduce.apply(str, [function(acc, char, index, array){
// 	console.log(char, index, array); 
// }, 0]);

// var arr = [5,6,7,8];
// Array.prototype.push.call(arr, 1,2,3,4,5,6);
// console.log(arr);
// //This is how call works. The second argument and onward are pushed. 
// // Compare with apply. You have an array. 
// Array.prototype.push.apply(arr, [1,2,3,4,5,6]);
// console.log(arr);
// //This is intermediate to advance javascript. 
// // If I push an array in call . . . 
// var arr = [5,6,7,8];
// Array.prototype.push.call(arr, [1,2,3,4,5,6]);
// console.log(arr);
// The difference between call and apply is how they take the arguments. 
// Array.prototype.forEach.call(str, function(char, index, array){
// 	console.log(char, index, array);
// 	console.log(Object.keys(array));
// });

// var doAStuff = function(num){
// 	console.log(num);
// };
// doAStuff.apply(null,[ 5]); 


// var math = '2 + ((5 - 6 ^ 3) * 9) + ((5 - 3) * 9) / 4'; 
// math = math.replace(/ /g, ''); 

// function findInnermostBlock (mathString) {	
// 	var match = mathString.match(/\([^()]+\)/g); 
// 	return match; 
// };
// I want to be able to evaluate the math expression in the parentheses 
// function evaluateMathExpression(expression){
// 	var regex = /([\d.]+)(\^)([\d.]+)/; 
// 	expression = expression.match(regex); 
// 	console.log(expression); 
// 	var num1 = parseFloat(expression[1]);
// 	var num2 = parseFloat(expression[3]);
// 	var op = expression[2]; 
// }; 

// var innerMost = findInnermostBlock(math); 
// evaluateMathExpression(innerMost[1]); 
// console.log(innerMost); why is this not working? 

// function evaluateBinaryOperation(num1, op, num2){
// 	var result;
// 	switch(op){
// 		case '+': result = num1 + num2; break; 
// 		case '-': result = num1 - num2; break; 
// 		case '*': result = num1 * num2; break; 
// 		case '/': result = num1 / num2; break; 
// 		case '^': result = num1 ^ num2;  
// 	}
// 	return result; 
// }



// function evaluateMathExpression(expression){
// 	var num1 = parseFloat(expression[1]);
// 	var num2 = parseFloat(expression[3]);
// 	var op = expression[2]; 

// 	var exponentRegex = /([\d.]+)(\^)([\d.]+)/; 
// 	var multDivRegex = /([\d.]+)([\*\/])([\d.]+)/; 
// 	var addSubRegex = /([\d.]+)([\^\)([\d.]+)/; 

// 	// Test will tell us if it's there! As long as we have exponents there, we want to be doing stuff. 
// 	// Test runs faster. If we don't have exponents, then we don't need to match. So test is subtle optimization. 
// 	while(exponentRegex.test(expression)){
// 		var match = expression.match(exponentRegex);
// 	}
	

// 	expression = expression.match(regex); 
// 	console.log(expression); 
	
// }; 

// Let's make less code duplication. Match. 

// '5+7/90^4'
// function evaluateMathExpression(expression){
	
// 	var exponentRegex = /([\d.]+)(\^)([\d.]+)/; 
// 	var multDivRegex = /([\d.]+)([\*\/])([\d.]+)/; 
// 	var addSubRegex = /([\d.]+)([\^\)([\d.]+)/; 

// 	var regexes = [exponentRegex, multDivRegex, addSubRegex]

// 	// while(exponentRegex.test(expression)){
// 	// 	var match = expression.match(exponentRegex);
// 	// 	var result = evaluateBinaryOperation(match); 
// 	// 	expression.splice(match.index, match[0].length, result); 
// 	// 	// changes expression, puts back in new result. 
// 	// }
// 	// while(multDivRegex.test(expression)){
// 	// 	var match = expression.match(exponentRegex);
// 	// 	var result = evaluateBinaryOperation(match); 
// 	// 	expression.splice(match.index, match[0].length, result); 	
// 	// }
// 	// while(addSubRegex.test(expression)){
// 	// 	var match = expression.match(exponentRegex);
// 	// 	var result = evaluateBinaryOperation(match); 
// 	// 	expression.splice(match.index, match[0].length, result); 	
// 	// }
// 	// I see horrible duplication. Only the regex is different. Everything else is the same. 
	
// 	regexes.forEach(function(regex)){
// 		while(regex.test(expression)){
// 			var match = expression.match(regex);
// 			var result = evaluateBinaryOperation(match); 
// 			expression.splice(match.index, match[0].length, result); 	
// 		}
// 	});
// 	return parseFloat(expression); 
	
// };

// function evaluateBinaryOperation(binOpMatch){
// 	var num1 = parseFloat(binOpMatch[1]);
// 	var num2 = parseFloat(binOpMatch[3]);
// 	var op = binOpMatch[2]; 
// 	var result;
// 	switch(op){
// 		case '+': result = num1 + num2; break; 
// 		case '-': result = num1 - num2; break; 
// 		case '*': result = num1 * num2; break; 
// 		case '/': result = num1 / num2; break; 
// 		case '^': result = num1 ^ num2;  
// 	}
// 	return result; 
// }

// var math = '2 + ((5 - 6 ^ 3) * 9) + ((5 - 3) * 9) / 4'; 
// math = math.replace(/ /g, ''); 

// function findInnermostBlock (mathString) {	
// 	var match = mathString.match(/\([^()]+\)/g); 
// 	return match; 
// };

// var mathExpression = "5+7/6^4"; 
// console.log(evaluateMathExpression(mathExpression));
// // Not working. We can't just splice a string. We're going to have to turn these things into arrays: 


// function evaluateMathExpression(expression){
	
// 	var exponentRegex = /([\d.]+)(\^)([\d.]+)/; 
// 	var multDivRegex = /([\d.]+)([\*\/])([\d.]+)/; 
// 	var addSubRegex = /([\d.]+)([\^\)([\d.]+)/; 

// 	var regexes = [exponentRegex, multDivRegex, addSubRegex]
	
// 	regexes.forEach(function(regex){
// 		while(regex.test(expression)){
// 			var match = expression.match(regex);
// 			var result = evaluateBinaryOperation(match); 
// 			// console.log('expression:', expression); 
// 			// console.log('match:', match);
// 			// console.log('result:', match);
// 			expression = expression.replace(match[0], result); 	
// 		}
// 	});
// 	return parseFloat(expression); 
	
// };

// function evaluateBinaryOperation(binOpMatch){
// 	var num1 = parseFloat(binOpMatch[1]);
// 	var num2 = parseFloat(binOpMatch[3]);
// 	var op = binOpMatch[2]; 
// 	var result;
// 	switch(op){
// 		case '+': result = num1 + num2; break; 
// 		case '-': result = num1 - num2; break; 
// 		case '*': result = num1 * num2; break; 
// 		case '/': result = num1; result /= num2; break; 
// 		case '^': result = Math.pow(num1, num2);  
// 	}
// 	return result; 
// }

// Here's Cade's exact code. It works! 
// 'use strict'; // sherrf
// var math = '2 + ((5 - 6 ^ 3) * 9) + ((5 - 3) * 9) / 4';
// // var math = '2 + (3 * 9) + ((5 - 3) * 9) / 4';
// // var math = '2 + 27 + ((5 - 3) * 9) / 4';
// // var math = '2 + 27 + (2 * 9) / 4';
// // var math = '2 + 27 + 18 / 4';
// // var math = '2 + 27 + 18 / 4';
// math = math.replace(/ /g, '');  // remove spaces
// // var innerMost = findInnermostBlock(math) ;
// // evaluateMathExpression(innerMost[1]);
// function findInnermostBlock(mathString) {
//   var match = mathString.match(/\(([^()]+)\)/);
//   return match;
// }
// var mathExpression = '5+7/6^2';
// console.log(evaluateCompoundExpression(mathExpression));
// // '2+2'
// function evaluateCompoundExpression(expression){
//   var exponentRegex = /([\d.]+)(\^)([\d.]+)/;
//   var multDivRegex = /([\d.]+)([*/])([\d.]+)/;
//   var addSubtRegex = /([\d.]+)([-+])([\d.]+)/;
//   var regexes = [exponentRegex, multDivRegex, addSubtRegex];
//   regexes.forEach(function(regex){
//     while (regex.test(expression)){
//       var match = expression.match(regex);
//       var result = evaluateBinaryOperation(match);
//       expression = expression.replace(match[0], result);
//     }
//   });
//   return parseFloat(expression);
// }
// function evaluateBinaryOperation(binOpMatch){
//   var num1 = parseFloat(binOpMatch[1]);
//   var num2 = parseFloat(binOpMatch[3]);
//   var op = binOpMatch[2];
//   var result;
//   switch(op){
//     case '+': result = num1 + num2; break;
//     case '-': result = num1 - num2; break;
//     case '*': result = num1 * num2; break;
//     case '/': result = num1 / num2; break;
//     case '^': result = Math.pow(num1, num2);
//   }
//   return result;
// }

// On your own time, put your remaining pieces together. 
// Use your screen real estate wisely! 

//Let's talk about jquery! 
// html is not the webpage. html is a bunch of text, a representation of what we want the webpage will be. The browser will construct the webpage from the html and css together. The html will not change. It's static. But the DOM can be dynamic. Essentially, the DOM is a tree. Everything has a parent and there's a root of the whole thing. This is represented in html. The parent of the html is the document itself. When we say jquery is for DOM manipulation, we're talking about elements in the DOM. jquery can move them around, change their properties, anything. Let's do some simple jquery. We want an event listener. It fires. THat's essentially what we're doing. 

'use strict'; 
//ready is one of a class of event listeners. Hey document, when ready, I want you to invoke this function. 
// $(document).ready(function(){
// console.log('ready!!'); 
// // See the console? There's a delay. 
// }) 
// console.log('not ready!'); 
//I like doing this: 
// $(document).ready(init); //this is the event listener. the function we pass in is the event handler. 
// function init() { //this is the event handler. you only run the event listener once? 
// 	//The stuff I put into my init function are things I only run once. 
// 	console.log('ready yet'); 
// 	//selecting in jquery is essentially a css selector in a string. We're actually accessing the DOM. That takes work! Your DOM could be huge! Ids are unique, but we still have to search the whole DOM for it. It's expensive. You have to traverse the tree, look down every path. 
// 	// The generic event listner is .on . The second argument would be my handler. 
// 	$('#title').on('click', titleClicked); 
// }
// function titleClicked(event){
// 	//I like to compartmentize everything. 
// 	console.log('title clicked!')
// }
//Be real careful with event listeners. Event handlers triggered all the time. Listeners should just be run one time. 


$(document).ready(init); 
function init() { 
	console.log('ready yet'); 
	$('#title').on('click', titleClicked); 
	$('#myButton').click(buttonClicked); 
	// $('#myButton').dblclick(buttonClicked); 
}
function titleClicked(event){
	console.log('count:', ++count)
}
function buttonClicked(event){
	event.preventDefault();
	event.stopPropagation();
	// $('#title').text(count);
	console.log($('#myINput').val('Hey'));
	console.log('button clicked!'); 
}
// function buttonDoubleClicked(event){
// 	console.log('button doubleclicked!')
// }

// Can't keep up. Give up on perfect note taking. 
// getters and setters. 
// for single attribute console.log($('#title').attr('id', 'somethingElse'));
// id is just one of many attributes you can set. Like class and src. 

// We want to make a really really simple calculator. Super duper simple. Here's what I want: 
// Have an input, a button, and an output. Suggest make a number input. 

// Your assignment is to make a calculator in jquery. You guys have until tomorrow. All the features of this calculator. Have 0 up here. I hit a button, 0 goes away, 8. Hit a 5, now 85. hit plus. nothing happens yet. ... hit AC to clear. Just have a simple clear. Hit plus/minus toggles between pos and neg. Hit percent sign divides it by a hundred. Also, the decimal point. hit 2 decimal 6. hitting decimal again does nothing cuz can only have one decimal. If I divide by 0, get 'Not a number' . This is harder than it looks, but not as hard as the math parser. 
// Harder made, do the complex calculator. Think about adding more features. I'm not as concerned about the UI as I am concerned about the functionality. Some people spend days just doing UI. That's not how I like to do it. I'm much more likely... just get enough UI. ugly but working. Spend most of the time just making it work well. I suggest you do the same. You don't need bootstrap. You'll use jquery. You can make it feel like a button even if they're divs. 
// ids. Maybe all the numbers are the same class. This way, you can have an event listener for the class. 
// $('.num').click(function); 
// function(event); 
// that event object will tell you tons of info, tell you exactly what was clicked. There's ten different number buttons. This event will trigger if any of them is clicked. but this event will tell you specifically which one was clicked. Same thing with operators. These are binary operators. They act on two things. Maybe all of those can be treated the same. Then you get the special plus minus button. It only acts on one number. Whatever number is there, you toggle. 
// Don't cheat. You know I'll be able to tell. If I find one scrap of copy and paste of Jose's code, you get kicked out of the cohort. I'm not kidding. 
// Data tags. That's something you can do to. DON'T CHEAT! 



