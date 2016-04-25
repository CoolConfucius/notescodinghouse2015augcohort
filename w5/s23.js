// dream. trauma. 

// 'use strict'; 
/* 2015 9 23 
Cade: we'll be doing more MEAN Stack. 
Warm up: takes string, change from title case into snake case. 
ThisIsAString
to 
this_is_a_string 

*/

// function convert(string){
//   var arr = string.split(''); 
//   arr[0] = arr[0].toLowerCase();
//   var next = false; 
//   arr = arr.map(function(value){
//     if (value !== ' ' && value === value.toUpperCase()) {
//       if (!next) {
//         value = '_'+value.toLowerCase();
//       } else {
//         value = value.toLowerCase();
//         next = false; 
//       }
//     };
//     if (value === ' ') {
//       console.log('space encountered!');
//       next = true; 
//     };

//     return value; 
//   });
//   return arr.join('');
// };

// var test = 'ThisIsAString'
// var test2 = 'ThisIsAString ThisIsAString'
// console.log(convert(test));
// console.log(convert(test2));






// //Charles
// function snakeCase(str){
//   var words = []; 
//   words.push(str.match(/([A-Z][a-z]+)|(A-Z)/g))
// }... 

// // Joe: 
// 'use strict';
// let snakeCase = (string) => string.replace(/[A-Z]/g, (char) => "_"+ char.toLowerCase() ).slice(1);
// console.log(snakeCase("ThisIsAString"));

// Liang: 
// let snakeCase = string => {
//   return string.match(/[A-Z][a-z]+/g).join('_').toLowerCase();
// }

// Cade: change plus to a star. plus is one or more. star is zero or more. 
// return string.match(/[A-Z][a-z]*/g).join('_').toLowerCase();


//Mike Lee, Lodash 
// Cade: 
// let snakeCaser = string => {
//   let snaked = string.replace(/([A-Z])/g, '_$1'); //replacing itself with a underscore? 
//   return snaked.slice(1).toLowerCase(); 
// };
// console.log(snakeCaser("ThisIsAString"));

// console.log('John Smith'.replace(/(\w+)(\w+)/g, '$2, $1'));


// Darien's animal shelter
/* Clients, adopt, pets, Clients... 
Cade: can ng-disable buttons. There's also a required attribute, an html thing. In one of the inputs, put attribute. 
<input type="text" required ng-model="..." class="..." ...>

Liang's Pokemon Shelter 
takes image url 
refreshes after you add. 
click adopt and the button will disable. 
can also delete trainers. 

Cade: This is protfolio season! 

Quade 's abandon animals 
Cade: find is aysnc. Takes two args. The second one is a callback. 
router.get('/', function(req, res, next){
  var viewClients = clients.find({}, function(err, clients){ 
    res.send(clients)
    console.log(clients);
  });
});

Andy's: 
Bunny rabbits. 

Cade: res.render is Express rendering for you. 

Can learn how to write methods onto schemas. Some Mongo, some Angular. 

Cade's animal shelter: 
I made all those things required. I'll change them to false so testing won't take forever. 
NOtice I don't hav e views in my back end. 
We have bob and fluffy. Let's bring them together. Can either put this in the client's route. A put action. Put slash clientid slash animalid or something. Notice my animals and clients js Crud are nearly identical. 
Need a route to make adoption happen. 

In my client's route: 
*/
// PUT localhost:3000/clients/some_id/adopt/some_id
// router.put('/:clientId/adopt/:animalId', function(req, res){

// });


//let's give Bob a phone number. 
// If I want ot update bob: 
// In postman, Put localhost:3.../clients/his_id
// in body: phone: 55555555
// now bob has a phonenumber. 

// or
// router.put('/adopt/', function(req, res){
//   req.body.clientId
//   req.body.animalId
// });

// maybe we want a whoel new route for this. 
// ... 

// set unique to be true to that won't accept repeated id. If we want to check if want same animal twice, this is ignoring the animal's availability, ... 



