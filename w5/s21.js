/* 2015 September 21
Cade: 
Mongo DB. Document oriented. It's a NOSQL database. Mongo has pointers to things called Documents. Have collections of Documents instead of tables. Documents don't even have to share the same schema. 
schema, it's the shape of your data. Documents is based in json, js object. you can make your own schema. really fast. can have same data in separate places, so when parts go down, it'll still work. 
First, some configuration. We want to install Mongo DB onto our system. Use Homebrew. Could do manual, but it's easier. Did anyone do the introduction on getting started on Mongo DB? 

http://robomongo.org/ 


In bash profile: 
MONGO_PATH=/usr/local/bin/mongo

export PATH=$MONGO_PATH:$PATH

terminal commands. 
at ~: 
sudo mkdir /data 
sudo chown $USER /data 
cd /data
now we're in /data. 
mkdir db 

at ~: 
mongod
this sets up the mongo server. traditionally runs on certain ports. communicate with systems, manage your database. to do that, server has to be running. can do mongod from any directory. Mongo is running in the background, said Cade. 

at ~: 
mongo 
to go to mongo shell 

In mongo shell
use testdb

a collection is one stack of Documents, a collection, group, of Documents. 

https://docs.mongodb.org/getting-started/shell/

db.students.insert()
this will add a Document to this collection. kind of essentially json, representation of a js object. 

db.students.insert({name: "Ben"})

db.students.find()
we have to actually give it a query. something we're looking for. 
if you don't give it a query, it'll give you all the documents, like find all. 
{ "_id" : ObjectId("5600753e1da4876752a4f819"), "name" : "Ben" }
{ "_id" : ObjectId("560075671da4876752a4f81a"), "name" : "Ben" }
Look at that id. it's like firebase. it's a complicated thing. it represents id of that document. garunteed unique. part of that is hash of data, hash of timestamp created. there's no way we can have duplicates of ids. 
db.students.find({name: 'Ben'})
this will find Ben. 
Joe: can pass in string. Cade: I'd say stick with the object notation. 

use robomongo 


https://docs.mongodb.org/getting-started/shell/query/

db.students.insert({name: "Ben1", favoriteColor: "a terrible question"})

in robomongo, change query and hit command R.  

db.students.insert({stuff: {things: 5, color: 'blue'}})

You can have objects in your documents. documents are objects. you can have nested as deep as you like. 
db.students.find({"stuff.color": "blue"})
gives: 
{ "_id" : ObjectId("560078f61da4876752a4f81d"), "stuff" : { "things" : 5, "color" : "blue" } }

we'll be using mongoose, which is the node framework for interacting with mongo. 

https://docs.mongodb.org/getting-started/shell/query/ is a great resource 

Greater Than Operator ($gt)
Query for documents whose grades array contains an embedded document with a field score greater than 30.
db.restaurants.find( { "grades.score": { $gt: 30 } } )
The result set includes only the matching documents.

make a new collection 
db.cars.insert({make:'honda',model:'civic'})

show collections

so we didn't neeed to ahve the cars collection at all. When we insert one, it's created on the fly. 

refresh testdb in robomongo to see the cars. 
db.list.insert({number:5})
I do this a bunch 
then 
db.list.find()
we have a whoel bunch of them. only id separates them. You'll get many of those as you do insert. Does give them unique object ids. 

We can sort. 
db.students.find().sort() 
if I want to sort by alphabetical: 
db.students.find().sort({name: }) 
I give it a 1 or -1 . it'll tell us if asecnding or descending order
db.students.find().sort({name: 1}) 
db.students.find().sort({name: -1}) 

-1 is reverse order of 1. 1 is alphabetical order in strings. 

Logical AND
You can specify a logical conjunction (AND) for a list of query conditions by separating the conditions with a comma in the conditions document.

db.restaurants.find( { "cuisine": "Italian", "address.zipcode": "10075" } )
The result set includes only the documents that matched all specified criteria.

Logical OR
You can specify a logical disjunction (OR) for a list of query conditions by using the $or query operator.

db.restaurants.find(
   { $or: [ { "cuisine": "Italian" }, { "address.zipcode": "10075" } ] }
)
The result set includes only the documents that match either conditions.

let's talk about updating. 
https://docs.mongodb.org/getting-started/shell/update/ 

db.students.update()
we use a set operator to update the field. 
db.students.update({name: "Ben0"}, {$set: {age: 24} })
we updated that object. 
in update syntax, first query, then the second argument is the object telling it what we're setting. what if I have a birthday? 
db.students.update({name: "Ben0"}, {$set: {age: 25} })
this changes Ben0's age to 25. 

this is CRUD 
we can create and update. now let's destroy. https://docs.mongodb.org/getting-started/shell/remove/ 

db.students.remove({"stuff.things": 5})
and the stuff thing is gone

remove is throwing away a dcoument. to throw away a property of a docuement, that's update. you essentially make the whole new ocument but iwhout the thing you don't want. 

if you wanted to nuke everything ... 
the empty object will match everything. 

db.cars.remove({})

You can't undo it. don't throw away something important. 

You'll be able to interact with mongo through node. We can have heroku start up a little mongo server. we can configure a package json and tell heroku to do that. 

You guys now know the basic commands. Go through some steps. We are managing a gorcery store. products in our database. food idtems. basically a groceries collection. to start. pretty simple documents. name and price. just inventory. but just call it grocery to limit oru creativity. we want to add cereal to our groceries collection. 

Cade writes on board: 
name: 'cereal' 
price: 5.99
------
name: 'shrimp'
price: 9

name: 'Apple'
price: 1
variety: 'red delicious'

insert those two documents into groceries collection. 
db.groceries.insert({name:'cereal', price: 5.99})
db.groceries.insert({name:'shrimp', price: 9})
db.groceries.insert({name:'Apple', price: 1, variety: 'red delicious'})

shrimp just got on sale! 

name: 'shrimp'
price: 8
onSale: true

db.groceries.update({name:'shrimp'},{$set: {price: 8, onSale: true})
db.groceries.update({name:'shrimp'},{$set: {price: 8}})
db.groceries.update({name:'shrimp'},{$set: {onSale: true}})

in one action, remove everything that costs less than 7. 
db.groceries.remove({"price": { $lt: 7 } })

name: 'banana'
price: 1 

db.groceries.insert({name:'banana', price:1})

Cade: 
db.groceries.update({name:'shrimp'}, {$set: {price: 14, onSale: false}})
db.groceries.find()

to remove cheap things: 
db.groceries.remove({price: { $lt: 7} })
this removes 2. 
db.groceries.find()
{ "_id" : ObjectId("560081ea1da4876752a4f822"), "name" : "shrimp", "price" : 14, "onSale" : false }

all in all, mongo db is pretty straight forward. eahc one is basiclally an object. can give any keys we want. can search specific ones, change them, move them without a lot of friction. 

db.groceries.update({name:'shrimp'},{name:'shrimp', price: 14})
db.groceries.find()
now it doesn't have onSale anymore. 

Andy: can unset. Cade approves. 
db.groceries.update({},{$unset: {price: 1}})
db.groceries.find()
now shrimp doesn't have a price! 

db.groceries.update({},{$unset: {price: 1}})
this line goes through all the items in the collection and takes off all the price in them. 

Cade on slack: 
https://slack-redir.net/link?url=https%3A%2F%2Fraw.githubusercontent.com%2Fmongodb%2Fdocs-assets%2Fprimer-dataset%2Fdataset.json 

big ol json. save it. 

mongoimport --db testdb --collection restaurants --drop --file ~/primer-dataset.json 

in my case, it's: 
mongoimport --db testdb --collection restaurants --drop --file ~/dataset.json 

close mongo server for the command to work to work. 

Cade: 
mongoimport --db testdb --collection restaurants --drop --file ~/primer-dataset.json --host=127.0.0.1 
add that host to the end to get around. 

connect to mongo again: 
mongo
use testdb 
db.restaurants.find() 
gives a bunch of stuff. Nicer view with robomongo. 

want to find the ones just in Brooklyn 
db.restaurants.find({borough: "Brooklyn"})
that's right. if want Bronx: 
db.restaurants.find({borough: "Bronx"})

find only want 20 avenue
street is only a key in address. so: 
db.restaurants.find({'address.street': "20 Avenue"})

address is an object. .street is basically our key. 
Me: somehow need quotes to work. 

db.restaurants.find({'grades.grade': "C"})
db.restaurants.find({'grades.grade': "D"})
each one has more than one grade. I guess there are no Ds or Fs but there are Cs. 

Joe: can use $not 
db.restaurants.find({'grades.grade': {$not: {$eq "A"}} } )

db.restaurants.find({'grades.grade': {$not: {$lt "C"}} } )

Me: somewhow I'm getting eeroes. 

if we want to remove cuisine American... 
db.restaurants.find( { "cuisine": "American " } )
American is spelled with an extra space. 
I can fix that error, can't I? 

db.restaurants.update( { "cuisine": "American " }, {$set: {cuisine:"American"}})
this only matched one. by default, it only updates one. by default, it updates a single document. to make it change all, we have to give it a third argument, a configuration object. need this to update all instead of just one. 
db.restaurants.update( { "cuisine": "American " }, {$set: {cuisine:"American"}}, {multi: true})
now that's 6000+ documents changed. 
db.restaurants.find({cuisine:"American"})
now it's fixed. 

I want you guys to list all of our restaurants but in order of cuisine alphabetically. 

db.restaurants.find().sort({cuisine: 1}) 

db.restaurants.remove({cuisine:"American"})
this removed 6000+ 

this is hard to read isn't it? 
that's too much. give me less. 
We still want to find everything. By modifying find, we can give documents to you in a given shape. do this by giving second argument. 
Charles: can also use .pretty
db.restaurants.find().sort({cuisine: 1}).pretty()

Cade: But I still want to have less keys. 
db.restaurants.find({}, {cuisine: 1}).sort({cuisine: 1})
now have just the cuisine and id
db.restaurants.find({}, {cuisine: 1, name: 1}).sort({cuisine: 1})
now have just the cuisine and name and id 
Can't get id. 
to exlucde keys: 
db.restaurants.find({}, {grades: 0}).sort({cuisine: 1}).pretty()
no grades
db.restaurants.find({}, {grades: 0, address: 0}).sort({cuisine: 1}).pretty()
no grades and no address 

0 is to exclude. 1 is to only include. by using these, we can get only the things we want. 

you can exlude the id! 
db.restaurants.find({}, {grades: 0, address: 0, _id: 0}).sort({cuisine: 1}).pretty()

TO have name without id: 
db.restaurants.find({}, {name: 1, _id: 0}).sort({cuisine: 1}).pretty()
this includes just the name and exludes the id. 

still sorting by cuisine. let's see the reverse. 
db.restaurants.find({}, {name: 1, _id: 0}).sort({cuisine: -1}).pretty()

instead of object, can use regex. Say just want the word "Thai" included in the name: 

db.restaurants.find({name: "Beet Ii"}, {name: 1, _id: 0}).sort({cuisine: -1}).pretty()
this gives just one. 

put Thai as a regex. if you put string, that's an exact match. 
db.restaurants.find({name: /Thai/}, {name: 1, _id: 0}).sort({cuisine: -1}).pretty()

if you put string, that's an exact match. 

if I want Tai Thai
db.restaurants.find({name: /Tai Thai/}, {name: 1, _id: 0}).sort({cuisine: -1}).pretty()
this also gives Tai Thai Thailand

db.restaurants.find({name: /Tai Thai$/}, {name: 1, _id: 0}).sort({cuisine: -1}).pretty()
this means end with Tai Thai

db.restaurants.find({name: /(Tai Thai)/}, {name: 1, _id: 0}).sort({cuisine: -1}).pretty()
*/
//db.restaurants.find({name: /(Tai Thai)*/}, {name: 1, _id: 0}).sort({cuisine: -1}).pretty()

