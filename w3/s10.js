/* Sept 10 2015 
Cade: we talked about middle ware, setting up routes, we gonna talk about more ways to do these things. 

gotta set up view engine. 

typically, you have your declarations on top, then universal middle wares, then routes, then server bootstrapping. 

chrome POSTMAN. allows you to make any kind of requests you want. There's also apigee. 

Middleware on specific routes. lockdown. your account info page should be lockdown. route specific middleware. 

Me: itab: if; etab: else; ietab: if else. 

express generator gives you express command. a package json came with the express generator without an npm init. the files showed on the terminal are files created by the express command. it also tells you to install some dependencies. 

express by default uses jade as its template engine. 

logger from morgan. cookie parser. the idea of cookie is information that's set by a site in your browser. your browser send your cookie by each request. 

You really do want to have a different file for every route! 

super quick run down of jade: essentially a white space sensitive language. it represents html. the purpose of jade is to be converted in html. the indentation represents parent sibling child relatoinships. the head is inside html. head and body are siblings and both are children of html. 

in Sublime, command shift p, package control: install package, find the jade syntax highlighter. 





Cade: this is not the last time we see a generator like this. There's generator for all of these things. Do you want to use this setting. You don't need to do everything from scratch all the time. We're gonna learn Jade for real.  

http://jade-lang.com/ 

http://jade-lang.com/reference/code/ 
we generated 3 li s with a for loop. 

in html, you have angle brackets, <div> </div> we can put things inside of things. To make a tag, you just give it that name. 

div is the default element. .class#id gives div. If I want something different, I'll have to specify. 

there's also html2jade.org 

extend. can change one file and all will change. 

the title in the layout is from index.js . 

Embedded javascript. EJS. http://www.embeddedjs.com/  this is really mixing html and js. Templating that allows you to inject code inside. 
Cade: I really like Jade cuz it's fast. The downside of Jade is that the spaces matter. A small space mistake can mess things up. 

And there's Handlebars. http://handlebarsjs.com/ 
Ember and Handlebars go together. Cade: to be frank, I don't know Ember and Handlebars too well. 

Know these things are available. I'm not gonna spend too much time on ejs, ember, or handlebars. 

public library is exposed to front end code. 
Something. full stack. It's got back end but also feeding out the front end. all things available to front end are in your public. Any local references you want to use in your view code is gonna be based on your public directory. If you want to add some javascript, you'd put it in public/javascript . If you want to have one javascript file that's source by all pages, you can put it in your layout. Like a bundle. 

npm is stuff that's gonna be run in node. Use require to use it. If we want to use javascript and jquery in the browser, we can't use npm. js that runs on the client side doesn't have the stuff. bower gives us front end packages that runs in the broswer. 

bower init

npm is backend. our jquery is not gonna be run in node. it's gonna be served out to client, gonna be run in their brwoser. npm is require name of module, different than bower which gets min file that's front end. 

if you guys don't have bower: 
npm install -g bower 

min.map is a list of the minified variables and what they correspond to. 






Json javascriopt object notation. it's just an object. a js object. json is a string. 

wow, test.json changes with every node main.js ! We're reading the json and reading out the javascript. 

writeFile overwrites the file. appendFile adds to the end of the file. 

Cade's Json circle: 
json -readfile-> json.parse -> obj -> modify -> json.stringify -writefile-> json 

This is your super duper data base. What I want you to do is to have a page in your app here where you can basically display the contents of some file like this. Read a file and display it on the page in a certain way. That's step one. You can hand write a json file, read it out, and display it on page. As what your data is, I don't care. It can be any sort of data, resource. Objects can be near infinitely nested. Your assignment, be able to read a json file and read it to your DOM. Or you can have a writeFile to do it for you. But you can just wrie a super simple json file. 

www in bin is what you want node on, not app.js . 

The layout is the base of our page. The thing extending layout inserts to block/ content. Can name the block anything. 
The block content in the layout, it's gonna get rendered in the other jade file that extends the layout. 

Jade iteration. The each iteration of Jade is a lot like a javascript array forEach. Inside of each are things that are iterated. 

We want to create. We want to change. The method to use is post. A new post request would be appropriate. 
*/

