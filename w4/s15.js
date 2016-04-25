//2015 9 15 

// Joe's 
// $scope.show = false 
// $scope.planetLists = []
// $scope.getData = (url) => {
//   console.log("loadshipinfo")
//   $http.get(url).success ( (data) => {
//     console.log(data)

//   })
// }

// div id="collapse{{$index}}" class="accordion-body collapse">

// Darien's 
// app.controler("planetCtrl", ..., function(){
// $scope.planets = []
// $http.get("api")
// .success(data -> {
//   let pages = math.ceil(data.count/10);
//   for(var i=1; i<=pages; i++){
//     starwarsplanetloop(i);
//   }
// })
// let starwarsplanetloop = ....  
// })

//Sam;s 
// app.controller("planetCtrl", function($scope, $http){

//   var planets=[]
//   var p=0
//   while(p<61){
//     p++;
//     $http.get('api').success( data =>{

//       $scope.planets=data
//       $scope.population=data.population
//       console.log(resArr)
//     }).error(error => {
//       console.log(data.name);
//     });
//     $scope.showPlanet = () => {
//       $scope.selectedPlanet = planet;
//       console.log(planet);
//     };
//   }
//   $scope.residents = () =>{
//     if (data.residents) {

//       $scope.residents = resArr.match(/(\d)+/g);
//       console.log("total: "+$scope.residents);
//     };

//   }
//   for (pl in planets)
//     $scope.planet = pl; 
//   $('ul').append... 
// })


// Cade: Angular is known for its modularity, componeents. We can write some piece of code and implement it easily into a product in the future. Factory and services, ways to make reuseable pieces of code. Idea is similar to a class in other languages. What factory is doing is pumping out objects. Factories and services fall under the model category of our MVC. 
// We're gonna take some of these things otu of the controller and put it in a factory and services. Factory wants you to make an object and return an object. Pump out as many objects as you want. 
// put name of factory as dependency of controller. 
//app.controller('myFactoryCtrl', function($scope, myFactory))...
//Service
// app.service('myService', function(...))...

import angular from "angular";
let app = angular.module("planetLister", []);

// app.run( function() {
// // it'll run once once loaded. Kind of like an init function 
//   console.log('run!!!')
// });
// app.run( function(planetsService) {
// // it'll run once once loaded. Kind of like an init function 
//   console.log('run!!!')
//   planetsService.getPlanets();
// });

var count = 0; 
// app.controller("planetCtrl", function($scope, planetsService){
app.controller("planetCtrl", function($scope, planetsFactory){
  $scope.planets = []; 
  // debugger;

  // var planet1 = planetFactory();
  // var planet2 = planetFactory();
  // var planet3 = planetFactory();
  // var planet4 = planetFactory();
  // // planet2.number++
  // // planetFactory(); 
  // console.log(planet1);
  // console.log(planet2);
  // console.log(planet3);
  // console.log(planet4);

  // var planet1 = planetFactory('Earth');
  var planet1 = planetFactory('Earth', ['Moon']);
  planet1.addMoon('newMoon');
  // var planet2 = planetFactory('Mars');
  // console.log(planet1);
  // console.log(planet2);
  // console.log(Object.keys(planet1));
  // console.log(planet1.count);
  

  // if want to use promise: 
  // planetsService.getPlanets().success( (data) => {
  //   $scope.planets = data.results; 
  // }) 
  // var planet = new planetFactory;
  // console.log(planet); 

  // planetsService.getPlanets((error, planets) => {
  //   if (!error) {
  //     $scope.planets = planets; 
  //     console.log($scope.planets);      
  //   };
  // });

});

// generate info of one planet 
app.factory('planetFactory', function($http){
  // var planet = {
  //   // name: "Earth"
  //   number: count++
  // };
  // var planet = function(){};
  // planet.count = count++;
  // planet.prototype.count = count; 

  var planet = function(name){
    this.name = name; 
    // this.count = count; 
    this.moons = moons; 
  };
  planet.prototype.addMoon = function(moon){
    this.moons.push(moon);
  };
  // this is close to the idea of objects and prototypes in javascript. 
  return planet;   
})

app.service("planetsService", function($http){
  this.planets = []; // might not need this depending on approach. 
  // this.planets = ['Earth', "Mars", "Venus"];
  // this.getPlanets = () => {
  //   $http.get('api').success( data => {
  //     this.planets = data.results; 
  //   }).error( error => {
  //     console.log(error);
  //   });
  // }
  // or return the promise 
  // return $http.get('api')
  // Or callback 
  this.getPlanets = (cb) => {
    $http.get('api').success( data => {
      cb(null, data.results);
    }).error( error => {
      cb(error);
      console.log(error);
    });
  }
  // do we want a callback? maybe. 
  this.getPlanets = (cb) => {
    $http.get('api').success( data => {
      this.planets = data.results;
      cb(); 
    }).error( error => {
      cb(error);
      console.log(error);
    });
  };

});

