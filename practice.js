//Practice QS with AI
//1 Ask the user to enter their first name.

// let firstName = prompt("Enter Your First name : ");

// username = `#${firstName}${firstName.length}`;

// console.log(username);

//2 Input age.

// let age = prompt("Enter Your age : ");

// if(age > 0 && age <= 12){
//     output="You are child";
// }else if(age >= 13 && age <= 19){
//     output="You are child";
// }else if(age >= 20 && age <= 59){
//     output="You are now Adult";
// }else if(age >= 60){
//     output="You are a Senior";
// }else{
//     output="You try to Overcome";
// }

// console.log(output);

//3 Print odd numbers from 1 to 100.

// for(let i=1; i <=100; i++){
//     if(i % 2 !== 0){
//         console.log(i);
//     }
// }

//4 Print numbers divisible by both 3 and 7.

// for(let i=1; i <=100; i++){
//     if(i % 7 === 0 && i % 3 ===0){
//         console.log(i);
//     }
// }

//4 Guess the alphabet

// let user = prompt ("Enter Correct Alphabet");

// let right = "B";

// for ( ; right !== user; ){
//     user = prompt("REnter Correct Alphabet : ", right)
//     // break;
// }
// console.log("You Guess the Correct Alphabet")

//5 count charracter

// let str = "Hello";

// let size = 0;

// for (let i of str){
//     console.log(i);
//     size++;
// }

// console.log(size);

//6 Print Only Vowels in apnacollege

// let str ="apnacollege";
// let vowel = "aeiou";
// for(let i of str){
//     if(vowel.includes(i)){
//         console.log(i);
//     }
// }

//7 Print only keys in obj

// let mobile = {
//     brand: "Samsung",
//     model: "S24",
//     price: 80000,
//     color: "Black"
// }
// // mobile.model = "S25"; if update
// for (let i in mobile){
//     console.log(i,mobile[i]);
// }

//string function
// let str ="    js";
// let str2 ="Programming";
// console.log(str.toUpperCase(str));
// console.log(str.trim(str));

// console.log(str2.slice(0,5));
// console.log(str2.replace("P","R"))

//write a Table
// let input =prompt("enter your number: ")
// let n = 10;

// for(i=1; i<=n; i++){
//     console.log(input*i);
// }