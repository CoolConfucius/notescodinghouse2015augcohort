//2015 8 26 continued. 
//evernote: coolconfucius@yahoo.com pw: standard 
/*
At thie point, the prework is done. If you're not done, you can work on it. But it's pass the pre work time. 
Palindrome Map ... I did well on it! 
  Changed sublime so use 2 spaces tab indent. 
>> Edit, line, reindent is useful. 
shift command p gives you a fuzzy search in sublime. 
Say I want to reindent. Just type in reindent. 
Rule of them, when you open up new code block, everything inside it should be indented, 2 spaces. 
Everything inside should be indented. The line that has the closing bracket should match the line of the starting bracket. 
  Counter function. 
We want to create an object. 
Where there is a for loop iterating, we can use a for each. 

in the function, return the object. 
some variables. 
return {words: numWords, chars: chars, avgLength: averageWrod, spaces: spaces};

words.forEach(function(word){
  sum += word.length; 
});

var sum = words.reduce(function(acc, word){
  return acc + word.length; 
}, 0);

another way to solve this problem is regular expressions. 
We can build the object as we go. 
Code: 
function numberText(str){
  var ob = {};
  var words = str.split(" ");
  ob.words = words.length; 
  ob.chars = str.length;
  ob.spaces = words-1;
  var sum = words.reduce(function(acc, word){
      return acc + word.length; 
  }, 0);
  ob.avgLength = sum / words.length; 
  return ob; 
};
console.log(numberText("Count me in"));

Mac-3:assignments mac$ node compileNotes.js
{ words: 3, chars: 11, spaces: NaN, avgLength: 3 }

Repeated letters in words. Complicated shit. 
Check out http://pythontutor.com/ 
Go visualize 
You can watch everything work, step by step. This is a great tool if you want to figure out how your js is working. 
Bookmark this! 

Turnery. It's a special kind of conditional. 
//conditional ? returnIfTrue : returnIfFalse
var age = 20; 
var isDrinkingAge = age >= 21 ? "here's a beer" : "no booze for you";
console.log(isDrinkingAge); 
Mac-3:assignments mac$ node compileNotes.js
no booze for you

If true, the first is returned. If false, the later is returned. 

Homework, do challenge 14 again! 
var wordSelect = function(sentence){
  var record = 0; 
  var words = sentence.match(/\w+/g);
  //use reduce with a forEach nested inside. Wow! compplicated. . . . . 
}

var sentence = "I attribute my success to this: I never gave or took any excuse. –Florence Nightingale";
console.log(sentence.match(/\w+/g).join(' ')); 
//Now I see what match does! Well at least .match(/\w+/g) basically removes punctuation in a string. 
Mac-3:assignments mac$ node compileNotes.js
I attribute my success to this I never gave or took any excuse Florence Nightingale

Tonight. The calculator parser. Function will take a string. The function will look like a bunch of map operations. 
'4 + (3 - 10) / 6 * 4'
Using the proper mathematical operations, find the result and return that number. 
Can't use exec() . Exec function is off limits. It's basically execute the code you pass in. 
Remember order of operations. Go into the inner most parens. 
Hard mode: accept floating numbers, too! 
Also hard mode: exponents. If I want 4 squared, that'd be 4 ^ 2 or 4 ^ (1+1)
And no eval() ! 
Change of plans. Do Breaking the Ice on Code School first. 

2015 8 27 Thurs 
String or regex. 
*/
