//2015 9 24
// Cade: Bowling. You have 10 frames. Each frame, you've got 2 rows, try to knock down 10 pins. 

/* 
1 2  3  4 5  6  7 8 9 10  
3 7  5  2 10 7  6
6 3  5  7    3
9 15 12 9 20 16

this one is worth nine 
10 is a strike. it's worth that many points plus the next two rows. 
challenge is to take input that is array of the rows and will calculate the score. 
say if I row nothing but strikes. That's a perfect three hundred and it's only 12 rolls there. But if we don't roll strikes there, there's only nine? We're always gonna give you 21 items in the array. if you get a strike, it'll be a 10. 
[10, 7,3, 6,3]
20
10, you need to add the next number and the number after that. 7 and 3, that means you'll have to add that one that one and the one after that. 
if you knock 10 in 10th, you get a bonus rowl. In the 10th frame, it's possible to rowl three strikes. you always get two rowls even if you strike? 
strikes 30. 
*/

// function bowlScore (array) {
//   var totalFrames = 10; 
//   var currentFrame = 1; 
//   var i = 0; 
//   var scores = [];
//   var first = 0; 
//   var second = 0; 
//   var status = 'first'; 
//   var spare = false; 
//   var strike = false; 
//   while(i <= array.length){
//     strike = checkStrike(array, i); 
//     if (strike) {      
//       pushReset(scores, 10 + array[i+1], array[i+2], 0); 
//       if (currentFrame === totalFrames) {
//         return sum(scores); 
//       } 
//       currentFrame++; 
//     } else {
//       if (status === 'first') {
//         if (!spare) {
//           first = array[i];        
//         } else {
//           pushReset(scores, first, second, array[i]);        
//           if (currentFrame > totalFrames) { 
//             status = 'gameover'; 
//             return sum(scores); 
//           }
//         }
//         status = 'second';
//       } else if(status === 'second'){
//         second = array[i];
//         if (first + second === 10) {
//           spare = true;  
//         } else {
//           spare = false; 
//           pushReset(scores, first, second, 0);          
//         }
//       status = 'first'; 
//       currentFrame++; 
//     }

//   }

//   i++; 
// }
// return sum(scores); 
// };

// function checkStrike(array, i){
//   return (array[i] === 10) 
// };

// function pushReset (scores, first, second, spare) {
//   scores.push(first + second + spare);
//   first = spare; 
//   second = 0;
// }; 

// function sum(array){
//   return array.reduce(function(a, b) {
//   return a + b;} );
// }; 


// console.log(bowlScore([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]) );
// console.log(bowlScore([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]) );
// console.log(bowlScore([9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9,1, 9]) );
// console.log(bowlScore([10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10] ));
// console.log(bowlScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10,1,0]) );
// console.log(bowlScore([0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 0,0, 10, 1,0]) );



//Cade's 

// var bowlScore = function(rolls) {
//   var frames = [];
//   while(frames.length < 10){
//     var frame = rolls[0] + rolls[1];
//     if(frame >= 10){
//       frame += rolls[2];
//     }
//     frames.push(frame);
//     if (rolls[0] !== 10) {
//       rolls.shift();
//     }
//     rolls.shift();
//   }
//   return frames.reduce((a,b)=>a+b);  
// }

// Joe's 
// function bowlScore(input){
//   let pair = []; 
//   let sum = 0; 
//   let pairList = [];
//   input.map((cur, i, arr)=> {
//     sum += cur;
//     pair.push(cur); 
//     if((sum === 10 || pair.length == 2) && pairList.length < 10) {
//       if (...) {}; .... 
//     }
//   })
// }


// Cade: Passport 
/* it's middle ware that can be used to authenticate a route. 
local authentication, checking against our own logs. 
Passport is a middleware solution that authenticate express. 
https://scotch.io/tutorials/easy-node-authentication-setup-and-local

bring in require passport as well as require session. 

app.use(session({ secret: 'ilovescotchscotchyscotchscotch' })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session
this is configuring our app to use passport

What's this?: 
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport

it's: 
// app/routes.js
module.exports = function(app, passport) {

    // =====================================
    // HOME PAGE (with login links) ========
    // =====================================
    app.get('/', function(req, res) {
        res.render('index.ejs'); // load the index.ejs file
    });

    // =====================================
    // LOGIN ===============================
    // =====================================
    // show the login form
    app.get('/login', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('login.ejs', { message: req.flash('loginMessage') }); 
    });

    // process the login form
    // app.post('/login', do all our passport stuff here);

    // =====================================
    // SIGNUP ==============================
    // =====================================
    // show the signup form
    app.get('/signup', function(req, res) {

        // render the page and pass in any flash data if it exists
        res.render('signup.ejs', { message: req.flash('signupMessage') });
    });

    // process the signup form
    // app.post('/signup', do all our passport stuff here);

    // =====================================
    // PROFILE SECTION =====================
    // =====================================
    // we will want this protected so you have to be logged in to visit
    // we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
        res.render('profile.ejs', {
            user : req.user // get the user out of session and pass to template
        });
    });

    // =====================================
    // LOGOUT ==============================
    // =====================================
    app.get('/logout', function(req, res) {
        req.logout();
        res.redirect('/');
    });
};

// route middleware to make sure a user is logged in
function isLoggedIn(req, res, next) {

    // if user is authenticated in the session, carry on 
    if (req.isAuthenticated())
        return next();

    // if they aren't redirect them to the home page
    res.redirect('/');
}


Let's make a protocted route. Not all rotues should be protected. Example, the login route. 

// having a req, res, next in args is the signature of middleware! 
so the isLoggedIn function is a middleware. any function that has that signature is a middleware

next(); // this just triggers the next piece of middle ware. if we don't call that, it's the end of the line. 

// fuck, I missed stuff. something about hash and passwords 
Cade: we use hash to add a bit of security, to make our hash unique. that's the diea. 



// on logic. If say no user found, then the email is correct. If say wrong password, then the email is correct. Cade said this is a security risk. Let's fix that. 
If bad guy know the email, then they just need the password. 

// lost concentration! 

//Cade: 
req.body = {
  email: 'aaaaaa.ccc',
  password: 'aaa'
}; 

Bank app: 
Where you can make an account, and you have a balance. You can make a deposit. Can go up and down. You can see that when you log in. 
What's the MVP. 
login/ logout parenthesis authentication exclamation 
Passport 
Mongoose. 
account page: Balance. Transaction log. 
Can deposit and withdraw. 
date  amnt. description
      +$40
organized by most recent to further the past. 

Part of the user model can be their balance. 
Transaction will be its own model. 

Needs to be able to track each user separately. 


mkdir bank 
cd bank 
mkdir models 
cd models 
touch transation.js user.js 

in user.js 
*/
var mongoose = require('mongoose'); 

var userSchema = mongoose.Schema({
  email: String,
  password: String, 
  balance: Number, 

  // this way is likely simpler cuz then you just have one document. Transaction is only connected to one user so no sense to have its own model unless you have a bank manager account that sees all the transactions. 
  transations: [{
    amount: Number, 
    description: String, 
    date: Date
  }]

  // other way: 
  transations: [{type: mongoose.Schema.ObjectId, ref: 'Transaction' }]
  // which would require transaction model/schema 
}); 


