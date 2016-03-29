/*2015 Sep 4 Fri
Webpack is running in node 
We got this thing require. What require does is pull some thing from another file. 
say you have main.js and other.js 
other.js: 
var x = fn(){};
//this fnction is what I want to use. so I export it. There may be other things in this file, but the only thing I want to expose is that function. 
module.export = x; 
//so what I'm exposing is the function itself 

//over here main.js 
require('./other'); 
//because require is generally working on js files, it's understood so you don't need to put a js there. but you do need the ./ 
when you call require, you can so this thing is the function. it's like a variable, kind of like a worm hole. 
we can also say 
var x = require('./other')
we can call it something else, but x is consistent. 
webpack is how node does it. Backend code. 
Two ways you can require: a local path, or
require('cheerio')
a package. Basically, node is going to look in the node modules for a package that looks like this. 

npm init
npm i --save llodash 
npm i 


making a bundle through webpack, require tells webpack to load in the other file. 

the main thing node does is run javascript. 

npm init will make our package json 
npm i jquery --save will install jquery 

python -m SimpleHTTPServer  this will make a localhost 

git remote add origin https://github.com/CoolConfucius/bundleTest.git
git push -u origin master 
git commit am-" "
http://coolconfucius.github.io/bundleTest/

you guys should be committing your work, frequently, even if you're not pushing it to github. if you're just working on something, you want backup, so you wish you pushed it somewhere. That's what pushing does, you take the commits you made, and you push it. The project you'll be doing will get more and more complicated. you'll get to a point where you have something working, and you might break it. Can I go back? you might not be able to. When you get to a point of working code, no matter how simple, you should commit. if everything is broken and you can't figure out what happened, if you commit, you can go back to where things were working and try again. 

pretty much every module has its own package json. dependency. 


You always want a README especially when you want others to use your project. 

mark down. 
# is for title. ## for smaller title. triple backtick ```js to signify javascript code. similar to slack's ``` . 

I like to have a js file that's all module declarations. 
*/

//I want a function weirdMath('+')(2,3) and that's gonna give us 5. Always two arguments. 

var weirdMath = function( op ){	
	var math= function(num, num2){
		switch (op) {
		case '+':
			return num + num2;
		case '-': 
		  	return num - num2;;  		
		case '*': 		
			return num * num2;;		   
	  case '/':		 	  	
			num /= num2; 
			return num;   		   
		default:
			return (num1%num2);    	
	}
	return math; 	
	}
}; 

console.log(weirdMath('+')(2,3)); 

// Samer 
// https://github.com/CodingHouseFI/learn-webpack.git
// what loaders have you seen so far: css loaders, style loader, bootstrap loader. 
// this javascript file requires other js file is a new concept that didn't exist several months ago. and css should be tied to component. react. webpack is enforcing this concept. in webpack, you can manage your style or manage css in js. 
// require your css in your js is new. require it and it'll work without stylesheet. 

// Babel js is a js converter. Convert between ES6 and ES5. ES6 to ES5 is more straightforward. 










