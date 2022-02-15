// let total = 0, count = 1;
// while(count <= 10){
//     console.log(count);
//     total += count;
//     console.log(total);
//     count += 1;
// } 
// console.log(total);
// let x = 2 , y = `amir`;
// console.log(typeof(x),typeof(y));
// let y = "hi amir"
// console.log("hello\"amir")
// let x = `half 100 is ${100 / 2}`;
// console.log(typeof(x));
// let x = "";
// let y = "!?";
// console.log(x || y);
// let xFalse = false;
// console.log(xFalse ? 1 : 3);
// let mood = "dark";
// console.log(mood);
// //light
// mood = "light";
// console.log(mood);
// let luighsDebt = 140;
// luighsDebt = luighsDebt - 35;
// console.log(luighsDebt);
// luighsDebt = luighsDebt - 30 ;
// console.log(luighsDebt)
// let tohi 
// console.log(tohi)
///////////////////////////////////

// console.log(Math.max(2 ,3 , 5, 23, 2, 33, 13,23))

// let num = Number(prompt('enter your num:'));
// if(!Number(isNaN(num))) {
//     console.log(`your number is the square root of ${num * num} `)
// } else {
//     console.log(`hey, why didn't you give me a number?`)
// }

// let number = Number(prompt('enter your code: '))
// if (number < 10){
//     console.log(`small`)
// } else if (number < 100){
//     console.log(`mediom`)
// } else {
//     console.log(`large`)
// }
// let num = 0;
// while (num <= 12) {
//     console.log(num);
//     num = num + 2;
// }
// let num = 1;
// let counter = 0;
// while (counter < 10) {
//     num = num * 2;
//     counter =   counter + 1;
// }
// console.log(num)

// let yourName;
// do {
//     yourName = prompt('who are you: ');

// }while (!yourName);
// console.log(yourName)

// for(let x = 51; ; x = x + 1){
//     if(x % 7 == 0 ){
//         console.log(x)
//         break;
//     }
// }                                                                

// for (let num = 2; ; num *= 2){
//     if(num % 4 == 0){
//         console.log(num);
//         break;
//     }
// }
// switch(prompt("what is the whater like?")) {
//     case "rany":
//         console.log("remember to bring an umberlla.");
//         break;
//     case "sunny":
//         console.log("go out.");
//         break;
//     case "cloudy":
//         console.log("carefull");
//         break;
//     default:
//         console.log("Unkown weather type!");
//         break;

// }

// const square = function(x){
//     return x * x;
// }
// console.log(square(12));
// const makeNoise = function(){
//     console.log("pling!");

// };
// makeNoise();

// let x = 10;
// if (true){
//     let y = 20;
//     var z = 30;
//     console.log(x + y + z)
// };


// const halve = function(n){
//     return n * 2;
// };
// let n = 10; 
// console.log(halve(100));
// console.log(n);

// const humms = function(factor){
//     const ingredient = function(amount , unit, name) {
//         let ingredientAmount = amount * factor;
//         if (ingredientAmount > 1){
//             unit += "s";
//         }
//         console.log(`${ingredientAmount} ${unit} ${name}`);
//     }
//     ingredient(1, "can" , "chickpeas");
//     ingredient(0.25 , "cup", "thini");
//     ingredient(0.25 , "cup", "lemon juice");
//     ingredient(1, "clove", "gralic");
//     ingredient(2, "tablespoon", "olive oil");
//     ingredient(0.5 ,"teaspoon" , "cumin");
// };
// console.log(humms);


// console.log("the future says: ", future())
// function future() {
//     return `you'll never have flying cars`;
// }


// const power = (base , exponent ) => {
//     let result = 1;
//     for (let count = 0 ; count < exponent; count++){
//         result += base;
//     }
//     return result;
// }
// function greet(who){
//     console.log(`hello ${who}`)
// }
// greet("harry");
// console.log("bye")

// function chicken(){
//     return egg();
// }
// function egg(){
//     return chicken();
// }
// console.log(chicken()+ true + "came first.");


// call stack


// function square (x){return x * x ;}
// console.log(square(4 ,true , "hedgehog"))

// function minus(a , b) {
//     if (b === undefined) return -a;
//         else return a-b;
// }
// console.log(minus(10))

// function  power(base , exponent = 2){
//     let result = 1;
//     for (let count = 0 ; count < exponent ; count++){
//         console.log(result)
//         result *= base;
//     }
//     return result;
// }
// // console.log(power(4));
// console.log(power(2 , 6))

// function multiplier(factor) {
//     return number => number * factor;
// }
// let twice = multiplier(2);
// console.log(twice(2));
// console.log(twice(5));

// function power (base , exponent) {
//     if (exponent == 0) {
//         return 1;
//     } else {
//         return base * power(base, exponent - 1)
//     }
// }
// console.log(power(2, 4));














































