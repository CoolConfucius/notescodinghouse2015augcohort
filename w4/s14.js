// 2015 sept 14 

//find smallest that is divisible by 5? 
//find smallest that is a multiple of all of them. for 3, that'd be 6. for 4, 12. 5, 60. 
// smallest number that is a multiple of numbers up to n. 
// Smallest 
// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.
// ​
//Write smallest(n) that will find the smallest positive number that is evenly divisible by all of the numbers from 1 to n (n <= 20). 
// var smallest = function(int){
//   if (int <= 2) { return int };
//   var j = 3; 
//   var product = 2; 
//   while(j <= int){  
//     // console.log(product);
//     if (j > product || product % j !== 0){
//       var temp = product*2;
//       while(temp % j !== 0 ){
//         temp += product; 
//       }
//       product = temp; 
//     }
//     j++; 
//   };
//   return product; 
// };
// for (var i = 1; i <= 20; i++) {
//   console.log(smallest(i));
// };


//Cade: we got some number n. Check what number is able to multiple into that number. We want to go from one to infinity. Keep checking if a multiple of all these guys. 1 2 3 4 . Start 1. it's not divisible by the 4 numbers, so out. ... 5 not divisible by the numbers, so out. 6 not divisible by 4, so out. 
// 'use strict'; 
// let smallest = function(n){
//   let numArr = [];
//   for (let i = 0; i <= n; i++) {
//     numArr.push(i); 
//   }
//   let test = 1; 
//   while(true){
//     // this condional is never gonna be false. So you have to get out of it with a break like in the swtich. Break kicks out of loop. break kicks out of the most inner loop it's used. return kicks out of the most inner function it's used. 
//     let isGood = numArr.every(n => {
//     // every checks all the numbers. Make sure they all divide into test. Remember every! it's one of those iterators. It basically go through every single item in the array and return something that is truthy or falsey. It wants to return truthy for one test. If anyone is a falsey, it kicks out immediately and returns false. 
//       return test % n === 0;
//     }); 
//     if(isGood){
//       return test;
//       // can use break, but this return works. it returns for the isGood function. 
//     }
//     test++;  
//   }

// };
// for (var i = 0; i <= 20; i++) {
//   console.log(`${i}: ${smallest(i)}`); 
// };

// Joe: measures for optimization
// function getLowestMultiple(target, prev){
// var num = 1; 
// while(1){
//   var count = 0; 
//   for(var x=1; x<= target; x++){
//   if(num% x === 0){
//     count++;
//     if(count === target){
//       return num; 
//     }
//   }
// }
// }
// var previous = 0;
// for (var x = 1; x <= 24; x++) {
//   previous = 
// };
// }

//Mine is fast. Joe said it's the best. Others complimented on it. 

