
//Print 1-5
// for(let count = 1; count <= 5; count++){
//     console.log("My Name"); //5 execute
// }

//calculate sum of 1 to 5

// let sum = 0;

// for(let i=1; i <= 5; i++){
//     sum = sum + i;
// }

// console.log("sum = ", sum);

// for(let i = 1; i <= 5; i++){
//     console.log("i = ", i); //5 execute
// }
//never execute Infinite loop

//While loop

// let  i=1;
// while(i<=5){
//     console.log("i = ", i);
//     i++;
// }

//do while loop

// let  i=1;
// do{
//     console.log("i = ", i);
//     i++;
// }while(i<=5);

//FOR-OF / for-in loop
//for of loops get Value of string

// let str = "ApnaCollege";

// let size = 0;

// for(let i of str){ //iterator > character
//     console.log("i = ", i);
//     size++;
// }
// console.log("size = ", size);

//for in

// let student ={
//     name: "Saurabh",
//     age: 25,
//     course: "MERN",
//     ispased: true
// }

// for(let key in student){
//     console.log("key = ", key , "value = ", student[key]);
// }

//practice Qs1


// for(let num = 0; num <= 100; num++){
//     if (num % 2 === 0){ // even number condition
//         console.log("even num = ", num);
//     }
// }

//practice Qs2

// let gameNum = 7;

// let userinput = prompt("Guess Your Number : ");

// while(userinput != gameNum){
//     userinput = prompt(" enter wrong Number , Guess the Number again : ");
// }
// console.log("You guessed the correct number");



// strings
// let str = "ApnaCollege";
// let str2 = 'ApnaCollege';

// console.log(str[0]);

//Template Literals
// let specialString = `This is a template literal ${1+2+3}`;
// console.log(specialString);

//string Methods

//to uppercase

// let str = "ApnaCollege";
// str = str.toUpperCase();
// console.log(str);

//to lowercase
// let str = "ApnaCollege";
// str = str.toLowerCase();
// console.log(str);

//trim Method
// let str = "   Apna  College    js   ";
// str = str.trim();
// console.log(str);

//slice method
//str.slice(start, end?) //return part of string
// let str = "01234567";
// str = str.slice(1,6 );
// console.log(str);

//str1.concat(str2)
// let str1 = "ApnaCollege";
// let str2 = "Shraddha";
// str = str1.concat(str2);
// console.log(str);

//str.replace(searchval, newval)
// let str = "hello";
// console.log(str.replace("lo","p"));

//str.charAt(idx)

// let str = "Ilovejs";
// console.log(str.charAt(3))

//Practice Qs3 Prompt the user to enter their full name. 
// Generate a username for them based on the input.. Start username with @, 
// followed by their full name and ending with the fullname length.

// let fullName = prompt("Emter Your full name : ");

// let output = `Your Username is: @${fullName}${fullName.length}`;

// console.log(output);

