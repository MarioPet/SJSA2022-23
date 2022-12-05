// function ClickEvent() {
//     alert("Hello World");
// }

// function HandleInputFieldValue(event) {
//     console.log(event);
//     console.log(event.target.value);
//     var input_value = event.target.value;
// }

// var todos = [
//     'Walk the dog',
//     'Renew drivers liscense',
//     'Read a book'
// ];

// var input_field_value;

// function TodoValue(event) {
//     input_field_value = event.target.value;
// }

// function SaveTodo() {
//     todos.push(input_field_value);
//     console.log(todos);
// }

// Classes

class Movie {
    constructor(name, year) {
        this.name = name;
        this.year = year;
    }

    get oscarsWins() {
        return this.ReturnOscarWins();
    }

    ReturnOscarWins() {
        return `${this.name} has won 2 Oscars. It was released in ${this.year}`;
    }
}

const myMovie = new Movie("Pulp Fiction", 1994);
console.log(myMovie);
console.log(myMovie.oscarsWins);


class Weather {
    constructor(dayName, temp) {
        this.dayName = dayName;
        this.temp = temp;
    }

    FormatTemperature() {
        return `The temperature on ${this.dayName} is ${(this.temp*9/5) + 32}, which was formatted from Celsius to Fahrenheit.`;
    }

    get temperature() {
        return this.FormatTemperature();
    }
}

const today = new Weather("Monday", 7);
console.log(today.temperature);
const tomorrow = new Weather("Tuesday", 5);
console.log(tomorrow.temperature);


class Calculator {
    constructor(firstNumber, secondNumber) {
        this.firstNumber = firstNumber;
        this.secondNumber = secondNumber;
    }

    SumNumbers() {
        return this.firstNumber + this.secondNumber;
    }

    get returnSum() {
        return this.SumNumbers();
    }
}

const result = new Calculator(20, 5);
console.log(result.returnSum);


var colors = [
    {id: 0, title: "red"},
    {id: 1, title: "green"},
    {id: 2, title: "blue"}
];

const colorTitles = colors.map(color => {
    return color.title;
});

console.log(colorTitles);