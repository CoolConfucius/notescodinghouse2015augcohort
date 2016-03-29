// /* 2015 Sept 12 
// Cade: Developers work as a team. The anti social stereotype has to die. 

// Firebase is asynchronis. 

// forEach
// Example: like a super simple kind of forEach. where we get a snapShot... it's like a forEach but just gives you the first argument. 

// childSnapshot.key() gives you the key of it. 

// Thing about firebase, I don't want you to copy my string and follow. I want you to listen. 

// child_changed is just going to be the one that's modified. 

// one child of our firebase is current player, eighter p1 or p2 
// when game starts, player is assigned p1 or p2 

// join button should be there only if right condition. 


// Samer: 
// What is an API? Application Programming Interface. 
// www.redit.com... get json reddit. Add .xml on any reddit page. 

// swapi.co
 
// store tweets in firebase. 

// sendgrid, mailgun, 


// */
// var readline = require('readline');
// var exec = require('child_process').exec;
// var child; 
// // var [,, email, subject] = process.argv; 

// let [,, email, ...subjectWords] = process.argv; 
// // console.log(email, subject.join(''));
// let subject = subjectWords.join(' ');

// // var email = process.argv[2];
// // var subject = process.argv[3]; 

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });

// // rl.question("What do you think of node.js?", function(answer){
// //   // you type in your answer in the terminal. 
// //   console.log("Thank you for your valueable feedback:", answer);
// //   rl.close(); 
// // });

// // child = exec(`
// //   curl -s --user 'api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0' \
// //   https://api.mailgun.net/v3/samples.mailgun.org/messages \
// //   -F from='Excited User <excited@samples.mailgun.org>' \
// //   -F to='${email}' \
// //   -F subject='${subject}' \
// //   -F text='Testing some Mailgun awesomeness!'
// //   `,
// //   function(error, stdout, stderr){
// //     console.log('stdout: ' + stdout);
// //     console.log('stderr: ' + stderr);
// //     if (error !== null){
// //       console.log('exec error: ' + error);
// //     }
// //   }
// // ); 
// //enter the command: node s12.js coolconfucius@yahoo.com hello 
// // this will send coolconfucius an email with subject hello. 

// rl.question("", function(body){
//   // sendEmail({to: email, subject, body}, () => {
//   // //these two are equivalent. 
//   // // sendEmail({to: email, subject: subject, body: body}); 
//   // rl.close(); // don't want to close this until send email.   
//   // }); 
//   sendEmail({to: email, subject, body})
//   // .then(() => { rl.cloes(); });
//   // this is just an object 
//   .then(() => { console.log("Email sent"); 
//     process.exit(); 
//   })
//   .catch(() => {
//     console.log("Email was NOT sent, try again"); 
//     process.exit(); 
//   });
// });
// // this is the code that's gonna send an email. 

// // let sendEmail = ({to, subject, body}) => {
// //   // console.log(to, subject, body); //destruct
// //   let promise = new Promise((resolve, reject) => {

// //     setTimeout( () => { resolve(); }, 3000 );
// //   });
// //   return promise;
// // };

// let sendEmail = ({to, subject, body}) => {
//   let promise = new Promise((resolve, reject) => {
//     child = exec(`
//       curl -s --user 'api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0' \
//       https://api.mailgun.net/v3/samples.mailgun.org/messages \
//       -F from='Excited User <excited@samples.mailgun.org>' \
//       -F to='${email}' \
//       -F subject='${subject}' \
//       -F text='${body}'
//       `,
//       function(error, stdout, stderr){    
//         if (error !== null){
//          reject();
//        } else {
//         resolve(); 
//       }
//     }); 
//   });
//   return promise;
// };




// // You don't push API into git! 
// // export MG_API_KEY=api:key-3ax6xnjp29jd6fds4gc373sgvjxteol0

// crontab 
// * * * * * 
// minutes, hours, days of the week...
// first start is every minute. 
// 35 * * * * means, when clock turns 35, it'll be executed once. 
// the second star is hour 
// 35 16 * * * echo `date` >> ~/cront.test 

// The command tail reads the last ten lines of the file. 

// I'm feeling too suicidal to concentrate 
/*
npm install --save twitter 

*/


var Twitter = require('twitter');

var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});

client.get('search/tweets', { q: 'codinghouse OR codingcamp' }, function(error, result, response){
  if (!error) {
    console.log(result.statuses.map(tweet => `${tweet.user.screen_name}: ${tweet.text}`)); 
  }
})