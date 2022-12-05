// JSON -> Javascript Object Notation

// API -> Application Programming Interface

// let person = `{
//     "name": "Mario Petkovski",
//     "location": "Aerdrom, Skopje, Macedonia",
//     "age": 29,
//     "hobbies": ["javascript", "film", "photography"],
//     "address": {
//         "street": "Bul. Pero Perovski 1000",
//         "appartment": 14
//     },
//     "has_drivers_license": true
// }`;

// console.log(   person[0].name );

// Promises

// const promise = new Promise((resolve, reject) => {
//     let result = 5;
//     if(2 + 3 === result) {
//         resolve("Promise RESOLVED");
//     } else {
//         reject("Promise REJECTED");
//     }
// });

// promise.then(res => {
//     console.log(res);
// }).catch(err => {
//     console.log(err);
// });

// const HasVacancy = new Promise((resolve, reject) => {
//     let room_is_available = true;

//     if(room_is_available) {
//         setTimeout(() => {
//             resolve("RESOLVED");
//         }, 2000);
//     } else {
//         setTimeout(() => {
//             reject("REJECTED");
//         }, 2000);
//     }
// });


// HasVacancy.then(res => {
//     console.log(res);
// }).catch(err => {
//     alert(err);
// });


// Fetch

// fetch("https://www.boredapi.com/api/activity")
//     .then(res => {
//         console.log(res);
//         if(res.ok) {
//             return res.json();
//         } else {
//             console.error("Ne ti e okej API-to");
//         }
//     }).then(kako_sakas_moze => {
//         console.log(kako_sakas_moze);
//     }).catch(err => {
//         console.log(err);
//     });

// HOMEWORK EXPLANATION
// 1. На клик на било која рандом слика (која ја имате додадено во HTML), додадете и border, и на клик на истата (toggle) тргнете го border-от.
// Боја и големина на border по ваш избор.
// Дали ќе додадете класа на клик и ќе имате некој стил запишан во таа класа или директно во Javascript ќе менувате CSS, е исто така по ваш избор

// let photo = document.querySelector(".random-photo");

// photo.addEventListener("click", function() {
//     photo.classList.toggle("has-border");
// });

// 2. Креирајте три параграфи со рандом текст во HTML. Во Javascript дадете им иста класа (со име 'description') на сите три параграфи
// Вежбата изработете ја без користење на paragraph[0] или paragraph[1] или paragraph[итн...]

// var paragraphs = document.querySelectorAll("p");

// for(let i = 0; i < paragraphs.length; i++) {
//     paragraphs[i].classList.add("description");    
// }

// 3. Во HTML искуцајте ја сликата што е прикачена. Во Javascript земете го div-от со класа "parent" и во console испечатете го h2 елементот во него (имате пристап само до div-от со класа "parent", но не и другите два елементи)

// let parent = document.querySelector(".main-section");
// console.log({parent});
// console.log(parent.children[0].children[0]);

// 4. Имате низа: ['Argentina', 'Brazil', 'Croatia', 'France', 'Japan', 'Ecuador', 'Serbia']
// Без воопшто да пишувате HTML, креирајте unordered листа со толку li елементи колку што има во низата. Ако додадете нов string во низата, автоматски да се додаде и li елементот со тој string.
// Листата да се појави во body

// let countries = ['Argentina', 'Brazil', 'Croatia', 'France', 'Japan', 'Ecuador', 'Serbia'];

// var ul = document.createElement("ul");

// for(let i = 0; i < countries.length; i++) {
//     var li = document.createElement("li");
//     let val = document.createTextNode(countries[i]);
//     li.appendChild(val);
//     ul.appendChild(li);
// }

// document.body.appendChild(ul);

// Во HTML имате коцка, која има фиксна големина (width & height) од 400px. Веднаш под нејзе има две копчиња: зголеми и намали
// на клик на зголеми: коцката се зголемува на 800px и на refresh на страната, си останува во таа големина
// на клик на намали: коцката се враќа на 400px и на refresh на страната, си останува во таа големина

// let box = document.querySelector(".box");
// let increase = document.getElementById("increase");
// let decrease = document.getElementById("decrease");

// increase.addEventListener("click", function() {
//     localStorage.setItem("changeBox", "increase");
//     let type = localStorage.getItem("changeBox");
//     HandleBoxChange(type);
// });

// decrease.addEventListener("click", function() {
//     localStorage.setItem("changeBox", "decrease");
//     let type = localStorage.getItem("changeBox");
//     HandleBoxChange(type);
// });

// const HandleBoxChange = (type) => {
//     if(type === "increase") {
//         box.classList.add("boxed-increased");
//     } else {
//         box.classList.remove("boxed-increased");
//     }
// }

// let type = localStorage.getItem("changeBox");
// HandleBoxChange(type);

// Предизвик: Повлечете ги првите сто објекти од https://jsonplaceholder.typicode.com/photos и прикачете ги во документот (не во конзолата)

fetch("https://jsonplaceholder.typicode.com/photos")
    .then(res => {
        if(res.ok) {
            return res.json();
        } else {
            console.log("Something went wrong.");
        }
    }).then(data => {
        const photos = data.slice(0, 100);
        for(let i = 1; i < photos.length; i++) {
            var img = document.createElement("img");
            img.src = photos[i].thumbnailUrl;
            document.body.appendChild(img);
        }
    }).catch(err => {
        console.error("Network error!", err);
    });


window.onload = function() {
    // doesn't start until window has finished loading
}