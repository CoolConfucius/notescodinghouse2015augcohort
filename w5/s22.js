// share BUrning vid and say I'm going some day. Share Hackathon article with SCU/ TAS folks. 

/* 2015 9 22
An array combiner
combine([1,2,3],['a', 'b', 'c'])
// will give [1,'a',2,'b',3,'c']
// But we can have any number of arrays. 
combine([1,2,3],['a', 'b', 'c'],[8])
// will give [1,'a',8,2,'b',3,'c']
*/

// 'use strict';

// function findLongest(args){  
//   // console.log(args);
//   var longest = args[0].length; 
//   for (var i = 1; i < args.length; i++) {
//     if (args[i].length > longest){
//       longest = args[i].length;
//     }
//   };
//   return longest; 
// }; 

// function combine() {
//   var newArray = []; 
//   var j = 0; 
//   var longest = findLongest(arguments); 
// console.log(longest);
//   while(j < longest){
//     for (var i = 0; i < arguments.length; i++) {
//       if (typeof(arguments[i][j]) !== 'undefined') {
//         newArray.push(arguments[i][j]);     
//       }
//     }
//     j++; 
//   }
//   return newArray; 
// }; 

// // console.log(combine([1,2,3],['a','b','c'],[8]));
// console.log(combine([1,2,3],['a','b','c','d'],[8], ['d', 'e']));


// //Alice's 
// function combine(...arrays){
//   let e = arrays.length;
//   let maxLength = arrays[0].length; 
//   arrays.forEach((e,i) => {
//     if(e.length > maxLength){
//       maxLength = e.length
//     }
//   })
//   let output = []; 
//   for (var j = 0; j < maxLength; j++) {
//     for (var i = 0; i < e; i++) {
//       if(arrays[i][j] !== undefined){
//         output.push() ... 
//       }
//     };
//   };
// }

//Cade's
// let combine = function(){
//   let inputArrays = Array.prototype.map.call(arguments, arr => {
//     return arr; 
//   }); 
//   let resultArr = []; 
//   while(true){
//     let length = resultArr.length; 
//     inputArrays.forEach(arr => {
//       if(arr[0] !== undefined){
//         resultArr.push(arr.shift());
//       }
//     });
//     if (length === resultArr.length) {
//       break; 
//     };
//   }
//   return resultArr; 
// }
// console.log(combine([1,2,3],['a','b','c','d'],['W', 'X', 'Y', "Z"]));

// Todo Mongoose 
//Darien's 
router.delete('/', function(req, res, next){
  Task.find({description: req.body.description}, function(err, tasks){
    // task.remove(req.body.description, function(err, saveTask){
    task[0].remove(req.body.description, function(err, saveTask){
      res.send(); 
    });
  });
});
//Task.find gives you an array! Always. So task[0] instead. But what if you have tasks with the same description? can use findOne but that still doesn't answer the question. We need a way to figure out the task. Id. Mongo id. The unique identifier. 

// Postman: 
// GET http://localhost:3000/todo 

// I want to copy that id from postman. Instead of Task.find, there's another method. We can do Task.findById(id, callback) So instead of passing in description, we can pass the id. 
// In Postman: 
// DELETE http://localhost:3000/todo 
// Body: 
// id: _the_id

// find returns the array of all the matches. find by id only returns one. 
router.delete('/', function(req, res, next){
  Task.findById({req.body.id}, function(err, task){    
    task.remove(function(err, task){
      res.send(); 
    });
  });
});

//Cade: there's an even shorter way. 
router.delete('/', function(req, res, next){
  Task.findByIdAndRemove(req.body.id, function(err, task){        
    res.send();     
  });
});

// In Postman. Post a new task. Body. form encoded. Delete successful. 

//Cade's 
// router.get('/', function(req, res, next){
//   Todo.find({}, function(err, todos){
//     res.send(todos);
//   });
// });

// router.post('/', function(req, res){
//   Todo.create(req.body, function(err, savedTodo){
//     // if (err) {
      
//     // };
//     // res.send(err || savedTodo);
//     res.status(err ? 400 : 200).send(err || savedTodo);
//   });
  
// });

// router.put('/:todoId/toggle', function(req, res){
//   Todo.findById(req.params.todoId, function(err, todo){
//     todo.isCompleted = !todo.isCompleted; 
//     todo.save(function(err, savedTodo){
//       res.send(savedTodo); 
//     });
//   });
// });

// module.exports = router; 

// In postman: ...

// See todos in mongoexpress 

// In postman: 
// Put http://localhost:300/todos/_the_id/toggle

// to delte
// In postman: 
// Delete http://localhost:3000/todos/_the_id/
// now when you do a get request, GET http://localhost:3000/todos/ it's gone

// what if try to delete something that doesn't exist? Nothing happens is not informative. 

// Now fixed so delete request shows 'item not found'

