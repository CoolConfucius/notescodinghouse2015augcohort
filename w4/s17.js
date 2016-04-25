/* 2015 9 17 
Cade
Angular Fire is blending Angular with Firebase, three way data binding, data in Angular and data in Firebase. 
Today, UI Router. Difference between that and ngRoute. ngRoute interprets address in address bar and translating it into view in controller. UI router does a lot of other things. It's also paying attention to address bar. That's important cuz if user wants to copy link, we need to make sure if that buddy types in the same address bar, that your app will show the same thing. In addition, it deals with states. So this state thing can be associated with view or address. We're talking about Route, what's in adressbar, and the state, which is the name for it, and htere's also the view which is html and there's controller wich is javascript that runs the html. Four things. UI router is deeper in that you can do things like nested views and different controller. ex. your nav bar can be its own view and not change while everything else below can change. nav bar can have its own controller. 

Let's look at Samer's code. 
npm install && webpack 

He's brining in things, then connect module to window. On his ngApp.js, all he's doing is declaring the module and that's it. In index.js, import the stuffs and authorizeguest. By putting app on window, it becomes a global variable. So that app is the global app we declared. The way I see it, instead of connecting to window, I'd refer to the module itself. So in TweetCtrl.js, I'd do: angular.module('team-tweet').controller("TweetCtrl", ($scope, accountService, apiservice)=>)... but I'll go with what Samer has. I thinkI'll make a new one but take inspiration from Samer's code. 

touch webpack.config 
nis babel-loader
rename main.js to index.js. that's my entry point. where I'll be importing everything. 
cd src 
touch module.js 
window.app = angular.module('uiroutertest', []); 
Then copy the cdn to angular to index.html and put ng-app="uiroutertest" in the body. 
in index.js, require that by: import './module';
mkdir controllers
touch controllers/home.js 
app.controller('home', function(){
  console.log('home loaded');
}); 
in index.js, import './controllers/home'
webpack 
then load bundle in index.html with script tag. 

First thign with UI router is you don't need ngRouter at all? We have to install ui router. ui router cdn: 
script src=""

.state provider means we're making a new state with each one. 

in index.html, ui-view is basically the same as ng-route. that's where the partial will be inserted. 

$urlRouterProvider.otherwise('/');
If you give a url it dosen't know, it'll give you a default. "well, we'll just send you home"

ui-sref is a special directive for ui router. 
<button ui-sref='home'>HOME</button>
  <button ui-sref='about'>ABOUT</button>
  these buttons will change state. The address bar will change, too. 

Cade: I prefer to use UI Router. I pretty much just use UI Router for all my FE routing. It'll do everything ng Router would do and more. And it's easier. Don't have to worry about url so much. View. State change. and you're good to go. 

<button ui-sref='about'>About</button> 
but what if I want to do something else? 
<button ng-click='aboutClicked()'>About</button>

using $state, we cna see what the state is and change it. 
$state is connected to our state provider. 

to change state, can use ui-sref or state.go 
console.log($state.curret.name); to see current state name. 

say we have register and login page. the difference between these states are the slight. they're the same in that they ask for passowrd and user name. the difference is that one is for new users and and one is for existing users. what if they can share one view? that'd be less code and simplify thigns, and improve app's organization for sure. They can share the same controller. The trick is to use $state controller. Am I in login state or something different? 

made users, users.login, users.register
For the template, include a view. 

In config.js 
.state('users', { abstract: true, templateUrl: 'src/views/users/users.html'})
this is because it's a parent and donesn't stand on its own. 
we specify child states by naming them appropriately. 
.state('users.login', {})
at this point, it works like a normal state. 
.state('users.login', { url: '/login', templateUrl: 'src/views/users/users.login.html'})
.state('users.register', { url: '/register', templateUrl: 'src/views/users/users.register.html'})

a controller, in this case, makes sense for them to have the same controller. they're doing the same thing more or less. 

in my state provider in config.js, I need to provide the controller. 
.state('users.login', { url: '/login', templateUrl: 'src/views/users/users.login.html', controller: 'usersCtrl'})
.state('users.register', { url: '/register', templateUrl: 'src/views/users/users.register.html', controller: 'usersCtrl'})
both of them use same controller 
when sharing same controller, doesn't reload. it's only when come into view that loads controller for first time. 

The error I got is because I didn't import the users controllers to my index.js. 

Login will look the same as register. The names, text in the button, will be differnt. Some logic will be different? 

make factory. don't forget to load into your index.js 

I want you guys to basically implement this login and register page. it's two pages but with the same controller. it's gonna call the factory function and register the user. if you're in the login state, it's gonna call user.longin. if they registered, should change state to login. 

my users.html doesn't have a controller. 


Samer: 
firebase documentation. 
https://www.firebase.com/docs/rest/quickstart.html
https://www.firebase.com/docs/rest/guide/saving-data.html 


curl -X Post -d '{"test": 42}''https://teamtweet15...'
-X is to specify verb 


https://teamtweet15 is my firebase. use your own. 

I should save their access token. 
in authorize.js 
this auth function is...... this is an ajax request. we want to make it depend on angular, then we neeed to make some changes here. easier to use web api here. 

Samer: firebase doesn't have arrays, just objects. 

In our index.html, we add our ui router. A script tag under the Angular js tag. 

Kill something in the index and in its place put the ui-view in a div tag. This is basiclaly your outlet. Router associates somtehing with a state and template? 

Paste the code you just removed ffrom the index into a new html file: home.html. Mkae a directory, call it templates. move the home.html into the templates directory. 
One thing need to change is kill the controller. Don't need to specify cuz route will do that. 
*/
// first dependency is ui router. 
// window.app = angular.module('team-tweet', ['ui.router']);
// app.config(function($stateProvider, $urlRouterProvider){
//   $urlRouterProvider.otherwise('/')
//   $stateProvider
//   .state('home', {
//     url: '/',
//     templateUrl: 'templates/home.html',
//     controller: "TweetCtrl"
//   })
// });
// /#/ is our first route. 

