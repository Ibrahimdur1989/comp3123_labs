// Exercise 1: Capitalize first letter of each word
function capitalizeWords(str){
    return str
        .split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
}
// Testing 
console.log("\n=== Exercise 1 ===")
console.log(capitalizeWords("live your life the way you love"));

// Exercise 2: Find the largest number
function max(a, b, c){
    return Math.max(a, b, c);
}
// Testing 
console.log("\n=== Exercise 2 ===")
console.log(max(1, 0, 1));
console.log(max(0, -10, -20));
console.log(max(1000, 510, 440));

// Exercise 3: Move last 3 characters to the start
function right(str){
    if (str.length < 3) return str;
    return str.slice(-3) + str.slice(0, str.length - 3);
}
// Testing 
console.log("\n=== Exercise 3 ===")
console.log(right("Python"));
console.log(right("JavaScript"));
console.log(right("Hi"));