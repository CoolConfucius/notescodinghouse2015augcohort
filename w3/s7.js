// 2015 Sep 7 Monday

// return true only if count of os and xs are even? 
// 0 is count as even. 
// Each of them equal. 2xs and 6os work. 

// function xo(string) {
// 	var xCount = 0; 
// 	var oCount = 0; 
// 	var i = 0; 
// 	while (i < string.length){
// 		if (string[i] === 'o') {
// 			oCount += 1; 
// 		};
// 		if (string[i] === 'x') {
// 			xCount += 1; 
// 		};
// 		i += 1; 
// 	}
// 	function even(int){
// 		if (int%2 === 0) {
// 			return true; 
// 		} else return false; 
// 	}
// 	return (even(xCount) && even(oCount));
// }

// console.log(xo("ohxoxoxolkdfaxk")); 
// console.log(xo("ohxoxoxolkdfak")); 
// console.log(xo("ohxoxoxlkdfaxk")); 
// console.log(xo("ohxoxoxlkdfak")); 
// //Berlin's: 
// var xs = string.match(/x/g)||[]; // || default operator. If match gives no matches, it'll return null. If we don't want null, then we declare a default. In this case, we want to return an empty array if there are no matches. 
// var os = string.match(/o/g)||[]; // without global, it'll only find the first match? 
// return (os.length ...)

// //Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false.


// // space counts as a character 
// function ABCheck(str){
// 	var array = str.split(''); 
// 	if (!array.includes('a') || !array.includes('b')) {
// 		return false; 
// 	};
// 	if (match(array, 'a', 'b') || match(array, 'b', 'a')) {
// 		return true; 
// 	} else return false; 
// }

// function match(array, start, end){
// 	var i = 0; 
// 	var j = 0; 
// 	var between = 0;
// 	while (j < array.length){
// 		if (array[j] === start) {
// 			i = j; 
// 			// between = 0; 
// 			// while (i < array.length && array[i] != end){
// 			// 	i+=1; 
// 			// 	between += 1; 
// 			// }
// 			// if (between === 3) {
// 			// 	return true; 
// 			// }			
// 			if (i+4 < array.length && array[i+4] === end) {
// 				return true; 
// 			};
// 		}
// 		j += 1; 
// 	}
// 	return false; 
// }


// // Andy's 
// function findA3B(str){
// 	// return (str.search(/a[\w]{3}b/g) >= 0);	
// 	// or 
// 	return (str.search(/a...b/g) >= 0);
// }

// // Sam's 
// if(str.match(/a.{3}b/g)){
// 	return true 
// } else return false 

// // Charles's 
// let abCheck = string => string.search(/a...b/) >= 0;




// Samer 
// House system. Test is pushed until tomorrow. 
// system. define house somehow. Every room as a length, width property. 
// list of houses. has rooms. every room has width and property. 

var houseList = []; 

var house = {
	'name': "Coding House", 
	'rooms': [[1, 2], [2, 3], [2, 3]]
};

function totalRoomsArea(house){
	var allRooms = house.rooms; 
	var roomAreas = allRooms.map(function(element, index){
		return element.reduce(function(product, element){
			return product *= element; 
		}, 1);
	});
	return roomAreas.reduce(function(sum, element){
		return sum += element; 
	}, 0); 
};

function addRoom(house, length, width){
	var newRoom = [length, width]; 
	house.rooms.push(newRoom); 
}; 


console.log(totalRoomsArea(house)); 

console.log(house); 
addRoom(house, 10, 20); 
console.log(house); 
console.log(totalRoomsArea(house)); 

function addHouse(list, house){
	list.push(house); 
}; 

houseList.push(house); 

console.log(houseList); 

var roomObject = {
	'name': 'Room name',
	'length': 10, 
	'width': 10
}; 

var roomsList = [roomObject, roomObject]; 

function simulator(house, rooms){
	var simHouse = house; 
	rooms.forEach(function(element, index){
		addRoom(simHouse, element.length, element.width); 
	});
	return totalRoomsArea(simHouse); 
}; 

console.log(simulator(house, roomsList)); 

// this adds a set of rooms to each house 
function multSimulator(houses, rooms){
	var simHouses = houses; 
	return simHouses.map(function(element){
		return simulator(element, rooms);
	});
};

console.log(multSimulator(houseList, roomsList)); 

// None of you did anything in test. You have to test your code before you even write your code. Console.log isn't testing. Test for me is more important than code. The code is a changing factor. Tests are more valuable. 
// Houses involve classes and objects. 


// Stack is last thing first out. Like dishes. Queue is first thing first out. Like lines. 

// difference between eql and equal . 
// {} === {} 
// error 
// var a = {};
// var b = {}; 
// a === b 
// this gives false . but they are deeply equal. 

// var a = {x:42};
// var b = {x:42}; 
// this gives false.  but they are deeply equal. 

// Constructor. This is very much object oriented programming. We're not writing functions to do things. We're starting from an object. properties on objects. This is OO mentality. You can model your code after real time objects. Every room has properties. 

// We learned how to test and throw errors. The reason erros happen... but you can throw an error. You can also 

// Using an object to name arguments. YOu can pass in an object as an argument. Not named arguemtns are positional arguments. Don't do that. If the function is one argument, fine. Works for name. As soon as the function needs two arguments, do not depend on position. Much cleaner to depend on object. 

// deep eql and actual equality. Difference in objects. Same goes for arrays. 

// Two major things in objects. you can define properties. 
// You can also store methods! Actions! Functions! You invoke an action with a method. 
// Big object, you can put attributes, properties, and actions. 

// good way to represent list in js is object, array, string and something new... ES6 Map and Set! all these structures are vaid. 

// in debuggin, (main.js:61:14) means line 61 and character 14 in the js file. 

// If don't want to split similar expectations, use before. 

// You can mix and match ES6 and ES5. 
// be careful to not let house twice. 

// programming with classes makes js closer to other languages. 


// When you start extending classes from other classes, you want hierachy to maintain. If you dont' invoke super, you don't get parent thing. 

// return this on method to make chaining possible! 

//to fork... Samer just removed his directory and cloned something. 

// Know pull request. 
/* Samer's terminal 
git clone https://github.com/CoolConfucius/houses-and-rooms.git
cd houses-and-rooms/
vi main.js
gst 
gd 
git add . 
gc 
git push 
history 

Me: 
to make pull request: 
fork, then clone, git init the directory, then go to pull target page, click on create pull request, navigate. 
I think you create pull request on your fork, then click on the pull requests at the left of target. 

command click to open new tabs! 

Tommorow is your 

Bonus: Student and grades
add a bunch of grades for students. And calculate student gpa
and calculate average gpa of group of students. use classes. 
features, have bunch of students, want to add them to system. for each student, want to be able to add multiple grades, want to see what the gpa is for all the students. this is a bonus, optional assignment. your assignment today is to really review. 

review everything you learned. it can be a number of different things. we're gonna test the most important ones. Mostly core javascript stuff, like this morning. 

possibly a little bit html and css. may even have a little bit of jquery. 

hooks, allows me to execute some code inside your code. 
*/