/* ... 
Can't ahve a route wihtout a template. templates/accounts.html 
to make href work with ui router, make ui-sref. ui-sref="home" , ui-sref="account"

in accountsCtrl, we call a service. We have the account services that already as an add function. 

to expose something is to make it available in the view. 

in accountservice.js 
keep it as array? 
*/
app.service("accountService", function($http) {
  var accounts = [];
  this.getAll = function () {
    return accounts;
  };

  this.addAccount = function(twitterHandle) {
    if(accounts.indexOf(twitterHandle) === -1){
      $http.post("http://teamtweet15.firebaseio.com/adminAccounts/" + currentAdmin, { account: twitterHandle})
      //second argument is data you want to push. 
      accounts.push(twitterHandle);
    }
  };
});
//Simplest thing we can do is read from local storage. parse with json parse. 
JSON.parse(localStorage"firebase:session::teamtweet15"]).twitter.username 
// so in account service we have: 
var currentAdmin = JSON.parse(localStorage"firebase:session::teamtweet15"]).twitter.username;

// https://www.firebase.com/docs/web/guide/retrieving-data.html 
// You get a child added event for every child added. On child added, we're gonna update our array. 


// Samer on console: 
var ref = new Firebase('https://teamtweet15.firebaseio.com/tests')
var o1 = ref.push('Samer');
var o2 = ref.push('Cade');
o1.remove(); 
// this removes all? or just one? 
ref.child('weird_id').remove(); 
// this removes the object Cade. You need the werid id. You can access this id in the code. 
// To remove an object, you need its key. You need to keep track of the key. 
authorizedRef.on("child_added", function(snapshot) {
    var fbKey = snapshot.key(); 
    var twitterHandle = snapshot.val();
    $timeout(function() {
      authorizedForLoggedInAccount[fbKey]=twitterHandle;
    }, 0);
  });

// remember to npm install and webpack after git clone! 

// ......
// lodash docs. On an Object, _.has  _.mapValues  _.values(object)  