// Ebrahim Al-Serri (101085527)
// COMP 3123 - Full Stack Development I
// Lab 2 - ES6 Practice Exercises 


console.log("======================================================================");


// Exercise 1: Using ES6 syntax.

const gretter = (myArray, counter)=>{
    const greetText = "Hello";

    for(const name of myArray){
        console.log(`${greetText} ${name}`);
    }
};

// Testing
console.log("\n=== Exercise 1 ===");
gretter(["Randy Savage", "Ric Flair", "Hulk Hogan"], 3);


// Exercise 2: function will capitaliz the first letter of a string.

const capitaliz = (str = "") =>{
    const [first, ...rest] = str;

    return first.toUpperCase() + rest.join("").toLowerCase();
};

// Testing
console.log("\n=== Exercise 2 ===");
console.log(capitaliz("fooBar"));
console.log(capitaliz("nodeJs"));


// Exercise 3: capitalize the first letter of each color.

const colors = ['red', 'green', 'blue'];
const capitalizedColors = colors.map(color => capitaliz(color));

// Testing
console.log("\n=== Exercise 3 ===");
console.log(capitalizedColors);


// Exercise 4: filter all values that are less than twenty

const values =[1, 60, 34, 30, 20, 5];
const filterLessThan20 = values.filter(num => num < 20);

// Testing
console.log("\n=== Exercise 4 ===");
console.log(filterLessThan20);


// Exercise 5: calculate the sum and product of the array.

const array = [1, 2, 3, 4];

const calculateSum = array.reduce((acc, num) => acc + num, 0);
const calculateProduct = array.reduceRight((acc, num) => acc * num, 1);

// Testing
console.log("\n=== Exercise 5 ===");
console.log(calculateSum);
console.log(calculateProduct);

// Exercise 6: 

class Car{
    constructor(model, year){
        this.model = model;
        this.year = year;
    }

    details(){
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car{
    constructor(model, year, balance){
        super(model, year);
        this.balance = balance;
    }

    info(){
        return `${this.model} has a balance of $${this.balance.toFixed(2)}`;
    }
}

// Testing
console.log("\n=== Exercise 6 ===");
const car2 = new Car("Pontiac Firebird", 1976);
console.log(car2.details());

const sedan = new Sedan("Volvo SD", 2018, 30000);
console.log(sedan.info());


console.log("\n======================================================================");