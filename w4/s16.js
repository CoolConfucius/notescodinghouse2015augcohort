/* 2015 Sept 16 
We want front end and back end to be separate. myProj: FE bower json. BE package json. .git. You commit them together with sub directories. 
Route. show a different view based on what we want. 
Start with the backend, have a route. 

Express has nothing to do with Angular. the only thing connecting them is request and response. 

Full Stack Development. FE and BE and interaction between the requests. 

Samer: 
What's a factory? In Angular, a factory returns a service. if you have a service, you're ready for that service. But if you hvave code that creates a service, its' a factory. if want Dynamic service, you create a factory. A factory is a generator. It creates things. The safe thing is always do a factory. That way, you can always have a service and generate service. And service uses this syntax. 

Front end routing. There's difference between front end routing and back end routing. Backend routing deals with api end points. For api endpoints. FE routing is different. Can we do MVC on FE without routing? Generate new html page, then js takes over. lots of moving concepts when it comes to FE routing. it's very important. you should think routing first before you think any feature. 

Angular comes with ngRoute. 
Concept, you start from a route. It could be a /# or a normal route / or, the new system you can have route without hash. / is new. You have to configure server to understand. all the urls are going to the same Angular app. 
If we have nested views.... UI router. 

Authentication is not public guest access. You have to authenticate yourself. Or, let's have them authenticate with Twitter. Once process done, Twitter will tell me that Joe is Joe. Out source authentication to other party such as Twitter, Facebook, Linkedin. Easiest way to make authentication is use Firebase. After we have a profile... focus on MVC in Angular. I want to leave you with an UI...

System: I log into system with Twitter account. Let's call this system X. Do not think of actual implementation of tweeting. I want to focus on MVC interface of system. We need screen of coding house to specify who can tweet on their behalf. Then tweet screen. Just two simple screens. First screen is define peopel who can tweet on your behalf. Second screen is tweet on your behalf. 

Samer: The best tool to make mockups is Balsamiq

MVC is you can tweet on behalf of one. Tweet on behalf of last user who authorized you to tweet. 

git issues.

On git angular, lots of issues. every issue is a discussion. 

Give up on follwing along. Take notes. 
In Firebase, create new app. go to Login & Auth. Email & Password, it's a feature, but not MVP. Go to Twitter. Firebase is a prototyping system. Expect documentation is good. Twitter, they want Twitter API Key and Secret. click the guide to User Authentication. The callback URL is important. We want Twitter to use firebase as authentication. 
In Twitter Codective-dev, fill in the inputs. the website can be anything. save. update settings. The Callback URL is from the Firebase documentation. 

In Twitter LoginwithFirebase, copy the api key to Firebase Twitter API. 

Firebase Installation and Setup, copy the script tag. 
npm install -g serve 
Samer: I think this is the best one on node. 

In Firebase documentation in 7, Logging Users In. Copy the first snippet. First rule of pasting code, is to understand it before using it. 

The OAuthPopup. A popup should appear in localhost:3000. Chrome may block it, but we can change the setting. It went to Twitter, authorize me, and came back with console.log statment.  

Now when we go to Twitter.com and refresh, it says "Aurthorise LoginWithFirebase to use your account?" 

Samer: by the way, be aware of phishing attacks. It'll look like this but it's not Twitter. 

"This application will be able to: Read tweets from your timeline... post tweetts for you... etc."

Interview Question! 
There are two main short circuit expressions in any programming languages. it's the && and || . The fancy term for that is short circuit. It's when you use somethign and && or something and || . Why named short circuit? If first thing failed, it'll cut it there. In &&, if the first expressoin is false, it won't even parse the second expression.  In if statement... something. What about || , If first expression is true, the second expression won't be evaluated at all. a = a || something... what? 

Back to example. 
What's the MVP of doing this? Alert! That's actually MVP. You want to tell the user... there are ways to make the alert box less ugly. Since we only have one screen, have that shows up as disabled. Once authorized, it's enabled.

Oldschool authenticate. You authenticate yourself with server, node or rials or whatever backend you have. the server, the one responding back with content. not browser. browser is between you and server. The browser is stateless. Only sends unique id. It's encrypted. Server decrypts it. 

Firebase says there's a lot of problems with this model. Let's store authentication in browser since you have local storage. If you store user info, you don't have to worry about where the logic is supposed to be. 

To look at your local storaage. In Chrome browser, inspect eleemnt, resources, and look to the left and you'll see Local Storage. Somethign console. You can store up to 5 Megabytes of data. Any website can store that amount of data. Local Storage is local to your browser. 

get soemthing from local storage. 

*/
// if (localStorage["firebase:session::teamtweet15"]){ return; }
// You return from a function, not a file. So need a function. 
// let aurthoriseGuests = (){
//   if (localStorage["firebase:session::teamtweet15"]) { 
//     return; 
//   }
//   var ref = new Firebase('https://teamtweet15.firebaseio.com');
//   ref.authWithOAuthPopup('twitter', function(error, authData){
//     if (error) {
//       alert("Login Failed!", error);
//     } else {
//       alert("Authenticated successfully with payload:", authData); 
//     }
//   });
// }; 

