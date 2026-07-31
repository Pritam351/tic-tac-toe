// Arithmatic operations
// let a = 5;
// let b = 2;

// console.log("a + b = ", a + b);
// console.log("a - b = ", a - b);
// console.log("a * b = ", a * b);
// console.log("a / b = ", a / b);

// //Modulus operator
// console.log("a % b = ", a % b);

// //Exponentiation operator
// console.log("a ** b = ", a ** b); //5^2 = 25

//unary operator
//Increment, Decrement operator 
// let a = 5;
// let b = 2;

// console.log("a = ", a, " & b = ", b);
// a++; //a = 6
// b--; //b = 1
// console.log("a = ", a, " & b = ", b);

//Assignment operator
// let a = 10;
// let b = 5;
// a += 5;
// b -= 2;
// console.log("a = ", a);
// console.log("b = ", b); 

//comparison operator
// let a = 5;
// let b = 2;
 
// console.log("a == b =", a==b); //false

// let a = 5;
// let b = 5;
 
// console.log("a == b =", a==b) //true

// let a = 5;
// let b = 5;

// console.log("a != b =", a!=b) //false

// let a = 5; //number
// let b = "5"; //string > number

// console.log("a == b =", a == b) //true

// let a = 5; //number
// let b = "5"; //string !> number

// console.log("a === b =", a === b) //false

// let a = 5; 
// let b = 3;

// console.log("a >= b =", a >= b) //true


//Logical operators

// let a = 5;
// let b = 3;

// let cond1 = a > b; //true
// let cond2 = a === 5; //true

// console.log("cond1 && cond2 = ", cond1 && cond2); //true

// let a = 5;
// let b = 3;

// let cond1 = a > b; //true
// let cond2 = a === 6; //false

// console.log("cond1 || cond2 = ", cond1 || cond2);

// let a = 5;
// let b = 3;


// console.log("!(6<5) = ", !(5 < 3)); //true

// console.log("!(a===5) = ", !(a === 5)); //false

// Conditional statements

//if statement

// let mode = "blue";

// if(mode === "dark"){
//     color = "black";
// }else{
//     color = "white";
// }

//  console.log("color = ", color);

// let age = 25;
 
// if (age >= 18){
//     console.log("You are eligible to vote");
// }else{
//     console.log("You are not eligible to vote");
// }

// let num =12;

// if (num%2 === 0){
//     console.log(num, "is an even number");
// }else{
//     console.log(num, "is an odd number");
// }

// let mode = "dark";
// let color;

// if (mode === "dark") {
//     color = "black";
// }else if (mode === "blue") {
//     color = "blue";
// }else if (mode === "pink") {
//     color = "pink";
// }else{
//     color = "white";
// }

// console.log("color = ", color);

// if (mode === "dark")  {
//     console.log(mode, "mode is dark");
// }

//Ternary operators
// let age = 25;

// let result = age >= 18 ? "adult" : "minor"; //aimple if else statement

// console.log(result);

//Practice Question

let number = prompt("Enter your number: ");

console.log("Your number is: ", number);

if (number <= 100 && number >= 90) {
    console.log("Your Grade is A") 
}else if(number <=89 && number >= 70){
    console.log("Your Grade is B");
}else if(number <=69 && number >= 60){
    console.log("Your Grade is C");
}else if(number <=59 && number >= 50){
    console.log("Your Grade is D");
}else if(number <=49 && number >= 0){
    console.log("Your Grade is F");
}else{
    console.log("Your Input is Invalid");
}
