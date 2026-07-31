//arrays mutable can be change

// let marks =[97, 82 ,25 ,54 ,56]
// // marks[1]=66 // change value
// console.log(marks);
// console.log(marks.length); //property


// let heroes = ["ironman","hulk","thor","widow","antman","spiderman"]

// // console.log(heroes);

// //loops -> iterable(strings, object, arrays)

// //for
// for(let i = 0; i < heroes.length; i++ ){
//     console.log(heroes[i]);
// }

// //for of
// for(let hero of heroes){
//     console.log(hero);
// }


// let cities =["delhi","pune","gurgaon","mumbai","hyderabad"]

// for(let city of cities){
//     console.log(city.toUpperCase());
// }

//Practice QS 1

// let sum = 0;

// let marks = [85,97,44,37,76,60]

// // for (let i = 0; i < marks.length; i++){
// //     sum = sum + marks[i];
// // }

// for (let mark of marks){
//     sum = sum + mark;
// }

// let result = sum / marks.length;

// console.log(result);


// let items = [250, 645, 300, 900, 50]

// let idx = 0;

// for(let item of items){
//     let price = item / 10;
//     price = item - price;
//     console.log(`value at index ${idx} = ${price}`);
//     idx++;

// }

// for (let i = 0; i < items.length; i++){
//     let price = items[i] / 10;
//     price = items[i] - price;
//     console.log(`indesx ${i} = ${price}`);
// } 

//Array Method

//push method change in original Array

// let foodItems =["potato","apple","licchi","toamto"];

// foodItems.push("chips","burger","paneer");

// console.log(foodItems);

//Pop method change in Original Array and delete in end

// foodItems.pop();

// console.log(foodItems);

//to string convert Original items not Change

// console.log(foodItems.toString());

// let marks =[50, 56, 48, 96, 54];

// console.log(marks);

// console.log(marks.toString());

//Concat Join multiple array not change in original array

// let mu=["thor","spiderman","ironman"];
// let dc=["superman","batman"];
// let ih=["krish","shaktiman"];

// let heroes = mu.concat(dc,ih);
// console.log(heroes);

//unshif method use as push method but add array first and shif work delete items to first

// let mu=["thor","spiderman","ironman"];

// mu.unshift("antman");

// mu.shift();

//slice method

// let mu=["thor","spiderman","ironman","antman","Dr.Strange","widow"];

// console.log(mu);
// console.log(mu.slice(1,5));


//splice method original array change splice(startidx, delcount,newEl1..)

// let arr=[1,2,3,4,5,6,7];
// // arr.splice(2,2,101,102);

// //Add Element
// arr.splice(2,0,101);

// //delete ele
// arr.splice(3, 1);

// //Replace Element
// arr.splice(3,1,101);


//Practice Qs

let companies =["Bloomberg","Microsoft","Uber","google","Ibm","Netflix"];

let delCom = companies.shift();

console.log(companies);

let addCom = companies.splice(1,1,"Ola");

console.log(companies);

let lastAddCom = companies.push("Amazon");

console.log(companies);