/*
moving fowardd in our code, we'll have to devle into new territory
maybe I'll introduce mongoose to you guys and tonight you can explore it. the syntax is different. 

mongoose. 
Charles: object model mongo db for node. 
essentially, it's what we can use in node to talk to mongo database. makes it pretty easy, but also adds more concepts we haven't talked about. in using just the mongo shell, we don't have to make up formal schema. we've been adding documents left and right! in mongoose, it wants us to make schema. schema represents shape of our documents. what fields? what kind of data does it have? we can generate new documents based on that schema. 

we're gonna make a really simple application 

cd mongoosetest
npm init 
really just be using one package
npm i --save mongoose

http://mongoosejs.com/     */
// var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// // test is name of our data base 
// var Cat = mongoose.model('Cat', { name: String });
// // model, first argument is the name of the model. we're gonna make a bunch of cats. the second argument is an object that's essentially our Schema. Schema! We tell it what data is gonna look like. In this example, cats just have a string in it. 
// var kitty = new Cat({ name: 'Zildjian' });
// kitty.save(function (err) {
//   if (err) // ...
//   console.log('meow');
// });

// // let's start out making new collection. 
// // starting with capital is convention. model takes a name and a schema. 


// 'use strict'; 

// var Mongoose = require('mongoose')
// // requireing the mongoose module 