//some notes: 
      // res.send({client: client, animal: animal})
      // client.pets.push(animal); //animal is the whole animal object. 
      // client.pets.push(animal._id); //animal is the whole animal object. 
      // res.send(client); 
      // // remember to save! 
      // client.save(function(err, savedClient){
      //   res.send(savedClient);
      // })


// earlier, Cade had deleted the adopt.js in routes. 


// PUT logocalhost:3000/clients/adopt?name=bob&pet=fluffy
// starting with a question mark is a called a query string. Separated by &s. 

// PUT logocalhost:3000/clients/adopt?a=5&b=6 
// gives
// {
//   a: 5,
//   b: 6
// } 

// PUT logocalhost:3000/clients/adopt?clientId=id&animalId=id
// {
//   animalId: id, 
//   clientId: id 
// }
// order doesn't matter. 

// So there are different ways to go. Using query strings, we have question marks and &s. In comparason to parameters which are between slashes. Can we use them both? Yes we can! All these different things can be used. 

/*I want to show you guys populate 
I don't want just an id. I want fluffy. Populate gives us fluffy. if you delete fluffy, it won't populate. if you update fluffy, it'll give you the newest version. 

splice. on array. we give it an idex and the number of things we'd like to remove. also takes an optional third argument of what you want to put to replace. 

Let's take a step away from Mongo and talk about Angular. Part of the challenge is to have an individual client show case. 

On Darien. Cade: Reccomend not to be super specific with services. A service for one resource. Then it's organized nicely. 

I want to show you gusy something: 
https://github.com/angular-ui/ui-router/wiki/URL-Routing 
$stateProvider
    .state('contacts.detail', {
        url: "/contacts/:contactId",
        templateUrl: 'contacts.detail.html',
        controller: function ($stateParams) {
            // If we got here from a url of /contacts/42
            expect($stateParams).toBe({contactId: "42"});
        }
    })

I rather have controllers in their own file. 

we can set up the front end to work in a similar way. 

You can only use pareams that register with the state.  */
// $stateProvider.state('contacts.detail', {
//    url: '/contacts/:contactId',   
//    controller: function($stateParams){
//       $stateParams.contactId  //*** Exists! ***//
//    }
// }).state('contacts.detail.subitem', {
//    url: '/item/:itemId', 
//    controller: function($stateParams){
//       $stateParams.contactId //*** Watch Out! DOESN'T EXIST!! ***//
//       $stateParams.itemId //*** Exists! ***//  
//    }
// })



//Cade. Index means show all. Cade fixes the names, adding index to some controllers, so it's clientIndexCtrl. 
 // Cade has folders in his views folder. In the clients folder is an index.html . In there, he uses bootstrap. 

 // We want to go to a show state. Just see a client, not just their name. Want to click on one of these guys and go to a show. We want to set up a new state. 
 // He makes a show.html in his views/clients folder. 
//... 
// in view/clients/index.html 
//If I click on one of these tds, I want to go to that state... clients show controller shows up in console. We have a clients show case but we don't ahve anything after /clients/ in the url. We want the client's id in there. What I want to do is pass that id along. Basically pass in as an argument of a function. I want to pass in that informaiton along. 

// similar to views, he also hs a clients folder in controller. in clients folder, he has clients.js and show.js 

// controllers/clients/show.js 
// stateParams is an object that has the keys of what's registered in the state. in this example, client id. 

// 'use strict';

// angular.module('animalShelter')
// .controller('clientShowCtrl', ['$scope', '$stateParams', 'Client', function($scope, $stateParams, Client){
// console.log('client show crrl');
// console.log('$stateParams', $stateParams); // shows the object
// console.log('$stateParams', $stateParams.clientId); // shows the client's id. 
// }]); 