/* Cade: we're moving to Angular 
MVC- Model-View-Controller 
The big idea of MVC is to separate resposibilities, delegate different responsibilities to different parts. 
The view is everything to do with what you see. It's your html, your css, it's your DOM manipulation. 
Model is our data. Communication with database can be considered model stuff. Communicating with backend, talking to database. That can be considered model. In a nutshell, it's what has to do with our data. 
The Controller is the glue that holds it together. It's the switch board, conductor of orchestra. Basically the logic. 

Having separation is important. 
Example: we have page, some list of things. Seeing it and rendering things out can be considered view. Button. Button is part of the view. Click the button. It triggers something in the controller. Logic of button is in controller. Controller determines what needs to happen. We need to add something to our list in our data base. The controller triggers something in our model. maybe update database, write something to it. The model is gonna do that thing, liekly confirming back to the controller, then the controller updates view. 

V -> C. C -> M. M -> C. C -> V
Controller doesn't have to worry about some stuff. It delegates to model. 

Model is the DATA. View is what you see. Controller is your logic/ conductor. It's really about how your organize things. Best practices. People will disagree on what goes where. What you want is, skinny conrollers and fat models. You want your controller to be tiny and clean, doing least that you can. You just want controller to delegate. All these things are triggered by the user. 

The user will throw buttons. 

user -uses-> Controller -manipulate-> Model 
it tells the model, hey, you need to go do this. 
And then the model essentially updates the view. 
Model -updates-> View -shows-> user. 

user -uses-> Controller -manipulate-> Model -updates-> View -shows-> user

The controller is code. The button as you see it on the page is part of the view. but it's wired up logic in the controller, which tells it what to do. 

Angular, let's see it work. 
Angular cdn. 

A module in Angular doesn't mean the same as module in Node. Node is brining in modules and use them. In Angular, the module is the app itself. We connect all the behaviors to that module. We can connect all the things to the module itself. The module is like everything. 

To first connect, to make an Angular app, to write a module, 
To declare: 
angular.module()
arguments in it are name and an empty array. It allows us to load up other modules. At the moment, we don't have other modules. We always have to have that even when we don't have other depedencies. it's how to substantiate a module. 
if I 
angular.module('testapp'); 
this is referring to a module that already exists. I can declare it down here and use it.
event if we have the script loaded, we still need to connect the module to the html. We do this by using a specific directive. Directives in angular are a big topic. Directives associate behaviors to our view. 
In html Do: 
<html lang="en" ng-app="testapp">
Most directives are like this, an attribute, an html attribute that uses the same syntax of html attributes. a special attribute used as angular directive. it connects this page. now connected. 

Errors in Angular are famously not good. 
Go to page that explains the errory. Description tells you what happened. To give it some behavior, we connect a controller to it. 

can put this: 
ng-controller="testCtrl" 
in body or html tag 

Error that says 'tetestctrl' is not a function, argument undefined. is basically saying can't find the controller. 

The scope is what connects controller to the view. scope is this weird object thing. it's the glue between view and controller. connects part of view to controller. 

<input type="text" id="myInput1" ng-model='name'>
  <input type="text" id="myInput2" ng-model='name'>
two inputs that share the same ngmodel. they are bound to the scope. if one changes, the other changes immidiately. 

$scope is glue between view and controller. 

We're binding data in view with controller? If one changes, they change together. This is the concept of two way data binding. this input is bound to this name thing. I did that with ng model. 

<ol>
    <li ng-repeat="n in [1,2,3,4,5]">Test</li>  
</ol>
This gives us five tests. We have many li's as I have items in the array. five elements in my array. five elements, one for each one. each one li. What if I wwant to display that number? use <li ng-repeat="n in [1,2,3,4,5]">{{n}}</li>   

scope variables. scope is just an object. it has keys based on actual things that are connected to the view. when I say name here, it's gonna look for $scope.name and bind to it. Button still works too. 

window is for when it gets minified. 
Angular really needs this arguments to be actually what they are. You can't minify them. what Angular does is it has these tricks. Even if minifiction shrink these guys, it's never gonna shrink strings. strings will stay pristine. This is the clever way angular gets around minify. 

I want you to have an input and a button. hit the button and will add what's in input to a list and also clear out the input so you can add another one. this is your assignment right now. 

On some guy: double curly braces only works in the html, not javascript. 
On Andy: instead var array, use $scope.array = [] so that it's connected. 

pretty much everything in view refers to $scope. 


Samer::: 
Angular is it's own thing, not jQuery. Ember builds on jQuery. 
MVC is a global concept but not the only concept. It's used in Ember but not React. 
Two way binding has been big in Angular but it's going away, people hate two way binding. 
MVC is separation of responsibilities! 
Something that's not MVC on server side. A single php page, that's not MVC. that's lots of responsibilities and concerns in one page. Let's put stuff in views, model, and controller. In one word, MVC is separation. 
The separation of css from html is a close concept of MVC. 
Problem is maintainability. If you don't separate but keep your code compoenents small, that's fine. But if you have a lot, then it's not maintainable. That's the birth of MVC. THe strongest advocate of MVC is Rails. You can't write in Rails in MVC. Rails says, the only way to do is MVC, the only way to api is json REST. 
Angular isn't the first MVC framework client side, but it's the most popular. It is what pushed MVC concept to the front end which is new. 
Ember is not has popular as Angular, but Samer thinks Ember is better. The market demands Angular. You have to know Angular as a javascript front end engineer. Ember has smart defaults. Ember router is the smartest router in the market. Good routers are a copy of Ember routers. Ember data is ambitoius and nobody has that. It tries to automatically capture your api and bind it. Angular and Ember is on one side, React is on a totally different side. Backbone is a minimalist. It gives you a backbone and you build on it. It doens't get in your way. A bunch of libraries that make your life easier. Ember is hugely opinionated, which for some is a good thing. Rails also opinionated. 

Directives is a huge thing in Angular. A directive is really a component, very close to web components. Web components is a stardard thing that's coming to html5. Lots of things are web components already. 

There's a thing called the shadow DOM. The calander in the example is shadow DOM. 
In Angular 2, everything is components. Routes is components. 
Browser. When you see input date, that's special web component. Browser will go load your html component and go what you want. Shadow DOM is a browser thing. Web component can do a lot of stuff for you. 

Need to know Polymer for interview. Polymer components. 

Angular is designed with testability in mind. Now that you isoloated your model, you can test model on its own without view. 
Let's build something. We need something. A few options. Webpack. 

Your git should always ignore node modules. 
webpack -w -d 

Nick: we're gong to tech crunch for the hackathon. You're gonna be underprepared, so you might not build an app as good as you want. The week after, we go to Zurb. 

Samer: how to do a todo list is documented all over the web. how about a simple twitter clone? 
Samer: test mobile first. Then expand the screen. To do that, you use the emulator in chrome. Example you can test on iphone5. 

Berlin: is it frown upon to have so many divs? Samer: with bootstrap, it's fine. 

Set a max character number. While I'm typing, I want that number to go down. If I'm doing this in jQuery: on key press, decrement the number? On key press, read and subtract the number? 
Automataically bound. If you're using Angular, you ahve to think away from jQuery. It's the opposite of jQuery. Not event handler cuz automatically bound. 

<p class="help-block">{{140 - tweet.length}}</p>
that's all you need! 
It does count spaces, but only spaces between by non-space characters. 
Use ng trim to count all spaces. 

directives. example, ng-model, ng-trim, and ng-disabled. 
ng-disabled=true means your button is disabled. 
ng-disabled="1 < 3" disable when that condition is true. 

Me: <button type="submit" class="btn btn-success" ng-disabled="tweet.length >= 140">Tweet</button>
Samer: <button type="submit" class="btn btn-success" ng-disabled="tweet.length > 140">Tweet</button>

Notice we haven't been using javascript? 

<span ng-class="{'red': false}">{{140 - tweet.length}}</span>
The class red is false here, so it doesn't have class red. 

we do this withotu js because we have data binding. 

bad practice is repeated code. let's have controller. 

<body ng-app ng-controller="TweetCtrl as t">
^ making a controller and setting it an alias. 

//^ your first step. define an angular app in the js file. Then in html, you specify the ng-app name. 

If you have repeated logic, you make a function and call it multiple times. 

If we use a logic one time, do we still want to give it a function? Samer: go ahead and put it in a function. Important to come up with a good name. 

What's model in Angular app? factory. 

140 and 140 is the same number and we shouldn't put it in two places. Declare a variable? Make them reference? Samer replaced this.tweet.length > 140 with this.remainingCharacters() < 0

If you don't have the alias, you have to use the scope service. $scope. 

In Angular, there is no DOM manipulation. You can append prepend, but you shouldn't. In Angular, you would bind the DOM to a variable. 

<button type="button" ng-click="sendTweet()" class="btn btn-success" ng-disabled="t.invalidTweetLength())">Tweet</button>
normally, have () after a function means execute. But it's weird in Angular. You need () to specify that it's a function? It's an Angular thing. 

Did you see that I dn't need DOM manipulation at all? All I need is bind DOM with variable. Data. Rrepresent data and DOM once. That' Angular. YOu can get rid of mental weight. 

Always work with your data. Don't work with the DOM at all. 

If you have an array and you have to display each element... basically, you need to repeat a li for each element in array. 
Now, my array is represented with an ul list. 

look up ng-if . 

Angular has its own $ajax called $http

How can we take an array and remove elements thta don't fit a criteria? Filter. 
from example: 
data.data.children.map(function(rp) { return rp.data.url } ).filter(function(imgUrl){ return imgUrl.match(/gif$/) })




