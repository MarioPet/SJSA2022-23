// var h2tag = document.querySelector("h2");

// setTimeout(function() {
//     h2tag.classList.add("heading");
// }, 3000);

// setTimeout(function() {
//     h2tag.classList.remove("heading");
// }, 6000);

// var image = document.querySelector("img");
// image.setAttribute("id", "cat-image");

// var myButton = document.getElementById("my-button");

// myButton.addEventListener("click", function() {
//     myButton.classList.toggle("change-style");
// });

// var anotherh2 = document.querySelector(".simple-h2");

// anotherh2.style.backgroundColor = "red";

// var h2 = document.createElement("h2");
// var value = document.createTextNode("Hello World");

// h2.appendChild(value);

// document.body.appendChild(h2);

// Web Storage

// var theme = "light";
var theme_changer_light = document.getElementById("theme-changer-light");
var theme_changer_dark = document.getElementById("theme-changer-dark");

theme_changer_light.addEventListener("click", function() {
    localStorage.setItem("theme", "light");
    let theme = localStorage.getItem("theme");
    ListenForThemeChange(theme);
});

theme_changer_dark.addEventListener("click", function() {
    localStorage.setItem("theme", "dark");
    let theme = localStorage.getItem("theme");
    ListenForThemeChange(theme);
});

const ListenForThemeChange = (theme) => {
    console.log(`On load theme is ${theme}`);
    if(theme === "dark") {
        document.body.classList.add("dark-theme");
        document.body.classList.remove("light-theme");
    } else {
        document.body.classList.add("light-theme");
        document.body.classList.remove("dark-theme");
    }
}

var theme_on_load = localStorage.getItem("theme");
ListenForThemeChange(theme_on_load);