// Mongoose.connect('mongodb://localhost/testdb'); 
// // this is gonna connect to Mongo Database. we do want to play with data we already got. 
// var Student = Mongoose.model('Student', {name: String, grade: String}); 
// console.log("Student:", Student);
// // we use student like a js constructor 
// var Ben = new Student({name: 'Ben', grade:'A'}); 
// // typically documents are lowercase, but capitalized here cuz Ben is a dude. 
// console.log("Ben:", Ben);

// Student: function model(doc, fields, skipId) {
//     if (!(this instanceof model))
//       return new model(doc, fields, skipId);
//     Model.call(this, doc, fields, skipId);
//   }
// Ben: { name: 'Ben', grade: 'A', _id: 5600983382efdaaf187199f2 }

// question. is Ben in our database? No. it's not. Reason is because, we created a document, but we haven't saved it in our database. Ben is only in memory. To let Ben persist, we do a save. Notice our node instance isn't closed yet. It's still going. we're still connected to mongo. If I want to save Ben, I just do. 
// Ben.save()
// Now in robomongo, it's in the existing collection. Let's drop the database and start new. Running the node main.js will create the new testdb as well as the students collection. How does it know what collection name to give? It'll take the name of the model, slap an s on the end and lower case. 

// model name Goose gives collection name gooses. model named Students is considered in collection students. model named s is s collection. 