// In hacathon, do as fast as possible, as dirty as possible. Care about innovative solution, not effecient solution.

//Mockup form. authenticate first. then have access to data. 

// Interview question: why do you need to use the most popular CDN? It's most likely to be cached alreayd in other browsers because a lot of other people are using it. 

//In Angular, start with the ng app. Where do you put the ng-app? Interview question. The answer is anywhere! Just pick a div and make it angular app. Can be body. In examples, we put it in body. 
// <body ng-app="team-tweet"> 
// The MVP way, we're not going to use routes until we need them. 
/* let's make a new div for the controller. we need an ng-model for the box. A good name may be tweetText. In javascript, when in doubt, camelCase. ng-app is cabab-case. 

Every question I ask you is an Interview Question. What do we need here? button ng-click. You have two ways to send: ng-click and ng-submit, two things/ events. ng-click="tweetAs()" ng-model="fromAccount" . Won't work unless app is defined. 

Difference between console.log and console.error? Error gives you the stack of execution? 

On git
git fetch
there's a git command that gives you all the commits you don't have. I just want to filter the commits I don't have. 
git log origin/master --not master 
this will just give me all the commits on git hub that are not on my local. I can also use 
git diff ...origin/master
this is bascially saying diff my branch to origin master. I usually go with three dots. This is very much equivalent to master to origin master. That's exactly what we need. All the pull requests in one diff. Now that I reviewed what has happened, I can pull 
git pull 

Samer: Do not use tabs. Make your editor convert tabs into two spaces, so that, when you hit tab, it converts to two spaces. 

git add . 
add everything. I have plenty of code changes. but they change nothing, just code spacing. spaces aren't significant. Is there a way to see significant changes? 
gds -w -b 
This is a way to verify that this commit is just space changing. 
*/

import authorizeGuests from './authorize';
// window.app = angular.module('team-tweet', []); put this guy in a new js file
import "./ngApp";
import "./services/accountService"; 
app.controller("TweetCtrl", ($scope, accountService)=>{
  accountService.add("@Acct1");
  accountService.add("@Acct2");
  accountService.add("@Acct3");
  accountService.add("@Acct4");
  $scope.accountList = accountService.getAll();
  $scope.tweetAs = function(){
    console.log('we are here');
    console.log($scope.tweetText, $scope.fromAccount);
    // it will hit an api endpoint. then you shouldn't be in controller but in model. api endpoint. MVC. c is taking data from v to m. The controller's responsibility is not to detail, but to send model a signal to tweet. 
    // pass in object. because in object, order doesn't matter. No ambiguity 
    // apiService.tweetAs( { fromAccount: $scope.fromAccount, tweetTest: $scope.tweetText } ); 
    // an angular way to make this cleaner is to use a model. 
    apiService.tweetAs($scope.data); 
  };
};
authorizeGuests(); 

// How to define a global variable? Just put it on window! Window is the global object in your browser. 

// Interview Question. How do we solve this problem? You should tell me before this is happening. You should take that initiative of pointing out code. If you find a bug before your interviewer, that's impressive. Make import "app" at the top. 

// new js file, ngApp.js
window.app = angular.module('team-tweet', []); 

// Controllers. 
import authorizeGuests from './authorize';
import "./ngApp";
import "./services/accountService"; 
import "./services/apiService";
import "./controllers/TweetCtrl";
authorizeGuests(); 

//This is one way to start organizing your app. The easiest way, said Samer. Other way is Angular dependencies. 

app.service("accountService", function(){
  var accounts = [];
  this.getAll = function (){
    return accounts;
  };
  this.add = function(username){
    if(accounts.indexOf(username)===-1){
      accounts.push(username);
    }
  };
})

app.factory("accountService", function(){
  return {
    accounts: [],
    getAll: function (){
      return this.accounts;
    },
    add: function(username){
      if(this.accounts.indexOf(username)===-1){
        this.accounts.push(username);
      }
    }  
  }
});

//Return an object. In here, you can dynamically define an object before you return it. 

//something works well when your project is small. when big... organize by feature. 

// src/services/...js
app.service("apiService", function(){
  this.tweetAs = function(options){
    console.log(options);
  }
})





app.get('/who/:name?/:title?', function(req, res){
  var name = req.params.name; 
  var ttile = req.params.title; 
  res.send('<p>name: '+name+'<br>title: '+title+'</p>')
});

//npm start for stockexpress 

