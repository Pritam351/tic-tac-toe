//Function
//function defination  
// function myfunction(){
//     console.log("Welcom to MyCollege");
//     console.log("We are learning Js:) ");
// }

// myfunction();

// function myfunction(msg){//parameter -> input
//     console.log(msg);
// }

// myfunction("I love Js");//argument


//funnction -> 2 numbers, sum

// function sum(a, b){
//     console.log(a+b);
// }

// sum(1,2);

//function return

//function params -> like local varriable -> block scope of function

// function sum(x, y){
//     s = x + y;
//     return  s;
// }

// let val = sum (3,4);
// console.log(val);

//sum function

// function sum (a, b){
//     return a+b;
// }
// //Moders Js Arrow Function
// const arrowSum = (a,b ) =>{
//     console.log(a+b);
// };

//Practice Qs
// function vowel(str){
//     let count = 0;
//     let check = "aeiou";
//     for(let char of str){
//         if(check.includes(char)){
//             console.log(char);
//             count++;
//         }
//     }
//     console.log(count);
// }

// vowel("hello");

//forEach Loop in Arrays (is use only for Value pRINT)

//Higher Order Function / Methods
// function As Paramenter , Function as return (like for each function)


// let arr = [1,2,3,4,5];

// arr.forEach(function printVal(val){// val means -> value at each index
//     console.log(val);
// });

// let arr2 = ["pune","delhi","mumbai"]

// arr2.forEach((val)=>{
//     console.log(val.toUpperCase());
// });

//Practice Qs 

// let str = [1,2,3,4,5,6,7,8,9];

// str.forEach((num) => {
//     console.log(num * num);
// });

//some More Array Methods ***

//map method for return value to create new array

// let str = [1,2,3,4,5,6,7,8,9];

// let newArr = str.map((val)=>{
//     // console.log(val);

//     return val;
// });

// console.log(newArr);

// .. filter function

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// let evenArr = arr.filter((val)=>{
//     return val > 3;
// });

// console.log(evenArr);

//Reduce Function multiple input but we need only one value output

// let arr = [1, 2, 3, 4];

// const output = arr.reduce((res, curr) => {
//     return  res + curr;
// })

// console.log(output);

// let arr = [1, 2, 3, 4, ,101, 5];

// const output = arr.reduce((res, curr) => {
// //   if(res> curr){
// //         return res;
// //     }else{
// //         return curr;
// //     }
//     return res<curr ? res: curr;
// })

// console.log(output);


//practice qs

// let arr =[ 100, 87, 89 , 90 , 93 ,95 , 58 , 35 , 77, 99];

// let output = arr.filter((val)=>{
//     return val> 90;
// });

// console.log(output);

//userinput 

let n = prompt("Enter Your Number : ");

let arr = [];

for(let i=1; i<=n; i++){
    arr[i-1] = i;
}

console.log(arr);

const sum = arr.reduce((res, curr) => {
    return  res + curr;
});

console.log(sum);

const mul = arr.reduce((res, curr) => {
    return  res * curr;
});

console.log(mul);
