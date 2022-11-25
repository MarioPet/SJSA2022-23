// var, let and const;

// if(5 === 5) {
//     var MyName = "Mario";
// }

// console.log(MyName);

// if(true) {
//     let MyLastName = "Petkovski";
//     const e_mail = "mario5etkovski@gmail.com";
// }

// console.log(MyLastName);
// console.log(e_mail);

// for(let i = 0;) {
//     // i
// }


// var movie = "Strangers on a train";
// var movie = "First Blood";

// let movie = "Strangers on a train";
// let movie = "Ashdajkshdjkasd";

// console.log(movie);

// const _name = "Mario";
// _name = "Other Mario";
// console.log(_name);


// const person = {
//     name: "Mario"
// }

// person.name = "Other Mario";

// console.log(person.name);

// =================================================================================

// function  SayHello() {
//     return "Hello World!";
// }

// console.log(SayHello());

// var CalculateNumbers = function() {
//     return 10 + 10;
// }

// console.log(CalculateNumbers());

// function PuppyCalculator() {
//     // return "My dog is " + 12 * 7 + " in human year";
//     return `My dog is ${12 * 7} in human year`;
// }

// console.log(   PuppyCalculator()   );

// function SayHello(name) {
//     return `Hello World, my name is ${name}`;
// }

// console.log(SayHello("Mario"));
// console.log(SayHello("Pero"));
// console.log(SayHello("Ile"));
// console.log(SayHello("Martin"));
// console.log(SayHello("Jovana"));

// var actors = [
//     {name: "Sosie Bacon", role: "Rose Cotter" ,id: 8192731983},
//     {name: "Jessie T. Usher", role: "Trevor"}
// ];


// function PrintActor(firstActor) {
//     return firstActor;
// }

// console.log(PrintActor(actors[0]));


// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

// function tellFortune(children_num, partner_name, geo_location, job_title) {
//     return `You will be a ${job_title} in ${geo_location}, and married to ${partner_name} with ${children_num} kids.`;
// }

// console.log(tellFortune(15, "Gal Gadot", "Hollywood", "Pensioner"));


// function Calculator(num1, num2) {
//     return num1 * num2;
// }

// console.log( Calculator(10, 5) );


// setTimeout(function() {
//     console.log("I will execute in two seconds");
// }, 2000);

// setTimeout(() => {
//     console.log("I will execute in five seconds");
// }, 5000);


// var SayHello = () => {
//     return "Hello World";
// }

// console.log(SayHello());


var movies = [
    {title: "Mildred Pierce", year: 1945}, 
    {title: "Odd Man Out", year: 1957}, 
    {title: "Kiss Me Deadly", year: 1960}, 
    {title: "Psycho", year: 1958}
];

// for(var i = 0; i < movies.length; i++) {
//     if(movies[i].year === 1960) {
//         return movies[i];
//     }
// }

var filteredMovies = movies.filter(movie => {
    return movie.year === 1960;
});

console.log(filteredMovies);