/* What if we have different routes using same model? Can't create same model twice. We need to modularize our code. Disconnect rotue handling from models. Let's turn our code into better modularized code. 

we're gonna turn schema into a real schema. schema object, more abilities. more powerful. 

In postman, fail to post because missing a required field. Model always take a name and a schema. 

age old rule of thumb, can't trust your user. Expect them trying to break it. they'll absolutely try to break your shit. YOu need to put invalidation pretty much at every point. say you have user input form at front end. if they don't give proper data, should they be able to send a request? You want validation at the front end and the backend. Want to sanitize our data. It means you want your data to be in the form you want it to be in. Make sure no sneaky nefarious user is gonna throw a wrench in your machine. 

animal shetler. we have animals and clients. inventory of animals, animals that are available to adopt. and we have clients, people who would like to adopt pets. that means we're gonna have animal model, and clients in our database as well. it's gonna be used by the staff of the animal shetler to manage these things. it's gonna be a multi part kind of thing. start by being able to add. CRUD operations on animals. we'll figure out the client side of it later on. I'll give you guys more tools to associate these things. CRUD for animals. I'm interested in a full stack, I'd like this to be a full MEAN stack. Angular front end, Mongoose express node backend. 

Here's the MVP. want to add animals to database. 
Cade on board: 
isAvailable: Boolean
kind: String "dog"
variety: String "terrier"
gender: String
Age: Number 
Name: String 
Description: String 
dateAdded: Dates

this is our animal schema. Here's the challenge. present MVP. crud for animals. an animals route on your backend. There's also gonna be an angular side, too. Have to have these actions available on Angular. 
Think about DATES?  
My advice is to take this slowly. Some people like to take the backend first. or you can stagger it, read first, read create first, then Angular. There are different ways to go. This is a solo project. Do your best to modularize your code as much as you can. Handle your backend in service or factory. Don't have to webpack by the way. It's one extra later of complication. You can later webpack it without difficulty. But plain vanilla now. 

Make a new database. have a collection for pets. 

bower install angular 


Cade: 
We want animals and clients. 
Array inside of model pets. Exist inside your database
Gonna be a very special type to pull this off. 

'use strict'; 

var Mongoose = require('mongoose');

var Schema = Mongoose.Schema; 

var clientSchema = Schema({
  name: {tyep:String, required: true}, 
  pets: [String]
});


var Client = Mongoose.model('Client', clientSchema); 

module.exports = Client; 
///
// Client.findOne({...}, function(err, client){
//   Animal.findOne({....}, function(err, pet){
//     client.pets.push(pet._id); //_id is Mongo id. 
//     pet.isAvailable = false; //just got adopted. 
//     // want to save both of them. 
//     client.save(function(err, savedClient){
//       pet.save(function(err, savedPet){
//         res.send(); 
//       });
//     });
//   });
// });
// want to get client and pet out of data base and join it up. 


// or
// in this case, order doesn't matter. 
Animal.findById(animalId, function(err, pet){
  Client.findById(clientId, function(err, client){
    client.pets.push(pet._id); //_id is Mongo id. 
    pet.isAvailable = false; //just got adopted. 
    // want to save both of them. 
    client.save(function(err, savedClient){
      pet.save(function(err, savedPet){
        res.send(); 
      });
    });
  });
});


var clientSchema = Schema({
  name: {tyep:String, required: true}, 
  pets: [{type: Mongoose.Schema.ObjectId, } ] // a very special kind of type. 
});

var clientSchema = Schema({
  name: {tyep:String, required: true}, 
  pets: [{type: Mongoose.Schema.ObjectId, ref: 'Animal'}] 
});
what's cool about this is we'll be able to do extra things with this. populating. if we just find a client out of the db, it'll have array... we can do soemthing called populate. 

Client.find({}).populate('pets').exec(function(err, clients){
  
})
feels like a mongo/ mongoose syntax. 


Client.find({}).exec(function(err, clients){
  
}); 

this will give something like: 
{
  _id: ObjectId("2134234"),
  name: 'bob', 
  pets: [
    ObjectId("eifjbj")
  ]
}


What populate will do is flate this. making actual pet object
Client.find({}).populate('pets').exec(function(err, clients){
  
})

{
  _id: ObjectId("2134234"),
  name: 'bob', 
  pets: [
    _id: ObjectId("eifjbj"), 
    name: 'fluffy', 
    gender: 'male'
  ]
}

this is best practice. we want to push actual object ids into clients. 

can also: 
Client.find({}, function(err, clients){

}).populate('pets')

Client.findById(clientId, function(err, client){

}).populate('pets')





click Animals and you see all the animals. click clients and you see how the clients. 
In clients, Mr. Bob. Click him to see how the animals he own. 
If you want him to adopt a new pet, have some button adopt with mr. Bob. The button will give you a list of animals to adopt. 
You may need a special Route just for adoption. Is it gonna be client or animal route? up to you, but I say client, makes more sense to me. How do you figure out show one is part of the challenge. 
I can give you guys an idea of how that's gonna be. 

user.show 
state params. 
$stateParams

ui-sref="user.show({id=user._id})"

$state.go('show', {id:user._id}) //this object will populate the $stateParams.id object. 


me: for frontend: python -m SimpleHTTPServer 
for backend: nodemon 
at any directory: mongod 