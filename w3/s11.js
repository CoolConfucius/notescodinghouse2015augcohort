/* 2015 Sept 11
No internet. 
Tick tack toe 
Nine divs or a table. look at your object or array asa  game state. 

Emitters. 
emtter.on(event, listener) is very similar to that in jquery. 
Node is similar. "I'm working. Stop. I'm done."
That's the concept. Things generate event. 

fs.createReadString
it'll essentially read files in chunks, giving you pieces of data. You can plug into that. The stream of data coming in... read out of file. It really is a stream of data and you can alter something in the middle of it and it comes through. You want to read something. Piping. It's like water. You can plug something in the middle of the pipe to change the stream somehow. Maybe you want to read the file and do a regex replace. As data comes through, you can alter it. 

Node, pure data. Can be massaged, turned upside down. Stream it into a writable file stream. You open up a writable file stream, a place to pour in data once you're done with it. 

nodestreams.com 
request, do pipe thing. we open up a fire hydrant and blasting data. if we want to do something with that data, we pipe it. we're data plumbers. plug that in and do something. we're writing. we cna just pipe the request... fs.createWriteStream and we tell it what file we want to write to. it's basically the end point, where the data is going. We can do more. we can pipe this to something else before we write the file. we can parse json. it tells you what module you need. 

https://www.npmjs.com/package/event-stream 

www.json-generator.com

check the terminal error. look for your file. that's the culprit. look at line number and character number, what character from the left. moral of the story, read your errors. 

SQL is Structure and Query Language. It works in tables. the idea is rows and columns. Things can be linked and brought together. 

We'll be doing Mongo DB. It's called NOSQL. It means Not Only SQL. Kind of misleading. 

TTT, you have 8 win conditions. If you're talking optimiztion, maybe we can just check if the row and column of the x or o we just placed. If tile2 is a win, we don't have to check the wins that don't involve the tile. 

Darien's solution: give each table data a U, upper and b bottom. There's also C for center. m middle r right and l left. can add class ex or oh. 

Joe has:
this.isValidMove = function (position)
this.checkVictory = function (){}
this.isDraw = function (){}

Cade: Let's go back to express. 

When run into Jade problem. Play with spaces and tabs. 


Firebase is a real time database in the Cloud. it can run in the browser, or server side, or different platforms. js, node, pure web. cvn. essentially... something. 

ref.set(); //set overwrites whatever is there. 
  ref.push //basically add a new element onto the end. 
Firebase is pretty much just a json store. Video, audio, it's not gonna work unless you do base 64 or something. It's a huge thing but can be done. 
ref.update() just changes one thing. 
ref.transaction, don't worry about it. 

To read the firebase, first it starts with an listener. ref.on

Go through the documentation and look at the methods. 

Firebase is fast to deploy, set up, and update. Real time. THat's where firebase really shines. 
MongoDB has power. It gives you a lot of other valuable thigns in parsing, searching, finding what you need. 

Let's say you have a million users in a firebase. One change, and all of them see the change. There's nothing quite like it. Twitch uses it for its chat. 

You guys want a profolio piece? Battleship. You guys have all the skills, all the tools. 
Warmup. Tic Tac Toe may be a good starter. What we want is... this is a break from the express stuff. We don't need express for this at all. Firebase works just fine in the browser. You can use npm node for firebase. Easier to put into static page and put it up into github pages. Multiplayer game, same people ahve the same url and play the game. 

jquery, html, javacript, front end code. You can do ttt where two people can connect to it and play a game. but there are things to think about. what if more than two people join? how do you make sure only one player moves on a turn? If you're hungry for more, Bttle Ship. But for tonight, want to get 2player TTT go. Make this a team project. Team up. 

Cade: not sure about next test. but probably gonna be review. 

The plan originally was to make this a team project. But maybe battleship team project is pretty rad. 

Battle ship: Each player has a 10 by 10 grid. when game start. each player place their ship in secret. each player doesn't know the other's ship. My pieces are down here. Up there are my shots. D6. If he doesn't have a ship on D6, then it's a miss. Alright. B6. It's a hit, then I put a red peg there. Objective is to sink opponents ship before yours are sunk. A ship is sunk when all of its holes are filled. When the whole ship is sunk, "you sunk my battleship". 

You get to the page. You'll keep track of who's in the game. You got two when you start. You go to it. You got "join". Okay, you're player one. Someone sees the same thing "join". she joins. she's player 2. Then they see the boards. two boards. one is the board where your pieces are. the other represents the other. You got your pieces down there. You set that in the beginning of the game. Once both players placed all their pieces, they get to attack. They click somewhere on the grid. It'll figure out if that place has a ship. If it does, then it'll show up as an explosion. Signify it's a hit. Explosion icon or something. You see it's a hit. This guy sees their ship got hit. Keeps going until ships are sunk. 

You have to keep the player separate. Same Firebase. When you join, maybe you give a you're in players array. Basically identify as player 1. Once there are two players. No one else should be able to join. This is complicated stuff. 

Two people per team. Likely we'll put you together. Lot's to consider here. Why perhaps doing the excercise of TTT is good. That's tricky, just to make it so both players see the right thing.Maybe Battle Ship tomorrow. 

From now, until dinner, study fire base. Play with it.  

*/

