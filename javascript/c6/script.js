// document.write("Hello World");

// var heading = document.getElementById("heading");
// console.log({heading});

// heading.innerHTML = "Mario Petkovski";

// var image = document.getElementsByClassName("image");
// console.log(image);
// image[0].src = "https://www.fillmurray.com/300/200"; 

// var headings = document.getElementsByClassName("h2-tag");
// // console.log(headings);

// for(let i = 0; i < headings.length; i++) {
//     headings[i].innerHTML = `This is h2 #${i+1}`;
// }

// var paragraph = document.getElementsByTagName("p");
// console.log(paragraph);

// querySelector (first element with that target)
// querySelectorAll (every element with that target)
// var paragraph = document.querySelector(".h2-tag");
// var paragraph = document.querySelectorAll(".imeto-na-klasata");

// var paragraph = document.querySelectorAll("p");
// console.log(paragraph);

var button = document.querySelector("button");
var result = document.getElementById("result");

button.addEventListener("click", function() {
    result.innerHTML = new Date();
});




// var button = document.getElementsByTagName("button");
// var drug_button = document.getElementsByClassName("ime-na-button-klasa");

// var image = document.getElementsByClassName("image");

// image[0].src = "./photo.jpg";

// var test = document.querySelectorAll(".image");

// test.src = "ashdjaksd.png";