// The .save() method is asynchronis. won't take long, but will take some amount of time. 


// 'use strict'; 

// var Mongoose = require('mongoose')

// Mongoose.connect('mongodb://localhost/testdb'); 

// var Student = Mongoose.model('Student', {name: String, grade: String}); 
// console.log("Student:", Student);

// var Ben = new Student({name: 'Ben', grade:'A'}); 

// console.log("Ben:", Ben);

// Ben.save(function(err, saveDoc){
// console.log('err', err);
// console.log('saveDoc', saveDoc);
// });

// console.log('bottom of file');
// // this will show up first. 
// // __v is a version number. what the hell is with this v thing? the version number automatically increments. we've been able to save document. 

// // if we want to find all. in mongoose, the representation of... 
// Student.find(,)
// // finding is asynchronis. first argument is our query. if I want to find all, then it's an empty object. 
// Student.find({},)
// // because it's asynchronis, the second argument is a function. 
// Student.find({},function(){

// })
// // what the arguments of the callback is gonna be? 
// Student.find({},function(err, students){

// })

// Student.find({},function(err, students){
//   console.log('err', err);
//   console.log('students', students);
// });
// // syntax is hafl the battle. mongoose syntax is like the mongo syntax but works different. mongoose gives you array of the results. 
// Student.find({name: 'Ben'},function(err, students){
//   console.log('err', err);
//   console.log('students', students);
// });

// Student.find({name: 'Ben'},function(err, students){
//   console.log('err', err);
//   console.log('students', students[0]);
// });

// //find one gives the first match. 
// Student.findOne({name: 'Ben'},function(err, student){
//   console.log('err', err);
//   console.log('student', student);
// });

