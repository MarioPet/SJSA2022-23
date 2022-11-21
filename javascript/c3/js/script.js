// var email;
// var _name = "Mario";

// _name = "Pero";

// Boolean -- can be either true or false
console.log(5 == 6);
// Checks value only
console.log(5 == "5");
// Checks value AND data type
console.log(5 === "5");

// ===============================================================
// if statement

if(5 == 5) {
    console.log("Five is equal to five.");
}

if(5 > 2) {
    console.log("Five is larger than two.");
}

// if else if

var today = "Monday";

if(today === "Friday") {
    console.log("Bingo. Today is Friday.");
} else if(today === "Monday") {
    console.log("Yup. Today is Monday.");
} else {
    console.log("Unknown day. Try again later.");
};

if(5 === 5 || 5 < 2) {
    console.log("MADE WIDTH ||: I will run this code");
};

if(5 === 5 && 5 < 2) {
    console.log("MADE WITH &&: I will run this code");
};

// Make a variable called height and store a number of your height
// Make a variable called limit and store a number of value: 1.40
// Make an if statement that checks whether your height is larger or smaller than the limit height and output the following in the console:

// if higher or equal -> You are tall enough to ride the roller coaster.
// if smaller -> You are NOT tall enough to ride the roller coaster. Go home.

var height = 1.83;
var limit = 1.40;

if(height >= limit) {
    console.log("You are tall enough to ride the roller coaster.");
} else {
    console.log("You are NOT tall enough to ride the roller coaster. Go home.");
}

// =====================================================================
// Make an Object called Hotel that holds three properties: 
// Name: string, RoomNumber: number, HasVacancy: boolean.
// Output in the console (based on the slobodno_li_e property):
// Room number ROOM NUMBER is free in HOTEL NAME
// Room number ROOM NUMBER is NOT free in HOTEL NAME

var hotel = {
    name: "Budapest Hotel",
    room_number: 237,
    slobodno_li_e: false
};

if(hotel.slobodno_li_e) {
    console.log("Room number " + hotel.room_number + " is free in " + hotel.name);
} else {
    console.log("Room number " + hotel.room_number + " is NOT free in " + hotel.name);
};

// =====================================================================

// Switch

var _today = "Monday";

switch(_today) {
    case "Monday" :
        console.log("Today is Monday");
    break;
    case "Tuesday" :
        console.log("Today is Tuesday");
    break;
    default: console.log("Unknown day");
};

var a = 250;
var b = 250;

if(a > b) {
    console.log(a + " is larger than " + b);
} else if(a < b) {
    console.log(b + " is larger than " + a);
} else {
    console.log(a + " and " + b + " are equal");
}

var grade = 15;

if(grade >= 0 && grade <= 20) {
    console.log("Your grade is NEDOVOLEN 1");
} else if(grade >= 21 && grade <= 40) {
    console.log("Your grade is DOVOLEN 2");
} else if(grade >= 41 && grade <= 60) {
    console.log("Your grade is DOBAR 3");
} else if(grade >= 61 && grade <= 80) {
    console.log("Your grade is MNOGU DOBAR 4");
} else if(grade >= 81 && grade <= 100) {
    console.log("Your grade is ODLICEN 5");
} else {
    console.error("Grade invalid");
}