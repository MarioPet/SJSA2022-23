// Objects

// New object constructor
// var car = new Object();

// car.model = "Fiat Lancia";
// car.year = 1994;
// car.color = "Grey"; 

// Accessing object properties
// console.log(car);
// console.log(car.model);
// console.log(car.year);

// console.log(car['model']);

// Object litteral
// var user = {
//     firstName: "Mario",
//     lastName: "Petkovski",
//     favoriteNumber: 4
// };

// console.log(user);

// Create an object called Course, that will hold: 
// CourseName, 
// CourseSpan,

// Create an object called Course teacher, that will hold:
// TeacherName,
// Teacher E-mail,

// Then output in the console:

// I'm currently studying COURSE NAME for COURSE SPAN days, and my teacher is TEACHER NAME. You can reach him at TEACHER EMAIL.


// var someObject = {
//     propertyName: "Property Value"
// };

// console.log("I'm printing the value of the object " + someObject.propertyName);

// var movie = {
//    title: "His Girl Friday",
//    releaseDate: 1940,
//    genre: "Comedy"
// };

// var { title: movieTitle, genre } = movie;

// console.log(movieTitle);
// console.log(genre);

// Create an object called actor, that will hold ACTOR FIRST NAME, ACTOR LAST NAME
// Create an object called movie, that will hold MOVIE NAME, RELEASE DATE, OSCAR WINS

// Output:
// "ACTOR FIRST NAME ACTOR LAST NAME, stars in the movie MOVIE NAME, released in RELEASE DATE, which the movie went on to win OSCAR WINS Oscars."

// ==================================================================
// ==================================================================

// Arrays

var colors = [
    "red", "green", "blue"
];

var new_colors = [
    "cyan", "magenta", "yellow", "karbon"
];


var combinedArray = colors.concat(new_colors);
// var combinedArray = [...colors, ...new_colors];
console.log(combinedArray);

// console.log(colors[0]);
// console.log(colors[1]);
// console.log(colors[2]);

// console.log(colors.length);

// var [firstColor, ,tretaBoja] = colors;

// console.log(firstColor);
// console.log(tretaBoja);


// add item to array at last position
new_colors.push("brown");
// add item to array at first position
new_colors.unshift("black");
// remove last item of array
var last_item = colors.pop(); 
// remove specific elements (with the help of index numbers)
var mutated_array = new_colors.slice(1, 4);
// remove/add specific elements (with the help of index numbers)
new_colors.splice(2, 1, "Pink");

console.log(colors);
console.log(new_colors);
console.log(last_item);
console.log(mutated_array);