//I like you to implement a show page. Cade on board: 
/* 1. make show state
(view /controller)
2. make if accept id in param 
3. link to state from index



Me: I'm having an error saying module is not availabe, that needs dependencies. 
Cade: when you have an ng-app='' in your index.html, you need to declare your dependencies in your module.js. You still start with angular.module and the name as the first arg, but have an array of the dependencies in the second arg. even if you're not using dependencies, still have an empty array. 


command option / to comment highlighted chunk. 



Cade: instance method. an object oriented kind of thing. if you have an instance of a class, you can associate the mehtod to that instance. it's a prototype method. 
*/
// var arr = [1,2,3];
// arr.splice(1,1)
// Array.prototype.splice()
// // I want to call a method on a string and call the camel case version of that. 
// String.prototype.camelCase = function(){}
// //I can make that into a function. 
// //Monkey patching! Good for interview. Monkey patchin is where we can add new method to string. 
// "something".camelCase()
// // because I monkey patched, I can call that. 
// Array.isArray()

// var Client = Mongoose.model(name, schema)
// var bob = new Client({name:'bob'})
// //I want to be able to call a method on the document itself. 
// bob.sayHi()
// can monkey patch class methods and instance methods. 
// Array.bacon = function(){}

// http://mongoosejs.com/docs/2.7.x/docs/methods-statics.html
// var AnimalSchema = new Schema({
//     name: String
//   , type: String
// });

// AnimalSchema.methods.findSimilarType = function findSimilarType (cb) {
//   return this.model('Animal').find({ type: this.type }, cb);
// };
// the this. is referring to the new dog. 

//Statics are what Mongoose calls class methods. 
// AnimalSchema.statics.search = function search (name, cb) {
//   return this.where('name', new RegExp(name, 'i')).exec(cb);
// }

// Animal.search('Rover', function (err) {
//   if (err) ...
// })



// var client = new Client...
// client.save()...

// let's make an instance method. What ti's gonna do is change that animal, the isAvailable field, change from flase to true or true to false, and save it. I want to pass in the call back cuz saving it is gonna be async. I recommend looking at the Mongoose documentation on statics. 

var animal = new Animal({name: "Fido", type: "dog"}); 
animal.toggleAvailable( function(err, savedAnimal){
  animal.save(function(err, savedAnimal) {
    if(animal.isAvailable){
      animal.isAvailable = false; 
    } else {
      animal.isAvailable = true; 
    }
  })
});

// animal.toggleAvailable = function 

// Me: 
// function toggle(bool){
//   if(bool){
//     bool = false; 
//   } else {
//     bool = true; 
//   }
// }

// AnimalSchema.statics.toggleAvailable = function(cb){
//   this.isAvailable = toggle(this.isAvailable);
// })

// Animal.toggleAvailable('Animal', function (cb) {
//   this.isAvailable = toggle(this.isAvailable);
// })

//Cade's slack 

'use strict';
​
var Mongoose = require('mongoose');
​
Mongoose.connect('mongodb://localhost/schematest');
​
var animalSchema = Mongoose.Schema({
  name: String,
  type: String
});
​
animalSchema.methods.sayName = function() {
  console.log(this.model('Animal'));
};
​
animalSchema.statics.getCats = function(cb) {
  this.find({type: 'cat'}, cb);
};
​
var Animal = Mongoose.model('Animal', animalSchema);
​
var dog = new Animal({name: "Fido", type: "dog"});
​
var cat = new Animal({name: "Fluffy", type: "cat"});
cat.save(function(err, savedCat){
​
})
​
​
Animal.getCats(function(err, cats){
  console.log('cats', cats);
})

//Cade's animalShelter/backend/models/animal.js

animalSchema.methods.toggleAvailable = function(cb){
  this.isAvailable = !this.isAvailable; 
  this.save(cb);
};



// on the right where we have it defined and left is instance where it's used. cb is a function. that's how call backs work. you pass in a function as an argument. 

// this is powerful. in Express, the controllers are bascially the routers. they decide what happens. we're gonna be able to take more of the logic in the controllers to the schema. so our routers will be pretty skinny. it is a more object oriented way to structure these things. 