//factory, we're creating an object to be returned 
// concept the same, just syntax is different. 
// app.factory('planetsFactory', function($http){
//   let obj = {};
//   obj.planets = []; 
//   obj.getPlanets = (cb) => {
//     $http.get('api').success( data => {
//       obj.planets = data.results;
//       cb(); 
//     }).error( error => {
//       cb(error);
//       console.log(error);
//     });
//   };
//   return obj;
// })

// console, planetsService.planets.push('Saturn') adds the element into the array planetsServices.planets . 

// typically you don't use jQuery with Angular, but you can. It does come built in in Angular. It's not the engine of Angular, but it's there, jQLite. 
//MikeLee: all the stuff jQuery can do, Angular can do on its own. Cade: sometimes it's nice to do direct DOM manipulation than variable binding. 
// there are basic jquery elements in Angular. But it also gives you extra things in Angular. There are Angular things, methods. Controller, scope. 
// THere's Angular version of Bootstrap called UI Bootstrap. You can basically use this instead and it's more angular bindy things that work nicely. You just have to... you get the angular js file, angular ui, and you have the css. You just continue to use the regular bootstrap css, but the js is angular power. 

// Service vs Planet. In our example, it's better to use a service. We just want one list of planets that's available. Service is more like a singleton, meaning we only have one of them. 
// Maybe we can have a single planet factory and we can use it to get different planets. 

// You can choose factory or service. You want to have interaction with api in that factory or service. So in your controller, you call a function pass in apple and get a stock. Your controller will do next to nothing. It'll just use the mehtod from factory or service. for input, it can be the stock name or company name. 


// npm init 
// npm i --save webpack babel babel-loader 

//Hackathon. Short and sweet. Make it pretty. It's hackathon so pretty may be more important tahn functionality. 

// We want to do a math service or factory. All math is done on factory or service. 


//Cade: 
/*
...
You can have several views and change in an instant cuz you don't have to load anything else. The chunk of html can have its own controller, its own logic involved. YOu can micromanage to make it modular. Fast efficient is the idea. We're gonna have you guys go through a tutorial. Give you guys half an hour to follow through tutorial to understand the concepts involved. NG Route is what it is. 

You guys should all be loading your web server. It's always a good idea to web server. Don't want to double click html and run in browser. That'll run into problems. 


Stocks
One page go to new stock, other page show you stocks that are watching, give updated quotes. 

We'll have a couple different views. A home page splash that's like "welcome" and some "start okay" a really basic home view. Then you can go to basiclaly adding a stock. you can hit that and start searching a company. When you add it, that'll go to your express server. 
Tracked Stocks. 
And List view. It'll go back to your server, get the stocks you're looking for, as well as their current Quotes. However you want to arrange that is up to you. 
The home isn't as important. As for as back end, we want to be able to manage what stocks we're looking for. This can be in some JSON file. We want to be able to add a stock, and maybe remove one, too. And delete that from list. From the view. YOu hit a button next to that stock and it'll go bck and remove that. When you go here, we want to be able to get the quotes. You'll have something in the back end to GET/quotes or something. That can give you all your quotes. Basically see what stocks you're tracking. REturn those quotes and maybe some objects and the quotes in there. 
GET/tracked 
POST/tracked
DELETED/tracked/name_of_stock 
*/
//Joe's 
//$scope.buttonList.push...
//app.factory('buttonFactory...//
//var buttons =...

//Cade's
// app.controller('', ['$scope',])
// $scope.nums=[''];
// $scope.ops=[''];
// $sopes.display='0'; 

// $scope.addOp = op => {

// }

// $scope.addOp = op => {
  
// }

// app.service('math', funciton(){
//   this.operate = (x, op, y) => {
//     switch(op){
//       case '+': 
//        return parseFloat(x)+parseFloat(y);
//       //case ...
//     }
//   }
// })
// <div ng-cloak>{{display}}</div>
// ng-click

// 4087394620

//No access control allow origin 
/// Basically a security feature by server side that doesn't allow request from cross. Doesn't like that unless we format it in specific way. 
// http.jsonp('http://dev.markit.. symbol='+symbol+'&callback=JSON_CALLBACK')
// use jsonp instead of get 
// p stands for padded 

//How you can make module wide constant. A constant that can be used in all of your angular. ALl your controllers, factories, evertyhign. 

// Chain controller. 
app.constant(); //this way, we can set a constant for a whole app. It works in a key value pair. First value is the key of the constant. Second argument is the constant itself. 
app.constant('flavor', 'vanilla'); 
//To use that, you need to require a dependency. 

app.controller('myCtrl', function($http, flavor){
  console.log("flavor is", flavor); //this returns flavor is vanilla . 
})

// value can be some number, or object
app.constant('apiKeys', {
  mailgun: 'adlksjf',
  google: 'dklfjs'
})

app.controller('myCtrl', function($http, flavor){
  console.log("apiKeys is", apiKeys.google); 
})

//I can have more constants. But I kind of like keeping all my constants in one object. 