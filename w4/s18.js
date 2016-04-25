/* 2015 Sept 18 
Cade
Heroku runs in the cloud. you can have that as your backend. Github pages only works with static assets, frontend stuff. but Heroku will run your server, actually run your node app. So you can but your backend on Heroku and frontend on Github pages. 
We use git to push our code up to Heroku. 

git remote add heroku https://git.heroku.com/secure-temple-4876.git

environment variable, not in source code but can use it? 

quick intro to Angular Fire. It's nuts. Magic. 
You usually don't have webpack in your frontend. 
I usually use bower
bower init 

bower i --save angular angular-ui-router angularfire

I'm doing this without webpack

start server in directory of your index.html 

I like the idea of putting all the config in the module. 

we're loading angularfire as a dependency of our app. 

put controller in state. 
When you don't have webpack, got to src every js file. 

On array string argument: We're not gonna minify. I just put it in there for good practice in case we do minify. 

$add() is part of the array thing. part of angularfire api. 

$id is a firebase id that matches what's in the firebase. If I wnat to see the messages and not the whole object, there's dot notatoin and also an angular way to do it. 

Deleting stuff in firebase also deletes the stuff in local host. Three way data binding, woah! 

my ref is pointing to messages inside. I'm gonna be wrapping it into this firebase array thing. THat's gonna allow us to do angular binding array. Now that $scope.messages is bound to that ref. It's like automatically listening to any changes. It's gonna be a representation of that array. Not gonan be plain objects. firebase is also gonna add the key, unique firebase id to that. it comes with the array because it's a firebase object thing. 

don't use regular array methods with firebase array because firebase array isn't a regular array. instead, use $add and $save. 
ng-change, triggered when there's a change. 
<input type="text" ng-model='messageObj.text' ng-change="messages.$save(messageObj)">
save the change as soon as it changes. it has an id so firebase knows what that is. it's gonna update. 

Woah! It really does change! changes in html code, saved and local hosted, changes what's in the firebase. If I refresh, it's still there. Persistent data. Pretty cool. This is persistent for all the users that are looking at the same page. 

console.log("first message:", $scope.messages[0]);
doesn't give first message. It's undefined. 
We need $loaded. 

$scope.messages.$loaded()
.then(function(fbArray){
  console.log('after loaded:', fbArray);
});
This console logs our array. 

$scope.messages.$loaded()
  .then(function(fbArray){
    console.log('after loaded:', fbArray);    
    console.log("first message:", fbArray[0].text);
  });
This works. 

Samer: 
This is a project on Github. Can you deploy it to Heroku? Clone it, assign the remote to a Heroku app, then push it up. These are the major steps. When you clone, you have github as the remote. If you want to share, you push to github. If you want to deploy, you use Heroku. 

What's an alternative to Heroku? Amazon webservices. Shared hosting. Virtual private servers. what? ... Basically renting a room in a house? You just get a very small section of the server for you. Other people are using the rest of the server. Cheap, but don't use it. In virtualization, you also get section of server but home environment? Isolated. That business should die. 
We do VPS. What is advantage of using Heroku or Digital ocean. If you're using Heroku, you have easier scaling path. You just add nodes. 
With VPS, you have complete control of what you do. Your own server, do what you want. When you try to customize things, Heroku becmoes a problem. But VPS is a lot more flexible. Do you want ease or flexible? 

Samer: not a fan of two way data binding. 3 way is just woah. 2 way data binding is problem fpr a lot of projects. Don't keep track. There's lots of errors going on and dependencies. So it's cool for small projects. Not so much for big ones. If 2 way is a problem, imagine 3 way. it's bigger. 

Firebase is just one option we teach if you want to prototype. What you should be doing is backend databases, something you can control with your node. Scheme, api that hs a lot of logic on how to expose the data. Database is onlnie. When you have your own api. 

SQL is not a database. Mongo is. Two main chategories. SQL. There's SQL databases: Oracle, and there are no SQL databases: Mongo, Firebase
Structured Query Language 
Relational databases, all about the relations. NO SQL is all about objects, not relations. Object based databases. Other category is document based databases, but to me, a document is an object. A JSON document is an object. 
There are huge advantages and disadvantages to either side. Pick and choose. 
NOSQL advantages. huge: compatable with javascript. Objected based. give me object, I"ll save it. even if it's nested. huge advantage. say you recieve tweet. save it. don't need logic, don't need schema. Document data bases are faster because they have less restrictions, less reliability. They compromise the contrain for fastness which is needed sometime. 
Disadvantages: transactions and rollback. You want ot be fast or reliable? Can't be both. NOSequal is fast. 

Samer on the board: 
NOSQL is a document based. Say you want to build a relation. You come here and association. Two ways of doing relation. VS. SQL is a strongly related. Basically you have tables, not documents. Every tables have rows. It's not an object. It's a table. Rows and columns. Columns are the views. The rows are multiple things you can store in the table. If you want a relation, you can connect tables. One to many. Many to one. 

Say we want to store information about blog posts. What kind of elements do we have? Say you have multiple blogs, multiple posts. For every post, you have a list of comments. Represent with NOSQL: you have a post document. Every document will just be a json object. will have id. Title. Just an object. id, title. And want to represent the comment relation to the post. Comments are an array of objects. Author and body for that comment. A nested javascipt object. With SQL, that's not gonna work. You'll have a post table, fields: one for the id, one for the title, one for the body, and more for the date and stuff. You'll have the comments and in there, an id, an author, body, and dates whatever. You store every piece of information in a separate table. One comment belongs to a post. One post has many comments. You add a post id, just another field. One to many relation. Why would we do this way? An employee can belong to multiple departments. Have a department id. Duplicate employee? Have another table that represent relationship. Many to many relationships. 
Other thing sucks at many to many relationships. Think about when you have a really popular blog. Having just documents flat in the system is hard to manage. While in SQL, you to sort in multiple. The structure is extracted otu of the relation. Easier to partition and scale. The reliability of the data. It's valid in other places... easier to manage indivual objects. 
Interview: Bottom line: Both! Both of them has advantages. If I have transactions of data, I would use SQL. I would use NOSQL to cache stuff. Say you ahve a bnak ssystem. Every bank, account, balance. Log in. This is account, this is balance. But you wdon't want to calculate transcations all the time.  Storing that balance somewhere is dpulication of data. For the system to be fast, you need to read direction. Fast works for NOSQL. I would store relatoins in SQL, but store balance? in in NOSQL for fast transactions. Drop the balance and recaulculation. If you're prototyping, NOsqual is easier. if you need complex queries, sql is the way to go. 
graph is not your database, is what you read. ... really after all, just fancy files. your data is just a file somewhere in a file in a filesystem. 
In sql, you have structured querey language that's delcarative. you don't tell it what to do, it just gives you. ?. vs a little more imperative in nosql. go fetch doc x, and give me the children, and then this. more like step based fetching data. you would use the right tools for the right job. 

say you want to store log information. you want ot store these log info instead of... say you have express server. you have log entry. want to store log entry in data base. sql or nosqal. multipe, all spitting logs. user x access endpoint y. the logs are so fast, you need something fast. i would just put it in nosql. 
sql for transactions. nosqal for anything that requires fast operation. 
last systems I built have set of rules. i need to monitor fb and twitter, store tweets an dposts, anylize them usigng set of rules. i use nosql to store the tweets. do these tweets violate cerain rules? i stoer rules in sql data. rules need to be reliable. ... fast data makes sense. i have a program somehwere I use both. in a node. read both. i read the tweets from a nosql and read the rules form a sql an ddo thing in node. works perfectly. it's not one way or the other. SecureMySocial. If you tweet xyz murder, you're not supposed to, so you get caught right away. "are you trying to get hired?"

node, python, there's no right answer. node actually sucks at some situations. node is good for dspplying stuff on browser. the thing that node restricts you is evented... but sometimes you need the line to wait on others. calculating warnings, and warnings in school system. to calculate warning, you have to read all the grades, calc average, count how many, if ave fell below, take that number and see if threshold for warning. every step depends on stpe before it. node is bad for this. callback hells. you'd do this with c or ruby, insdie the database. you can use jaavscript, just not node. when operation is close to data, it's good idea to program inside database, not gonna do a trip to fetch. vs database, give me average. if you want to calc average in js, you have to loop all? ..... while if your databaes is abel to answer ave question, just get it. 

the line between sql and nosql is blurring. that's why you just need to know the features. ppostgress supports json type which is nosqal. working really hard to make it realtional. 

try to push operations closer to data into inside the database. but there is a compormise there. you have logic where it's hard to maintain. can't maintain a history of code. git doesn't work with database yet. distribute your logic, and that is not good in maintainability. you are compromising. when you need boost in poerformance, you drop maintainability. ruby is very readable, but not the best performining language on the planet. what do you need? performance? or something others can understand? Do you want them to understand quickly and contribute? or wnat high performance? depends on your needs. When you have alot of money, you can afford changing. twitter switched to scala. but having them on rails for years lets them be dynamic. rails is a popular framework. you can hire someone and the next day they' can be productive. if you have custom framework, you have to train them longer. but costum is good eventually for business. 

acid vs cap. 
sql is acid. atomicity consistency isoloation and durability. all or nothing. you can easily have transaction in sql db. if you wn to mve,.. withdraw account a to account b. acid is good for this. you should transaction and roll back if something bad happened. consistency. contrains. you can't make commont to post that doesn't exist. with consistency, you can't do that. db will throw an error. there's a consistency issue. say your'e sotring emails. with consistnency, you can validate email on teh db itself. if invalid email you can reject. email should to certain set of characters. there's also consistency of null data. these validations should also propogate to web server. that level of validation is easy to skip, not the one to trust. your app server should also do the same validation. your app server should ugly error. your user shouldn't see that cuz web server has validation. but you can't trust user to go thorugh normal channels. ... source of truth... 3rd level that'd db iterlsf, won't accept. isolation. durability: data is not volatile. say it crashed midstoring. the data will still be there. old ones would just crash and lose the operations. 

cap
consistency, availability, and p. avialability is is system able to take response. if you have 100% occupied, you're not avaliab.e. partitionsing is whatyou need to make system avaliable all the time. if your tbalbe grow s tto milliosn records... you shouldn't split. every table store thoughsand, then mentalityh of lots of duplication. what you do instead, you sextract to db itself. parrtiiton to mulitple harddrive and servers. datab will figure out. querity single particiaion will be better than billion table. partitioning is a problem good to ahve. some db offer scalable partitioning. this is advanced db stuff. db admin is boring job. I was one. they're highly paid, though. 

next week is mostly Mongo. but it's not the answer all the time. sql is harder to learn than nosql. we're gonna learn mostly nosql. 

graphQL is new. it's higher level, even more declarative than delcarative. databases that respond natively. 

nosql is getting more popular in the startup and prototype. as a frontend enginerr, you should know both. 

only thing missing in nosql is joining. 

.... tweet .... 

Samer command line: 
serve 

node server. 
express. don't need to write config. fancy stuff, express gives you. don't reinvent the wheel. that's what's important to a hackathon. you express generate. 

PORT=8000 npm start 
our frontend is on 3000 and backend on 8000 


Samer: to work for 100 dollor, you need to know half the stuff that I know, at least. There's not enough fast. You need to do everything I ask you to do. 

Samer: git stash . pause stash, start from clean state, then go back to code you're working on. Same thing in testing. 

git pop applies and removes from stash. 








// remember banking! 
I feel like I'm discouraged, that people would rather want me to not learn, not be here. I feel shot down when I try to participate. I like participating. Doesn't help when I feel victimized by another cohort. I want to feel included, that I'm actually part of the cohort and not feel like the cohort is just for certain people. I feel like it'd be a better use of my time to just step out. I feel insulted, like it's my fault. 


I didn'g sign up for this just to waste my time. Actually, dln't say that. 




can either use nodemon or forever. 