// usually you use findOne when you know it's the only one there. for example, if we want to find specific user name, we knkow there's only gonna be one match. just the first item in the array. so find one is the same thing. 

// Me: remember to have mongod running or else node main.js wouldn't work! 

/*
I'm gonna run express generator in new project. 
express
npm i --save mongoose
npm install 

if we want to create users, it's post to /users 

RESTful APIs
Create: POST 'localhost:3000/users'
Read: GET 'localhost:3000/users'
Update: PUT 'localhost:3000/users/:userid'
Delete: DELETE 'localhost:3000/users/:userid'
Delete: DELETE 'localhost:3000/users/3242348'
// don't want to drop the whole user database! so have a user id. That's the user we want to delete. 

where do we get information on the user? req.body , that's the payload. 
router.post('/', function(req, res){
  console.log('req.body:', req.body);
  res.send();
});

Cade uses postman app. username: cade , password: pineapples . send it, and console logs {username: 'cade', password: 'pineapples'} 
we're gonna make a users collection and store our users there. by the way, we won't be storing passwords in plain text. That's a bad practice. this is just an illustration. we want to save the user into this database. 

we are essentially making a new document out of req.body . 
gotta require Mongoose whereever you use it 
to save, need a model. let's call it user model. 
var Mongoose = require('mongoose'); 

var User = Mongoose.model('User', {
  
})

what's our scheme gonna look like? 
var User = Mongoose.model('User', {
  username: String, 
  password: String
})

convention: 
uppercase is the model, lowercase is the doument. 

Cade on board: 
input ng-model='user.username'
='user.password'
/
$scope.user
----
$http.post('.../users') 
^that's our endpoint we're posting to. The second argument is the payload. we're basically passing in that user arugment as an object. 

this.addUser=function(user){$scope.user}

integrating FE and BE, it all starts here: we decide what we want our User to be. THat's our schema, our first step. What does user look like? has two keys, both are strings. answers questions like ng-model and stuff. if you're scheching out an app, this i the first thing you do. what does your data look like? schema? 

by the way, we can define arrays in here. 
var User = Mongoose.model('User', {
  username: String, 
  password: String, 
  jobs: [String]
});

or 

use sub documents. 
var User = Mongoose.model('User', {
  username: String, 
  password: String, 
  job: {
    position: String, 
    salary: Number
  }
});

but let's keep it simple for now. 

wnat to save. 
router.post('/', function(req, res){
  
  var user = new User(req.body)

  user.save(function(err, savedUser){
    res.send()
  });  
});

we want to make this user now. let's take a look at robo. 


for tonight, your homework is to get yourself aquanted with mongoose. this is the idea behind it. part of me doesn't want just tutorials, want a task to do. maybe converting your stock tracker app to use mongo instead of just silly json file? We haven't done that many todo apps haha, maybe do that. I'll let you guys know. essentially make a set of routes that will be able to make CRUD operations. mongo. up to you if you also want to do front end. THis is a BE homework, but I'd encourage FE. A page to list off your things and add to it with angular app. But yes, primarily it's whole BE. The Mongoose documentation.  
http://mongoosejs.com/docs/guide.html  
schema object. pass that into your model. making a full schema object gives us a number of interesting abilities. including having methods on models themelves. 

http://mongoosejs.com/docs/models
this page on models is useful. basically making model, making docuemnt out of it and saving it. 
instead of creating a document and use .save, can create a model instead? 

router.post('/', function(req, res){
  
  //var user = new User(req.body)

  User.create(req.body, function(err, savedUser){
    res.send(savedUser)
  });  
});

this works!  in contrast to user.save 

Last letter of the four hoursemen, MEAN Stack, we got it. 

before dinner, see if you can make an endpoint. 

Cade on board: 
/notes    .model('Note', )
^that's our endpoint. also our model. 
actually, better than notes is todo
/todo    .model('Todo',
          description:String
          dueDate: Date
          createdAt: Date )
focus on creating and reading. Just the CR of CRUD. No UD. And give me RESTful routes for that! This is all in Express. When I say RESTful route, i mean using get or post when fit. represent what action you're gonna take. 